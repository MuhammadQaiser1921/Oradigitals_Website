import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Clients & Partners - OraDigitals',
  description: 'Trusted by leading organizations worldwide. See our valued clients and technology partners.',
}

export default function ClientsPage() {
  const clients = [
    'TechCorp International',
    'Global Retail Solutions',
    'FinanceMax Group',
    'HealthCare Plus',
    'Manufacturing Pro',
    'E-Commerce Giant',
    'LogisticsPro Inc',
    'EduTech Solutions',
    'AutoMotive Systems',
    'FoodChain Ltd',
    'RealEstate Ventures',
    'MediaWorks Studio',
  ]

  const partners = [
    { name: 'SAP', description: 'Official SAP Partner for ERP Solutions' },
    { name: 'Odoo', description: 'Certified Odoo Implementation Partner' },
    { name: 'Oracle', description: 'Oracle Partner Network Member' },
    { name: 'Microsoft', description: 'Microsoft Certified Partner' },
    { name: 'AWS', description: 'Amazon Web Services Partner' },
    { name: 'Google Cloud', description: 'Google Cloud Platform Partner' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Clients & Partners</h1>
            <p className="text-xl text-gray-200">
              Trusted by leading organizations worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">200+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Valued Clients</h2>
            <p className="section-subtitle">
              We're proud to work with amazing companies across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="card flex items-center justify-center h-32 text-center hover:border-accent transition-all"
              >
                <span className="font-semibold text-gray-600">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Technology Partners</h2>
            <p className="section-subtitle">
              Partnering with industry leaders to deliver the best solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="card text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Industries We Serve</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🏭', name: 'Manufacturing' },
              { icon: '🏪', name: 'Retail & E-commerce' },
              { icon: '🏥', name: 'Healthcare' },
              { icon: '🏦', name: 'Banking & Finance' },
              { icon: '📚', name: 'Education' },
              { icon: '🚚', name: 'Logistics & Supply Chain' },
              { icon: '🏗️', name: 'Real Estate' },
              { icon: '🎬', name: 'Media & Entertainment' },
            ].map((industry, index) => (
              <div key={index} className="card text-center hover:-translate-y-2">
                <div className="text-5xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-primary">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "OraDigitals delivered an exceptional ERP solution that transformed our operations. 
                Their expertise and dedication are unmatched."
              </p>
              <p className="font-semibold text-primary">- CEO, TechCorp International</p>
            </div>

            <div className="card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Working with OraDigitals was a pleasure. They understood our needs and delivered 
                beyond expectations."
              </p>
              <p className="font-semibold text-primary">- CTO, Global Retail Solutions</p>
            </div>

            <div className="card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Outstanding technical expertise and customer service. OraDigitals is our 
                go-to partner for all IT solutions."
              </p>
              <p className="font-semibold text-primary">- Director, FinanceMax Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how we can help your business thrive
          </p>
          <a href="/contact" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </section>
    </>
  )
}
