/* ==========================================================================
   Site content (edit here — no HTML changes needed)
   Shared by index.html and itr-2026.html: each section renders only if its
   container exists on the current page.
   ========================================================================== */

// Add more CA associates here as the practice grows.
const TEAM = [
  {
    name: "CA Sasumana Saikumar",
    role: "Founder · Chartered Accountant",
    bio: "Personal & business taxation, ITR filing, GST, TDS and compliance.",
    phone: "+91 86396 28613",
    email: "Sasumana.saikumar@gmail.com",
  },
  // { name: "CA New Associate", role: "Associate · Chartered Accountant",
  //   bio: "Area of expertise.", phone: "", email: "" },
];

const SERVICES = [
  { icon: "🧾", title: "Income Tax Return Filing", desc: "Accurate, on-time ITR filing for salaried individuals, business owners and professionals." },
  { icon: "🏪", title: "Presumptive Taxation", desc: "Simplified filing for small businesses and professionals under 44AD, 44ADA and 44AE." },
  { icon: "📈", title: "Capital Gains Computation", desc: "Stocks, mutual funds and property — correct computation, exemptions and disclosures." },
  { icon: "🧮", title: "TDS Filing & Compliance", desc: "TDS returns, corrections and reconciliation with Form 26AS so nothing triggers a notice." },
  { icon: "🧿", title: "GST Registration & Returns", desc: "New GST registrations, monthly/quarterly returns and annual filings, handled end to end." },
  { icon: "🪪", title: "PAN / TAN / DSC Services", desc: "New applications, corrections and digital signature certificates — quick and hassle-free." },
  { icon: "🗓️", title: "Advance Tax Calculation", desc: "Quarterly advance tax estimates so you avoid interest under 234B and 234C." },
  { icon: "📮", title: "Income Tax Notices", desc: "Received a notice? We analyse it, draft the response and represent your case." },
  { icon: "📊", title: "Tax Planning", desc: "Deductions, investments and regime selection planned in advance — pay only what you must." },
];

const WHY_US = [
  "Experienced & qualified Chartered Accountants",
  "Fast turnaround on filings and registrations",
  "100% data confidentiality",
  "Affordable, transparent pricing",
  "Online & offline support — work with us from anywhere",
];

const ITR_FORMS = [
  { num: "1", name: "ITR-1 (SAHAJ)", who: "Salaried individuals with income up to ₹50 lakh, pensioners, up to 2 house properties.", due: "Due 31 July 2026" },
  { num: "2", name: "ITR-2", who: "Individuals / HUFs with capital gains, foreign assets or income, or multiple house properties.", due: "Due 31 July 2026" },
  { num: "3", name: "ITR-3", who: "Individuals / HUFs with business or professional income (non-audit cases).", due: "Due 31 July 2026 · 31 Oct 2026 if audit applicable" },
  { num: "4", name: "ITR-4 (SUGAM)", who: "Individuals / HUFs opting for presumptive taxation (44AD / 44ADA / 44AE), non-audit cases.", due: "Due 31 July 2026 · 31 Oct 2026 if audit applicable" },
];

const DOCUMENTS = [
  "PAN Card", "Aadhaar Card", "Form 16 / Salary details", "Form 26AS, AIS & TIS",
  "Bank account statements", "Interest certificates (FD, RD, Savings)",
  "Investment proofs (80C, 80D, NPS, ELSS)", "Home loan interest certificate",
  "Capital gains statements (shares, mutual funds, property)", "Rental income details (if any)",
];

const SMART_TIPS = [
  "Verify AIS, TIS & Form 26AS", "Report all sources of income", "Disclose capital gains accurately",
  "Pre-validate bank account details", "File before the due date", "Verify your return after filing",
];

const UPDATES = [
  { icon: "🏠", text: "Up to 2 house properties can be reported in ITR-1 and ITR-4." },
  { icon: "📋", text: "Enhanced asset reporting requirements in certain ITR forms." },
  { icon: "📉", text: "Separate reporting for F&O transactions in ITR-3." },
  { icon: "🗓️", text: "Revised return can be filed up to 31 March 2027." },
  { icon: "🪪", text: "Only 12-digit Aadhaar number is accepted." },
  { icon: "🔎", text: "Review AIS carefully before filing to avoid notices." },
];

const ON_TIME = [
  { icon: "💸", text: "Faster processing of refunds." },
  { icon: "🏦", text: "Easy loan and visa documentation." },
  { icon: "📉", text: "Carry forward eligible losses to future years." },
  { icon: "🛡️", text: "Avoid interest and late-filing fees. Maintain tax compliance." },
];

/* ==========================================================================
   Render helpers — each section renders only if its container is on the page
   ========================================================================== */

const el = (html) => {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstChild;
};
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const renderInto = (id, nodes) => {
  const box = document.getElementById(id);
  if (box) box.append(...nodes);
};

renderInto("services-grid", SERVICES.map((s) =>
  el(`<div class="card"><span class="icon">${s.icon}</span><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div>`)));

renderInto("why-list", WHY_US.map((w) => el(`<li>${esc(w)}</li>`)));
renderInto("why-list-card", WHY_US.map((w) => el(`<li>${esc(w)}</li>`)));

renderInto("itr-grid", ITR_FORMS.map((f) =>
  el(`<div class="card itr-card"><span class="itr-num">${f.num}</span><h3>${esc(f.name)}</h3><p>${esc(f.who)}</p><span class="itr-due">${esc(f.due)}</span></div>`)));

renderInto("docs-list", DOCUMENTS.map((d) => el(`<li>${esc(d)}</li>`)));
renderInto("smart-list", SMART_TIPS.map((d) => el(`<li>${esc(d)}</li>`)));

renderInto("updates-grid", UPDATES.map((u) =>
  el(`<div class="card"><span class="icon">${u.icon}</span><p>${esc(u.text)}</p></div>`)));

renderInto("ontime-grid", ON_TIME.map((u) =>
  el(`<div class="card"><span class="icon">${u.icon}</span><p>${esc(u.text)}</p></div>`)));

renderInto("team-grid", TEAM.map((m) => {
  const initials = m.name.replace(/^CA\s+/i, "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
  return el(
    `<div class="card team-card">
       <div class="team-avatar">${esc(initials)}</div>
       <h3>${esc(m.name)}</h3>
       <p class="role">${esc(m.role)}</p>
       <p>${esc(m.bio)}</p>
       ${m.phone ? `<p>📞 ${esc(m.phone)}</p>` : ""}
     </div>`
  );
}));

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ==========================================================================
   Main contact form (index page only)
   ========================================================================== */

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  const contactStatus = document.getElementById("contact-status");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm));
    contactStatus.textContent = "Sending…";
    contactStatus.className = "form-status";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      contactForm.reset();
      contactStatus.textContent = "✓ Thank you! We'll contact you soon.";
      contactStatus.className = "form-status ok";
    } catch (err) {
      contactStatus.textContent = err.message || "Could not send. Please call or email us.";
      contactStatus.className = "form-status err";
    }
  });
}

/* ==========================================================================
   AI chat assistant (both pages)
   ========================================================================== */

const bubble = document.getElementById("chat-bubble");
const panel = document.getElementById("chat-panel");
const closeBtn = document.getElementById("chat-close");
const messagesBox = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatSend = chatForm.querySelector("button");
const leadForm = document.getElementById("chat-lead-form");
const leadCancel = document.getElementById("lead-cancel");

const history = []; // {role, content}
let greeted = false;

function addMsg(text, cls) {
  const div = document.createElement("div");
  div.className = `msg ${cls}`;
  div.textContent = text;
  messagesBox.appendChild(div);
  messagesBox.scrollTop = messagesBox.scrollHeight;
  return div;
}

function openChat() {
  panel.hidden = false;
  bubble.textContent = "▾";
  if (!greeted) {
    greeted = true;
    addMsg(
      "Namaste! 🙏 I'm the SSK & Associates assistant. Ask me anything about ITR filing, GST, TDS, due dates, documents, or our services — or say \"connect me to the CA\" and I'll take your details.",
      "bot"
    );
  }
  chatInput.focus();
}
function closeChat() {
  panel.hidden = true;
  bubble.textContent = "💬";
}

bubble.addEventListener("click", () => (panel.hidden ? openChat() : closeChat()));
closeBtn.addEventListener("click", closeChat);
document.querySelectorAll("[data-open-chat]").forEach((b) => b.addEventListener("click", openChat));

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = "";
  chatSend.disabled = true;

  addMsg(text, "user");
  history.push({ role: "user", content: text });
  const typing = addMsg("typing…", "bot typing");

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history.slice(-20) }),
    });
    const json = await res.json();
    typing.remove();
    if (!res.ok) throw new Error(json.error || "The assistant is unavailable right now.");

    if (json.reply) {
      addMsg(json.reply, "bot");
      history.push({ role: "assistant", content: json.reply });
    }
    if (json.showForm) leadForm.hidden = false;
  } catch (err) {
    typing.remove();
    addMsg(err.message + " You can also call us at +91 86396 28613.", "bot");
  } finally {
    chatSend.disabled = false;
    chatInput.focus();
  }
});

/* Lead form inside chat */
leadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(leadForm));
  data.service = "Chat enquiry";
  const submitBtn = leadForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed");
    leadForm.reset();
    leadForm.hidden = true;
    addMsg("✓ Thank you! Your details have been shared with CA Sasumana Saikumar. You'll get a call back soon.", "bot");
    history.push({ role: "assistant", content: "(The visitor submitted their contact details successfully — they will be contacted soon.)" });
  } catch (err) {
    addMsg(err.message || "Could not submit — please call +91 86396 28613.", "bot");
  } finally {
    submitBtn.disabled = false;
  }
});

leadCancel.addEventListener("click", () => {
  leadForm.hidden = true;
  addMsg("No problem! I'm here if you have more questions. 😊", "bot");
});
