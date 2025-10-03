'use client'

import { useState } from 'react'
import { Metadata } from 'next'

const galleryImages = [
  { id: 1, title: 'Team Collaboration', category: 'Work', description: 'Our teams working together on innovative projects' },
  { id: 2, title: 'Annual Retreat', category: 'Events', description: 'Company retreat at a beautiful resort' },
  { id: 3, title: 'Hackathon 2024', category: 'Events', description: '24-hour innovation hackathon' },
  { id: 4, title: 'Modern Office Space', category: 'Office', description: 'Our state-of-the-art office environment' },
  { id: 5, title: 'Team Lunch', category: 'Culture', description: 'Regular team lunches and bonding' },
  { id: 6, title: 'Award Ceremony', category: 'Events', description: 'Recognizing outstanding achievements' },
  { id: 7, 'Break Room', category: 'Office', description: 'Relaxing break room with games and entertainment' },
  { id: 8, title: 'Training Session', category: 'Work', description: 'Continuous learning and development' },
  { id: 9, title: 'Celebration', category: 'Culture', description: 'Celebrating project success' },
]

export default function LifePage() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Work', 'Events', 'Office', 'Culture']

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Life @ OraDigitals</h1>
            <p className="text-xl text-gray-200">
              Discover our vibrant culture, team events, and work environment
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Culture</h2>
            <p className="section-subtitle">
              A workplace that values innovation, collaboration, and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">
                We believe in maintaining a healthy balance between professional and personal life
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-4xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Innovation First</h3>
              <p className="text-gray-600">
                Encouraging creative thinking and innovative solutions to complex problems
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Team Spirit</h3>
              <p className="text-gray-600">
                Fostering collaboration, respect, and strong relationships among team members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Perks & Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '💼', title: 'Competitive Salary', desc: 'Market-leading compensation packages' },
              { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive health coverage for you and family' },
              { icon: '🌴', title: 'Paid Time Off', desc: 'Generous vacation and leave policies' },
              { icon: '📚', title: 'Learning Budget', desc: 'Annual budget for courses and certifications' },
              { icon: '🏡', title: 'Remote Work', desc: 'Flexible remote work options' },
              { icon: '🎉', title: 'Team Events', desc: 'Regular team building activities and celebrations' },
              { icon: '☕', title: 'Free Snacks', desc: 'Unlimited coffee, snacks, and beverages' },
              { icon: '🏋️', title: 'Gym Membership', desc: 'Subsidized gym and fitness memberships' },
              { icon: '🚀', title: 'Career Growth', desc: 'Clear career progression paths' },
            ].map((perk, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-3">{perk.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{perk.title}</h3>
                <p className="text-gray-600 text-sm">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Photo Gallery</h2>
            <p className="section-subtitle">
              A glimpse into our daily life, events, and celebrations
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === category
                    ? 'bg-accent text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div key={image.id} className="card group overflow-hidden p-0">
                <div className="h-64 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white text-6xl opacity-50">📷</span>
                </div>
                <div className="p-4">
                  <span className="text-xs text-accent font-semibold">{image.category}</span>
                  <h3 className="text-lg font-semibold text-primary mt-1">{image.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials from Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Team Says</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <p className="text-gray-700 italic mb-4">
                "OraDigitals has been an amazing place to grow my career. The team is supportive, 
                and I'm constantly learning new technologies."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Alex Johnson</h4>
                  <p className="text-sm text-gray-600">Senior Developer</p>
                </div>
              </div>
            </div>

            <div className="card">
              <p className="text-gray-700 italic mb-4">
                "The work-life balance here is incredible. Management truly cares about employee 
                wellbeing and professional development."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Sarah Mitchell</h4>
                  <p className="text-sm text-gray-600">Project Manager</p>
                </div>
              </div>
            </div>

            <div className="card">
              <p className="text-gray-700 italic mb-4">
                "I love the innovative culture at OraDigitals. We're encouraged to experiment 
                with new ideas and technologies."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Michael Chen</h4>
                  <p className="text-sm text-gray-600">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Explore career opportunities and become part of our amazing team
          </p>
          <a href="/career" className="btn-primary">
            View Open Positions
          </a>
        </div>
      </section>
    </>
  )
}
