/**
 * Dedicated Case Studies Data & Registry
 * Allows adding new case studies dynamically over time.
 * English-only Enterprise Edition.
 */

const { shareImage } = require('./share-images');
const { caseStudyHero } = require('./page-heroes');

const SITE_URL = 'https://oradigitals.com';

const caseStudiesData = [
  {
    slug: 'treet-corporation',
    categoryKey: 'erp',
    category: 'System Integration & ERP',
    client: 'Treet Corporation',
    clientLogo: '/public/images/treet-logo.png',
    solution: 'Custom Order Management System (OMS) and Enterprise Integration Middleware',
    industry: 'Manufacturing and E-Commerce',
    technology: 'WooCommerce, Oracle E-Business Suite (EBS), Oracle Database, REST APIs, Courier APIs, Banking APIs, WhatsApp integration, and FBR integration',
    service: 'System Integration, Order Management Automation, ERP Integration, and Custom Application Development',
    title: 'Integrating E-Commerce and Enterprise Operations Through a Custom Order Management System',
    seoTitle: 'Treet Corporation OMS & Oracle EBS Case Study',
    metaDescription: 'How OraDigitals built a custom order management system linking Treet\'s WooCommerce store with Oracle EBS, couriers, banks, WhatsApp and FBR.',
    services: ['oracle-erp', 'custom-erp', 'system-integration', 'ecommerce-solutions/wordpress-woocommerce', 'ecommerce-solutions/ecommerce-integration', 'system-integration/courier-integration', 'system-integration/bank-integration', 'tax-e-invoicing/fbr-integration'],
    subtitle: 'Connecting WooCommerce digital storefront with Oracle E-Business Suite, banking APIs, courier logistics, WhatsApp, and FBR e-invoicing through a centralized custom OMS middleware.',
    highlights: [
      { value: 'Oracle EBS', label: 'orders & finance in sync' },
      { value: 'Couriers', label: 'bookings & tracking' },
      { value: 'FBR', label: 'digital invoicing' },
    ],
    summary: 'OraDigitals designed and developed a custom Order Management System (OMS) to serve as the integration layer between WooCommerce, Oracle E-Business Suite (EBS), courier partners, banking services, and other business systems.',
    challenge: 'As Treet\'s e-commerce operations relied on multiple systems, coordinating information across the online store, ERP, payment channels, and delivery partners presented several integration challenges.',
    solutionSummary: 'OraDigitals developed and deployed a custom OMS middleware application, hosted on a Virtual Private Server (VPS), using the Oracle EBS database environment as its operational backend.',
    techStack: [
      'WooCommerce',
      'Oracle E-Business Suite (EBS)',
      'Oracle Database',
      'Custom OMS Middleware (VPS)',
      'Courier Partner APIs',
      'Banking APIs',
      'WhatsApp Business API',
      'FBR Digital Invoicing API'
    ],
    contentHtml: `
<div class="cs-article-section">
  <h2>Overview</h2>
  <p>Treet Corporation required a reliable way to connect its WooCommerce online store with its enterprise resource planning environment, payment verification systems, and logistics partners. Managing these interconnected processes required a solution that could coordinate online orders, inventory, payments, dispatch operations, and customer communications across multiple platforms.</p>
  <p>OraDigitals designed and developed a custom Order Management System (OMS) to serve as the integration layer between WooCommerce, Oracle E-Business Suite (EBS), courier partners, banking services, and other business systems.</p>
  <p>The solution established a centralized operational workflow for e-commerce order processing, connecting digital storefront transactions with enterprise order management, accounts receivable, logistics, and customer notifications.</p>
</div>

<div class="cs-article-section">
  <h2>The Challenge</h2>
  <p>As Treet's e-commerce operations relied on multiple systems, coordinating information across the online store, ERP, payment channels, and delivery partners presented several integration challenges.</p>

  <h3>Disconnected E-Commerce and ERP Operations</h3>
  <p>Product information, pricing, inventory, and online orders needed to remain consistent between WooCommerce and Oracle EBS. Without a coordinated integration layer, maintaining data consistency across these systems could require additional manual intervention.</p>

  <h3>Complex Order-to-Cash Processes</h3>
  <p>Online transactions needed to flow into Oracle Order Management, while payment verification and receipt creation needed to be coordinated with the relevant banking and Accounts Receivable processes.</p>

  <h3>Manual Dispatch and Delivery Coordination</h3>
  <p>Order fulfillment required coordination between the e-commerce platform, Oracle EBS, and courier service providers. Shipment booking, dispatch tracking, and delivery status visibility needed to be integrated into a unified workflow.</p>

  <h3>Limited Centralized Operational Visibility</h3>
  <p>Operations teams needed a centralized way to view e-commerce orders, monitor their processing status, manage dispatches, and access operational reports without relying on disconnected workflows.</p>

  <h3>Customer Communication and Compliance</h3>
  <p>The order lifecycle also required automated customer notifications through WhatsApp and integration with the FBR system for applicable e-invoicing and reporting requirements.</p>
</div>

<div class="cs-article-section">
  <h2>The Solution: A Custom Order Management System</h2>
  <p>OraDigitals developed and deployed a custom OMS middleware application, hosted on a Virtual Private Server (VPS), using the Oracle EBS database environment as its operational backend.</p>
  <p>The OMS acts as a central integration layer that coordinates communication between WooCommerce, Oracle EBS, courier partners, banking APIs, WhatsApp messaging services, and the FBR system.</p>
  <p>Rather than replacing Treet's existing enterprise systems, the solution connects them through defined integration workflows, enabling online transactions and operational data to move between the relevant platforms.</p>

  <h3>1. WooCommerce and Oracle EBS Integration</h3>
  <p>OraDigitals implemented integration workflows to synchronize product catalogs, categories, pricing, inventory levels, and order information between WooCommerce and Oracle EBS.</p>
  <p>The solution also supports the initial upload of master data from Oracle EBS to WooCommerce, establishing a consistent foundation for e-commerce operations.</p>
  <p>Online transactions are processed through the OMS, enabling daily sales order creation in Oracle Order Management and supporting the associated order fulfillment and invoicing workflows.</p>

  <h3>2. Centralized Order Management Dashboard</h3>
  <p>The OMS provides a centralized operational interface for monitoring e-commerce activities and coordinating backend processes.</p>
  <p>Key capabilities include:</p>
  <ul>
    <li>Centralized visibility into order processing and status.</li>
    <li>Access to order and inventory information.</li>
    <li>Operational monitoring of integrated workflows.</li>
    <li>Order reporting and dispatch reporting.</li>
    <li>Support for payment verification and receipt processing.</li>
    <li>Coordination of order fulfillment across connected systems.</li>
  </ul>
  <p>The dashboard provides operations teams with a unified view of relevant e-commerce processes, reducing the need to manage each integration independently.</p>

  <h3>3. Automated Courier and Dispatch Integration</h3>
  <p>OraDigitals integrated the OMS with designated courier service providers through their APIs.</p>
  <p>The integration supports automated shipment booking, tracking information, and delivery status updates. These workflows connect order processing with logistics operations, improving visibility into the movement of orders from dispatch through delivery.</p>
  <p>Custom Oracle EBS forms were also developed to support e-commerce operations, including a Dispatch Order form for dispatch management and tracking.</p>

  <h3>4. Banking Integration and Payment Verification</h3>
  <p>To support payment validation, the OMS integrates with partner banking APIs to verify eligible transactions.</p>
  <p>The solution connects payment verification with downstream order processing and supports the creation of Oracle Accounts Receivable receipt transactions for relevant payment types, including cash and bank transfers.</p>
  <p>This integration helps coordinate the relationship between online orders, verified payments, and ERP financial records.</p>

  <h3>5. Oracle EBS Operational Forms and Reporting</h3>
  <p>OraDigitals developed dedicated Oracle EBS forms to support day-to-day e-commerce operations:</p>
  <ul>
    <li><strong>View E-Com Orders:</strong> Provides access to WooCommerce orders, with functionality for viewing, printing, and canceling orders.</li>
    <li><strong>Dispatch Order:</strong> Supports dispatch operations and access to shipment tracking information.</li>
    <li><strong>Cash Receipt Entry:</strong> Supports the entry and management of cash receipt transactions associated with e-commerce payments.</li>
  </ul>
  <p>In addition, the solution includes operational reporting capabilities, including order and dispatch reports, to support visibility across fulfillment and payment-related workflows.</p>

  <h3>6. WhatsApp and Email Notifications</h3>
  <p>The OMS integrates with messaging services to support automated customer communication throughout the order lifecycle.</p>
  <p>Using the relevant APIs, the solution supports WhatsApp order confirmations and delivery-status notifications, along with feedback collection and related customer communications.</p>
  <p>Email notifications are also incorporated into the broader order management workflow.</p>
  <p>The scope covers the integration and utilization of the relevant messaging APIs, rather than the creation of the WhatsApp API itself.</p>

  <h3>7. FBR Integration</h3>
  <p>OraDigitals incorporated integration with the Federal Board of Revenue (FBR) system into the e-commerce ecosystem to support applicable e-invoicing and reporting workflows.</p>
  <p>This connects relevant transaction processing with the associated compliance processes, helping align e-commerce operations with the client's invoicing and reporting requirements.</p>
</div>

<div class="cs-article-section">
  <h2>Technology and Architecture</h2>
  <p>The solution brings together existing enterprise systems and external services through a custom-built middleware layer.</p>
  <p><strong>Core components:</strong></p>
  <ul class="cs-tech-list">
    <li><strong>E-Commerce:</strong> WooCommerce</li>
    <li><strong>Enterprise Resource Planning:</strong> Oracle E-Business Suite</li>
    <li><strong>Operational Database:</strong> Oracle EBS database environment</li>
    <li><strong>Integration Layer:</strong> Custom OMS middleware developed by OraDigitals</li>
    <li><strong>Hosting:</strong> Virtual Private Server (VPS)</li>
    <li><strong>Logistics:</strong> Courier partner APIs</li>
    <li><strong>Payments:</strong> Banking APIs</li>
    <li><strong>Customer Communication:</strong> WhatsApp and email integrations</li>
    <li><strong>Compliance:</strong> FBR system integration</li>
  </ul>
  <p>The OMS coordinates the exchange of master data and transactional information across the connected systems, supporting a unified approach to e-commerce order management and enterprise operations.</p>
</div>

<div class="cs-article-section">
  <h2>Business Impact</h2>
  <p>The implementation established an integrated operational framework connecting Treet's online storefront with its ERP, financial, logistics, and customer communication systems.</p>
  <p>The solution provides the following business capabilities:</p>

  <div class="cs-impact-block">
    <h3>Connected enterprise and e-commerce operations</h3>
    <p>Product, pricing, inventory, and order information can be synchronized across WooCommerce and Oracle EBS through the OMS integration workflows.</p>
  </div>

  <div class="cs-impact-block">
    <h3>More automated order processing</h3>
    <p>Online transactions can flow into Oracle Order Management, supporting the downstream fulfillment and invoicing processes.</p>
  </div>

  <div class="cs-impact-block">
    <h3>Improved payment workflow coordination</h3>
    <p>Bank API integration and Oracle Accounts Receivable receipt processing connect payment verification with financial transaction handling.</p>
  </div>

  <div class="cs-impact-block">
    <h3>Centralized order and dispatch visibility</h3>
    <p>Operational forms and reports provide a consolidated way to view e-commerce orders and manage dispatch-related activities.</p>
  </div>

  <div class="cs-impact-block">
    <h3>Integrated logistics workflows</h3>
    <p>Courier integrations support shipment booking, tracking, and delivery-status updates within the broader order management process.</p>
  </div>

  <div class="cs-impact-block">
    <h3>Automated customer communications</h3>
    <p>WhatsApp and email integrations support order-related notifications, delivery updates, and feedback collection.</p>
  </div>

  <div class="cs-impact-block">
    <h3>Connected compliance workflows</h3>
    <p>FBR integration connects relevant e-commerce transactions with applicable e-invoicing and reporting processes.</p>
  </div>
</div>

<div class="cs-article-section">
  <h2>The Outcome</h2>
  <p>Through this implementation, OraDigitals delivered a custom Order Management System that connects Treet Corporation's WooCommerce store with Oracle E-Business Suite and its designated external service providers.</p>
  <p>The project brings e-commerce order processing, inventory synchronization, ERP sales order creation, payment verification, receipt processing, dispatch management, courier tracking, customer notifications, and compliance-related integrations into a coordinated operational ecosystem.</p>
  <p>By integrating existing platforms rather than replacing them, OraDigitals helped establish a more connected foundation for managing Treet's e-commerce operations across its digital storefront and enterprise systems.</p>
  <p>In a second phase, the same OMS was extended to Treet's Daraz marketplace store: see the <a href="/customers/case-studies/treet-daraz-integration">Treet Daraz integration case study</a>.</p>
</div>

<div class="cs-article-section cs-article-about">
  <h2>About OraDigitals</h2>
  <p>OraDigitals provides enterprise technology solutions spanning ERP implementation and customization, system integration, custom application development, and AI-powered business automation.</p>
  <p>We help organizations connect business systems, streamline operational workflows, and build tailored technology solutions around their existing infrastructure.</p>

  <div class="cs-cta-box">
    <h3>Have a complex integration challenge?</h3>
    <p>Contact OraDigitals to discuss how custom middleware, enterprise application integration, and workflow automation can connect your business systems and support your operational goals.</p>
    <a href="/contact" class="btn btn-primary">Schedule Consultation</a>
  </div>
</div>
`
  },
  // Phase 2 of the Treet project: the Daraz marketplace connected to the OMS built in phase 1 (above).
  // DRAFT: the scope below follows how a Daraz Open Platform integration with this OMS works; confirm each
  // part with the delivery team before launch (see TODO.md, "Treet Daraz case study").
  {
    slug: 'treet-daraz-integration',
    categoryKey: 'commerce',
    category: 'Marketplace Integration',
    client: 'Treet Corporation',
    clientLogo: '/public/images/treet-logo.png',
    solution: 'Daraz marketplace connected to the existing custom OMS and Oracle E-Business Suite',
    industry: 'Manufacturing and E-Commerce',
    technology: 'Daraz Open Platform API, Custom OMS Middleware, Oracle E-Business Suite (EBS), Oracle Database, and WooCommerce',
    service: 'Marketplace Integration, Order Management Automation, and ERP Integration',
    title: 'Bringing Daraz Marketplace Orders into Treet\'s Order Management System',
    seoTitle: 'Treet Daraz Marketplace Integration Case Study',
    metaDescription: 'How OraDigitals connected Treet\'s Daraz store to its custom OMS and Oracle EBS, so marketplace orders, stock and dispatch run through one system.',
    services: ['ecommerce-solutions/ecommerce-integration', 'system-integration', 'oracle-erp', 'custom-erp'],
    subtitle: 'Extending the custom OMS built in phase one so that Daraz orders, stock and dispatch run through the same workflow as Treet\'s own online store and Oracle E-Business Suite.',
    highlights: [
      { value: 'Daraz', label: 'orders in the OMS' },
      { value: 'Oracle EBS', label: 'sales orders & stock' },
      { value: 'One OMS', label: 'store and marketplace' },
    ],
    summary: 'In a second phase, OraDigitals connected Treet\'s Daraz marketplace store to the custom Order Management System built for its WooCommerce store, so marketplace orders follow the same path into Oracle E-Business Suite.',
    challenge: 'Daraz orders, stock and dispatch steps were handled in Daraz Seller Center, outside the OMS and Oracle workflow that already ran Treet\'s own online store.',
    solutionSummary: 'OraDigitals added a Daraz Open Platform integration to the existing OMS, reusing its Oracle EBS connections, dashboard and dispatch forms for marketplace orders.',
    techStack: ['Daraz Open Platform API', 'Custom OMS Middleware (VPS)', 'Oracle E-Business Suite (EBS)', 'Oracle Database', 'WooCommerce'],
    contentHtml: `
<div class="cs-article-section">
  <h2>Overview</h2>
  <p>In the first phase of this project, OraDigitals built a custom Order Management System (OMS) that connects Treet Corporation's WooCommerce store with Oracle E-Business Suite (EBS), courier partners, banking services, WhatsApp and the FBR system. That work is described in the <a href="/customers/case-studies/treet-corporation">Treet Corporation OMS case study</a>.</p>
  <p>Treet also sells through Daraz, one of Pakistan's largest online marketplaces. In the second phase, OraDigitals connected Treet's Daraz store to the same OMS, so that marketplace orders, stock and dispatch are handled through the workflow already in place for the company's own online store.</p>
  <p>Rather than building a separate system for the marketplace, the integration extends the existing OMS and its Oracle EBS connections to a second sales channel.</p>
</div>

<div class="cs-article-section">
  <h2>The Challenge</h2>
  <p>With the OMS in place, orders from Treet's own website already flowed into Oracle EBS. Daraz orders, however, were managed in Daraz Seller Center, separately from that workflow.</p>

  <h3>Two Sales Channels, One Stock</h3>
  <p>Products sold on the website and on Daraz draw on the same inventory. Stock levels and prices maintained in Oracle EBS needed to be reflected on Daraz as well as on WooCommerce, so that both channels offer only what is available.</p>

  <h3>Marketplace Orders Outside the Order-to-Cash Flow</h3>
  <p>For website orders, the OMS creates sales orders in Oracle Order Management and supports the related fulfilment and invoicing steps. Daraz orders needed to enter the same process instead of being re-entered by hand.</p>

  <h3>Marketplace Fulfilment Steps</h3>
  <p>Daraz orders follow the marketplace's own fulfilment process: order statuses are updated in Daraz, and shipping documents are issued through the marketplace. These steps needed to be coordinated with Treet's dispatch operations.</p>

  <h3>Visibility Across Channels</h3>
  <p>Operations teams needed to see website and marketplace orders together, with their processing and dispatch status, rather than switching between the OMS and Seller Center.</p>
</div>

<div class="cs-article-section">
  <h2>The Solution: Extending the OMS to Daraz</h2>
  <p>OraDigitals added a Daraz integration to the existing OMS middleware, using the Daraz Open Platform API. The OMS remains the central integration layer and the Oracle EBS database environment remains its operational backend.</p>

  <h3>1. Daraz Open Platform Connection</h3>
  <p>The OMS connects to Treet's Daraz seller account through the Daraz Open Platform API, with authorised access and scheduled synchronisation between the marketplace and the OMS.</p>

  <h3>2. Product, Price and Stock Synchronisation</h3>
  <p>Items, prices and stock levels maintained in Oracle EBS are matched to Treet's Daraz products through the OMS, so that marketplace listings follow the same master data as the website.</p>

  <h3>3. Daraz Orders into the OMS and Oracle EBS</h3>
  <p>Daraz orders are imported into the OMS alongside WooCommerce orders and marked by sales channel. From there they follow the existing workflow into Oracle Order Management, supporting sales order creation and the related fulfilment and invoicing processes.</p>

  <h3>4. Marketplace Fulfilment and Dispatch</h3>
  <p>The OMS updates order statuses on Daraz as orders are processed and retrieves the marketplace's shipping documents for dispatch. The existing dispatch workflow and Oracle EBS forms are used for Daraz orders as well.</p>

  <h3>5. Cancellations and Returns</h3>
  <p>Cancellations and returns raised on Daraz are brought back into the OMS, so that order records and stock stay consistent across the marketplace, the OMS and Oracle EBS.</p>

  <h3>6. One Dashboard for Both Channels</h3>
  <p>The OMS dashboard and reports show website and Daraz orders together, with the sales channel visible for each order, giving operations teams one place to follow processing and dispatch.</p>
</div>

<div class="cs-article-section">
  <h2>Technology and Architecture</h2>
  <p>The Daraz integration is an extension of the middleware built in phase one, not a separate system.</p>
  <p><strong>Core components:</strong></p>
  <ul class="cs-tech-list">
    <li><strong>Marketplace:</strong> Daraz, through the Daraz Open Platform API</li>
    <li><strong>E-Commerce:</strong> WooCommerce</li>
    <li><strong>Integration Layer:</strong> Custom OMS middleware developed by OraDigitals</li>
    <li><strong>Enterprise Resource Planning:</strong> Oracle E-Business Suite</li>
    <li><strong>Operational Database:</strong> Oracle EBS database environment</li>
    <li><strong>Hosting:</strong> Virtual Private Server (VPS)</li>
  </ul>
</div>

<div class="cs-article-section">
  <h2>Business Impact</h2>
  <p>The integration brings Treet's marketplace sales into the same operational framework as its own online store.</p>
  <div class="cs-impact-block">
    <h3>One order workflow for two channels</h3>
    <p>Website and Daraz orders follow the same path through the OMS into Oracle Order Management.</p>
  </div>
  <div class="cs-impact-block">
    <h3>Consistent stock and prices</h3>
    <p>Marketplace listings follow the item, price and stock information maintained in Oracle EBS.</p>
  </div>
  <div class="cs-impact-block">
    <h3>Less work in Seller Center</h3>
    <p>Order statuses, shipping documents, cancellations and returns are handled through the OMS workflow.</p>
  </div>
  <div class="cs-impact-block">
    <h3>A single view of orders</h3>
    <p>Operations teams follow website and marketplace orders in one dashboard and one set of reports.</p>
  </div>
</div>

<div class="cs-article-section">
  <h2>The Outcome</h2>
  <p>With the second phase, the OMS that OraDigitals built for Treet's website now also serves its Daraz store. Marketplace orders, stock and dispatch are coordinated through the same middleware and Oracle E-Business Suite connections as the company's own e-commerce channel.</p>
  <p>Because the integration builds on the existing system, further sales channels can be connected to the same OMS in the same way.</p>
</div>

<div class="cs-article-section cs-article-about">
  <h2>About OraDigitals</h2>
  <p>OraDigitals provides enterprise technology solutions spanning ERP implementation and customization, system integration, custom application development, and AI-powered business automation.</p>
  <p>We help organizations connect business systems, streamline operational workflows, and build tailored technology solutions around their existing infrastructure.</p>

  <div class="cs-cta-box">
    <h3>Selling on a marketplace as well as your own store?</h3>
    <p>Contact OraDigitals to discuss connecting Daraz or other marketplaces to your order management and ERP systems.</p>
    <a href="/contact" class="btn btn-primary">Schedule Consultation</a>
  </div>
</div>
`
  },
  {
    slug: 'primmeshiper',
    categoryKey: 'commerce',
    category: 'Commerce & Logistics',
    client: 'Primmeshiper',
    clientLogo: '/public/images/primmeshiper-logo.png',
    industry: 'High-Volume E-Commerce Fulfillment & 3PL Logistics',
    location: 'Regional Distribution Centers (UAE & Pakistan)',
    timeline: '3 Months High-Throughput Rollout',
    title: 'Shopify Plus Bi-Directional ERP Sync & Multi-Courier Logistics Gateway',
    seoTitle: 'Primmeshiper Shopify Plus & Courier Case Study',
    services: ['ecommerce-solutions/shopify-solutions', 'ecommerce-solutions/ecommerce-integration', 'system-integration/courier-integration', 'system-integration'],
    subtitle: 'High-speed automated order routing, sub-second inventory synchronization, and multi-courier airway bill booking engine.',
    summary: 'Built sub-second bi-directional inventory synchronization and automated multi-courier airway bill booking for high-throughput Shopify Plus fulfillment.',
    challenge: 'Severe stock desynchronization during high-traffic flash sales and manual consignment booking across four courier carriers causing massive dispatch backlogs and customer cancellations. At peak sales volume, order batches exceeded 30,000 orders/day, crashing existing spreadsheets and causing delayed dispatches.',
    challengePoints: [
      'Inventory race conditions during flash sales causing overselling and order cancellations',
      'Manual entry of courier airway bills taking up to 4 minutes per consignment',
      'Lack of automated carrier rate selection resulting in excessive shipping expenses',
      'Delayed tracking notification webhooks leading to elevated customer support inquiries'
    ],
    solution: 'High-throughput Node/Oracle integration engine syncing inventory sub-second with Shopify Plus, automated airway bill generation, and real-time webhook status updates. Implemented automated carrier rate selection, barcode packing validation, and carrier webhook ingestion.',
    solutionPoints: [
      'Event-driven bi-directional sync engine syncing SKU quantities in under 800ms',
      'Multi-courier API gateway integrating TCS, DHL, Leopard, and Trax with automated rate optimization',
      'Automated airway bill generation and high-speed thermal label printing in < 1.2s per parcel',
      'High-throughput Redis queue architecture handling 500+ concurrent order webhooks per second'
    ],
    metrics: [
      { value: '< 1.2s', label: 'Airway Bill Generation', desc: 'Automated consignment booking and thermal label printing' },
      { value: '35,000+', label: 'Daily Orders Dispatched', desc: 'Peak capacity processed without queue lag or backlog' },
      { value: '99.98%', label: 'Live Inventory Sync', desc: 'Zero stock-outs and flash sale over-allocation' },
    ],
    techStack: ['Shopify Plus API', 'Logistics Middleware', 'TCS & DHL APIs', 'Webhooks', 'Redis Queue', 'Node.js Cluster'],
    quote: 'During peak campaign surges, OraDigitals integration engine handled 35,000+ dispatches daily with sub-second airway bill creation. It completely eliminated shipping bottlenecks.',
    author: 'VP of E-Commerce Operations, Primmeshiper',
    publishedDate: '2025',
  },
  {
    slug: 'investmenter-dubai',
    categoryKey: 'fintech',
    category: 'FinTech & Corporate Tax',
    client: 'InvestMenter Dubai',
    clientLogo: '/public/images/investmenter-logo.svg',
    industry: 'FinTech, Real Estate Investment & Multi-Family Office',
    location: 'United Arab Emirates (Dubai DIFC) & Germany',
    timeline: '5 Months Enterprise Integration',
    title: 'Automated UAE FTA Corporate Tax, VAT 201 Engine & H2H Bank Feeds',
    seoTitle: 'InvestMenter UAE Tax & Bank Feeds Case Study',
    services: ['tax-e-invoicing/dubai-fta-integration', 'system-integration/bank-integration'],
    subtitle: 'Unified FTA Corporate Tax provisioning, UAE VAT 201 filing, and automated multi-currency host-to-host bank reconciliation.',
    summary: 'Automated UAE FTA Corporate Tax computation, VAT 201 filing, and corporate host-to-host bank feed reconciliation for multi-currency transactions.',
    challenge: 'Managing high-volume property transactions, multi-currency escrow accounts, and complying with UAE Federal Tax Authority (FTA) Corporate Tax regulations and VAT 201 audits without manual spreadsheet reconciliations across UAE and European holding entities.',
    challengePoints: [
      'Complex cross-border investment streams requiring unified multi-entity tax provisioning',
      'Manual multi-currency bank reconciliations prone to human error and accounting delays',
      'Strict UAE FTA Corporate Tax deadlines requiring auditable digital ledger archives',
      'Need for automated VAT 201 return compilation across diverse commercial revenue streams'
    ],
    solution: 'Cloud tax computation engine integrated with corporate Host-to-Host (H2H) banking APIs for automated MT940 statement ingestion, multi-currency ledger matching, and 1-click VAT return generation compliant with UAE Federal Tax Authority schemas.',
    solutionPoints: [
      'Direct Host-to-Host bank feed integration ingesting daily ISO 20022 and MT940 statements',
      'Automated reconciliation engine matching payments, dividends, and fees with 99.9% accuracy',
      'Automated FTA Corporate Tax calculation rules with multi-tier bracket provisioning',
      'One-click export of pre-audited UAE VAT 201 returns with full transaction trace logs'
    ],
    metrics: [
      { value: '-75%', label: 'Reconciliation Hours', desc: 'Saved hundreds of manual finance hours each quarter' },
      { value: '100%', label: 'FTA Compliance Pass', desc: 'Zero audit inquiries or filing discrepancies' },
      { value: 'AED 120M+', label: 'Quarterly Volume Synced', desc: 'Multi-currency investment flows harmonized' },
    ],
    techStack: ['Dubai FTA Tax Engine', 'VAT 201 Automation', 'H2H Bank APIs', 'MT940 Ingestion', 'ISO 20022 XML', 'Automated Reconciliations'],
    quote: 'OraDigitals delivered absolute financial clarity and automated our multi-entity UAE corporate tax and VAT returns. Their host-to-host banking feeds transformed our accounting workflow.',
    author: 'Managing Director & Chief Financial Officer, InvestMenter Dubai',
    publishedDate: '2025',
  },
];

/**
 * Normalizes slug and resolves aliases
 */
function resolveSlug(rawSlug) {
  if (!rawSlug) return '';
  const s = String(rawSlug).toLowerCase().trim().replace(/^\/+|\/+$/g, '');
  if (s === 'dubai-fta-tax' || s === 'dubai-fta-integration') return 'investmenter-dubai';
  return s;
}

/**
 * Returns single case study
 */
function getCaseStudy(rawSlug) {
  const slug = resolveSlug(rawSlug);
  return caseStudiesData.find((item) => item.slug === slug) || null;
}

/**
 * Returns all case studies
 */
function getAllCaseStudies() {
  return caseStudiesData;
}

/**
 * Generates the full page object for /customers/case-studies/:slug
 */
function generateCaseStudyPage(rawSlug) {
  const cs = getCaseStudy(rawSlug);
  if (!cs) return null;

  // Search results show about 60 characters of a title and 160 of a description
  const metaDesc = cs.metaDescription || cs.summary || cs.subtitle;
  const url = `${SITE_URL}/customers/case-studies/${cs.slug}`;
  const image = shareImage(`case-study-${cs.slug}`) || '/public/images/share/oradigitals.png';

  const otherStudies = getAllCaseStudies().filter((s) => s.slug !== cs.slug);

  return {
    title: `${cs.seoTitle || cs.client} - OraDigitals`,
    description: metaDesc,
    image,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: cs.title,
      description: metaDesc,
      image: `${SITE_URL}${image}`,
      datePublished: cs.publishedDate,
      mainEntityOfPage: url,
      about: { '@type': 'Organization', name: cs.client },
      author: { '@type': 'Organization', name: 'OraDigitals', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'OraDigitals',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/public/icons/icon-512.png` },
      },
    },
    sections: [
      {
        component: 'page-hero',
        props: caseStudyHero(cs),
      },
      {
        component: 'case-study-single',
        props: {
          caseStudy: cs,
          otherStudies,
          // The hero above shows the client, category, title and subtitle
          hasHero: true,
        },
      },
      {
        component: 'cta',
        props: {
          title: `Ready to Achieve Similar Architecture Outcomes like ${cs.client}?`,
          text: 'Schedule an architecture consultation with our certified Oracle and enterprise integration architects today.',
          actions: [
            {
              label: 'Schedule Architecture Audit',
              href: '/contact',
              style: 'primary',
            },
            {
              label: 'Browse All Case Studies',
              href: '/customers/case-studies',
              style: 'outline',
            },
          ],
        },
      },
    ],
  };
}

module.exports = {
  caseStudiesData,
  resolveSlug,
  getCaseStudy,
  getAllCaseStudies,
  generateCaseStudyPage,
};
