export function findLanguage(fileName: string): string | undefined {
  const extension = fileName.split('.').pop()?.toLowerCase()
  if (!extension) return undefined

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
}
