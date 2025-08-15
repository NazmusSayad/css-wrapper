import { PlatformOutputInput } from '../types'

export function generateCSSPaddingCode(input: PlatformOutputInput) {
  return `max(calc((100% - var(--${input.maxWidthVariable}, ${input.defaultMaxWidth})) / 2), var(--${input.paddingVariable}, ${input.defaultPadding}))`
}

export function generateCSSMaxWidthCode(input: PlatformOutputInput) {
  return `min(var(--${input.maxWidthVariable}, ${input.defaultMaxWidth}), (100% - var(--${input.paddingVariable}, ${input.defaultPadding}) * 2))`
}

export function generateTailwindCssPaddingCode(input: PlatformOutputInput) {
  return `max-w-[${generateCSSMaxWidthCode(input).replaceAll(' ', '')}]`
}

export function generateTailwindCssMaxWidthCode(input: PlatformOutputInput) {
  return `px-[${generateCSSPaddingCode(input).replaceAll(' ', '')}]`
}
