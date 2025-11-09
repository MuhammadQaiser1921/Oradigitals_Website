import Link from 'next/link'

export default function SummerInternship() {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Summer Internship</h1>
        <p className="mb-6 text-lg">
          Join OraDigitals for a hands-on summer internship where you'll work with our engineering and product teams to build real features, learn industry workflows, and gain mentorship from senior engineers.
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
          <li>3-month paid internship</li>
          <li>Mentorship and regular code reviews</li>
          <li>Opportunity to work on web and mobile projects</li>
        </ul>
        <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90">
          Apply / Contact Us
        </Link>
      </div>
    </section>
  )
}
