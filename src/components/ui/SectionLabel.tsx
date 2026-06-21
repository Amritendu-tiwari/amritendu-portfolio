interface Props { children: React.ReactNode }

export default function SectionLabel({ children }: Props) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono-code text-xs text-amber tracking-[0.2em] uppercase">{children}</span>
      <span className="block w-12 h-px bg-border" />
    </div>
  )
}
