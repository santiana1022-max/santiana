'use client'

import { useState } from 'react'
import { Section, SectionHeader } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import ProgressBar from '@/components/ui/ProgressBar'
import skillsData from '@/content/skills.json'

export default function SkillsContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { categories, tools } = skillsData

  const levelLabels = {
    expert: '精通',
    proficient: '熟练',
    familiar: '了解',
  }

  const levelColors: Record<string, string> = {
    expert: 'bg-accent text-white',
    proficient: 'bg-accent-muted text-accent',
    familiar: 'bg-bg-tertiary text-text-secondary',
  }

  // Group tools by category
  const toolsByCategory = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = []
    }
    acc[tool.category].push(tool)
    return acc
  }, {} as Record<string, typeof tools>)

  return (
    <>
      {/* Hero */}
      <section className="section bg-bg-secondary border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display font-bold text-text-primary mb-4">
              技能体系
            </h1>
            <p className="text-xl text-text-secondary">
              测试能力不是工具的堆砌，而是解决问题的方法论体系
            </p>
          </div>
        </div>
      </section>

      {/* Capability Dimensions */}
      <Section>
        <SectionHeader 
          title="能力维度" 
          subtitle="从能力模型角度理解测试工程师的核心价值"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className={`cursor-pointer transition-all ${
                selectedCategory === category.id 
                  ? 'ring-2 ring-accent border-accent' 
                  : ''
              }`}
              onClick={() => setSelectedCategory(
                selectedCategory === category.id ? null : category.id
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-text-primary">
                  {category.name}
                </h3>
                <span className="text-lg font-bold text-accent">
                  {category.proficiency}%
                </span>
              </div>
              
              <ProgressBar value={category.proficiency} showValue={false} />
              
              <p className="text-sm text-text-secondary mt-4 mb-4">
                {category.description}
              </p>

              {/* Expand on selection */}
              {selectedCategory === category.id && (
                <div className="pt-4 mt-4 border-t border-border animate-fade-in">
                  <h4 className="text-sm font-medium text-text-primary mb-3">
                    具体能力：
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li 
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Tool Skills */}
      <Section className="bg-bg-secondary border-t border-border">
        <SectionHeader 
          title="工具技能" 
          subtitle="工具服务于方法，掌握合适的工具提升工作效率"
        />

        {/* Level Legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.entries(levelLabels).map(([level, label]) => (
            <div key={level} className="flex items-center gap-2">
              <span className={`px-2 py-0.5 text-xs rounded ${levelColors[level as keyof typeof levelColors]}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Tools by Category */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
            <Card key={category} hover={false}>
              <h3 className="font-semibold text-text-primary mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryTools.map((tool) => (
                  <span
                    key={tool.name}
                    className={`px-2.5 py-1 text-sm rounded-lg transition-colors ${
                      levelColors[tool.level]
                    }`}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Philosophy Note */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-xl text-text-secondary italic mb-4">
            &ldquo;工具只是手段，真正的价值在于运用工具解决实际问题的能力。
            持续学习新工具，但更重要的是理解工具背后的方法论。&rdquo;
          </blockquote>
          <p className="text-sm text-text-tertiary">
            —— 对工具学习的理解
          </p>
        </div>
      </Section>
    </>
  )
}
