'use client'

import { useDynamicShTheme } from '@/hooks/use-dynamic-sh-theme'
import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import ReactSyntaxHighlighter from 'react-syntax-highlighter'

export function ProblemSolveCodeBlock({
  code,
  className,
  ...props
}: Omit<ComponentProps<'div'>, 'children'> & { code: string }) {
  const theme = useDynamicShTheme()

  return (
    <div className={cn('max-w-full flex-1 overflow-hidden rounded-md p-1', className)} {...props}>
      <ReactSyntaxHighlighter
        language="css"
        style={theme}
        customStyle={{ background: 'transparent' }}
      >
        {code}
      </ReactSyntaxHighlighter>
    </div>
  )
}
