import { Wrapper } from '@/layouts/wrapper'
import { ReactNode } from 'react'

type PlaygroundLayoutProps = {
  input: ReactNode
  preview: ReactNode
  output: ReactNode
}

export function PlaygroundLayout({ input, preview, output }: PlaygroundLayoutProps) {
  return (
    <Wrapper className={'bg-background'}>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.5fr]">
        <div>{input}</div>
        <div>{preview}</div>
      </section>

      <section>{output}</section>
    </Wrapper>
  )
}
