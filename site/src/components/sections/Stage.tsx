import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { stage, type MilestoneStatus } from '@/content/site'
import { cn } from '@/lib/cn'

const statusStyles: Record<MilestoneStatus, { dot: string; card: string; period: string }> = {
  current: {
    dot: 'bg-terra-400 ring-4 ring-terra-400/25',
    card: 'border-terra-400/60 bg-terra-400/10',
    period: 'text-terra-400',
  },
  next: { dot: 'bg-paper/70', card: 'border-line bg-night/40', period: 'text-paper' },
  future: { dot: 'border border-paper/50 bg-transparent', card: 'border-line bg-night/40', period: 'text-paper/70' },
}

export function Stage() {
  return (
    <Section id="agora" labelledBy="agora-title" className="bg-ink">
      <Reveal>
        <SectionHeading
          id="agora-title"
          eyebrow="Em que fase estamos"
          title="O CEP está nascendo agora"
          description={stage.intro}
        />
      </Reveal>

      <ol className="mt-14 grid gap-5 md:grid-cols-3">
        {stage.milestones.map((milestone, index) => {
          const styles = statusStyles[milestone.status]
          const isCurrent = milestone.status === 'current'
          const isLast = index === stage.milestones.length - 1
          return (
            <Reveal as="li" key={milestone.period} delay={0.1 * index} className="flex flex-col">
              <div className="flex h-6 items-center gap-3" aria-hidden="true">
                <span className={cn('h-3 w-3 shrink-0 rounded-full', styles.dot)} />
                {isLast ? null : <span className="hidden h-px flex-1 bg-line-strong md:block" />}
              </div>

              <article
                aria-current={isCurrent ? 'step' : undefined}
                className={cn('mt-4 flex-1 rounded-[var(--radius-card)] border p-7', styles.card)}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className={cn('font-display text-4xl font-light tracking-tight', styles.period)}>
                    {milestone.period}
                  </p>
                  {isCurrent ? (
                    <span className="rounded-full bg-terra-400 px-3 py-1 font-display text-[11px] font-semibold tracking-[0.16em] text-night uppercase">
                      Estamos aqui
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 font-display text-lg font-medium text-paper">{milestone.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {milestone.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-sand">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mata-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </ol>

      <Reveal delay={0.2}>
        <div className="mt-12 flex flex-col items-start gap-5 rounded-[var(--radius-card)] border border-line p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="font-display text-xl font-light tracking-tight text-paper sm:text-2xl">{stage.callout}</p>
          <LinkButton href="#participe" size="lg">
            Participe da missão
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  )
}
