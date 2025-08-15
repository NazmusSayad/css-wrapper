import '@/styles/index.css'
import '@/styles/initial.css'
import '@/styles/theme.scss'

import { ThemeContextProvider } from '@/contexts/theme-context'
import { AppLayout } from './app-layout'

export const dynamic = 'force-static'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <AppLayout>{children}</AppLayout>
    </ThemeContextProvider>
  )
}
