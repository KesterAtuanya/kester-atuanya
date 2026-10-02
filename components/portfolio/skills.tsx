import { skillGroups } from '@/lib/portfolio-data'
import { Section } from './section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="01 / Skills" title="What I work with">
      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="rounded-lg border border-border bg-card p-5">
            <h3 className="text-sm font-semibold">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
