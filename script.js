// Replace this with your published n8n production webhook URL.
const WEBHOOK_URL = "https://n8n-ronsynt.onrender.com/webhook/customer-enquiry"; //"https://ronsynt7.app.n8n.cloud/webhook/customer-enquiry";

const form = document.getElementById("enquiryForm");
const submitBtn = document.getElementById("submitBtn");
const buttonLabel = submitBtn.querySelector(".button-label");
const messageInput = document.getElementById("message");
const characterCount = document.getElementById("characterCount");
const resultPanel = document.getElementById("resultPanel");
const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const responseOutput = document.getElementById("responseOutput");
   
const fields = {
  customerName: document.getElementById("customerName"),
  customerEmail: document.getElementById("customerEmail"),
  subject: document.getElementById("subject"),
  message: messageInput,
  consent: document.getElementById("consent")
};

messageInput.addEventListener("input", () => characterCount.textContent = messageInput.value.length);

document.getElementById("loadSampleBtn").addEventListener("click", () => {
  fields.customerName.value = "Alex Morgan";
  fields.customerEmail.value = "alex.morgan@example.com";
  fields.subject.value = "Question about your service pricing";
  fields.message.value = "Hello, I would like to know more about your available service packages and whether you offer a monthly plan for small businesses. Please send me more information about the inclusions and next steps.";
  fields.consent.checked = true;
  characterCount.textContent = fields.message.value.length;
  clearValidation();
  resultPanel.hidden = true;
});

Object.values(fields).forEach(field => {
  field.addEventListener("input", () => clearFieldError(field.id));
  field.addEventListener("change", () => clearFieldError(field.id));
});

form.addEventListener("submit", async event => {
  event.preventDefault();
  clearValidation();
  resultPanel.hidden = true;

  if (!validateForm()) return;

  if (WEBHOOK_URL.includes("PASTE_YOUR_N8N")) {
    showResult(false, "Webhook URL not configured", "Open script.js and replace the placeholder with your n8n production webhook URL.", { error: "Missing WEBHOOK_URL" });
    return;
  }

  const payload = {
    customer_name: fields.customerName.value.trim(),
    customer_email: fields.customerEmail.value.trim(),
    subject: fields.subject.value.trim(),
    message: fields.message.value.trim(),
    source: "website",
    submitted_at: new Date().toISOString()
  };

  setLoading(true);

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const raw = await response.text();
    let body;
    try { body = raw ? JSON.parse(raw) : {}; }
    catch { body = { raw_response: raw || "No response body returned." }; }

    if (!response.ok) throw new Error(`Webhook returned HTTP ${response.status}: ${JSON.stringify(body)}`);

    showResult(true, "Enquiry submitted successfully", "The webhook accepted your enquiry. Check the n8n execution and Google Sheets log.", { sent_payload: payload, webhook_response: body });
    form.reset();
    characterCount.textContent = "0";
  } catch (error) {
    showResult(false, "Submission failed", "Check the webhook URL, workflow status, CORS settings, browser console, and n8n execution logs.", { error: error.message });
  } finally {
    setLoading(false);
  }
});

function validateForm() {
  let valid = true;
  if (!fields.customerName.value.trim()) { setFieldError("customerName", "Please enter your full name."); valid = false; }
  const email = fields.customerEmail.value.trim();
  if (!email) { setFieldError("customerEmail", "Please enter your email address."); valid = false; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFieldError("customerEmail", "Please enter a valid email address."); valid = false; }
  if (!fields.subject.value.trim()) { setFieldError("subject", "Please enter a subject."); valid = false; }
  if (fields.message.value.trim().length < 10) { setFieldError("message", "Please enter at least 10 characters."); valid = false; }
  if (!fields.consent.checked) { setFieldError("consent", "Please confirm the testing consent."); valid = false; }
  return valid;
}

function setFieldError(id, message) {
  const field = fields[id];
  const error = document.querySelector(`[data-error-for="${id}"]`);
  if (field && field.type !== "checkbox") field.classList.add("invalid");
  if (error) error.textContent = message;
}

function clearFieldError(id) {
  const field = fields[id];
  const error = document.querySelector(`[data-error-for="${id}"]`);
  if (field) field.classList.remove("invalid");
  if (error) error.textContent = "";
}

function clearValidation() { Object.keys(fields).forEach(clearFieldError); }

function setLoading(loading) {
  submitBtn.disabled = loading;
  submitBtn.classList.toggle("loading", loading);
  buttonLabel.textContent = loading ? "Submitting..." : "Submit enquiry";
}

function showResult(success, title, message, response) {
  resultPanel.hidden = false;
  resultPanel.classList.toggle("error", !success);
  resultIcon.textContent = success ? "✓" : "!";
  resultTitle.textContent = title;
  resultMessage.textContent = message;
  responseOutput.textContent = JSON.stringify(response, null, 2);
  resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
