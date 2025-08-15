import { DevIconsCSS, DevIconsJS, DevIconsTS } from '@/assets'
import { ReactNode } from 'react'

export function findLanguage(fileName: string): string | null {
  const extension = fileName.split('.').pop()?.toLowerCase()
  if (!extension) return null

  if (extension === 'ts' || extension === 'tsx') {
    return 'typescript'
  }

  if (extension === 'js' || extension === 'jsx') {
    return 'javascript'
  }

  if (extension === 'html') {
    return 'html'
  }

  if (extension === 'css') {
    return 'css'
  }

  if (extension === 'scss') {
    return 'scss'
  }

  if (extension === 'sass') {
    return 'sass'
  }

  if (extension === 'json') {
    return 'json'
  }

  if (extension === 'md') {
    return 'markdown'
  }

  return null
}

export function findLanguageIcon(fileName: string): ReactNode {
  const language = findLanguage(fileName)
  if (!language) return null

  if (language === 'css') {
    return <DevIconsCSS />
  }

  if (language === 'typescript') {
    return <DevIconsTS />
  }

  if (language === 'javascript') {
    return <DevIconsJS />
  }

  return null
}
