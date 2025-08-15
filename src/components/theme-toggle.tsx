import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { useLayoutEffect, useState } from 'react'

export function ThemeToggle({}) {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="size-10">
      {isMounted && (
        <Button
          variant="ghost"
          className="hidden size-10 sm:inline-flex"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
        </Button>
      )}
    </div>
  )
}
