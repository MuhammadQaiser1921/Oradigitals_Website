import { Metadata } from 'next'
import TeamCard from '@/components/TeamCard'

export const metadata: Metadata = {
  title: 'Our Team - OraDigitals',
  description: 'Meet the talented team behind OraDigitals - our leadership, developers, and consultants driving innovation.',
}

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-200">
              Meet the talented people driving innovation at OraDigitals
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Visionary leaders with decades of combined experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TeamCard
              name="John Anderson"
              position="Chief Executive Officer"
              linkedin="https://linkedin.com/in/johndoe"
              bio="20+ years in technology leadership and business strategy"
            />

            <TeamCard
              name="Sarah Mitchell"
              position="Chief Technology Officer"
              linkedin="https://linkedin.com/in/sarahmitchell"
              bio="Expert in enterprise architecture and software development"
            />

            <TeamCard
              name="Michael Chen"
              position="Chief Operations Officer"
              linkedin="https://linkedin.com/in/michaelchen"
              bio="Specializes in operational excellence and process optimization"
            />
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Management Team</h2>
            <p className="section-subtitle">
              Experienced managers leading our specialized divisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamCard
              name="Emily Rodriguez"
              position="ERP Solutions Manager"
              linkedin="https://linkedin.com/in/emilyrodriguez"
              bio="SAP and Oracle ERP specialist"
            />

            <TeamCard
              name="David Kim"
              position="Software Development Manager"
              linkedin="https://linkedin.com/in/davidkim"
              bio="Full-stack development expert"
            />

            <TeamCard
              name="Jessica Taylor"
              position="Project Manager"
              linkedin="https://linkedin.com/in/jessicataylor"
              bio="PMP certified project manager"
            />

            <TeamCard
              name="Robert Wilson"
              position="Client Relations Manager"
              linkedin="https://linkedin.com/in/robertwilson"
              bio="Customer success specialist"
            />
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Technical Experts</h2>
            <p className="section-subtitle">
              Skilled developers and consultants delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamCard
              name="Alex Johnson"
              position="Senior Full-Stack Developer"
              linkedin="https://linkedin.com/in/alexjohnson"
            />

            <TeamCard
              name="Maria Garcia"
              position="Senior SAP Consultant"
              linkedin="https://linkedin.com/in/mariagarcia"
            />

            <TeamCard
              name="Thomas Brown"
              position="Mobile App Developer"
              linkedin="https://linkedin.com/in/thomasbrown"
            />

            <TeamCard
              name="Lisa Wang"
              position="UI/UX Designer"
              linkedin="https://linkedin.com/in/lisawang"
            />

            <TeamCard
              name="James Miller"
              position="DevOps Engineer"
              linkedin="https://linkedin.com/in/jamesmiller"
            />

            <TeamCard
              name="Anna Petrova"
              position="Data Analyst"
              linkedin="https://linkedin.com/in/annapetrova"
            />

            <TeamCard
              name="Carlos Martinez"
              position="QA Lead"
              linkedin="https://linkedin.com/in/carlosmartinez"
            />

            <TeamCard
              name="Sophie Laurent"
              position="Business Analyst"
              linkedin="https://linkedin.com/in/sophielauren"
            />
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-xl mb-8 text-gray-200">
            We're always looking for talented individuals to join our growing team
          </p>
          <a href="/career" className="btn-primary">
            View Open Positions
          </a>
        </div>
      </section>
    </>
  )
}
