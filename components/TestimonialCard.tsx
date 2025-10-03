import { FaStar } from 'react-icons/fa'

interface TestimonialCardProps {
  name: string
  position: string
  company: string
  content: string
  rating: number
  image?: string
}

export default function TestimonialCard({
  name,
  position,
  company,
  content,
  rating,
  image,
}: TestimonialCardProps) {
  return (
    <div className="card">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
          {image ? (
            <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-semibold text-primary">{name}</h4>
          <p className="text-sm text-gray-600">
            {position} at {company}
          </p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? 'text-accent' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className="text-gray-700 italic">&quot;{content}&quot;</p>
    </div>
  )
}
