'use client'

import { useEffect, useState } from 'react'

interface ProgressBarProps {
  value: number
  label?: string
  showValue?: boolean
}

export default function ProgressBar({ value, label, showValue = true }: ProgressBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 100)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="space-y-2">
      {(label || showValue) && (
        <div className="flex items-center justify-between text-sm">
          {label && <span className="font-medium text-text-primary">{label}</span>}
          {showValue && <span className="text-text-tertiary">{value}%</span>}
        </div>
      )}
      <div className="h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
