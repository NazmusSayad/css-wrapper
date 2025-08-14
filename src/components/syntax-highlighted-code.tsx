import './syntax-theme.scss'

import hljs from 'highlight.js'
import { HTMLAttributes, useEffect, useRef } from 'react'

type SyntaxHighlightedCodeProps = HTMLAttributes<HTMLElement>

export function SyntaxHighlightedCode(props: SyntaxHighlightedCodeProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      hljs.highlightElement(ref.current)
      ref.current.removeAttribute('data-highlighted')
    }
  }, [props.children])

  return <code {...props} ref={ref} />
}
