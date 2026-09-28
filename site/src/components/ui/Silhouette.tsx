import type { CSSProperties } from 'react'
import { cn } from '@/lib/cn'

const silhouettes = {
  peixes: { src: '/img/peixes-branco.png', width: 480, height: 104 },
  passaros: { src: '/img/passaros-branco.png', width: 720, height: 353 },
  capim: { src: '/img/capim-branco.png', width: 3292, height: 300 },
  indigena: { src: '/img/indigena-arco-branco.png', width: 222, height: 222 },
  sertanejo: { src: '/img/sertanejo-cavalo-branco.png', width: 774, height: 518 },
} as const

export type SilhouetteName = keyof typeof silhouettes

type SilhouetteProps = {
  name: SilhouetteName
  /** 'light' usa a figura branca (fundo escuro); 'terra' pinta a figura no terracota da marca (fundo claro). */
  tone?: 'light' | 'terra' | undefined
  className?: string | undefined
}

const base = 'pointer-events-none absolute -z-10 select-none'

/**
 * Figuras da identidade do CEP (povos, peixes, pássaros, capim) usadas como textura decorativa.
 * O elemento pai precisa de `relative isolate` para a figura ficar atrás do conteúdo.
 */
export function Silhouette({ name, tone = 'light', className }: SilhouetteProps) {
  const { src, width, height } = silhouettes[name]

  if (tone === 'terra') {
    const mask = `url(${src}) center / contain no-repeat`
    const style: CSSProperties = { aspectRatio: `${width} / ${height}`, mask, WebkitMask: mask }
    return <span aria-hidden="true" style={style} className={cn(base, 'block bg-terra-900', className)} />
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      loading="lazy"
      className={cn(base, 'h-auto', className)}
    />
  )
}
