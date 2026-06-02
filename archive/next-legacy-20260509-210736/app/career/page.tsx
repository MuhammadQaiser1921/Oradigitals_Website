'use client'

import { useState } from 'react'
import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote / On-site',
    type: 'Full-time',
    description: 'We are looking for an experienced full-stack developer to join our team and work on cutting-edge projects.',
    requirements: [
      '5+ years of experience in web development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/Azure)',
      'Strong problem-solving skills',
    ],
  },
  {
    id: 2,
    title: 'SAP Consultant',
    department: 'ERP Solutions',
    location: 'On-site',
    type: 'Full-time',
    description: 'Join our ERP team to implement and customize SAP solutions for enterprise clients.',
    requirements: [
      'SAP certification (S/4HANA preferred)',
      '3+ years of SAP implementation experience',
      'Strong communication skills',
      'Experience with SAP FIORI is a plus',
    ],
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote / On-site',
    type: 'Full-time',
    description: 'Create beautiful, user-friendly interfaces for web and mobile applications.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma, Adobe XD, or Sketch',
      'Strong portfolio showcasing your work',
      'Understanding of modern design principles',
    ],
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / On-site',
    type: 'Full-time',
    description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
    requirements: [
      '4+ years of DevOps experience',
      'Experience with Docker, Kubernetes',
      'CI/CD pipeline management',
      'AWS or Azure certification preferred',
    ],
  },
  {
    id: 5,
    title: 'Mobile App Developer',
    department: 'Engineering',
    location: 'On-site',
    type: 'Full-time',
    description: 'Develop high-quality mobile applications for iOS and Android platforms.',
    requirements: [
      '3+ years of mobile development experience',
      'Proficiency in React Native or Flutter',
      'Published apps on App Store/Play Store',
      'Strong understanding of mobile UX',
    ],
  },
  {
    id: 6,
    title: 'Business Analyst',
    department: 'Consulting',
    location: 'On-site',
    type: 'Full-time',
    description: 'Analyze business requirements and translate them into technical solutions.',
    requirements: [
      '3+ years of business analysis experience',
      'Experience in IT consulting',
      'Strong analytical and communication skills',
      'Knowledge of Agile methodologies',
    ],
  },
]

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Application submitted successfully! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', position: '', coverLetter: '' })
    setSelectedJob(null)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-200">
              Build your career with a leading software house
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Work at OraDigitals?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Innovation</h3>
              <p className="text-gray-600">Work on cutting-edge projects with latest technologies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Learning</h3>
              <p className="text-gray-600">Continuous learning and professional development</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Collaboration</h3>
              <p className="text-gray-600">Supportive team environment and culture</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Benefits</h3>
              <p className="text-gray-600">Competitive salary and comprehensive benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Current Openings</h2>
            <p className="section-subtitle">
              Explore opportunities to join our growing team
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="card cursor-pointer"
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <FaBriefcase className="text-accent" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-accent" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-accent" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="btn-outline">
                    {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>

                {selectedJob === job.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-primary mb-3">Job Description</h4>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    
                    <h4 className="font-semibold text-primary mb-3">Requirements</h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-accent mt-1">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setFormData({ ...formData, position: job.title })
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="btn-primary"
                    >
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Apply for a Position</h2>
              <p className="section-subtitle">
                Submit your application and we'll get back to you soon
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="+1 234 567 890"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-gray-700 font-medium mb-2">
                  Position Applying For *
                </label>
                <select
                  id="position"
                  required
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                >
                  <option value="">Select a position</option>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-2">
                  Cover Letter / Why do you want to join us? *
                </label>
                <textarea
                  id="coverLetter"
                  required
                  rows={6}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="Tell us about yourself and why you'd be a great fit for OraDigitals..."
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
                  Upload Resume/CV *
                </label>
                <input
                  type="file"
                  id="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                />
                <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
