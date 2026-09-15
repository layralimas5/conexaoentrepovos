import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { method, quote } from '@/content/site'

export function Method() {
  return (
    <Section id="caminho" labelledBy="caminho-title" className="bg-night">
      <Reveal>
        <SectionHeading
          id="caminho-title"
          eyebrow="Metodologia missionária"
          title="O caminho começa por ouvir, não por falar"
          description="Nove passos que se repetem em cada campo. O primeiro movimento é sempre conhecer, aproximar-se e aprender. A pregação vem depois do relacionamento."
        />
      </Reveal>

      <ol className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {method.steps.map((step, index) => (
          <Reveal as="li" key={step.name} delay={0.05 * index}>
            <div className="flex gap-4">
              <span className="font-display text-sm tracking-[0.2em] text-terra-400 tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-lg font-medium tracking-tight text-paper">{step.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-sand text-pretty">{step.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {method.plan.map((phase, index) => (
          <Reveal key={phase.period} delay={0.1 * index}>
            <article className="h-full rounded-[var(--radius-card)] border border-line bg-ink p-8">
              <p className="font-display text-4xl font-light tracking-tight text-terra-400 sm:text-5xl">
                {phase.period}
              </p>
              <h3 className="mt-3 font-display text-lg font-medium text-paper">{phase.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-sand">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mata-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <blockquote className="mx-auto mt-20 max-w-3xl text-center">
          <p className="font-display text-xl leading-snug font-light text-paper text-balance sm:text-2xl lg:text-3xl">
            “{quote.text}”
          </p>
          <footer className="mt-5 font-display text-xs tracking-[0.26em] text-terra-400 uppercase">
            {quote.author}
          </footer>
        </blockquote>
      </Reveal>
    </Section>
  )
}
