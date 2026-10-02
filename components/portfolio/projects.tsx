import { ExternalLink } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { Section } from './section'

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 / Projects" title="Things I've built">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 items-center justify-center gap-2 self-start rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View on GitHub
              <ExternalLink className="size-4" aria-hidden="true" />
              <span className="sr-only">: {project.name} (opens in a new tab)</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
