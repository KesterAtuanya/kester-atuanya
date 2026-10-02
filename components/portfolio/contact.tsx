import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { CopyEmailButton } from './copy-email-button'

const links = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
]

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 bg-navy px-5 py-16 text-navy-foreground md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          06 / Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl"
        >
          {"Let's talk about your ServiceNow team"}
        </h2>
        <p className="mt-3 max-w-xl text-pretty text-navy-foreground/75">
          Open to senior ServiceNow developer and engineer roles. The fastest way to reach me is
          email.
        </p>

        <div className="mt-8 flex max-w-xl items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/5 p-3 pl-4">
          <div className="flex min-w-0 items-center gap-3">
            <Mail className="size-5 shrink-0 text-accent" aria-hidden="true" />
            <span className="sr-only">Email:</span>
            <span className="truncate font-mono text-sm md:text-base">{profile.email}</span>
          </div>
          <CopyEmailButton email={profile.email} />
        </div>

        <ul className="mt-4 flex flex-col gap-3 sm:flex-row">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-white/25 px-5 text-sm font-semibold transition-colors hover:bg-white/10 sm:w-auto"
              >
                {link.label}
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
