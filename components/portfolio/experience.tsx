import { experience } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Section } from './section'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 / Experience"
      title="Where I've built"
      className="bg-secondary/60"
    >
      <ol className="relative ml-2 border-l border-border">
        {experience.map((job) => (
          <li key={job.company} className="relative pb-10 pl-7 last:pb-0">
            <span
              aria-hidden="true"
              className={cn(
                'absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-background',
                job.current ? 'bg-accent ring-4 ring-accent/25' : 'bg-primary',
              )}
            />
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {job.period}
            </p>
            <h3 className="mt-1.5 text-lg font-semibold">{job.role}</h3>
            <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{job.company}</span>
              <span aria-hidden="true">·</span>
              <span>{job.location}</span>
              {job.type ? (
                <span className="rounded-full border border-border px-2 py-0.5 text-xs">
                  {job.type}
                </span>
              ) : null}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
