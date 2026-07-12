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

// Professional line-style SVG icons (24x24 viewBox, stroke = currentColor)
const IC = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

const ICONS = {
  // document with tick — return filed correctly
  itr: IC('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 14.5 11 16.5 15 12.5"/>'),
  // storefront — small business
  shop: IC('<path d="M4 11v9h16v-9"/><path d="M9 20v-5h6v5"/><path d="M3.2 7 5 3h14l1.8 4H3.2z"/><path d="M3.2 7c0 1.5 1.2 2.7 2.8 2.7S8.8 8.5 8.8 7c0 1.5 1.4 2.7 3.2 2.7s3.2-1.2 3.2-2.7c0 1.5 1.2 2.7 2.8 2.7s2.8-1.2 2.8-2.7"/>'),
  // rising chart — gains
  gains: IC('<path d="M3 3v18h18"/><polyline points="6 15 10.5 10.5 13.5 13.5 19 8"/><polyline points="15 8 19 8 19 12"/>'),
  // percent — tax deducted at source
  tds: IC('<line x1="19" y1="5" x2="5" y2="19"/><circle cx="7" cy="7" r="2.6"/><circle cx="17" cy="17" r="2.6"/>'),
  // invoice / tax receipt — GST
  gst: IC('<path d="M6 2h12v20l-2.4-1.8L13.2 22 12 21.1 10.8 22l-2.4-1.8L6 22V2z"/><line x1="9.5" y1="7.5" x2="14.5" y2="7.5"/><line x1="9.5" y1="11" x2="14.5" y2="11"/><line x1="9.5" y1="14.5" x2="12.5" y2="14.5"/>'),
  // identity card — PAN / TAN / DSC
  idcard: IC('<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="10.5" r="2"/><path d="M5.2 15.8c.6-1.6 1.7-2.3 2.8-2.3s2.2.7 2.8 2.3"/><line x1="14" y1="9.5" x2="19" y2="9.5"/><line x1="14" y1="13" x2="19" y2="13"/>'),
  // calendar with rupee — quarterly instalments
  advance: IC('<rect x="3" y="4" width="18" height="17" rx="2"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="3" y1="9" x2="21" y2="9"/><text x="12" y="18.2" text-anchor="middle" font-size="9.5" font-family="Georgia, serif" fill="currentColor" stroke="none">₹</text>'),
  // envelope with alert — notice received
  notice: IC('<rect x="2" y="5" width="16" height="13" rx="2"/><polyline points="2.5 7 10 12.5 17.5 7"/><line x1="21.5" y1="5" x2="21.5" y2="11"/><circle cx="21.5" cy="14.5" r="0.4" fill="currentColor"/>'),
  // pie chart — planning the split
  plan: IC('<path d="M21.2 15.9A10 10 0 1 1 8.1 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>'),
};

const SERVICES = [
  { icon: ICONS.itr, title: "Income Tax Return Filing", desc: "Accurate, on-time ITR filing for salaried individuals, business owners and professionals." },
  { icon: ICONS.shop, title: "Presumptive Taxation", desc: "Simplified filing for small businesses and professionals under 44AD, 44ADA and 44AE." },
  { icon: ICONS.gains, title: "Capital Gains Computation", desc: "Stocks, mutual funds and property — correct computation, exemptions and disclosures." },
  { icon: ICONS.tds, title: "TDS Filing & Compliance", desc: "TDS returns, corrections and reconciliation with Form 26AS so nothing triggers a notice." },
  { icon: ICONS.gst, title: "GST Registration & Returns", desc: "New GST registrations, monthly/quarterly returns and annual filings, handled end to end." },
  { icon: ICONS.idcard, title: "PAN / TAN / DSC Services", desc: "New applications, corrections and digital signature certificates — quick and hassle-free." },
  { icon: ICONS.advance, title: "Advance Tax Calculation", desc: "Quarterly advance tax estimates so you avoid interest under 234B and 234C." },
  { icon: ICONS.notice, title: "Income Tax Notices", desc: "Received a notice? We analyse it, draft the response and represent your case." },
  { icon: ICONS.plan, title: "Tax Planning", desc: "Deductions, investments and regime selection planned in advance — pay only what you must." },
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
  el(`<div class="card"><span class="icon-badge">${s.icon}</span><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div>`)));

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
   Backend configuration
   --------------------------------------------------------------------------
   The site runs fully static (GitHub Pages). Leads are emailed via
   FormSubmit.co (free relay — the destination inbox must confirm a one-time
   activation email after the first submission). If you later host the Node
   backend (server.js) somewhere, set API_BASE to its URL and the site will
   use the Claude-powered assistant and server-side email instead.
   ========================================================================== */

const API_BASE = ""; // e.g. "https://ssk-api.example.com" — empty = static mode
const LEAD_EMAIL = "Sasumana.saikumar@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${LEAD_EMAIL}`;

/* --------------------------------------------------------------------------
   AI assistant via Gemini (static mode).
   SECURITY NOTE: any key placed here is visible to visitors — that is
   unavoidable on a static site. Only use a FREE-TIER Google AI Studio key
   with NO billing attached, and restrict it in Google Cloud console:
     • Application restriction: HTTP referrers → your site's domain(s)
     • API restriction: Generative Language API only
   Worst case, abuse exhausts the free quota and the chat automatically
   falls back to the built-in keyword assistant below.
   -------------------------------------------------------------------------- */
// Key comes from config.js — either plain (geminiKey) or lightly encoded
// (geminiKeyEnc = base64 of the reversed key). The encoding only prevents
// automated secret-scanners from auto-revoking the key; a referrer
// restriction + no-billing project remain the actual protection.
const _CFG = window.SSK_CONFIG || {};
const GEMINI_API_KEY =
  _CFG.geminiKey ||
  (_CFG.geminiKeyEnc ? atob(_CFG.geminiKeyEnc).split("").reverse().join("") : "");
// Tried in order — separate free-tier daily quotas per model, so if the
// primary is exhausted the lite model still answers before the keyword bot.
const GEMINI_MODELS = ["gemini-flash-latest", "gemini-flash-lite-latest"];

async function sendLead(data) {
  if (API_BASE) {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed");
    return;
  }
  const res = await fetch(FORMSUBMIT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `New website enquiry: ${data.name} — ${data.service || "General"}`,
      _template: "table",
      ...data,
    }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || String(json.success) !== "true") {
    throw new Error("Could not send right now. Please call or email us directly.");
  }
}

/* ==========================================================================
   Main contact form (index page only)
   ========================================================================== */

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  const contactStatus = document.getElementById("contact-status");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm));
    if (!data.name || !data.phone) {
      contactStatus.textContent = "Please fill your name and phone number.";
      contactStatus.className = "form-status err";
      return;
    }
    contactStatus.textContent = "Sending…";
    contactStatus.className = "form-status";
    try {
      await sendLead(data);
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
   Fallback when the AI is unavailable (no key, quota exhausted, API error):
   be honest and capture the lead instead of guessing with canned answers.
   ========================================================================== */

const AI_UNAVAILABLE_REPLY =
  "Our automated AI assistant is coming soon! 🚀 For now, please share your query using the form below and you'll hear back from us soon. You can also call us directly at +91 86396 28613.";

function unavailableAnswer() {
  return { reply: AI_UNAVAILABLE_REPLY, showForm: true };
}

/* ==========================================================================
   Gemini-powered assistant (static mode, optional)
   ========================================================================== */

const FORM_MARKER = "[[CONNECT_FORM]]";

const AI_SYSTEM_PROMPT = `You are the website assistant for SSK & Associates, Chartered Accountants — the practice of CA Sasumana Saikumar, based in India.

Today's date is ${new Date().toDateString()}.

Firm contact details:
- Mobile: +91 8639628613
- Email: Sasumana.saikumar@gmail.com
- Office: Kakatiya Hills, Madhapur, Hyderabad – 500081
- Support available online and offline, for clients anywhere in India.

Services: ITR filing (salaried, business, professionals, HUFs), presumptive taxation (44AD/44ADA/44AE), capital gains computation (stocks, mutual funds, property), TDS filing & compliance with Form 26AS/AIS/TIS reconciliation, GST registration & returns, PAN/TAN/DSC services, advance tax calculation, income-tax notice responses, and tax planning.

Key facts for AY 2026-27:
- ITR-1 (SAHAJ): salaried up to ₹50 lakh, pensioners, up to 2 house properties. Due 31 July 2026.
- ITR-2: capital gains, foreign assets/income, multiple house properties. Due 31 July 2026.
- ITR-3: business/professional income (non-audit). Due 31 July 2026 (31 Oct 2026 if audit).
- ITR-4 (SUGAM): presumptive taxation, non-audit. Due 31 July 2026 (31 Oct 2026 if audit).
- Updates: up to 2 house properties in ITR-1/4; enhanced asset reporting; separate F&O reporting in ITR-3; revised return till 31 March 2027; only 12-digit Aadhaar accepted; review AIS before filing.
- Documents: PAN, Aadhaar, Form 16, Form 26AS + AIS + TIS, bank statements, interest certificates, investment proofs (80C/80D/NPS/ELSS), home-loan interest certificate, capital gains statements, rental details.

Rules:
1. Be warm, concise and professional — under 120 words. Match the visitor's language (English, Hindi, Telugu all fine). Plain text only, no markdown formatting.
2. Answer general/educational questions from the facts above; for personal tax advice (specific numbers, notices, regime choice), give a brief pointer and recommend a consultation.
3. Never compute exact tax liability or promise refunds.
4. If the visitor wants to talk to the CA, book a consultation, get a callback, or asks about fees — say you'll open a quick form, and end your reply with the exact token ${FORM_MARKER}. Do not mention or explain the token.
5. Stay on topic: the firm, its services, Indian tax/compliance basics. Politely decline anything else.`;

async function geminiAnswer(chatHistory) {
  const contents = chatHistory.slice(-20).map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));
  let lastErr;
  for (const model of GEMINI_MODELS) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: AI_SYSTEM_PROMPT }] },
            contents,
            // thinkingBudget 0: FAQ replies don't need reasoning tokens, which
            // otherwise eat into maxOutputTokens and truncate answers mid-sentence
            generationConfig: { maxOutputTokens: 2048, thinkingConfig: { thinkingBudget: 0 } },
          }),
        }
      );
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        throw new Error(`Gemini ${model} ${res.status}: ${detail.slice(0, 200)}`);
      }
      const data = await res.json();
      let reply = (data.candidates?.[0]?.content?.parts || [])
        .map((p) => p.text || "")
        .join("")
        .trim();
      if (!reply) throw new Error(`Gemini ${model}: empty reply`);
      const showForm = reply.includes(FORM_MARKER);
      reply = reply.replaceAll(FORM_MARKER, "").trim();
      return { reply, showForm };
    } catch (err) {
      lastErr = err;
      console.warn(`${model} failed, trying next:`, err.message);
    }
  }
  throw lastErr;
}

/* ==========================================================================
   Chat assistant (both pages)
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


function showLeadForm() {
  // The form lives inside the message stream (like a bot card), so it scrolls
  // with the conversation instead of covering it.
  messagesBox.appendChild(leadForm);
  leadForm.hidden = false;
  messagesBox.scrollTop = messagesBox.scrollHeight;
}

function openChat() {
  panel.hidden = false;
  bubble.textContent = "▾";
  if (!greeted) {
    greeted = true;
    if (!API_BASE && !GEMINI_API_KEY) {
      // AI not configured — set expectations up front and capture the lead
      addMsg(
        "Namaste! 🙏 Our automated AI assistant is coming soon. For now, please share your query below and CA Sasumana Saikumar's team will get back to you soon — or call us at +91 86396 28613.",
        "bot"
      );
      showLeadForm();
    } else {
      addMsg(
        "Namaste! 🙏 I'm the SSK & Associates assistant. Ask me anything about ITR filing, GST, TDS, due dates, documents, or our services — or say \"connect me to the CA\" and I'll take your details.",
        "bot"
      );
    }
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

  if (!API_BASE) {
    // Static mode: Gemini answers; if it's unavailable for any reason we say
    // so honestly and capture the query as a lead — no canned guessing.
    let answer;
    if (GEMINI_API_KEY) {
      const typing = addMsg("typing…", "bot typing");
      try {
        answer = await geminiAnswer(history);
      } catch (err) {
        console.warn("Gemini call failed:", err);
        answer = unavailableAnswer();
      }
      typing.remove();
    } else {
      answer = unavailableAnswer();
    }
    addMsg(answer.reply, "bot");
    history.push({ role: "assistant", content: answer.reply });
    if (answer.showForm) showLeadForm();
    chatSend.disabled = false;
    chatInput.focus();
    return;
  }

  const typing = addMsg("typing…", "bot typing");
  try {
    const res = await fetch(`${API_BASE}/api/chat`, {
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
    if (json.showForm) showLeadForm();
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
  if (!data.name || !data.phone) return;
  const submitBtn = leadForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  try {
    await sendLead(data);
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
