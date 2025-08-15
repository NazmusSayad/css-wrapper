'use client'

import { DevIconsCSS } from '@/assets'
import { Hamburger1 } from '@/components/hamburgers'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Wrapper } from '@/layouts/wrapper'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Playground',
    href: '#playground',
  },
  {
    label: 'Why?',
    href: '#why',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollTop, setScrollTop] = useState<number | null>(null)

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
        'fixed top-0 isolate z-50 w-full border-b border-transparent bg-transparent transition-all',
        scrollTop && 'border-b-border bg-background/80'
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0 -z-10 opacity-0 backdrop-blur-md transition-opacity',
          scrollTop && 'opacity-100'
        )}
      />

      <Wrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <DevIconsCSS className="size-5" />
            <span className="font-mono text-base font-semibold uppercase sm:text-lg">
              CSS Wrapper
            </span>
          </Link>

          <nav className="hidden items-center md:flex">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className="text-muted-foreground hover:text-foreground"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

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

            <Button asChild className="hidden min-[22.5rem]:flex">
              <a href="#playground">Get Started</a>
            </Button>

            <button
              aria-label="Toggle menu"
              className="text-[2.5rem] md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Hamburger1 isActive={isMenuOpen} />
            </button>
          </div>
        </div>
      </Wrapper>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="bg-background overflow-hidden border-t py-4 md:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Wrapper>
              <motion.nav
                className="flex flex-col"
                exit={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {navItems.map((item) => (
                  <Button
                    asChild
                    key={item.href}
                    variant="ghost"
                    className="text-muted-foreground w-full justify-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </motion.nav>
            </Wrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
