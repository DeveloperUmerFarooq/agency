import { useCallback, useEffect, useState } from 'react'

export function useMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((current) => !current), [])

  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') close()
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [close, isOpen])

  return { isOpen, close, toggle }
}
