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
const GEMINI_API_KEY = ""; // paste the restricted free-tier key here
const GEMINI_MODEL = "gemini-flash-latest";

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
   Built-in assistant knowledge base (static mode)
   --------------------------------------------------------------------------
   Instant, keyword-matched answers to first-level questions. When API_BASE
   is set, the Claude-powered backend is used instead.
   ========================================================================== */

const CONNECT_WORDS = ["connect", "talk to", "speak", "call me", "call back", "callback", "consult", "appointment", "book", "meet", "reach the ca", "contact the ca", "human"];

const KNOWLEDGE = [
  {
    keys: ["fee", "charge", "cost", "price", "pricing", "how much"],
    reply: "Fees depend on the scope of work — a simple salaried ITR costs less than a return with capital gains or business income. CA Sasumana Saikumar will confirm the exact fee after a quick discussion. Let me open a form so he can reach you.",
    showForm: true,
  },
  {
    keys: ["due date", "last date", "deadline", "when to file", "due"],
    reply: "Key due dates for AY 2026-27:\n• ITR-1 to ITR-4 (non-audit): 31 July 2026\n• Audit cases (ITR-3/4): 31 October 2026\n• Revised return: up to 31 March 2027\n\nFiling early means faster refunds — don't wait for the last date!",
  },
  {
    keys: ["which itr", "which form", "itr form", "itr-1", "itr 1", "sahaj", "itr-2", "itr 2", "itr-3", "itr 3", "itr-4", "itr 4", "sugam", "salaried"],
    reply: "Quick guide:\n• ITR-1 (SAHAJ): salaried up to ₹50 lakh, pensioners, up to 2 house properties\n• ITR-2: capital gains, foreign assets, or multiple house properties\n• ITR-3: business or professional income\n• ITR-4 (SUGAM): presumptive taxation (44AD/44ADA/44AE)\n\nNot sure? Just share your documents with us — we'll pick the right one.",
  },
  {
    keys: ["document", "papers", "what do i need", "form 16", "required", "checklist"],
    reply: "Documents we typically need:\n• PAN & Aadhaar\n• Form 16 / salary details\n• Form 26AS, AIS & TIS\n• Bank statements & interest certificates\n• Investment proofs (80C, 80D, NPS, ELSS)\n• Home loan interest certificate\n• Capital gains statements & rental details (if any)",
  },
  {
    keys: ["gst"],
    reply: "We handle GST end to end — new registrations, monthly/quarterly returns, and annual filings. Share your details and we'll get you started.",
  },
  {
    keys: ["tds"],
    reply: "We take care of TDS returns, corrections, and reconciliation with Form 26AS/AIS so mismatches never turn into notices.",
  },
  {
    keys: ["pan", "tan", "dsc", "digital signature"],
    reply: "We assist with PAN and TAN applications and corrections, and with Digital Signature Certificates (DSC) — quick and hassle-free.",
  },
  {
    keys: ["capital gain", "shares", "stocks", "mutual fund", "sold property", "property sale"],
    reply: "Capital gains from shares, mutual funds, or property need correct computation, exemption planning and disclosure — usually in ITR-2 (or ITR-3 with business income). This is one of our core services; a quick consultation helps get it right.",
  },
  {
    keys: ["presumptive", "44ad", "44ada", "44ae", "freelancer", "small business"],
    reply: "Under presumptive taxation (44AD for small businesses, 44ADA for professionals, 44AE for transporters), you declare income at a prescribed rate and skip detailed books. Filed via ITR-4 (SUGAM). We can tell you in minutes whether you qualify.",
  },
  {
    keys: ["refund"],
    reply: "For a faster refund: file early, pre-validate your bank account on the income-tax portal, and e-verify your return immediately after filing. We handle all of this as part of our filing service.",
  },
  {
    keys: ["notice"],
    reply: "Received an income-tax notice? Don't panic and don't ignore it — most notices have a reply deadline. We analyse the notice, draft the response and represent your case. Let me connect you to the CA.",
    showForm: true,
  },
  {
    keys: ["update", "new rule", "change", "ay 2026", "2026-27"],
    reply: "Key updates for AY 2026-27:\n• Up to 2 house properties in ITR-1 & ITR-4\n• Enhanced asset reporting in certain forms\n• Separate F&O reporting in ITR-3\n• Revised return till 31 March 2027\n• Only 12-digit Aadhaar accepted\n• Review AIS carefully before filing",
  },
  {
    keys: ["advance tax"],
    reply: "Advance tax is payable in quarterly instalments if your tax liability exceeds ₹10,000 a year. We calculate your instalments so you avoid interest under sections 234B and 234C.",
  },
  {
    keys: ["where", "location", "address", "office", "hyderabad", "madhapur"],
    reply: "Our office: Kakatiya Hills, Madhapur, Hyderabad – 500081.\nWe support clients both online and offline, so you can work with us from anywhere in India.",
  },
  {
    keys: ["phone", "number", "email", "whatsapp", "contact"],
    reply: "You can reach us at:\n📞 +91 86396 28613\n✉️ Sasumana.saikumar@gmail.com\n📍 Kakatiya Hills, Madhapur, Hyderabad – 500081",
  },
  {
    keys: ["service", "what do you do", "offer", "help with"],
    reply: "Our services: ITR filing, presumptive taxation, capital gains computation, TDS filing & compliance, GST registration & returns, PAN/TAN/DSC, advance tax, income-tax notice responses, and tax planning. What do you need help with?",
  },
  {
    keys: ["thank"],
    reply: "You're welcome! 😊 Anything else about ITR, GST, TDS or our services?",
  },
  {
    keys: ["hi", "hello", "namaste", "hey", "good morning", "good evening"],
    reply: "Hello! 🙏 Ask me about ITR filing, due dates, documents, GST, TDS — or say \"connect me to the CA\" and I'll take your details.",
    exact: true,
  },
];

/* ==========================================================================
   Gemini-powered assistant (static mode, optional)
   ========================================================================== */

const FORM_MARKER = "[[CONNECT_FORM]]";

const AI_SYSTEM_PROMPT = `You are the website assistant for SSK & Associates, Chartered Accountants — the practice of CA Sasumana Saikumar, based in India.

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
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: AI_SYSTEM_PROMPT }] },
        contents,
        generationConfig: { maxOutputTokens: 1000 },
      }),
    }
  );
  if (!res.ok) throw new Error(`Gemini ${res.status}`);
  const data = await res.json();
  let reply = (data.candidates?.[0]?.content?.parts || [])
    .map((p) => p.text || "")
    .join("")
    .trim();
  if (!reply) throw new Error("Empty reply");
  const showForm = reply.includes(FORM_MARKER);
  reply = reply.replaceAll(FORM_MARKER, "").trim();
  return { reply, showForm };
}

function localAnswer(text) {
  const q = text.toLowerCase().trim();

  if (CONNECT_WORDS.some((w) => q.includes(w))) {
    return {
      reply: "Great — please share your details below and CA Sasumana Saikumar will get back to you soon. You can also call directly: +91 86396 28613.",
      showForm: true,
    };
  }

  for (const item of KNOWLEDGE) {
    const hit = item.exact
      ? item.keys.some((k) => q === k || q.startsWith(k + " ") || q.startsWith(k + "!"))
      : item.keys.some((k) => q.includes(k));
    if (hit) return { reply: item.reply, showForm: !!item.showForm };
  }

  return {
    reply: "That's a good question — it's best answered by the CA directly. Share your details below and you'll get a call back, or reach us at +91 86396 28613.",
    showForm: true,
  };
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

  if (!API_BASE) {
    // Static mode: Gemini if a key is configured, else the built-in assistant.
    // Gemini failures (quota, network) fall back to the built-in assistant.
    let answer;
    if (GEMINI_API_KEY) {
      const typing = addMsg("typing…", "bot typing");
      try {
        answer = await geminiAnswer(history);
      } catch {
        answer = localAnswer(text);
      }
      typing.remove();
    } else {
      answer = localAnswer(text);
    }
    addMsg(answer.reply, "bot");
    history.push({ role: "assistant", content: answer.reply });
    if (answer.showForm) leadForm.hidden = false;
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
