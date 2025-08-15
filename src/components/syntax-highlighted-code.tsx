import './syntax-theme.scss'

import hljs from 'highlight.js'
import { HTMLAttributes, useEffect, useRef } from 'react'

type SyntaxHighlightedCodeProps = HTMLAttributes<HTMLElement>

export function SyntaxHighlightedCode({ children, ...props }: SyntaxHighlightedCodeProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      hljs.highlightElement(ref.current)
      ref.current.removeAttribute('data-highlighted')
    }
  }, [children])

  return (
    <div ref={ref} {...props}>
      <code>{children}</code>
    </div>
  )
}
