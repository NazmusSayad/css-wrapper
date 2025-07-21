import { Wrapper } from '@/layouts/wrapper'
import { ReactNode } from 'react'

export function PlaygroundLayout({
  code,
  input,
  preview,
}: {
  code: ReactNode
  input: ReactNode
  preview: ReactNode
}) {
  return (
    <Wrapper className={'bg-background'}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.5fr]">
        <div>{input}</div>
        <div>{preview}</div>
      </div>

      <div>{code}</div>
    </Wrapper>
  )
}
