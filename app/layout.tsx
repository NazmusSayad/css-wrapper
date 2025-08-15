import '@/styles/index.css'
import '@/styles/initial.css'
import '@/styles/theme.scss'

import { ThemeContextProvider } from '@/contexts/theme-context'
import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { AppLayout } from './app-layout'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'CSS Wrapper Generator - Responsive Layout Solution',
  description:
    'Generate responsive CSS wrapper components that solve the padding vs max-width problem. Create consistent layouts with exact content widths for React, Vue, Angular, and vanilla CSS. No more math, no more surprises.',
  keywords: [
    'CSS wrapper',
    'responsive design',
    'CSS generator',
    'layout components',
    'padding wrapper',
    'max-width wrapper',
    'React components',
    'Vue components',
    'Angular components',
    'CSS utilities',
    'responsive layout',
    'CSS playground',
    'frontend development',
    'CSS framework',
    'layout generator',
    'CSS math solver',
    'responsive containers',
    'CSS variables',
    'min() function',
    'calc() function',
    'nested layouts',
    'consistent spacing',
    'content width calculator',
  ],
  authors: [{ name: 'CSS Wrapper Generator' }],
  creator: 'CSS Wrapper Generator',
  publisher: 'CSS Wrapper Generator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    shortcut: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  metadataBase: new URL('https://wrapper.sayad.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CSS Wrapper Generator - Responsive Layout Solution',
    description:
      'Generate responsive CSS wrapper components that solve the padding vs max-width problem. Create consistent layouts with exact content widths for React, Vue, Angular, and vanilla CSS. No more math, no more surprises.',
    url: 'https://wrapper.sayad.dev',
    siteName: 'CSS Wrapper Generator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CSS Wrapper Generator - Responsive Layout Solution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSS Wrapper Generator - Responsive Layout Solution',
    description:
      'Generate responsive CSS wrapper components that solve the padding vs max-width problem. Create consistent layouts with exact content widths for React, Vue, Angular, and vanilla CSS. No more math, no more surprises.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <ThemeContextProvider>
      <AppLayout>{children}</AppLayout>
    </ThemeContextProvider>
  )
}
