interface Props {
  children: React.ReactNode
  color?: 'cyan' | 'purple' | 'orange'
}

export default function SectionLabel({ children, color = 'cyan' }: Props) {
  const colors: Record<string, { text: string; border: string }> = {
    cyan:   { text: '#00FFD1', border: 'rgba(0,255,209,0.4)' },
    purple: { text: '#BF00FF', border: 'rgba(191,0,255,0.4)' },
    orange: { text: '#FF6B00', border: 'rgba(255,107,0,0.4)' },
  }
  const c = colors[color] || colors.cyan
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-6 h-px" style={{ background: c.text }} />
      <span
        className="font-mono text-xs tracking-[0.25em] uppercase"
        style={{ fontFamily: 'JetBrains Mono', color: c.text }}
      >
        {children}
      </span>
      <div className="w-6 h-px" style={{ background: c.border }} />
    </div>
  )
}