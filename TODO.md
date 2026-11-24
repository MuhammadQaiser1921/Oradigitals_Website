# To-Do — OraDigitals website

Full review of all 31 pages on 28 Oct 2026; all development items that didn't need your input were done on 29 Oct 2026 (see *Done* at the end). Every page loads, there are no broken links, nothing overflows on phones, and no page shows a browser error. What remains is listed below.

**[You]** = needs your answer, a decision or material (photos, text). **[Dev]** = development work that can be done as soon as you say go.
For content questions, write the answer under the item (*"Keep"*, *"Remove"*, *"Change to: …"*).

---

## 1. Must fix before the site goes live

### Website functions
- [ ] **[You] Form emails — ready to switch on.** Contact, job and internship submissions are saved on the server and the email sending is built, but it stays off until it has a mail account to send from. Send: (1) which address(es) should receive submissions (e.g. info@oradigitals.com), and (2) the mail account to send from — SMTP server, port, username and password (from your email provider or hosting). These go in the server settings, not in the code (see `DEPLOYMENT.md`).
- [ ] **[You] Social media links** in the footer go to linkedin.com/company/oradigitals, facebook.com/oradigitals, instagram.com/oradigitals, youtube.com/@oradigitals and github.com/oradigitals. Do all five accounts exist? Remove any that don't. (Confirmed ones will also be added to the company details Google reads.)

### Content that could cause trouble if not true
- [ ] **[You] Testimonials** — built from the Primmeshiper and InvestMenter case-study quotes (Home, Customers, Case Studies). Have both clients approved their quotes? Send a Treet quote to add Treet.
- [ ] **[You] "Certified" claims** — Oracle-certified architects / implementation (7 places, including the call-to-action on every case study page), "certified" FBR and ZATCA connectors, "certified Shopify Plus developers", PCI-DSS, SOC 2, GDPR. Which certifications or official listings does the company or its staff hold?
- [ ] **[You] Client figures** — InvestMenter "AED 120M+ quarterly volume", "100% FTA compliance / zero audit inquiries"; Primmeshiper "35,000+ orders/day", "99.98% sync". Approved by the clients?
- [ ] **[You] Absolute guarantees** — "100% compliant", "zero downtime", "Ensure 100% UAE Tax Compliance", "24/7 support" (the site also lists Mon–Fri 9–6). Guaranteed in contracts?

---

## 2. Content questions

### Company facts
- [ ] **[You] Address** — the site shows "Building No. 59, Street No. 1, Latifabad, Okara" and "Fateh Town, Okara", while the Google Maps listing embedded on the site says "House 256, Street Number 1, New Latifabad, Okara 56300". Which is correct (and matches the SECP record)? Update Google or the site so they agree.
- [ ] **[You] Offices** — any office besides Okara? Pages mention "headquarters", "our offices", "Dubai team", "Global Delivery & Local Presence", "consulting and development wings".
- [ ] **[You] Working hours / time zone** — "Mon–Fri 9:00–6:00 (PKT / GST)". Which time zone?
- [ ] **[You] History (About page timeline)** — founded 2021? SECP incorporation 2023? FBR & ZATCA connectors 2024? UAE work started 2025 or 2026?
- [ ] **[You] Team size / experience** — "decades of combined experience" — what is accurate?
- [ ] **[You] Inner page heroes** (new, 5 Nov) — every inner page now opens with its own hero: a tag line, heading, short lead, two buttons, three facts and a picture (info cards, photos or client logos). All the text is in `src/data/page-heroes.js`, one block per page; case study heroes are built from the case study record. Please read them through, especially the facts: **7** customers (Customers page), **PSEB registered exporter** (Compliance), **Okara, hybrid roles** (Career), and "clients in Pakistan, Saudi Arabia and the UAE" (About).
- [ ] **[You] Home hero figures** (new, 4 Nov) — the Home hero now shows a row of figures: **10+** team members (the Team page lists 11 people), **9** enterprise services (confirmed 5 Nov), **3** countries served (Pakistan, UAE, Saudi Arabia), **5+** years in business (founded 2021 per the About page). Confirm or send the real numbers (e.g. projects delivered, clients served); they are in `src/data/site-content.js` under the home hero's `stats`.
- [ ] **[You] Home "Who We Are" section** (new, 4 Nov) — under the hero, in the same style as the other sections: "We turn complex business operations / into simple, connected systems", then "From Oracle ERP and tax e-invoicing to bank, courier and e-commerce integrations, one team in Okara builds, connects and supports the systems your business runs on.", with the team photo and a "More About OraDigitals" button. Change the wording if you like (`src/data/site-content.js`, the home page section with `id: 'who-we-are'`).
- [ ] **[You] Home figures shown twice** — besides the new hero figures (10+ / 13 / 3 / 5+), the Home page still has an older figures strip between the case studies and the reviews: **50+ enterprise customers**, **100+ ERP & ASP integrations**, **12+ enterprise services** (there are 13), **5+ years**. Remove it, or confirm the figures?
- [ ] **[You] Departments** — "product engineering division", "legal team" — do these exist?
- [ ] **[You] Reach** — "tailored for multinational corporations", "automate enterprise systems globally" — accurate?
- [ ] **[You] Memorandum of Association** — the pasted SECP text repeated clause (c) under (a); the Compliance page shows it once. Check against the original.

### Team page
- [x] **CEO & Founder photo** — Muhammad Faisal's photo (cropped to the portrait frame) is at `public/images/team/muhammad-faisal.jpg`; used on the Team page and his director card on the Compliance page. Review the two-paragraph intro.
- [x] **Director photo for Muhammad Qaiser** — `public/images/team/muhammad-qaiser.jpg`, on his Compliance director card and his Team page card.
- [ ] **[You] Team photos** — 9 of the 10 people in the Team page carousel still show initials (Muhammad Qaiser has his photo). Muhammad Zeeshan Shafi's LinkedIn photo can't be downloaded without signing in: save it and send the file. Send one head-and-shoulders photo per person (named after the person), plus optional one-line bios.

### Customers
- [ ] **[You] AgileCentral** — in the Customers menu under *Featured Clients* but has no case study; it links to `/customers` as a placeholder. Remove it, or supply a case study? (Its logo file is kept until you decide.)
- [ ] **[You] Case study filter** — the "Oracle ERP & SCM" filter holds only Treet, whose category is "System Integration & ERP". Which label should be used?

### Careers
- [ ] **[You] Open roles** — Senior Oracle ERP Consultant, Backend Node.js & API Engineer, Oracle APEX Developer — are these open now?
- [ ] **[You] Internship** — paid? exactly 3 months? weekly 1-on-1 mentorship and a hiring pathway for every intern?
- [ ] **[You] Life page perks** — sit-stand desks, certification allowances, catered lunches, Tech Innovation Hub, annual retreats, Friday Tech Talks — which exist? The three culture cards on the Life page now show real photos, so their text should describe what the photos show (e.g. "Tech Innovation Hub … high-resolution dashboards and digital whiteboards", "Annual Retreats").

### Services
- [ ] **[You] Service structure and names** (5 Nov) — Services are now 9 main services, three of them with sub-services: **Tax & E-Invoicing Integration** (FBR, ZATCA, Dubai FTA), **System Integration** (Bank API, Courier & Logistics), **E-Commerce Solutions** (Shopify Plus, WordPress & WooCommerce, E-Commerce Integration), plus the new **App Development**. Old addresses redirect. The menu names are used in the footer, HTML sitemap, contact form and case-study links, so changing a menu name updates those too. Some pages still use older variants in their body text (e.g. "Courier & Logistics APIs").
- [ ] **[You] New service pages to review** (5 Nov) — *Tax & E-Invoicing Integration* overview, *WordPress & WooCommerce*, *E-Commerce Integration* and *App Development*: all new text. App Development now names the confirmed stack (Flutter, Oracle APEX, JavaFX, Java Spring Boot) and says JavaFX desktop apps run on "Windows, macOS & Linux"; E-Commerce Integration mentions WhatsApp / SMS / email order updates.
- [ ] **[You] Oracle ERP** — delivered HCM / payroll or EBS-to-Fusion migration projects?
- [ ] **[You] FBR** — "QR codes in under 150 ms", ready connectors for Oracle EBS / Fusion / SAP / Odoo, "compliance in days, not months"?
- [ ] **[You] Dubai FTA** — staff based in Dubai?
- [ ] **[You] System integration** — delivered Kafka, Salesforce, HubSpot, Dynamics, AS400 or FoxPro integrations?
- [ ] **[You] E-commerce** — Magento delivered? (Magento was taken off the E-Commerce pages on 5 Nov, as only Shopify and WordPress were named; say if it should come back.) 100,000+ SKU catalogue? Which payment gateways were actually integrated (Stripe doesn't onboard Pakistani merchants)?
- [ ] **[You] Bank integration** — live integrations with Emirates NBD, FAB, Al Rajhi?
- [ ] **[You] Courier** — FedEx and Aramex built? (other pages list only TCS, DHL, Leopard, Trax)
- [ ] **[You] Oracle APEX** — "20x faster" — compared to what?
- [ ] **[You] System Upgrade & Migration (new, 29 Oct)** — review the new page (`/services/system-upgrade-migration`): is the scope right (Oracle EBS upgrades to 12.2, database upgrades e.g. 11g/12c → 19c, patching, EBS → Fusion Cloud, legacy data migration, server / cloud moves)? Is the 5-step approach and the FAQ answers (rehearsal on a copy, rollback plan, cut-over window) how you actually work? Can Pimidrome be mentioned as your migration tool? Named "Upgrade" rather than "Updation" for Gulf clients — say if you prefer another name.
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

- [ ] **[You] Orange buttons are hard to read.** Orange *text* on white and grey (card subtitles, team roles, phone / email links, timeline years, FAQ icons) now uses a darker orange, `--accent-text` #a8530a (4.7–5.4 : 1; done 5 Nov). Still below the 4.5 : 1 minimum:
  - white text on orange buttons (2.2 : 1) — "Contact Us" in the header (every page) and the orange buttons in the heroes;
  - orange on navy — the highlighted menu item (4.4 : 1, just short).

  Fix: a slightly darker orange for button backgrounds. This changes the brand look of every page, so it needs your OK.
- [ ] **[Dev] Two-line section headings on inner pages** — the landing page's headings have a small label, a bold title and a grey second line; the other 25 pages mostly have only a title. Add these while each page's content is confirmed in section 2.
- [ ] **[You] Treet case study** — its headings skip a level (h2 → h4), which screen readers announce oddly. Small fix, but the page is marked complete, so check before changing.
- [ ] **[You → Dev] Wording that reads as AI-generated** (checked 11 Nov) — 95 sentences on 30 of 35 pages use stock marketing language; the Home page is the worst (27). The newest pages (App Development, System Upgrade & Migration, Contact, Pimidrome) are clean. The full list is in the scan output; the main groups:
  1. **Home page** (marked final, so it needs your OK): the customers section — "Trusted by most popular brands in town / and they are having their best time", "Enter the esteemed echelons of organizations that entrust their intricate financial operations to our meticulous care. Engage with us to experience firsthand, the profound and transformative impact our innovative solutions bring to your business"; the hero — "Put your enterprise operations on intelligent autopilot", "Custom Mission-Critical Platforms", "eliminate operational bottlenecks … global fiscal regulations"; the services intro — "engineered for mission-critical enterprise operations … built for zero downtime and total audit certainty".
  2. **Buzzword headings and phrases:** "Enterprise Integration Vectors", "Banking Integration Vectors", "Robust bridges for real-time synchronization and mission-critical workflows", "Accelerating enterprise software delivery without compromising robustness", "slick modern web portals", "Proven modules configured to match your specific corporate operational charter", "Bespoke Architecture", "World-Class Working Environment", "Consulting Excellence", "top national talent", "seamlessly bridge".
  3. **Stock call-to-action titles:** "Ready for Oracle ERP Excellence?", "Elevate Your Shopify Storefront Today", "Unlock Your Enterprise Data Potential", "Connect Your Systems Seamlessly", "Streamline Your Logistics Today", "Launch a High-Performance E-Commerce Store", "Partner with a Proven Enterprise Team", "Ready to Achieve Similar Architecture Outcomes like …?".
  4. **Claims that need proof first** (see section 1 and the service questions above): "certified" (9 places), "zero downtime", "Ensure 100% UAE Tax Compliance", "100% compliant", "Zero tolerance for system downtime", "zero-compromise data privacy", "decades of combined experience", "unlimited scalability", "sub-second" (25 places, mostly Primmeshiper), "500+ concurrent order webhooks per second".

  Fix: rewrite groups 1–3 in plain, specific language (same meaning, no new claims); group 4 after the facts are confirmed. Normal technical and legal wording (Oracle module names, the SECP Memorandum) stays.
- [ ] **[Dev] Design patterns that look AI-generated** (checked 11 Nov). No emojis are used (only → link arrows and the ★ rating stars). Things that give the template look:
  1. **Red / green colour-coding** in the case-study cards (Customers, Case Studies, every service page's Related Case Study): a red-bordered "Challenge" box with a warning icon and a green "Solution" box with a tick icon, both on tinted backgrounds. Red and green are not brand colours; use the navy / orange palette and plain labels.
  2. **Off-brand colours:** 51 distinct colours in `express.css`. A bright "corporate" blue `#0052cc` (17 uses: case-study tags, figures, links, "Explore" buttons) and a light-blue box `#eff6ff` next to the brand navy `#284763`; seven oranges (`#f09b4a`, `#e08a38`, `#db8837`, `#d97706`, `#ea580c`, `#f59e0b`, `#f5a623`) where one brand orange plus the darker text orange are enough; two grey families (the brand greys `#f3f6f5` / `#e2e8e7` and a second set of slate greys from a UI kit). Reduce to the brand palette as named colours in `:root`.
  3. **Unused multicolour graphics still in the CSS:** the spinning "orbit" hero graphic (red, green, blue, indigo, amber, teal icons and a `rotateOrbit` animation), the marker-pen swoosh under hero words and the animated diagonal lines. None appears on any page; remove them.
  4. **Code-style tech chips:** technology names in the case-study cards are shown in a monospace "code" font in small boxes. Use the normal font.
  5. **The same card everywhere:** almost every service page is a grid of six identical cards (icon in a tinted square, title, one sentence). Mix in other layouts (a short intro paragraph, numbered steps, a two-column "what you get" list, an FAQ) as the pages are expanded (see *Thin pages*).
  6. **Repeated hero picture:** about 20 page heroes use the same three stacked see-through cards with orange icon tiles. Pages with real photos or logos (Team, About, Life, Customers, Career) look better; use more real images (screens of delivered systems, office, team) as they become available.
  7. **Gradient strip** across the top of the case-study details card, and the uppercase "CHALLENGE:" / "SOLUTION:" labels with icons. Plain headings are enough.
  8. **Too many corner and shadow styles:** about 20 different corner radii and 68 shadow declarations. Settle on 2–3 radii and 2 shadows.

  **Done 24 Nov** (design pass with the *impeccable* skill): items 1, 2, 3, 4 and 7, and the corner radii in item 8. Also: the small labels above section headings ("Services", "Case Studies", "Who We Are"…) removed; the orange glow on buttons removed; text arrows (→) and the ✓ list ticks replaced with drawn icons; the decorative blur behind the hero cards removed; the made-up ★★★★★ ratings on the client quotes removed (the Google rating card stays); a brand focus ring, text selection and form colours added; three undefined colour/shadow tokens fixed. The 68 shadow declarations are still to be reduced. Items 5 and 6 wait for more page content and real photos or screenshots.

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
| `sitemap.xml` | ✓ 31 pages, with real last-changed dates |
| Content SEO | — thin pages, near-duplicate pages, no location words, address mismatch with Google |

### Technical
- [ ] **[You] Hosting** — make sure the live server redirects `http://` → `https://` and `www.oradigitals.com` → `oradigitals.com` (the site declares `https://oradigitals.com` as its main address). The settings the server needs are listed in `DEPLOYMENT.md`.

### Content (the biggest ranking factor)
- [ ] **[You → Dev] Thin pages** — 22 of 31 pages had under 300 words (the 12 service pages 157–290, product pages about 130). The page heroes added on 5 Nov give each page a short intro again, but the pages are still short. Expand each service page: a short intro, who it's for, how a project runs, what is delivered, and FAQs. Needs your real process and details. (Related case studies are now shown on the 10 service pages that have one.)
- [ ] **[Dev] Near-duplicate pages** — `/customers` and `/customers/case-studies` still share most of their text (same case-study cards and testimonials), although `/customers` now opens with the customer logos; each product page overlaps 81 % with `/products`. Give `/customers` more of its own content (industries, what was delivered for each customer) as the case studies come in (section 5).
- [ ] **[You] Location in titles.** Each inner page's H1 is now its hero heading (e.g. "About OraDigitals – Oracle ERP, compliance and integration specialists", "Careers at OraDigitals"), so headings now say what the page is about; few of them say *where* (Okara, Pakistan). The home page title and description never mention Pakistan or Okara, so local searches like "Oracle EBS consultant Pakistan" don't match. The home page is marked final — your call.
- [ ] **[You] Short case studies** — Primmeshiper and InvestMenter have about 365 words each against Treet's 1,450. Full write-ups would rank much better.

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
  - new clients, e.g. AgileCentral (already in the menu without a case study).

  For each, send: client name and logo, industry, the problem, what was built, the results (only figures the client approves), technologies used, the services used, and optionally a client quote.
- [ ] **[Dev] Publish them** — each new story is one entry in `src/data/case-studies-data.js`; the page, listing card, menu links, sitemap entries, links to and from the service pages, and its share picture (`npm run images`) follow from it.

### Blog
- [ ] **[You] Where should Blog go in the menu?** Options: a new top-level item ("Blog" or "Insights"), or under About.
- [ ] **[You] Write the first posts** — aim for 3–5 before launch, then a regular schedule. Posts on topics clients search for help SEO most, e.g. "FBR digital invoicing: what Pakistani businesses must do", "ZATCA Phase 2 explained", "Oracle EBS vs Fusion Cloud", "Connecting WooCommerce / Shopify to Oracle EBS". Decide who writes and who approves posts.
- [ ] **[Dev] Build the Blog section** once the menu place is decided and the first post exists (so it never goes live empty) — a `/blog` listing page (cards with cover image, title, date, category, short summary; filter by category) and an article page template (title, author, date, reading time, cover image, body, related services and case studies, share buttons), added to the menu, footer, HTML sitemap and `sitemap.xml`, with article structured data and share pictures.

## 6. Code and repository housekeeping

- [ ] **[You] `scratch/` folder** — scripts that scraped client websites plus the downloaded HTML. It is now left out of git; delete the folder when you no longer need it.

---

## Done

- [x] **Backed up to GitHub** (24 Nov) — all work up to the design pass is committed and pushed to branch `website-update-oct-2026` (commit 5a0f861).

- [x] **Answers of 5 Nov** — Home hero shows **9** enterprise services; the "Rated 5.0 on Google" card is confirmed; App Development rewritten around the real stack: Flutter (mobile), Oracle APEX (web), JavaFX (desktop, with EastFTP as the example) and Java Spring Boot (APIs).

- [x] **Contact form services** (5 Nov) — the service drop-down is built from the Services menu, so it lists all 17 services and sub-services (it used to miss System Integration and the new services).
- [x] **Section backgrounds** (5 Nov) — every page alternates white and grey sections, and each hero's wave matches the section under it. The thin grey divider lines that some sections drew (and others didn't) are gone; the background change alone separates sections.

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
- [x] **Real office and team photos** (your folder, 4 Nov): About, Team, Life and Internship use real photos instead of the AI images (deleted). The Life page culture section now has a team photo (Independence Day, cropped above the two children) and a photo on each of its three cards (team under the wall logo, team trip, team at work; the trip photo keeps the child, as you asked). Photos were cropped, lightly colour-corrected, resized and compressed (87–173 KB each), with metadata removed. Not used: the two dinner photos and the empty-office photo. Team member avatars changed from circles to rounded rectangles (4 Nov).
- [x] **Gulf Logistics & Supply removed** (your answer, 4 Nov: not a client): its case study, share picture, menu link and Case Studies filter ("Fiscal & e-Invoicing", now empty) are gone, and its old addresses redirect to the Case Studies page. Figures taken from it were removed: "99.99% clearance" on the Home ZATCA card and "ZATCA" from the menu's "Zero penalty audits" line. The Customers and Case Studies page descriptions no longer mention Saudi Arabia.
- [x] **ZATCA and Dubai FTA clients confirmed** (your answer, 4 Nov): you have ZATCA and Dubai FTA clients through Flick Network, so the ZATCA page ("tested against thousands of real B2B and B2C transactions across Saudi Arabia") and the About timeline (2024 connectors for Saudi tax authorities) stay as they are. The word "certified" there still depends on the certifications question in section 1.
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
