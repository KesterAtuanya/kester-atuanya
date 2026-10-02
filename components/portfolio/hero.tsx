import { ArrowDown, MapPin, Mail } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="bg-navy px-5 pb-20 pt-16 text-navy-foreground md:pb-28 md:pt-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs text-navy-foreground/80">
          <MapPin className="size-3.5 text-accent" aria-hidden="true" />
          {profile.location}
        </p>
        <h1
          id="hero-heading"
          className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          {profile.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-accent md:text-xl">{profile.title}</p>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-navy-foreground/80 md:text-lg">
          {profile.tagline}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View my projects
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/25 px-5 text-sm font-semibold transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}
