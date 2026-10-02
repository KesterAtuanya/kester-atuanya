import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Certifications } from '@/components/portfolio/certifications'
import { Education } from '@/components/portfolio/education'
import { Contact } from '@/components/portfolio/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-navy px-5 py-6 text-center text-sm text-navy-foreground/60">
        {'© 2026 Kester Atuanya'}
      </footer>
    </>
  )
}
