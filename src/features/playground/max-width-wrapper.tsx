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

  const [valuePadding, setValuePadding] = useState('4%')
  const [valueMaxWidth, setValueMaxWidth] = useState('1200px')

  const [cssVariablePadding, setCssVariablePadding] = useState('padding')
  const [cssVariableMaxWidth, setCssVariableMaxWidth] = useState('max-width')

  return (
    <PlaygroundLayout
      preview={<PlaygroundPreview maxWidth={valueMaxWidth} padding={valuePadding} />}
      input={
        <PlaygroundInput
          padding={valuePadding}
          maxWidth={valueMaxWidth}
          paddingVariable={cssVariablePadding}
          maxWidthVariable={cssVariableMaxWidth}
          setPadding={setValuePadding}
          setMaxWidth={setValueMaxWidth}
          setPaddingVariable={setCssVariablePadding}
          setMaxWidthVariable={setCssVariableMaxWidth}
        />
      }
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
