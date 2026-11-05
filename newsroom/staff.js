const $ = (selector) => document.querySelector(selector);
const memberKey = "newsroom-member-token";
const adminKey = "newsroom-admin-token";
let token = sessionStorage.getItem(memberKey) || sessionStorage.getItem(adminKey) || "";
let articles = [];

function notify(text, isError = false) {
  const box = $("#staff-message");
  box.textContent = text;
  box.className = `notice${isError ? " notice-error" : ""}`;
  box.hidden = false;
}

function request(path, options = {}) {
  return fetch(path, { ...options, headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", ...options.headers } });
}

function resetEditor() {
  $("#staff-editor-form").reset();
  delete $("#staff-editor-form").dataset.editId;
  $("#staff-editor-heading").textContent = "ثبت خبر اختصاصی";
  $("#staff-submit").textContent = "انتشار خبر";
  $("#staff-cancel").hidden = true;
}

function articleRow(article) {
  const row = document.createElement("article");
  row.className = "pending-row feature-row";
  const title = document.createElement("a");
  title.href = `/news/${article.id}`;
  title.textContent = `${article.title} · ${article.category}`;
  const edit = document.createElement("button");
  edit.type = "button";
  edit.className = "small-button";
  edit.textContent = "ویرایش";
  edit.addEventListener("click", () => {
    $("#staff-title").value = article.title;
    $("#staff-summary").value = article.summary || "";
    $("#staff-body").value = article.body || "";
    $("#staff-category").value = article.category;
    $("#staff-editor-form").dataset.editId = article.id;
    $("#staff-editor-heading").textContent = "ویرایش خبر اختصاصی";
    $("#staff-submit").textContent = "ذخیره تغییرات";
    $("#staff-cancel").hidden = false;
    $("#staff-editor-form").scrollIntoView({ behavior: "smooth", block: "center" });
  });
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "small-button";
  remove.textContent = "حذف";
  remove.addEventListener("click", async () => {
    if (!window.confirm("این خبر اختصاصی حذف شود؟")) return;
    const response = await request(`/api/staff/articles/${article.id}`, { method: "DELETE" });
    const result = await response.json();
    if (!response.ok) return notify(result.error, true);
    notify("خبر حذف شد.");
    await loadArticles();
  });
  row.append(title, edit, remove);
  return row;
}

async function loadArticles() {
  const response = await request("/api/staff/articles");
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "دریافت خبرها ناموفق بود.");
  articles = result;
  $("#staff-article-count").textContent = `${articles.length.toLocaleString("fa-IR")} خبر`;
  const list = $("#staff-article-list");
  list.replaceChildren(...articles.map(articleRow));
  if (!articles.length) {
    const empty = document.createElement("p");
    empty.className = "muted-text empty-pending";
    empty.textContent = "هنوز خبر اختصاصی ثبت نکرده‌ای.";
    list.append(empty);
  }
}

async function start() {
  if (!token) return;
  try {
    const response = await fetch("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } });
    const result = await response.json();
    if (!response.ok || !["admin", "assistant"].includes(result.user.role)) throw new Error("دسترسی دستیار مدیر برای این حساب فعال نیست.");
    $("#staff-locked").hidden = true;
    $("#staff-console").hidden = false;
    $("#staff-name").textContent = result.user.role === "admin" ? "مدیر" : result.user.username;
    await loadArticles();
  } catch (error) {
    $("#staff-locked p").textContent = error.message;
  }
}

$("#staff-editor-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = {
    title: $("#staff-title").value,
    summary: $("#staff-summary").value,
    body: $("#staff-body").value,
    category: $("#staff-category").value,
  };
  const id = form.dataset.editId;
  const response = await request(id ? `/api/staff/articles/${id}` : "/api/staff/articles", {
    method: id ? "PUT" : "POST", body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) return notify(result.error, true);
  notify(id ? "خبر ویرایش شد." : "خبر اختصاصی منتشر شد.");
  resetEditor();
  await loadArticles();
});
$("#staff-cancel").addEventListener("click", resetEditor);
$("#staff-logout").addEventListener("click", async () => {
  if (sessionStorage.getItem(memberKey)) {
    try { await request("/api/auth/logout", { method: "POST", body: "{}" }); } catch { /* Clear a session even if it has expired. */ }
    sessionStorage.removeItem(memberKey);
  }
  sessionStorage.removeItem(adminKey);
  window.location.href = "/members";
});
$("#theme-toggle").addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  localStorage.setItem("newsroom-theme", dark ? "dark" : "light");
});
if (localStorage.getItem("newsroom-theme") === "dark") document.documentElement.dataset.theme = "dark";
start();
