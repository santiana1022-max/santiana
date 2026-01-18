'use client'

import { useState } from 'react'
import { Mail, Github, ExternalLink, Copy, Check, MessageCircle } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import profile from '@/content/profile.json'

export default function ContactContent() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const copyToClipboard = async (text: string, itemName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(itemName)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const contactItems = [
    {
      id: 'email',
      icon: Mail,
      label: '电子邮箱',
      value: profile.contact.email,
      description: '工作日 24 小时内回复',
      action: 'copy',
      href: `mailto:${profile.contact.email}`,
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: profile.contact.github.replace('https://', ''),
      description: '查看我的开源项目与代码',
      action: 'link',
      href: profile.contact.github,
    },
    {
      id: 'blog',
      icon: ExternalLink,
      label: '技术博客',
      value: profile.contact.blog.replace('https://', ''),
      description: '测试工程化实践与思考',
      action: 'link',
      href: profile.contact.blog,
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="section bg-bg-secondary border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display font-bold text-text-primary mb-4">
              联系方式
            </h1>
            <p className="text-xl text-text-secondary">
              期待与您交流测试工程化、质量保障相关的话题
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-4 mb-12">
            {contactItems.map((item) => {
              const Icon = item.icon
              const isCopied = copiedItem === item.id

              return (
                <Card key={item.id} className="group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent-muted flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <Icon size={24} className="text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-text-primary mb-0.5">
                        {item.label}
                      </h3>
                      <p className="text-sm text-text-secondary truncate">
                        {item.value}
                      </p>
                      <p className="text-xs text-text-tertiary mt-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.action === 'copy' && (
                        <button
                          onClick={() => copyToClipboard(item.value, item.id)}
                          className="p-2 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent-muted transition-colors"
                          aria-label="复制"
                        >
                          {isCopied ? (
                            <Check size={18} className="text-green-500" />
                          ) : (
                            <Copy size={18} />
                          )}
                        </button>
                      )}
                      <a
                        href={item.href}
                        target={item.action === 'link' ? '_blank' : undefined}
                        rel={item.action === 'link' ? 'noopener noreferrer' : undefined}
                        className="p-2 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent-muted transition-colors"
                        aria-label={item.action === 'link' ? '打开链接' : '发送邮件'}
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* WeChat Section */}
          <Card hover={false} className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={32} className="text-accent" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">
              微信联系
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              添加微信请备注来意，如：技术交流 / 内推咨询 / 合作洽谈
            </p>
            <div className="inline-block bg-bg-tertiary rounded-lg p-4">
              <div className="w-32 h-32 bg-bg-primary rounded flex items-center justify-center text-text-tertiary text-sm">
                {/* Placeholder for QR code */}
                <span className="text-center">
                  微信号：<br />
                  <span className="font-mono text-accent">{profile.contact.wechat}</span>
                </span>
              </div>
            </div>
          </Card>

          {/* Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-text-tertiary">
              无论是技术交流、职位内推还是合作机会，都欢迎联系。<br />
              期待与志同道合的测试同行建立连接。
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
