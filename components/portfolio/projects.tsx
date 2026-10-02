import Image from 'next/image'
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
            className="flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
          >
            <div className="border-b border-border bg-muted">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.imageAlt}
                width={1280}
                height={900}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm leading-relaxed">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
