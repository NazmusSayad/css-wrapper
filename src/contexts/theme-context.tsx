/* eslint-disable react-func/max-lines-per-function */
'use client'

import { getBrowserTheme, getResolvedTheme } from '@/helpers/theme'
import createReactCtx from 'create-react-ctx'
import { useEffect, useState } from 'react'

export type BrowserTheme = 'light' | 'dark'
export type AppTheme = BrowserTheme | 'system'

function setThemeCookie(theme: AppTheme) {
  if (typeof document !== 'undefined') {
    document.cookie = `theme=${theme}; path=/; max-age=${60 * 60 * 24 * 365}`
  }

  return theme
}

export const { Provider: ThemeProvider, useContext: useThemeContext } = createReactCtx(
  ({ initialTheme }: { initialTheme: AppTheme }) => {
    const [theme, setThemeState] = useState<AppTheme>(initialTheme)
    const [resolvedTheme, setResolvedTheme] = useState<BrowserTheme | null>(
      getResolvedTheme(initialTheme)
    )

    useEffect(() => {
      if (theme === 'system') {
        if (typeof window !== 'undefined') {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
          setResolvedTheme(prefersDark ? 'dark' : 'light')
        }
      } else {
        setResolvedTheme(theme)
      }
    }, [theme])

    function setTheme(newTheme: AppTheme) {
      setThemeState(newTheme)
      setThemeCookie(newTheme)
    }

    function resetTheme() {
      setThemeState('system')
      setThemeCookie('system')
    }

    function toggleTheme() {
      setThemeState((prev: AppTheme) => {
        if (prev === 'system') {
          const browserTheme = getBrowserTheme()
          return setThemeCookie(browserTheme === 'dark' ? 'light' : 'dark')
        }

        return setThemeCookie(prev === 'light' ? 'dark' : 'light')
      })
    }

    return {
      theme,
      resolvedTheme,

      setTheme,
      resetTheme,
      toggleTheme,
    }
  }
)
