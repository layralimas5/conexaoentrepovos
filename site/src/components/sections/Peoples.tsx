import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Silhouette } from '@/components/ui/Silhouette'
import { peoples, type PeopleAccent } from '@/content/site'
import { cn } from '@/lib/cn'

const accentStyles: Record<PeopleAccent, { bar: string; label: string; glow: string }> = {
  mata: { bar: 'bg-mata-400', label: 'text-mata-200', glow: 'from-mata-950' },
  terra: { bar: 'bg-terra-400', label: 'text-terra-200', glow: 'from-terra-900' },
  rio: { bar: 'bg-rio-500', label: 'text-rio-200', glow: 'from-rio-950' },
}

export function Peoples() {
  return (
    <Section id="povos" labelledBy="povos-title" className="bg-night">
      <Silhouette name="passaros" className="top-16 -right-8 w-64 opacity-10 sm:w-96" />
      <Reveal>
        <SectionHeading
          id="povos-title"
          eyebrow="Para quem"
          title="Indígenas, sertanejos e ribeirinhos"
          description="Três campos prioritários, e nenhum deles é homogêneo. Cada povo tem identidade, história e forma própria de viver, por isso cada aproximação parte de escuta, pesquisa e relacionamento."
        />
      </Reveal>

      <ul className="mt-16 grid gap-6 md:grid-cols-3">
        {peoples.map((people, index) => {
          const accent = accentStyles[people.accent]
          return (
            <Reveal as="li" key={people.id} delay={0.1 * index}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-ink">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={people.image}
                    alt={people.imageAlt}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div
                    className={cn('absolute inset-0 bg-gradient-to-t via-transparent to-transparent', accent.glow)}
                    aria-hidden="true"
                  />
                  <img
                    src={people.sublogo}
                    alt=""
                    width={666}
                    height={375}
                    loading="lazy"
                    className="absolute bottom-4 left-4 h-14 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:h-16"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span className={cn('h-0.5 w-10 rounded-full', accent.bar)} aria-hidden="true" />
                  <h3 className={cn('mt-5 font-display text-xl font-medium tracking-tight', accent.label)}>
                    {people.name}
                  </h3>
                  <p className="mt-1 font-display text-xs tracking-[0.18em] text-paper/60 uppercase">
                    {people.region}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-sand text-pretty sm:text-base">
                    {people.description}
                  </p>
                </div>
              </article>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
