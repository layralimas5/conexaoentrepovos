import { useRef, type CSSProperties, type ReactNode } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { cn } from '@/lib/cn'

type TimelineProps = {
  children: ReactNode
  /** Cor de fundo da seção (ex.: 'var(--color-ink)'), usada no miolo dos marcadores. */
  surfaceColor: string
  className?: string | undefined
}

/**
 * Linha vertical que vai se preenchendo conforme o scroll.
 * No mobile fica à esquerda; a partir de md fica no centro, com os itens alternando de lado.
 */
export function Timeline({ children, surfaceColor, className }: TimelineProps) {
  const listRef = useRef<HTMLOListElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 70%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  return (
    <div className={cn('relative', className)}>
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-2.5 w-px -translate-x-1/2 bg-line-strong md:left-1/2"
      >
        <motion.div
          className="h-full w-full origin-top bg-terra-400"
          style={reduceMotion ? {} : { scaleY: progress }}
        />
      </div>
      <ol
        ref={listRef}
        className="relative space-y-5 sm:space-y-8 md:space-y-0 md:[&>li+li]:-mt-24"
        style={{ '--timeline-surface': surfaceColor } as CSSProperties}
      >
        {children}
      </ol>
    </div>
  )
}

type TimelineItemProps = {
  index: number
  children: ReactNode
}

export function TimelineItem({ index, children }: TimelineItemProps) {
  const itemRef = useRef<HTMLLIElement>(null)
  const reduceMotion = useReducedMotion()
  const reached = useInView(itemRef, { once: true, margin: '0px 0px -30% 0px' })
  const active = reduceMotion || reached
  const onLeft = index % 2 === 0

  return (
    <li
      ref={itemRef}
      className="relative grid grid-cols-[1.25rem_1fr] gap-3.5 sm:gap-5 md:grid-cols-[1fr_3rem_1fr] md:gap-0"
    >
      <span
        aria-hidden="true"
        className={cn(
          'relative col-start-1 row-start-1 mt-6 flex h-5 w-5 items-center md:mt-9 md:h-6 md:w-6 justify-center justify-self-center rounded-full border-2 bg-[var(--timeline-surface)] transition-colors duration-500 md:col-start-2',
          active ? 'border-terra-400' : 'border-line-strong',
        )}
      >
        <span
          className={cn(
            'h-2 w-2 rounded-full bg-terra-400 transition-transform duration-500',
            active ? 'scale-100' : 'scale-0',
          )}
        />
      </span>

      <motion.div
        className={cn(
          'col-start-2 row-start-1 min-w-0',
          onLeft ? 'md:col-start-1 md:pr-10' : 'md:col-start-3 md:pl-10',
        )}
        initial={reduceMotion ? false : { opacity: 0, x: onLeft ? -16 : 16 }}
        animate={active ? { opacity: 1, x: 0 } : false}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </li>
  )
}
