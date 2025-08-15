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
          paddingTips={[
            {
              type: 'info',
              text: 'Padding is the space between the content and the border of the container. It is a percentage of the container width.',
            },
            {
              type: 'warning',
              text: 'Padding is the space between the content and the border of the container. It is a percentage of the container width.',
            },
            {
              type: 'error',
              text: 'Padding is the space between the content and the border of the container. It is a percentage of the container width.',
            },
          ]}
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
          padding={valuePadding}
          defaultPadding={valuePadding}
          paddingVariable={cssVariablePadding}
          maxWidth={valueMaxWidth}
          defaultMaxWidth={valueMaxWidth}
          maxWidthVariable={cssVariableMaxWidth}
        />
      }
    />
  )
}
