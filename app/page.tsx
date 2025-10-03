import HeroSlider from '@/components/HeroSlider'
import ServiceCard from '@/components/ServiceCard'
import ProductCard from '@/components/ProductCard'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'
import { 
  FaDatabase, FaCode, FaSync, FaShoppingCart, FaRobot, 
  FaChartLine, FaServer, FaMobile, FaLaptopCode 
} from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaDatabase />}
              title="ERP Solutions"
              description="Implementation and customization of SAP, Odoo, Oracle EBS, and other enterprise systems."
            />
            <ServiceCard
              icon={<FaSync />}
              title="System Integration"
              description="Seamless integration of diverse systems, APIs, and third-party applications."
            />
            <ServiceCard
              icon={<FaCode />}
              title="Custom Development"
              description="Bespoke web, mobile, and desktop applications built with cutting-edge technologies."
            />
            <ServiceCard
              icon={<FaShoppingCart />}
              title="E-commerce Solutions"
              description="Professional Shopify and WooCommerce store design and development."
            />
            <ServiceCard
              icon={<FaRobot />}
              title="Automation & AI"
              description="Intelligent automation solutions to streamline your business processes."
            />
            <ServiceCard
              icon={<FaServer />}
              title="Support & Maintenance"
              description="24/7 technical support and ongoing maintenance for your systems."
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Powerful solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              icon={<FaChartLine />}
              title="ERP Systems"
              description="Complete enterprise resource planning solutions"
              features={[
                'SAP Implementation & Customization',
                'Odoo ERP Solutions',
                'Oracle EBS Integration',
                'Cloud-based ERP',
              ]}
            />
            <ProductCard
              icon={<FaLaptopCode />}
              title="POS Systems"
              description="Modern point-of-sale solutions for retail businesses"
              features={[
                'FBR Compliant POS',
                'Inventory Management',
                'Sales Analytics',
                'Multi-location Support',
              ]}
            />
            <ProductCard
              icon={<FaMobile />}
              title="Mobile Solutions"
              description="Cross-platform mobile applications"
              features={[
                'iOS & Android Apps',
                'React Native Development',
                'Progressive Web Apps',
                'App Store Optimization',
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Trusted by businesses worldwide for exceptional service and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="John Smith"
              position="CEO"
              company="TechCorp Inc"
              rating={5}
              content="OraDigitals transformed our business with their exceptional ERP implementation. Their team's expertise and dedication exceeded our expectations."
            />
            <TestimonialCard
              name="Sarah Johnson"
              position="CTO"
              company="InnovateSoft"
              rating={5}
              content="The custom software solution delivered by OraDigitals has significantly improved our operational efficiency. Highly recommended!"
            />
            <TestimonialCard
              name="Michael Chen"
              position="Director"
              company="Global Retail Co"
              rating={5}
              content="Outstanding service! Their POS system integration was seamless, and the ongoing support has been excellent."
            />
          </div>
        </div>
      </section>

      {/* Clients/Partners Logo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Trusted By Industry Leaders</h2>
            <p className="section-subtitle">
              Proud to partner with leading organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center h-20 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                <span className="text-gray-400 font-semibold">Client {i}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/clients" className="btn-outline">
              View All Partners
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/services" className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-block">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
