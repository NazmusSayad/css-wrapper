import { ReactNode } from 'react'

type PlaygroundLayoutProps = {
  input: ReactNode
  preview: ReactNode
  output: ReactNode
}

export function PlaygroundLayout({ input, preview, output }: PlaygroundLayoutProps) {
  return (
    <div className="flex flex-col gap-8 py-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.5fr]">
        <div className="pb-4">{input}</div>
        <div>{preview}</div>
      </div>

      <div>{output}</div>
    </div>
  )
}
