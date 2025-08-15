import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import css from './theme-toggle.module.scss'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  const [isMounted, setIsMounted] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isKeyboardUser, setIsKeyboardUser] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    function handleKeyDown() {
      setIsKeyboardUser(true)
    }

    function handleMouseDown() {
      setIsKeyboardUser(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleMouseDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return (
    <div
      className={cn(
        css.root,
        'invisible grid w-[72px] scale-0 place-content-center opacity-0 ring-2 ring-transparent transition-all',
        isMounted && 'visible scale-[.9] opacity-100 delay-300',
        isFocused && 'ring-ring rounded-full',
        className
      )}
    >
      <label className={css.container} aria-label="Toggle theme">
        <input
          id="toggle"
          type="checkbox"
          aria-label="Toggle theme"
          checked={resolvedTheme === 'dark'}
          onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          onBlur={() => setIsFocused(false)}
          onFocus={() => {
            if (isKeyboardUser) setIsFocused(true)
          }}
        />

        <span className={css.slider + ' ' + css.round}>
          <div className={css.background}></div>
          <div className={css.star}></div>
          <div className={css.star}></div>
        </span>

        <span style={{ display: 'none' }}>Toggle Theme</span>
      </label>
    </div>
  )
}
