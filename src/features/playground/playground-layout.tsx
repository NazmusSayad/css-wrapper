import { SyntaxHighlightedCode } from '@/components/syntax-highlighted-code'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Wrapper } from '@/layouts/wrapper'
import { ReactNode } from 'react'

type PlaygroundLayoutProps = {
  languages: { label: ReactNode; value: string }[]

  language: string
  setLanguage: (language: string) => void

  input: ReactNode
  preview: ReactNode
  output: { label: string; code: string }[]
}

export function PlaygroundLayout({ input, preview, languages, output }: PlaygroundLayoutProps) {
  return (
    <Wrapper className={'bg-background'}>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.5fr]">
        <div>{input}</div>
        <div>{preview}</div>
      </section>

      <section>
        <header className="flex items-center justify-between">
          <div>{output.map(({ label }) => label)}</div>

          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>

              <SelectContent>
                {languages.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </header>

        <div>
          {output.map(({ code }) => (
            <SyntaxHighlightedCode key={code} lang={'javascript'}>
              {code}
            </SyntaxHighlightedCode>
          ))}
        </div>
      </section>
    </Wrapper>
  )
}
