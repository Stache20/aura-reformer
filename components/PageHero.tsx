interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="pt-40 pb-20 lg:pt-48 lg:pb-24 bg-surface border-b border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {eyebrow && (
          <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-5">{eyebrow}</p>
        )}
        <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
