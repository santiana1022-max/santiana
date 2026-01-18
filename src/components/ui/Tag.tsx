interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'outline'
  size?: 'sm' | 'md'
}

export default function Tag({ children, variant = 'default', size = 'md' }: TagProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors'
  
  const variants = {
    default: 'bg-accent-muted text-accent hover:bg-accent hover:text-white',
    outline: 'border border-border text-text-secondary hover:border-accent hover:text-accent',
  }
  
  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  )
}
