'use client'

import { Toaster } from '@/components/ui/sonner'
import { Fira_Code, Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

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

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={fontsClassName}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
