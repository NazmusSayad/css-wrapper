import '@/styles/index.css'
import '@/styles/initial.css'
import '@/styles/theme.scss'

import { ThemeProvider } from '@/contexts/theme-context'
import { getInitialTheme } from '@/helpers/theme'
import { cookies } from 'next/headers'
import { AppLayout } from './app-layout'

export const dynamic = 'force-static'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const themeCookie = cookieStore.get('theme')
  const initialTheme = getInitialTheme(themeCookie?.value)

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <AppLayout>{children}</AppLayout>
    </ThemeProvider>
  )
}
