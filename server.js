import "dotenv/config";
import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import Anthropic from "@anthropic-ai/sdk";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;
const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL || "Sasumana.saikumar@gmail.com";
const LEADS_FILE = path.join(__dirname, "leads.json");

// Marker the assistant emits when the visitor wants to talk to the CA.
// The server strips it from the reply and tells the frontend to show the contact form.
const FORM_MARKER = "[[CONNECT_FORM]]";

const app = express();
app.use(express.json({ limit: "100kb" }));
app.use(express.static(path.join(__dirname, "public")));

const anthropic = new Anthropic(); // reads ANTHROPIC_API_KEY from env

const SYSTEM_PROMPT = `You are the website assistant for SSK & Associates, Chartered Accountants — the practice of CA Sasumana Saikumar, based in India.

Firm contact details:
- Mobile: +91 8639628613
- Email: Sasumana.saikumar@gmail.com
- Office: Kakatiya Hills, Madhapur, Hyderabad – 500081
- Support is available both online and offline (in person), so clients anywhere in India can work with the firm.

Your job is to answer FIRST-LEVEL questions from visitors about the firm's services and Indian tax/compliance basics, and to connect serious enquiries to the CA.

Services offered:
- Income Tax Return (ITR) filing — salaried individuals, business owners, professionals, HUFs
- Presumptive taxation (44AD / 44ADA / 44AE)
- Capital gains tax computation — stocks, mutual funds, property
- TDS filing & compliance, including Form 26AS/AIS/TIS reconciliation
- GST registration & returns (monthly/quarterly/annual)
- PAN / TAN / DSC services (applications, corrections, digital signature certificates)
- Advance tax calculation (avoiding interest under 234B/234C)
- Responding to income-tax notices
- Tax planning (deductions, investments, regime selection)

The website has a dedicated "ITR Season 2026" guide page at /itr-2026.html covering forms, due dates and documents — mention it when a visitor wants the full filing guide.

Key facts for ITR Season / Assessment Year 2026-27:
- ITR-1 (SAHAJ): salaried individuals with income up to ₹50 lakh, pensioners, up to 2 house properties. Due 31 July 2026.
- ITR-2: individuals/HUFs with capital gains, foreign assets/income, or multiple house properties. Due 31 July 2026.
- ITR-3: individuals/HUFs with business or professional income (non-audit cases). Due 31 July 2026 (31 October 2026 if audit applicable).
- ITR-4 (SUGAM): individuals/HUFs opting for presumptive taxation under 44AD/44ADA/44AE (non-audit cases). Due 31 July 2026 (31 October 2026 if audit applicable).
- Key updates for AY 2026-27: up to 2 house properties can be reported in ITR-1 and ITR-4; enhanced asset reporting in certain ITR forms; separate reporting for F&O transactions in ITR-3; revised returns can be filed up to 31 March 2027; only 12-digit Aadhaar numbers accepted; review AIS carefully before filing.
- Documents typically required: PAN, Aadhaar, Form 16 / salary details, Form 26AS + AIS + TIS, bank statements, interest certificates (FD/RD/savings), investment proofs (80C, 80D, NPS, ELSS), home-loan interest certificate, capital gains statements (shares, mutual funds, property), rental income details.
- Benefits of timely filing: faster refunds, easier loan and visa documentation, carry-forward of eligible losses, avoiding interest and late-filing fees.

Behavior rules:
1. Be warm, concise, and professional. Answer in short paragraphs or brief bullet lists. Match the visitor's language (English, Hindi, or Telugu are all fine).
2. Answer general/educational tax questions confidently from the facts above, but for anything requiring personal tax advice (specific numbers, notices, complex capital gains, choosing regimes), give a brief general pointer and recommend a consultation with CA Sasumana Saikumar.
3. Never compute a visitor's exact tax liability or make guarantees about refunds.
4. If the visitor asks to talk to the CA, book a consultation, get a callback, share their details, or asks something clearly needing personal engagement — say you'll open a quick form to capture their details, and end your reply with the exact token ${FORM_MARKER} on its own. Do not describe the token or mention it; just append it.
5. If asked about fees, say fees depend on the scope of work and the CA will confirm after a quick discussion — then offer to connect them (rule 4).
6. Stay on topic: the firm, its services, and Indian tax/compliance basics. Politely decline unrelated requests.`;

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 40) {
      return res.status(400).json({ error: "Invalid messages." });
    }
    // Only accept simple {role, content:string} turns from the browser.
    const history = messages
      .filter(
        (m) =>
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.length <= 4000
      )
      .map((m) => ({ role: m.role, content: m.content }));
    if (history.length === 0 || history[history.length - 1].role !== "user") {
      return res.status(400).json({ error: "Last message must be from the user." });
    }

    const response = await anthropic.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1024, // chat replies are deliberately short
      thinking: { type: "adaptive" },
      output_config: { effort: "low" }, // simple first-level Q&A; keeps latency low
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: history,
    });

    if (response.stop_reason === "refusal") {
      return res.json({
        reply:
          "Sorry, I can't help with that. For anything about tax filing or our services, I'm happy to assist!",
        showForm: false,
      });
    }

    let reply = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    const showForm = reply.includes(FORM_MARKER);
    reply = reply.replaceAll(FORM_MARKER, "").trim();

    res.json({ reply, showForm });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ error: "The assistant is busy right now. Please try again in a minute." });
    }
    if (err instanceof Anthropic.AuthenticationError) {
      console.error("Anthropic auth failed — check ANTHROPIC_API_KEY in .env");
      return res.status(500).json({ error: "Assistant is not configured yet." });
    }
    if (err instanceof Anthropic.APIError) {
      console.error(`Anthropic API error ${err.status}:`, err.message);
      return res.status(502).json({ error: "The assistant hit a problem. Please try again." });
    }
    console.error("Chat error:", err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

// ---- Lead capture ----

function saveLeadLocally(lead) {
  let leads = [];
  try {
    leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf8"));
  } catch {
    /* first lead */
  }
  leads.push(lead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

function buildTransport() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

app.post("/api/contact", async (req, res) => {
  const { name, phone, email, service, message } = req.body || {};
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ error: "Please enter your name." });
  }
  if (!phone || !/^[+\d][\d\s-]{7,15}$/.test(String(phone).trim())) {
    return res.status(400).json({ error: "Please enter a valid phone number." });
  }

  const lead = {
    name: String(name).trim().slice(0, 100),
    phone: String(phone).trim().slice(0, 20),
    email: String(email || "").trim().slice(0, 100),
    service: String(service || "General enquiry").trim().slice(0, 100),
    message: String(message || "").trim().slice(0, 1000),
    receivedAt: new Date().toISOString(),
  };

  // Always keep a local copy so no lead is ever lost.
  try {
    saveLeadLocally(lead);
  } catch (err) {
    console.error("Could not write leads.json:", err);
  }

  const transport = buildTransport();
  if (transport) {
    try {
      await transport.sendMail({
        from: `"SSK & Associates Website" <${process.env.SMTP_USER}>`,
        to: LEAD_TO_EMAIL,
        subject: `New website enquiry: ${lead.name} — ${lead.service}`,
        text:
          `New enquiry from the SSK & Associates website\n\n` +
          `Name:    ${lead.name}\n` +
          `Phone:   ${lead.phone}\n` +
          `Email:   ${lead.email || "-"}\n` +
          `Service: ${lead.service}\n` +
          `Message: ${lead.message || "-"}\n` +
          `Time:    ${lead.receivedAt}\n`,
      });
    } catch (err) {
      console.error("Email send failed (lead saved to leads.json):", err.message);
    }
  } else {
    console.warn("SMTP not configured — lead saved to leads.json only.");
  }

  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`SSK & Associates website running at http://localhost:${PORT}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn("⚠ ANTHROPIC_API_KEY not set — the AI assistant will not work until you add it to .env");
  }
});
