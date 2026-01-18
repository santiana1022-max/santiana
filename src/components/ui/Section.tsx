interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
