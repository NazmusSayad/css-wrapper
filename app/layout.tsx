import '@/styles/index.css'
import '@/styles/initial.css'
import '@/styles/theme.scss'

import { ThemeContextProvider } from '@/contexts/theme-context'
import type { Metadata } from 'next'
import { AppLayout } from './app-layout'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'CSS Wrapper Playground - Responsive Layout Generator',
  description:
    'Generate responsive CSS wrapper components for padding and max-width layouts. Support for multiple platforms including React, Vue, Angular, and vanilla CSS.',
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
  ],
  authors: [{ name: 'CSS Wrapper Playground' }],
  creator: 'CSS Wrapper Playground',
  publisher: 'CSS Wrapper Playground',
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
    title: 'CSS Wrapper Playground - Responsive Layout Generator',
    description:
      'Generate responsive CSS wrapper components for padding and max-width layouts. Support for multiple platforms including React, Vue, Angular, and vanilla CSS.',
    url: 'https://wrapper.sayad.dev',
    siteName: 'CSS Wrapper Playground',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CSS Wrapper Playground - Responsive Layout Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSS Wrapper Playground - Responsive Layout Generator',
    description:
      'Generate responsive CSS wrapper components for padding and max-width layouts. Support for multiple platforms including React, Vue, Angular, and vanilla CSS.',
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <AppLayout>{children}</AppLayout>
    </ThemeContextProvider>
  )
}
