import HeroSlider from '@/components/HeroSlider'
import ServiceCard from '@/components/ServiceCard'
import ProductCard from '@/components/ProductCard'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'
import { companyInfo } from '@/lib/company'
import {
  FaCode,
  FaDatabase,
  FaGlobe,
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaShieldAlt,
  FaShoppingCart,
  FaSync,
} from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">Enterprise Delivery</div>
              <p className="text-gray-600 text-sm sm:text-base">ERP systems and business workflows</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">Practical Integrations</div>
              <p className="text-gray-600 text-sm sm:text-base">OIC, OCI, payment, courier, FBR</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">Product Engineering</div>
              <p className="text-gray-600 text-sm sm:text-base">Web, desktop, and mobile applications</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">Verified Company</div>
              <p className="text-gray-600 text-sm sm:text-base">SECP, FBR, and PRA registered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-gray-50">
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
              description="Implementation and support for SAP, Odoo, Oracle EBS, Oracle Fusion, and core business workflows."
            />
            <ServiceCard
              icon={<FaSync />}
              title="System Integration"
              description="OIC, OCI, payment, courier, FBR, Shopify, WooCommerce, and API integrations."
            />
            <ServiceCard
              icon={<FaCode />}
              title="Custom Development"
              description="Web, mobile, and desktop applications tailored around your operational requirements."
            />
            <ServiceCard
              icon={<FaShoppingCart />}
              title="E-commerce Solutions"
              description="Shopify and WooCommerce development, optimization, and business integrations."
            />
            <ServiceCard
              icon={<FaRobot />}
              title="Data Migration & Automation"
              description="Data migration, scheduled processing, recurring sync flows, and business automation."
            />
            <ServiceCard
              icon={<FaShieldAlt />}
              title="IT Support"
              description="Practical IT support, cloud assistance, monitoring, and ongoing maintenance."
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Two focused in-house products built for specific business use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard
              icon={<FaLaptopCode />}
              title="EastFTP"
              description="JavaFX desktop software for scheduled FTPS downloads and file delivery to the right local destination."
              features={[
                'Multi-file FTPS downloads',
                'Specific local path delivery',
                'Scheduled execution at defined times',
                'Designed for recurring operations',
              ]}
            />
            <ProductCard
              icon={<FaMobileAlt />}
              title="Pimidrome"
              description="A mobile application offered through Google Play Store channels and direct product guidance from our team."
              features={[
                'Mobile-first user experience',
                'Google Play Store link shared on request',
                'Support from OraDigitals',
                'Built for practical accessibility',
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

      <section className="section-shell bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Feedback from clients we support directly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              name="Muhammad Shoaib"
              position="Head of Innovation Department"
              company="Treet Corporation"
              rating={5}
              content="OraDigitals delivered dependable support and practical execution for our innovation-focused technology work."
            />
            <TestimonialCard
              name="Ertan"
              position="Owner"
              company="Primmeshiper"
              rating={5}
              content="The team understood our Shopify requirements clearly and delivered support that was practical, fast, and reliable."
            />
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Selected Clients</h2>
            <p className="section-subtitle">
              We work with clients, not just logos, and focus on long-term value delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">TREET</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Treet Corporation</h3>
              <p className="text-gray-600">Client work supporting enterprise and innovation-focused initiatives.</p>
            </div>
            <div className="card text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">PS</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Primmeshiper</h3>
              <p className="text-gray-600 mb-3">Client engagement around Shopify-related technical and operational work.</p>
              <a href="https://primmeshiper.com/en" target="_blank" rel="noreferrer" className="text-accent font-medium hover:underline">Visit website</a>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/clients" className="btn-outline">
              View Client Details
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-title">Compliance & Registration</h2>
              <p className="text-gray-600 text-lg mb-6">
                {companyInfo.name} is registered and verifiable through SECP, FBR, and PRA records.
              </p>
              <div className="space-y-3 text-gray-700">
                <p>SECP: {companyInfo.secpNumber}</p>
                <p>FBR: {companyInfo.fbrNumber}</p>
                <p>PRA: {companyInfo.praNumber}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/compliance" className="btn-primary">View Compliance Page</Link>
                <a href={companyInfo.secpVerificationLink} target="_blank" rel="noreferrer" className="btn-outline text-center">Verify SECP</a>
              </div>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold text-primary mb-4">Business Presence</h3>
              <p className="text-gray-700 mb-3">{companyInfo.address}, {companyInfo.cityAddress}</p>
              <p className="text-gray-700 mb-3">Phone: {companyInfo.formattedPhone}</p>
              <p className="text-gray-700 mb-6">Email: {companyInfo.email}</p>
              <a href={companyInfo.secondaryWebsite} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
                <FaGlobe />
                Visit {companyInfo.secondaryWebsite}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-200">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <a href={`mailto:${companyInfo.email}`} className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-block">
              Email {companyInfo.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
