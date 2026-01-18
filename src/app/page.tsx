import { ArrowRight, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Card from '@/components/ui/Card'
import profile from '@/content/profile.json'

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="section flex items-center min-h-[calc(100vh-8rem)]">
        <div className="container">
          <div className="max-w-3xl">
            {/* Name & Title */}
            <div className="animate-fade-in-up">
              <h1 className="text-display-sm md:text-display font-bold text-text-primary mb-4">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium mb-6">
                {profile.title}
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-text-secondary animate-fade-in-up animate-delay-100">
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-accent" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase size={16} className="text-accent" />
                {profile.experience}经验
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap size={16} className="text-accent" />
                {profile.education}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up animate-delay-200">
              {profile.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            {/* Philosophy */}
            <blockquote className="border-l-4 border-accent pl-4 py-2 mb-10 animate-fade-in-up animate-delay-300">
              <p className="text-lg text-text-secondary italic">
                &ldquo;{profile.philosophy}&rdquo;
              </p>
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
              <Button href="/projects" variant="primary" size="lg">
                查看项目经历
                <ArrowRight size={18} />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                联系我
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section bg-bg-secondary border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {profile.highlights.map((item, index) => (
              <Card 
                key={item.label} 
                hover={false}
                className={`text-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {item.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brief About */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6">
              关于我
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              {profile.about.summary}
            </p>
            <Button href="/about" variant="ghost">
              了解更多
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
