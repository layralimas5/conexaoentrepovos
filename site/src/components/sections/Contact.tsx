import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Silhouette } from '@/components/ui/Silhouette'
import { InstagramIcon, MailIcon, WhatsAppIcon } from '@/components/ui/icons'
import { ministry, verses } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'

const channels = [
  {
    label: 'WhatsApp',
    value: 'Falar com a Kamilly',
    href: whatsappLink(),
    Icon: WhatsAppIcon,
    external: true,
  },
  {
    label: 'Instagram',
    value: ministry.instagramHandle,
    href: ministry.instagram,
    Icon: InstagramIcon,
    external: true,
  },
  {
    label: 'E-mail',
    value: ministry.email,
    href: `mailto:${ministry.email}`,
    Icon: MailIcon,
    external: false,
  },
] as const

export function Contact() {
  return (
    <Section id="contato" labelledBy="contato-title" className="bg-white">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="min-w-0">
          <Reveal>
            <SectionHeading
              id="contato-title"
              eyebrow="Contato"
              title="Vamos conversar sobre a missão"
              description="Igrejas, mantenedores, vocacionados e voluntários: o primeiro passo é uma conversa. Escolhe o canal que preferir."
              tone="light"
            />
          </Reveal>

          <ul className="mt-10 space-y-3">
            {channels.map(({ label, value, href, Icon, external }, index) => (
              <Reveal as="li" key={label} delay={0.08 * index}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex min-w-0 items-center gap-4 rounded-[var(--radius-card)] border border-night/10 bg-paper p-5 transition-colors hover:border-terra-700"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-night/15 text-terra-900 transition-colors group-hover:border-terra-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[11px] font-semibold tracking-[0.22em] text-night/60 uppercase">
                      {label}
                    </span>
                    <span className="block truncate text-base text-night">{value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.15} className="min-w-0">
          <div className="grain relative isolate h-full overflow-hidden rounded-[var(--radius-card)] bg-night p-8 sm:p-10">
            <Silhouette name="peixes" className="right-0 bottom-6 w-2/3 opacity-15" />
            <p className="font-display text-xs font-semibold tracking-[0.26em] text-terra-400 uppercase">
              Fundamento bíblico
            </p>
            <ul className="mt-6 space-y-6">
              {verses.map((verse) => (
                <li key={verse.ref}>
                  <p className="font-display text-lg leading-snug font-light text-paper sm:text-xl">
                    “{verse.text}”
                  </p>
                  <p className="mt-1.5 text-xs tracking-[0.2em] text-sand uppercase">{verse.ref}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
