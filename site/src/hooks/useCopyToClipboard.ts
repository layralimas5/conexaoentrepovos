import { useCallback, useEffect, useRef, useState } from 'react'

type CopyState = 'idle' | 'copied' | 'error'

/** Copia texto pro clipboard e devolve o estado por alguns segundos pra dar feedback. */
export function useCopyToClipboard(resetAfterMs = 2200) {
  const [state, setState] = useState<CopyState>('idle')
  const timeout = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timeout.current), [])

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        setState('copied')
      } catch {
        setState('error')
      }
      window.clearTimeout(timeout.current)
      timeout.current = window.setTimeout(() => setState('idle'), resetAfterMs)
    },
    [resetAfterMs],
  )

  return { state, copy }
}
