import { Container } from '@/components/ui/Container'
import { InstagramIcon, MailIcon, WhatsAppIcon } from '@/components/ui/icons'
import { identity, ministry, navLinks } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'

const developerUrl = 'https://limadigitalstudio.com.br'

function IdentityBand() {
  return (
    <section aria-label="Identidade do ministério" className="grid gap-8 border-b border-line pb-12 sm:grid-cols-2 lg:grid-cols-4">
      {identity.statements.map((statement) => (
        <div key={statement.title}>
          <h2 className="font-display text-xs font-semibold tracking-[0.22em] text-terra-400 uppercase">
            {statement.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-sand text-pretty">{statement.text}</p>
        </div>
      ))}
      <div>
        <h2 className="font-display text-xs font-semibold tracking-[0.22em] text-terra-400 uppercase">Valores</h2>
        <ul className="mt-3 space-y-2">
          {identity.values.map((value) => (
            <li key={value} className="text-sm leading-relaxed text-sand">
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-mata-950">
      <Container className="py-14">
        <IdentityBand />
        <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src="/img/logo-branca.png"
              alt={`Logo ${ministry.name}`}
              width={1687}
              height={949}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand">
              {ministry.tagline}. Entre povos indígenas, sertanejos e ribeirinhos do Brasil.
            </p>
            <p className="mt-4 font-display text-xs tracking-[0.28em] text-terra-400 uppercase">
              {ministry.motto.join(' · ')}
            </p>
          </div>

          <nav aria-label="Rodapé">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-paper/60 uppercase">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-sand transition-colors hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-paper/60 uppercase">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sand transition-colors hover:text-paper"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={ministry.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-sand transition-colors hover:text-paper"
                >
                  <InstagramIcon className="h-4 w-4" /> {ministry.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${ministry.email}`}
                  className="inline-flex items-center gap-2 text-sm text-sand transition-colors hover:text-paper"
                >
                  <MailIcon className="h-4 w-4" /> {ministry.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {ministry.name}. {ministry.city}.
          </p>
          <p>
            Desenvolvido por{' '}
            <a
              href={developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand transition-colors hover:text-paper"
            >
              Layra Lima
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
