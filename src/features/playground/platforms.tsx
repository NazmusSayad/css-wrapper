import { DevIconsCSS, DevIconsReact, DevIconsTailwind } from '@/assets'
import {
  generateCSSMaxWidthCode,
  generateCSSPaddingCode,
  generateTailwindCssMaxWidthCode,
  generateTailwindCssPaddingCode,
} from './helpers/generate-code'
import { Platform } from './types'

export const platforms: Platform[] = [
  {
    id: 'native-css',
    name: (
      <>
        <DevIconsCSS /> Native CSS
      </>
    ),
    paddingWrapper(input) {
      return [
        {
          file: 'style.css',
          code: `.wrapper {
  width: 100%;
  margin-inline: auto;
  padding-inline: ${generateCSSPaddingCode(input)};
}`,
        },
      ]
    },
    maxWidthWrapper(input) {
      return [
        {
          file: 'style.css',
          code: `.wrapper {
  width: 100%;
  margin-inline: auto;
  max-width: ${generateCSSMaxWidthCode(input)};
}`,
        },
      ]
    },
  },

  {
    id: 'react-tw-css',
    name: (
      <>
        <DevIconsReact /> React + <DevIconsTailwind /> Tailwind CSS
      </>
    ),
    paddingWrapper(input) {
      return [
        {
          file: 'index.tsx',
          code: `export function Wrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={\`mx-auto w-full ${generateTailwindCssPaddingCode(input)} \${typeof className === 'string' ? className : ''}\`} {...props} />
}`,
        },
      ]
    },
    maxWidthWrapper(input) {
      return [
        {
          file: 'index.tsx',
          code: `export function Wrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={\`mx-auto w-full ${generateTailwindCssMaxWidthCode(input)} \${typeof className === 'string' ? className : ''}\`} {...props} />
}`,
        },
      ]
    },
  },

  {
    id: 'react-css-modules',
    name: (
      <>
        <DevIconsReact /> React + <DevIconsCSS /> CSS Modules
      </>
    ),
    paddingWrapper(input) {
      return [
        {
          file: 'index.tsx',
          code: `import styles from './wrapper.module.css'

export function Wrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={\`\${styles.wrapper} \${typeof className === 'string' ? className : ''}\`} {...props} />
}`,
        },
        {
          file: 'wrapper.module.css',
          code: `.wrapper {
  width: 100%;
  margin-inline: auto;
  padding-inline: ${generateCSSPaddingCode(input)};
}`,
        },
      ]
    },
    maxWidthWrapper(input) {
      return [
        {
          file: 'index.tsx',
          code: `import styles from './wrapper.module.css'

export function Wrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={\`\${styles.wrapper} \${typeof className === 'string' ? className : ''}\`} {...props} />
}`,
        },
        {
          file: 'wrapper.module.css',
          code: `.wrapper {
  width: 100%;
  margin-inline: auto;
  max-width: ${generateCSSMaxWidthCode(input)};
}`,
        },
      ]
    },
  },
]
