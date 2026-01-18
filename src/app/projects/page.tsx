import { Calendar, Users, ChevronRight, TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react'
import { Section, SectionHeader } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import projectsData from '@/content/projects.json'

export const metadata = {
  title: '项目经历 | 李博洋',
  description: '李博洋主导或参与的测试项目经历，展示测试策略、实施方案与成果',
}

export default function ProjectsPage() {
  const { projects } = projectsData
  const pinnedProjects = projects.filter(p => p.isPinned)
  const otherProjects = projects.filter(p => !p.isPinned)

  return (
    <div>
      {/* Hero */}
      <section className="section bg-bg-secondary border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display font-bold text-text-primary mb-4">
              项目经历
            </h1>
            <p className="text-xl text-text-secondary">
              多年来主导或深度参与的测试项目，展示测试策略设计与质量保障实践
            </p>
          </div>
        </div>
      </section>

      {/* Pinned Projects */}
      {pinnedProjects.length > 0 && (
        <Section>
          <SectionHeader 
            title="重点项目" 
            subtitle="近年来主导的核心测试项目"
          />
          <div className="space-y-8">
            {pinnedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </Section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <Section className="bg-bg-secondary border-t border-border">
          <SectionHeader 
            title="更多项目" 
            subtitle="其他测试项目经历"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}

interface ProjectCardProps {
  project: typeof projectsData.projects[0]
  featured?: boolean
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <Card className="overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Basic Info */}
          <div className="lg:w-1/3 lg:border-r lg:border-border lg:pr-6">
            <div className="flex items-center gap-2 mb-3">
              <Tag size="sm">{project.industry}</Tag>
              {project.isPinned && (
                <span className="px-2 py-0.5 text-xs font-medium bg-accent text-white rounded">
                  重点
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              {project.title}
            </h3>
            <p className="text-text-secondary mb-4">
              {project.summary}
            </p>
            <div className="space-y-2 text-sm text-text-tertiary">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{project.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} />
                <span>{project.role} · {project.teamSize}</span>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:w-2/3 space-y-6">
            {/* Background & Challenges */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-1">
                <ChevronRight size={14} className="text-accent" />
                项目背景
              </h4>
              <p className="text-sm text-text-secondary mb-3">
                {project.background}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.challenges.map((challenge, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 text-xs bg-bg-tertiary text-text-secondary rounded"
                  >
                    {challenge}
                  </span>
                ))}
              </div>
            </div>

            {/* Strategy */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-1">
                <ChevronRight size={14} className="text-accent" />
                测试策略
              </h4>
              <p className="text-sm text-text-secondary mb-2">
                {project.strategy.approach}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.strategy.testTypes.map((type) => (
                  <Tag key={type} size="sm" variant="outline">{type}</Tag>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-1">
                <ChevronRight size={14} className="text-accent" />
                项目成果
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {project.results.metrics.map((metric) => (
                  <div 
                    key={metric.label}
                    className="bg-bg-tertiary rounded-lg p-3 text-center"
                  >
                    <div className="flex items-center justify-center gap-1 text-lg font-semibold text-accent mb-1">
                      {metric.value}
                      {metric.trend === 'up' ? (
                        <TrendingUp size={14} className="text-green-500" />
                      ) : (
                        <TrendingDown size={14} className="text-green-500" />
                      )}
                    </div>
                    <div className="text-xs text-text-tertiary">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              <ul className="space-y-1">
                {project.results.highlights.slice(0, 2).map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                    <ArrowUpRight size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="pt-4 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono bg-bg-tertiary text-text-tertiary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  // Compact card for non-featured projects
  return (
    <Card>
      <div className="flex items-center gap-2 mb-3">
        <Tag size="sm">{project.industry}</Tag>
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-text-secondary mb-4">
        {project.summary}
      </p>
      <div className="flex items-center gap-4 text-sm text-text-tertiary mb-4">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {project.period}
        </span>
        <span>{project.role}</span>
      </div>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {project.results.metrics.slice(0, 2).map((metric) => (
          <div 
            key={metric.label}
            className="bg-bg-tertiary rounded-lg p-2 text-center"
          >
            <div className="text-sm font-semibold text-accent">
              {metric.value}
            </div>
            <div className="text-xs text-text-tertiary">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((tech) => (
          <span 
            key={tech}
            className="px-1.5 py-0.5 text-xs font-mono bg-bg-tertiary text-text-tertiary rounded"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="px-1.5 py-0.5 text-xs text-text-tertiary">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
    </Card>
  )
}
