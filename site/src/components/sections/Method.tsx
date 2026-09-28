import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Timeline, TimelineItem } from '@/components/ui/Timeline'
import { methodPhases, quote } from '@/content/site'

const phaseOffsets = methodPhases.map((_, index) =>
  methodPhases.slice(0, index).reduce((total, phase) => total + phase.steps.length, 0),
)

export function Method() {
  return (
    <Section id="caminho" labelledBy="caminho-title" className="bg-night">
      <Reveal>
        <SectionHeading
          id="caminho-title"
          eyebrow="Como chegamos"
          title="O caminho começa por ouvir, não por falar"
          description="As frentes dizem o que o CEP faz. Estes nove passos dizem como ele chega a cada comunidade, em três fases. A pregação vem depois do relacionamento."
          align="center"
        />
      </Reveal>

      <Timeline surfaceColor="var(--color-night)" className="mt-16">
        {methodPhases.map((phase, phaseIndex) => {
          const offset = phaseOffsets[phaseIndex] ?? 0
          return (
            <TimelineItem key={phase.id} index={phaseIndex}>
              <article className="rounded-[var(--radius-card)] border border-line bg-ink p-7 sm:p-8">
                <header>
                  <p className="font-display text-xs tracking-[0.28em] text-paper/55 uppercase">
                    Fase {phaseIndex + 1}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-light tracking-tight text-paper">{phase.title}</h3>
                  <p className="mt-2 text-sm text-terra-200">{phase.summary}</p>
                </header>

                <ol start={offset + 1} className="mt-7 space-y-5 border-t border-line pt-6">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={step.name} className="flex gap-4">
                      <span className="pt-1 font-display text-xs tracking-[0.2em] text-terra-400 tabular-nums">
                        {String(offset + stepIndex + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="font-display text-lg font-medium tracking-tight text-paper">{step.name}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-sand text-pretty">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            </TimelineItem>
          )
        })}
      </Timeline>

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
