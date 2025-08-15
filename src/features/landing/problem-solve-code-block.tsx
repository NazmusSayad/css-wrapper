import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function ProblemSolveCodeBlock({
  code,
  className,
  ...props
}: Omit<ComponentProps<'div'>, 'children'> & { code: string }) {
  return (
    <div className={cn('max-w-full flex-1 overflow-hidden rounded-md p-1', className)} {...props}>
      <ReactSyntaxHighlighter
        language="css"
        style={atomOneDark}
        wrapLines
        customStyle={{ background: 'transparent' }}
      >
        {code}
      </ReactSyntaxHighlighter>
    </div>
  )
}
