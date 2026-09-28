import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Silhouette } from '@/components/ui/Silhouette'
import { Timeline, TimelineItem } from '@/components/ui/Timeline'
import { fronts } from '@/content/site'

export function Fronts() {
  return (
    <Section id="frentes" labelledBy="frentes-title" className="bg-ink">
      <Silhouette name="sertanejo" className="top-[24rem] right-[6%] hidden w-64 opacity-10 md:block" />
      <Silhouette name="capim" className="bottom-0 left-0 w-full opacity-10" />
      <Reveal>
        <SectionHeading
          id="frentes-title"
          eyebrow="O que fazemos"
          title="Treinar. Plantar. Servir."
          description="Três frentes que caminham juntas. Proclamação e serviço não se separam: uma sem a outra não é a missão que o CEP entende como bíblica."
          align="center"
        />
      </Reveal>

      <Timeline surfaceColor="var(--color-ink)" className="mt-10 sm:mt-16">
        {fronts.map((front, index) => (
          <TimelineItem key={front.id} index={index}>
            <article className="rounded-[var(--radius-card)] border border-line bg-night/40 p-5 sm:p-10">
              <span className="font-display text-xs tracking-[0.28em] text-paper/55">0{index + 1}</span>
              <h3 className="mt-2 font-display text-[1.625rem] leading-tight font-light tracking-tight text-paper sm:mt-4 sm:text-4xl">
                {front.verb}
              </h3>
              <p className="mt-1 font-display text-sm font-semibold text-terra-400 sm:mt-2">{front.title}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-sand text-pretty sm:mt-5 sm:text-base">{front.text}</p>
            </article>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  )
}
