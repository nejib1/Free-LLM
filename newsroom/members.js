const $ = (selector) => document.querySelector(selector);
const storageKey = "newsroom-member-token";
let token = sessionStorage.getItem(storageKey) || "";

function showMessage(text, isError = false) {
  const box = $("#member-message");
  box.textContent = text;
  box.className = `notice${isError ? " notice-error" : ""}`;
  box.hidden = false;
}

async function api(path, body, method = "POST") {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(path, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "درخواست انجام نشد.");
  return payload;
}

function setMode(mode) {
  const register = mode === "register";
  $("#register-form").hidden = !register;
  $("#login-form").hidden = register;
  $("#show-register").classList.toggle("is-active", register);
  $("#show-login").classList.toggle("is-active", !register);
  $("#show-register").setAttribute("aria-selected", String(register));
  $("#show-login").setAttribute("aria-selected", String(!register));
}

function showAccount(user, requestStatus) {
  $("#auth-forms").hidden = true;
  $("#account-panel").hidden = false;
  $("#account-name").textContent = user.username;
  $("#assistant-request-form").hidden = user.role !== "member" || requestStatus === "pending";
  $("#staff-link").hidden = user.role !== "assistant";
  if (user.role === "assistant") $("#account-role").textContent = "دستیار مدیر · دسترسی انتشار خبر اختصاصی فعال است";
  else if (requestStatus === "pending") $("#account-role").textContent = "درخواست دستیار شما در انتظار بررسی مدیر است.";
  else if (requestStatus === "rejected") $("#account-role").textContent = "درخواست قبلی تأیید نشد؛ می‌توانید درخواست تازه بفرستید.";
  else $("#account-role").textContent = "عضو · برای دسترسی تحریریه درخواست دستیار بدهید.";
}

async function restoreSession() {
  if (!token) return;
  try {
    const response = await fetch("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error);
    showAccount(payload.user, payload.assistant_request);
  } catch {
    token = "";
    sessionStorage.removeItem(storageKey);
  }
}

async function authenticate(event, mode) {
  event.preventDefault();
  const payload = await api(`/api/auth/${mode}`, mode === "register" ? {
    username: $("#register-username").value,
    password: $("#register-password").value,
  } : {
    username: $("#login-username").value,
    password: $("#login-password").value,
  });
  token = payload.token;
  sessionStorage.setItem(storageKey, token);
  showAccount(payload.user, null);
  showMessage(mode === "register" ? "حساب ساخته شد؛ اکنون درخواست دستیار را ثبت کنید." : "وارد حساب شدید.");
}

$("#show-register").addEventListener("click", () => setMode("register"));
$("#show-login").addEventListener("click", () => setMode("login"));
$("#register-form").addEventListener("submit", async (event) => {
  try { await authenticate(event, "register"); } catch (error) { showMessage(error.message, true); }
});
$("#login-form").addEventListener("submit", async (event) => {
  try { await authenticate(event, "login"); } catch (error) { showMessage(error.message, true); }
});
$("#assistant-request-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await api("/api/auth/assistant-request", { message: $("#request-message").value });
    $("#assistant-request-form").hidden = true;
    $("#account-role").textContent = "درخواست شما ثبت شد و پس از بررسی مدیر نتیجه مشخص می‌شود.";
    showMessage("درخواست دستیار برای مدیر ارسال شد.");
  } catch (error) { showMessage(error.message, true); }
});
$("#member-logout").addEventListener("click", async () => {
  try { await api("/api/auth/logout", {}); } catch { /* Expired sessions are cleared locally too. */ }
  token = "";
  sessionStorage.removeItem(storageKey);
  $("#account-panel").hidden = true;
  $("#auth-forms").hidden = false;
  showMessage("از حساب خارج شدید.");
});
$("#theme-toggle").addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  localStorage.setItem("newsroom-theme", dark ? "dark" : "light");
});
if (localStorage.getItem("newsroom-theme") === "dark") document.documentElement.dataset.theme = "dark";
restoreSession();
