# To-Do — OraDigitals website

Full review of all 31 pages on 28 Oct 2026; all development items that didn't need your input were done on 29 Oct 2026 (see *Done* at the end). Every page loads, there are no broken links, nothing overflows on phones, and no page shows a browser error. What remains is listed below.

**[You]** = needs your answer, a decision or material (photos, text). **[Dev]** = development work that can be done as soon as you say go.
For content questions, write the answer under the item (*"Keep"*, *"Remove"*, *"Change to: …"*).

---

## 1. Must fix before the site goes live

### Website functions
- [ ] **[You] Form emails — ready to switch on.** Contact, job and internship submissions are saved on the server and the email sending is built, but it stays off until it has a mail account to send from. Send: (1) which address(es) should receive submissions (e.g. info@oradigitals.com), and (2) the mail account to send from — SMTP server, port, username and password (from your email provider or hosting). These go in the server settings, not in the code (see `DEPLOYMENT.md`).
- [ ] **[You] Back up to GitHub.** All work is committed (branch `website-update-oct-2026`), but the last 3 commits, including the whole Express conversion, exist only on this computer. Approve pushing them to GitHub.
- [ ] **[You] Social media links** in the footer go to linkedin.com/company/oradigitals, facebook.com/oradigitals, instagram.com/oradigitals, youtube.com/@oradigitals and github.com/oradigitals. Do all five accounts exist? Remove any that don't. (Confirmed ones will also be added to the company details Google reads.)

### Content that could cause trouble if not true
- [ ] **[You] Testimonials** — built from the Primmeshiper and InvestMenter case-study quotes (Home, Customers, Case Studies). Have both clients approved their quotes? Send a Treet quote to add Treet.
- [ ] **[You] "Certified" claims** — Oracle-certified architects / implementation (7 places, including the call-to-action on every case study page), "certified" FBR and ZATCA connectors, "certified Shopify Plus developers", PCI-DSS, SOC 2, GDPR. Which certifications or official listings does the company or its staff hold?
- [ ] **[You] Gulf Logistics & Supply (KSA) case study** — no logo; its figures (99.99% clearance, 50,000+ invoices/day, < 450 ms) are reused on other pages, including the Home ZATCA card and the ZATCA and Oracle ERP service pages (as a related case study). Real client that agreed to be named?
- [ ] **[You] Client figures** — InvestMenter "AED 120M+ quarterly volume", "100% FTA compliance / zero audit inquiries"; Primmeshiper "35,000+ orders/day", "99.98% sync". Approved by the clients?
- [ ] **[You] Absolute guarantees** — "100% compliant", "zero downtime", "Ensure 100% UAE Tax Compliance", "24/7 support" (the site also lists Mon–Fri 9–6). Guaranteed in contracts?
- [ ] **[You] Photos** — the About, Team ("Collaborative Delivery"), Life and Internship photos are AI-generated but captioned as the real office and team. Send real photos, or approve removing the captions' "our office" wording.

---

## 2. Content questions

### Company facts
- [ ] **[You] Address** — the site shows "Building No. 59, Street No. 1, Latifabad, Okara" and "Fateh Town, Okara", while the Google Maps listing embedded on the site says "House 256, Street Number 1, New Latifabad, Okara 56300". Which is correct (and matches the SECP record)? Update Google or the site so they agree.
- [ ] **[You] Offices** — any office besides Okara? Pages mention "headquarters", "our offices", "Dubai team", "Global Delivery & Local Presence", "consulting and development wings".
- [ ] **[You] Working hours / time zone** — "Mon–Fri 9:00–6:00 (PKT / GST)". Which time zone?
- [ ] **[You] History (About page timeline)** — founded 2021? SECP incorporation 2023? FBR & ZATCA connectors 2024? UAE work started 2025 or 2026?
- [ ] **[You] Team size / experience** — "decades of combined experience" — what is accurate?
- [ ] **[You] Departments** — "product engineering division", "legal team" — do these exist?
- [ ] **[You] Reach** — "tailored for multinational corporations", "automate enterprise systems globally" — accurate?
- [ ] **[You] Memorandum of Association** — the pasted SECP text repeated clause (c) under (a); the Compliance page shows it once. Check against the original.

### Team page
- [ ] **[You] CEO & Founder photo** — Muhammad Faisal currently has a grey sample portrait. Send a photo (it goes in `public/images/team/`) and review the two-paragraph intro. The same photo is used on his director card on the Compliance page.
- [ ] **[You] Director photo for Muhammad Qaiser** — the Compliance page director card shows the grey sample portrait.
- [ ] **[You] Team photos** — the 10 team members show initials. Send photos (and optional one-line bios) to replace them.

### Customers
- [ ] **[You] AgileCentral** — in the Customers menu under *Featured Clients* but has no case study; it links to `/customers` as a placeholder. Remove it, or supply a case study? (Its logo file is kept until you decide.)
- [ ] **[You] Case study filter** — the "Oracle ERP & SCM" filter holds only Treet, whose category is "System Integration & ERP". Which label should be used?

### Careers
- [ ] **[You] Open roles** — Senior Oracle ERP Consultant, Backend Node.js & API Engineer, Oracle APEX Developer — are these open now?
- [ ] **[You] Internship** — paid? exactly 3 months? weekly 1-on-1 mentorship and a hiring pathway for every intern?
- [ ] **[You] Life page perks** — sit-stand desks, certification allowances, catered lunches, Tech Innovation Hub, annual retreats, Friday Tech Talks — which exist?

### Services
- [ ] **[You] Official name for each of the 13 services** — currently 2–4 variants each (e.g. "Courier Logistics Integration" / "Courier & Logistics APIs" / "Courier Integrations"). The menu names are now also used in the footer, HTML sitemap and case-study links, so changing a menu name updates those too.
- [ ] **[You] Oracle ERP** — delivered HCM / payroll or EBS-to-Fusion migration projects?
- [ ] **[You] FBR** — "QR codes in under 150 ms", ready connectors for Oracle EBS / Fusion / SAP / Odoo, "compliance in days, not months"?
- [ ] **[You] ZATCA** — "tested against thousands of transactions" vs "50,000+ daily" in the case study — which is true?
- [ ] **[You] Dubai FTA** — staff based in Dubai?
- [ ] **[You] System integration** — delivered Kafka, Salesforce, HubSpot, Dynamics, AS400 or FoxPro integrations?
- [ ] **[You] E-commerce** — Magento delivered? 100,000+ SKU catalogue? Which payment gateways were actually integrated (Stripe doesn't onboard Pakistani merchants)?
- [ ] **[You] Bank integration** — live integrations with Emirates NBD, FAB, Al Rajhi?
- [ ] **[You] Courier** — FedEx and Aramex built? (other pages list only TCS, DHL, Leopard, Trax)
- [ ] **[You] Oracle APEX** — "20x faster" — compared to what?
- [ ] **[You] System Upgrade & Migration (new, 29 Oct)** — review the new page (`/services/system-upgrade-migration`): is the scope right (Oracle EBS upgrades to 12.2, database upgrades e.g. 11g/12c → 19c, patching, EBS → Fusion Cloud, legacy data migration, server / cloud moves)? Is the 5-step approach and the FAQ answers (rehearsal on a copy, rollback plan, cut-over window) how you actually work? Can Pimidrome be mentioned as your migration tool? Named "Upgrade" rather than "Updation" for Gulf clients — say if you prefer another name.
- [ ] **[You] Contact form** — the service dropdown leaves out System Integration & Middleware. Intentional?
- [ ] **[You] Services page has an office map** ("Visit Us — Consult Our Engineering Team") in the middle of the service catalogue. Remove it? The map is already on About, Contact and Compliance.

### Products
- [ ] **[You] EastFTP and Pimidrome** — both shipped and licensable today, with every listed feature implemented?
- [ ] **[You] Product pages are thin** — they repeat the catalogue text. Send screenshots, system requirements or use cases to fill them out.

### Case studies (other than Treet)
- [ ] **[You] Primmeshiper** — really a 3PL / fulfillment company? Peak volume 30,000 or 35,000+ orders/day? Performance figures measured in production?
- [ ] **[You] InvestMenter** — business description (FinTech, real estate, family office, DIFC & Germany) accurate?

---

## 3. Design, usability and accessibility

Phones, tablets and desktops (320–1920 px) all work without sideways scrolling; forms, menus and footer were improved on 29 Oct (see *Done*).

- [ ] **[You → Dev] Orange text is hard to read.** Contrast is 2.2 : 1 where 4.5 : 1 is the accessibility minimum:
  - orange text on white — card subtitles, team roles, phone / email links (65 places on 9 pages);
  - white text on orange buttons — "Contact Us" in the header (every page) and the landing hero button;
  - orange on navy — the highlighted menu item (4.4 : 1, just short).

  Fix: a slightly darker orange for text and button backgrounds (keeps the brand look). This also changes the landing page, so it needs your OK.
- [ ] **[Dev] Two-line section headings on inner pages** — the landing page's headings have a small label, a bold title and a grey second line; the other 25 pages mostly have only a title. Add these while each page's content is confirmed in section 2.
- [ ] **[You] Treet case study** — its headings skip a level (h2 → h4), which screen readers announce oddly. Small fix, but the page is marked complete, so check before changing.
- [ ] **[You] Gulf Logistics case-study card** has no logo, so it looks unfinished next to the others (depends on the content decision in section 1).

## 4. Search engines (SEO)

**Status: technical SEO done; content SEO not started.** All meta tags and technical items are now in place. What remains needs your content or accounts.

| Meta tag / item | Status |
|---|---|
| Page title | ✓ unique per page, all ≤ 65 characters |
| Meta description | ✓ unique per page, all ≤ 160 characters |
| Canonical URL | ✓ one address per page (`/about/` redirects to `/about`); none on error pages |
| Share tags (Open Graph, Twitter) | ✓ branded share picture; own picture for each case study and product |
| Structured data (company details) | ✓ fixed (encoding, PNG logo, postal code, both phones); article data on case studies. Still to add: social profiles, Google Business Profile, map coordinates and opening hours (after the address is confirmed) |
| Breadcrumb markup | — (removed with the visible breadcrumb) |
| Viewport, language, favicon, phone home-screen icon | ✓ |
| Robots | ✓ `robots.txt`; error pages marked "noindex" |
| `sitemap.xml` | ✓ 32 pages, with real last-changed dates |
| Content SEO | — thin pages, near-duplicate pages, no location words, address mismatch with Google |

### Technical
- [ ] **[You] Hosting** — make sure the live server redirects `http://` → `https://` and `www.oradigitals.com` → `oradigitals.com` (the site declares `https://oradigitals.com` as its main address). The settings the server needs are listed in `DEPLOYMENT.md`.

### Content (the biggest ranking factor)
- [ ] **[You → Dev] Thin pages** — 22 of 31 pages had under 300 words (the 12 service pages 157–290, product pages about 130), and removing the inner-page heroes took away each page's intro paragraph. Expand each service page: a short intro, who it's for, how a project runs, what is delivered, and FAQs. Needs your real process and details. (Related case studies are now shown on the 10 service pages that have one.)
- [ ] **[Dev] Near-duplicate pages** — `/customers` and `/customers/case-studies` still share most of their text (same case-study cards and testimonials), although `/customers` now opens with the customer logos; each product page overlaps 81 % with `/products`. Give `/customers` more of its own content (industries, what was delivered for each customer) as the case studies come in (section 5).
- [ ] **[You] Headings and titles don't say what you do or where.** Each inner page's H1 is now its first section heading (e.g. "Built on Deep Technical Discipline" on About, "Open Positions" on Career, "Our Product Suite" on Products), and most don't say what the company does or where; rewording those first headings (e.g. "Oracle ERP Consultancy in Okara, Pakistan") would help search. The home page title and description never mention Pakistan or Okara, so local searches like "Oracle EBS consultant Pakistan" don't match. The home page is marked final — your call.
- [ ] **[You] Short case studies** — Primmeshiper, InvestMenter and Gulf Logistics have about 365 words each against Treet's 1,450. Full write-ups would rank much better.

### Local search
- [ ] **[You] Google Business Profile** — "OraDigitals Pvt. Ltd." exists on Google Maps (5.0 ★, 10 reviews) but its address differs from the website (see *Company facts*). Make the name, address and phone match exactly everywhere, add the second phone number to the profile, and send the profile link so it can be added to the site and structured data.
- [ ] **[Dev] Local details in structured data** — map coordinates and opening hours (after the address and time zone are confirmed).

### Measurement and extras
- [ ] **[You] Analytics / Search Console** — set up Google Analytics and Google Search Console (needs your Google account), then submit `sitemap.xml`.
- [ ] **[Dev] Job-posting markup** for real open roles (shows in Google Jobs) — after the open roles are confirmed (section 2, *Careers*).

## 5. New content to create

### Case studies
- [ ] **[You] Write the case studies** — Treet is the only full case study (about 1,450 words: overview, challenge, solution, results, technology). Write the same depth for:
  - Primmeshiper and InvestMenter (currently about 365 words each, mostly summary);
  - Gulf Logistics & Supply, if it is a real client (see section 1);
  - new clients, e.g. AgileCentral (already in the menu without a case study).

  For each, send: client name and logo, industry, the problem, what was built, the results (only figures the client approves), technologies used, the services used, and optionally a client quote.
- [ ] **[Dev] Publish them** — each new story is one entry in `src/data/case-studies-data.js`; the page, listing card, menu links, sitemap entries, links to and from the service pages, and its share picture (`npm run images`) follow from it.

### Blog
- [ ] **[You] Where should Blog go in the menu?** Options: a new top-level item ("Blog" or "Insights"), or under About.
- [ ] **[You] Write the first posts** — aim for 3–5 before launch, then a regular schedule. Posts on topics clients search for help SEO most, e.g. "FBR digital invoicing: what Pakistani businesses must do", "ZATCA Phase 2 explained", "Oracle EBS vs Fusion Cloud", "Connecting WooCommerce / Shopify to Oracle EBS". Decide who writes and who approves posts.
- [ ] **[Dev] Build the Blog section** once the menu place is decided and the first post exists (so it never goes live empty) — a `/blog` listing page (cards with cover image, title, date, category, short summary; filter by category) and an article page template (title, author, date, reading time, cover image, body, related services and case studies, share buttons), added to the menu, footer, HTML sitemap and `sitemap.xml`, with article structured data and share pictures.

## 6. Speed

- [ ] **[You] Real photos** — the three large photos were compressed (2.5 MB → 560 KB in total); real photos should be sent at about 1,400 px wide and will be compressed the same way.

## 7. Code and repository housekeeping

- [ ] **[You] `scratch/` folder** — scripts that scraped client websites plus the downloaded HTML. It is now left out of git; delete the folder when you no longer need it.

---

## Done

- [x] Arabic and German versions removed.
- [x] Navigation fixed: broken links and menu anchors, breadcrumbs follow the menu, current section highlighted, menu labels match the pages.
- [x] Case studies moved under Customers (`/customers/case-studies/…`); old URLs redirect.
- [x] Separate product pages for EastFTP and Pimidrome; menu uses the product-page wording.
- [x] Mobile menu: simple list with tap-to-open sub-menus; works with keyboard and touch tablets. Rounded corners on all drop-downs.
- [x] Inner pages restyled to match the landing page (landing-style section headings).
- [x] Brand spelling standardised to **OraDigitals**.
- [x] "Authorized by FBR / ZATCA / Dubai FTA / Oracle / Shopify" section removed from Customers.
- [x] Invented testimonials (Tariq Mansoor, Fahad Al-Sulaiman, Rashid Al-Nuaimi) replaced with the existing client quotes.
- [x] Team page: CEO & Founder section (Muhammad Faisal, with email) and a carousel of the 10 team members.
- [x] Compliance page: SECP directors (with email and phone) and the registered principal line of business.
- [x] Second office number (+92 309 1235777) added to the footer, location cards and Contact page.
- [x] WhatsApp button stays on +92 335 5546497 (your decision, 4 Nov); the Contact page's "Call Our Team Now" button also uses this number.
- [x] All work committed to git (29 Oct).
- [x] **Real customers only** (your answer, 4 Nov): the Home logo grid now shows just Treet, Primmeshiper, AgileCentral and InvestMenter, plus Neo Furniture (Dubai office furniture, logo from neofurniture.ae) and Asgard Real Estate (Dubai, JVC; asgardre.com is down for maintenance, so the logo came from the site's January 2026 copy on the Internet Archive and its white lettering was turned navy for the white grid — ask Asgard for their official dark-lettered logo), both added 4 Nov; and Flick Network (tax & e-invoicing software, logo from flick.network), added 4 Nov; the 21 unconfirmed logos (ExxonMobil, Volkswagen, Bosch, MAN and others) were removed. The Customers page now opens with the same logos, as the menu's "Client Overview" promises.
- [x] `robots.txt` added: allows all pages, keeps crawlers out of `/api/` and `/health`, and points to `sitemap.xml`.
- [x] Hero only on the landing page; breadcrumb trail and page-name title removed: every other page goes straight from the header into its content. Each page's first section heading is its H1 (one per page). The 404 / 500 pages show a short message with buttons instead.
- [x] White / grey section alternation like the landing page on every page (25 of 31 pages had neighbouring sections in the same colour). It is now automatic: the first section is white, then they alternate, so new pages follow the pattern by themselves.
- [x] Phone header is one row (73 px instead of 120 px): on phones "Support Desk" and "Contact Us" sit at the bottom of the ☰ menu, under Career. Tablets and desktops keep them in the header.
- [x] Tablet header fixed: the ☰ menu is now used up to 1,100 px (the full menu needs ~1,020 px), so pages no longer scroll sideways on iPads and small laptops; on tablets the ☰ button sits at the right edge of a single-row header.

**29 Oct 2026 — development items done without needing input**

- [x] **Forms protected**: the server checks every submission (required fields, email and phone format, length limits, dropdown values), a hidden spam-trap field catches bots, each visitor can send 5 forms per 10 minutes, and oversized requests are refused.
- [x] **Form emails built** (switched on by the server settings, see section 1).
- [x] **Test data removed**: `data/submissions.json` emptied (it held 170 test entries and nothing real); the tests now use a temporary file.
- [x] **Forms easier to use**: phone fields open the number keypad, the portfolio field opens the web-address keyboard, name / email / phone support browser autofill; a "Sending…" state blocks double submits; errors appear under each field in red; the result shows inside the form without reloading; focus ring is one colour (navy).
- [x] **Form messages can't be faked**: only built-in messages are shown, never text from the web address.
- [x] **Internship applicants** return to the internship form after applying (without JavaScript), not to `/career`.
- [x] **Contact page on phones**: a "Send Us a Message" button at the top jumps to the form; links to a section now stop below the sticky header.
- [x] **Footer**: taller, better-spaced links on phones (41 px); "Clients & Testimonials" now reads "Customers"; the Services column lists all 12 services with their menu names.
- [x] **Keyboard**: case-study filter buttons show a focus outline and announce which filter is on.
- [x] **Phone menu icon** switches between ☰ and × icons instead of turning into text.
- [x] **HTML sitemap** (`/sitemap`) built from the menu: all services, products, every case study, company and career pages — new pages appear by themselves.
- [x] **SEO technical fixes**: trailing-slash addresses redirect; 404 / 500 pages are "noindex" with no canonical; structured data fixed (no "&amp;amp;", PNG logo, province and postal code, both phone numbers); case-study titles shortened to ~60 characters ("Treet Corporation OMS & Oracle EBS Case Study - OraDigitals") and long descriptions trimmed; `sitemap.xml` shows real last-changed dates instead of today; article structured data on case studies.
- [x] **Share pictures**: a branded 1200 × 630 picture for the site and one for each case study and product (made with `npm run images`), replacing the AI office photo.
- [x] **Phone home-screen icon**, app icons, web manifest and header colour for phone browsers.
- [x] **Services ↔ case studies linked**: 10 service pages show their related case studies; each case study lists "Services Used in This Project" with links. Link text names the client ("Read the Treet Corporation case study").
- [x] **Speed**: photos compressed (office 896 → 204 KB, team 799 → 174 KB, internship 831 → 180 KB, same size and look); unused images removed (hero-illustration.png 742 KB, investmenter-logo.png); pages and CSS sent gzip-compressed; images, CSS and fonts cached by browsers for a week in production (the stylesheet address changes when it is edited, so updates still show at once); unused handwriting font and unused Inter weight dropped.
- [x] **Security**: standard security headers on every response (Content Security Policy, no MIME sniffing, no framing by other sites, HTTPS-only for this domain, server software hidden); dependency security updates applied (0 known vulnerabilities).
- [x] **Housekeeping**: `archive/` (218 MB, old Next.js build) left out of git but kept on disk; `scratch/` left out of git; README, QUICKSTART, PROJECT_SUMMARY, DEPLOYMENT and the pre-deployment checklist rewritten for the current site; unused `list` component and leftover language-cleanup script removed.
