import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { Section } from './section'

export function Education() {
  return (
    <Section id="education" eyebrow="05 / Education" title="Education">
      <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-navy text-accent">
          <GraduationCap className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-semibold">{education.degree}</h3>
          <p className="text-sm text-muted-foreground">{education.school}</p>
        </div>
      </div>
    </Section>
  )
}
