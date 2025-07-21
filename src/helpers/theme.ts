import { AppTheme, BrowserTheme } from '@/contexts/theme-context'

export function getInitialTheme(input: unknown): AppTheme {
  if (input === 'light' || input === 'dark' || input === 'system') {
    return input
  }

  return 'system'
}

export function getThemeClassName(theme: AppTheme): string | undefined {
  if (theme === 'system') return undefined
  return theme
}

export function getResolvedTheme(theme: AppTheme): BrowserTheme | null {
  if (theme === 'system') return null

  return theme
}

export function getBrowserTheme(): BrowserTheme {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}
