'use client'

import { Button } from '@/components/ui/button'
import { useThemeContext } from '@/contexts/theme-context'
import { Wrapper } from '@/layouts/wrapper'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function Navbar() {
  const { theme, toggleTheme } = useThemeContext()
  const [scrollTop, setScrollTop] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setScrollTop(window.scrollY)

    function handleScroll() {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-b border-transparent bg-transparent backdrop-blur-none',
        scrollTop > 100 && 'border-b-border bg-background/80 backdrop-blur-md'
      )}
    >
      <Wrapper>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary flex size-8 items-center justify-center rounded-lg">
              <svg
                className="text-primary-foreground size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <span className="text-lg font-semibold">CSS Wrapper</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#why"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              Why?
            </a>
            <a
              href="#problems"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              Problems
            </a>
            <a
              href="#solutions"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              Solutions
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden sm:inline-flex"
              suppressHydrationWarning
              onClick={toggleTheme}
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </Button>

            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
              <a
                href="https://github.com/NazmusSayad/css-wrapper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </Button>

            <Button asChild>
              <a href="#playground">Get Started</a>
            </Button>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <a
                href="#playground"
                className="text-muted-foreground text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Playground
              </a>
              <a
                href="#problems"
                className="text-muted-foreground text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Problems
              </a>
              <a
                href="#solutions"
                className="text-muted-foreground text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </a>
              <a
                href="#why"
                className="text-muted-foreground text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Why
              </a>
            </nav>
          </div>
        )}
      </Wrapper>
    </header>
  )
}
