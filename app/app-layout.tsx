'use client'

import { useThemeContext } from '@/contexts/theme-context'
import { getThemeClassName } from '@/helpers/theme'
import { Fira_Code, Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--next-font-inter',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--next-font-fira-code',
})

const fonts = [inter.variable, firaCode.variable]

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeContext()

  return (
    <html lang="en" className={getThemeClassName(theme)}>
      <body className={['antialiased', ...fonts].join(' ')}>{children}</body>
    </html>
  )
}
