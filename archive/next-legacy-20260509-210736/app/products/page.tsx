import { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'
import { FaDesktop, FaMobileAlt } from 'react-icons/fa'
import { companyInfo } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Products - OraDigitals',
  description: 'Explore our in-house products including EastFTP desktop software and the Pimidrome mobile application.',
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-200">
              Focused software products built for practical business operations
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard
              icon={<FaDesktop />}
              title="EastFTP"
              description="A JavaFX desktop application for scheduled FTPS downloads and structured file delivery to the correct local paths."
              features={[
                'Built with JavaFX for desktop environments',
                'Download multiple files from FTPS sources',
                'Save files to a specific local path automatically',
                'Schedule downloads at a specific time',
                'Suitable for recurring file transfer operations',
              ]}
            />

            <ProductCard
              icon={<FaMobileAlt />}
              title="Pimidrome"
              description="A mobile application experience delivered for users who need product access through mobile channels."
              features={[
                'Mobile-first product experience',
                'Android distribution workflow',
                'Google Play Store link shared by request',
                'Support and product details through our team',
                'Built for practical user accessibility',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Product Availability</h2>
              <p className="text-gray-700 mb-4">
                EastFTP is available through our team for organizations that need scheduled FTPS downloads and structured file delivery.
              </p>
              <p className="text-gray-700">
                For Pimidrome details and the Google Play Store link, please contact us directly.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold text-primary mb-4">Request Access</h2>
              <p className="text-gray-700 mb-6">
                To request a demo, pricing, or availability details for either product, email our team and we will guide you further.
              </p>
              <a href={`mailto:${companyInfo.email}`} className="btn-primary">
                Email {companyInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
