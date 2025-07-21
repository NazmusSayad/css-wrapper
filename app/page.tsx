'use client'

export const dynamic = 'force-static'

import { useThemeContext } from '@/contexts/theme-context'
import { MaxWidthWrapperPlayground, PaddingWrapperPlayground } from '@/features/playground'

export default function HomePage() {
  const { setTheme, toggleTheme, resetTheme } = useThemeContext()

  return (
    <>
      <PaddingWrapperPlayground />
      <hr />
      <MaxWidthWrapperPlayground />
      <hr />

      <div>
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
        <button onClick={() => setTheme('system')}>System</button>
        <button onClick={() => toggleTheme()}>Toggle</button>
        <button onClick={() => resetTheme()}>Reset</button>
      </div>
    </>
  )
}
