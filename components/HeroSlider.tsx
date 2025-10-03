'use client'

import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Slide {
  title: string
  subtitle: string
  description: string
  cta: string
  ctaLink: string
}

const slides: Slide[] = [
  {
    title: 'Innovating Digital Solutions',
    subtitle: 'Transform Your Business with Technology',
    description: 'Leading software house providing cutting-edge ERP solutions, custom software development, and IT services.',
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    title: 'ERP Solutions That Scale',
    subtitle: 'SAP, Odoo, Oracle EBS & More',
    description: 'Implement and customize enterprise resource planning systems tailored to your business needs.',
    cta: 'Explore Services',
    ctaLink: '/services',
  },
  {
    title: 'Custom Software Development',
    subtitle: 'Web, Mobile & Desktop Applications',
    description: 'Build powerful, scalable applications that drive business growth and efficiency.',
    cta: 'View Portfolio',
    ctaLink: '/products',
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[600px] bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-accent mb-6 animate-fade-in">
                {slide.subtitle}
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in">
                {slide.description}
              </p>
              <a
                href={slide.ctaLink}
                className="btn-primary inline-block animate-fade-in"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-accent w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
