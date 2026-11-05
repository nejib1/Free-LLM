const $ = (selector) => document.querySelector(selector);
let token = sessionStorage.getItem("newsroom-admin-token") || "";
const labels = { unverified: "تأییدنشده", verified: "فید تأییدشده", active: "فعال", error: "خطا" };
const modes = [["review", "بازبینی مدیر"], ["auto", "انتشار خودکار"], ["manual", "انتشار دستی"]];

function request(path, options = {}) {
  return fetch(path, { ...options, headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json", ...options.headers } });
}

function message(text, isError = false) {
  const box = $("#admin-message");
  box.textContent = text;
  box.className = `notice${isError ? " notice-error" : ""}`;
  box.hidden = false;
}

function sourceCard(source) {
  const card = document.createElement("article");
  card.className = "source-row";
  const summary = document.createElement("div");
  summary.className = "source-summary";
  const title = document.createElement("h3");
  title.textContent = source.name;
  const link = document.createElement("a");
  link.href = source.site_url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = new URL(source.site_url).hostname;
  const badge = document.createElement("span");
  badge.className = `status-badge status-${source.status}`;
  badge.textContent = labels[source.status] || source.status;
  summary.append(title, link, badge);
  card.append(summary);

  const details = document.createElement("div");
  details.className = "source-details";
  if (source.feed_url) {
    const feed = document.createElement("a");
    feed.href = source.feed_url;
    feed.target = "_blank";
    feed.rel = "noopener noreferrer";
    feed.className = "feed-address";
    feed.textContent = source.feed_url;
    details.append(feed);
  } else {
    const empty = document.createElement("span");
    empty.className = "muted-text";
    empty.textContent = "نشانی فید هنوز از سایت رسمی کشف نشده";
    details.append(empty);
  }
  const meta = document.createElement("span");
  meta.className = "muted-text";
  meta.textContent = `خبر ثبت‌شده: ${Number(source.article_count).toLocaleString("fa-IR")}`;
  details.append(meta);
  if (source.last_success) {
    const success = document.createElement("span");
    success.className = "muted-text";
    success.textContent = `آخرین دریافت موفق: ${new Intl.DateTimeFormat("fa-IR", { dateStyle: "short", timeStyle: "short" }).format(new Date(source.last_success))}`;
    details.append(success);
  }
  if (source.last_error) {
    const error = document.createElement("span");
    error.className = "source-error";
    error.textContent = source.last_error;
    details.append(error);
  }
  card.append(details);

  const controls = document.createElement("div");
  controls.className = "source-controls";
  const interval = document.createElement("input");
  interval.type = "number";
  interval.min = "5";
  interval.max = "1440";
  interval.step = "5";
  interval.value = source.interval_minutes;
  interval.setAttribute("aria-label", `فاصله دریافت ${source.name} به دقیقه`);
  const mode = document.createElement("select");
  mode.setAttribute("aria-label", `حالت انتشار ${source.name}`);
  for (const [value, label] of modes) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    option.selected = source.publication_mode === value;
    mode.append(option);
  }
  const discover = document.createElement("button");
  discover.type = "button";
  discover.className = "small-button";
  discover.textContent = source.feed_url ? "آزمایش دوباره" : "کشف و آزمایش فید";
  discover.addEventListener("click", async () => {
    discover.disabled = true;
    message(`در حال بررسی لینک RSS رسمی ${source.name}...`);
    try {
      const response = await request(`/api/sources/${source.id}/discover`, { method: "POST" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      message(`فید تأیید شد: ${result.items_found} خبر در ${result.feed_url}؛ هنوز غیرفعال است.`);
      await loadSources();
    } catch (error) { message(error.message, true); }
    discover.disabled = false;
  });
  controls.append(interval, mode, discover);
  if (source.feed_url) {
    const activate = document.createElement("button");
    activate.type = "button";
    activate.className = "small-button primary-small";
    activate.textContent = source.enabled ? "ذخیره تنظیمات" : "فعال‌سازی";
    activate.addEventListener("click", async () => {
      const response = await request(`/api/sources/${source.id}/activate`, { method: "POST", body: JSON.stringify({ interval_minutes: Number(interval.value), publication_mode: mode.value }) });
      const result = await response.json();
      if (!response.ok) message(result.error, true);
      else { message(`${source.name} فعال شد.`); await loadSources(); }
    });
    controls.append(activate);
  }
  if (source.enabled) {
    const fetchButton = document.createElement("button");
    fetchButton.type = "button";
    fetchButton.className = "icon-button source-fetch";
    fetchButton.textContent = "↻";
    fetchButton.title = `دریافت اکنون از ${source.name}`;
    fetchButton.setAttribute("aria-label", fetchButton.title);
    fetchButton.addEventListener("click", async () => {
      const response = await request(`/api/sources/${source.id}/fetch`, { method: "POST" });
      const result = await response.json();
      if (!response.ok) message(result.error, true);
      else { message(`${result.added} خبر جدید دریافت شد.`); await loadSources(); }
    });
    controls.append(fetchButton);
  }
  card.append(controls);
  return card;
}

async function loadSources() {
  const response = await fetch("/api/sources");
  const sources = await response.json();
  $("#sources-list").replaceChildren(...sources.map(sourceCard));
  $("#source-total").textContent = sources.length.toLocaleString("fa-IR");
  $("#verified-total").textContent = sources.filter((source) => source.feed_url).length.toLocaleString("fa-IR");
  $("#active-total").textContent = sources.filter((source) => source.enabled).length.toLocaleString("fa-IR");
  $("#error-total").textContent = sources.filter((source) => source.status === "error").length.toLocaleString("fa-IR");
}

async function loadPending() {
  const response = await request("/api/admin/articles");
  const items = await response.json();
  if (!response.ok) throw new Error(items.error || "دریافت صف بررسی ناموفق بود.");
  $("#pending-count").textContent = `${items.length.toLocaleString("fa-IR")} خبر`;
  const list = $("#pending-list");
  list.replaceChildren();
  for (const item of items) {
    const row = document.createElement("article");
    row.className = "pending-row";
    const title = document.createElement("a");
    title.href = item.url;
    title.target = "_blank";
    title.rel = "noopener noreferrer";
    title.textContent = `${item.title} · ${item.source_name}`;
    const approve = document.createElement("button");
    approve.type = "button";
    approve.className = "small-button primary-small";
    approve.textContent = "انتشار";
    approve.addEventListener("click", async () => {
      const result = await request(`/api/articles/${item.id}/approve`, { method: "POST" });
      if (result.ok) { message("خبر منتشر شد."); await loadPending(); }
    });
    row.append(title, approve);
    list.append(row);
  }
  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "muted-text empty-pending";
    empty.textContent = "خبر تأییدنشده‌ای در صف نیست.";
    list.append(empty);
  }
}

async function loadFeatured() {
  const response = await request("/api/admin/published");
  const items = await response.json();
  if (!response.ok) throw new Error(items.error || "دریافت خبرهای منتشرشده ناموفق بود.");
  const list = $("#feature-list");
  list.replaceChildren();
  for (const item of items) {
    const row = document.createElement("article");
    row.className = "pending-row feature-row";
    const title = document.createElement("a");
    title.href = `/news/${item.id}`;
    title.textContent = `${item.title} · ${item.source_name}`;
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = `small-button${item.featured ? " primary-small" : ""}`;
    toggle.textContent = item.featured ? "حذف از ویژه" : "ویژه‌کردن";
    toggle.addEventListener("click", async () => {
      const result = await request(`/api/articles/${item.id}/feature`, {
        method: "POST",
        body: JSON.stringify({ featured: !item.featured }),
      });
      if (result.ok) {
        message(item.featured ? "خبر از ویژه‌ها برداشته شد." : "خبر به ویژه‌ها افزوده شد.");
        await loadFeatured();
      }
    });
    row.append(title, toggle);
    list.append(row);
  }
}

async function loadAssistantRequests() {
  const response = await request("/api/admin/assistant-requests");
  const items = await response.json();
  if (!response.ok) throw new Error(items.error || "دریافت درخواست‌ها ناموفق بود.");
  const pending = items.filter((item) => item.status === "pending");
  $("#assistant-request-count").textContent = `${pending.length.toLocaleString("fa-IR")} در انتظار`;
  const list = $("#assistant-requests");
  list.replaceChildren();
  for (const item of items) {
    const row = document.createElement("article");
    row.className = "pending-row";
    const content = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = item.username;
    const note = document.createElement("p");
    note.className = "muted-text";
    note.textContent = item.message || "درخواست دسترسی به تحریریه";
    const state = document.createElement("span");
    state.className = `status-badge status-${item.status === "pending" ? "verified" : "active"}`;
    state.textContent = item.status === "pending" ? "در انتظار بررسی" : item.status === "approved" ? "تأییدشده" : "ردشده";
    content.append(name, note, state);
    row.append(content);
    if (item.status === "pending") {
      for (const [decision, label] of [["approve", "تأیید دستیار"], ["reject", "رد درخواست"]]) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `small-button${decision === "approve" ? " primary-small" : ""}`;
        button.textContent = label;
        button.addEventListener("click", async () => {
          const result = await request(`/api/admin/assistant-requests/${item.id}/decision`, {
            method: "POST", body: JSON.stringify({ decision }),
          });
          if (result.ok) {
            message(decision === "approve" ? `${item.username} به دستیاران افزوده شد.` : "درخواست رد شد.");
            await loadAssistantRequests();
          }
        });
        row.append(button);
      }
    }
    list.append(row);
  }
  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "muted-text empty-pending";
    empty.textContent = "هنوز درخواستی ثبت نشده است.";
    list.append(empty);
  }
}

async function loadManagedArticles() {
  const response = await request("/api/staff/articles");
  const items = await response.json();
  if (!response.ok) throw new Error(items.error || "دریافت فهرست خبرها ناموفق بود.");
  const list = $("#staff-articles");
  list.replaceChildren();
  for (const item of items) {
    const row = document.createElement("article");
    row.className = "pending-row feature-row";
    const title = document.createElement("a");
    title.href = `/news/${item.id}`;
    title.textContent = `${item.title} · ${item.source_name}${item.exclusive ? " · اختصاصی" : ""}`;
    const edit = document.createElement("button");
    edit.type = "button";
    edit.className = "small-button";
    edit.textContent = "ویرایش";
    edit.addEventListener("click", () => {
      $("#exclusive-title").value = item.title;
      $("#exclusive-summary").value = item.summary || "";
      $("#exclusive-body").value = item.body || "";
      $("#exclusive-category").value = item.category;
      $("#exclusive-form").dataset.editId = item.id;
      $("#editor-heading").textContent = "ویرایش خبر";
      $("#exclusive-submit").textContent = "ذخیره تغییرات";
      $("#exclusive-cancel").hidden = false;
      $("#exclusive-form").scrollIntoView({ behavior: "smooth", block: "center" });
    });
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "small-button";
    remove.textContent = "حذف";
    remove.addEventListener("click", async () => {
      if (!window.confirm("این خبر حذف شود؟")) return;
      const result = await request(`/api/staff/articles/${item.id}`, { method: "DELETE" });
      if (result.ok) { message("خبر حذف شد."); await loadManagedArticles(); }
    });
    row.append(title, edit, remove);
    list.append(row);
  }
}

function resetExclusiveForm() {
  const form = $("#exclusive-form");
  form.reset();
  delete form.dataset.editId;
  $("#editor-heading").textContent = "ثبت خبر اختصاصی";
  $("#exclusive-submit").textContent = "انتشار خبر";
  $("#exclusive-cancel").hidden = true;
}

async function unlock() {
  token = $("#admin-token").value.trim() || token;
  if (!token) return message("کلید مدیریت را وارد کنید.", true);
  sessionStorage.setItem("newsroom-admin-token", token);
  try {
    await loadPending();
    await loadFeatured();
    await loadAssistantRequests();
    await loadManagedArticles();
    $("#login-panel").hidden = true;
    $("#admin-console").hidden = false;
    $("#logout").hidden = false;
    message("دسترسی مدیریت برقرار شد.");
  } catch (error) {
    sessionStorage.removeItem("newsroom-admin-token");
    token = "";
    message(error.message, true);
  }
}

$("#exclusive-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = {
    title: $("#exclusive-title").value,
    category: $("#exclusive-category").value,
    summary: $("#exclusive-summary").value,
    body: $("#exclusive-body").value,
  };
  const editId = form.dataset.editId;
  const result = await request(editId ? `/api/staff/articles/${editId}` : "/api/staff/articles", {
    method: editId ? "PUT" : "POST", body: JSON.stringify(data),
  });
  const payload = await result.json();
  if (!result.ok) { message(payload.error, true); return; }
  message(editId ? "خبر ویرایش شد." : "خبر اختصاصی منتشر شد.");
  resetExclusiveForm();
  await loadManagedArticles();
});
$("#exclusive-cancel").addEventListener("click", resetExclusiveForm);

$("#login").addEventListener("click", unlock);
$("#admin-token").addEventListener("keydown", (event) => { if (event.key === "Enter") unlock(); });
$("#refresh-sources").addEventListener("click", loadSources);
$("#logout").addEventListener("click", () => {
  sessionStorage.removeItem("newsroom-admin-token");
  token = "";
  $("#login-panel").hidden = false;
  $("#admin-console").hidden = true;
  $("#logout").hidden = true;
  message("پنل قفل شد.");
});
$("#theme-toggle").addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  localStorage.setItem("newsroom-theme", dark ? "dark" : "light");
});
if (localStorage.getItem("newsroom-theme") === "dark") document.documentElement.dataset.theme = "dark";
loadSources();
if (token) {
  $("#admin-token").value = token;
  unlock();
}