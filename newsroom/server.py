#!/usr/bin/env python3
"""Small, dependency-free RSS news reader. Run with: python3 newsroom/server.py"""

from __future__ import annotations

import email.utils
import hashlib
import hmac
import html
import http.server
import importlib.util
import ipaddress
import json
import os
import re
import secrets
import socket
import sqlite3
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parent
DB_PATH = Path(os.environ.get("NEWS_DB_PATH", ROOT / "newsroom.sqlite3"))
HOST = os.environ.get("NEWS_HOST", "127.0.0.1")
PORT = int(os.environ.get("NEWS_PORT", "8765"))
ADMIN_TOKEN_FILE = Path(os.environ.get("NEWS_ADMIN_TOKEN_FILE", ROOT / ".admin-key"))
ADMIN_TOKEN = os.environ.get("NEWS_ADMIN_TOKEN", "")
if not ADMIN_TOKEN and ADMIN_TOKEN_FILE.is_file():
    ADMIN_TOKEN = ADMIN_TOKEN_FILE.read_text(encoding="utf-8").strip()
AI_BASE_URL = os.environ.get("NEWS_AI_BASE_URL", "").rstrip("/")
AI_MODEL = os.environ.get("NEWS_AI_MODEL", "")
AI_API_KEY = os.environ.get("NEWS_AI_API_KEY", "")
AI_MODEL_PATH = Path(os.path.expanduser(os.environ.get(
    "NEWS_AI_MODEL_PATH",
    "~/.cache/roydad/models/gemma-3-270m-it-qat-Q4_0.gguf",
)))
USER_AGENT = "IranNewsReader/0.1 (+RSS feed reader; contact: local administrator)"
NEWS_PAGE_SIZE = 20
AI_REQUESTS: dict[str, float] = {}
PREVIEW_REQUESTS: dict[str, float] = {}
RATE_LOCK = threading.Lock()
AI_MODEL_LOCK = threading.Lock()
AI_LOCAL_MODEL = None
AUTH_ATTEMPTS: dict[str, list[float]] = {}

# Only official homepages supplied for this project are seeded. Feed URLs are
# discovered from each site's own HTML and are never guessed.
SOURCE_ROWS = [
    ("irna", "ایرنا", "https://www.irna.ir", "general"),
    ("isna", "ایسنا", "https://www.isna.ir", "general"),
    ("mehr", "خبرگزاری مهر", "https://www.mehrnews.com", "general"),
    ("tasnim", "تسنیم", "https://www.tasnimnews.com", "general"),
    ("fars", "فارس", "https://www.farsnews.ir", "general"),
    ("ilna", "ایلنا", "https://www.ilna.ir", "general"),
    ("yjc", "باشگاه خبرنگاران جوان", "https://www.yjc.ir", "general"),
    ("iribnews", "صداوسیما", "https://www.iribnews.ir", "general"),
    ("snn", "خبرگزاری دانشجو", "https://www.snn.ir", "general"),
    ("borna", "خبرگزاری برنا", "https://www.borna.news", "general"),
    ("ana", "خبرگزاری آنا", "https://ana.ir", "general"),
    ("mizan", "خبرگزاری میزان", "https://www.mizanonline.ir", "general"),
    ("imna", "ایمنا", "https://www.imna.ir", "general"),
    ("shana", "شانا", "https://www.shana.ir", "general"),
    ("iqna", "ایکنا", "https://iqna.ir", "general"),
    ("khabaronline", "خبرآنلاین", "https://www.khabaronline.ir", "general"),
    ("tabnak", "تابناک", "https://www.tabnak.ir", "general"),
    ("asriran", "عصر ایران", "https://www.asriran.com", "general"),
    ("fararu", "فرارو", "https://fararu.com", "general"),
    ("entekhab", "انتخاب", "https://www.entekhab.ir", "general"),
    ("mashregh", "مشرق نیوز", "https://www.mashreghnews.ir", "general"),
    ("alef", "الف", "https://www.alef.ir", "general"),
    ("aftabnews", "آفتاب نیوز", "https://www.aftabnews.ir", "general"),
    ("eghtesadonline", "اقتصاد آنلاین", "https://www.eghtesadonline.com", "economy"),
    ("eghtesadnews", "اقتصادنیوز", "https://www.eghtesadnews.com", "economy"),
    ("donya-e-eqtesad", "دنیای اقتصاد", "https://donya-e-eqtesad.com", "economy"),
    ("hamshahrionline", "همشهری آنلاین", "https://www.hamshahrionline.ir", "general"),
    ("jamejamonline", "جام جم آنلاین", "https://jamejamonline.ir", "general"),
    ("parsine", "پارسینه", "https://www.parsine.com", "general"),
    ("nournews", "نورنیوز", "https://nournews.ir", "general"),
    ("varzesh3", "ورزش سه", "https://www.varzesh3.com", "sports"),
    ("digiato", "دیجیاتو", "https://digiato.com", "technology"),
    ("zoomit", "زومیت", "https://www.zoomit.ir", "technology"),
    ("defapress", "دفاع پرس", "https://defapress.ir", "general"),
    ("shabestan", "شبستان", "https://www.shabestan.news", "general"),
]

CATEGORIES = {
    "سیاست داخلی": ("دولت", "مجلس", "رئیس جمهور", "انتخابات", "استاندار"),
    "سیاست خارجی": ("دیپلماسی", "وزیر خارجه", "تحریم", "سفیر", "مذاکره"),
    "اقتصاد": ("اقتصاد", "تورم", "تولید", "صنعت", "تجارت"),
    "بازار و ارز": ("دلار", "ارز", "بورس", "طلا", "سکه", "بازار"),
    "فناوری": ("فناوری", "دیجیتال", "گوشی", "اینترنت", "نرم افزار"),
    "هوش مصنوعی": ("هوش مصنوعی", "یادگیری ماشین", "مدل زبانی"),
    "علم و دانشگاه": ("دانشگاه", "پژوهش", "علمی", "دانشجو"),
    "اجتماعی": ("اجتماعی", "جامعه", "خانواده", "تامین اجتماعی"),
    "حوادث": ("حادثه", "تصادف", "آتش سوزی", "زلزله", "سیل"),
    "فرهنگ و هنر": ("فرهنگ", "هنر", "کتاب", "موسیقی", "نمایشگاه"),
    "سینما": ("سینما", "فیلم", "بازیگر", "جشنواره فیلم"),
    "ورزش": ("ورزش", "مسابقه", "قهرمانی", "لیگ"),
    "فوتبال": ("فوتبال", "پرسپولیس", "استقلال", "تیم ملی"),
    "سلامت": ("سلامت", "بیمار", "درمان", "پزشکی", "دارو"),
    "محیط زیست": ("محیط زیست", "آلودگی", "حیات وحش", "خشکسالی"),
    "خودرو": ("خودرو", "خودروساز", "ماشین", "خودروهای"),
    "آموزش": ("آموزش", "مدرسه", "امتحان", "کنکور"),
}
IMAGE_CDNS = {
    "mehrnews.com": {"media.mehrnews.com"},
    "yjc.ir": {"cdn.yjcnews.ir"},
}
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"}


def connect_db(path: Path | None = None) -> sqlite3.Connection:
    path = path or DB_PATH
    db = sqlite3.connect(path, timeout=10, factory=ClosingSQLiteConnection)
    db.row_factory = sqlite3.Row
    db.execute("PRAGMA foreign_keys = ON")
    return db


class ClosingSQLiteConnection(sqlite3.Connection):
    def __exit__(self, exc_type, exc_value, traceback):
        try:
            return super().__exit__(exc_type, exc_value, traceback)
        finally:
            self.close()


def init_db(path: Path = DB_PATH) -> None:
    with connect_db(path) as db:
        db.executescript("""
            CREATE TABLE IF NOT EXISTS sources (
                id INTEGER PRIMARY KEY,
                slug TEXT NOT NULL UNIQUE,
                name TEXT NOT NULL,
                site_url TEXT NOT NULL,
                category TEXT NOT NULL,
                feed_url TEXT,
                enabled INTEGER NOT NULL DEFAULT 0,
                interval_minutes INTEGER NOT NULL DEFAULT 5,
                publication_mode TEXT NOT NULL DEFAULT 'review',
                status TEXT NOT NULL DEFAULT 'unverified',
                last_success TEXT,
                last_error TEXT,
                last_test TEXT,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS articles (
                id INTEGER PRIMARY KEY,
                source_id INTEGER NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
                title TEXT NOT NULL,
                summary TEXT NOT NULL DEFAULT '',
                url TEXT NOT NULL,
                published_at TEXT,
                fetched_at TEXT NOT NULL,
                category TEXT NOT NULL,
                fingerprint TEXT NOT NULL,
                image_url TEXT,
                og_image_url TEXT,
                source_excerpt TEXT,
                source_preview_at TEXT,
                ai_summary TEXT,
                featured INTEGER NOT NULL DEFAULT 0,
                exclusive INTEGER NOT NULL DEFAULT 0,
                body TEXT NOT NULL DEFAULT '',
                created_by INTEGER REFERENCES users(id),
                state TEXT NOT NULL DEFAULT 'pending',
                UNIQUE(source_id, url)
            );
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY,
                username TEXT NOT NULL UNIQUE COLLATE NOCASE,
                salt TEXT NOT NULL,
                password_hash TEXT NOT NULL,
                role TEXT NOT NULL DEFAULT 'member' CHECK(role IN ('member','assistant')),
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                last_login TEXT
            );
            CREATE TABLE IF NOT EXISTS sessions (
                token_hash TEXT PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                expires_at TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS assistant_requests (
                id INTEGER PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                message TEXT NOT NULL DEFAULT '',
                status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','approved','rejected')),
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                reviewed_at TEXT,
                reviewed_by TEXT
            );
            CREATE INDEX IF NOT EXISTS articles_published_idx ON articles(state, published_at DESC);
            CREATE INDEX IF NOT EXISTS articles_fingerprint_idx ON articles(fingerprint);
            CREATE INDEX IF NOT EXISTS sessions_expiry_idx ON sessions(expires_at);
            CREATE UNIQUE INDEX IF NOT EXISTS assistant_requests_pending_user_idx
                ON assistant_requests(user_id) WHERE status='pending';
        """)
        columns = {row["name"] for row in db.execute("PRAGMA table_info(articles)")}
        additions = {
            "image_url": "TEXT",
            "og_image_url": "TEXT",
            "source_excerpt": "TEXT",
            "source_preview_at": "TEXT",
            "ai_summary": "TEXT",
            "featured": "INTEGER NOT NULL DEFAULT 0",
            "exclusive": "INTEGER NOT NULL DEFAULT 0",
            "body": "TEXT NOT NULL DEFAULT ''",
            "created_by": "INTEGER REFERENCES users(id)",
        }
        for column, declaration in additions.items():
            if column not in columns:
                db.execute(f"ALTER TABLE articles ADD COLUMN {column} {declaration}")
        db.execute("""UPDATE articles SET published_at=NULL
            WHERE julianday(published_at) > julianday('now', '+5 minutes')""")
        db.execute("UPDATE sources SET feed_url=NULL, enabled=0 WHERE status='error'")
        db.executemany("""
            INSERT OR IGNORE INTO sources (slug, name, site_url, category, interval_minutes)
            VALUES (?, ?, ?, ?, ?)
        """, [(*row, 10 if row[3] == "technology" else 5) for row in SOURCE_ROWS])
        db.execute("""INSERT OR IGNORE INTO sources (slug, name, site_url, category, enabled, status)
            VALUES ('editorial', 'رویداد', 'https://roydad.invalid', 'editorial', 0, 'active')""")


def clean_text(value: str) -> str:
    value = re.sub(r"<[^>]*>", " ", value or "")
    value = html.unescape(value)
    return re.sub(r"\s+", " ", value).strip()


def rss_image(entry: ET.Element, base_url: str, allowed_host: str) -> str | None:
    source_domain = allowed_host.lower().rstrip(".").removeprefix("www.")
    allowed_cdn_hosts = IMAGE_CDNS.get(source_domain, set())
    for node in entry.iter():
        tag = local_name(node.tag)
        mime = node.attrib.get("type", "").lower()
        candidate = ""
        if tag in ("enclosure", "thumbnail", "content"):
            candidate = node.attrib.get("url", "")
            if not candidate or (tag == "enclosure" and not mime.startswith("image/")):
                continue
            if mime and not mime.startswith("image/"):
                continue
        elif tag == "link" and node.attrib.get("rel") == "enclosure" and mime.startswith("image/"):
            candidate = node.attrib.get("href", "")
        if not candidate:
            continue
        url = urllib.parse.urljoin(base_url, candidate.strip())
        parsed = urllib.parse.urlsplit(url)
        if valid_image_url(url, allowed_host, allowed_cdn_hosts):
            return url
    return None


def valid_image_url(url: str, allowed_host: str, allowed_cdn_hosts: set[str] | None = None) -> bool:
    parsed = urllib.parse.urlsplit(url)
    image_host = (parsed.hostname or "").lower().rstrip(".")
    source_domain = allowed_host.lower().rstrip(".").removeprefix("www.")
    cdn_hosts = allowed_cdn_hosts if allowed_cdn_hosts is not None else IMAGE_CDNS.get(source_domain, set())
    return (parsed.scheme == "https" and (host_matches(image_host, allowed_host) or image_host in cdn_hosts)
            and Path(parsed.path).suffix.lower() in IMAGE_EXTENSIONS)


class ArticlePageParser(HTMLParser):
    skipped_tags = {"script", "style", "nav", "header", "footer", "noscript", "svg"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.paragraphs: list[str] = []
        self.og_image = ""
        self.skip_depth = 0
        self.in_paragraph = False
        self.current_paragraph: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = {key.lower(): value or "" for key, value in attrs}
        if tag.lower() == "meta":
            key = attributes.get("property", "").lower()
            if key == "og:image" and not self.og_image:
                self.og_image = attributes.get("content", "")
        if tag.lower() in self.skipped_tags:
            self.skip_depth += 1
        elif tag.lower() == "p" and self.skip_depth == 0:
            self.in_paragraph = True
            self.current_paragraph = []

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() in self.skipped_tags and self.skip_depth:
            self.skip_depth -= 1
        elif tag.lower() == "p" and self.in_paragraph:
            paragraph = clean_text(" ".join(self.current_paragraph))
            if len(paragraph) > 35:
                self.paragraphs.append(paragraph)
            self.in_paragraph = False
            self.current_paragraph = []

    def handle_data(self, data: str) -> None:
        if self.in_paragraph and not self.skip_depth:
            self.current_paragraph.append(data)


def parse_article_page(content: bytes, page_url: str, allowed_host: str) -> dict[str, str | None]:
    parser = ArticlePageParser()
    parser.feed(content.decode("utf-8", errors="replace"))
    excerpt = "\n".join(parser.paragraphs)
    image_url = urllib.parse.urljoin(page_url, parser.og_image) if parser.og_image else None
    if not page_image_allowed(image_url, allowed_host):
        image_url = None
    return {
        "excerpt": excerpt[:8000],
        "image_url": image_url,
    }


def page_image_allowed(url: str | None, allowed_host: str) -> bool:
    if not url:
        return False
    source_domain = allowed_host.lower().rstrip(".").removeprefix("www.")
    return valid_image_url(url, allowed_host, IMAGE_CDNS.get(source_domain, set()))


class NewsroomRequestError(Exception):
    def __init__(self, status: int, message: str):
        super().__init__(message)
        self.status = status


def load_article_preview(article_id: int, client_ip: str) -> dict[str, str | None]:
    with connect_db() as db:
        article = db.execute("""SELECT a.id, a.url, a.source_excerpt, a.og_image_url, a.source_preview_at,
            s.site_url FROM articles a JOIN sources s ON s.id=a.source_id WHERE a.id=? AND a.state='published'""",
            (article_id,)).fetchone()
    if not article:
        raise NewsroomRequestError(404, "خبر پیدا نشد.")
    now = datetime.now(timezone.utc)
    if article["source_preview_at"]:
        checked_at = datetime.fromisoformat(article["source_preview_at"])
        if (now - checked_at).total_seconds() < 21_600:
            return {"excerpt": article["source_excerpt"], "image_url": article["og_image_url"]}

    allowed_host = urllib.parse.urlsplit(article["site_url"]).hostname or ""
    throttle_key = f"{client_ip}:{allowed_host}"
    with RATE_LOCK:
        last_request = PREVIEW_REQUESTS.get(throttle_key, 0)
        if time.monotonic() - last_request < 5:
            raise NewsroomRequestError(429, "برای رعایت محدودیت رسانه، چند ثانیه بعد دوباره تلاش کنید.")
        PREVIEW_REQUESTS[throttle_key] = time.monotonic()
    content, final_url, content_type = fetch_url(article["url"], allowed_host)
    if "html" not in content_type:
        raise NewsroomRequestError(422, "صفحهٔ منبع HTML قابل‌خواندن ارائه نکرد.")
    preview = parse_article_page(content, final_url, allowed_host)
    with connect_db() as db:
        db.execute("""UPDATE articles SET source_excerpt=?, og_image_url=?, source_preview_at=? WHERE id=?""",
                   (preview["excerpt"], preview["image_url"], now.isoformat(), article_id))
    return preview


def generate_ai_summary(title: str, excerpt: str, client_ip: str) -> str:
    mode = ai_mode()
    if not mode:
        raise NewsroomRequestError(503, "مدل خلاصه‌ساز محلی در دسترس نیست.")
    if not excerpt or len(excerpt.strip()) < 80:
        raise NewsroomRequestError(422, "متن کافی از صفحهٔ اصلی برای خلاصه‌سازی پیدا نشد.")
    with RATE_LOCK:
        last_request = AI_REQUESTS.get(client_ip, 0)
        if time.monotonic() - last_request < 20:
            raise NewsroomRequestError(429, "برای جلوگیری از مصرف ناخواسته، کمی بعد دوباره خلاصه‌سازی کنید.")
        AI_REQUESTS[client_ip] = time.monotonic()
    messages = [
        {"role": "system", "content": "به فارسی و فقط بر اساس متن منبع، خلاصه‌ای دقیق در ۲ تا ۴ جمله بنویس. هیچ نام، عدد، علت یا نتیجه‌ای را حدس نزن. اگر متن ناقص یا ادعایی تأییدنشده است، صریح بگو."},
        {"role": "user", "content": f"تیتر: {title}\n\nمتن قابل‌خواندن از منبع:\n{excerpt[:6000]}"},
    ]
    if mode == "local":
        global AI_LOCAL_MODEL
        try:
            with AI_MODEL_LOCK:
                if AI_LOCAL_MODEL is None:
                    from llama_cpp import Llama
                    AI_LOCAL_MODEL = Llama(
                        model_path=str(AI_MODEL_PATH),
                        n_ctx=4096,
                        n_batch=128,
                        n_threads=max(1, min(4, os.cpu_count() or 1)),
                        n_gpu_layers=0,
                        use_mmap=True,
                        verbose=False,
                    )
                payload = AI_LOCAL_MODEL.create_chat_completion(
                    messages=messages, temperature=0.1, max_tokens=220, repeat_penalty=1.05,
                )
            summary = payload["choices"][0]["message"]["content"].strip()
        except Exception as exc:
            raise NewsroomRequestError(502, "مدل محلی نتوانست این خبر را خلاصه کند.") from exc
    else:
        parsed_base = urllib.parse.urlsplit(AI_BASE_URL)
        if parsed_base.scheme != "https" and parsed_base.hostname not in ("localhost", "127.0.0.1", "::1"):
            raise NewsroomRequestError(503, "نشانی سرویس AI باید HTTPS یا یک سرویس محلی باشد.")
        endpoint = AI_BASE_URL if AI_BASE_URL.endswith("/chat/completions") else AI_BASE_URL + "/chat/completions"
        body = json.dumps({"model": AI_MODEL, "temperature": 0.1, "max_tokens": 240, "messages": messages}).encode("utf-8")
        headers = {"Content-Type": "application/json"}
        if AI_API_KEY:
            headers["Authorization"] = f"Bearer {AI_API_KEY}"
        request = urllib.request.Request(endpoint, data=body, headers=headers, method="POST")
        try:
            with urllib.request.urlopen(request, timeout=40) as response:
                payload = json.loads(response.read(512_001))
        except (OSError, urllib.error.URLError, json.JSONDecodeError) as exc:
            raise NewsroomRequestError(502, "سرویس AI پاسخ معتبر نداد؛ تنظیمات اتصال را بررسی کنید.") from exc
        if len(json.dumps(payload)) > 512_000:
            raise NewsroomRequestError(502, "پاسخ سرویس AI بیش از حد بزرگ بود.")
        try:
            summary = payload["choices"][0]["message"]["content"].strip()
        except (KeyError, IndexError, TypeError, AttributeError) as exc:
            raise NewsroomRequestError(502, "ساختار پاسخ سرویس AI معتبر نیست.") from exc
    if not summary:
        raise NewsroomRequestError(502, "سرویس AI خلاصه‌ای برنگرداند.")
    return summary[:1800]


def ai_mode() -> str | None:
    if AI_MODEL_PATH.is_file() and importlib.util.find_spec("llama_cpp"):
        return "local"
    if AI_BASE_URL and AI_MODEL:
        return "remote"
    return None


def fingerprint(title: str) -> str:
    normalized = re.sub(r"[\W_]+", "", title.casefold(), flags=re.UNICODE)
    return hashlib.sha256(normalized.encode("utf-8")).hexdigest()


def classify(title: str, summary: str) -> str:
    text = f"{title} {summary}".casefold()
    for category, terms in CATEGORIES.items():
        if any(term in text for term in terms):
            return category
    return "اخبار ایران"


def parse_date(value: str | None) -> str | None:
    if not value:
        return None
    try:
        parsed = email.utils.parsedate_to_datetime(value)
    except (TypeError, ValueError, OverflowError):
        try:
            parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
        except ValueError:
            return None
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    normalized = parsed.astimezone(timezone.utc)
    if normalized > datetime.now(timezone.utc) + timedelta(minutes=5):
        return None
    return normalized.isoformat()


def local_name(tag: str) -> str:
    return tag.rsplit("}", 1)[-1].lower()


def parse_feed(content: bytes, base_url: str, allowed_host: str) -> list[dict[str, str | None]]:
    root = ET.fromstring(content)
    entries = [node for node in root.iter() if local_name(node.tag) in ("item", "entry")]
    articles = []
    for entry in entries:
        fields: dict[str, list[ET.Element]] = {}
        for node in entry.iter():
            fields.setdefault(local_name(node.tag), []).append(node)

        def field(*names: str) -> str:
            for name in names:
                nodes = fields.get(name, [])
                if nodes and nodes[0].text:
                    return clean_text(nodes[0].text)
            return ""

        link = ""
        for node in fields.get("link", []):
            candidate = node.attrib.get("href") or node.text or ""
            if candidate:
                link = urllib.parse.urljoin(base_url, candidate.strip())
                if node.attrib.get("rel", "alternate") == "alternate":
                    break
        if not link:
            continue
        parsed = urllib.parse.urlsplit(link)
        if parsed.scheme != "https" or not host_matches(parsed.hostname or "", allowed_host):
            continue
        title = field("title")
        if not title:
            continue
        articles.append({
            "title": title[:500],
            "summary": field("description", "summary", "encoded", "content")[:2000],
            "url": link,
            "published_at": parse_date(field("pubdate", "published", "updated", "date")),
            "image_url": rss_image(entry, base_url, allowed_host),
        })
    return articles


def host_matches(host: str, allowed_host: str) -> bool:
    host_base = host.lower().rstrip(".").removeprefix("www.")
    allowed_base = allowed_host.lower().rstrip(".").removeprefix("www.")
    return host_base == allowed_base or host_base.endswith("." + allowed_base)


def validate_remote_url(url: str, allowed_host: str) -> None:
    parsed = urllib.parse.urlsplit(url)
    if parsed.scheme != "https" or not parsed.hostname or not host_matches(parsed.hostname, allowed_host):
        raise ValueError("آدرس باید HTTPS و روی دامنهٔ رسمی همین منبع باشد.")
    try:
        addresses = socket.getaddrinfo(parsed.hostname, 443, type=socket.SOCK_STREAM)
    except OSError as exc:
        raise ValueError("دامنه قابل دسترسی نیست.") from exc
    if not addresses or any(not ipaddress.ip_address(info[4][0]).is_global for info in addresses):
        raise ValueError("آدرس مقصد عمومی نیست و برای امنیت مسدود شد.")


def encode_url_for_request(url: str) -> str:
    return urllib.parse.quote(url, safe=":/?#[]@!$&'()*+,;=%")


class SameDomainRedirect(urllib.request.HTTPRedirectHandler):
    def __init__(self, allowed_host: str):
        super().__init__()
        self.allowed_host = allowed_host

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        validate_remote_url(newurl, self.allowed_host)
        return super().redirect_request(req, fp, code, msg, headers, encode_url_for_request(newurl))


def fetch_url(url: str, allowed_host: str) -> tuple[bytes, str, str]:
    validate_remote_url(url, allowed_host)
    opener = urllib.request.build_opener(SameDomainRedirect(allowed_host))
    request = urllib.request.Request(encode_url_for_request(url), headers={"User-Agent": USER_AGENT, "Accept": "text/html,application/atom+xml,application/rss+xml,application/xml;q=0.9,*/*;q=0.5"})
    with opener.open(request, timeout=12) as response:
        content = response.read(2_000_001)
        if len(content) > 2_000_000:
            raise ValueError("پاسخ سایت از سقف ۲ مگابایت بیشتر بود.")
        return content, response.geturl(), response.headers.get_content_type()


class FeedLinkParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() != "link":
            return
        attributes = {key.lower(): value or "" for key, value in attrs}
        rel = set(attributes.get("rel", "").lower().split())
        mime = attributes.get("type", "").lower().split(";", 1)[0].strip()
        if "alternate" in rel and mime in ("application/rss+xml", "application/atom+xml", "application/xml", "text/xml"):
            self.links.append(attributes.get("href", ""))


def discover_feed(site_url: str, allowed_host: str) -> tuple[str, int]:
    content, page_url, content_type = fetch_url(site_url, allowed_host)
    if "html" not in content_type:
        raise ValueError("صفحهٔ اصلی به‌جای HTML پاسخ معتبر نداد.")
    parser = FeedLinkParser()
    parser.feed(content.decode("utf-8", errors="replace"))
    if not parser.links:
        raise ValueError("در HTML رسمی سایت لینک RSS یا Atom اعلام نشده است.")
    errors = []
    for href in parser.links[:8]:
        candidate = urllib.parse.urljoin(page_url, href)
        try:
            feed_content, final_url, _ = fetch_url(candidate, allowed_host)
            entries = parse_feed(feed_content, final_url, allowed_host)
            return final_url, len(entries)
        except (OSError, ValueError, ET.ParseError, urllib.error.URLError) as exc:
            errors.append(str(exc))
    raise ValueError("فیدهای اعلام‌شده قابل تأیید نبودند: " + (errors[-1] if errors else "پاسخ نامعتبر"))


def save_articles(db: sqlite3.Connection, source: sqlite3.Row, items: list[dict[str, str | None]]) -> int:
    inserted = 0
    now = datetime.now(timezone.utc).isoformat()
    for item in items:
        state = "published" if source["publication_mode"] == "auto" else "pending"
        cursor = db.execute("""
            INSERT OR IGNORE INTO articles
            (source_id, title, summary, url, published_at, fetched_at, category, fingerprint, image_url, state)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (source["id"], item["title"], item["summary"], item["url"], item["published_at"], now,
              classify(item["title"] or "", item["summary"] or ""), fingerprint(item["title"] or ""),
              item.get("image_url"), state))
        inserted += cursor.rowcount
        if not cursor.rowcount and item.get("image_url"):
            db.execute("UPDATE articles SET image_url=? WHERE source_id=? AND url=? AND image_url IS NULL",
                       (item["image_url"], source["id"], item["url"]))
    return inserted


def record_source_error(source_id: int, error: Exception) -> None:
    with connect_db() as db:
        db.execute("UPDATE sources SET last_error=?, last_test=?, status='error' WHERE id=?",
                   (str(error)[:500], datetime.now(timezone.utc).isoformat(), source_id))


def fetch_source(source_id: int) -> int:
    with connect_db() as db:
        source = db.execute("SELECT * FROM sources WHERE id = ?", (source_id,)).fetchone()
        if not source or not source["feed_url"]:
            raise ValueError("برای این منبع هنوز فید تأییدشده ثبت نشده است.")
        try:
            feed_content, final_url, _ = fetch_url(source["feed_url"], urllib.parse.urlsplit(source["site_url"]).hostname or "")
            items = parse_feed(feed_content, final_url, urllib.parse.urlsplit(source["site_url"]).hostname or "")
            added = save_articles(db, source, items)
            db.execute("UPDATE sources SET last_success = ?, last_error = NULL, status = 'active' WHERE id = ?",
                       (datetime.now(timezone.utc).isoformat(), source_id))
            return added
        except Exception as exc:
            db.execute("UPDATE sources SET last_error = ?, status = 'error' WHERE id = ?", (str(exc)[:500], source_id))
            db.commit()
            raise


def admin_authorized(handler: http.server.BaseHTTPRequestHandler) -> bool:
    if not ADMIN_TOKEN:
        handler.send_json(503, {"error": "مدیریت قفل است؛ ابتدا NEWS_ADMIN_TOKEN را تنظیم کنید."})
        return False
    supplied = handler.headers.get("Authorization", "")
    if not hmac.compare_digest(supplied, f"Bearer {ADMIN_TOKEN}"):
        handler.send_json(401, {"error": "کلید مدیریت نامعتبر است."})
        return False
    return True


def password_digest(password: str, salt: bytes | None = None) -> tuple[str, str]:
    salt = salt or secrets.token_bytes(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, 310_000)
    return salt.hex(), digest.hex()


def password_matches(password: str, salt_hex: str, digest_hex: str) -> bool:
    _, candidate = password_digest(password, bytes.fromhex(salt_hex))
    return hmac.compare_digest(candidate, digest_hex)


def issue_user_session(user_id: int) -> tuple[str, str]:
    token = secrets.token_urlsafe(32)
    expires_at = (datetime.now(timezone.utc) + timedelta(days=14)).isoformat()
    token_hash = hashlib.sha256(token.encode("utf-8")).hexdigest()
    with connect_db() as db:
        db.execute("INSERT INTO sessions(token_hash,user_id,expires_at) VALUES(?,?,?)", (token_hash, user_id, expires_at))
    return token, expires_at


def authenticate_token(token: str | None) -> dict | None:
    if not token:
        return None
    if ADMIN_TOKEN and hmac.compare_digest(token, ADMIN_TOKEN):
        return {"id": None, "username": "مدیر", "role": "admin"}
    token_hash = hashlib.sha256(token.encode("utf-8")).hexdigest()
    with connect_db() as db:
        row = db.execute("""SELECT u.id, u.username, u.role, s.expires_at
            FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=?""", (token_hash,)).fetchone()
        if not row:
            return None
        if datetime.fromisoformat(row["expires_at"]) <= datetime.now(timezone.utc):
            db.execute("DELETE FROM sessions WHERE token_hash=?", (token_hash,))
            return None
        return {"id": row["id"], "username": row["username"], "role": row["role"]}


def request_identity(handler: http.server.BaseHTTPRequestHandler) -> dict | None:
    authorization = handler.headers.get("Authorization", "")
    scheme, _, token = authorization.partition(" ")
    return authenticate_token(token.strip()) if scheme.lower() == "bearer" else None


def staff_authorized(handler: http.server.BaseHTTPRequestHandler) -> dict | None:
    identity = request_identity(handler)
    if not identity:
        handler.send_json(401, {"error": "ابتدا وارد حساب کاربری شوید."})
        return None
    if identity["role"] not in ("admin", "assistant"):
        handler.send_json(403, {"error": "برای دسترسی تحریریه، درخواست دستیار باید تأیید شود."})
        return None
    return identity


def allow_auth_attempt(kind: str, client_ip: str, limit: int, window_seconds: int) -> bool:
    now = time.monotonic()
    key = f"{kind}:{client_ip}"
    with RATE_LOCK:
        attempts = [stamp for stamp in AUTH_ATTEMPTS.get(key, []) if now - stamp < window_seconds]
        if len(attempts) >= limit:
            AUTH_ATTEMPTS[key] = attempts
            return False
        attempts.append(now)
        AUTH_ATTEMPTS[key] = attempts
        return True


class Handler(http.server.BaseHTTPRequestHandler):
    server_version = "Newsroom/0.1"

    def send_json(self, status: int, payload: object) -> None:
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        self.wfile.write(data)

    def read_json(self) -> dict:
        length = int(self.headers.get("Content-Length", "0"))
        if length > 16_384:
            raise ValueError("درخواست بیش از حد بزرگ است.")
        return json.loads(self.rfile.read(length) or b"{}")

    def do_GET(self) -> None:
        parsed = urllib.parse.urlsplit(self.path)
        if parsed.path.startswith("/api/"):
            self.api_get(parsed.path, urllib.parse.parse_qs(parsed.query))
            return
        if re.fullmatch(r"/news/\d+", parsed.path):
            path = "/article.html"
        elif parsed.path == "/special":
            path = "/index.html"
        elif parsed.path == "/members":
            path = "/members.html"
        elif parsed.path == "/staff":
            path = "/staff.html"
        else:
            path = "/admin.html" if parsed.path == "/admin" else "/index.html" if parsed.path in ("/", "") else parsed.path
        target = (ROOT / path.lstrip("/")).resolve()
        if ROOT not in target.parents or not target.is_file():
            self.send_error(404)
            return
        content_type = "text/html; charset=utf-8" if target.suffix == ".html" else "text/css; charset=utf-8" if target.suffix == ".css" else "text/javascript; charset=utf-8"
        content = target.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(content)))
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        self.wfile.write(content)

    def api_get(self, path: str, query: dict[str, list[str]]) -> None:
        with connect_db() as db:
            if path == "/api/health":
                self.send_json(200, {"ok": True, "ai": ai_mode() or "not-configured"})
            elif path == "/api/auth/me":
                identity = request_identity(self)
                if not identity:
                    self.send_json(401, {"error": "وارد حساب کاربری نشده‌اید."})
                    return
                request_row = None
                if identity["role"] == "member":
                    request_row = db.execute("""SELECT status FROM assistant_requests WHERE user_id=?
                        ORDER BY created_at DESC LIMIT 1""", (identity["id"],)).fetchone()
                self.send_json(200, {"user": identity, "assistant_request": request_row["status"] if request_row else None})
            elif path == "/api/admin/assistant-requests":
                if not admin_authorized(self):
                    return
                rows = db.execute("""SELECT r.id,r.message,r.status,r.created_at,u.id user_id,u.username
                    FROM assistant_requests r JOIN users u ON u.id=r.user_id
                    ORDER BY CASE r.status WHEN 'pending' THEN 0 ELSE 1 END,r.created_at DESC LIMIT 200""").fetchall()
                self.send_json(200, [dict(row) for row in rows])
            elif path == "/api/staff/articles":
                identity = staff_authorized(self)
                if not identity:
                    return
                if identity["role"] == "admin":
                    rows = db.execute("""SELECT a.id,a.title,a.summary,a.body,a.category,a.exclusive,a.featured,
                        a.created_by,s.name source_name FROM articles a JOIN sources s ON s.id=a.source_id
                        WHERE a.state='published' ORDER BY COALESCE(a.published_at,a.fetched_at) DESC LIMIT 200""").fetchall()
                else:
                    rows = db.execute("""SELECT a.id,a.title,a.summary,a.body,a.category,a.exclusive,a.featured,
                        a.created_by,s.name source_name FROM articles a JOIN sources s ON s.id=a.source_id
                        WHERE a.state='published' AND a.exclusive=1 AND a.created_by=?
                        ORDER BY COALESCE(a.published_at,a.fetched_at) DESC LIMIT 200""", (identity["id"],)).fetchall()
                self.send_json(200, [dict(row) for row in rows])
            elif path == "/api/sources":
                rows = db.execute("""SELECT s.*, (SELECT COUNT(*) FROM articles a WHERE a.source_id=s.id) article_count
                    FROM sources s WHERE s.slug <> 'editorial' ORDER BY s.name""").fetchall()
                self.send_json(200, [dict(row) for row in rows])
            elif path == "/api/news":
                terms = ["%" + term.strip() + "%" for term in query.get("q", [""])[0].split() if term.strip()][:5]
                where = ["a.state='published'"]
                args: list[object] = []
                for term in terms:
                    where.append("(a.title LIKE ? OR a.summary LIKE ?)")
                    args.extend([term, term])
                category = query.get("category", [""])[0]
                source = query.get("source", [""])[0]
                featured_fallback = False
                if category:
                    where.append("a.category = ?")
                    args.append(category)
                if source:
                    where.append("s.slug = ?")
                    args.append(source)
                if query.get("featured", [""])[0] == "1":
                    featured_count = db.execute("SELECT COUNT(*) FROM articles WHERE state='published' AND featured=1").fetchone()[0]
                    if featured_count:
                        where.append("a.featured = 1")
                    else:
                        featured_fallback = True
                where_sql = " AND ".join(where)
                total = db.execute(f"SELECT COUNT(*) FROM articles a JOIN sources s ON s.id=a.source_id WHERE {where_sql}", args).fetchone()[0]
                try:
                    page = max(1, int(query.get("page", ["1"])[0]))
                except ValueError:
                    page = 1
                page = min(page, max(1, (total + NEWS_PAGE_SIZE - 1) // NEWS_PAGE_SIZE))
                offset = (page - 1) * NEWS_PAGE_SIZE
                sql = f"""SELECT a.id, a.title, a.summary, a.url, COALESCE(a.image_url, a.og_image_url) image_url,
                    a.published_at, a.fetched_at, a.category, a.featured,
                    a.exclusive,
                    a.fingerprint, s.name source_name, s.slug source_slug, s.site_url source_url,
                    (SELECT COUNT(*) FROM articles d WHERE d.fingerprint=a.fingerprint) duplicate_count
                    FROM articles a JOIN sources s ON s.id=a.source_id WHERE {where_sql}
                    ORDER BY COALESCE(a.published_at, a.fetched_at) DESC LIMIT ? OFFSET ?"""
                rows = db.execute(sql, [*args, NEWS_PAGE_SIZE, offset]).fetchall()
                self.send_json(200, {"items": [dict(row) for row in rows], "total": total,
                                     "page": page, "page_size": NEWS_PAGE_SIZE,
                                     "featured_fallback": featured_fallback})
            elif re.fullmatch(r"/api/news/\d+", path):
                article_id = int(path.rsplit("/", 1)[1])
                article = db.execute("""SELECT a.id, a.title, a.summary, a.url,
                    COALESCE(a.image_url, a.og_image_url) image_url, a.published_at, a.fetched_at,
                    a.category, a.featured, a.exclusive, a.body, a.ai_summary, s.name source_name, s.slug source_slug,
                    s.site_url source_site_url, a.fingerprint,
                    (SELECT COUNT(*) FROM articles d WHERE d.fingerprint=a.fingerprint) duplicate_count
                    FROM articles a JOIN sources s ON s.id=a.source_id
                    WHERE a.id=? AND a.state='published'""", (article_id,)).fetchone()
                if not article:
                    self.send_json(404, {"error": "خبر پیدا نشد."})
                    return
                reports = db.execute("""SELECT a.id, a.title, a.url, a.published_at, s.name source_name
                    FROM articles a JOIN sources s ON s.id=a.source_id
                    WHERE a.fingerprint=? AND a.id<>? AND a.state='published' ORDER BY a.published_at DESC LIMIT 10""",
                    (article["fingerprint"], article_id)).fetchall()
                payload = dict(article)
                payload.pop("fingerprint", None)
                self.send_json(200, {"article": payload, "other_reports": [dict(row) for row in reports],
                                     "ai_configured": bool(ai_mode()),
                                     "ai_mode": ai_mode()})
            elif path == "/api/admin/articles":
                if not admin_authorized(self):
                    return
                rows = db.execute("""SELECT a.*, s.name source_name FROM articles a JOIN sources s ON s.id=a.source_id
                    WHERE a.state='pending' ORDER BY a.fetched_at DESC LIMIT 200""").fetchall()
                self.send_json(200, [dict(row) for row in rows])
            elif path == "/api/admin/published":
                if not admin_authorized(self):
                    return
                rows = db.execute("""SELECT a.id, a.title, a.published_at, a.featured, s.name source_name
                    FROM articles a JOIN sources s ON s.id=a.source_id WHERE a.state='published'
                    ORDER BY COALESCE(a.published_at,a.fetched_at) DESC LIMIT 100""").fetchall()
                self.send_json(200, [dict(row) for row in rows])
            else:
                self.send_error(404)

    def do_POST(self) -> None:
        path = urllib.parse.urlsplit(self.path).path
        parts = path.strip("/").split("/")
        if path in ("/api/auth/register", "/api/auth/login", "/api/auth/assistant-request", "/api/auth/logout"):
            self.auth_post(path)
            return
        if path == "/api/staff/articles" or (len(parts) == 4 and parts[:2] == ["api", "staff"] and parts[2] == "articles"):
            identity = staff_authorized(self)
            if identity:
                self.staff_article_request("POST", parts, identity)
            return
        public_story_action = len(parts) == 4 and parts[:2] == ["api", "news"] and parts[3] in ("preview", "summarize")
        if not public_story_action and not admin_authorized(self):
            return
        try:
            if public_story_action:
                article_id = int(parts[2])
                client_ip = self.client_address[0]
                if parts[3] == "preview":
                    preview = load_article_preview(article_id, client_ip)
                    self.send_json(200, {"excerpt": (preview["excerpt"] or "")[:900],
                                         "image_url": preview["image_url"],
                                         "message": "پیش‌نمایش از صفحهٔ منبع دریافت شد."})
                else:
                    if not ai_mode():
                        raise NewsroomRequestError(503, "هوش مصنوعی آماده نیست؛ تنظیمات اتصال روی سرور لازم است.")
                    with connect_db() as db:
                        article = db.execute("SELECT title, body, exclusive, ai_summary FROM articles WHERE id=? AND state='published'", (article_id,)).fetchone()
                        if not article:
                            raise NewsroomRequestError(404, "خبر پیدا نشد.")
                        if article["ai_summary"]:
                            self.send_json(200, {"summary": article["ai_summary"], "cached": True})
                            return
                    if article["exclusive"]:
                        summary_source = article["body"]
                    else:
                        preview = load_article_preview(article_id, client_ip)
                        summary_source = preview["excerpt"] or ""
                    summary = generate_ai_summary(article["title"], summary_source, client_ip)
                    with connect_db() as db:
                        db.execute("UPDATE articles SET ai_summary=? WHERE id=?", (summary, article_id))
                    self.send_json(200, {"summary": summary, "cached": False})
            elif len(parts) == 4 and parts[:2] == ["api", "sources"]:
                source_id = int(parts[2])
                action = parts[3]
                if action == "discover":
                    self.discover(source_id)
                elif action == "activate":
                    self.activate(source_id)
                elif action == "fetch":
                    count = fetch_source(source_id)
                    self.send_json(200, {"added": count})
                else:
                    self.send_error(404)
            elif len(parts) == 4 and parts[:2] == ["api", "articles"] and parts[3] == "approve":
                article_id = int(parts[2])
                with connect_db() as db:
                    db.execute("UPDATE articles SET state='published' WHERE id=? AND state='pending'", (article_id,))
                self.send_json(200, {"ok": True})
            elif len(parts) == 4 and parts[:2] == ["api", "articles"] and parts[3] == "feature":
                article_id = int(parts[2])
                featured = bool(self.read_json().get("featured"))
                with connect_db() as db:
                    changed = db.execute("UPDATE articles SET featured=? WHERE id=? AND state='published'",
                                         (int(featured), article_id)).rowcount
                self.send_json(200 if changed else 404, {"featured": featured})
            elif len(parts) == 5 and parts[:3] == ["api", "admin", "assistant-requests"] and parts[4] == "decision":
                request_id = int(parts[3])
                decision = self.read_json().get("decision")
                if decision not in ("approve", "reject"):
                    self.send_json(400, {"error": "تصمیم باید تأیید یا رد باشد."})
                    return
                status = "approved" if decision == "approve" else "rejected"
                with connect_db() as db:
                    request_row = db.execute("SELECT user_id,status FROM assistant_requests WHERE id=?", (request_id,)).fetchone()
                    if not request_row or request_row["status"] != "pending":
                        self.send_json(404, {"error": "درخواست در انتظار پیدا نشد."})
                        return
                    db.execute("UPDATE assistant_requests SET status=?,reviewed_at=?,reviewed_by=? WHERE id=?",
                               (status, datetime.now(timezone.utc).isoformat(), "مدیر", request_id))
                    if decision == "approve":
                        db.execute("UPDATE users SET role='assistant' WHERE id=?", (request_row["user_id"],))
                self.send_json(200, {"status": status})
            elif path == "/api/admin/settings":
                data = self.read_json()
                mode = data.get("publication_mode")
                if mode not in ("auto", "review", "manual"):
                    self.send_json(400, {"error": "حالت انتشار نامعتبر است."})
                    return
                with connect_db() as db:
                    db.execute("UPDATE sources SET publication_mode=?", (mode,))
                self.send_json(200, {"ok": True})
            else:
                self.send_error(404)
        except NewsroomRequestError as exc:
            self.send_json(exc.status, {"error": str(exc)})
        except (ValueError, sqlite3.Error, OSError, urllib.error.URLError, ET.ParseError) as exc:
            self.send_json(400, {"error": str(exc)[:500]})

    def auth_post(self, path: str) -> None:
        try:
            data = self.read_json()
            client_ip = self.client_address[0]
            if path == "/api/auth/register":
                if not allow_auth_attempt("register", client_ip, 8, 3600):
                    raise NewsroomRequestError(429, "تعداد ثبت‌نام از این اتصال زیاد است؛ بعداً دوباره تلاش کنید.")
                username = str(data.get("username", "")).strip()
                password = str(data.get("password", ""))
                if not 3 <= len(username) <= 32 or any(ord(char) < 33 for char in username):
                    raise NewsroomRequestError(400, "نام کاربری باید ۳ تا ۳۲ نویسه و بدون فاصله باشد.")
                if len(password) < 12 or len(password) > 256:
                    raise NewsroomRequestError(400, "رمز عبور باید دست‌کم ۱۲ نویسه باشد.")
                salt, digest = password_digest(password)
                try:
                    with connect_db() as db:
                        cursor = db.execute("INSERT INTO users(username,salt,password_hash) VALUES(?,?,?)",
                                            (username, salt, digest))
                        user_id = cursor.lastrowid
                except sqlite3.IntegrityError as exc:
                    raise NewsroomRequestError(409, "این نام کاربری قبلاً ثبت شده است.") from exc
                token, expires_at = issue_user_session(user_id)
                self.send_json(201, {"token": token, "expires_at": expires_at,
                                     "user": {"id": user_id, "username": username, "role": "member"}})
            elif path == "/api/auth/login":
                if not allow_auth_attempt("login", client_ip, 10, 900):
                    raise NewsroomRequestError(429, "ورودهای ناموفق زیاد بوده؛ ۱۵ دقیقه بعد تلاش کنید.")
                username = str(data.get("username", "")).strip()
                password = str(data.get("password", ""))
                with connect_db() as db:
                    user = db.execute("SELECT id,username,role,salt,password_hash FROM users WHERE username=? COLLATE NOCASE",
                                      (username,)).fetchone()
                if not user or not password_matches(password, user["salt"], user["password_hash"]):
                    raise NewsroomRequestError(401, "نام کاربری یا رمز عبور درست نیست.")
                token, expires_at = issue_user_session(user["id"])
                with connect_db() as db:
                    db.execute("UPDATE users SET last_login=? WHERE id=?",
                               (datetime.now(timezone.utc).isoformat(), user["id"]))
                self.send_json(200, {"token": token, "expires_at": expires_at,
                                     "user": {"id": user["id"], "username": user["username"], "role": user["role"]}})
            elif path == "/api/auth/logout":
                identity = request_identity(self)
                if not identity:
                    raise NewsroomRequestError(401, "نشست معتبر پیدا نشد.")
                scheme, _, raw_token = self.headers.get("Authorization", "").partition(" ")
                if scheme.lower() == "bearer" and raw_token and identity["role"] != "admin":
                    token_hash = hashlib.sha256(raw_token.encode("utf-8")).hexdigest()
                    with connect_db() as db:
                        db.execute("DELETE FROM sessions WHERE token_hash=?", (token_hash,))
                self.send_json(200, {"logged_out": True})
            else:
                identity = request_identity(self)
                if not identity:
                    raise NewsroomRequestError(401, "برای درخواست دستیار ابتدا وارد شوید.")
                if identity["role"] != "member":
                    raise NewsroomRequestError(409, "این حساب درخواست باز دستیار ندارد یا قبلاً تأیید شده است.")
                message = str(data.get("message", "")).strip()[:500]
                with connect_db() as db:
                    existing = db.execute("SELECT status FROM assistant_requests WHERE user_id=? ORDER BY created_at DESC LIMIT 1",
                                          (identity["id"],)).fetchone()
                    if existing and existing["status"] == "pending":
                        raise NewsroomRequestError(409, "درخواست شما در صف بررسی مدیر است.")
                    db.execute("INSERT INTO assistant_requests(user_id,message) VALUES(?,?)", (identity["id"], message))
                self.send_json(201, {"status": "pending"})
        except NewsroomRequestError as exc:
            self.send_json(exc.status, {"error": str(exc)})
        except (ValueError, sqlite3.Error) as exc:
            self.send_json(400, {"error": str(exc)[:300]})

    def staff_article_request(self, method: str, parts: list[str], identity: dict) -> None:
        try:
            if method == "POST" and len(parts) == 3:
                data = self.read_json()
                title = str(data.get("title", "")).strip()
                summary = str(data.get("summary", "")).strip()
                body = str(data.get("body", "")).strip()
                category = str(data.get("category", "اخبار ایران")).strip()
                valid_categories = set(CATEGORIES) | {"اخبار ایران", "اخبار جهان", "اینترنت"}
                if not title or len(title) > 300 or not body or len(body) > 12_000:
                    raise NewsroomRequestError(400, "تیتر لازم است و متن خبر باید حداکثر ۱۲هزار نویسه باشد.")
                if len(summary) > 1200 or category not in valid_categories:
                    raise NewsroomRequestError(400, "چکیده یا دسته‌بندی معتبر نیست.")
                now = datetime.now(timezone.utc).isoformat()
                with connect_db() as db:
                    source_id = db.execute("SELECT id FROM sources WHERE slug='editorial'").fetchone()[0]
                    cursor = db.execute("""INSERT INTO articles
                        (source_id,title,summary,url,published_at,fetched_at,category,fingerprint,state,exclusive,body,created_by)
                        VALUES(?,?,?,?,?,?,?,?, 'published',1,?,?)""",
                        (source_id,title,summary,f"editorial://{uuid.uuid4()}",now,now,category,fingerprint(title),body,identity["id"]))
                    article_id = cursor.lastrowid
                self.send_json(201, {"id": article_id, "published": True})
                return
            if len(parts) != 4:
                self.send_error(404)
                return
            article_id = int(parts[3])
            with connect_db() as db:
                article = db.execute("SELECT id,exclusive,created_by FROM articles WHERE id=?", (article_id,)).fetchone()
                if not article:
                    raise NewsroomRequestError(404, "خبر پیدا نشد.")
                if identity["role"] != "admin" and (not article["exclusive"] or article["created_by"] != identity["id"]):
                    raise NewsroomRequestError(403, "دستیار فقط می‌تواند خبر اختصاصی خودش را مدیریت کند.")
                if method == "DELETE":
                    db.execute("DELETE FROM articles WHERE id=?", (article_id,))
                    self.send_json(200, {"deleted": True})
                    return
                data = self.read_json()
                title = str(data.get("title", "")).strip()
                summary = str(data.get("summary", "")).strip()
                body = str(data.get("body", "")).strip()
                category = str(data.get("category", "اخبار ایران")).strip()
                valid_categories = set(CATEGORIES) | {"اخبار ایران", "اخبار جهان", "اینترنت"}
                if not title or len(title) > 300 or len(summary) > 1200 or len(body) > 12_000 or category not in valid_categories:
                    raise NewsroomRequestError(400, "تیتر، چکیده، متن یا دسته‌بندی معتبر نیست.")
                db.execute("UPDATE articles SET title=?,summary=?,body=?,category=?,fingerprint=? WHERE id=?",
                           (title,summary,body,category,fingerprint(title),article_id))
            self.send_json(200, {"id": article_id, "updated": True})
        except NewsroomRequestError as exc:
            self.send_json(exc.status, {"error": str(exc)})
        except (ValueError, sqlite3.Error) as exc:
            self.send_json(400, {"error": str(exc)[:300]})

    def do_PUT(self) -> None:
        path = urllib.parse.urlsplit(self.path).path
        parts = path.strip("/").split("/")
        identity = staff_authorized(self)
        if identity:
            self.staff_article_request("PUT", parts, identity)

    def do_DELETE(self) -> None:
        path = urllib.parse.urlsplit(self.path).path
        parts = path.strip("/").split("/")
        identity = staff_authorized(self)
        if identity:
            self.staff_article_request("DELETE", parts, identity)

    def discover(self, source_id: int) -> None:
        with connect_db() as db:
            source = db.execute("SELECT * FROM sources WHERE id=?", (source_id,)).fetchone()
            if not source:
                self.send_error(404)
                return
            domain = urllib.parse.urlsplit(source["site_url"]).hostname or ""
            try:
                feed_url, item_count = discover_feed(source["site_url"], domain)
            except Exception as exc:
                record_source_error(source_id, exc)
                raise
            db.execute("UPDATE sources SET feed_url=?, status='verified', last_test=?, last_error=NULL WHERE id=?",
                       (feed_url, datetime.now(timezone.utc).isoformat(), source_id))
            self.send_json(200, {"feed_url": feed_url, "items_found": item_count, "enabled": False})

    def activate(self, source_id: int) -> None:
        data = self.read_json()
        interval = int(data.get("interval_minutes", 5))
        mode = data.get("publication_mode", "review")
        if interval < 5 or interval > 1440 or mode not in ("auto", "review", "manual"):
            self.send_json(400, {"error": "زمان باید بین ۵ دقیقه تا ۲۴ ساعت و حالت انتشار معتبر باشد."})
            return
        with connect_db() as db:
            changed = db.execute("""UPDATE sources SET enabled=1, interval_minutes=?, publication_mode=?, status='active'
                WHERE id=? AND feed_url IS NOT NULL""", (interval, mode, source_id)).rowcount
            if not changed:
                self.send_json(400, {"error": "ابتدا باید فید رسمی را با موفقیت کشف و آزمایش کنید."})
                return
        self.send_json(200, {"ok": True})

    def log_message(self, fmt: str, *args: object) -> None:
        print(f"[{self.log_date_time_string()}] {fmt % args}")


class Scheduler(threading.Thread):
    def __init__(self):
        super().__init__(daemon=True)
        self.last_run: dict[int, float] = {}

    def run(self) -> None:
        while True:
            try:
                with connect_db() as db:
                    sources = db.execute("SELECT id, interval_minutes FROM sources WHERE enabled=1 AND feed_url IS NOT NULL").fetchall()
                now = time.monotonic()
                for source in sources:
                    if now - self.last_run.get(source["id"], 0) >= source["interval_minutes"] * 60:
                        self.last_run[source["id"]] = now
                        try:
                            fetch_source(source["id"])
                        except Exception as exc:
                            print(f"source {source['id']} fetch failed: {exc}")
            except sqlite3.Error as exc:
                print(f"scheduler database error: {exc}")
            time.sleep(20)


def main() -> None:
    init_db()
    Scheduler().start()
    server = http.server.ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"Newsroom running at http://{HOST}:{PORT} (admin: /admin)")
    server.serve_forever()


if __name__ == "__main__":
    main()