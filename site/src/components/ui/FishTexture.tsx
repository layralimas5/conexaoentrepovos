import { cn } from '@/lib/cn'

type FishTextureProps = {
  className?: string | undefined
}

/** Cardume da identidade do CEP, usado como textura nas seções verde-musgo. O pai precisa de `relative isolate`. */
export function FishTexture({ className }: FishTextureProps) {
  return (
    <img
      src="/img/peixes-branco.png"
      alt=""
      aria-hidden="true"
      width={480}
      height={104}
      loading="lazy"
      className={cn('pointer-events-none absolute -z-10 select-none', className)}
    />
  )
}
