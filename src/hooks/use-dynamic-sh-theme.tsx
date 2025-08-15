import { useTheme } from 'next-themes'
import { useLayoutEffect, useState } from 'react'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function useDynamicShTheme() {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return atomOneDark
  return resolvedTheme === 'dark' ? atomOneDark : atomOneLight
}
