import { useState } from 'react'
import { PlaygroundCode } from './playground-code'
import { PlaygroundInput } from './playground-input'
import { PlaygroundLayout } from './playground-layout'
import { PlaygroundPreview } from './playground-preview'

const languages = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
]

export function MaxWidthWrapperPlayground({}) {
  const [language, setLanguage] = useState(languages[0].value)

  return (
    <PlaygroundLayout
      input={<PlaygroundInput />}
      preview={<PlaygroundPreview />}
      output={
        <PlaygroundCode
          language={language}
          languages={languages}
          setLanguage={setLanguage}
          output={[
            {
              label: 'page.tsx',
              code: 'import { MaxWidthWrapper } from "@/components/max-width-wrapper"',
            },
          ]}
        />
      }
    />
  )
}
