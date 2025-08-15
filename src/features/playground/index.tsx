'use client'

import { useState } from 'react'
import { PlaygroundCode } from './playground-code'
import { PlaygroundInput } from './playground-input'
import { PlaygroundLayout } from './playground-layout'
import { PlaygroundPreview } from './playground-preview'

export function WrapperPlayground({}) {
  const [valuePadding, setValuePadding] = useState('4%')
  const [valueMaxWidth, setValueMaxWidth] = useState('80rem')

  const [cssVariablePadding, setCssVariablePadding] = useState('padding')
  const [cssVariableMaxWidth, setCssVariableMaxWidth] = useState('max-width')

  return (
    <PlaygroundLayout
      preview={<PlaygroundPreview maxWidth={valueMaxWidth} padding={valuePadding} />}
      input={
        <PlaygroundInput
          padding={valuePadding}
          maxWidth={valueMaxWidth}
          paddingTips={
            valuePadding.trim().endsWith('%')
              ? []
              : [
                  {
                    type: 'info',
                    text: 'It is recommended to use a percentage value for padding. This will ensure that the padding is responsive and will adjust to the container width.',
                  },
                ]
          }
          maxWidthTips={
            valueMaxWidth.trim().endsWith('rem')
              ? []
              : valueMaxWidth.trim().endsWith('%')
                ? [
                    {
                      type: 'error',
                      text: 'Do not use a percentage value for max-width. It will not work as expected.',
                    },
                  ]
                : [{ type: 'info', text: 'It is recommended to use a rem value for max-width.' }]
          }
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
