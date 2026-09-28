import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { CloseIcon, MenuIcon } from '@/components/ui/icons'
import { ministry, navLinks } from '@/content/site'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/cn'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(24)
  const reduceMotion = useReducedMotion()
  const menuId = useId()
  const lifted = scrolled || menuOpen

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300',
        lifted ? 'border-b border-line bg-night/85 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <a href="#inicio" className="flex items-center gap-3" aria-label={`${ministry.name}, ir para o início`}>
          <img
            src="/img/logo-branca.png"
            alt=""
            width={1687}
            height={949}
            className="h-8 w-auto object-contain sm:h-10"
          />
          <span className="hidden text-[11px] leading-snug font-display font-medium tracking-[0.18em] text-sand uppercase sm:block">
            Conexão Entre
            <br />
            os Povos
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-paper/75 transition-colors hover:bg-paper/5 hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <LinkButton href="#participe">Participe</LinkButton>
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-paper transition-colors hover:bg-paper/5 lg:hidden"
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id={menuId}
            key="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line bg-night lg:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-line py-3.5 font-display text-base font-medium text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <LinkButton
                href="#participe"
                size="lg"
                className="mt-5 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Participe da missão
              </LinkButton>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
