import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
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
        />
      </Reveal>

      <ol className="mt-14 grid gap-5 lg:grid-cols-3">
        {methodPhases.map((phase, phaseIndex) => {
          const offset = phaseOffsets[phaseIndex] ?? 0
          return (
            <Reveal as="li" key={phase.id} delay={0.1 * phaseIndex}>
              <article className="h-full rounded-[var(--radius-card)] border border-line bg-ink p-7 sm:p-8">
                <header>
                  <p className="font-display text-xs tracking-[0.28em] text-paper/55 uppercase">
                    Fase {phaseIndex + 1}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-light tracking-tight text-paper">{phase.title}</h3>
                  <p className="mt-2 text-sm text-terra-200">{phase.summary}</p>
                </header>

                <ol start={offset + 1} className="mt-7 space-y-5 border-l border-line-strong pl-5">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={step.name} className="relative">
                      <span
                        className="absolute top-2 -left-[23.5px] h-2 w-2 rounded-full bg-terra-400"
                        aria-hidden="true"
                      />
                      <p className="font-display text-[11px] tracking-[0.22em] text-terra-400 tabular-nums">
                        {String(offset + stepIndex + 1).padStart(2, '0')}
                      </p>
                      <h4 className="mt-0.5 font-display text-lg font-medium tracking-tight text-paper">{step.name}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-sand text-pretty">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          )
        })}
      </ol>

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
