import { useEffect } from 'react'

export function useSmoothHashChange() {
  useEffect(() => {
    function handleHashChange(e: HashChangeEvent) {
      e.preventDefault()

      const hash = window.location.hash
      if (!hash) return console.warn('No hash found')

      const target = document.querySelector(hash)
      if (!target) return console.warn('No target found')

      // target.scrollIntoView({ behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
}
