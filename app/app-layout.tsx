'use client'

import { Toaster } from '@/components/ui/sonner'
import { useThemeContext } from '@/contexts/theme-context'
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
const fontsClassName = ['antialiased', ...fonts].join(' ')

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useThemeContext()

  return (
    <html lang="en" className={resolvedTheme ?? undefined} suppressHydrationWarning>
      <body className={fontsClassName}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
