import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { identity } from '@/content/site'
import { cn } from '@/lib/cn'

const tabs = [
  ...identity.statements.map((statement) => ({ label: statement.title, text: statement.text })),
  { label: 'Valores', text: identity.values.join(' · ') },
]

/** Propósito, missão, visão e valores em abas: um texto por vez, navegável por setas. */
export function IdentityTabs() {
  const [active, setActive] = useState(0)
  const baseId = useId()
  const reduceMotion = useReducedMotion()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const selectTab = (index: number) => {
    const next = (index + tabs.length) % tabs.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const moves: Partial<Record<string, number>> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: tabs.length - 1,
    }
    const target = moves[event.key]
    if (target === undefined) return
    event.preventDefault()
    selectTab(target)
  }

  return (
    <section
      aria-label="Identidade do ministério"
      className="flex flex-col gap-6 border-b border-line pb-10 md:flex-row md:items-start md:gap-12"
    >
      <div
        role="tablist"
        aria-label="Identidade do ministério"
        onKeyDown={onKeyDown}
        className="flex shrink-0 flex-wrap gap-2"
      >
        {tabs.map((tab, index) => {
          const selected = index === active
          return (
            <button
              key={tab.label}
              ref={(element) => {
                tabRefs.current[index] = element
              }}
              id={`${baseId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={cn(
                'rounded-full border px-4 py-2 font-display text-xs font-semibold tracking-[0.18em] uppercase transition-colors',
                selected
                  ? 'border-terra-400 bg-terra-400 text-night'
                  : 'border-line-strong text-paper/70 hover:border-paper/60 hover:text-paper',
              )}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="min-h-[5.5rem] max-w-2xl flex-1"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={active}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm leading-relaxed text-sand text-pretty sm:text-base"
          >
            {tabs[active]?.text}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  )
}
