import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { fronts } from '@/content/site'

export function Fronts() {
  return (
    <Section id="frentes" labelledBy="frentes-title" className="bg-ink">
      <Reveal>
        <SectionHeading
          id="frentes-title"
          eyebrow="O que fazemos"
          title="Treinar. Plantar. Servir."
          description="Três frentes que caminham juntas. Proclamação e serviço não se separam: uma sem a outra não é a missão que o CEP entende como bíblica."
          align="center"
        />
      </Reveal>

      <ol className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-3">
        {fronts.map((front, index) => (
          <Reveal as="li" key={front.id} delay={0.1 * index} className="bg-ink">
            <article className="flex h-full flex-col p-8 sm:p-10">
              <span className="font-display text-xs tracking-[0.28em] text-paper/45">
                0{index + 1}
              </span>
              <h3 className="mt-6 font-display text-3xl font-light tracking-tight text-paper sm:text-4xl">
                {front.verb}
              </h3>
              <p className="mt-2 font-display text-sm font-semibold text-terra-400">{front.title}</p>
              <p className="mt-5 text-sm leading-relaxed text-sand text-pretty sm:text-base">
                {front.text}
              </p>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
