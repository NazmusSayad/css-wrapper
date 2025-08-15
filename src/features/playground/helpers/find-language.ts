export function findLanguage(fileName: string) {
  const extension = fileName.split('.').pop()

  if (extension === 'ts' || extension === 'tsx') {
    return 'typescript'
  }

  if (extension === 'js' || extension === 'jsx') {
    return 'javascript'
  }
}
