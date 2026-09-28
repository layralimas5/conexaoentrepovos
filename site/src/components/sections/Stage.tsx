import { useRef, type CSSProperties } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { Silhouette } from '@/components/ui/Silhouette'
import { stage, type MilestoneStatus } from '@/content/site'
import { cn } from '@/lib/cn'

const currentIndex = stage.milestones.findIndex((milestone) => milestone.status === 'current')

/** Quanto do trecho até o próximo marco já foi percorrido: completo antes do atual, metade no atual. */
function segmentFill(index: number) {
  if (index < currentIndex) return 1
  if (index === currentIndex) return 0.5
  return 0
}

const periodStyles: Record<MilestoneStatus, string> = {
  current: 'text-terra-400',
  next: 'text-paper',
  future: 'text-paper/60',
}

export function Stage() {
  const listRef = useRef<HTMLOListElement>(null)
  const reduceMotion = useReducedMotion()
  const inView = useInView(listRef, { once: true, amount: 0.4 })
  const drawn = reduceMotion || inView

  return (
    <Section id="agora" labelledBy="agora-title" className="bg-ink">
      <Silhouette name="passaros" className="top-12 -right-10 w-56 -scale-x-100 opacity-10 sm:w-80" />
      <Reveal>
        <SectionHeading
          id="agora-title"
          eyebrow="Em que fase estamos"
          title="O CEP está nascendo agora"
          description={stage.intro}
        />
      </Reveal>

      <ol ref={listRef} className="mt-10 sm:mt-16 md:grid md:grid-cols-3">
        {stage.milestones.map((milestone, index) => {
          const isCurrent = milestone.status === 'current'
          const reached = index <= currentIndex
          const isLast = index === stage.milestones.length - 1
          const fill = drawn ? segmentFill(index) : 0

          return (
            <li
              key={milestone.period}
              aria-current={isCurrent ? 'step' : undefined}
              className="relative pb-8 pl-10 last:pb-0 sm:pb-12 sm:pl-11 md:pt-14 md:pr-10 md:pb-0 md:pl-0"
            >
              {isLast ? null : (
                <span
                  aria-hidden="true"
                  className="absolute top-3 -bottom-3 left-3 w-px bg-line-strong md:top-3 md:-right-3 md:bottom-auto md:left-3 md:h-px md:w-auto"
                >
                  <span
                    className="block h-full w-full origin-top scale-y-[var(--fill)] bg-terra-400 transition-transform duration-1000 ease-out md:origin-left md:scale-x-[var(--fill)] md:scale-y-100 motion-reduce:transition-none"
                    style={{ '--fill': fill, transitionDelay: `${index * 350}ms` } as CSSProperties}
                  />
                </span>
              )}

              <span
                aria-hidden="true"
                className={cn(
                  'absolute top-0 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-ink',
                  reached ? 'border-terra-400' : 'border-line-strong',
                  isCurrent && 'ring-4 ring-terra-400/20',
                )}
              >
                {reached ? <span className="h-2 w-2 rounded-full bg-terra-400" /> : null}
              </span>

              <Reveal delay={0.12 * index}>
                <div className="flex flex-wrap items-center gap-3">
                  <p className={cn('font-display text-3xl font-light tracking-tight sm:text-4xl', periodStyles[milestone.status])}>
                    {milestone.period}
                  </p>
                  {isCurrent ? (
                    <span className="rounded-full bg-terra-400 px-3 py-1 font-display text-[11px] font-semibold tracking-[0.16em] text-night uppercase">
                      Estamos aqui
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-1 font-display text-lg font-medium text-paper sm:mt-2">{milestone.title}</h3>
                <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
                  {milestone.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-sand">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mata-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          )
        })}
      </ol>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-col items-stretch gap-4 border-t border-line pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:pt-10">
          <p className="font-display text-xl font-light tracking-tight text-paper sm:text-2xl">{stage.callout}</p>
          <LinkButton href="#participe" size="lg">
            Participe da missão
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  )
}
