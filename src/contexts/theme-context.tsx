/* eslint-disable react-func/max-lines-per-function */
'use client'

import { getBrowserTheme, getInitialTheme } from '@/helpers/theme'
import { createContext } from 'daily-react'
import { useEffect, useMemo, useState } from 'react'

export type BrowserTheme = 'light' | 'dark'
export type AppTheme = BrowserTheme | 'system'

const THEME_STORAGE_KEY = 'local-app-theme'

function getThemeToStorage() {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(THEME_STORAGE_KEY)
  }

  return null
}

function setThemeToStorage(theme: AppTheme) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }

  return theme
}

export const { Provider: ThemeContextProvider, useContext: useThemeContext } = createContext(() => {
  const initialTheme = getInitialTheme(getThemeToStorage())
  const [theme, setThemeState] = useState<AppTheme>(initialTheme)

  useEffect(() => {
    const themeCookie = getThemeToStorage()
    if (themeCookie) {
      setThemeState(getInitialTheme(themeCookie))
    }
  }, [])

  function setTheme(newTheme: AppTheme) {
    setThemeState(newTheme)
    setThemeToStorage(newTheme)
  }

  function resetTheme() {
    setThemeState('system')
    setThemeToStorage('system')
  }

  function toggleTheme() {
    setThemeState((prev: AppTheme) => {
      if (prev === 'system') {
        const browserTheme = getBrowserTheme()
        return setThemeToStorage(browserTheme === 'dark' ? 'light' : 'dark')
      }

      return setThemeToStorage(prev === 'light' ? 'dark' : 'light')
    })
  }

  const resolvedTheme = useMemo(() => {
    if (theme === 'system') {
      if (typeof document !== 'undefined') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return prefersDark ? 'dark' : 'light'
      }

      return null
    }

    return theme
  }, [theme])

  return {
    theme,
    resolvedTheme,

    setTheme,
    resetTheme,
    toggleTheme,
  }
})
