import { FaLinkedin } from 'react-icons/fa'

interface TeamCardProps {
  name: string
  position: string
  image?: string
  linkedin?: string
  bio?: string
}

export default function TeamCard({ name, position, image, linkedin, bio }: TeamCardProps) {
  return (
    <div className="card group text-center">
      <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-5xl font-bold">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-1">{name}</h3>
      <p className="text-accent font-medium mb-3">{position}</p>
      {bio && <p className="text-gray-600 text-sm mb-4">{bio}</p>}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
        >
          <FaLinkedin size={20} />
          <span className="text-sm">Connect on LinkedIn</span>
        </a>
      )}
    </div>
  )
}
