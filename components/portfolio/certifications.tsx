'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Award, Expand, X } from 'lucide-react'
import { certifications, type Certification } from '@/lib/portfolio-data'
import { Section } from './section'

export function Certifications() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState<Certification | null>(null)

  function open(cert: Certification) {
    setActive(cert)
    dialogRef.current?.showModal()
  }

  function close() {
    dialogRef.current?.close()
  }

  return (
    <Section
      id="certifications"
      eyebrow="04 / Certifications"
      title="ServiceNow certified"
      className="bg-secondary/60"
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <li
            key={cert.number}
            className="flex flex-col rounded-lg border border-border bg-card p-5"
          >
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-navy text-accent">
                <Award className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs font-semibold text-ring">{cert.short}</p>
                <h3 className="mt-0.5 text-pretty font-semibold leading-snug">{cert.name}</h3>
              </div>
            </div>
            <dl className="mt-4 grid flex-1 grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Issued</dt>
                <dd className="font-medium">{cert.issued}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Certification No.</dt>
                <dd className="font-mono font-medium">{cert.number}</dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={() => open(cert)}
              className="mt-5 inline-flex h-9 items-center justify-center gap-2 self-start rounded-md border border-border px-3.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Expand className="size-4" aria-hidden="true" />
              View certificate
              <span className="sr-only">: {cert.short}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={active ? `${active.name} certificate` : 'Certificate'}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
        onClose={() => setActive(null)}
        className="m-auto w-[min(64rem,calc(100vw-1.5rem))] max-w-none bg-transparent p-0 backdrop:bg-navy/85 backdrop:backdrop-blur-sm"
      >
        {active ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4 text-navy-foreground">
              <p className="text-pretty text-sm font-medium">{active.name}</p>
              <button
                type="button"
                onClick={close}
                autoFocus
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-white/20"
              >
                <X className="size-5" aria-hidden="true" />
                <span className="sr-only">Close certificate</span>
              </button>
            </div>
            <Image
              src={active.image}
              alt={`${active.name} certificate issued to Kester Atuanya on ${active.issued}, certification number ${active.number}`}
              width={1324}
              height={931}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-auto w-full rounded-lg"
            />
          </div>
        ) : null}
      </dialog>
    </Section>
  )
}
