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
      className={cn('relative py-24 sm:py-32', className)}
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
  className?: string | undefined
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <p className="font-display text-xs font-semibold tracking-[0.28em] text-terra-400 uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-5 font-display text-3xl leading-[1.1] font-light tracking-tight text-paper text-balance sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-base leading-relaxed text-sand text-pretty sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  )
}
