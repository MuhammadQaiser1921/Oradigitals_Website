'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Database, 
  Code, 
  Zap, 
  ShoppingCart, 
  Settings, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const ServicesOverview = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      icon: Database,
      title: "ERP Solutions",
      description: "Comprehensive ERP implementations including SAP, Odoo, Oracle EBS, and custom solutions.",
      features: ["SAP Implementation", "Odoo Customization", "Oracle EBS", "Custom ERP Development"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions for web, mobile, and desktop applications.",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"],
      color: "bg-green-500"
    },
    {
      id: 3,
      icon: Zap,
      title: "System Integration",
      description: "Seamless integration of various business systems and third-party applications.",
      features: ["API Integration", "Data Migration", "System Connectivity", "Workflow Automation"],
      color: "bg-purple-500"
    },
    {
      id: 4,
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms using Shopify, WooCommerce, and custom solutions.",
      features: ["Shopify Development", "WooCommerce Setup", "Payment Integration", "Inventory Management"],
      color: "bg-pink-500"
    },
    {
      id: 5,
      icon: Settings,
      title: "Automation Services",
      description: "Business process automation, AI integration, and workflow optimization.",
      features: ["Process Automation", "AI Integration", "Workflow Design", "RPA Solutions"],
      color: "bg-indigo-500"
    },
    {
      id: 6,
      icon: Smartphone,
      title: "Support & Maintenance",
      description: "24/7 technical support, system maintenance, and continuous improvement services.",
      features: ["24/7 Support", "System Monitoring", "Regular Updates", "Performance Optimization"],
      color: "bg-orange-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive digital solutions to transform your business operations 
            and drive growth through innovative technology implementations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="p-8">
                <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className={`space-y-2 transition-all duration-300 ${
                  hoveredService === service.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center space-x-2 text-accent hover:text-accent-light font-semibold transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview