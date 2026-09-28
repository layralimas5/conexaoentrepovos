import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { CheckIcon } from '@/components/ui/icons'
import { about } from '@/content/site'

export function About() {
  return (
    <Section id="sobre" labelledBy="sobre-title" className="bg-white">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading id="sobre-title" eyebrow="Sobre o CEP" title={about.title} tone="light" />
          </Reveal>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.08 * (index + 1)}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25} className="mt-10">
            <p className="font-display text-xs font-semibold tracking-[0.24em] text-night/60 uppercase">
              Valores
            </p>
            <ul className="mt-4 space-y-3">
              {about.values.map((value) => (
                <li key={value} className="flex items-start gap-3 text-sm text-ink-soft sm:text-base">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-mata-800" />
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ul className="flex flex-col gap-4">
          {about.pillars.map((pillar, index) => (
            <Reveal as="li" key={pillar.title} delay={0.1 * index}>
              <article className="rounded-[var(--radius-card)] border border-night/10 bg-paper p-7 transition-colors hover:border-night/25">
                <h3 className="font-display text-sm font-semibold tracking-[0.22em] text-terra-900 uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
