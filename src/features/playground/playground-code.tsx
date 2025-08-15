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

  output: { file: string; code: string }[]
}

export function PlaygroundCode({ languages, output, language, setLanguage }: PlaygroundCodeProps) {
  return (
    <>
      <header className="mb-2 flex items-center justify-between">
        <div>
          <button>Max Width Wrapper</button>
          <button>Padding Wrapper</button>
        </div>

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
        {output.map(({ file, code }) => (
          <div key={file}>
            <div>{file}</div>

            <SyntaxHighlightedCode className="block font-mono text-[0.9375rem]">
              {code}
            </SyntaxHighlightedCode>
          </div>
        ))}
      </div>
    </>
  )
}
