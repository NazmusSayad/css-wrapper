import { Platform } from './types'

export const platforms: Platform[] = [
  {
    name: 'CSS',
    paddingWrapper() {
      return [
        {
          file: 'style.css',
          code: `  .wrapper {
        padding-inline: max(calc((100% - var(--max-width, 82.5rem)) / 2), var(--padding, 4%));
        margin-inline: auto;
        width: 100%;
      }`,
        },
      ]
    },
    maxWidthWrapper() {
      return [
        {
          file: 'style.css',
          code: `  .wrapper {
        max-width: min(var(--max-width, 82.5rem), (100% - var(--padding, 4%) * 2));
        margin-inline: auto;
        width: 100%;
      }`,
        },
      ]
    },
  },
]
