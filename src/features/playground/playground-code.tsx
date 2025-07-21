import { SyntaxHighlightedCode } from '@/components/syntax-highlighted-code'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ReactNode } from 'react'

export type PlaygroundCodeProps = {
  languages: { label: ReactNode; value: string }[]

  language: string
  setLanguage: (language: string) => void

  output: { label: ReactNode; code: string }[]
}

export function PlaygroundCode({ languages, output, language, setLanguage }: PlaygroundCodeProps) {
  return (
    <>
      <header className="flex items-center justify-between">
        <div>{output.map(({ label }) => label)}</div>

        <div>
          <Select value={language} onValueChange={setLanguage}>
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
    </>
  )
}
