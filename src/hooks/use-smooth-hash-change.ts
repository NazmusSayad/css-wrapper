import { useEffect } from 'react'

export function useSmoothHashChange() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchorTarget = (e.target as HTMLElement).closest('a')
      if (!anchorTarget) return

      if (anchorTarget.href === `${window.location.origin}/`) {
        e.preventDefault()
        return window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      const hash = anchorTarget.hash.trim()
      if (!hash) return console.warn('No hash found')

      const target = document.querySelector(hash)
      if (!target) return console.warn('No target found')

      e.preventDefault()

      target.scrollIntoView({ behavior: 'smooth' })
      history.replaceState(null, '', anchorTarget.href)
    }

    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])
}
