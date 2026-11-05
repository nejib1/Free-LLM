import tempfile
import json
import sys
import unittest
from pathlib import Path
from threading import Thread
from types import SimpleNamespace
from unittest.mock import patch
from urllib.error import HTTPError
from urllib.request import Request, urlopen

import server


class NewsroomTests(unittest.TestCase):
    def test_seed_catalog_has_35_unverified_sources(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "test.sqlite3"
            server.init_db(path)
            with server.connect_db(path) as db:
                count, enabled, verified = db.execute(
                    "SELECT COUNT(*), SUM(enabled), SUM(feed_url IS NOT NULL) FROM sources WHERE slug <> 'editorial'"
                ).fetchone()
            self.assertEqual(count, 35)
            self.assertEqual(enabled, 0)
            self.assertEqual(verified or 0, 0)

    def test_startup_clears_failed_feed_and_disables_source(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "test.sqlite3"
            server.init_db(path)
            with server.connect_db(path) as db:
                db.execute("""UPDATE sources SET feed_url='https://www.irna.ir/rss', enabled=1, status='error'
                    WHERE slug='irna'""")
            server.init_db(path)
            with server.connect_db(path) as db:
                feed_url, enabled, count = db.execute("""SELECT feed_url, enabled, COUNT(*) OVER ()
                    FROM sources WHERE slug='irna'""").fetchone()
            self.assertIsNone(feed_url)
            self.assertEqual(enabled, 0)
            self.assertEqual(count, 1)

    def test_parse_rss_extracts_link_text_and_date(self):
        xml = """<?xml version='1.0'?><rss><channel><item>
            <title>خبر تازه</title><description>&lt;b&gt;خلاصه&lt;/b&gt; متن</description>
            <link>https://www.irna.ir/news/1</link><pubDate>Wed, 05 Nov 2025 10:00:00 GMT</pubDate>
        </item></channel></rss>""".encode("utf-8")
        item = server.parse_feed(xml, "https://www.irna.ir/rss", "www.irna.ir")[0]
        self.assertEqual(item["title"], "خبر تازه")
        self.assertEqual(item["summary"], "خلاصه متن")
        self.assertEqual(item["url"], "https://www.irna.ir/news/1")
        self.assertTrue(item["published_at"].startswith("2025-11-05T10:00:00"))

    def test_parse_date_rejects_future_publisher_timestamps(self):
        future = (server.datetime.now(server.timezone.utc) + server.timedelta(days=2)).strftime("%a, %d %b %Y %H:%M:%S GMT")
        self.assertIsNone(server.parse_date(future))

    def test_parse_feed_accepts_official_rss_image_and_rejects_unrelated_host(self):
        xml = """<rss><channel>
            <item><title>خبر تصویری</title><link>https://www.yjc.ir/news/1</link>
                <enclosure url="https://cdn.yjcnews.ir/image/1.jpg" type="image/jpeg" /></item>
            <item><title>تصویر نامعتبر</title><link>https://www.yjc.ir/news/2</link>
                <enclosure url="https://example.com/image/2.jpg" type="image/jpeg" /></item>
        </channel></rss>""".encode("utf-8")
        items = server.parse_feed(xml, "https://www.yjc.ir/rss", "www.yjc.ir")
        self.assertEqual(items[0]["image_url"], "https://cdn.yjcnews.ir/image/1.jpg")
        self.assertIsNone(items[1]["image_url"])

    def test_article_page_parser_extracts_excerpt_and_source_image(self):
        page = """<html><head><meta property="og:image" content="/assets/report.jpg"></head>
            <body><nav><p>این متن نباید وارد خلاصه شود و طول کافی هم دارد.</p></nav>
            <article><p>این پاراگراف خبری شامل توضیح کافی دربارهٔ رویداد و جزئیات منتشرشده است.</p>
            <script><p>این متن هم نباید وارد خلاصه شود.</p></script></article></body></html>""".encode("utf-8")
        parsed = server.parse_article_page(page, "https://www.mehrnews.com/news/1", "www.mehrnews.com")
        self.assertIn("پاراگراف خبری", parsed["excerpt"])
        self.assertNotIn("نباید", parsed["excerpt"])
        self.assertEqual(parsed["image_url"], "https://www.mehrnews.com/assets/report.jpg")

    def test_article_page_parser_rejects_external_image_host(self):
        page = b'<meta property="og:image" content="https://example.com/image.jpg">'
        parsed = server.parse_article_page(page, "https://www.irna.ir/news/1", "www.irna.ir")
        self.assertIsNone(parsed["image_url"])

    def test_fingerprint_normalizes_punctuation(self):
        self.assertEqual(server.fingerprint("خبر مهم!"), server.fingerprint("خبر مهم"))

    def test_category_classification_is_rule_based(self):
        self.assertEqual(server.classify("گزارش فوتبال امروز", ""), "فوتبال")
        self.assertEqual(server.classify("رویداد نامرتبط", ""), "اخبار ایران")

    def test_rejects_non_official_and_non_https_urls(self):
        with self.assertRaises(ValueError):
            server.validate_remote_url("http://www.irna.ir/rss", "www.irna.ir")
        with self.assertRaises(ValueError):
            server.validate_remote_url("https://example.com/rss", "www.irna.ir")

    def test_accepts_www_and_apex_redirects_for_same_source(self):
        self.assertTrue(server.host_matches("aftabnews.ir", "www.aftabnews.ir"))
        self.assertTrue(server.host_matches("www.tabnak.ir", "tabnak.ir"))
        self.assertFalse(server.host_matches("example.com", "www.aftabnews.ir"))

    def test_request_url_encodes_persian_path_without_changing_host(self):
        encoded = server.encode_url_for_request("https://borna.news/fa/news/خبر-تازه?q=ایران")
        parsed = server.urllib.parse.urlsplit(encoded)
        self.assertEqual(parsed.hostname, "borna.news")
        self.assertIn("%D8%AE%D8%A8%D8%B1", parsed.path)
        self.assertIn("%D8%A7%DB%8C%D8%B1%D8%A7%D9%86", parsed.query)

    def test_passwords_are_hashed_and_sessions_expire(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "test.sqlite3"
            with patch.object(server, "DB_PATH", path):
                server.init_db(path)
                salt, digest = server.password_digest("a-long-test-password")
                self.assertTrue(server.password_matches("a-long-test-password", salt, digest))
                self.assertFalse(server.password_matches("wrong-password", salt, digest))
                with server.connect_db() as db:
                    cursor = db.execute("INSERT INTO users(username,salt,password_hash) VALUES(?,?,?)",
                                        ("editor", salt, digest))
                    user_id = cursor.lastrowid
                token, _ = server.issue_user_session(user_id)
                self.assertEqual(server.authenticate_token(token)["role"], "member")
                with server.connect_db() as db:
                    stored_hash = db.execute("SELECT token_hash FROM sessions").fetchone()[0]
                    db.execute("UPDATE sessions SET expires_at='2000-01-01T00:00:00+00:00'")
                self.assertNotEqual(stored_hash, token)
                self.assertIsNone(server.authenticate_token(token))

    def test_local_open_model_summarizes_without_remote_ai_environment(self):
        class FakeLlama:
            def __init__(self, **options):
                self.options = options

            def create_chat_completion(self, **options):
                return {"choices": [{"message": {"content": "خلاصهٔ فارسی محلی."}}]}

        with tempfile.TemporaryDirectory() as directory:
            model_path = Path(directory) / "small-model.gguf"
            model_path.write_bytes(b"test-model")
            with patch.object(server, "AI_MODEL_PATH", model_path), \
                    patch.object(server, "AI_BASE_URL", ""), \
                    patch.object(server, "AI_MODEL", ""), \
                    patch.object(server.importlib.util, "find_spec", return_value=object()), \
                    patch.dict(sys.modules, {"llama_cpp": SimpleNamespace(Llama=FakeLlama)}), \
                    patch.object(server, "AI_LOCAL_MODEL", None):
                self.assertEqual(server.ai_mode(), "local")
                summary = server.generate_ai_summary(
                    "تیتر", "این متن نمونه برای اطمینان از کارکرد خلاصه‌ساز محلی تهیه شده است و طول آن از هشتاد نویسه بیشتر است تا شرط اعتبارسنجی ورودی هم به‌درستی بررسی شود.", "127.0.0.30"
                )
            self.assertEqual(summary, "خلاصهٔ فارسی محلی.")

    def test_member_request_approval_and_exclusive_article_permissions(self):
        class QuietHandler(server.Handler):
            def log_message(self, fmt, *args):
                pass

        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "test.sqlite3"
            with patch.object(server, "DB_PATH", path), patch.object(server, "ADMIN_TOKEN", "test-admin-secret"):
                server.init_db(path)
                with server.connect_db() as db:
                    source_id = db.execute("SELECT id FROM sources WHERE slug='irna'").fetchone()[0]
                    db.execute("""INSERT INTO articles(source_id,title,summary,url,fetched_at,category,fingerprint,state)
                        VALUES(?,?,?,?,?,?,?,'published')""",
                        (source_id,"RSS خبر","چکیده","https://www.irna.ir/news/1","2026-11-05T00:00:00+00:00","اخبار ایران",server.fingerprint("RSS خبر")))
                    rss_article_id = db.execute("SELECT id FROM articles WHERE url='https://www.irna.ir/news/1'").fetchone()[0]
                httpd = server.http.server.ThreadingHTTPServer(("127.0.0.1", 0), QuietHandler)
                worker = Thread(target=httpd.serve_forever, daemon=True)
                worker.start()
                base = f"http://127.0.0.1:{httpd.server_port}"

                def call(path, method="GET", token=None, payload=None):
                    headers = {"Content-Type": "application/json"}
                    if token:
                        headers["Authorization"] = f"Bearer {token}"
                    data = json.dumps(payload).encode() if payload is not None else None
                    request = Request(base + path, data=data, headers=headers, method=method)
                    try:
                        with urlopen(request, timeout=5) as response:
                            return response.status, json.loads(response.read())
                    except HTTPError as error:
                        try:
                            return error.code, json.loads(error.read())
                        finally:
                            error.close()

                try:
                    status, registration = call("/api/auth/register", "POST", payload={"username":"reporter","password":"a-long-secure-password"})
                    self.assertEqual(status, 201)
                    token = registration["token"]
                    self.assertEqual(call("/api/staff/articles", token=token)[0], 403)
                    self.assertEqual(call("/api/auth/assistant-request", "POST", token, {"message":"همکاری تحریریه"})[0], 201)
                    status, requests = call("/api/admin/assistant-requests", token="test-admin-secret")
                    self.assertEqual(status, 200)
                    self.assertEqual(len(requests), 1)
                    request_id = requests[0]["id"]
                    self.assertEqual(call(f"/api/admin/assistant-requests/{request_id}/decision", "POST", "test-admin-secret", {"decision":"approve"})[0], 200)
                    self.assertEqual(call("/api/auth/me", token=token)[1]["user"]["role"], "assistant")
                    status, created = call("/api/staff/articles", "POST", token, {
                        "title":"خبر اختصاصی", "summary":"خلاصه", "body":"متن کامل اختصاصی", "category":"اخبار ایران"
                    })
                    self.assertEqual(status, 201)
                    exclusive_id = created["id"]
                    self.assertEqual(len(call("/api/staff/articles", token=token)[1]), 1)
                    self.assertEqual(call(f"/api/staff/articles/{rss_article_id}", "DELETE", token)[0], 403)
                    self.assertEqual(call(f"/api/staff/articles/{exclusive_id}", "PUT", token, {
                        "title":"ویرایش‌شده", "summary":"خلاصه", "body":"متن کامل", "category":"فرهنگ و هنر"
                    })[0], 200)
                    self.assertEqual(call(f"/api/staff/articles/{exclusive_id}", "DELETE", token)[0], 200)
                    self.assertEqual(call(f"/api/staff/articles/{rss_article_id}", "DELETE", "test-admin-secret")[0], 200)
                    self.assertEqual(call("/api/auth/logout", "POST", token, {})[0], 200)
                    self.assertEqual(call("/api/auth/me", token=token)[0], 401)
                finally:
                    httpd.shutdown()
                    httpd.server_close()
                    worker.join(timeout=5)

    def test_fetch_error_is_persisted(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "test.sqlite3"
            with patch.object(server, "DB_PATH", path):
                server.init_db(path)
                with server.connect_db() as db:
                    db.execute("UPDATE sources SET feed_url='https://www.irna.ir/rss' WHERE slug='irna'")
                    source_id = db.execute("SELECT id FROM sources WHERE slug='irna'").fetchone()[0]
                with patch.object(server, "fetch_url", side_effect=ValueError("feed unavailable")):
                    with self.assertRaisesRegex(ValueError, "feed unavailable"):
                        server.fetch_source(source_id)
                with server.connect_db() as db:
                    status, error = db.execute("SELECT status, last_error FROM sources WHERE id=?", (source_id,)).fetchone()
            self.assertEqual(status, "error")
            self.assertEqual(error, "feed unavailable")

    def test_discovery_error_is_persisted(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "test.sqlite3"
            with patch.object(server, "DB_PATH", path):
                server.init_db(path)
                with server.connect_db() as db:
                    source_id = db.execute("SELECT id FROM sources WHERE slug='irna'").fetchone()[0]
                server.record_source_error(source_id, ValueError("no official feed"))
                with server.connect_db() as db:
                    status, error = db.execute("SELECT status, last_error FROM sources WHERE id=?", (source_id,)).fetchone()
            self.assertEqual(status, "error")
            self.assertEqual(error, "no official feed")


if __name__ == "__main__":
    unittest.main()
