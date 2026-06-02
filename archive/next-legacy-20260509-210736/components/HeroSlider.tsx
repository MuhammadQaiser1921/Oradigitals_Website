export default function HeroSlider() {
  return (
    <header className="hero-bg relative overflow-hidden min-h-[78vh] md:min-h-[88vh]">
      <div className="hero-grid-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 min-h-[78vh] md:min-h-[88vh] flex items-center justify-center">
        <div className="max-w-4xl text-center text-primary">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs sm:text-sm font-semibold text-primary shadow-sm mb-6 border border-primary/10">
            Business-first ERP, Integrations, Products, and IT Services
          </div>
          <h1 className="headline-fluid font-extrabold tracking-tight mb-5">
            Digital infrastructure that keeps your business moving
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-accent mb-6 font-semibold">
            ERP, integrations, and custom products built for real operations, not slide decks.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-9 text-gray-700 max-w-3xl mx-auto">
            OraDigitals helps organizations with ERP implementation, data migration, OIC and OCI integrations, payment workflows, e-commerce systems, and tailored software delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary inline-block shadow-lg shadow-primary/20">
              Start a Project
            </a>
            <a href="/services" className="btn-outline inline-block bg-white/40 backdrop-blur-sm">
              Explore Services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="rounded-xl bg-white/80 border border-primary/10 px-3 py-4">
              <p className="text-xl sm:text-2xl font-bold text-primary">ERP</p>
              <p className="text-xs sm:text-sm text-gray-600">SAP, Odoo, Oracle</p>
            </div>
            <div className="rounded-xl bg-white/80 border border-primary/10 px-3 py-4">
              <p className="text-xl sm:text-2xl font-bold text-primary">INT</p>
              <p className="text-xs sm:text-sm text-gray-600">OIC, OCI, payments</p>
            </div>
            <div className="rounded-xl bg-white/80 border border-primary/10 px-3 py-4">
              <p className="text-xl sm:text-2xl font-bold text-primary">APP</p>
              <p className="text-xs sm:text-sm text-gray-600">Web, desktop, mobile</p>
            </div>
            <div className="rounded-xl bg-white/80 border border-primary/10 px-3 py-4">
              <p className="text-xl sm:text-2xl font-bold text-primary">REG</p>
              <p className="text-xs sm:text-sm text-gray-600">SECP, FBR, PRA</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
