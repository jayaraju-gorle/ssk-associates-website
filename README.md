# SSK & Associates — Chartered Accountants Website

Website + assistant for the CA practice of **CA Sasumana Saikumar** (SSK & Associates).

**Live site:** hosted on GitHub Pages (static mode) — deployed automatically from `main` by `.github/workflows/deploy-pages.yml`, serving the `public/` folder.

## Static mode vs backend mode

The site runs in one of two modes, controlled by `API_BASE` at the top of `public/app.js`:

| | Static mode (default, GitHub Pages) | Backend mode |
|---|---|---|
| Hosting | GitHub Pages — free, no server | Any Node host running `server.js` |
| Chat assistant | **Gemini API** (if `GEMINI_API_KEY` is set in `app.js`), with automatic fallback to the built-in keyword assistant | Claude API (Opus 4.8) |
| Lead emails | [FormSubmit.co](https://formsubmit.co) relay → `Sasumana.saikumar@gmail.com` | Nodemailer SMTP + `leads.json` backup |
| Setup needed | **One-time:** the first form submission triggers an activation email from FormSubmit to the destination inbox — click the link in it once, and all future leads are delivered. | `.env` with `ANTHROPIC_API_KEY` + SMTP creds |

To switch to backend mode later: host `server.js` anywhere, then set `API_BASE = "https://your-api-host"` in `public/app.js`.

## Enabling the Gemini AI assistant (static mode)

A key on a static site is visible to visitors — there is no way to hide it. The safe setup is a **free-tier key with no billing**, locked to this site:

1. The site owner (CA) signs in to [Google AI Studio](https://aistudio.google.com) with their Google account and creates an API key. **Do not attach billing** — the free tier is enough for a small site, and with no billing there is nothing to drain.
2. In [Google Cloud console → APIs & Services → Credentials](https://console.cloud.google.com/apis/credentials), edit the key:
   - **Application restrictions** → HTTP referrers → add the site's URLs (e.g. `https://<user>.github.io/*` and later `https://yourdomain.in/*`)
   - **API restrictions** → restrict to *Generative Language API*
3. Paste the key into `GEMINI_API_KEY` at the top of `public/app.js` and push.

If the key is missing, quota-exhausted, or the API errors, the chat silently falls back to the built-in keyword assistant — the widget never breaks.

## Custom domain (GitHub Pages)

1. Buy a domain (e.g. `sskassociates.in`).
2. At the DNS provider, add a `CNAME` record: `www` → `jayaraju-gorle.github.io`. (Optionally apex `A` records to GitHub Pages IPs: 185.199.108.153, .109., .110., .111.)
3. In the GitHub repo → Settings → Pages → Custom domain, enter the domain and enable "Enforce HTTPS" (certificate is issued automatically).
4. Add a file `public/CNAME` containing just the domain name so deployments keep it.

## What's included

- **Evergreen homepage** (`public/index.html`) — the firm's full service catalogue (ITR, presumptive taxation, capital gains, TDS, GST, PAN/TAN/DSC, advance tax, notices, tax planning), why-choose-us, office location (Kakatiya Hills, Madhapur, Hyderabad), team, and contact form. A seasonal ribbon at the top links to the ITR season page.
- **Seasonal page** (`public/itr-2026.html`) — the ITR Season 2026 landing page: form guide with AY 2026-27 due dates, documents checklist, smart-filer tips, key updates. Next year, copy it to `itr-2027.html`, update the dates in `app.js`/HTML, and repoint the homepage ribbon.
- All section content on both pages is data-driven from arrays at the top of `public/app.js` — each section renders only if its container exists on the page.
- **AI assistant** — a chat widget powered by the Claude API (Opus 4.8). It answers first-level questions about ITR filing, due dates, documents, and services. When a visitor asks to connect with the CA, it floats a contact form inside the chat.
- **Lead capture** — form submissions (from the chat or the contact section) are emailed to `LEAD_TO_EMAIL` and **always** appended to `leads.json` as a local backup, so no lead is lost even if email is misconfigured.

## Setup

```bash
cd ssk-associates-website
npm install
copy .env.example .env    # then edit .env
npm start                 # http://localhost:3000
```

### .env values

| Variable | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Required for the chat assistant. Get one at platform.claude.com |
| `SMTP_HOST/PORT/USER/PASS` | Optional. For Gmail use `smtp.gmail.com`, port `465`, and a Google **App Password** (Google Account → Security → 2-Step Verification → App passwords). Without SMTP, leads still land in `leads.json`. |
| `LEAD_TO_EMAIL` | Where enquiries are sent (defaults to Sasumana.saikumar@gmail.com) |

## Adding more CA associates later

Open `public/app.js` and add an entry to the `TEAM` array at the top — the "Our Team" section renders from it automatically. No HTML changes needed.

## How the assistant's "connect to CA" flow works

The system prompt (in `server.js`) instructs the model to append a hidden token `[[CONNECT_FORM]]` when the visitor asks to talk to the CA. The server strips the token and returns `showForm: true`, and the frontend then shows the lead form inside the chat. Submissions go to `/api/contact` (same endpoint as the main contact form).

## Updating tax-season content next year

- Due dates / ITR descriptions: edit `ITR_FORMS`, `UPDATES`, `ON_TIME` in `public/app.js`; rename/copy `itr-2026.html` and update its hero due-date card.
- Homepage ribbon and "ITR Season" card: edit `index.html` (search for `itr-2026`).
- Facts the assistant knows: edit `SYSTEM_PROMPT` in `server.js`.

## Deploying

Any Node host works (Render, Railway, Cloud Run, a VPS). Set the same environment variables there. Note: on ephemeral hosts (Cloud Run), `leads.json` won't persist across restarts — configure SMTP so leads arrive by email.
