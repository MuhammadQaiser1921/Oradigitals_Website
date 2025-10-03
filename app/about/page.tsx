import { Metadata } from 'next'
import { FaCheckCircle, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About Us - OraDigitals',
  description: 'Learn about OraDigitals, our mission, vision, values, and why we are the right technology partner for your business.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About OraDigitals</h1>
            <p className="text-xl text-gray-200">
              Your Trusted Partner in Digital Transformation
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-accent text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital solutions that drive growth, 
                efficiency, and competitive advantage in the modern marketplace.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLightbulb className="text-accent text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading software house recognized globally for delivering 
                cutting-edge technology solutions and exceptional client service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-accent text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <p className="text-gray-600">
                Innovation, integrity, excellence, and client satisfaction are at the 
                core of everything we do. We believe in building lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Our Story</h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Founded with a vision to revolutionize business operations through technology, 
                OraDigitals has grown from a small startup to a trusted name in the software industry. 
                Our journey began with a simple belief: technology should empower businesses, not complicate them.
              </p>
              <p>
                Over the years, we've helped hundreds of businesses across various industries implement 
                robust ERP solutions, develop custom software, and streamline their operations through 
                intelligent automation. Our team of expert developers, consultants, and support specialists 
                work tirelessly to ensure our clients achieve their business objectives.
              </p>
              <p>
                Today, OraDigitals stands as a comprehensive technology partner, offering everything from 
                enterprise resource planning to custom application development, system integration, and 
                ongoing technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { year: '2015', title: 'Company Founded', description: 'OraDigitals was established with a vision to transform businesses through technology.' },
                { year: '2017', title: 'First Major ERP Implementation', description: 'Successfully deployed SAP solution for a multinational corporation.' },
                { year: '2019', title: 'Expansion of Services', description: 'Expanded into custom software development and mobile applications.' },
                { year: '2021', title: 'AI & Automation Division', description: 'Launched dedicated automation and AI services division.' },
                { year: '2023', title: 'Global Partnerships', description: 'Established partnerships with leading technology providers worldwide.' },
                { year: '2025', title: 'Continued Growth', description: 'Serving over 200+ clients across multiple countries and industries.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-accent rounded-full" />
                    {index !== 5 && <div className="w-0.5 h-full bg-accent/30 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-accent font-bold text-xl mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose OraDigitals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Why Choose OraDigitals?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="text-accent text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Our team consists of certified professionals with years of experience in 
                  ERP systems, software development, and IT consulting.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="text-accent text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successfully delivered 500+ projects across various industries with 
                  100% client satisfaction rate.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="text-accent text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-600">
                  We leverage the latest technologies and best practices to deliver 
                  future-proof solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="text-accent text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock technical support and maintenance to ensure your 
                  systems run smoothly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="text-accent text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Customized Solutions</h3>
                <p className="text-gray-600">
                  We understand that every business is unique and tailor our solutions 
                  to your specific needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="text-accent text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  Quality services at competitive prices with flexible payment options 
                  to suit your budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">200+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
