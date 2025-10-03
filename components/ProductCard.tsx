import { ReactNode } from 'react'

interface ProductCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
}

export default function ProductCard({ icon, title, description, features }: ProductCardProps) {
  return (
    <div className="card group hover:-translate-y-2">
      <div className="text-accent text-5xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
            <span className="text-accent mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
