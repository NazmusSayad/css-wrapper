'use client'

import { useThemeContext } from '@/contexts/theme-context'
import { getThemeClassName } from '@/helpers/theme'

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeContext()

  return (
    <html lang="en" className={getThemeClassName(theme)}>
      <body className={['antialiased'].join(' ')}>{children}</body>
    </html>
  )
}
