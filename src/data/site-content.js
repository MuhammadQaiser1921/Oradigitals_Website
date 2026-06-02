const site = {
  name: 'OraDigitals',
  legalName: 'ORADIGITALS (PRIVATE) LIMITED',
  email: 'info@oradigitals.com',
  supportEmail: 'support@oradigitals.com',
  phone: '+92 335 5546497',
  phoneRaw: '+923355546497',
  address: 'Building No. 59, Street No. 1, Latifabad, Okara',
  cityAddress: 'Fateh Town, Okara, Pakistan',
  mapLink: 'https://maps.app.goo.gl/WTutNSjnZ2KM4qfB6',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.2979914227311!2d73.45983337150201!3d30.819906556031672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922a7604f87bc7d%3A0x7c09f01c5c018f8b!2sOraDigitals%20Consultant!5e0!3m2!1sen!2s!4v1775035383138!5m2!1sen!2s',
  coordinates: '30.819985, 73.459976',
  secpNumber: '0298255',
  fbrNumber: 'G905514',
  praNumber: 'G905514-6',
  secpVerificationLink: 'https://leap.secp.gov.pk/#/verify-company-info/0298255',
  nav: [
    { label: 'Services', href: '/services', submenu: [] },
    { label: 'Products', href: '/products', submenu: [] },
    { label: 'About', href: '/about', submenu: [] },
    { label: 'Customers', href: '/clients', submenu: [] },
    { label: 'Team', href: '/team', submenu: [] },
    {
      label: 'Career',
      href: '/career',
      submenu: [
        { label: 'Internship', href: '/career/internship' },
        { label: 'Life at OraDigitals', href: '/life' },
        { label: 'Job Opportunities', href: '/career' },
      ],
    },
    { label: 'Contact', href: '/contact', submenu: [] },
  ],
}

const pages = {
  '': {
    title: 'OraDigitals - Digital Solutions for Enterprise',
    description:
      'Practical digital solutions for ERP, integrations, products, and business support.',
    sections: [
      {
        component: 'hero',
        props: {
          headingBlue: 'Cutting-edge technology',
          headingBlack: 'solutions to accelerate your business growth',
          text: 'We build innovative digital products, streamline business processes, and accelerate development — all using the latest and most flexible technologies.',
          actions: [
            { label: 'Get started now', href: '/contact', style: 'primary' },
          ],
        },
      },

      {
        component: 'cards',
        props: {
          title: 'Our Services',
          subtitle: 'Comprehensive IT solutions tailored to your business needs',
          columns: 3,
          cards: [
            {
              title: 'ERP Solutions',
              text: 'Implementation and support for SAP, Odoo, Oracle EBS, Oracle Fusion, and core business workflows.',
            },
            {
              title: 'System Integration',
              text: 'OIC, OCI, payment, courier, FBR, Shopify, WooCommerce, and API integrations.',
            },
            {
              title: 'Custom Development',
              text: 'Web, mobile, and desktop applications tailored around your operational requirements.',
            },
            {
              title: 'E-commerce Solutions',
              text: 'Shopify and WooCommerce development, optimization, and business integrations.',
            },
            {
              title: 'Data Migration & Automation',
              text: 'Data migration, scheduled processing, recurring sync flows, and business automation.',
            },
            {
              title: 'IT Support',
              text: 'Practical IT support, cloud assistance, monitoring, and ongoing maintenance.',
            },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Our Products',
          subtitle: 'Two focused in-house products built for specific business use cases',
          columns: 2,
          cards: [
            {
              title: 'EastFTP',
              text: 'JavaFX desktop software for scheduled FTPS downloads and file delivery to the right local destination.',
              list: [
                'Multi-file FTPS downloads',
                'Specific local path delivery',
                'Scheduled execution at defined times',
                'Designed for recurring operations',
              ],
            },
            {
              title: 'Pimidrome',
              text: 'A mobile application offered through Google Play Store channels and direct product guidance from our team.',
              list: [
                'Mobile-first user experience',
                'Google Play Store link shared on request',
                'Support from OraDigitals',
                'Built for practical accessibility',
              ],
            },
          ],
        },
      },
      {
        component: 'testimonials',
        props: {
          title: 'What Our Clients Say',
          subtitle: 'Feedback from clients we support directly',
          items: [
            {
              quote:
                'OraDigitals delivered dependable support and practical execution for our innovation-focused technology work.',
              author: 'Muhammad Shoaib',
              role: 'Head of Innovation Department, Treet Corporation',
              rating: 5,
            },
            {
              quote:
                'The team understood our Shopify requirements clearly and delivered support that was practical, fast, and reliable.',
              author: 'Ertan',
              role: 'Owner, Primmeshiper',
              rating: 5,
            },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Ready to Transform Your Business?',
          text: 'Let us discuss how we can help you achieve your digital goals.',
          actions: [
            { label: 'Get in Touch', href: '/contact', style: 'primary' },
            { label: `Email ${site.email}`, href: `mailto:${site.email}`, style: 'outline' },
          ],
        },
      },
    ],
  },
  about: {
    title: 'About OraDigitals',
    description:
      'Learn about OraDigitals, our mission, vision, values, and why we are the right technology partner.',
    sections: [
      {
        component: 'hero',
        props: {
          badge: 'About',
          heading: 'Your Trusted Partner in Digital Transformation',
          subheading: 'Delivery discipline with practical engineering outcomes.',
          text: 'From ERP to automation, we focus on solutions that teams actually use every day.',
          actions: [{ label: 'Contact Team', href: '/contact', style: 'primary' }],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Mission, Vision, and Values',
          subtitle: 'Core principles shaping our delivery',
          columns: 3,
          cards: [
            {
              title: 'Our Mission',
              text: 'Empower businesses with innovative digital solutions that drive growth and efficiency.',
            },
            {
              title: 'Our Vision',
              text: 'Become a globally recognized software house known for practical and reliable delivery.',
            },
            {
              title: 'Our Values',
              text: 'Innovation, integrity, excellence, and long-term client relationships.',
            },
          ],
        },
      },
      {
        component: 'list',
        props: {
          title: 'Our Story',
          subtitle: 'How we grew from startup to trusted partner',
          items: [
            'Founded to make technology simplify operations, not complicate them.',
            'Delivered ERP, custom software, and automation programs across industries.',
            'Built multidisciplinary teams focused on measurable business outcomes.',
          ],
        },
      },
      {
        component: 'timeline',
        props: {
          title: 'Our Journey',
          items: [
            { year: '2015', title: 'Company Founded', text: 'OraDigitals established with a transformation-first vision.' },
            { year: '2017', title: 'Major ERP Delivery', text: 'Completed first large enterprise ERP implementation.' },
            { year: '2019', title: 'Service Expansion', text: 'Expanded to software products and mobile development.' },
            { year: '2021', title: 'Automation Focus', text: 'Launched dedicated automation and integration initiatives.' },
            { year: '2023', title: 'Partnership Growth', text: 'Strengthened ecosystem partnerships and client network.' },
            { year: '2025', title: 'Sustained Scale', text: 'Continued growth with recurring enterprise support work.' },
          ],
        },
      },
      {
        component: 'stats',
        props: {
          items: [
            { value: '500+', label: 'Projects Completed' },
            { value: '200+', label: 'Happy Clients' },
            { value: '50+', label: 'Team Members' },
            { value: '10+', label: 'Years Experience' },
          ],
        },
      },
    ],
  },
  services: {
    title: 'Services - OraDigitals',
    description:
      'Comprehensive IT services including ERP, integration, migration, e-commerce, and support.',
    sections: [
      {
        component: 'hero',
        props: {
          badge: 'Services',
          heading: 'ERP, integrations, migration, cloud, and development services',
          subheading: 'Designed around practical business needs',
          text: 'Service sections are fully generated from API payloads and reusable components.',
          actions: [{ label: 'Contact Us Today', href: '/contact', style: 'primary' }],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'ERP Solutions',
          subtitle: 'Enterprise systems tailored to your operations',
          columns: 4,
          cards: [
            { title: 'SAP Implementation', text: 'Complete implementation, customization, and integration services.' },
            { title: 'Odoo ERP', text: 'Deployment, module customization, and process optimization.' },
            { title: 'Oracle Fusion & EBS', text: 'Enterprise support for business-critical operations.' },
            { title: 'Data Migration', text: 'Planning, cleansing, validation, and safe migration execution.' },
          ],
        },
      },
      {
        component: 'list',
        props: {
          title: 'ERP Offerings',
          items: [
            'Needs assessment and system selection',
            'Implementation and deployment',
            'Customization and configuration',
            'Training and change management',
            'OCI, OIC, and Oracle Fusion support',
            'Functional and technical consulting',
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'System Integration',
          subtitle: 'Connected operations and dependable data flow',
          columns: 3,
          cards: [
            { title: 'API & Payment Integration', text: 'REST, SOAP, and payment gateway integration for workflows.' },
            { title: 'OIC / OCI Integration', text: 'Oracle cloud connectivity for enterprise ecosystems.' },
            { title: 'FBR & Courier Integrations', text: 'Regulatory and logistics integrations with sync reliability.' },
          ],
        },
      },
      {
        component: 'list',
        props: {
          title: 'Popular Integration Areas',
          items: [
            'Oracle Integration Cloud (OIC)',
            'Oracle Cloud Infrastructure (OCI)',
            'Oracle Fusion integrations',
            'Payment integrations',
            'FBR integrations',
            'Courier company integrations',
            'Shopify integrations',
            'WooCommerce integrations',
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Custom Development',
          subtitle: 'Web, mobile, and desktop product delivery',
          columns: 3,
          cards: [
            { title: 'Web Applications', text: 'Responsive and scalable apps with modern stacks.' },
            { title: 'Mobile Apps', text: 'Cross-platform and native-ready mobile experiences.' },
            { title: 'Desktop Applications', text: 'Operational desktop software for enterprise teams.' },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'E-commerce Solutions',
          subtitle: 'Shopify and WooCommerce execution',
          columns: 2,
          cards: [
            { title: 'Shopify Development', text: 'Store setup, theme work, and integrations.' },
            { title: 'WooCommerce', text: 'Implementation, customization, and integration support.' },
          ],
        },
      },
      {
        component: 'list',
        props: {
          title: 'E-commerce Features',
          items: [
            'Custom theme design',
            'Payment gateway integration',
            'Inventory management',
            'Shipping and courier integration',
            'SEO optimization',
            'Analytics and reporting',
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Automation, FinTech, and Support',
          columns: 3,
          cards: [
            { title: 'Process Automation', text: 'Automate repetitive tasks and workflows.' },
            { title: 'ERP & Integration Automation', text: 'Recurring synchronization and workflow execution.' },
            { title: 'Payment & FinTech Integrations', text: 'Secure payment connectivity and transaction workflows.' },
            { title: 'Database Management', text: 'Design, optimization, migration, administration, reporting.' },
            { title: '24/7 Support', text: 'Round-the-clock support for critical systems.' },
            { title: 'Security Updates', text: 'Monitoring and proactive update cycles.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Ready to Get Started?',
          text: 'Let us discuss how our services can benefit your business.',
          actions: [{ label: 'Contact Us Today', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },
  products: {
    title: 'Products - OraDigitals',
    description: 'In-house products including EastFTP desktop software and Pimidrome mobile app.',
    sections: [
      {
        component: 'hero',
        props: {
          badge: 'Products',
          heading: 'Focused software products for practical operations',
          subheading: 'Built for recurring business execution',
          text: 'Product information is fully delivered by API and rendered through reusable card components.',
          actions: [{ label: 'Request Access', href: '/contact', style: 'primary' }],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Product Lineup',
          columns: 2,
          cards: [
            {
              title: 'EastFTP',
              text: 'JavaFX desktop application for scheduled FTPS downloads and structured local file delivery.',
              list: [
                'Multi-file FTPS download support',
                'Specific local path delivery',
                'Scheduled execution at defined times',
                'Designed for recurring operations',
              ],
            },
            {
              title: 'Pimidrome',
              text: 'Mobile product experience delivered through Android distribution channels.',
              list: [
                'Mobile-first user experience',
                'Google Play Store link shared by request',
                'Support directly from OraDigitals team',
                'Built for practical accessibility',
              ],
            },
          ],
        },
      },
      {
        component: 'split',
        props: {
          title: 'Product Availability',
          text: 'EastFTP is available through our team for organizations requiring scheduled FTPS workflows.',
          list: ['Pimidrome details are shared directly on request.', `Contact: ${site.email}`],
          sideTitle: 'Request Access',
          sideText: 'To request a demo, pricing, or rollout details, contact our team and we will guide you next steps.',
        },
      },
    ],
  },
  team: {
    title: 'Our Team - OraDigitals',
    description: 'Leadership, management, and technical experts driving delivery.',
    sections: [
      {
        component: 'hero',
        props: {
          badge: 'Team',
          heading: 'Meet the people driving innovation at OraDigitals',
          subheading: 'Leadership, engineering, and consulting specialists',
          text: 'Our team structure and profiles are rendered from API data blocks.',
          actions: [{ label: 'View Open Positions', href: '/career', style: 'primary' }],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Leadership Team',
          columns: 3,
          cards: [
            { title: 'John Anderson', subtitle: 'Chief Executive Officer', text: '20+ years in technology leadership and business strategy.' },
            { title: 'Sarah Mitchell', subtitle: 'Chief Technology Officer', text: 'Enterprise architecture and software delivery specialist.' },
            { title: 'Michael Chen', subtitle: 'Chief Operations Officer', text: 'Operational excellence and process optimization.' },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Management Team',
          columns: 4,
          cards: [
            { title: 'Emily Rodriguez', subtitle: 'ERP Solutions Manager', text: 'SAP and Oracle ERP specialist.' },
            { title: 'David Kim', subtitle: 'Software Development Manager', text: 'Full-stack engineering lead.' },
            { title: 'Jessica Taylor', subtitle: 'Project Manager', text: 'PMP certified delivery management.' },
            { title: 'Robert Wilson', subtitle: 'Client Relations Manager', text: 'Customer success and long-term accounts.' },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Technical Experts',
          columns: 4,
          cards: [
            { title: 'Alex Johnson', subtitle: 'Senior Full-Stack Developer', text: 'Web platform delivery specialist.' },
            { title: 'Maria Garcia', subtitle: 'Senior SAP Consultant', text: 'ERP consulting and implementation.' },
            { title: 'Thomas Brown', subtitle: 'Mobile App Developer', text: 'Mobile architecture and app release.' },
            { title: 'Lisa Wang', subtitle: 'UI/UX Designer', text: 'User experience and interface design.' },
            { title: 'James Miller', subtitle: 'DevOps Engineer', text: 'Infrastructure automation and CI/CD.' },
            { title: 'Anna Petrova', subtitle: 'Data Analyst', text: 'Data quality and reporting insights.' },
            { title: 'Carlos Martinez', subtitle: 'QA Lead', text: 'Quality strategy and release confidence.' },
            { title: 'Sophie Laurent', subtitle: 'Business Analyst', text: 'Business requirement translation and planning.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Want to Join Our Team?',
          text: 'We are always looking for talented contributors.',
          actions: [{ label: 'View Open Positions', href: '/career', style: 'primary' }],
        },
      },
    ],
  },
  career: {
    title: 'Career - OraDigitals',
    description: 'Current openings and application details.',
    sections: [
      {
        component: 'hero',
        props: {
          badge: 'Career',
          heading: 'Join Our Team',
          subheading: 'Build your career with a delivery-focused software house',
          text: 'All roles and requirements are served through API payloads.',
          actions: [{ label: 'Apply Today', href: '#apply', style: 'primary' }],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Why Work at OraDigitals?',
          columns: 4,
          cards: [
            { title: 'Innovation', text: 'Work on cutting-edge projects and practical systems.' },
            { title: 'Learning', text: 'Continuous learning and professional development.' },
            { title: 'Collaboration', text: 'Supportive team environment and culture.' },
            { title: 'Benefits', text: 'Competitive salary and comprehensive benefits.' },
          ],
        },
      },
      {
        component: 'jobs',
        props: {
          title: 'Current Openings',
          subtitle: 'Explore opportunities to join our team',
          items: [
            {
              title: 'Senior Full-Stack Developer',
              department: 'Engineering',
              location: 'Remote / On-site',
              type: 'Full-time',
              description: 'Build and maintain modern business platforms and APIs.',
              requirements: [
                '5+ years web development experience',
                'Strong React, Node.js, and TypeScript skills',
                'Cloud platform exposure (AWS/Azure)',
                'Strong problem-solving mindset',
              ],
            },
            {
              title: 'SAP Consultant',
              department: 'ERP Solutions',
              location: 'On-site',
              type: 'Full-time',
              description: 'Lead SAP implementation and customization engagements.',
              requirements: [
                'SAP certification preferred',
                '3+ years SAP implementation experience',
                'Strong communication skills',
                'SAP FIORI exposure is a plus',
              ],
            },
            {
              title: 'UI/UX Designer',
              department: 'Design',
              location: 'Remote / On-site',
              type: 'Full-time',
              description: 'Design user-centered interfaces for web and mobile applications.',
              requirements: [
                '3+ years UI/UX experience',
                'Figma/Adobe XD proficiency',
                'Strong portfolio',
                'Modern design system understanding',
              ],
            },
            {
              title: 'DevOps Engineer',
              department: 'Infrastructure',
              location: 'Remote / On-site',
              type: 'Full-time',
              description: 'Manage cloud infrastructure and release pipelines.',
              requirements: [
                '4+ years DevOps experience',
                'Docker and Kubernetes exposure',
                'CI/CD pipeline ownership',
                'AWS/Azure certification preferred',
              ],
            },
          ],
        },
      },
      {
        component: 'contact-form',
        props: {
          id: 'apply',
          title: 'Apply for a Position',
          subtitle: 'Submit your details and we will contact you soon',
          type: 'career',
          fields: [
            { name: 'name', label: 'Full Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', required: true },
            { name: 'phone', label: 'Phone Number', required: true },
            {
              name: 'position',
              label: 'Position Applying For',
              type: 'select',
              required: true,
              options: [
                'Senior Full-Stack Developer',
                'SAP Consultant',
                'UI/UX Designer',
                'DevOps Engineer',
                'Mobile App Developer',
                'Business Analyst',
              ],
            },
            { name: 'message', label: 'Cover Letter', type: 'textarea', required: true },
          ],
          submitLabel: 'Submit Application',
        },
      },
    ],
  },
  'career/internship': {
    title: 'Summer Internship - OraDigitals',
    description: 'Hands-on internship with mentoring and real project exposure.',
    sections: [
      {
        component: 'hero',
        props: {
          badge: 'Internship',
          heading: 'Summer Internship',
          subheading: 'Hands-on learning with engineering and product teams',
          text: 'Work on real features, learn industry workflows, and receive mentorship from senior engineers.',
          actions: [{ label: 'Apply / Contact Us', href: '/contact', style: 'primary' }],
        },
      },
      {
        component: 'list',
        props: {
          title: 'Program Highlights',
          items: [
            '3-month paid internship',
            'Mentorship and regular code reviews',
            'Opportunity to work on web and mobile projects',
          ],
        },
      },
    ],
  },
  life: {
    title: 'Life @ OraDigitals',
    description: 'Culture, perks, events, and team experiences.',
    sections: [
      {
        component: 'hero',
        props: {
          badge: 'Life @ OraDigitals',
          heading: 'Discover our culture and work environment',
          subheading: 'Innovation, collaboration, and growth',
          text: 'Culture, events, and team life are represented as API-driven sections.',
          actions: [{ label: 'Explore Careers', href: '/career', style: 'primary' }],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Our Culture',
          columns: 3,
          cards: [
            { title: 'Work-Life Balance', text: 'Healthy balance between professional and personal life.' },
            { title: 'Innovation First', text: 'Creative thinking and practical problem solving.' },
            { title: 'Team Spirit', text: 'Collaboration, respect, and strong relationships.' },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Perks & Benefits',
          columns: 3,
          cards: [
            { title: 'Competitive Salary', text: 'Market-leading compensation packages.' },
            { title: 'Health Insurance', text: 'Comprehensive health coverage.' },
            { title: 'Paid Time Off', text: 'Generous leave policies.' },
            { title: 'Learning Budget', text: 'Annual budget for certifications and courses.' },
            { title: 'Remote Work', text: 'Flexible work options where possible.' },
            { title: 'Team Events', text: 'Regular team-building and celebrations.' },
            { title: 'Free Snacks', text: 'Daily office refreshments.' },
            { title: 'Gym Membership', text: 'Subsidized fitness programs.' },
            { title: 'Career Growth', text: 'Structured advancement pathways.' },
          ],
        },
      },
      {
        component: 'gallery',
        props: {
          title: 'Photo Gallery',
          subtitle: 'A glimpse into our daily life and events',
          items: [
            { title: 'Team Collaboration', category: 'Work', text: 'Teams working together on active projects.' },
            { title: 'Annual Retreat', category: 'Events', text: 'Company retreat and strategic offsite sessions.' },
            { title: 'Hackathon', category: 'Events', text: '24-hour innovation and delivery challenge.' },
            { title: 'Office Space', category: 'Office', text: 'Modern collaborative workspace environment.' },
            { title: 'Team Lunch', category: 'Culture', text: 'Regular team bonding and open discussion.' },
            { title: 'Award Ceremony', category: 'Events', text: 'Recognizing delivery excellence and impact.' },
          ],
        },
      },
      {
        component: 'testimonials',
        props: {
          title: 'What Our Team Says',
          items: [
            {
              quote:
                'OraDigitals has been an amazing place to grow my career. The team is supportive and I am constantly learning.',
              author: 'Alex Johnson',
              role: 'Senior Developer',
              rating: 5,
            },
            {
              quote:
                'The work-life balance is incredible and management genuinely cares about employee wellbeing.',
              author: 'Sarah Mitchell',
              role: 'Project Manager',
              rating: 5,
            },
            {
              quote: 'We are encouraged to experiment with new ideas and technologies that create real client value.',
              author: 'Michael Chen',
              role: 'UI/UX Designer',
              rating: 5,
            },
          ],
        },
      },
    ],
  },
  clients: {
    title: 'Our Clients - OraDigitals',
    description: 'Selected client engagements and direct feedback.',
    sections: [
      {
        component: 'hero',
        props: {
          badge: 'Clients',
          heading: 'Businesses that trust us with systems and integrations',
          subheading: 'Long-term, practical delivery partnerships',
          text: 'Client and testimonial sections are rendered directly from API datasets.',
          actions: [{ label: 'Get Started Today', href: '/contact', style: 'primary' }],
        },
      },
      {
        component: 'stats',
        props: {
          items: [
            { value: '2', label: 'Featured Clients' },
            { value: 'ERP', label: 'Enterprise Work' },
            { value: 'INT', label: 'Integration Focus' },
            { value: '24/7', label: 'Support Mindset' },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Selected Client Work',
          columns: 2,
          cards: [
            {
              title: 'Treet Corporation',
              subtitle: 'Lahore, Pakistan',
              text: 'Client engagement focused on enterprise technology support and innovation-driven operational work.',
            },
            {
              title: 'Primmeshiper',
              subtitle: 'Turkey',
              text: 'Client engagement around Shopify-related technical and operational implementation.',
              link: { label: 'Visit client website', href: 'https://primmeshiper.com/en' },
            },
          ],
        },
      },
      {
        component: 'testimonials',
        props: {
          title: 'Client Testimonials',
          items: [
            {
              quote:
                'OraDigitals delivered dependable support and practical execution for our innovation-focused technology work.',
              author: 'Muhammad Shoaib',
              role: 'Head of Innovation Department, Treet Corporation',
              rating: 5,
            },
            {
              quote:
                'The team understood our Shopify requirements clearly and delivered support that was practical, fast, and reliable.',
              author: 'Ertan',
              role: 'Owner, Primmeshiper',
              rating: 5,
            },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Industries We Serve',
          columns: 4,
          cards: [
            { title: 'Manufacturing', text: 'Process systems and reporting support.' },
            { title: 'Retail & E-commerce', text: 'Store operations and integration delivery.' },
            { title: 'Payments & FinTech', text: 'Payment workflow enablement.' },
            { title: 'Logistics & Courier', text: 'Shipping and courier integrations.' },
            { title: 'Cloud & Integrations', text: 'Connected cloud ecosystems.' },
            { title: 'ERP & Reporting', text: 'Business process and KPI visibility.' },
            { title: 'Mobile Products', text: 'Mobile-first product experience delivery.' },
            { title: 'Desktop Operations', text: 'Operational desktop software support.' },
          ],
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Ready to Become Our Next Client?',
          text: 'Let us discuss how we can support your systems, integrations, and growth.',
          actions: [{ label: 'Get Started Today', href: '/contact', style: 'primary' }],
        },
      },
    ],
  },
  compliance: {
    title: 'Company Compliance - OraDigitals',
    description: 'Registration, verification, and business compliance information.',
    sections: [
      {
        component: 'hero',
        props: {
          badge: 'Compliance',
          heading: 'Company Compliance & Registration',
          subheading: 'Registration, taxation, and director information',
          text: `Verification and compliance records for ${site.legalName}.`,
          actions: [{ label: 'Request Certificates', href: `mailto:${site.email}`, style: 'primary' }],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Registration Snapshot',
          columns: 4,
          cards: [
            { title: 'Business Name', text: site.legalName },
            {
              title: 'SECP Number',
              text: site.secpNumber,
              link: { label: 'Verify on SECP', href: site.secpVerificationLink },
            },
            { title: 'FBR Registration', text: site.fbrNumber },
            { title: 'PRA / Sales Tax', text: site.praNumber },
          ],
        },
      },
      {
        component: 'cards',
        props: {
          title: 'Registered Directors',
          columns: 2,
          cards: [
            {
              title: 'Muhammad Faisal',
              subtitle: 'CEO',
              text: 'Director profile and corporate signatory.',
              link: { label: 'muhammadfaisal@oradigitals.com', href: 'mailto:muhammadfaisal@oradigitals.com' },
            },
            {
              title: 'Muhammad Qaiser',
              subtitle: 'Director',
              text: 'Director profile and operational oversight.',
              link: { label: 'qaiser@oradigitals.com', href: 'mailto:qaiser@oradigitals.com' },
            },
          ],
        },
      },
      {
        component: 'split',
        props: {
          title: 'Business Location',
          text: `${site.address}, ${site.cityAddress}`,
          list: [
            `Coordinates: ${site.coordinates}`,
            `Google Maps: ${site.mapLink}`,
          ],
          sideTitle: 'Verification Access',
          sideText:
            'SECP verification is publicly available online. FBR and PRA certificates can be shared on request.',
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Need Verification Documents?',
          text: 'Contact us and we will share relevant registration documents.',
          actions: [
            { label: 'Contact Us', href: '/contact', style: 'primary' },
            { label: `Email ${site.email}`, href: `mailto:${site.email}`, style: 'outline' },
          ],
        },
      },
    ],
  },
  contact: {
    title: 'Contact Us - OraDigitals',
    description: 'Get in touch with our team for project discussions and inquiries.',
    sections: [
      {
        component: 'hero',
        props: {
          badge: 'Contact',
          heading: 'Get in touch for project discussions',
          subheading: 'We would love to hear from you',
          text: 'Submit an inquiry through the API-powered form below.',
          actions: [{ label: 'Call Us Now', href: `tel:${site.phoneRaw}`, style: 'primary' }],
        },
      },
      {
        component: 'split',
        props: {
          title: 'Contact Information',
          text: 'Reach us through the channels below for quick support.',
          list: [
            `Office: ${site.address}, ${site.cityAddress}`,
            `Phone: ${site.phone}`,
            `Email: ${site.email}`,
            `Support: ${site.supportEmail}`,
            'Business Hours: Monday-Friday 9:00 AM - 6:00 PM; Saturday 10:00 AM - 2:00 PM',
            `FBR: ${site.fbrNumber} | PRA: ${site.praNumber} | SECP: ${site.secpNumber}`,
          ],
          sideTitle: 'Map Location',
          sideText: `Open map: ${site.mapLink}`,
        },
      },
      {
        component: 'contact-form',
        props: {
          title: 'Send Us a Message',
          subtitle: 'Submit your details and inquiry',
          type: 'contact',
          fields: [
            { name: 'name', label: 'Your Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', required: true },
            { name: 'phone', label: 'Phone Number' },
            { name: 'subject', label: 'Subject', required: true },
            { name: 'message', label: 'Message', type: 'textarea', required: true },
          ],
          submitLabel: 'Send Message',
        },
      },
      {
        component: 'cta',
        props: {
          title: 'Ready to Start Your Project?',
          text: 'Let us turn your ideas into reliable digital systems.',
          actions: [
            { label: 'Call Us Now', href: `tel:${site.phoneRaw}`, style: 'primary' },
            { label: `Email ${site.email}`, href: `mailto:${site.email}`, style: 'outline' },
          ],
        },
      },
    ],
  },
}

const componentCatalog = {
  hero: { description: 'Top page banner with headline and actions.' },
  stats: { description: 'Grid of compact value/metric tiles.' },
  cards: { description: 'Reusable card grid for service/product/team sections.' },
  list: { description: 'Title and bullet list for offerings/highlights.' },
  split: { description: 'Two-column information section with side panel.' },
  timeline: { description: 'Chronological journey timeline.' },
  testimonials: { description: 'Client/team testimonial cards with ratings.' },
  jobs: { description: 'Role listings with requirements and application CTA.' },
  gallery: { description: 'Simple gallery cards with categories.' },
  'contact-form': { description: 'API-integrated inquiry/application form.' },
  cta: { description: 'Call-to-action block with buttons.' },
}

function normalizeSlug(rawPath = '/') {
  if (!rawPath || rawPath === '/') return ''
  return rawPath.replace(/^\/+|\/+$/g, '')
}

function getPageByPath(pathname) {
  const slug = normalizeSlug(pathname)
  return pages[slug] || null
}

function getPageBySlug(slug = '') {
  const normalized = normalizeSlug(slug)
  return pages[normalized] || null
}

function getSite() {
  return site
}

function getComponents() {
  return componentCatalog
}

module.exports = {
  getSite,
  getComponents,
  getPageByPath,
  getPageBySlug,
}
