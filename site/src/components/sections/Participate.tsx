import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Silhouette } from '@/components/ui/Silhouette'
import { ActionButton, LinkButton } from '@/components/ui/Button'
import { ArrowRightIcon, CheckIcon, CopyIcon, WhatsAppIcon } from '@/components/ui/icons'
import { ministry, participationGroups, type Participation } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { cn } from '@/lib/cn'

function PixCta({ label }: { label: string }) {
  const { state, copy } = useCopyToClipboard()
  const copied = state === 'copied'

  return (
    <div className="mt-6">
      <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-paper/55 uppercase">Chave Pix</p>
      <p className="mt-1 truncate font-mono text-sm text-paper" title={ministry.pix.key}>
        {ministry.pix.key}
      </p>
      <p className="text-xs text-sand">{ministry.pix.holder}</p>
      <ActionButton onClick={() => void copy(ministry.pix.key)} className="mt-4 w-full" aria-live="polite">
        {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
        {copied ? 'Chave copiada' : state === 'error' ? 'Não deu pra copiar' : label}
      </ActionButton>
    </div>
  )
}

function ParticipationCta({ item }: { item: Participation }) {
  if (item.kind === 'pix') return <PixCta label={item.ctaLabel} />

  return (
    <LinkButton
      href={whatsappLink(item.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      className="mt-6 w-full"
    >
      <WhatsAppIcon className="h-4 w-4" />
      {item.ctaLabel}
    </LinkButton>
  )
}

export function Participate() {
  return (
    <Section id="participe" labelledBy="participe-title" className="grain bg-night">
      <Silhouette name="peixes" className="top-16 -right-10 w-64 opacity-15 sm:w-80" />
      <Silhouette name="indigena" className="bottom-10 left-4 w-24 opacity-10 sm:left-10 sm:w-32" />
      <Reveal>
        <SectionHeading
          id="participe-title"
          eyebrow="Como participar"
          title="A missão pertence a Deus. A gente participa dela."
          description="Nenhuma forma é menor que a outra: quem ora sustenta tanto quanto quem vai."
          align="center"
        />
      </Reveal>

      <div className="mt-16 space-y-16">
        {participationGroups.map((group) => (
          <section key={group.id} aria-labelledby={`participe-${group.id}`}>
            <Reveal>
              <header className="flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
                <h3 id={`participe-${group.id}`} className="font-display text-2xl font-light tracking-tight text-paper">
                  {group.title}
                </h3>
                <p className="text-sm text-sand">{group.text}</p>
              </header>
            </Reveal>

            <ul
              className={cn(
                'mt-6 grid gap-5 sm:grid-cols-2',
                group.items.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2',
              )}
            >
              {group.items.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.id}
                  delay={0.08 * index}
                  className={item.kind === 'pix' ? 'sm:col-span-2 lg:col-span-1' : undefined}
                >
                  <article
                    className={cn(
                      'flex h-full flex-col rounded-[var(--radius-card)] border bg-night/60 p-7 backdrop-blur-sm transition-colors',
                      item.kind === 'pix' ? 'border-terra-400/50' : 'border-line hover:border-line-strong',
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display text-2xl font-light tracking-tight text-paper">{item.title}</h4>
                      <ArrowRightIcon className="h-5 w-5 text-terra-400" />
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-sand text-pretty sm:text-base">{item.text}</p>
                    <ParticipationCta item={item} />
                  </article>
                </Reveal>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  )
}
