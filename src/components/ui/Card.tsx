interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
  style?: React.CSSProperties
}

export default function Card({ children, className = '', hover = true, onClick, style }: CardProps) {
  return (
    <div 
      className={`
        bg-bg-secondary border border-border rounded-xl p-6
        transition-all duration-300
        ${hover ? 'hover:border-border-hover hover:shadow-lg' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  )
}
