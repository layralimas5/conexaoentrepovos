import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string | undefined
  containerClassName?: string | undefined
  labelledBy?: string | undefined
}

export function Section({ id, children, className, containerClassName, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('relative isolate overflow-hidden py-24 sm:py-32', className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

type SectionHeadingProps = {
  id?: string | undefined
  eyebrow: string
  title: ReactNode
  description?: string | undefined
  align?: 'left' | 'center' | undefined
  tone?: SectionTone | undefined
  className?: string | undefined
}

export type SectionTone = 'dark' | 'light'

const headingTones: Record<SectionTone, { eyebrow: string; title: string; description: string }> = {
  dark: { eyebrow: 'text-terra-400', title: 'text-paper', description: 'text-sand' },
  light: { eyebrow: 'text-terra-900', title: 'text-night', description: 'text-ink-soft' },
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  const colors = headingTones[tone]
  return (
    <header className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <p className={cn('font-display text-xs font-semibold tracking-[0.28em] uppercase', colors.eyebrow)}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'mt-5 font-display text-3xl leading-[1.1] font-light tracking-tight text-balance sm:text-4xl lg:text-5xl',
          colors.title,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-6 text-base leading-relaxed text-pretty sm:text-lg', colors.description)}>
          {description}
        </p>
      ) : null}
    </header>
  )
}
