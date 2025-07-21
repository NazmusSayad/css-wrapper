import { PlaygroundLayout } from './playground-layout'

export function MaxWidthWrapperPlayground({}) {
  return (
    <PlaygroundLayout
      languages={[{ label: 'JavaScript', value: 'javascript' }]}
      language="javascript"
      setLanguage={() => {}}
      input={<div>input</div>}
      preview={<div>preview</div>}
      output={[
        {
          label: 'Output',
          code: 'import { MaxWidthWrapper } from "@/components/max-width-wrapper"',
        },
      ]}
    />
  )
}
