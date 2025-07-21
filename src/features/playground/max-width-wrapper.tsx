import { useState } from 'react'
import { PlaygroundCode } from './playground-code'
import { PlaygroundLayout } from './playground-layout'

const languages = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
]

export function MaxWidthWrapperPlayground({}) {
  const [language, setLanguage] = useState(languages[0].value)

  return (
    <PlaygroundLayout
      input={<div>input</div>}
      preview={<div>preview</div>}
      output={
        <PlaygroundCode
          output={[
            {
              label: 'Output',
              code: 'import { MaxWidthWrapper } from "@/components/max-width-wrapper"',
            },
          ]}
          language={language}
          languages={languages}
          setLanguage={setLanguage}
        />
      }
    />
  )
}
