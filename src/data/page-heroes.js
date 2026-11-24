// Heroes for the inner pages (the landing page has its own). Each one is written for its page: a short tag line,
// a two-part heading, a lead, two actions, three facts and a picture on the right (see components/page-hero.ejs).
// Facts only repeat what the page or a case study already states.

const SERVICES_CTA = { label: 'Schedule Consultation', href: '/contact', style: 'primary' }
const ALL_SERVICES = { label: 'All services', href: '/services', style: 'outline' }
const caseStudyLink = (slug, client) => ({ label: `Read the ${client} case study`, href: `/customers/case-studies/${slug}`, style: 'outline' })
const TREET = caseStudyLink('treet-corporation', 'Treet')
const PRIMMESHIPER = caseStudyLink('primmeshiper', 'Primmeshiper')
const INVESTMENTER = caseStudyLink('investmenter-dubai', 'InvestMenter')
// Sub-service pages name their parent service in the tag line
const TAX = '/services/tax-e-invoicing'
const SI = '/services/system-integration'
const EC = '/services/ecommerce-solutions'
const partOf = (tag, href, parent) => ({ tag, text: `Part of ${parent}`, href })

function pageHeroes({ site, pages, products, caseStudies }) {
  const jobs = pages.career.sections.find((section) => section.component === 'jobs').props.items
  const product = (slug) => products.find((item) => item.slug === slug)

  return {
    services: {
      pill: { tag: '9', text: 'core services, one team' },
      titleMain: 'Enterprise Services',
      titleSub: 'for the systems your business runs on',
      lead: 'Oracle ERP, tax e-invoicing, integrations and custom software,',
      leadAccent: 'from one team.',
      text: 'We implement and support Oracle ERP, connect it to tax authorities, banks, couriers and online stores, and build the custom applications around it.',
      actions: [SERVICES_CTA, { label: 'See case studies', href: '/customers/case-studies', style: 'outline' }],
      facts: [
        { value: '9', label: 'core services' },
        { value: 'PK · KSA · UAE', label: 'tax authorities covered' },
        { value: '2021', label: 'delivering since' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'oracle', eyebrow: 'ERP', title: 'Oracle ERP & Custom ERP', text: 'Fusion Cloud, EBS and ERP built to order', href: '/services/oracle-erp' },
          { icon: 'tax', eyebrow: 'Tax e-invoicing', title: 'FBR · ZATCA · UAE FTA', text: 'Invoices cleared straight from your ERP', href: TAX },
          { icon: 'integration', eyebrow: 'Integrations', title: 'Banks, couriers & online stores', text: 'Payments, shipments and orders in sync', href: '/services/system-integration' },
        ],
      },
    },

    'services/oracle-erp': {
      pill: { tag: 'Oracle', text: 'Fusion Cloud & E-Business Suite' },
      titleMain: 'Oracle ERP',
      titleSub: 'implementation & support',
      lead: 'Financials, supply chain, procurement and HR on Oracle,',
      leadAccent: 'set up the way you work.',
      text: 'We implement Oracle Fusion Cloud and Oracle EBS, connect them to the systems around them with Oracle Integration Cloud, and support them after go-live.',
      actions: [{ ...SERVICES_CTA, label: 'Book an Oracle consultation' }, TREET],
      facts: [
        { value: 'Fusion · EBS', label: 'both platforms' },
        { value: 'OIC', label: 'Oracle Integration Cloud' },
        { value: 'Treet', label: 'Oracle EBS client' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'corporate', eyebrow: 'Financials', title: 'Oracle Financials Cloud', text: 'Ledger, payables, receivables, assets and cash' },
          { icon: 'layers', eyebrow: 'Supply chain', title: 'SCM & Procurement', text: 'Sourcing, purchasing and inventory' },
          { icon: 'refresh', eyebrow: 'Integration', title: 'Oracle Integration Cloud', text: 'Banks, tax authorities and legacy systems' },
        ],
      },
    },

    'services/custom-erp': {
      pill: { tag: 'ERP', text: 'Built for your operation' },
      titleMain: 'Custom ERP',
      titleSub: 'software built around your business',
      lead: 'When off-the-shelf ERP does not fit,',
      leadAccent: 'we build one that does.',
      text: 'Manufacturing, inventory, finance and sales modules designed around your processes, with web and mobile access and role-based security.',
      actions: [{ ...SERVICES_CTA, label: 'Discuss your ERP' }, TREET],
      facts: [
        { value: 'Modular', label: 'only the modules you need' },
        { value: 'Web + mobile', label: 'office and field access' },
        { value: 'Treet', label: 'custom OMS client' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'building', eyebrow: 'Manufacturing', title: 'Manufacturing & BOM', text: 'Bills of materials, shop floor and capacity' },
          { icon: 'layers', eyebrow: 'Inventory', title: 'Inventory & Warehousing', text: 'Batches, barcodes and bin locations' },
          { icon: 'bank', eyebrow: 'Finance', title: 'Financials & Double-Entry', text: 'Journals, balance sheet and profit & loss' },
        ],
      },
    },

    'services/app-development': {
      pill: { tag: 'Apps', text: 'Flutter · Oracle APEX · JavaFX · Spring Boot' },
      titleMain: 'App Development',
      titleSub: 'mobile, web and desktop apps for your business',
      lead: 'Apps your customers and teams use every day,',
      leadAccent: 'connected to the systems behind them.',
      text: 'We build Flutter mobile apps, Oracle APEX web apps and JavaFX desktop apps on Java Spring Boot APIs, and connect them to your ERP, payments and other business systems.',
      actions: [{ ...SERVICES_CTA, label: 'Discuss your app' }, ALL_SERVICES],
      facts: [
        { value: 'Flutter', label: 'Android & iOS' },
        { value: 'Oracle APEX', label: 'web apps' },
        { value: 'JavaFX', label: 'desktop apps' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'mobile', eyebrow: 'Mobile · Flutter', title: 'Android & iOS apps', text: 'One codebase, both app stores' },
          { icon: 'code', eyebrow: 'Web · Oracle APEX', title: 'Web apps & portals', text: 'Dashboards, portals and internal tools', href: '/services/oracle-apex' },
          { icon: 'desktop', eyebrow: 'Desktop · JavaFX', title: 'Desktop apps', text: 'Like our EastFTP file-transfer client', href: '/products/eastftp' },
        ],
      },
    },

    'services/tax-e-invoicing': {
      pill: { tag: '3', text: 'tax authorities: Pakistan, Saudi Arabia, UAE' },
      titleMain: 'Tax & E-Invoicing Integration',
      titleSub: 'FBR, ZATCA and UAE FTA from your ERP',
      lead: 'Invoices and returns sent to the tax authority',
      leadAccent: 'straight from the systems you already use.',
      text: 'We connect Oracle, SAP, Odoo, custom ERPs and POS counters to FBR in Pakistan, ZATCA in Saudi Arabia and the Federal Tax Authority in the UAE.',
      actions: [SERVICES_CTA, { label: 'See case studies', href: '/customers/case-studies', style: 'outline' }],
      facts: [
        { value: 'FBR', label: 'Pakistan' },
        { value: 'ZATCA', label: 'Saudi Arabia' },
        { value: 'FTA', label: 'United Arab Emirates' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'tax', eyebrow: 'Pakistan', title: 'FBR digital invoicing', text: 'Invoice numbers and QR codes in real time', href: `${TAX}/fbr-integration` },
          { icon: 'shield', eyebrow: 'Saudi Arabia', title: 'ZATCA Fatoora Phase 1 & 2', text: 'Clearance, reporting and onboarding', href: `${TAX}/zatca-integration` },
          { icon: 'building', eyebrow: 'UAE', title: 'FTA VAT & corporate tax', text: 'Returns and audit files from your books', href: `${TAX}/dubai-fta-integration` },
        ],
      },
    },

    'services/tax-e-invoicing/fbr-integration': {
      pill: partOf('FBR', TAX, 'Tax & E-Invoicing Integration'),
      titleMain: 'FBR Integration',
      titleSub: 'digital invoicing from your ERP or POS',
      lead: 'Every sale reported to FBR',
      leadAccent: 'with its invoice number and QR code.',
      text: 'We connect Oracle EBS, Fusion, SAP, Odoo, custom systems and POS counters to FBR, with offline queueing so no sale is lost when the internet drops.',
      actions: [{ ...SERVICES_CTA, label: 'Get FBR-ready' }, TREET],
      facts: [
        { value: 'Real time', label: 'invoice numbers & QR codes' },
        { value: 'Offline', label: 'queue and sync' },
        { value: 'Treet', label: 'FBR digital invoicing' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'code', eyebrow: 'Every invoice', title: 'FBR invoice number & QR', text: 'Issued as each sale is posted' },
          { icon: 'refresh', eyebrow: 'Connectors', title: 'Oracle, SAP, Odoo & POS', text: 'Ready-made ERP connectors' },
          { icon: 'chart', eyebrow: 'Returns', title: 'Annexure-C reconciliation', text: 'Sales ledger matched to FBR records' },
        ],
      },
    },

    'services/tax-e-invoicing/zatca-integration': {
      pill: partOf('ZATCA', TAX, 'Tax & E-Invoicing Integration'),
      titleMain: 'ZATCA Integration',
      titleSub: 'e-invoicing for Saudi Arabia',
      lead: 'Phase 2 invoices cleared and reported',
      leadAccent: 'straight from your ERP.',
      text: 'We generate UBL 2.1 XML, cryptographic stamps and QR codes from Oracle, SAP or custom systems, and handle onboarding to the ZATCA portal.',
      actions: [{ ...SERVICES_CTA, label: 'Plan your Phase 2 rollout' }, ALL_SERVICES],
      facts: [
        { value: 'Phase 1 & 2', label: 'clearance & reporting' },
        { value: 'UBL 2.1', label: 'XML invoices' },
        { value: 'CSID', label: 'onboarding handled' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'lock', eyebrow: 'Onboarding', title: 'Cryptographic stamp (CSID)', text: 'Issued, stored and renewed securely' },
          { icon: 'file', eyebrow: 'Invoices', title: 'UBL 2.1 XML', text: 'Built from Oracle, SAP or custom data' },
          { icon: 'code', eyebrow: 'Clearance', title: 'Clearance & reporting', text: 'B2B invoices cleared, B2C reported' },
        ],
      },
    },

    'services/tax-e-invoicing/dubai-fta-integration': {
      pill: partOf('UAE FTA', TAX, 'Tax & E-Invoicing Integration'),
      titleMain: 'UAE FTA Integration',
      titleSub: 'corporate tax & VAT for Dubai and the UAE',
      lead: 'VAT returns, corporate tax and audit files',
      leadAccent: 'prepared from your books.',
      text: 'For mainland companies, free zone entities and multi-branch groups, with early work on the UAE e-invoicing framework.',
      actions: [{ ...SERVICES_CTA, label: 'Discuss your UAE tax setup' }, INVESTMENTER],
      facts: [
        { value: '9%', label: 'corporate tax computed' },
        { value: 'VAT 201', label: 'return preparation' },
        { value: 'InvestMenter', label: 'Dubai client' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'building', eyebrow: 'Corporate tax', title: 'UAE corporate tax engine', text: 'Adjustments, reliefs and the 9% computation' },
          { icon: 'chart', eyebrow: 'VAT', title: 'VAT 201 audit trail', text: 'Every supply type tracked' },
          { icon: 'file', eyebrow: 'Audits', title: 'FTA Audit File (FAF)', text: 'Generated in one click' },
        ],
      },
    },

    'services/system-integration': {
      pill: { tag: 'APIs', text: 'REST · SOAP · GraphQL · events' },
      titleMain: 'System Integration',
      titleSub: 'one connected set of systems',
      lead: 'Your ERP, CRM, store and databases',
      leadAccent: 'sharing the same data in real time.',
      text: 'We build middleware, API gateways and data pipelines that link Oracle, SAP and custom systems to CRMs, banks, couriers and online stores.',
      actions: [{ ...SERVICES_CTA, label: 'Map your integrations' }, { label: 'See case studies', href: '/customers/case-studies', style: 'outline' }],
      facts: [
        { value: 'Two-way', label: 'real-time sync' },
        { value: 'Treet', label: 'order management middleware' },
        { value: 'Primmeshiper', label: 'Shopify & courier sync' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'bank', eyebrow: 'Banking', title: 'Bank API Integration', text: 'Host-to-host payments and statement matching', href: `${SI}/bank-integration` },
          { icon: 'truck', eyebrow: 'Logistics', title: 'Courier & Logistics Integration', text: 'Bookings, labels and tracking automated', href: `${SI}/courier-integration` },
          { icon: 'api', eyebrow: 'Middleware', title: 'ERP, CRM & API connectors', text: 'Oracle and SAP with CRMs, queues and gateways' },
        ],
      },
    },

    'services/system-upgrade-migration': {
      pill: { tag: 'Upgrade', text: 'EBS 12.2 · Database 19c · Fusion Cloud' },
      titleMain: 'System Upgrade & Migration',
      titleSub: 'to supported, current platforms',
      lead: 'Upgrades and moves planned and rehearsed',
      leadAccent: 'so daily work carries on.',
      text: 'Oracle EBS and database upgrades, patching, EBS to Fusion Cloud moves and legacy data migration, with balances reconciled before go-live.',
      actions: [{ ...SERVICES_CTA, label: 'Plan your upgrade' }, ALL_SERVICES],
      facts: [
        { value: '12.2', label: 'Oracle EBS upgrades' },
        { value: '19c', label: 'database upgrades' },
        { value: 'Reconciled', label: 'before go-live' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'oracle', eyebrow: 'Oracle EBS', title: 'Upgrade to 12.2', text: 'Customisations and reports carried over' },
          { icon: 'database', eyebrow: 'Database', title: '11g / 12c to 19c', text: 'Performance checked before and after' },
          { icon: 'speed', eyebrow: 'Cloud', title: 'EBS to Fusion Cloud', text: 'Data mapped, converted and reconciled' },
        ],
      },
    },

    'services/ecommerce-solutions/shopify-solutions': {
      pill: partOf('Shopify', EC, 'E-Commerce Solutions'),
      titleMain: 'Shopify Plus Solutions',
      titleSub: 'custom apps and ERP sync',
      lead: 'Your Shopify store and back office',
      leadAccent: 'working from the same stock and orders.',
      text: 'Private apps, checkout extensions, B2B wholesale and live inventory sync with Oracle, SAP, your warehouse and your couriers.',
      actions: [{ ...SERVICES_CTA, label: 'Discuss your store' }, PRIMMESHIPER],
      facts: [
        { value: 'Live', label: 'multi-location stock' },
        { value: 'B2B', label: 'wholesale pricing' },
        { value: 'Primmeshiper', label: 'Shopify Plus client' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'shopping', eyebrow: 'Apps', title: 'Custom private apps', text: 'Built with Node.js and GraphQL' },
          { icon: 'refresh', eyebrow: 'Inventory', title: 'Oracle / SAP stock sync', text: 'No overselling across channels' },
          { icon: 'layers', eyebrow: 'Fulfilment', title: 'Warehouse & courier sync', text: 'Orders dispatched automatically' },
        ],
      },
    },

    'services/ecommerce-solutions': {
      pill: { tag: 'Commerce', text: 'Shopify · WordPress · integration' },
      titleMain: 'E-Commerce Solutions',
      titleSub: 'stores built to sell, connected to your business',
      lead: 'Shopify and WooCommerce stores',
      leadAccent: 'linked to your stock, payments and couriers.',
      text: 'We build on Shopify Plus or WordPress and WooCommerce, then connect the store to your ERP, payment gateways, couriers and tax e-invoicing.',
      actions: [{ ...SERVICES_CTA, label: 'Plan your store' }, { label: 'See case studies', href: '/customers/case-studies', style: 'outline' }],
      facts: [
        { value: 'Treet', label: 'WooCommerce + Oracle EBS' },
        { value: 'Primmeshiper', label: 'Shopify Plus client' },
        { value: 'Mobile-first', label: 'checkout' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'shopping', eyebrow: 'Shopify', title: 'Shopify Plus Solutions', text: 'Custom apps, checkout and B2B', href: `${EC}/shopify-solutions` },
          { icon: 'code', eyebrow: 'WordPress', title: 'WordPress & WooCommerce', text: 'Stores, custom plugins and scaling', href: `${EC}/wordpress-woocommerce` },
          { icon: 'api', eyebrow: 'Integration', title: 'E-Commerce Integration', text: 'ERP, payments, couriers and tax', href: `${EC}/ecommerce-integration` },
        ],
      },
    },

    'services/ecommerce-solutions/wordpress-woocommerce': {
      pill: partOf('WordPress', EC, 'E-Commerce Solutions'),
      titleMain: 'WordPress & WooCommerce',
      titleSub: 'online stores you can grow with',
      lead: 'WooCommerce stores built for your catalogue',
      leadAccent: 'and connected to your back office.',
      text: 'New stores, custom plugins and scaling for existing WooCommerce sites, with payment gateways, couriers and ERP sync built in.',
      actions: [{ ...SERVICES_CTA, label: 'Plan your store' }, TREET],
      facts: [
        { value: '100,000+', label: 'SKU catalogues' },
        { value: 'Custom', label: 'plugins & themes' },
        { value: 'Treet', label: 'WooCommerce + Oracle EBS' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'shopping', eyebrow: 'Build', title: 'WooCommerce stores', text: 'Themes, catalogue and checkout' },
          { icon: 'code', eyebrow: 'Extend', title: 'Custom plugins', text: 'Your pricing, shipping and approval rules' },
          { icon: 'refresh', eyebrow: 'Connect', title: 'ERP, courier & tax sync', text: 'Orders and stock in step with your back office' },
        ],
      },
    },

    'services/ecommerce-solutions/ecommerce-integration': {
      pill: partOf('Integration', EC, 'E-Commerce Solutions'),
      titleMain: 'E-Commerce Integration',
      titleSub: 'your store connected to everything behind it',
      lead: 'Orders, stock, payments and deliveries',
      leadAccent: 'flowing without re-keying.',
      text: 'We connect Shopify, WooCommerce and custom stores to your ERP, payment gateways, couriers, FBR e-invoicing and customer messaging.',
      actions: [{ ...SERVICES_CTA, label: 'Map your integration' }, TREET],
      facts: [
        { value: 'ERP', label: 'orders & stock in sync' },
        { value: 'Couriers', label: 'booked automatically' },
        { value: 'FBR', label: 'invoice per order' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'oracle', eyebrow: 'ERP', title: 'Orders & inventory', text: 'Oracle, SAP or custom ERP' },
          { icon: 'bank', eyebrow: 'Payments', title: 'Gateways & reconciliation', text: 'Payments matched to orders' },
          { icon: 'truck', eyebrow: 'Delivery', title: 'Courier booking & tracking', text: 'Labels and updates sent automatically' },
        ],
      },
    },

    'services/system-integration/bank-integration': {
      pill: partOf('Banking', SI, 'System Integration'),
      titleMain: 'Bank API Integration',
      titleSub: 'payments and statements inside your ERP',
      lead: 'Pay vendors and reconcile statements',
      leadAccent: 'without leaving your ERP.',
      text: 'Host-to-host bank channels, MT940 and CAMT.053 statement parsing, Raast and 1Link transfers, and maker-checker approvals for Pakistani and GCC banks.',
      actions: [{ ...SERVICES_CTA, label: 'Connect your bank' }, INVESTMENTER],
      facts: [
        { value: 'H2H', label: 'host-to-host channels' },
        { value: 'MT940', label: 'statement parsing' },
        { value: 'PK + GCC', label: 'banks' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'bank', eyebrow: 'Payments', title: 'Host-to-host transfers', text: 'Vendor payments and payroll in bulk' },
          { icon: 'file', eyebrow: 'Statements', title: 'MT940 / CAMT.053', text: 'Parsed and matched to the ledger' },
          { icon: 'lock', eyebrow: 'Approvals', title: 'Maker-checker workflow', text: 'Two approvals before money leaves' },
        ],
      },
    },

    'services/system-integration/courier-integration': {
      pill: partOf('Logistics', SI, 'System Integration'),
      titleMain: 'Courier Integration',
      titleSub: 'bookings, labels and tracking automated',
      lead: 'Orders booked with the right courier',
      leadAccent: 'and tracked to the doorstep.',
      text: 'We connect your store or ERP to local and international couriers for automatic booking, label printing, tracking updates and COD reconciliation.',
      actions: [{ ...SERVICES_CTA, label: 'Connect your couriers' }, TREET],
      facts: [
        { value: 'Multi-carrier', label: 'routing' },
        { value: 'COD', label: 'cash reconciled' },
        { value: 'Treet', label: 'courier bookings & tracking' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'truck', eyebrow: 'Routing', title: 'Multi-carrier engine', text: 'Cheapest or fastest courier per order' },
          { icon: 'file', eyebrow: 'Labels', title: 'Labels & consignment notes', text: 'Printed from the pack screen' },
          { icon: 'api', eyebrow: 'Tracking', title: 'Tracking webhooks', text: 'Customers updated by SMS and email' },
        ],
      },
    },

    'services/oracle-apex': {
      pill: { tag: 'APEX', text: 'Low-code on Oracle Database' },
      titleMain: 'Oracle APEX',
      titleSub: 'web apps on your Oracle data',
      lead: 'Replace old Forms, spreadsheets and Access databases',
      leadAccent: 'with secure web apps.',
      text: 'Portals, dashboards, mobile apps and Oracle ERP extensions built with Oracle APEX, on your own servers or on Oracle Cloud.',
      actions: [{ ...SERVICES_CTA, label: 'Discuss your app' }, ALL_SERVICES],
      facts: [
        { value: 'Forms to web', label: 'legacy modernisation' },
        { value: 'PWA', label: 'installable mobile apps' },
        { value: 'SSO', label: 'Azure AD, Okta & Oracle' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'code', eyebrow: 'Modernise', title: 'Legacy modernisation', text: 'Oracle Forms and Access to the web' },
          { icon: 'chart', eyebrow: 'Insight', title: 'Executive data portals', text: 'Drill-down KPI dashboards' },
          { icon: 'api', eyebrow: 'ERP', title: 'Oracle ERP extensions', text: 'New pages without touching core code' },
        ],
      },
    },

    'services/data-analytics': {
      pill: { tag: 'BI', text: 'Power BI · data warehouses · ETL' },
      titleMain: 'Data Analytics & BI',
      titleSub: 'decisions from the data you already have',
      lead: 'ERP, POS and sales data',
      leadAccent: 'turned into dashboards your team uses.',
      text: 'Data warehouses, automated pipelines and Power BI dashboards for finance, sales and inventory, with forecasting where it helps.',
      actions: [{ ...SERVICES_CTA, label: 'Discuss your reporting' }, ALL_SERVICES],
      facts: [
        { value: 'Power BI', label: 'dashboards' },
        { value: 'Automated', label: 'ETL pipelines' },
        { value: 'Forecasts', label: 'inventory demand' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'chart', eyebrow: 'Dashboards', title: 'Power BI', text: 'KPI scorecards and profitability' },
          { icon: 'database', eyebrow: 'Warehouse', title: 'Cloud data warehousing', text: 'Snowflake, BigQuery and Oracle ADW' },
          { icon: 'refresh', eyebrow: 'Pipelines', title: 'Automated ETL / ELT', text: 'From ERP, POS and ad channels' },
        ],
      },
    },

    about: {
      pill: { tag: 'SECP', text: 'A registered company: see our registrations', href: '/compliance' },
      titleMain: 'About OraDigitals',
      titleSub: 'Oracle ERP, compliance and integration specialists',
      lead: 'One team in Okara building and supporting',
      leadAccent: 'the systems businesses run on.',
      text: 'Since 2021 we have grown from Oracle database consulting into a full service catalogue for clients in Pakistan, Saudi Arabia and the UAE.',
      actions: [{ label: 'Work with us', href: '/contact', style: 'primary' }, { label: 'Meet the team', href: '/team', style: 'outline' }],
      facts: [
        { value: '2021', label: 'founded' },
        { value: '10+', label: 'team members' },
        { value: '3', label: 'countries served' },
      ],
      visual: {
        type: 'photos',
        items: [
          { src: '/public/images/office-workspace.jpg', alt: 'The OraDigitals office in Okara' },
          { src: '/public/images/life-knowledge-sharing.jpg', alt: 'OraDigitals engineers discussing work around the office table' },
          { src: '/public/images/life-team-trip.jpg', alt: 'The OraDigitals team on a team trip' },
        ],
      },
    },

    team: {
      pill: { tag: 'Hiring', text: 'Join the team', href: '/career' },
      titleMain: 'Meet the Team',
      titleSub: 'behind every OraDigitals delivery',
      lead: 'Consultants and engineers who',
      leadAccent: 'build, integrate and support your systems.',
      text: 'Oracle EBS and OIC developers, ERP functional consultants and software engineers, led by our founder Muhammad Faisal.',
      actions: [{ label: 'Meet everyone', href: '#team', style: 'primary' }, { label: 'Open positions', href: '/career', style: 'outline' }],
      facts: [
        { value: '10+', label: 'team members' },
        { value: 'Oracle · OIC', label: 'core skills' },
        { value: 'Okara', label: 'head office' },
      ],
      visual: {
        type: 'photos',
        items: [
          { src: '/public/images/team/muhammad-faisal.jpg', alt: 'Muhammad Faisal, CEO & Founder', caption: 'Muhammad Faisal' },
          { src: '/public/images/team-at-work.jpg', alt: 'The OraDigitals team at work' },
          { src: '/public/images/team/muhammad-qaiser.jpg', alt: 'Muhammad Qaiser, Director', caption: 'Muhammad Qaiser' },
        ],
      },
    },

    life: {
      pill: { tag: 'Hiring', text: 'See open positions', href: '/career' },
      titleMain: 'Life at OraDigitals',
      titleSub: 'learning, teamwork and good company',
      lead: 'Real projects, weekly tech talks',
      leadAccent: 'and a team that celebrates together.',
      text: 'From Friday tech talks to Independence Day and team trips, this is what working in our Okara office looks like.',
      actions: [{ label: 'Explore careers', href: '/career', style: 'primary' }, { label: 'Meet the team', href: '/team', style: 'outline' }],
      facts: [
        { value: 'Fridays', label: 'tech talks' },
        { value: 'Trips', label: 'and celebrations' },
        { value: 'Okara', label: 'office' },
      ],
      visual: {
        type: 'photos',
        items: [
          { src: '/public/images/life-team-trip.jpg', alt: 'The OraDigitals team on a team trip' },
          { src: '/public/images/life-knowledge-sharing.jpg', alt: 'OraDigitals engineers discussing work around the office table' },
          { src: '/public/images/about-team-office.jpg', alt: 'The OraDigitals team at work in the Okara office' },
        ],
      },
    },

    'career/internship': {
      pill: { tag: 'Internship', text: 'Apply below', href: '#apply' },
      titleMain: 'Software Engineering Internship',
      titleSub: 'learn on real client systems',
      lead: 'Work on production systems',
      leadAccent: 'from day one.',
      text: 'One-on-one mentorship from our senior engineers in backend APIs, Oracle databases, security and the tax integrations our clients run on.',
      actions: [{ label: 'Apply for the internship', href: '#apply', style: 'primary' }, { label: 'Life at OraDigitals', href: '/life', style: 'outline' }],
      facts: [
        { value: '1-on-1', label: 'mentorship' },
        { value: 'Real', label: 'client projects' },
        { value: 'Okara', label: 'office' },
      ],
      visual: {
        type: 'photo-panels',
        image: '/public/images/team-at-work.jpg',
        imageAlt: 'OraDigitals engineers at work',
        items: [
          { icon: 'api', title: 'Backend & API engineering', text: 'Node.js, REST and SOAP' },
          { icon: 'database', title: 'Database internals', text: 'Oracle SQL and PL/SQL' },
        ],
      },
    },

    career: {
      pill: { tag: 'Jobs', text: `${jobs.length} open positions`, href: '#openings' },
      titleMain: 'Careers at OraDigitals',
      titleSub: 'build the systems businesses run on',
      lead: 'Join a team working on Oracle ERP,',
      leadAccent: 'tax integrations and custom software.',
      text: 'We hire consultants and engineers who enjoy real client work and hard problems. Roles are based in Okara, with hybrid options.',
      actions: [{ label: 'View open positions', href: '#openings', style: 'primary' }, { label: 'Life at OraDigitals', href: '/life', style: 'outline' }],
      facts: [
        { value: 'Okara', label: 'hybrid roles' },
        { value: 'Internships', label: 'for students & graduates' },
        { value: 'Mentorship', label: 'from senior engineers' },
      ],
      visual: {
        type: 'photo-panels',
        image: '/public/images/office-workspace.jpg',
        imageAlt: 'The OraDigitals office in Okara',
        items: jobs.slice(0, 3).map((job) => ({
          icon: 'code',
          title: job.title,
          text: `${job.department} · ${job.location}`,
          href: '#openings',
        })),
      },
    },

    customers: {
      pill: { tag: `${caseStudies.length}`, text: 'detailed case studies', href: '/customers/case-studies' },
      titleMain: 'Customers',
      titleSub: 'who trust us with their systems',
      lead: 'Manufacturers, retailers, real estate and finance firms',
      leadAccent: 'whose systems we build and connect.',
      text: 'From Oracle EBS and order management for Treet to UAE tax automation for InvestMenter, these are the companies we work with.',
      actions: [{ label: 'Read the case studies', href: '/customers/case-studies', style: 'primary' }, { label: 'Become a client', href: '/contact', style: 'outline' }],
      facts: [
        { value: '7', label: 'customers' },
        { value: `${caseStudies.length}`, label: 'case studies' },
        { value: 'PK · UAE', label: 'and beyond' },
      ],
      visual: {
        type: 'logos',
        items: [
          { src: '/public/images/treet-logo.png', alt: 'Treet' },
          { src: '/public/images/primmeshiper-logo.png', alt: 'Primmeshiper' },
          { src: '/public/images/agilecentral-logo.svg', alt: 'AgileCentral' },
          { src: '/public/images/investmenter-logo.svg', alt: 'InvestMenter' },
          { src: '/public/images/neofurniture-logo.png', alt: 'Neo Furniture' },
          { src: '/public/images/asgard-logo.png', alt: 'Asgard Real Estate' },
        ],
        caption: 'Also Flick Network',
      },
    },

    'customers/case-studies': {
      pill: { tag: `${caseStudies.length}`, text: 'detailed case studies' },
      titleMain: 'Case Studies',
      titleSub: 'real projects, explained',
      lead: 'The problem, the build and the stack',
      leadAccent: 'behind each project.',
      text: 'Order management and ERP integration for Treet, Shopify fulfilment for Primmeshiper and UAE tax automation for InvestMenter.',
      actions: [{ label: 'Discuss your project', href: '/contact', style: 'primary' }, { label: 'Our customers', href: '/customers', style: 'outline' }],
      facts: [
        { value: `${caseStudies.length}`, label: 'case studies' },
        { value: 'PK · UAE', label: 'clients' },
        { value: 'ERP · tax · commerce', label: 'projects' },
      ],
      visual: {
        type: 'panels',
        items: caseStudies.map((cs) => ({
          logo: cs.clientLogo,
          eyebrow: cs.category,
          title: cs.client,
          text: cs.industry,
          href: `/customers/case-studies/${cs.slug}`,
        })),
      },
    },

    products: {
      pill: { tag: `${products.length}`, text: 'in-house products' },
      titleMain: 'Our Products',
      titleSub: 'software we build and maintain ourselves',
      lead: 'Tools for file transfer and data migration,',
      leadAccent: 'built for recurring back-office jobs.',
      text: 'EastFTP downloads files from FTPS servers on a schedule; Pimidrome converts and migrates data between formats in scheduled batches.',
      actions: [{ label: 'Request a demo', href: '/contact', style: 'primary' }, ALL_SERVICES],
      facts: [
        { value: `${products.length}`, label: 'products' },
        { value: 'FTPS', label: 'encrypted transfers' },
        { value: 'XML · CSV · JSON', label: 'data formats' },
      ],
      visual: {
        type: 'panels',
        items: products.map((item) => ({ icon: item.icon, eyebrow: 'Product', title: item.name, text: item.tagline, href: `/products/${item.slug}` })),
      },
    },

    'products/eastftp': {
      pill: { tag: 'Product', text: product('eastftp').tagline },
      titleMain: 'EastFTP',
      titleSub: 'scheduled, encrypted file downloads',
      lead: 'Files fetched from FTPS servers on a schedule',
      leadAccent: 'and delivered where you need them.',
      text: product('eastftp').text,
      actions: [{ label: 'Ask about EastFTP', href: '/contact', style: 'primary' }, { label: 'All products', href: '/products', style: 'outline' }],
      facts: [
        { value: 'FTPS', label: 'encrypted' },
        { value: 'Scheduled', label: 'background downloads' },
        { value: 'Audit log', label: 'for every transfer' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'folder', eyebrow: 'Downloads', title: 'Scheduled FTPS downloads', text: 'Multi-threaded, in the background' },
          { icon: 'refresh', eyebrow: 'Reliability', title: 'Polling & retry queues', text: 'Intervals and retries you set' },
          { icon: 'lock', eyebrow: 'Security', title: 'Credential vault & audit log', text: 'Every transfer recorded' },
        ],
      },
    },

    'products/pimidrome': {
      pill: { tag: 'Product', text: product('pimidrome').tagline },
      titleMain: 'Pimidrome',
      titleSub: 'data migration and conversion',
      lead: 'Data moved out of legacy files and databases',
      leadAccent: 'cleanly, on a schedule.',
      text: product('pimidrome').text,
      actions: [{ label: 'Ask about Pimidrome', href: '/contact', style: 'primary' }, { label: 'All products', href: '/products', style: 'outline' }],
      facts: [
        { value: 'XML · CSV · JSON', label: 'formats' },
        { value: 'Mapping', label: 'and validation rules' },
        { value: 'Checkpoints', label: 'for error recovery' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'database', eyebrow: 'Extract', title: 'Legacy files & databases', text: 'Structured data pulled out cleanly' },
          { icon: 'refresh', eyebrow: 'Transform', title: 'Column mapping & validation', text: 'Rules you configure' },
          { icon: 'shield', eyebrow: 'Recover', title: 'Error logs & checkpoints', text: 'Batches resume where they stopped' },
        ],
      },
    },

    compliance: {
      pill: { tag: 'SECP', text: 'Verify us on the SECP portal', href: site.secpVerificationLink },
      titleMain: 'Compliance',
      titleSub: 'registrations and governance',
      lead: 'A registered Pakistani company,',
      leadAccent: 'with records you can check.',
      text: `${site.legalName} is registered with SECP, PSEB, FBR and PRA. Our registration numbers, directors and business activities are listed below.`,
      actions: [{ label: 'See our directors', href: '#directors', style: 'primary' }, { label: 'Contact us', href: '/contact', style: 'outline' }],
      facts: [
        { value: site.secpNumber, label: 'SECP registration' },
        { value: site.fbrNumber, label: 'FBR NTN' },
        { value: 'PSEB', label: 'registered exporter' },
      ],
      visual: {
        type: 'panels',
        items: [
          { icon: 'government', eyebrow: 'SECP', title: 'Company registration', text: site.secpNumber },
          { icon: 'building', eyebrow: 'PSEB', title: 'Pakistan Software Export Board', text: site.psebNumber },
          { icon: 'tax', eyebrow: 'FBR · PRA', title: `NTN ${site.fbrNumber}`, text: `PRA STRN ${site.praNumber}` },
        ],
      },
    },

    contact: {
      pill: { tag: 'Okara', text: 'Visit our office', href: site.mapLink },
      titleMain: 'Contact Us',
      titleSub: "let's talk about your project",
      lead: 'Tell us about',
      leadAccent: 'your project.',
      text: 'Questions, a project brief or a support request: send a message, call or WhatsApp us, and the right person on our team will reply.',
      actions: [{ label: 'Send a message', href: '#send-message', style: 'primary' }, { label: 'Get directions', href: site.mapLink, style: 'outline' }],
      visual: {
        type: 'panels',
        items: [
          { icon: 'mail', eyebrow: 'Email us', title: site.email, text: 'Projects, partnerships and general questions', href: `mailto:${site.email}` },
          { icon: 'phone', eyebrow: 'Call or WhatsApp', title: site.phone, text: 'Speak to our team in Okara', href: `tel:${site.phoneRaw}` },
          { icon: 'map', eyebrow: 'Visit us', title: 'Okara, Pakistan', text: site.address, href: site.mapLink },
        ],
      },
    },

    sitemap: {
      titleMain: 'Sitemap',
      titleSub: 'every page on the site',
      lead: 'Services, products, customers and company pages,',
      leadAccent: 'all in one place.',
    },
  }
}

// Hero for a case study page, built from its record
function caseStudyHero(cs) {
  return {
    pill: { tag: cs.category, text: 'Case study', href: '/customers/case-studies' },
    titleMain: cs.client,
    titleSub: cs.title,
    text: cs.subtitle,
    actions: [
      { label: 'Discuss a similar project', href: '/contact', style: 'primary' },
      { label: 'All case studies', href: '/customers/case-studies', style: 'outline' },
    ],
    facts: (cs.metrics || cs.highlights || []).slice(0, 3).map(({ value, label }) => ({ value, label })),
    // The case study article below sits on the grey page background
    waveFill: '#f3f6f5',
    visual: {
      type: 'panels',
      items: [
        { logo: cs.clientLogo, eyebrow: 'Client', title: cs.client, text: cs.location },
        { icon: 'layers', eyebrow: 'Industry', title: cs.industry },
        { icon: 'code', eyebrow: 'Technology', title: (cs.techStack || []).slice(0, 4).join(' · ') },
      ],
    },
  }
}

module.exports = { pageHeroes, caseStudyHero }
