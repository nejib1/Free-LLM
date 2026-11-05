const $ = (selector) => document.querySelector(selector);
const articleId = Number(window.location.pathname.split("/").filter(Boolean).at(-1));

function setStoryImage(url) {
  if (!url) return;
  const image = $("#story-image");
  image.src = url;
  image.hidden = false;
  $("#story-visual").classList.add("has-image");
  image.addEventListener("error", () => {
    image.hidden = true;
    $("#story-visual").classList.remove("has-image");
  }, { once: true });
}

function formatDate(value) {
  if (!value) return "زمان انتشار ثبت نشده";
  return new Intl.DateTimeFormat("fa-IR", { dateStyle: "full", timeStyle: "short" }).format(new Date(value));
}

function showReports(reports) {
  const container = $("#other-reports");
  if (!reports.length) return;
  $("#other-reports-label").hidden = false;
  for (const report of reports) {
    const row = document.createElement("a");
    row.className = "other-report";
    row.href = `/news/${report.id}`;
    const title = document.createElement("strong");
    title.textContent = report.title;
    const source = document.createElement("span");
    source.textContent = report.source_name;
    row.append(title, source);
    container.append(row);
  }
}

async function loadStory() {
  if (!Number.isInteger(articleId) || articleId < 1) {
    $("#story-error").hidden = false;
    return;
  }
  try {
    const response = await fetch(`/api/news/${articleId}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    const article = data.article;
    document.title = `${article.title} | رویداد`;
    $("#story").hidden = false;
    $("#story-category").textContent = article.category;
    $("#cover-category").textContent = article.category;
    $("#cover-title").textContent = article.title;
    $("#story-title").textContent = article.title;
    $("#story-summary").textContent = article.summary || "خلاصه‌ای در فید رسانه منتشر نشده است.";
    $("#story-source").textContent = article.source_name;
    $("#aside-source").textContent = article.source_name;
    $("#aside-category").textContent = article.category;
    $("#story-time").textContent = formatDate(article.published_at || article.fetched_at);
    $("#aside-time").textContent = formatDate(article.published_at || article.fetched_at);
    $("#story-featured").hidden = !article.featured;
    $("#original-link").href = article.url;
    if (article.exclusive) {
      $("#original-link").hidden = true;
      $("#story-summary").textContent = article.summary || "خبر اختصاصی تحریریهٔ رویداد.";
      $("#exclusive-body").textContent = article.body;
      $("#exclusive-body-section").hidden = !article.body;
      $("#preview-status").hidden = true;
    }
    if (article.image_url) setStoryImage(article.image_url);
    showReports(data.other_reports);
    $("#ai-button").disabled = !data.ai_configured;
    $("#ai-note").textContent = data.ai_mode === "local"
      ? "خلاصه با مدل متن‌باز محلی ساخته می‌شود؛ متن خبر به سرویس بیرونی ارسال نمی‌شود."
      : data.ai_configured
        ? "خلاصه با مدل زبانی سرور ساخته می‌شود و بر اساس متن منبع است."
        : "مدل خلاصه‌ساز فعلاً در دسترس نیست.";
    if (!article.exclusive) await loadSourcePreview(article);
  } catch {
    $("#story-error").hidden = false;
  }
}

async function loadSourcePreview(article) {
  const status = $("#preview-status");
  try {
    const response = await fetch(`/api/news/${article.id}/preview`, { method: "POST" });
    const preview = await response.json();
    if (!response.ok) throw new Error(preview.error);
    if (preview.image_url && !article.image_url) setStoryImage(preview.image_url);
    if (preview.excerpt) {
      $("#page-excerpt").textContent = preview.excerpt;
      $("#page-excerpt-section").hidden = false;
    } else {
      $("#page-excerpt").textContent = "متن قابل‌خواندن در صفحهٔ منبع پیدا نشد؛ خلاصهٔ RSS در بالا موجود است.";
      $("#page-excerpt-section").hidden = false;
    }
    status.textContent = preview.message;
  } catch (error) {
    status.textContent = `صفحهٔ اصلی فعلاً قابل‌خواندن نیست: ${error.message}`;
  }
}

$("#ai-button").addEventListener("click", async () => {
  const button = $("#ai-button");
  button.disabled = true;
  button.textContent = "در حال خلاصه‌سازی…";
  const result = $("#ai-result");
  result.hidden = true;
  try {
    const response = await fetch(`/api/news/${articleId}/summarize`, { method: "POST" });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error);
    result.textContent = payload.summary;
    result.hidden = false;
  } catch (error) {
    result.textContent = error.message;
    result.hidden = false;
  }
  button.textContent = "خلاصه با هوش مصنوعی";
  button.disabled = false;
});

$("#share-story").addEventListener("click", async () => {
  const share = { title: document.title, url: window.location.href };
  if (navigator.share) await navigator.share(share);
  else {
    await navigator.clipboard.writeText(share.url);
    $("#share-story").textContent = "پیوند کپی شد";
  }
});

$("#theme-toggle").addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  localStorage.setItem("newsroom-theme", dark ? "dark" : "light");
});
if (localStorage.getItem("newsroom-theme") === "dark") document.documentElement.dataset.theme = "dark";
loadStory();