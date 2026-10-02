import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('scroll-mt-20 px-5 py-16 md:py-24', className)}
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-ring">
          {eyebrow}
        </p>
        <h2
          id={headingId}
          className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  )
}
