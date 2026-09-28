import { Container } from '@/components/ui/Container'
import { Silhouette } from '@/components/ui/Silhouette'
import { WhatsAppIcon } from '@/components/ui/icons'
import { ministry, navLinks } from '@/content/site'
import { whatsappLink } from '@/lib/whatsapp'
import { IdentityTabs } from '@/components/layout/IdentityTabs'

const developerUrl = 'https://limadigitalstudio.com.br'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="grain relative isolate overflow-hidden border-t border-line bg-night">
      <Silhouette name="capim" className="bottom-0 left-0 w-full opacity-[0.08]" />
      <Container className="py-10 sm:py-14">
        <IdentityTabs />
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-10 sm:gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <img
              src="/img/logo-branca.png"
              alt={`Logo ${ministry.name}`}
              width={1687}
              height={949}
              className="h-11 w-auto sm:h-14"
            />
            <p className="mt-4 max-w-sm sm:mt-5 text-sm leading-relaxed text-sand">
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
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 sm:mt-12 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
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
