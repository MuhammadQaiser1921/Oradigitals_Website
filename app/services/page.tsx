import { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import { 
  FaDatabase, FaSync, FaCode, FaShoppingCart, FaRobot, 
  FaServer, FaMobile, FaLaptopCode, FaChartLine, FaCogs,
  FaCloud, FaShieldAlt
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Services - OraDigitals',
  description: 'Comprehensive IT services including ERP solutions, custom software development, system integration, e-commerce, and automation.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive IT solutions to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* ERP Solutions */}
      <section id="erp" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">ERP Solutions</h2>
            <p className="section-subtitle">
              Enterprise Resource Planning systems tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<FaDatabase />}
              title="SAP Implementation"
              description="Complete SAP ERP implementation, customization, and integration services."
            />
            <ServiceCard
              icon={<FaChartLine />}
              title="Odoo ERP"
              description="Odoo deployment, module customization, and business process optimization."
            />
            <ServiceCard
              icon={<FaServer />}
              title="Oracle EBS"
              description="Oracle E-Business Suite implementation and support services."
            />
            <ServiceCard
              icon={<FaCogs />}
              title="HCM & SCM"
              description="Human Capital Management and Supply Chain Management solutions."
            />
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">What We Offer:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Needs assessment and system selection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Implementation and deployment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Customization and configuration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Data migration and integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Training and change management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Ongoing support and maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* System Integration */}
      <section id="integration" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">System Integration</h2>
            <p className="section-subtitle">
              Seamless integration of diverse systems and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaSync />}
              title="API Integration"
              description="RESTful and SOAP API integration for seamless data flow between systems."
            />
            <ServiceCard
              icon={<FaCloud />}
              title="Cloud Integration"
              description="Connect on-premise systems with cloud platforms and services."
            />
            <ServiceCard
              icon={<FaDatabase />}
              title="Database Integration"
              description="Synchronize data across multiple databases and data sources."
            />
          </div>
        </div>
      </section>

      {/* Custom Software Development */}
      <section id="development" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Custom Software Development</h2>
            <p className="section-subtitle">
              Bespoke applications built with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaLaptopCode />}
              title="Web Applications"
              description="Responsive, scalable web applications using React, Next.js, Node.js, and more."
            />
            <ServiceCard
              icon={<FaMobile />}
              title="Mobile Apps"
              description="Native and cross-platform mobile applications for iOS and Android."
            />
            <ServiceCard
              icon={<FaCode />}
              title="Desktop Applications"
              description="Powerful desktop applications for Windows, macOS, and Linux platforms."
            />
          </div>
        </div>
      </section>

      {/* E-commerce Solutions */}
      <section id="ecommerce" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">E-commerce Solutions</h2>
            <p className="section-subtitle">
              Professional online store design and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ServiceCard
              icon={<FaShoppingCart />}
              title="Shopify Development"
              description="Custom Shopify themes, app development, and store optimization."
            />
            <ServiceCard
              icon={<FaShoppingCart />}
              title="WooCommerce"
              description="WordPress WooCommerce store setup, customization, and enhancement."
            />
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">E-commerce Features:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Custom theme design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Payment gateway integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Inventory management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Shipping integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>SEO optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Analytics and reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Automation */}
      <section id="automation" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Automation & AI</h2>
            <p className="section-subtitle">
              Intelligent automation to streamline your business processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<FaRobot />}
              title="Process Automation"
              description="Automate repetitive tasks and workflows to improve efficiency."
            />
            <ServiceCard
              icon={<FaChartLine />}
              title="AI Solutions"
              description="Machine learning and AI integration for intelligent decision-making."
            />
            <ServiceCard
              icon={<FaDatabase />}
              title="FBR POS Integration"
              description="Automated FBR compliant POS systems and reporting."
            />
            <ServiceCard
              icon={<FaSync />}
              title="ERP Automation"
              description="Automate ERP workflows and data synchronization."
            />
          </div>
        </div>
      </section>

      {/* FinTech & Database */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">FinTech & Database Solutions</h2>
            <p className="section-subtitle">
              Secure financial technology and robust database management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ServiceCard
              icon={<FaShieldAlt />}
              title="FinTech Solutions"
              description="Secure payment systems, banking solutions, and financial applications."
            />
            <ServiceCard
              icon={<FaDatabase />}
              title="Database Management"
              description="Database design, optimization, migration, and administration services."
            />
          </div>
        </div>
      </section>

      {/* Support & Maintenance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Support & Maintenance</h2>
            <p className="section-subtitle">
              24/7 technical support to keep your systems running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaServer />}
              title="24/7 Support"
              description="Round-the-clock technical support for critical business systems."
            />
            <ServiceCard
              icon={<FaCogs />}
              title="System Maintenance"
              description="Regular updates, patches, and preventive maintenance services."
            />
            <ServiceCard
              icon={<FaShieldAlt />}
              title="Security Updates"
              description="Ongoing security monitoring and updates to protect your systems."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how our services can benefit your business
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  )
}
