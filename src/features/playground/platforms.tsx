import { DevIconsCSS } from '@/assets'
import { Platform } from './types'

export const platforms: Platform[] = [
  {
    name: (
      <>
        <DevIconsCSS /> CSS
      </>
    ),
    paddingWrapper({ paddingVariable, maxWidthVariable, defaultPadding, defaultMaxWidth }) {
      return [
        {
          file: 'style.css',
          code: `.wrapper {
  padding-inline: max(calc((100% - var(--${maxWidthVariable}, ${defaultMaxWidth})) / 2), var(--${paddingVariable}, ${defaultPadding}));
  margin-inline: auto;
  width: 100%;
}`,
        },
      ]
    },
    maxWidthWrapper({ paddingVariable, maxWidthVariable, defaultPadding, defaultMaxWidth }) {
      return [
        {
          file: 'style.css',
          code: `.wrapper {
  max-width: min(var(--${maxWidthVariable}, ${defaultMaxWidth}), (100% - var(--${paddingVariable}, ${defaultPadding}) * 2));
  margin-inline: auto;
  width: 100%;
}`,
        },
      ]
    },
  },
]
