import { useState } from 'react'
import { PlaygroundCode } from './playground-code'
import { PlaygroundInput } from './playground-input'
import { PlaygroundLayout } from './playground-layout'
import { PlaygroundPreview } from './playground-preview'

export function WrapperPlayground({}) {
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
      output={<PlaygroundCode padding={valuePadding} maxWidth={valueMaxWidth} />}
    />
  )
}
