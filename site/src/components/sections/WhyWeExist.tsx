import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Silhouette, type SilhouetteName } from '@/components/ui/Silhouette'
import { why } from '@/content/site'
import { cn } from '@/lib/cn'

/** Cada figura tem proporção própria; aqui ela fica atrás do número, no alto à direita. */
const figurePlacement: Partial<Record<SilhouetteName, string>> = {
  peixes: 'right-0 top-4 w-52',
  sertanejo: 'right-0 -top-4 w-44',
  indigena: 'right-6 -top-4 w-24',
}

export function WhyWeExist() {
  return (
    <Section id="porque" labelledBy="porque-title" className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20">
        <Reveal>
          <SectionHeading id="porque-title" eyebrow="Por que existe" title={why.title} tone="light" />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">{why.lead}</p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-16 font-display text-xs font-semibold tracking-[0.24em] text-night/60 uppercase sm:mt-20">
          {why.barriersLabel}
        </p>
      </Reveal>

      <ol className="mt-8 grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
        {why.barriers.map((barrier, index) => (
          <Reveal as="li" key={barrier.title} delay={0.1 * index}>
            <article className="relative isolate flex h-full flex-col">
              <Silhouette
                name={barrier.figure}
                tone="terra"
                className={cn('opacity-[0.08]', figurePlacement[barrier.figure])}
              />
              <span className="font-display text-7xl leading-none font-light tracking-tight text-mata-800 tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mt-6 h-0.5 w-12 rounded-full bg-mata-400" aria-hidden="true" />
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-night">{barrier.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft text-pretty sm:text-base">{barrier.text}</p>
            </article>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <figure className="relative isolate mt-16 overflow-hidden sm:mt-20 rounded-[var(--radius-card)] bg-night px-7 py-12 sm:px-12 sm:py-14 lg:px-16">
          <Silhouette name="passaros" className="top-5 right-5 w-40 opacity-10 sm:w-56" />
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
            <div>
              <figcaption className="font-display text-xs font-semibold tracking-[0.24em] text-terra-400 uppercase">
                {why.stanceLabel}
              </figcaption>
              <blockquote className="mt-5">
                <p className="font-display text-2xl leading-snug font-light tracking-tight text-paper text-balance sm:text-3xl">
                  {why.stance}…
                </p>
              </blockquote>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-5">
              {why.stanceVerbs.map((verb) => (
                <li key={verb} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-terra-400" aria-hidden="true" />
                  <span className="font-display text-xl font-medium tracking-tight text-terra-200 capitalize sm:text-2xl">
                    {verb}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </figure>
      </Reveal>
    </Section>
  )
}
