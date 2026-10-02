import { navLinks, profile } from '@/lib/portfolio-data'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 text-navy-foreground backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5"
      >
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          {'KC'}
          <span className="text-accent">.</span>
          <span className="sr-only">{profile.shortName}, back to top</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm text-navy-foreground/75 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 md:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
