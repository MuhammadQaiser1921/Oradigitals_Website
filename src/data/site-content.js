const {
  caseStudiesData,
  getCaseStudy,
  getAllCaseStudies,
  generateCaseStudyPage,
} = require('./case-studies-data')
const { shareImage } = require('./share-images')
const { pageHeroes } = require('./page-heroes')

// Listing cards are built from the case study registry so they always match the full case study pages
function caseStudyCards() {
  return caseStudiesData.map(({ slug, categoryKey, category, client, clientLogo, title, summary, challenge, solution, metrics, techStack }) => ({
    slug,
    categoryKey,
    category,
    client,
    clientLogo,
    title,
    summary,
    challenge,
    solution,
    metrics,
    techStack,
  }))
}

// Case studies whose project used a service (each case study lists its `services`), shown on that service's page
function relatedCaseStudies(serviceSlug) {
  const slugs = caseStudiesData
    .filter((cs) => (cs.services || []).some((slug) => slug === serviceSlug || slug.startsWith(`${serviceSlug}/`)))
    .map((cs) => cs.slug)
  return caseStudyCards().filter((card) => slugs.includes(card.slug))
}

// Home case study showcase: one wide card per case study with tags, three figures, logo and technologies
function caseStudyShowcase() {
  return caseStudiesData.map((cs) => ({
    client: cs.client,
    href: `/customers/case-studies/${cs.slug}`,
    tags: [cs.category, cs.industry.split(/,| & | and /)[0].trim()],
    text: cs.subtitle,
    figures: (cs.metrics || cs.highlights || []).slice(0, 3).map(({ value, label }) => ({ value, label })),
    logo: cs.clientLogo,
    tech: (cs.techStack || []).slice(0, 4),
  }))
}

// Testimonials use the client quote stored with each case study, so every quote belongs to a real client
// with a published project. Add a client's slug here once its quote is approved for display.
const testimonialClients = ['primmeshiper', 'investmenter-dubai']

// Reviews from clients without a case study, quoted word for word. `rating` is only set when the client
// actually gave a star rating with the review.
const clientReviews = [
  {
    author: 'D-Translation Ltd',
    role: 'Herwig Rogaar, Director',
    quote: 'Thank you for doing a great job. For sure I will contact you again.',
    rating: 5,
    logo: '/public/images/dtranslation-logo.png',
  },
]

function clientTestimonials() {
  const caseStudyQuotes = testimonialClients
    .map((slug) => caseStudiesData.find((cs) => cs.slug === slug))
    .map((cs) => ({
      author: cs.client,
      role: cs.author.replace(`, ${cs.client}`, ''),
      quote: cs.quote,
      // No star rating: the clients gave quotes, not scores
      logo: cs.clientLogo,
    }))
  return [...caseStudyQuotes, ...clientReviews]
}

// Leadership & Team page. Names, roles and the directors' photos are confirmed.
// Team members show their initials until an `image` path (e.g. /public/images/team/<name>.jpg) is added.
const founder = {
  name: 'Muhammad Faisal',
  role: 'CEO & Founder',
  email: 'muhammadfaisal@oradigitals.com',
  image: '/public/images/team/muhammad-faisal.jpg',
  intro: [
    'Muhammad Faisal founded OraDigitals to give businesses that run on Oracle ERP one partner for the systems around it: tax authority e-invoicing, bank and courier APIs, online stores, and custom applications.',
    'As CEO, Muhammad leads client delivery and the engineering team, from scoping new integrations to overseeing projects such as the custom order management system built for Treet Corporation.',
  ],
}

const teamMembers = [
  { name: 'Muhammad Zeeshan Shafi', role: 'ERP Functional Consultant' },
  { name: 'Tahir Sardar', role: 'Oracle EBS Developer' },
  { name: 'Zohaib Ahmad', role: 'Oracle EBS Developer' },
  { name: 'Awais Rasheed', role: 'IT Administrator' },
  { name: 'Muhammad Abdullah', role: 'Oracle EBS Developer' },
  { name: 'Hammad Hadi', role: 'Oracle EBS Developer' },
  { name: 'Muhammad Rizwan', role: 'OIC Developer' },
  { name: 'Muhammad Talha', role: 'OIC Developer' },
  { name: 'Muhammad Zain', role: 'Oracle EBS Developer' },
  { name: 'Muhammad Qaiser', role: 'Oracle EBS Developer', image: '/public/images/team/muhammad-qaiser.jpg' },
]

// Directors as registered with SECP (Compliance page)
const directors = [
  { name: 'Muhammad Faisal', role: 'Director · CEO & Founder', email: 'muhammadfaisal@oradigitals.com', phone: '+92 335 5546497', image: founder.image },
  { name: 'Muhammad Qaiser', role: 'Director', email: 'qaiser@oradigitals.com', phone: '+92 314 8634682', image: '/public/images/team/muhammad-qaiser.jpg' },
]

// Principal line of business, word for word from the SECP-registered Memorandum of Association (Compliance page)
const registeredObjects = [
  {
    clause: '(a)',
    heading: 'Software consultancy and IT services',
    text: 'The principal line of business of the company shall be to establish the business of consultancy in the field of software development and to provide services of project management, IT requirements management, system analysis and design, programming, software testing, software quality assurance, outsourcing of IT and telecommunication services, IT consultancy and IT process development services to the international or domestic markets and to obtain and sustain the latest technology for the purpose of business and to carry on research and development in the field of Computer Sciences.',
  },
  {
    clause: '(b)',
    heading: 'Computer products, system integration and bureau services',
    text: 'The principal business of the Company to carryon business of consultancy, suppliers and dealers in products and services of all kinds of computers their accessories and software, hardware, system integration, multimedia computer bureau services and all kinds of data entries, information technology computer comprising or constituting components of or being associated with or for use in or in connection with and suppliers services, in relation to hardware, software, information technology, computer technology, bureau services system, design system in relation to services of all distribution relating to all such services technologies products which can conveniently be developed programmed supplied or dealt in by the company and to provide all support or services connected therewith by whatever name called.',
  },
  {
    clause: '(c)',
    heading: 'Data processing, software development centres and training',
    text: 'The principal line of business of the company shall be to establish and run data processing centers, computer centers, software development centers, offices and to provide consultancy and data processing software development services, both application packages and operating systems and other services, and to impart training of electronic data processing, computer software and hardware to customers and others and to buy, sell, export, import of software, hardware and establishment of incidental infrastructural facilities, subject to permission of relevant authorities.',
  },
]

// Product registry: drives the Products menu, the /products cards and each /products/:slug page
const products = [
  {
    slug: 'eastftp',
    icon: 'folder',
    name: 'EastFTP',
    tagline: 'Desktop Scheduled FTPS Sync Client',
    text: 'A high-performance JavaFX desktop software designed for scheduled, encrypted FTPS downloads and automated delivery to local server destinations.',
    features: [
      'Scheduled background multi-threaded FTPS downloads',
      'Configurable polling intervals and retry queues',
      'Local folder directory structure mirroring',
      'Secure credential vaulting and detailed audit logging',
    ],
  },
  {
    slug: 'pimidrome',
    icon: 'refresh',
    name: 'Pimidrome',
    tagline: 'Multi-Format Data Migration Engine',
    text: 'Enterprise data migration and conversion suite for cross-platform legacy format transformations and recurring scheduled batch operations.',
    features: [
      'Structured data extraction from legacy flat files & databases',
      'Configurable column mapping and validation logic',
      'Automated XML, CSV, and JSON data transformations',
      'Built-in error logging and recovery checkpoints',
    ],
  },
]

function productCards() {
  return products.map((product) => ({
    id: product.slug,
    icon: product.icon,
    title: product.name,
    subtitle: product.tagline,
    text: product.text,
    list: product.features,
    link: { href: `/products/${product.slug}`, label: `Explore ${product.name}` },
  }))
}

function productPage(product) {
  const demo = { label: `Request ${product.name} Demo`, href: `/contact?product=${product.name}` }
  return {
    title: `${product.name} - ${product.tagline} - OraDigitals`,
    description: product.text,
    image: shareImage(`product-${product.slug}`),
    sections: [
      {
        component: 'split',
        props: {
          badge: 'Key Capabilities',
          title: `What ${product.name} Does`,
          text: product.text,
          list: product.features,
          sideTitle: 'Deployment & Licensing',
          sideText: 'Available for enterprise on-premise and private cloud deployment. Contact our team to request a demo or discuss licensing for your environment.',
        },
      },
      {
        component: 'cta',
        props: {
          title: `Interested in ${product.name}?`,
          text: 'Request a demo or inquire about licensing for on-premise and private cloud deployment.',
          actions: [{ ...demo, style: 'primary' }],
        },
      },
    ],
  }
}

const site = {
  name: 'OraDigitals',
  legalName: 'ORADIGITALS (PRIVATE) LIMITED',
  tagline: 'Enterprise Digital Systems, Oracle ERP & Compliance Integrations',
  email: 'info@oradigitals.com',
  supportEmail: 'support@oradigitals.com',
  phone: '+92 335 5546497',
  phoneRaw: '+923355546497',
  phone2: '+92 309 1235777',
  phone2Raw: '+923091235777',
  address: 'Building No. 59, Street No. 1, Latifabad, Okara',
  cityAddress: 'Fateh Town, Okara, Pakistan',
  mapLink: 'https://maps.app.goo.gl/WTutNSjnZ2KM4qfB6',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.2979914227311!2d73.45983337150201!3d30.819906556031672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922a7604f87bc7d%3A0x7c09f01c5c018f8b!2sOraDigitals%20Consultant!5e0!3m2!1sen!2s!4v1775035383138!5m2!1sen!2s',
  coordinates: '30.819985, 73.459976',
  secpNumber: '0298255',
  psebNumber: 'Z-25-17706/25',
  fbrNumber: 'G905514',
  praNumber: 'G905514-6',
  secpVerificationLink: 'https://leap.secp.gov.pk/#/verify-company-info/0298255',
  // The footer lists only these main services, then links to the Services page for the rest
  footerServices: [
    { label: 'Oracle ERP Implementation', href: '/services/oracle-erp' },
    { label: 'Tax & E-Invoicing Integration', href: '/services/tax-e-invoicing' },
    { label: 'System Integration', href: '/services/system-integration' },
    { label: 'E-Commerce Solutions', href: '/services/ecommerce-solutions' },
    { label: 'App Development', href: '/services/app-development' },
  ],
  nav: [
    {
      label: 'Services',
      href: '/services',
      isMega: true,
      groups: [
        {
          heading: 'ERP, Apps & Data',
          items: [
            { label: 'Oracle ERP Implementation', href: '/services/oracle-erp', desc: 'Oracle Fusion Cloud & EBS rollout' },
            { label: 'Custom ERP Solutions', href: '/services/custom-erp', desc: 'Tailored enterprise ERP workflows' },
            { label: 'App Development', href: '/services/app-development', desc: 'Mobile, web & desktop apps' },
            { label: 'Oracle APEX Applications', href: '/services/oracle-apex', desc: 'Rapid low-code database applications' },
            { label: 'System Upgrade & Migration', href: '/services/system-upgrade-migration', desc: 'EBS, database & legacy system moves' },
            { label: 'Data Analytics & BI', href: '/services/data-analytics', desc: 'Dashboards, pipelines & forecasting' },
          ],
        },
        {
          // The heading links to the overview page; the items are its sub-services
          heading: 'Tax & E-Invoicing Integration',
          href: '/services/tax-e-invoicing',
          items: [
            { label: 'FBR Integration (Pakistan)', href: '/services/tax-e-invoicing/fbr-integration', desc: 'Digital Invoicing & POS fiscalization' },
            { label: 'ZATCA Integration (Saudi Arabia)', href: '/services/tax-e-invoicing/zatca-integration', desc: 'Fatoora Phase 1 & 2 e-Invoicing' },
            { label: 'Dubai FTA Integration (UAE)', href: '/services/tax-e-invoicing/dubai-fta-integration', desc: 'VAT & Corporate Tax compliance' },
          ],
        },
        {
          heading: 'System Integration',
          href: '/services/system-integration',
          items: [
            { label: 'Bank API Integration', href: '/services/system-integration/bank-integration', desc: 'Automated reconciliations & H2H' },
            { label: 'Courier & Logistics Integration', href: '/services/system-integration/courier-integration', desc: 'TCS, DHL, Leopard automated dispatch' },
          ],
        },
        {
          heading: 'E-Commerce Solutions',
          href: '/services/ecommerce-solutions',
          items: [
            { label: 'Shopify Plus Solutions', href: '/services/ecommerce-solutions/shopify-solutions', desc: 'Custom apps & bi-directional sync' },
            { label: 'WordPress & WooCommerce', href: '/services/ecommerce-solutions/wordpress-woocommerce', desc: 'Stores, custom plugins & scaling' },
            { label: 'E-Commerce Integration', href: '/services/ecommerce-solutions/ecommerce-integration', desc: 'Store linked to ERP, payments & couriers' },
          ],
        },
      ],
    },
    {
      label: 'Products',
      href: '/products',
      submenu: products.map((product) => ({ label: product.name, href: `/products/${product.slug}`, desc: product.tagline })),
    },
    {
      label: 'About',
      href: '/about',
      submenu: [
        { label: 'About OraDigitals', href: '/about', desc: 'Mission, certified Oracle consultants & company history' },
        { label: 'Leadership & Team', href: '/team', desc: 'Executive leadership, engineers & domain specialists' },
      ],
    },
    {
      label: 'Customers',
      href: '/customers',
      isMega: true,
      groups: [
        {
          heading: 'Client Ecosystem',
          items: [
            { label: 'Client Overview', href: '/customers', desc: 'Our customers and the work we did' },
            { label: 'Industry Verticals', href: '/customers#case-studies', desc: 'Manufacturing, logistics, retail & fintech' },
            { label: 'Client Testimonials', href: '/customers#testimonials', desc: 'Executive feedback & verified satisfaction' },
          ],
        },
        {
          heading: 'Featured Clients',
          items: [
            { label: 'Treet Corporation', href: '/customers/case-studies/treet-corporation', desc: 'E-commerce OMS & Oracle EBS integration' },
            { label: 'Primmeshiper', href: '/customers/case-studies/primmeshiper', desc: 'High-speed e-commerce & courier logistics' },
            { label: 'AgileCentral', href: '/customers', desc: 'Modern cloud applications & web platforms' },
            { label: 'InvestMenter Dubai', href: '/customers/case-studies/investmenter-dubai', desc: 'German-UAE fintech & automated tax' },
          ],
        },
        {
          heading: 'Case Studies',
          items: [
            { label: 'All Case Studies Hub', href: '/customers/case-studies', desc: 'Dedicated technical breakdowns & ROI reports' },
            { label: 'Custom OMS & E-Commerce', href: '/customers/case-studies/treet-corporation', desc: 'Treet Corp WooCommerce & Oracle EBS OMS' },
            { label: 'Shopify Plus & Logistics Sync', href: '/customers/case-studies/primmeshiper', desc: 'Primmeshiper sub-second ERP gateway' },
            { label: 'Tax & Bank Automation', href: '/customers/case-studies/investmenter-dubai', desc: 'InvestMenter UAE tax returns & bank feeds' },
          ],
        },
        {
          heading: 'Proven Impact',
          items: [
            { label: '100% Fiscal Compliance', href: '/compliance', desc: 'Zero penalty audits across FBR & FTA' },
            { label: 'Automated Order Fulfillment', href: '/customers/case-studies/treet-corporation', desc: 'Centralized OMS, bank & courier workflows' },
            { label: '< 1.2s Courier Dispatch', href: '/customers/case-studies/primmeshiper', desc: '35,000+ daily orders automated' },
          ],
        },
      ],
    },
    {
      label: 'Career',
      href: '/career',
      submenu: [
        { label: 'Internship Program', href: '/career/internship', desc: 'Intensive enterprise training & mentorship' },
        { label: 'Life at OraDigitals', href: '/life', desc: 'Culture, innovation days, perks & work environment' },
        { label: 'Open Opportunities', href: '/career#openings', desc: 'Full-time engineering, consulting & analyst roles' },
      ],
    },
  ],
}

// Contact form service choices follow the Services menu (overview pages, then their sub-services), so the form
// always offers the services the site describes
function serviceOptions() {
  return site.nav
    .find((item) => item.href === '/services')
    .groups.flatMap((group) => [...(group.href ? [group.heading] : []), ...group.items.map((item) => item.label)])
}

// HTML sitemap: built from the menu and the registries, so new services, products and case studies appear automatically
function sitemapCards() {
  const serviceLinks = site.nav
    .find((item) => item.href === '/services')
    .groups.flatMap((group) => [...(group.href ? [{ label: group.heading, href: group.href }] : []), ...group.items])
    .map(({ label, href }) => ({ label, href }))

  return [
    {
      title: `Services (${serviceLinks.length})`,
      list: [{ label: 'All Services', href: '/services' }, ...serviceLinks],
    },
    {
      title: 'Customers & Case Studies',
      list: [
        { label: 'Customers', href: '/customers' },
        { label: 'All Case Studies', href: '/customers/case-studies' },
        ...caseStudiesData.map((cs) => ({ label: cs.client, href: `/customers/case-studies/${cs.slug}` })),
      ],
    },
    {
      title: 'Products',
      list: [
        { label: 'All Products', href: '/products' },
        ...products.map((product) => ({ label: product.name, href: `/products/${product.slug}` })),
      ],
    },
    {
      title: 'Company & Careers',
      list: [
        { label: 'About OraDigitals', href: '/about' },
        { label: 'Leadership & Team', href: '/team' },
        { label: 'Compliance & Legal', href: '/compliance' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Career', href: '/career' },
        { label: 'Internship Program', href: '/career/internship' },
        { label: 'Life at OraDigitals', href: '/life' },
        { label: 'XML Sitemap', href: '/sitemap.xml' },
      ],
    },
  ]
}

const pages = {
  '': {
    title: 'OraDigitals - Enterprise Oracle ERP, Compliance & Integrations',
    description:
      'Minimalist, high-performance enterprise digital solutions for Oracle ERP, Custom ERP, FBR & ZATCA e-Invoicing, Dubai FTA Tax, Bank & Courier APIs.',
    sections: [
      {
        component: 'hero',
        props: {
          dark: true,
          centered: true,
          heading: 'Put your enterprise operations on intelligent autopilot',
          headingBlue: 'Put your enterprise operations',
          headingBlack: 'on intelligent autopilot',
          subheading: 'Specialized in Oracle Cloud Fusion & EBS, Regional Tax & e-Invoicing Gateways, Bank APIs, and Custom Mission-Critical Platforms.',
          text: 'We engineer secure, scalable, and fully integrated digital architectures that eliminate operational bottlenecks and keep your business compliant with global fiscal regulations.',
          actions: [
            { label: 'Schedule Consultation', href: '/contact', style: 'primary' },
            { label: 'Explore Services', href: '/services', style: 'outline' },
          ],
          // Figures the site already supports (Team page, Services page, client countries, About timeline); the
          // service count is confirmed, the others still need confirming before launch
          stats: [
            { value: '10+', label: 'Team members' },
            { value: '9', label: 'Enterprise services' },
            { value: '3', label: 'Countries served' },
            { value: '5+', label: 'Years in business' },
          ],
        },
      },
      {
        component: 'split',
        props: {
          id: 'who-we-are',
          eyebrow: 'Who We Are',
          titleMain: 'We turn complex business operations',
          titleSub: 'into simple, connected systems',
          text: 'From Oracle ERP and tax e-invoicing to bank, courier and e-commerce integrations, one team in Okara builds, connects and supports the systems your business runs on.',
          image: '/public/images/about-team-office.jpg',
          imageAlt: 'The OraDigitals team at work in the Okara office',
          actions: [{ label: 'More About OraDigitals', href: '/about', style: 'outline' }],
        },
      },
      {
        component: 'cards',
        props: {
          eyebrow: 'Services',
          badge: 'Services',
          title: 'Core Specialized Services',
          titleMain: 'Core Specialized Services',
          titleSub: 'engineered for mission-critical enterprise operations',
          subtitle: 'End-to-end implementation, fiscal compliance, and mission-critical API integrations built for zero downtime and total audit certainty.',
          description: 'End-to-end implementation, fiscal compliance, and mission-critical API integrations built for zero downtime and total audit certainty.',
          columns: 4,
          compact: true,
          footerLink: {
            label: 'Explore our services',
            href: '/services',
          },
          cards: [
            {
              icon: 'oracle',
              badge: 'Flagship ERP',
              title: 'Oracle ERP Implementation',
              subtitle: 'Oracle Fusion & EBS',
              text: 'End-to-end implementation, configuration, and support for Oracle Fusion Cloud ERP, Oracle EBS, Financials, SCM, and OIC middleware.',
              featured: true,
              tags: ['Fusion Cloud', 'Oracle EBS', 'Financials & SCM', 'OIC'],
              link: { href: '/services/oracle-erp', label: 'View Oracle ERP Details' },
            },
            {
              icon: 'tax',
              badge: 'Tax Compliance',
              title: 'Tax & E-Invoicing Integration',
              subtitle: 'FBR, ZATCA & UAE FTA',
              text: 'E-invoicing and tax reporting for FBR in Pakistan, ZATCA in Saudi Arabia and the UAE Federal Tax Authority, sent straight from your ERP or POS.',
              short: 'FBR, ZATCA and UAE FTA e-invoicing and tax reporting, straight from your ERP or POS.',
              link: { href: '/services/tax-e-invoicing', label: 'View Tax & E-Invoicing' },
            },
            {
              icon: 'api',
              badge: 'Integration',
              title: 'System Integration',
              subtitle: 'Banks, Couriers & APIs',
              text: 'Middleware and APIs that connect your ERP to banks, couriers, CRMs and online stores, with host-to-host payments and live shipment tracking.',
              short: 'Your ERP connected to banks, couriers, CRMs and online stores through APIs.',
              link: { href: '/services/system-integration', label: 'View System Integration' },
            },
            {
              icon: 'layers',
              badge: 'Custom ERP',
              title: 'Custom ERP Solutions',
              subtitle: 'Built Around Your Operation',
              text: 'Manufacturing, inventory, finance and sales modules built around your processes, with web and mobile access.',
              short: 'ERP modules built around your processes, with web and mobile access.',
              link: { href: '/services/custom-erp', label: 'View Custom ERP' },
            },
            {
              icon: 'refresh',
              badge: 'Upgrades',
              title: 'System Upgrade & Migration',
              subtitle: 'EBS, Database & Legacy Moves',
              text: 'Oracle EBS and database upgrades, patching, EBS to Fusion Cloud moves and legacy data migration.',
              short: 'Oracle EBS and database upgrades, Fusion Cloud moves and data migration.',
              link: { href: '/services/system-upgrade-migration', label: 'View Upgrade & Migration' },
            },
            {
              icon: 'shopping',
              badge: 'E-Commerce',
              title: 'E-Commerce Solutions',
              subtitle: 'Shopify, WordPress & Integration',
              text: 'Shopify Plus and WordPress / WooCommerce stores, connected to your ERP, payment gateways and couriers.',
              short: 'Shopify and WooCommerce stores, connected to your ERP, payments and couriers.',
              link: { href: '/services/ecommerce-solutions', label: 'View E-Commerce Solutions' },
            },
            {
              icon: 'code',
              badge: 'Low-Code',
              title: 'Oracle APEX Applications',
              subtitle: 'Fast Data-Dense Web Apps',
              text: 'Rapid enterprise database applications built natively on Oracle Database with Oracle APEX, enterprise security, and responsive dashboards.',
              short: 'Fast, secure business web apps built on Oracle Database with Oracle APEX.',
              link: { href: '/services/oracle-apex', label: 'View Oracle APEX Details' },
            },
            {
              icon: 'chart',
              badge: 'Intelligence',
              title: 'Data Analytics & BI',
              subtitle: 'Dashboards & ETL Pipelines',
              text: 'Centralized cloud data warehousing, Power BI dashboards, automated executive reporting, and predictive machine learning models.',
              short: 'Power BI dashboards, data warehousing and automated executive reporting.',
              link: { href: '/services/data-analytics', label: 'View Data Analytics' },
            },
            {
              icon: 'mobile',
              badge: 'Apps',
              title: 'App Development',
              subtitle: 'Mobile, Web & Desktop',
              text: 'Flutter mobile apps, Oracle APEX web apps and JavaFX desktop apps on Java Spring Boot APIs, connected to your ERP and business systems.',
              short: 'Mobile, web and desktop apps connected to your ERP and business systems.',
              link: { href: '/services/app-development', label: 'View App Development' },
            },
          ],
        },
      },
      {
        component: 'customers',
        props: {
          eyebrow: 'Customers',
          titleMain: 'Trusted by most popular brands in town',
          titleSub: 'and they are having their best time',
          description:
            'Enter the esteemed echelons of organizations that entrust their intricate financial operations to our meticulous care. Engage with us to experience firsthand, the profound and transformative impact our innovative solutions bring to your business.',
          ctaLabel: 'Meet our customers',
        },
      },
      {
        component: 'case-study-showcase',
        props: {
          eyebrow: 'Case Studies',
          titleMain: 'Proven Client Success',
          titleSub: 'real projects for manufacturing, commerce and finance',
          allLink: { href: '/customers/case-studies', label: 'All case studies' },
          items: caseStudyShowcase(),
        },
      },
      {
        component: 'stats',
        props: {
          items: [
            { value: '50+', label: 'Enterprise Customers' },
            { value: '100+', label: 'ERP & ASP Integrations' },
            { value: '12+', label: 'Enterprise Services' },
            { value: '5+', label: 'Years of Experience' },
          ],
        },
      },
      {
        component: 'reviews',
        props: {
          eyebrow: 'Testimonials',
          titleMain: 'What our clients say',
          titleSub: 'about working with OraDigitals',
          items: clientTestimonials(),
          // Google Maps listing rating, confirmed 5 Nov 2026
          google: { rating: '5.0' },
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Ready to Modernize Your Enterprise Infrastructure?',
          text: 'Speak with our enterprise architects today for a detailed system audit and compliance roadmap.',
          actions: [
            { label: 'Book Architecture Call', href: '/contact', style: 'primary' },
          ],
        },
      },
    ],
  },

  // DEDICATED SERVICE PAGES
  'services/oracle-erp': {
    title: 'Oracle ERP Implementation & Cloud Consulting - OraDigitals',
    description:
      'Certified Oracle Fusion Cloud and Oracle E-Business Suite (EBS) implementation, financials, SCM, and OIC integration services.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'Oracle ERP Implementation Modules',
          subtitle: 'Proven modules configured to match your specific corporate operational charter.',
          columns: 3,
          cards: [
            {
              icon: 'corporate',
              title: 'Oracle Financials Cloud',
              text: 'General Ledger, Accounts Payable, Accounts Receivable, Fixed Assets, and multi-currency Cash Management with automated consolidation.',
            },
            {
              icon: 'layers',
              title: 'Oracle SCM & Procurement',
              text: 'Demand planning, strategic sourcing, supplier lifecycle management, inventory optimization, and automated purchase order dispatch.',
            },
            {
              icon: 'refresh',
              title: 'Oracle Integration Cloud (OIC)',
              text: 'Connect Oracle Cloud with on-premise legacy systems, third-party payment gateways, bank APIs, and regional tax authorities.',
            },
            {
              icon: 'users',
              title: 'Oracle HCM Cloud',
              text: 'Core HR, talent acquisition, payroll automation, compensation modeling, and employee self-service portals.',
            },
            {
              icon: 'speed',
              title: 'EBS to Fusion Cloud Migration',
              text: 'Fast-track transition frameworks with structured data extraction, schema validation, and automated rollback points.',
            },
            {
              icon: 'shield',
              title: 'Oracle Managed Support',
              text: 'Continuous SLA-backed incident management, quarterly patch testing, performance tuning, and audit compliance.',
            },
          ],
        },
      },
      {
        component: 'faq',
        props: {
          badge: 'Frequently Asked Questions',
          title: 'Oracle ERP Implementation FAQs',
          items: [
            {
              question: 'How long does a typical Oracle Fusion Cloud implementation take?',
              answer: 'Standard implementations range between 3 to 6 months depending on the number of modules, custom integrations, and data migration complexity. We provide phased rollouts to ensure business continuity.',
            },
            {
              question: 'Can you integrate Oracle Cloud with our local bank and tax authority?',
              answer: 'Yes. Our specialized middleware connectors seamlessly bridge Oracle ERP with local tax portals (FBR, ZATCA, Dubai FTA) and corporate banking hosts.',
            },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Ready for Oracle ERP Excellence?',
          text: 'Contact our Oracle certified principal architects to schedule a scoping session.',
          actions: [{ label: 'Inquire About Oracle ERP', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/custom-erp': {
    title: 'Custom ERP Software Development - OraDigitals',
    description:
      'Tailor-made ERP software engineered from scratch for specialized manufacturing, distribution, and commercial operations.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'Custom ERP Core Building Blocks',
          subtitle: 'Select the precise modules your organization requires with unlimited scalability.',
          columns: 3,
          cards: [
            { icon: 'building', title: 'Manufacturing & BOM', text: 'Bill of materials, shop floor tracking, machine capacity, and raw material allocations.' },
            { icon: 'layers', title: 'Inventory & Warehousing', text: 'Multi-warehouse batch tracking, barcode scanning, bin locations, and minimum threshold alerts.' },
            { icon: 'bank', title: 'Financials & Double-Entry', text: 'Chart of accounts, journals, balance sheets, profit & loss, and audit trail compliance.' },
            { icon: 'users', title: 'Sales & CRM Integration', text: 'Lead pipelines, quotation approvals, customer credit limits, and automated dispatch triggers.' },
            { icon: 'code', title: 'Mobile Field Access', text: 'Progressive web apps allowing warehouse personnel and field agents to interact in real time.' },
            { icon: 'lock', title: 'Role-Based Security', text: 'Granular permissions, two-factor authentication, and immutable audit logs for compliance.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Build Your Custom ERP With OraDigitals',
          text: 'Own your source code, avoid per-seat licensing, and scale without software restrictions.',
          actions: [{ label: 'Discuss Your Requirements', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/app-development': {
    title: 'App Development: Flutter, Oracle APEX, JavaFX - OraDigitals',
    description:
      'Flutter mobile apps, Oracle APEX web apps and JavaFX desktop apps on Java Spring Boot APIs, connected to your ERP, payments and business systems.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'App Development Capabilities',
          subtitle: 'Mobile, web and desktop apps, and the systems behind them.',
          columns: 3,
          cards: [
            { icon: 'mobile', title: 'Mobile Apps with Flutter', subtitle: 'Android & iOS', text: 'Flutter apps for Android and iOS from one codebase, published to Google Play and the App Store.' },
            { icon: 'code', title: 'Web Apps with Oracle APEX', subtitle: 'Portals & Dashboards', text: 'Customer portals, dashboards and internal tools on your Oracle Database that run in any browser.', link: { href: '/services/oracle-apex', label: 'More on Oracle APEX' } },
            { icon: 'desktop', title: 'Desktop Apps with JavaFX', subtitle: 'Windows, macOS & Linux', text: 'Desktop software for work that runs on the PC, like our own EastFTP scheduled file-transfer client.', link: { href: '/products/eastftp', label: 'See EastFTP' } },
            { icon: 'api', title: 'Backend & APIs with Spring Boot', subtitle: 'Java Spring Boot', text: 'Secure Java Spring Boot APIs with sign-in, role-based access and audit logs behind every app.' },
            { icon: 'oracle', title: 'ERP-Connected Apps', text: 'Field sales, warehouse and approval apps that read and write directly to Oracle or your custom ERP.' },
            { icon: 'layers', title: 'UI & UX Design', text: 'Wireframes, prototypes and screen designs agreed with your users before development starts.' },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'How We Build Your App',
          subtitle: 'Short steps, with a working version to try at each one.',
          columns: 4,
          cards: [
            { icon: 'search', title: '1. Discover & Design', text: 'We agree the features, users and systems involved, and design the screens with you.' },
            { icon: 'code', title: '2. Build in Sprints', text: 'Features are built in short sprints, with a test version you can try after each one.' },
            { icon: 'shield', title: '3. Test & Launch', text: 'Testing on real devices and data, then release to the app stores or your servers.' },
            { icon: 'refresh', title: '4. Support & Improve', text: 'Updates, fixes and new features after launch, as your business changes.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Have an App in Mind?',
          text: 'Tell us who will use it and what it needs to do, and we will plan the build with you.',
          actions: [{ label: 'Discuss Your App', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/tax-e-invoicing': {
    title: 'Tax & E-Invoicing Integration: FBR, ZATCA, FTA - OraDigitals',
    description:
      'E-invoicing and tax integration for Pakistan FBR, Saudi ZATCA and the UAE Federal Tax Authority, connected directly to your ERP or POS.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'Choose Your Tax Authority',
          subtitle: 'One integration approach for Pakistan, Saudi Arabia and the UAE.',
          columns: 3,
          cards: [
            { icon: 'tax', title: 'FBR Integration (Pakistan)', subtitle: 'Digital Invoicing & POS', text: 'Real-time FBR invoice numbers and QR codes for every sale, from your ERP or POS, with offline queueing and Annexure-C reconciliation.', link: { href: '/services/tax-e-invoicing/fbr-integration', label: 'Explore FBR Integration' } },
            { icon: 'shield', title: 'ZATCA Integration (Saudi Arabia)', subtitle: 'Fatoora Phase 1 & 2', text: 'UBL 2.1 XML invoices, cryptographic stamps and QR codes, cleared and reported to ZATCA, with portal onboarding handled for you.', link: { href: '/services/tax-e-invoicing/zatca-integration', label: 'Explore ZATCA Integration' } },
            { icon: 'building', title: 'Dubai FTA Integration (UAE)', subtitle: 'VAT & Corporate Tax', text: 'VAT 201 returns, corporate tax computation and FTA audit files prepared from your books, ready for UAE e-invoicing.', link: { href: '/services/tax-e-invoicing/dubai-fta-integration', label: 'Explore Dubai FTA Integration' } },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Included in Every Tax Integration',
          subtitle: 'Whichever authority you report to, the integration works the same way.',
          columns: 3,
          cards: [
            { icon: 'refresh', title: 'Straight From Your ERP or POS', text: 'Invoices are sent from Oracle EBS, Fusion, SAP, Odoo, custom systems or POS counters, with no re-keying.' },
            { icon: 'search', title: 'Validation Before Submission', text: 'Tax rates, buyer details and invoice fields are checked before anything reaches the tax authority.' },
            { icon: 'shield', title: 'Queues & Automatic Retries', text: 'If the connection drops, invoices wait in a queue and are sent as soon as it is back.' },
            { icon: 'lock', title: 'Certificates & Onboarding', text: 'Registration, keys and certificates with the tax authority are set up and renewed for you.' },
            { icon: 'file', title: 'Audit Logs & Reports', text: 'Every submission, response and error is logged, with reports your finance team can check.' },
            { icon: 'speed', title: 'Rule Changes Kept Current', text: 'Rate, schema and rule changes from FBR, ZATCA and the FTA are applied as they are announced.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Get Your Invoicing Compliant',
          text: 'Tell us which tax authority you report to and which systems you use, and we will plan the integration.',
          actions: [{ label: 'Talk to a Tax Integration Specialist', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/tax-e-invoicing/fbr-integration': {
    title: 'FBR Digital Invoicing & POS Integration - Pakistan - OraDigitals',
    description:
      'Certified FBR digital invoicing and Point of Sale (POS) integration for Tier-1 retailers and corporate taxpayers across Pakistan.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'FBR Integration Capabilities',
          subtitle: 'Engineered for high-volume retail chains, distributors, and corporate filers.',
          columns: 3,
          cards: [
            { icon: 'code', title: 'Real-Time QR & FBR Invoice No', text: 'Generates authenticated FBR invoice numbers and verifiable QR codes in under 150 milliseconds.' },
            { icon: 'refresh', title: 'ERP Connectors', text: 'Ready-to-deploy connectors for Oracle EBS, Fusion, SAP, Odoo, custom SQL engines, and POS hardware.' },
            { icon: 'shield', title: 'Offline Queueing & Sync', text: 'Never lose sales during internet outages; transactions queue locally and sync automatically when connection resumes.' },
            { icon: 'chart', title: 'Annexure-C Auto Filing', text: 'Automated sales ledger reconciliation matching sales tax returns directly with FBR records.' },
            { icon: 'search', title: 'Tax Rate & SRO Management', text: 'Centralized management of standard, reduced, and zero-rated sales tax rates according to current FBR SROs.' },
            { icon: 'file', title: 'Audit Verification Portal', text: 'Internal administrative dashboard to inspect transmission statuses, errors, and verification logs.' },
          ],
        },
      },
      {
        component: 'faq',
        props: {
          badge: 'FBR FAQs',
          title: 'Common Questions on FBR Integration',
          items: [
            {
              question: 'Who is required to integrate with the FBR Digital Invoicing System?',
              answer: 'Tier-1 Retailers, manufacturers, registered distributors, and notified corporate taxpayers in Pakistan are legally required to integrate their POS/ERP systems.',
            },
            {
              question: 'Does the system handle internet interruptions?',
              answer: 'Yes. Our middleware features local secure queue storage that holds invoices safely and flushes them to FBR servers immediately once the internet is restored.',
            },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Achieve FBR Compliance in Days, Not Months',
          text: 'Our team will audit your existing billing system and deploy the certified FBR integration layer.',
          actions: [{ label: 'Contact FBR Integration Specialists', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/tax-e-invoicing/zatca-integration': {
    title: 'Saudi ZATCA E-Invoicing Phase 1 & 2 Integration - OraDigitals',
    description:
      'Certified ZATCA Fatoora Phase 1 & Phase 2 integration for Saudi enterprises. XML UBL 2.1, cryptographic stamps, UUIDs, and clearance.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'ZATCA Phase 2 Engine Architecture',
          subtitle: 'Tested against thousands of real B2B and B2C transactions across Saudi Arabia.',
          columns: 3,
          cards: [
            { icon: 'lock', title: 'Cryptographic Stamp (CSID)', text: 'Automated Cryptographic Stamp Identifier generation, compliance checks, and secure private key vaulting.' },
            { icon: 'file', title: 'UBL 2.1 XML Generator', text: 'Converts invoice data from Oracle, SAP, or custom databases into fully compliant ZATCA XML schemas.' },
            { icon: 'code', title: 'Sub-Second Clearance API', text: 'High-throughput clearance for standard tax invoices and reporting for simplified tax invoices.' },
            { icon: 'code', title: 'Phase 2 TLV QR Codes', text: 'Generates Base64 encoded TLV QR codes containing ECDSA digital signatures and invoice hashes.' },
            { icon: 'api', title: 'Hash Chaining', text: 'Ensures strict sequential invoice hashing preventing backdated entries or tamper violations.' },
            { icon: 'code', title: 'ZATCA Portal Onboarding', text: 'Complete technical assistance with OTP verification, production CSID issuance, and renewal.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Comply with ZATCA Phase 2 Confidently',
          text: 'Avoid severe non-compliance penalties with our battle-tested ZATCA Fatoora middleware.',
          actions: [{ label: 'Get Started with ZATCA Integration', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/tax-e-invoicing/dubai-fta-integration': {
    title: 'Dubai & UAE FTA Corporate Tax & VAT Integration - OraDigitals',
    description:
      'UAE Federal Tax Authority (FTA) integration for corporate tax, VAT return filings, and forthcoming UAE national e-invoicing framework.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'UAE FTA Integration Capabilities',
          subtitle: 'Designed for mainland entities, free zone corporations, and multi-branch groups.',
          columns: 3,
          cards: [
            { icon: 'building', title: 'UAE Corporate Tax Engine', text: 'Automated taxable income adjustments, relief calculations, and statutory 9% corporate tax computation.' },
            { icon: 'chart', title: 'VAT 201 Audit Trail', text: 'Zero-rated, standard-rated, and exempt supply tracking with automated Emaratax return preparations.' },
            { icon: 'building', title: 'Free Zone Qualification', text: 'Track qualifying vs non-qualifying revenue streams to safeguard 0% Free Zone tax status.' },
            { icon: 'speed', title: 'Upcoming UAE E-Invoicing', text: 'Early integration with the UAE National E-Invoicing Framework (Peppol based) for B2B and B2G billing.' },
            { icon: 'bank', title: 'Multi-Currency Conversion', text: 'Compliant Central Bank of UAE exchange rate feeds for multi-currency transactions.' },
            { icon: 'file', title: 'FTA FAF Audit File', text: 'Generate one-click FTA Audit Files (FAF) for rapid compliance verification during tax authority inquiries.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Ensure 100% UAE Tax Compliance',
          text: 'Speak with our Dubai enterprise tax technology team today.',
          actions: [{ label: 'Book UAE Tax Consultation', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/system-integration': {
    title: 'Enterprise System Integration & Middleware - OraDigitals',
    description:
      'High-performance middleware, REST, SOAP, GraphQL, and event-driven architectures connecting ERPs, CRMs, and databases.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'Integration Services',
          subtitle: 'Specialised integrations we build and support as part of System Integration.',
          columns: 2,
          cards: [
            { icon: 'bank', title: 'Bank API Integration', subtitle: 'H2H & Reconciliations', text: 'Host-to-host bank channels, MT940 and CAMT.053 statement parsing, Raast and 1Link transfers, and maker-checker approvals.', link: { href: '/services/system-integration/bank-integration', label: 'Explore Bank API Integration' } },
            { icon: 'truck', title: 'Courier & Logistics Integration', subtitle: 'TCS, Leopard, Trax, DHL & FedEx', text: 'Automatic courier booking, label and CN printing, tracking updates and COD reconciliation from your store or ERP.', link: { href: '/services/system-integration/courier-integration', label: 'Explore Courier Integration' } },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Enterprise Integration Vectors',
          subtitle: 'Robust bridges for real-time synchronization and mission-critical workflows.',
          columns: 3,
          cards: [
            { icon: 'api', title: 'ERP to CRM Connectors', text: 'Bi-directional synchronization between Oracle/SAP and Salesforce, HubSpot, or Microsoft Dynamics.' },
            { icon: 'code', title: 'Event-Driven Queues', text: 'Message brokers (RabbitMQ, Apache Kafka, AWS SQS) for high-throughput, asynchronous decoupled processing.' },
            { icon: 'lock', title: 'Secure API Gateways', text: 'Rate limiting, OAuth2 authentication, payload encryption, and API lifecycle monitoring.' },
            { icon: 'refresh', title: 'ETL Data Pipelines', text: 'Scheduled and real-time extraction, transformation, and ingestion into corporate data warehouses.' },
            { icon: 'api', title: 'Legacy Database Adapters', text: 'Modernize legacy AS400, FoxPro, or vintage Oracle/SQL Server setups without full software overhauls.' },
            { icon: 'chart', title: 'Health & Telemetry Dashboards', text: 'Real-time observability into API latency, throughput, error rates, and automated alerts.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Connect Your Systems Seamlessly',
          text: 'Eliminate manual double-entry and fragmented business data.',
          actions: [{ label: 'Talk to an Integration Engineer', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/system-upgrade-migration': {
    title: 'System Upgrade & Migration Services - OraDigitals',
    description:
      'Oracle EBS and database upgrades, patching, EBS to Fusion Cloud moves, and migration of legacy systems and data, rehearsed and reconciled before go-live.',
    sections: [
      {
        component: 'cards',
        props: {
          eyebrow: 'Upgrades & Migration',
          titleMain: 'System Upgrade & Migration',
          titleSub: 'from ageing systems to supported, current platforms',
          description: 'We upgrade the systems you run today and move your applications and data to new versions, servers or platforms, planned and tested so daily operations carry on.',
          columns: 3,
          cards: [
            { icon: 'oracle', title: 'Oracle EBS Upgrades', text: 'Upgrades from older Oracle E-Business Suite releases to 12.2, with every customisation, report and integration reviewed and updated for the new version.' },
            { icon: 'database', title: 'Database Upgrades', text: 'Oracle Database upgrades from older releases such as 11g and 12c to supported versions such as 19c, with performance checked before and after.' },
            { icon: 'shield', title: 'Patching & Release Updates', text: 'Oracle patches and release updates applied on a regular schedule, tested on a copy of your system before they reach production.' },
            { icon: 'speed', title: 'EBS to Fusion Cloud Migration', text: 'Moving from Oracle EBS to Oracle Fusion Cloud ERP: data mapping, conversion, and reconciliation of balances and open transactions.' },
            { icon: 'refresh', title: 'Legacy System & Data Migration', text: 'Moving data from older applications, spreadsheets and databases into Oracle or a custom ERP, cleaned and validated on the way.' },
            { icon: 'layers', title: 'Server & Cloud Moves', text: 'Moving applications and databases to new servers, a private cloud or Oracle Cloud Infrastructure in a planned cut-over window.' },
          ],
        },
      },
      {
        component: 'split',
        props: {
          eyebrow: 'Our Approach',
          titleMain: 'How an Upgrade or Migration Runs',
          titleSub: 'the same tested steps every time',
          text: 'Your team knows what changes, when it changes, and how it is checked.',
          list: [
            'Assessment: current versions, customisations, integrations and data volumes',
            'Plan: target platform, cut-over window and rollback plan agreed with your team',
            'Trial runs: the upgrade or migration rehearsed on a copy of your system',
            'Reconciliation: record counts and balances compared between the old and new systems',
            'Go-live and support: cut-over in the agreed window, then a period of close support',
          ],
          sideTitle: 'Data Migration with Pimidrome',
          sideText: 'For data held in flat files and older databases, our Pimidrome migration engine handles column mapping, validation, XML, CSV and JSON conversion, and error recovery.',
          actions: [{ label: 'About Pimidrome', href: '/products/pimidrome', style: 'outline' }],
        },
      },
      {
        component: 'faq',
        props: {
          eyebrow: 'Frequently Asked Questions',
          titleMain: 'Upgrade & Migration FAQs',
          items: [
            {
              question: 'Will our system be unavailable during the upgrade?',
              answer: 'Only during the agreed cut-over window. The upgrade is rehearsed on a copy of your system first, so the time it needs is known in advance and can be scheduled outside business hours.',
            },
            {
              question: 'Will our customisations and integrations still work?',
              answer: 'Each customisation, report and integration is listed during the assessment, then tested and, where needed, updated for the new version before go-live.',
            },
            {
              question: 'What happens if something goes wrong at go-live?',
              answer: 'Every go-live has a rollback plan agreed in advance, so the previous system can be restored if the checks after cut-over do not pass.',
            },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Planning an Upgrade or Migration?',
          text: 'Tell us what you run today and where you want to move, and we will assess it and propose a plan.',
          actions: [{ label: 'Discuss Your Upgrade', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/ecommerce-solutions/shopify-solutions': {
    title: 'Shopify Plus Solutions & Custom Apps - OraDigitals',
    description:
      'Custom private Shopify Plus apps, bi-directional ERP synchronization, custom checkouts, and high-volume B2B e-commerce architectures.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'Shopify Plus Capabilities',
          subtitle: 'Built for enterprise retail merchants pushing thousands of daily orders.',
          columns: 3,
          cards: [
            { icon: 'shopping', title: 'Custom Private Shopify Apps', text: 'Tailored backend applications built with Node.js and GraphQL for specialized business logic.' },
            { icon: 'refresh', title: 'Oracle / SAP Inventory Sync', text: 'Live multi-location stock synchronization preventing overselling across retail and online channels.' },
            { icon: 'bank', title: 'Custom Checkout Extensions', text: 'Custom validation rules, custom payment options, and tax calculation rules at checkout.' },
            { icon: 'building', title: 'Shopify B2B & Wholesale', text: 'Tiered wholesale pricing, customer credit limits, automated purchase order creation, and tax exempt setups.' },
            { icon: 'layers', title: 'Fulfillment & Logistics Sync', text: 'Automated order dispatching directly to warehouse management systems and courier APIs.' },
            { icon: 'code', title: 'High-Speed Theme Optimization', text: 'Sub-second page speeds, Web Vitals optimization, and responsive mobile storefront UX.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Elevate Your Shopify Storefront Today',
          text: 'Let our certified Shopify Plus developers scale your e-commerce operations.',
          actions: [{ label: 'Start Shopify Project', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/ecommerce-solutions': {
    title: 'E-Commerce Solutions: Shopify, WordPress & Integration - OraDigitals',
    description:
      'Shopify Plus and WordPress / WooCommerce stores, and e-commerce integration with your ERP, payment gateways, couriers and tax systems.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'Our E-Commerce Services',
          subtitle: 'Build the store on the platform that suits you, then connect it to the rest of your business.',
          columns: 3,
          cards: [
            { icon: 'shopping', title: 'Shopify Plus Solutions', subtitle: 'Apps, Checkout & B2B', text: 'Custom private Shopify apps, checkout extensions, B2B wholesale and live stock sync for high-volume Shopify Plus stores.', link: { href: '/services/ecommerce-solutions/shopify-solutions', label: 'Explore Shopify Plus' } },
            { icon: 'code', title: 'WordPress & WooCommerce', subtitle: 'Stores & Custom Plugins', text: 'WooCommerce stores on WordPress with custom themes and plugins, built to handle large catalogues and busy checkouts.', link: { href: '/services/ecommerce-solutions/wordpress-woocommerce', label: 'Explore WordPress & WooCommerce' } },
            { icon: 'api', title: 'E-Commerce Integration', subtitle: 'ERP, Payments & Couriers', text: 'Your store connected to your ERP, payment gateways, couriers, tax e-invoicing and customer messaging, so orders run without re-keying.', link: { href: '/services/ecommerce-solutions/ecommerce-integration', label: 'Explore E-Commerce Integration' } },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Included in Every Store',
          subtitle: 'Whichever platform you choose.',
          columns: 3,
          cards: [
            { icon: 'code', title: 'Mobile-First Conversion UX', text: 'Smooth, frictionless checkout journeys optimized for mobile buyers.' },
            { icon: 'speed', title: 'Fast Storefronts', text: 'Optimised themes, images and queries for quick page loads and good Core Web Vitals.' },
            { icon: 'lock', title: 'PCI-DSS Security Compliance', text: 'Enterprise security standards protecting sensitive customer and payment transactions.' },
            { icon: 'bank', title: 'Payment Gateways', text: 'Visa, Mastercard, Stripe, Paymob, 2Checkout and local payment gateways.' },
            { icon: 'chart', title: 'Real-Time Inventory', text: 'One stock view across online stores, POS counters and warehouses.' },
            { icon: 'layers', title: 'Headless When You Need It', text: 'Decoupled frontends on modern web frameworks, connected to the commerce platform through its APIs.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Launch a High-Performance E-Commerce Store',
          text: 'Contact our e-commerce engineers to discuss your platform requirements.',
          actions: [{ label: 'Get in Touch', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/ecommerce-solutions/wordpress-woocommerce': {
    title: 'WordPress & WooCommerce Development - OraDigitals',
    description:
      'WooCommerce stores on WordPress with custom themes and plugins, built for large catalogues and connected to your ERP, payments and couriers.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'WordPress & WooCommerce Capabilities',
          subtitle: 'From a new store to scaling and connecting the one you already run.',
          columns: 3,
          cards: [
            { icon: 'shopping', title: 'WooCommerce Store Development', text: 'New WooCommerce stores on WordPress with custom themes, product catalogues and checkout set up for your business.' },
            { icon: 'database', title: 'WooCommerce Scaling', text: 'Enterprise WooCommerce setups engineered for 100,000+ SKUs with database query optimization.' },
            { icon: 'code', title: 'Custom Plugins', text: 'Plugins for your own pricing, checkout, shipping and approval rules, without editing WordPress or WooCommerce core.' },
            { icon: 'bank', title: 'Payment Gateways', text: 'Local and international gateways added to checkout, with payments matched back to orders.' },
            { icon: 'refresh', title: 'ERP, Courier & Tax Sync', text: 'Orders, stock, courier bookings and FBR invoices synced with your back office, as we did for Treet with Oracle EBS.' },
            { icon: 'shield', title: 'Speed, Security & Updates', text: 'Caching, hardening, backups and tested WordPress and plugin updates to keep the store fast and safe.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Build or Scale Your WooCommerce Store',
          text: 'Tell us about your store and catalogue, and we will plan the build or the upgrade.',
          actions: [{ label: 'Start a WooCommerce Project', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/ecommerce-solutions/ecommerce-integration': {
    title: 'E-Commerce Integration: ERP, Payments & Couriers - OraDigitals',
    description:
      'Connect Shopify, WooCommerce or custom online stores to your ERP, payment gateways, couriers, FBR e-invoicing and customer messaging.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'What We Connect Your Store To',
          subtitle: 'Shopify, WooCommerce or a custom store, linked to the systems that fulfil and account for each order.',
          columns: 3,
          cards: [
            { icon: 'oracle', title: 'ERP Orders & Inventory', text: 'Orders flow into Oracle EBS, Fusion, SAP or a custom ERP, and stock flows back to the store, so nothing is keyed twice.' },
            { icon: 'bank', title: 'Payments & Reconciliation', text: 'Gateway and bank payments matched to orders and posted to your accounts, with fees deducted automatically.' },
            { icon: 'truck', title: 'Courier Booking & Tracking', text: 'Courier booked, label printed and tracking sent to the customer as soon as an order is packed.' },
            { icon: 'tax', title: 'Tax E-Invoicing', text: 'An FBR digital invoice for every online order, issued from the same flow.' },
            { icon: 'users', title: 'Customer Messaging', text: 'Order confirmations and delivery updates sent to customers by WhatsApp, SMS or email.' },
            { icon: 'chart', title: 'One Stock View', text: 'Unified inventory visibility across online stores, physical POS counters, and warehouses.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Connect Your Store to Your Business',
          text: 'Tell us which store and back-office systems you use, and we will map the integration.',
          actions: [{ label: 'Talk to an Integration Engineer', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/system-integration/bank-integration': {
    title: 'Corporate Bank API & Payment Gateway Integration - OraDigitals',
    description:
      'Corporate banking Host-to-Host (H2H) integrations, automated MT940 statement parsing, Raast, 1Link, and direct ERP disbursements.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'Banking Integration Vectors',
          subtitle: 'Connecting corporate finance departments with leading regional and international banks.',
          columns: 3,
          cards: [
            { icon: 'bank', title: 'Host-to-Host (H2H) SFTP/API', text: 'Encrypted direct channels for automated bulk vendor payments, utility payments, and payroll transfers.' },
            { icon: 'file', title: 'MT940 / CAMT.053 Statement Parsing', text: 'Automated ingestion and reconciliation of electronic bank statements directly into your general ledger.' },
            { icon: 'code', title: 'Raast & 1Link Instant Transfers', text: 'Real-time payment rails connectivity for instantaneous round-the-clock Pakistani banking settlements.' },
            { icon: 'bank', title: 'Multi-Gateway Reconciliation', text: 'Consolidate multiple payment gateways into unified accounting journals with automatic fee deductions.' },
            { icon: 'lock', title: 'Dual-Approval Security Workflows', text: 'Enforce maker-checker authorization protocols before payment instructions leave your ERP.' },
            { icon: 'building', title: 'GCC Banking Connectors', text: 'Integrations with Emirates NBD, FAB, Al Rajhi, and regional GCC banking institutions.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Automate Corporate Cash Management Today',
          text: 'Our financial integration architects will guide you through bank API compliance and security.',
          actions: [{ label: 'Schedule Banking Call', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/system-integration/courier-integration': {
    title: 'Automated Courier & Logistics Integration - OraDigitals',
    description:
      'Seamless courier dispatch middleware for TCS, Leopard, Trax, DHL, FedEx, and Aramex with automated CN generation and live tracking.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'Courier Integration Features',
          subtitle: 'Proven connectors for leading local and international logistics providers.',
          columns: 3,
          cards: [
            { icon: 'truck', title: 'Multi-Carrier Routing Engine', text: 'Automatically assign orders to TCS, Leopard, Trax, DHL, or FedEx based on cheapest rate or fastest delivery route.' },
            { icon: 'file', title: 'Automated Label Printing', text: 'One-click thermal shipping label and consignment note (CN) generation directly from the warehouse pack screen.' },
            { icon: 'api', title: 'Real-Time Tracking Webhooks', text: 'Automate delivery notifications to customers via SMS and email as courier status updates.' },
            { icon: 'bank', title: 'COD Cash Reconciliation', text: 'Reconcile Cash-on-Delivery collections and courier bank deposits against outstanding receivables.' },
            { icon: 'refresh', title: 'Reverse Logistics & Returns', text: 'Automate return merchandise authorizations (RMA) and reverse shipment bookings seamlessly.' },
            { icon: 'chart', title: 'Delivery Performance Analytics', text: 'Measure courier SLA compliance, transit durations, and return-to-origin (RTO) ratios across carriers.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Streamline Your Logistics Today',
          text: 'Connect your ERP and e-commerce stores with all your courier partners in hours.',
          actions: [{ label: 'Integrate Couriers Now', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/oracle-apex': {
    title: 'Oracle APEX Application Development - OraDigitals',
    description:
      'Rapid low-code enterprise database applications built natively on Oracle Database with enterprise-grade security and scale.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'Oracle APEX Solution Areas',
          subtitle: 'Accelerating enterprise software delivery without compromising robustness.',
          columns: 3,
          cards: [
            { icon: 'code', title: 'Legacy Modernization', text: 'Modernize legacy Oracle Forms, Reports, or desktop MS Access systems into slick modern web portals.' },
            { icon: 'chart', title: 'Executive Data Portals', text: 'Interactive grids, faceted search, Gantt charts, and drill-down KPI dashboards over millions of records.' },
            { icon: 'code', title: 'Progressive Web Apps (PWA)', text: 'Installable responsive mobile applications with camera barcode scanning and offline capability.' },
            { icon: 'api', title: 'Oracle ERP Extensions', text: 'Extend Oracle Fusion Cloud or EBS functionality with custom APEX pages without modifying core code.' },
            { icon: 'shield', title: 'Enterprise SSO & Role Security', text: 'Integration with Azure AD, Okta, Oracle Identity Cloud, and fine-grained database authorization.' },
            { icon: 'database', title: 'Oracle Autonomous Database', text: 'Deploy on Oracle Cloud Infrastructure (OCI) Autonomous Database with self-tuning and auto-scaling.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Build Faster With Oracle APEX',
          text: 'Schedule a discovery session with our Oracle APEX certified development team.',
          actions: [{ label: 'Get Started with APEX', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  'services/data-analytics': {
    title: 'Data Analytics & Business Intelligence - OraDigitals',
    description:
      'Transform corporate raw transactional data into executive KPI dashboards, automated financial pipelines, and predictive insights.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'Analytics Architecture Offerings',
          subtitle: 'From data ingestion to predictive machine learning algorithms.',
          columns: 3,
          cards: [
            { icon: 'chart', title: 'Interactive Power BI Dashboards', text: 'Executive KPI scorecards, sales velocity charts, and financial profitability breakdowns.' },
            { icon: 'database', title: 'Cloud Data Warehousing', text: 'Snowflake, Google BigQuery, and Oracle Autonomous Data Warehouse modeling for speed.' },
            { icon: 'refresh', title: 'Automated ETL/ELT Pipelines', text: 'Scheduled automated extraction from ERPs, POS machines, and advertising channels with zero manual cleanup.' },
            { icon: 'chart', title: 'Inventory Demand Forecasting', text: 'Predictive models forecasting inventory replenishment needs based on seasonality and sales trends.' },
            { icon: 'search', title: 'Financial Audit & Variance Reports', text: 'Automated detection of transactional anomalies, budget variances, and margin leakages.' },
            { icon: 'shield', title: 'Data Governance & Compliance', text: 'GDPR, SOC2, and regional corporate data compliance ensuring secure role-based metric access.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Unlock Your Enterprise Data Potential',
          text: 'Contact our data engineering team to design your corporate analytics architecture.',
          actions: [{ label: 'Consult Analytics Team', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  // SERVICES OVERVIEW PAGE
  services: {
    title: 'Enterprise IT & Compliance Services - OraDigitals',
    description:
      'Our enterprise services: Oracle ERP, Custom ERP, FBR & ZATCA e-invoicing, Dubai FTA tax, system upgrades & migration, Bank APIs, and Analytics.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'All Enterprise Services',
          subtitle: 'Select any service to view full technical specifications and architectures.',
          columns: 3,
          cards: [
            { icon: 'oracle', title: 'Oracle ERP Implementation', subtitle: 'Fusion Cloud & EBS', text: 'Certified implementation and managed services for Oracle Cloud Financials, SCM, and OIC.', link: { href: '/services/oracle-erp', label: 'Explore Oracle ERP' } },
            { icon: 'layers', title: 'Custom ERP Solutions', subtitle: 'Bespoke Architecture', text: 'Modular ERP systems engineered around your exact manufacturing and supply chain logic.', link: { href: '/services/custom-erp', label: 'Explore Custom ERP' } },
            { icon: 'mobile', title: 'App Development', subtitle: 'Flutter, APEX, JavaFX & Spring Boot', text: 'Mobile, web and desktop apps on Java Spring Boot APIs, connected to your ERP and business systems.', link: { href: '/services/app-development', label: 'Explore App Development' } },
            {
              icon: 'tax',
              title: 'Tax & E-Invoicing Integration',
              subtitle: 'FBR, ZATCA & UAE FTA',
              text: 'E-invoicing and tax reporting sent to the tax authority straight from your ERP or POS.',
              list: [
                { label: 'FBR Integration (Pakistan)', href: '/services/tax-e-invoicing/fbr-integration' },
                { label: 'ZATCA Integration (Saudi Arabia)', href: '/services/tax-e-invoicing/zatca-integration' },
                { label: 'Dubai FTA Integration (UAE)', href: '/services/tax-e-invoicing/dubai-fta-integration' },
              ],
              link: { href: '/services/tax-e-invoicing', label: 'Explore Tax & E-Invoicing' },
            },
            {
              icon: 'api',
              title: 'System Integration',
              subtitle: 'Middleware, Banks & Couriers',
              text: 'Connect ERPs, CRMs, banks, couriers and third-party services with high-throughput middleware.',
              list: [
                { label: 'Bank API Integration', href: '/services/system-integration/bank-integration' },
                { label: 'Courier & Logistics Integration', href: '/services/system-integration/courier-integration' },
              ],
              link: { href: '/services/system-integration', label: 'Explore System Integration' },
            },
            {
              icon: 'shopping',
              title: 'E-Commerce Solutions',
              subtitle: 'Shopify, WordPress & Integration',
              text: 'Online stores built on Shopify Plus or WordPress and WooCommerce, connected to the systems behind them.',
              list: [
                { label: 'Shopify Plus Solutions', href: '/services/ecommerce-solutions/shopify-solutions' },
                { label: 'WordPress & WooCommerce', href: '/services/ecommerce-solutions/wordpress-woocommerce' },
                { label: 'E-Commerce Integration', href: '/services/ecommerce-solutions/ecommerce-integration' },
              ],
              link: { href: '/services/ecommerce-solutions', label: 'Explore E-Commerce' },
            },
            { icon: 'code', title: 'Oracle APEX Applications', subtitle: 'Low-Code Fast Data Apps', text: 'Rapid enterprise database applications built natively on Oracle Database.', link: { href: '/services/oracle-apex', label: 'Explore Oracle APEX' } },
            { icon: 'refresh', title: 'System Upgrade & Migration', subtitle: 'Upgrades & Data Migration', text: 'Oracle EBS and database upgrades, patching, and moving legacy systems and data to new platforms.', link: { href: '/services/system-upgrade-migration', label: 'Explore Upgrade & Migration' } },
            { icon: 'chart', title: 'Data Analytics & BI', subtitle: 'Power BI & Pipelines', text: 'Cloud data warehousing, executive KPI dashboards, and automated variance reporting.', link: { href: '/services/data-analytics', label: 'Explore Data Analytics' } },
          ],
        },
      },
      {
        component: 'map',
        props: {
          badge: 'Visit Us',
          title: 'Consult Our Engineering Team',
          subtitle: 'Stop by our headquarters or arrange a virtual consultation.',
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Need a Custom Multi-Service Solution?',
          text: 'Our solution architects will craft a unified project proposal spanning all required systems.',
          actions: [{ label: 'Contact Us Now', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  // HTML SITEMAP PAGE
  sitemap: {
    title: 'Sitemap - OraDigitals',
    description:
      'Complete HTML sitemap directory of OraDigitals. Navigate directly to all enterprise services, software products, team, and compliance resources.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'All Website Sections',
          subtitle: 'Direct clickable links to every active page in our web application.',
          columns: 4,
          cards: sitemapCards(),
        },
      },
    ],
  },

  // ABOUT PAGE
  about: {
    title: 'About Us - OraDigitals',
    description:
      'OraDigitals is an enterprise software and consulting firm specializing in Oracle ERP, regional tax compliance, and automated system integration.',
    sections: [
      {
        component: 'split',
        props: {
          badge: 'Company Culture & Mission',
          title: 'Built on Deep Technical Discipline',
          subtitle: 'Transparent operations, strict regulatory compliance, and clean engineering.',
          text: 'We are registered with SECP (Corporate ID: 0298255), FBR (G905514), and PRA. Our team brings decades of combined experience in database internals, fiscal security, and cloud infrastructure.',
          image: '/public/images/about-team-office.jpg',
          imageAlt: 'The OraDigitals team at work in the Okara office',
          list: [
            '100% compliant with SECP, FBR, and regional tax authorities',
            'Deep Oracle Database, APEX, and OIC architectural specializations',
            'Zero tolerance for system downtime or regulatory data discrepancies',
            'Structured internship and mentorship programs developing top national talent',
          ],
        },
      },
      {
        component: 'timeline',
        props: {
          title: 'Our Journey & Milestones',
          items: [
            { year: '2021', title: 'Company Inception', text: 'Started with specialized Oracle Database consulting and custom desktop utilities.' },
            { year: '2023', title: 'SECP Incorporation', text: 'Incorporated as ORADIGITALS (PRIVATE) LIMITED, formalizing regional compliance practices.' },
            { year: '2024', title: 'FBR & ZATCA Engines', text: 'Launched certified digital invoicing connectors for Pakistani and Saudi tax authorities.' },
            { year: '2026', title: 'UAE Expansion & Full Service Catalog', text: 'Established Dubai FTA practice and a comprehensive enterprise service catalog.' },
          ],
        },
      },
      {
        component: 'map',
        props: {
          title: 'Headquarters Location',
          subtitle: 'Our engineering headquarters in Okara, Pakistan.',
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Partner with a Proven Enterprise Team',
          text: 'Let us build resilient software foundations for your organization.',
          actions: [{ label: 'Get in Touch', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  // TEAM PAGE (with generated image)
  team: {
    title: 'Our Team & Leadership - OraDigitals',
    description:
      'Meet the experienced enterprise architects, ERP consultants, and software engineers behind OraDigitals.',
    sections: [
      {
        component: 'leader-profile',
        props: {
          eyebrow: 'Leadership',
          ...founder,
        },
      },
      {
        component: 'team-carousel',
        props: {
          eyebrow: 'Our Team',
          titleMain: 'The People Behind Every Delivery',
          titleSub: 'consultants and engineers who build and support your systems',
          description: 'ERP functional consultants and Oracle EBS and OIC developers who deliver, integrate, and support every project.',
          members: teamMembers,
        },
      },
      {
        component: 'split',
        props: {
          badge: 'Consulting Excellence',
          title: 'Collaborative, Cross-Disciplinary Delivery',
          subtitle: 'Working as an extension of your internal executive team.',
          text: 'Our senior consultants work directly with your CFOs, CIOs, and IT directors to ensure business continuity, regulatory compliance, and rapid software delivery.',
          image: '/public/images/team-at-work.jpg',
          imageAlt: 'OraDigitals consultants and engineers working together',
          list: [
            'Principal Oracle Cloud & Database Architects',
            'Tax & Fiscalization Specialists for FBR, ZATCA & FTA',
            'Full-Stack Engineers (Node.js, Express, React, Java, Python)',
            '24/7 Enterprise Support & DevOps Team',
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Work With Our Experts',
          text: 'Schedule an initial discovery consultation with our technical leadership.',
          actions: [{ label: 'Schedule Consultation', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  // LIFE AT ORADIGITALS (office and team photos)
  life: {
    title: 'Life at OraDigitals - Culture, Workplace & Growth',
    description:
      'Discover life at OraDigitals: an environment of high engineering standards, continuous learning, and supportive culture.',
    sections: [
      {
        component: 'split',
        props: {
          badge: 'Modern Workspace',
          title: 'World-Class Working Environment',
          subtitle: 'Ergonomic, distraction-free workspaces designed for deep technical focus.',
          text: 'Our offices feature high-speed fiber connectivity, dual-monitor workstations, comfortable collaborative break-out areas, and an open-door policy with leadership.',
          image: '/public/images/office-workspace.jpg',
          imageAlt: 'The OraDigitals office in Okara',
          list: [
            'Ergonomic sit-stand desks and premium developer hardware',
            'Generous annual training and certification allowances (Oracle, Cloud, DevOps)',
            'Healthy office snacks, gourmet coffee, and catered team lunches',
            'Balanced work-life philosophy with flexible scheduling options',
          ],
        },
      },
      {
        component: 'gallery',
        props: {
          title: 'Office & Culture Highlights',
          subtitle: 'Moments from our day-to-day operations and team milestones.',
          image: '/public/images/life-independence-day.jpg',
          imageAlt: 'The OraDigitals team celebrating Independence Day at the office',
          // Four cards, two per row
          columns: 2,
          items: [
            { category: 'Workplace', title: 'Tech Innovation Hub', text: 'Spacious collaborative rooms equipped with high-resolution dashboards and digital whiteboards.', image: '/public/images/about-team-office.jpg', imageAlt: 'The OraDigitals team at work in the Okara office' },
            { category: 'Knowledge Sharing', title: 'Friday Tech Talks', text: 'Weekly knowledge sharing sessions where developers showcase new tools and architectures.', image: '/public/images/life-knowledge-sharing.jpg', imageAlt: 'OraDigitals engineers discussing work around the office table' },
            { category: 'Team Bonding', title: 'Team Dinners', text: 'Regular team dinners to celebrate project milestones together.', image: '/public/images/life-team-dinner.jpg', imageAlt: 'The OraDigitals team at a team dinner' },
            { category: 'Team Bonding', title: 'Team Trips', text: 'Trips away from the office, with time to unwind together as a team.', image: '/public/images/life-team-trip.jpg', imageAlt: 'The OraDigitals team on a team trip' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Ready to Build Your Career With Us?',
          text: 'Explore our open opportunities or apply for our competitive internship program.',
          actions: [
            { label: 'View Open Jobs', href: '/career', style: 'primary' },
            { label: 'Apply for Internship', href: '/career/internship', style: 'outline' },
          ],
        },
      },
    ],
  },

  // INTERNSHIP PAGE
  'career/internship': {
    title: 'Software Engineering Internship Program - OraDigitals',
    description:
      'Accelerate your technology career with hands-on mentorship on enterprise ERP, Node.js, Oracle Database, and real customer deployments.',
    sections: [
      {
        component: 'split',
        props: {
          badge: 'Hands-on Mentorship',
          title: 'Work on Production Systems from Day One',
          subtitle: 'No coffee runs. Real code, real databases, and real client deployments.',
          text: 'Under the 1-on-1 mentorship of our principal engineers, interns learn best practices in system architecture, version control, automated testing, and fiscal API compliance.',
          image: '/public/images/internship-team.jpg',
          imageAlt: 'OraDigitals engineers working together in the office',
          list: [
            '1-on-1 weekly mentorship sessions with senior architects',
            'Hands-on experience with Node.js, Express, Oracle SQL, and REST APIs',
            'Full exposure to code review standards and production CI/CD pipelines',
            'Direct pathway to permanent associate software engineer positions',
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'What You Will Learn',
          subtitle: 'Core competencies developed during the 3-month paid internship.',
          columns: 3,
          cards: [
            { icon: 'code', title: 'Backend & API Engineering', text: 'Building robust, resilient RESTful microservices and Webhook handlers in Node.js and Express.' },
            { icon: 'database', title: 'Database Internals', text: 'Relational database schema design, indexing, performance tuning, and PL/SQL procedures in Oracle.' },
            { icon: 'lock', title: 'Security & Encryption', text: 'Cryptographic hashing, digital signatures (ECDSA/RSA), and secure token authentication.' },
          ],
        },
      },
      {
        component: 'contact-form',
        props: {
          id: 'apply',
          title: 'Apply for the Internship Program',
          subtitle: 'Submit your application and portfolio for our upcoming cohort.',
          type: 'career',
          fields: [
            { name: 'name', label: 'Full Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', required: true },
            { name: 'phone', label: 'Phone / WhatsApp Number', type: 'tel', required: true },
            { name: 'university', label: 'University / Institute', required: true },
            { name: 'degree', label: 'Degree & Graduation Year', required: true },
            { name: 'github', label: 'GitHub Profile or Portfolio Link', inputmode: 'url', autocomplete: 'url', placeholder: 'https://github.com/your-name' },
            { name: 'message', label: 'Why do you want to intern at OraDigitals?', type: 'textarea', required: true },
          ],
          submitLabel: 'Submit Internship Application',
        },
      },
    ],
  },

  // CAREER PAGE
  career: {
    title: 'Career Opportunities - OraDigitals',
    description: 'Explore exciting career opportunities in enterprise ERP, backend engineering, and compliance systems.',
    sections: [
      {
        component: 'jobs',
        props: {
          id: 'openings',
          title: 'Open Positions',
          subtitle: 'Explore current full-time and remote-friendly career opportunities.',
          items: [
            {
              title: 'Senior Oracle ERP Consultant',
              department: 'Enterprise Practice',
              location: 'Okara / Hybrid',
              type: 'Full-time',
              description: 'Lead client discovery, configuration, and go-live for Oracle Fusion Cloud Financials and SCM modules.',
              requirements: [
                '3+ years hands-on experience in Oracle EBS or Fusion Cloud',
                'Demonstrated track record of full lifecycle ERP implementations',
                'Strong communication and client relationship management skills',
              ],
            },
            {
              title: 'Backend Node.js & API Engineer',
              department: 'Software Engineering',
              location: 'Okara / Hybrid',
              type: 'Full-time',
              description: 'Architect high-throughput fiscal middleware for FBR, ZATCA, and UAE FTA tax clearance.',
              requirements: [
                'Proficiency in Node.js, Express, TypeScript, and REST/SOAP APIs',
                'Experience with cryptographic algorithms (SHA256, ECDSA) is a plus',
                'Familiarity with SQL databases and message queues',
              ],
            },
            {
              title: 'Oracle APEX Developer',
              department: 'Database Applications',
              location: 'Okara / Remote',
              type: 'Full-time',
              description: 'Develop rapid, data-dense enterprise applications with Oracle APEX and PL/SQL.',
              requirements: [
                'Solid experience writing complex SQL and PL/SQL packages',
                'Proven portfolio of deployed Oracle APEX applications',
                'Understanding of responsive UI and RESTful web services in APEX',
              ],
            },
          ],
        },
      },
      {
        component: 'contact-form',
        props: {
          id: 'apply',
          title: 'Direct Application Submission',
          subtitle: 'Do not see a role that matches? Send us an open application.',
          type: 'career',
          fields: [
            { name: 'name', label: 'Full Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', required: true },
            { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
            { name: 'position', label: 'Position of Interest', required: true },
            { name: 'experience', label: 'Years of Experience', inputmode: 'numeric' },
            { name: 'message', label: 'Cover Letter / Executive Summary', type: 'textarea', required: true },
          ],
          submitLabel: 'Submit Career Application',
        },
      },
    ],
  },

  // CLIENTS PAGE
  customers: {
    title: 'Our Clients & Success Stories - OraDigitals',
    description: 'Trusted by manufacturing, e-commerce, logistics, real estate, software and investment companies in Pakistan, the UAE and beyond.',
    sections: [
      {
        component: 'customers',
        props: {
          eyebrow: 'Customers',
          titleMain: 'Our Customers',
          titleSub: 'the companies whose systems we build and integrate',
          description: 'Manufacturing, e-commerce fulfilment, office furniture, real estate, software, translation and investment firms. Several of these projects are written up as case studies below.',
          ctaLabel: false,
        },
      },
      {
        component: 'case-studies',
        props: {
          badge: 'Featured Success Stories',
          title: 'Detailed Implementation Case Studies',
          subtitle: 'Read in-depth technical breakdowns of enterprise transformations delivered by our engineering teams.',
          categories: [
            { key: 'all', label: 'All Case Studies' },
            { key: 'erp', label: 'Oracle ERP & SCM' },
            { key: 'commerce', label: 'Commerce & Logistics' },
            { key: 'fintech', label: 'FinTech & Corporate Tax' },
          ],
          items: caseStudyCards(),
          footerCta: {
            title: 'Want similar transformation results for your enterprise?',
            text: 'Connect with our systems architects to design an integration blueprint tailored to your stack.',
            buttonLabel: 'Book Solution Workshop',
            href: '/contact',
          },
        },
      },
      {
        component: 'testimonials',
        props: {
          title: 'Executive Client Feedback',
          subtitle: 'Read direct reviews from organizational leaders.',
          items: clientTestimonials(),
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Join Our Satisfied Enterprise Clients',
          text: 'Let us modernize your business operations with proven software architectures.',
          actions: [{ label: 'Schedule Consultation', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  // DEDICATED FULL CASE STUDIES PAGE
  'customers/case-studies': {
    title: 'Enterprise Case Studies & Transformations - OraDigitals',
    description: 'Full case studies of Oracle ERP, e-commerce, courier logistics and UAE tax automation projects in Pakistan and the UAE.',
    sections: [
      {
        component: 'case-studies',
        props: {
          compact: false,
          badge: 'Complete Implementation Deep-Dives',
          title: 'Full Technical Case Studies & Client Stories',
          subtitle: 'Detailed breakdowns of technical challenges, system architectures, deliverables, and quantitative ROI metrics.',
          categories: [
            { key: 'all', label: 'All Case Studies' },
            { key: 'erp', label: 'Oracle ERP & SCM' },
            { key: 'commerce', label: 'Commerce & Logistics' },
            { key: 'fintech', label: 'FinTech & Corporate Tax' },
          ],
          items: caseStudyCards(),
          footerCta: {
            title: 'Have a complex integration or compliance challenge?',
            text: 'Our senior solution architects can analyze your ecosystem and design a custom deployment roadmap.',
            buttonLabel: 'Schedule Architecture Audit',
            href: '/contact',
          },
        },
      },
      {
        component: 'testimonials',
        props: {
          title: 'Executive Client Feedback',
          subtitle: 'Read direct reviews from organizational leaders who partnered with OraDigitals.',
          items: clientTestimonials(),
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Ready to Modernize Your Enterprise Infrastructure?',
          text: 'Speak with our enterprise architects today for a detailed system audit and compliance roadmap.',
          actions: [{ label: 'Book Solution Workshop', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  // PRODUCTS PAGE
  products: {
    title: 'Software Products - OraDigitals',
    description: 'In-house specialized software products including EastFTP secure scheduled file transfer and Pimidrome data engine.',
    sections: [
      {
        component: 'cards',
        props: {
          title: 'Our Product Suite',
          subtitle: 'Available for enterprise on-premise and private cloud deployment.',
          columns: 2,
          cards: productCards(),
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Need a Custom Commercial Utility?',
          text: 'Our product engineering division can develop custom desktop or server software for your workflow.',
          actions: [{ label: 'Discuss Custom Product', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },

  // DEDICATED PRODUCT PAGES: /products/:slug
  ...Object.fromEntries(products.map((product) => [`products/${product.slug}`, productPage(product)])),

  // COMPLIANCE PAGE
  compliance: {
    title: 'Legal & Regulatory Compliance - OraDigitals',
    description:
      'Corporate governance, SECP registration, FBR, and PRA compliance information for ORADIGITALS (PRIVATE) LIMITED.',
    sections: [
      {
        component: 'split',
        props: {
          title: 'Statutory Registrations & Corporate Identifiers',
          text: 'Official records registered with the government of Pakistan:',
          list: [
            `Company Legal Name: ${site.legalName}`,
            `SECP Registration Number: ${site.secpNumber}`,
            `Pakistan Software Export Board (PSEB) Reg: ${site.psebNumber}`,
            `Federal Board of Revenue (FBR) NTN: ${site.fbrNumber}`,
            `Punjab Revenue Authority (PRA) STRN: ${site.praNumber}`,
            `Registered Corporate Office: ${site.address}, ${site.cityAddress}`,
            `Authorized Verification Portal: ${site.secpVerificationLink}`,
          ],
          sideTitle: 'Corporate Governance Commitment',
          sideText: 'We enforce zero-compromise data privacy, non-disclosure agreements (NDAs) for all client data, and annual third-party financial audits.',
        },
      },
      {
        component: 'people-grid',
        props: {
          id: 'directors',
          eyebrow: 'Board of Directors',
          titleMain: 'Company Directors',
          titleSub: 'as registered with SECP',
          description: `${site.legalName} is registered with the Securities and Exchange Commission of Pakistan with the following directors.`,
          columns: 2,
          photoStyle: 'portrait',
          members: directors,
        },
      },
      {
        component: 'cards',
        props: {
          id: 'business-activities',
          eyebrow: 'Registered Business Activities',
          titleMain: 'What OraDigitals Is Registered To Do',
          titleSub: 'principal lines of business filed with SECP',
          description: 'A plain-language summary of the objects in our Memorandum of Association. The full registered wording follows below.',
          columns: 3,
          cards: [
            { icon: 'code', badge: 'Clause (a)', title: 'Software Development & IT Consultancy', text: 'Consultancy in software development, IT consultancy and IT process development for domestic and international markets, with research and development in computer sciences.' },
            { icon: 'layers', badge: 'Clause (a)', title: 'Project Management & System Design', text: 'Project management, IT requirements management, system analysis and design, and programming.' },
            { icon: 'shield', badge: 'Clause (a)', title: 'Software Testing & Quality Assurance', text: 'Software testing and software quality assurance services.' },
            { icon: 'globe', badge: 'Clause (a)', title: 'IT & Telecom Outsourcing', text: 'Outsourcing of IT and telecommunication services.' },
            { icon: 'api', badge: 'Clause (b)', title: 'Hardware, Software & System Integration', text: 'Supplying and dealing in computers, accessories, software and hardware, system integration, data entry and computer bureau services, with related support.' },
            { icon: 'database', badge: 'Clause (c)', title: 'Data Processing, Development Centres & Training', text: 'Running data processing, computer and software development centres, training in computer software and hardware, and buying, selling, importing and exporting software and hardware, subject to the relevant permissions.' },
          ],
        },
      },
      {
        component: 'faq',
        props: {
          id: 'memorandum',
          eyebrow: 'Memorandum of Association',
          titleMain: 'Principal Line of Business',
          titleSub: 'registered wording',
          description: `Reproduced from the Memorandum of Association of ${site.legalName} as filed with SECP.`,
          items: registeredObjects.map((object) => ({ question: `Clause ${object.clause}: ${object.heading}`, answer: object.text })),
        },
      },
      {
        component: 'map',
        props: {
          title: 'Registered Office',
          subtitle: 'Physical corporate location of ORADIGITALS (PRIVATE) LIMITED.',
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Request Corporate Documentation',
          text: 'For vendor onboarding, compliance certificates, or tax exemption forms, contact our legal team.',
          actions: [{ label: `Email ${site.email}`, href: `mailto:${site.email}`, style: 'primary' }],
        },
      },
    ],
  },

  // CONTACT PAGE (with embedded interactive Google Map)
  contact: {
    title: 'Contact Us - OraDigitals',
    description:
      'Get in touch with OraDigitals for enterprise Oracle ERP, custom ERP, FBR/ZATCA/FTA compliance, and API integrations.',
    sections: [
      {
        component: 'split',
        props: {
          title: 'Direct Channels & Operational Hours',
          text: 'Connect with our team through the most convenient channel for you.',
          // The form is the next section; on phones this button saves scrolling past the contact details
          actions: [{ label: 'Send Us a Message', href: '#send-message', style: 'primary' }],
          actionsAfterText: true,
          list: [
            `Office Location: ${site.address}, ${site.cityAddress}`,
            `Direct Phone: ${site.phone} / ${site.phone2}`,
            `General Inquiries: ${site.email}`,
            `Client Support Desk: ${site.supportEmail}`,
            'Business Hours: Monday - Friday 9:00 AM - 6:00 PM (PKT / GST)',
            `SECP: ${site.secpNumber} | PSEB: ${site.psebNumber} | FBR: ${site.fbrNumber} | PRA: ${site.praNumber}`,
          ],
          sideTitle: 'Fast Project Estimates',
          sideText: 'Share your system architecture, user counts, and target go-live date in the contact form to receive an expedited technical proposal and budgetary estimate.',
        },
      },
      {
        component: 'contact-form',
        props: {
          id: 'send-message',
          title: 'Send a Message or Project Request',
          subtitle: 'Fill in your requirements and our solutions lead will contact you promptly.',
          type: 'contact',
          fields: [
            { name: 'name', label: 'Your Full Name', required: true },
            { name: 'email', label: 'Corporate Email Address', type: 'email', required: true },
            { name: 'phone', label: 'Phone / WhatsApp Number', type: 'tel', required: true },
            {
              name: 'service',
              label: 'Service of Interest',
              type: 'select',
              options: [...serviceOptions(), 'General Consulting Inquiry'],
            },
            { name: 'subject', label: 'Subject / Project Brief', required: true },
            { name: 'message', label: 'Describe your current systems, requirements & timeline', type: 'textarea', required: true },
          ],
          submitLabel: 'Send Inquiry to OraDigitals',
        },
      },
      {
        component: 'map',
        props: {
          badge: 'Global Delivery & Local Presence',
          title: 'Visit our office',
          subtitle: 'Conveniently located with dedicated consulting and development wings.',
          cardTitle: 'OraDigitals (Private) Limited',
        },
      },
    ],
  },
}

// Each service page links to the case studies that used the service, just before its closing call to action
Object.keys(pages)
  .filter((slug) => slug.startsWith('services/'))
  .forEach((slug) => {
    const items = relatedCaseStudies(slug.slice('services/'.length))
    if (!items.length) return
    const sections = pages[slug].sections
    const ctaIndex = sections.map((section) => section.component).lastIndexOf('cta')
    sections.splice(ctaIndex === -1 ? sections.length : ctaIndex, 0, {
      component: 'case-studies',
      props: {
        compact: true,
        id: 'related-case-studies',
        eyebrow: 'Case Studies',
        titleMain: items.length > 1 ? 'Related Case Studies' : 'Related Case Study',
        titleSub: 'projects where we delivered this service',
        items,
      },
    })
  })

// Every inner page opens with its own hero (the landing page already has one)
Object.entries(pageHeroes({ site, pages, products, caseStudies: caseStudiesData })).forEach(([slug, props]) => {
  pages[slug].sections.unshift({ component: 'page-hero', props })
})

const componentCatalog = {
  hero: { description: 'Top page banner with headline, orbit graphics, and actions.' },
  'page-hero': { description: 'Inner page hero: tag line, two-part heading, actions, facts and a page-specific picture.' },
  customers: { description: 'Customer logo grid (the confirmed customers only).' },
  'case-study-showcase': { description: 'Home case studies: wide cards that move on their own, with counter and arrows.' },
  reviews: { description: 'Home reviews: featured quote beside a column of review cards and the Google rating.' },
  'case-studies': { description: 'Enterprise case studies showcase with client badges, challenges, solutions, ROI metrics, and tech stacks.' },
  'case-study-single': { description: 'Dedicated single case study breakdown with metrics, challenges, solutions, and testimonial.' },
  'leader-profile': { description: 'Founder / leader spotlight with portrait, name, title, and short intro.' },
  'team-carousel': { description: 'Team member cards in a carousel showing three at a time, with previous / next arrows.' },
  'people-grid': { description: 'Static grid of person cards (photo or initials, name, role), e.g. company directors.' },
  stats: { description: 'Grid of compact value/metric tiles.' },
  cards: { description: 'Reusable card grid for service, product, and team sections.' },
  split: { description: 'Two-column information section with image or side panel.' },
  timeline: { description: 'Chronological journey timeline.' },
  testimonials: { description: 'Client/team testimonial cards with ratings.' },
  jobs: { description: 'Role listings with requirements and application CTA.' },
  gallery: { description: 'Simple gallery cards with categories.' },
  'contact-form': { description: 'API-integrated inquiry and application form.' },
  map: { description: 'Interactive Google Maps embed with office card.' },
  faq: { description: 'Collapsible accordion for service and compliance FAQs.' },
  cta: { description: 'Call-to-action block with buttons.' },
}

// Labels come from the main menu so breadcrumbs always match what the visitor clicked.
// Top-level items win over submenu entries that reuse the same href.
function navLabel(href) {
  const top = site.nav.find((item) => item.href === href)
  if (top) return top.label
  for (const item of site.nav) {
    const children = item.groups
      ? item.groups.flatMap((group) => [...(group.href ? [{ label: group.heading, href: group.href }] : []), ...group.items])
      : item.submenu || []
    const child = children.find((entry) => entry.href === href)
    if (child) return child.label
  }
  return null
}

function titleCase(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

// Pages that are not in the menu, or whose menu entry reads poorly as a breadcrumb
const pageLabels = {
  'customers/case-studies': 'Case Studies',
  compliance: 'Compliance & Legal',
  contact: 'Contact Us',
  sitemap: 'Sitemap',
}

// Parent page for sub-pages whose URL does not already show it, mirroring where they sit in the main menu.
// Nested URLs such as /services/:slug fall under the URL one level up.
const parentPaths = {
  team: '/about',
  life: '/career',
}

// Case studies live under Customers: /customers/case-studies/:slug
const CASE_STUDY_PREFIX = 'customers/case-studies/'

function getBreadcrumbs(rawPath = '/') {
  const slug = normalizeSlug(rawPath)
  if (!slug) return null

  const crumbFor = (path) => {
    const pathSlug = normalizeSlug(path)
    const cs = pathSlug.startsWith(CASE_STUDY_PREFIX) && getCaseStudy(pathSlug.slice(CASE_STUDY_PREFIX.length))
    const label = cs ? cs.client : pageLabels[pathSlug] || navLabel(path) || titleCase(pathSlug.split('/').pop())
    return { label, href: path }
  }
  const trail = (path) => {
    const pathSlug = normalizeSlug(path)
    const parent = parentPaths[pathSlug] || (pathSlug.includes('/') ? `/${pathSlug.replace(/\/[^/]+$/, '')}` : null)
    return [...(parent ? trail(parent) : []), crumbFor(path)]
  }

  return [{ label: 'Home', href: '/' }, ...trail(`/${slug}`)]
}

function normalizeSlug(rawPath = '/') {
  if (!rawPath || rawPath === '/') return ''
  return rawPath.replace(/^\/+|\/+$/g, '')
}

function getPageBySlug(slug = '') {
  const normalized = normalizeSlug(slug)
  if (pages[normalized]) {
    return pages[normalized]
  }
  if (normalized.startsWith(CASE_STUDY_PREFIX)) {
    const page = generateCaseStudyPage(normalized.slice(CASE_STUDY_PREFIX.length))
    // Link the case study to the service pages for the services it used, labelled as in the Services menu
    const article = page && page.sections.find((section) => section.component === 'case-study-single')
    if (article) {
      article.props.relatedServices = (article.props.caseStudy.services || []).map((serviceSlug) => ({
        label: navLabel(`/services/${serviceSlug}`) || titleCase(serviceSlug),
        href: `/services/${serviceSlug}`,
      }))
    }
    return page
  }
  return null
}

function getPageByPath(pathname) {
  return getPageBySlug(pathname)
}

function getSite() {
  return site
}

function getComponents() {
  return componentCatalog
}

function getProducts() {
  return products
}

function getAllRoutes() {
  const coreRoutes = Object.keys(pages)
  const csRoutes = caseStudiesData.map((cs) => `${CASE_STUDY_PREFIX}${cs.slug}`)
  return Array.from(new Set([...coreRoutes, ...csRoutes]))
}

module.exports = {
  getSite,
  getComponents,
  getPageByPath,
  getPageBySlug,
  getAllRoutes,
  getProducts,
  getCaseStudy,
  getAllCaseStudies,
  getBreadcrumbs,
}
