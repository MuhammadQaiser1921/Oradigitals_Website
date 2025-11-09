export default function HeroSlider() {
  return (
    <header className="relative h-[640px] overflow-hidden bg-white">
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-3xl text-center text-primary">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Innovating Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-6">
            Transform Your Business with Technology
          </p>
          <p className="text-md md:text-lg mb-8 text-gray-700">
            Leading software house providing cutting-edge ERP solutions, custom software development, and IT services.
          </p>
          <a href="/contact" className="btn-secondary inline-block">
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
