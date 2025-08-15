import { ReactNode } from 'react'

type PlaygroundLayoutProps = {
  input: ReactNode
  preview: ReactNode
  output: ReactNode
}

export function PlaygroundLayout({ input, preview, output }: PlaygroundLayoutProps) {
  return (
    <div className="flex flex-col gap-10 py-4 sm:gap-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.5fr]">
        <div>{input}</div>
        <div>{preview}</div>
      </div>

      <div>{output}</div>
    </div>
  )
}
