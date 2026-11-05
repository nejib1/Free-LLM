const categories = ["همه", "سیاست داخلی", "سیاست خارجی", "اخبار ایران", "اخبار جهان", "اقتصاد", "بازار و ارز", "فناوری", "هوش مصنوعی", "اینترنت", "علم و دانشگاه", "اجتماعی", "حوادث", "فرهنگ و هنر", "سینما", "ورزش", "فوتبال", "سلامت", "محیط زیست", "خودرو", "آموزش"];
const specialPage = window.location.pathname === "/special";
const state = { category: "", query: "", source: "", page: 1, articles: [] };
const imageQueues = new Map();
const imageRequestsInFlight = new Set();
const $ = (selector) => document.querySelector(selector);

const relativeFormatter = new Intl.RelativeTimeFormat("fa-IR", { numeric: "auto" });

function exactDate(value) {
  if (!value) return "زمان ثبت نشده";
  return new Intl.DateTimeFormat("fa-IR", { dateStyle: "full", timeStyle: "short" }).format(new Date(value));
}

function relativeDate(value) {
  const timestamp = new Date(value).getTime();
  if (!Number.isFinite(timestamp)) return "زمان ثبت نشده";
  const seconds = Math.round((timestamp - Date.now()) / 1000);
  if (Math.abs(seconds) < 45) return "همین حالا";
  if (Math.abs(seconds) < 3600) return relativeFormatter.format(Math.round(seconds / 60), "minute");
  if (Math.abs(seconds) < 86_400) return relativeFormatter.format(Math.round(seconds / 3600), "hour");
  if (Math.abs(seconds) < 604_800) return relativeFormatter.format(Math.round(seconds / 86_400), "day");
  return exactDate(value);
}

function updateRelativeDates() {
  for (const element of document.querySelectorAll("[data-relative-date]")) {
    const prefix = element.dataset.prefix;
    element.textContent = `${prefix ? `${prefix} ` : ""}${relativeDate(element.dataset.relativeDate)}`;
  }
}

const imageObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      const sourceSlug = entry.target.dataset.sourceSlug;
      if (sourceSlug) enqueueCardImage(sourceSlug, entry.target);
    }
  }, { rootMargin: "180px 0px" })
  : null;

function enqueueCardImage(sourceSlug, card) {
  const queue = imageQueues.get(sourceSlug) || [];
  queue.push(card);
  imageQueues.set(sourceSlug, queue);
  processCardImageQueue(sourceSlug);
}

async function processCardImageQueue(sourceSlug) {
  if (imageRequestsInFlight.has(sourceSlug)) return;
  const queue = imageQueues.get(sourceSlug);
  if (!queue?.length) return;
  const card = queue.shift();
  if (!card.isConnected) return processCardImageQueue(sourceSlug);
  imageRequestsInFlight.add(sourceSlug);
  try {
    const response = await fetch(`/api/news/${card.dataset.articleId}/preview`, { method: "POST" });
    const preview = await response.json();
    if (response.ok && preview.image_url) {
      const visual = card.querySelector(".article-visual");
      if (visual && !visual.classList.contains("has-image")) {
        const image = document.createElement("img");
        image.src = preview.image_url;
        image.alt = "";
        image.loading = "lazy";
        image.decoding = "async";
        image.referrerPolicy = "no-referrer";
        image.addEventListener("error", () => {
          visual.classList.remove("has-image");
          image.remove();
        }, { once: true });
        visual.prepend(image);
        visual.classList.add("has-image");
      }
    } else if (response.status === 429) {
      queue.unshift(card);
    }
  } catch {
    // Keep the labeled cover when a publisher page cannot be previewed.
  } finally {
    window.setTimeout(() => {
      imageRequestsInFlight.delete(sourceSlug);
      processCardImageQueue(sourceSlug);
    }, 5_200);
  }
}

function categoryNav() {
  const nav = $("#category-list");
  for (const category of categories) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-chip";
    button.textContent = category;
    button.setAttribute("aria-pressed", String((category === "همه" && !state.category) || category === state.category));
    button.addEventListener("click", () => {
      state.category = category === "همه" ? "" : category;
      state.page = 1;
      $("#section-title").textContent = state.category || "آخرین خبرها";
      categoryNav();
      loadNews();
    });
    nav.append(button);
  }
}

function articleCard(article, featured = false) {
  const card = document.createElement("article");
  card.className = `news-card${featured ? " featured-card" : ""}`;
  card.dataset.articleId = article.id;
  card.dataset.sourceSlug = article.source_slug;

  const visual = document.createElement("a");
  visual.className = `article-visual${article.image_url ? " has-image" : ""}`;
  visual.href = `/news/${article.id}`;
  visual.setAttribute("aria-label", `خواندن خبر ${article.title}`);
  const tones = [
    ["#173e45", "#e4b85e"], ["#a43d32", "#f1bd76"], ["#3044a3", "#d7ed76"],
    ["#255d4c", "#b3cc8b"], ["#48394e", "#e89a7b"],
  ];
  const tone = tones[Math.abs(article.category.length + Number(article.id)) % tones.length];
  visual.style.setProperty("--cover-ink", tone[0]);
  visual.style.setProperty("--cover-accent", tone[1]);
  if (article.image_url) {
    const image = document.createElement("img");
    image.src = article.image_url;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    image.referrerPolicy = "no-referrer";
    image.addEventListener("error", () => {
      visual.classList.remove("has-image");
      image.remove();
    }, { once: true });
    visual.append(image);
  }
  const cover = document.createElement("div");
  cover.className = "cover-art";
  cover.setAttribute("aria-label", `کاور تحریریه برای دستهٔ ${article.category}؛ تصویر در فید ناشر نبود`);
  const coverCategory = document.createElement("span");
  coverCategory.className = "cover-category";
  coverCategory.textContent = article.category;
  const coverTitle = document.createElement("strong");
  coverTitle.className = "cover-title";
  coverTitle.textContent = article.title;
  const coverNote = document.createElement("span");
  coverNote.className = "cover-note";
  coverNote.textContent = "عکس در RSS ناشر موجود نیست";
  cover.append(coverCategory, coverTitle, coverNote);
  visual.append(cover);
  card.append(visual);

  const meta = document.createElement("div");
  meta.className = "article-meta";
  const source = document.createElement("span");
  source.className = "source-name";
  source.textContent = article.source_name;
  const time = document.createElement("time");
  const hasPublishedDate = Boolean(article.published_at);
  const date = article.published_at || article.fetched_at;
  time.dateTime = date;
  time.dataset.relativeDate = date;
  time.dataset.prefix = hasPublishedDate ? "انتشار" : "دریافت";
  time.title = hasPublishedDate
    ? `زمان انتشار منبع: ${exactDate(date)}`
    : `زمان منبع نامعتبر یا ثبت‌نشده؛ دریافت واقعی: ${exactDate(article.fetched_at)}`;
  meta.append(source, time);
  if (hasPublishedDate) {
    const fetched = document.createElement("time");
    fetched.className = "fetch-age";
    fetched.dateTime = article.fetched_at;
    fetched.dataset.relativeDate = article.fetched_at;
    fetched.dataset.prefix = "دریافت";
    fetched.title = `آخرین دریافت از منبع: ${exactDate(article.fetched_at)}`;
    meta.append(fetched);
  }
  const copy = document.createElement("div");
  copy.className = "article-copy";
  const title = document.createElement("h3");
  const link = document.createElement("a");
  link.href = `/news/${article.id}`;
  link.textContent = article.title;
  title.append(link);
  copy.append(meta, title);
  if (article.summary) {
    const summary = document.createElement("p");
    summary.className = "article-summary";
    summary.textContent = article.summary;
    copy.append(summary);
  }
  const footer = document.createElement("div");
  footer.className = "article-footer";
  const tag = document.createElement("span");
  tag.className = "category-tag";
  tag.textContent = article.category;
  footer.append(tag);
  const sourceLink = document.createElement("a");
  sourceLink.className = "original-link";
  sourceLink.href = article.url;
  sourceLink.target = "_blank";
  sourceLink.rel = "noopener noreferrer";
  sourceLink.textContent = article.exclusive ? "خبر اختصاصی رویداد" : `اصل خبر در ${article.source_name} ↗`;
  if (article.exclusive) {
    sourceLink.removeAttribute("href");
    sourceLink.removeAttribute("target");
    sourceLink.removeAttribute("rel");
  }
  footer.append(sourceLink);
  if (article.duplicate_count > 1) {
    const reports = document.createElement("span");
    reports.className = "report-count";
    reports.textContent = `${article.duplicate_count} گزارش با تیتر مشابه`;
    footer.append(reports);
  }
  copy.append(footer);
  card.append(copy);
  return card;
}

async function loadSources() {
  try {
    const response = await fetch("/api/sources");
    const sources = await response.json();
    const active = sources.filter((source) => source.enabled).length;
    const latest = sources.filter((source) => source.enabled && source.last_success)
      .sort((left, right) => new Date(right.last_success) - new Date(left.last_success))[0];
    const status = $("#source-status");
    if (latest) {
      status.dataset.relativeDate = latest.last_success;
      status.dataset.prefix = `${active} منبع فعال · آخرین دریافت`;
      status.title = `آخرین دریافت موفق: ${exactDate(latest.last_success)}`;
      updateRelativeDates();
    } else {
      status.textContent = `${active} منبع فعال از ${sources.length} رسانه`;
      delete status.dataset.relativeDate;
      delete status.dataset.prefix;
    }
    const select = $("#source-filter");
    const selectedSource = select.value;
    select.replaceChildren(new Option("همهٔ رسانه‌ها", ""));
    for (const source of sources.filter((item) => item.enabled)) {
      const option = document.createElement("option");
      option.value = source.slug;
      option.textContent = source.name;
      select.append(option);
    }
    select.value = selectedSource;
  } catch {
    $("#source-status").textContent = "وضعیت منابع در دسترس نیست";
  }
}

async function loadNews() {
  const params = new URLSearchParams();
  params.set("page", String(state.page));
  if (specialPage) params.set("featured", "1");
  if (state.query) params.set("q", state.query);
  if (state.category) params.set("category", state.category);
  if (state.source) params.set("source", state.source);
  const grid = $("#news-grid");
  grid.replaceChildren();
  try {
    const response = await fetch(`/api/news?${params}`);
    const data = await response.json();
    state.articles = data.items;
    const pageCount = Math.max(1, Math.ceil(data.total / data.page_size));
    if (state.page > pageCount) {
      state.page = pageCount;
      return loadNews();
    }
    $("#result-count").textContent = `${data.total.toLocaleString("fa-IR")} خبر`;
    $("#special-fallback").hidden = !specialPage || !data.featured_fallback;
    $("#pagination").hidden = data.total <= data.page_size;
    $("#page-indicator").textContent = `صفحهٔ ${data.page.toLocaleString("fa-IR")} از ${pageCount.toLocaleString("fa-IR")}`;
    $("#page-next").disabled = data.page >= pageCount;
    $("#page-prev").disabled = data.page <= 1;
    $("#empty-state").hidden = state.articles.length > 0;
    for (const [index, article] of state.articles.entries()) {
      const card = articleCard(article, index === 0);
      grid.append(card);
      if (!card.querySelector(".article-visual.has-image") && imageObserver) imageObserver.observe(card);
    }
    updateRelativeDates();
    $("#breaking-text").textContent = state.articles[0]?.title || "هنوز خبری برای نمایش نیست";
  } catch {
    $("#result-count").textContent = "خطا در دریافت خبرها";
    $("#empty-state").hidden = false;
  }
}

const savedTheme = localStorage.getItem("newsroom-theme");
if (savedTheme === "dark") document.documentElement.dataset.theme = "dark";
$("#theme-toggle").addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  localStorage.setItem("newsroom-theme", dark ? "dark" : "light");
});

$("#search").addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  state.page = 1;
  clearTimeout(window.searchTimer);
  window.searchTimer = setTimeout(loadNews, 250);
});
$("#source-filter").addEventListener("change", (event) => { state.source = event.target.value; state.page = 1; loadNews(); });
$("#page-next").addEventListener("click", () => { state.page += 1; loadNews(); window.scrollTo({ top: 0, behavior: "smooth" }); });
$("#page-prev").addEventListener("click", () => { state.page = Math.max(1, state.page - 1); loadNews(); window.scrollTo({ top: 0, behavior: "smooth" }); });
$("#refresh-news").addEventListener("click", () => loadNews());
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    $("#search").focus();
  }
});
$("#today").textContent = new Intl.DateTimeFormat("fa-IR", { dateStyle: "full" }).format(new Date());
$("#footer-year").textContent = new Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(new Date());
if (specialPage) {
  document.title = "اخبار ویژه | رویداد";
  $("#section-title").textContent = "اخبار ویژه";
  document.querySelector(".intro-row h1").textContent = "گزیدهٔ تحریریه";
}
categoryNav();
loadSources();
loadNews();
window.setInterval(loadNews, 60_000);
window.setInterval(loadSources, 60_000);
window.setInterval(updateRelativeDates, 30_000);