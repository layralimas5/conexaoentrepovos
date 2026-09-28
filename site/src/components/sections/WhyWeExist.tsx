import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Silhouette } from '@/components/ui/Silhouette'
import { why } from '@/content/site'

export function WhyWeExist() {
  return (
    <Section id="porque" labelledBy="porque-title" className="bg-white">
      <Silhouette name="indigena" tone="terra" className="right-6 bottom-12 w-32 opacity-15 sm:right-16 sm:w-44" />
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading id="porque-title" eyebrow="Por que existe" title={why.title} tone="light" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">{why.lead}</p>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="font-display text-xs font-semibold tracking-[0.24em] text-night/60 uppercase">
              {why.barriersLabel}
            </p>
          </Reveal>
          <ol className="mt-5 flex flex-col gap-4">
            {why.barriers.map((barrier, index) => (
              <Reveal as="li" key={barrier.title} delay={0.1 * index}>
                <article className="flex gap-5 rounded-[var(--radius-card)] border border-night/10 bg-paper p-6 sm:p-7">
                  <span className="font-display text-sm tracking-[0.2em] text-terra-900 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-tight text-night">{barrier.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft text-pretty sm:text-base">
                      {barrier.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>

      <Reveal delay={0.1}>
        <figure className="mt-16 max-w-3xl border-l-2 border-terra-700 pl-6 sm:mt-24 sm:pl-8">
          <figcaption className="font-display text-xs font-semibold tracking-[0.24em] text-terra-900 uppercase">
            {why.stanceLabel}
          </figcaption>
          <blockquote className="mt-4">
            <p className="font-display text-2xl leading-snug font-light tracking-tight text-night text-balance sm:text-3xl">
              {why.stance}
            </p>
          </blockquote>
        </figure>
      </Reveal>
    </Section>
  )
}
