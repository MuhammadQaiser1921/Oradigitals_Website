import { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'
import { FaChartLine, FaCashRegister, FaMobile, FaRobot, FaDatabase, FaCloud } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Products - OraDigitals',
  description: 'Explore our range of enterprise products including ERP systems, POS solutions, mobile apps, and automation tools.',
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-200">
              Powerful solutions designed to transform your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              icon={<FaChartLine />}
              title="SAP ERP Solutions"
              description="Enterprise-grade SAP implementation and customization for large organizations."
              features={[
                'SAP S/4HANA Implementation',
                'SAP Business One',
                'Custom Module Development',
                'SAP FIORI Applications',
                'Integration with Third-party Systems',
              ]}
            />

            <ProductCard
              icon={<FaChartLine />}
              title="Odoo ERP Platform"
              description="Complete business management suite with modular architecture."
              features={[
                'CRM & Sales Management',
                'Inventory & Warehouse',
                'Accounting & Finance',
                'HR & Payroll',
                'Manufacturing & MRP',
                'E-commerce Integration',
              ]}
            />

            <ProductCard
              icon={<FaDatabase />}
              title="Oracle EBS"
              description="Oracle E-Business Suite for comprehensive enterprise management."
              features={[
                'Financials Management',
                'Supply Chain Management',
                'Human Capital Management',
                'Customer Relationship Management',
                'Project Management',
              ]}
            />

            <ProductCard
              icon={<FaCashRegister />}
              title="Smart POS System"
              description="Modern point-of-sale solution with FBR compliance and cloud sync."
              features={[
                'FBR Compliant Invoicing',
                'Real-time Inventory Tracking',
                'Multi-location Support',
                'Sales Analytics Dashboard',
                'Customer Loyalty Programs',
                'Cloud Backup & Sync',
              ]}
            />

            <ProductCard
              icon={<FaMobile />}
              title="Mobile Solutions"
              description="Cross-platform mobile applications for iOS and Android."
              features={[
                'Native iOS Development',
                'Native Android Development',
                'React Native Apps',
                'Flutter Development',
                'Progressive Web Apps',
                'App Store Optimization',
              ]}
            />

            <ProductCard
              icon={<FaRobot />}
              title="Automation Suite"
              description="Intelligent automation tools to streamline business processes."
              features={[
                'Workflow Automation',
                'RPA (Robotic Process Automation)',
                'AI-powered Analytics',
                'Document Processing',
                'Email Automation',
                'Custom Integration Scripts',
              ]}
            />

            <ProductCard
              icon={<FaCloud />}
              title="Cloud Solutions"
              description="Scalable cloud infrastructure and migration services."
              features={[
                'AWS Cloud Deployment',
                'Azure Integration',
                'Google Cloud Platform',
                'Cloud Migration Services',
                'DevOps & CI/CD',
                'Cloud Security',
              ]}
            />

            <ProductCard
              icon={<FaDatabase />}
              title="Database Solutions"
              description="Robust database management and optimization services."
              features={[
                'MySQL & PostgreSQL',
                'MongoDB & NoSQL',
                'Microsoft SQL Server',
                'Database Design & Architecture',
                'Performance Optimization',
                'Data Migration',
              ]}
            />

            <ProductCard
              icon={<FaChartLine />}
              title="Business Intelligence"
              description="Advanced analytics and reporting tools for data-driven decisions."
              features={[
                'Interactive Dashboards',
                'Custom Reports',
                'Data Visualization',
                'Predictive Analytics',
                'KPI Tracking',
                'Real-time Monitoring',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Need a Custom Solution?</h2>
            <p className="section-subtitle mb-8">
              We specialize in building tailored products that perfectly match your unique business requirements.
            </p>
            <a href="/contact" className="btn-primary">
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Why Choose Our Products?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">High Performance</h3>
              <p className="text-gray-600">Optimized for speed and efficiency</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Secure</h3>
              <p className="text-gray-600">Built with security best practices</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Scalable</h3>
              <p className="text-gray-600">Grows with your business needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-3xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Customizable</h3>
              <p className="text-gray-600">Tailored to your requirements</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
