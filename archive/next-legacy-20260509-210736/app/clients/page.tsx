import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Clients - OraDigitals',
  description: 'Selected client engagements and feedback from businesses served by OraDigitals.',
}

const clients = [
  {
    name: 'Treet Corporation',
    logo: 'TREET',
    location: 'Lahore, Pakistan',
    website: '',
    summary: 'Client engagement focused on enterprise technology support and innovation-driven operational work.',
    testimonial:
      'OraDigitals delivered dependable support and practical execution for our innovation-focused technology work.',
    author: 'Muhammad Shoaib',
    title: 'Head of Innovation Department',
  },
  {
    name: 'Primmeshiper',
    logo: 'PS',
    location: 'Turkey',
    website: 'https://primmeshiper.com/en',
    summary: 'Client engagement around Shopify-related technical and operational implementation.',
    testimonial:
      'The team understood our Shopify requirements clearly and delivered support that was practical, fast, and reliable.',
    author: 'Ertan',
    title: 'Owner',
  },
]

export default function ClientsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-gray-200">
              Businesses that trust us with their systems, integrations, and product work
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">2</div>
              <div className="text-gray-600">Featured Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">ERP</div>
              <div className="text-gray-600">Enterprise Work</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">INT</div>
              <div className="text-gray-600">Integration Focus</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-600">Support Mindset</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Selected Client Work</h2>
            <p className="section-subtitle">
              We work directly with clients and focus on solving real operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {clients.map((client) => (
              <div key={client.name} className="card">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    {client.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-1">{client.name}</h3>
                    <p className="text-accent font-medium mb-2">{client.location}</p>
                    <p className="text-gray-600">{client.summary}</p>
                  </div>
                </div>
                {client.website ? (
                  <a href={client.website} target="_blank" rel="noreferrer" className="text-primary hover:text-accent font-medium inline-block">
                    Visit client website
                  </a>
                ) : (
                  <p className="text-sm text-gray-500">Official logo artwork can be added when the brand asset is provided.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle">
              Feedback from clients we have worked with directly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {clients.map((client) => (
              <div key={client.author} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">&quot;{client.testimonial}&quot;</p>
                <p className="font-semibold text-primary">{client.author}</p>
                <p className="text-gray-600 text-sm">{client.title} at {client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Industries We Serve</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🏭', name: 'Manufacturing' },
              { icon: '🛒', name: 'Retail & E-commerce' },
              { icon: '💳', name: 'Payments & FinTech' },
              { icon: '📦', name: 'Logistics & Courier' },
              { icon: '☁️', name: 'Cloud & Integrations' },
              { icon: '📊', name: 'ERP & Reporting' },
              { icon: '📱', name: 'Mobile Products' },
              { icon: '🖥️', name: 'Desktop Operations' },
            ].map((industry) => (
              <div key={industry.name} className="card text-center hover:-translate-y-2">
                <div className="text-5xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-primary">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Become Our Next Client?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let&apos;s discuss how we can support your systems, integrations, and business growth.
          </p>
          <a href="/contact" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </section>
    </>
  )
}
