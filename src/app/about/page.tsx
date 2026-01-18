import { MapPin, Briefcase, GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'
import { Section, SectionHeader } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import profile from '@/content/profile.json'
import education from '@/content/education.json'

export const metadata = {
  title: '关于我 | 李博洋',
  description: '了解李博洋的职业经历、测试理念和工作方法论',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section bg-bg-secondary border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display font-bold text-text-primary mb-4">
              关于我
            </h1>
            <p className="text-xl text-text-secondary">
              一名专注于测试工程化与质量体系建设的测试工程师
            </p>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="md:col-span-1 space-y-4">
            <Card hover={false}>
              <h3 className="font-semibold text-text-primary mb-4">基本信息</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-text-secondary">
                  <MapPin size={16} className="text-accent flex-shrink-0" />
                  <span>{profile.location}</span>
                </li>
                <li className="flex items-center gap-3 text-text-secondary">
                  <Briefcase size={16} className="text-accent flex-shrink-0" />
                  <span>{profile.experience}测试经验</span>
                </li>
                <li className="flex items-center gap-3 text-text-secondary">
                  <GraduationCap size={16} className="text-accent flex-shrink-0" />
                  <span>{profile.education}</span>
                </li>
                <li className="flex items-center gap-3 text-text-secondary">
                  <Calendar size={16} className="text-accent flex-shrink-0" />
                  <span>{profile.status}</span>
                </li>
              </ul>
            </Card>

            <Card hover={false}>
              <h3 className="font-semibold text-text-primary mb-4">核心标签</h3>
              <div className="flex flex-wrap gap-2">
                {profile.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium bg-accent-muted text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Narrative */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                职业历程
              </h2>
              <div className="space-y-4">
                {profile.about.narrative.map((paragraph, index) => (
                  <p key={index} className="text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Philosophy Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-4 bg-bg-tertiary rounded-r-lg">
              <p className="text-lg text-text-primary italic mb-2">
                &ldquo;{profile.philosophy}&rdquo;
              </p>
              <footer className="text-sm text-text-tertiary">
                —— 我的测试理念
              </footer>
            </blockquote>
          </div>
        </div>
      </Section>

      {/* Methodology */}
      <Section className="bg-bg-secondary border-y border-border">
        <SectionHeader 
          title="工作方法论" 
          subtitle="多年实践中形成的核心工作理念与方法"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.about.methodology.map((method, index) => (
            <Card key={method.title}>
              <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center mb-4">
                <span className="text-accent font-bold">{index + 1}</span>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {method.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section>
        <SectionHeader 
          title="教育背景" 
          subtitle="学术基础与专业认证"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div>
            {education.education.map((edu) => (
              <Card key={edu.id} className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-muted flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-accent font-medium mb-1">
                      {edu.period}
                    </div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      {edu.degree} · {edu.major}
                    </h3>
                    <p className="text-text-secondary mb-3">
                      {edu.school}
                    </p>
                    <p className="text-sm text-text-tertiary mb-3">
                      {edu.description}
                    </p>
                    {edu.courses && (
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.slice(0, 4).map((course) => (
                          <span 
                            key={course}
                            className="px-2 py-0.5 text-xs bg-bg-tertiary text-text-secondary rounded"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
              <Award size={20} className="text-accent" />
              专业认证
            </h3>
            <div className="space-y-3">
              {education.certifications.map((cert) => (
                <Card key={cert.name} hover={false} className="py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-text-primary">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-text-tertiary">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-sm text-accent font-medium">
                      {cert.year}
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-accent" />
                持续学习
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                保持对测试领域新技术、新方法的关注，定期阅读技术博客、参与技术社区讨论，
                持续提升专业能力。
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
