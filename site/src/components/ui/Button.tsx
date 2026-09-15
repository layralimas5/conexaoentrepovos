import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-wide whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-terra-400 text-night hover:bg-terra-200',
  outline: 'border border-line-strong text-paper hover:border-paper hover:bg-paper hover:text-night',
  ghost: 'text-paper/80 hover:text-paper hover:bg-paper/5',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-8 text-base',
}

type SharedProps = {
  variant?: Variant | undefined
  size?: Size | undefined
  className?: string | undefined
  children: ReactNode
}

type LinkButtonProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  )
}

type ActionButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>

export function ActionButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  ...props
}: ActionButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
