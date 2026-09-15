import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { ArrowDownIcon } from '@/components/ui/icons'
import { hero, ministry } from '@/content/site'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        }

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="grain relative isolate flex min-h-svh items-center overflow-hidden bg-night pt-24 pb-20"
    >
      <img
        src="/img/hero-rio.jpg"
        alt=""
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-45"
      />
      <div className="brand-gradient absolute inset-0 -z-20 opacity-35 mix-blend-multiply" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(14,23,25,0.35)_20%,var(--color-night)_90%)]"
        aria-hidden="true"
      />

      <img
        src="/img/passaros-branco.png"
        alt=""
        width={720}
        height={353}
        className="pointer-events-none absolute top-24 right-[-6%] -z-10 w-[46vw] max-w-md opacity-20 sm:right-[4%]"
      />
      <img
        src="/img/capim-branco.png"
        alt=""
        width={3292}
        height={300}
        className="pointer-events-none absolute bottom-0 left-0 -z-10 w-full opacity-25"
      />

      <Container className="text-center">
        <motion.p
          {...reveal(0)}
          className="font-display text-xs font-semibold tracking-[0.32em] text-terra-200 uppercase"
        >
          {ministry.tagline}
        </motion.p>

        <motion.div {...reveal(0.1)} className="mx-auto mt-8 w-[min(78vw,30rem)]">
          <img
            src="/img/logo-branca.png"
            alt={`Logo ${ministry.name}`}
            width={1687}
            height={949}
            fetchPriority="high"
            className="mx-auto h-auto w-full"
          />
        </motion.div>

        <motion.h1
          id="hero-title"
          {...reveal(0.2)}
          className="mt-6 flex flex-col items-center gap-1 font-display text-3xl font-light tracking-[0.18em] text-paper uppercase sm:flex-row sm:justify-center sm:gap-0 sm:text-4xl lg:text-5xl"
        >
          {ministry.motto.map((word, index) => (
            <span key={word} className="flex items-center">
              {index > 0 ? (
                <span className="hidden text-terra-400 sm:mx-5 sm:inline" aria-hidden="true">
                  ·
                </span>
              ) : null}
              {word}
            </span>
          ))}
        </motion.h1>

        <motion.p
          {...reveal(0.3)}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-paper/80 text-pretty sm:text-lg"
        >
          {hero.lead}
        </motion.p>

        <motion.div
          {...reveal(0.4)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <LinkButton href="#participe" size="lg">
            Participe da missão
          </LinkButton>
          <LinkButton href="#sobre" size="lg" variant="outline">
            Conhecer o CEP
            <ArrowDownIcon className="h-4 w-4" />
          </LinkButton>
        </motion.div>

        <motion.blockquote
          {...reveal(0.55)}
          className="mx-auto mt-16 max-w-xl border-t border-line pt-8"
        >
          <p className="text-sm leading-relaxed text-sand italic sm:text-base">“{hero.verse.text}”</p>
          <footer className="mt-3 font-display text-xs tracking-[0.24em] text-terra-400 uppercase">
            {hero.verse.ref}
          </footer>
        </motion.blockquote>
      </Container>
    </section>
  )
}
