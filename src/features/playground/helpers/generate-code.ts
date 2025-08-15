import { PlatformOutputInput } from '../types'

export function generateCSSPaddingCode(input: PlatformOutputInput) {
  const widthText = input.maxWidthVariable
    ? `var(--${input.maxWidthVariable}, ${input.defaultMaxWidth})`
    : `${input.defaultMaxWidth}`

  const paddingText = input.paddingVariable
    ? `var(--${input.paddingVariable}, ${input.defaultPadding})`
    : `${input.defaultPadding}`

  return `max(calc((100% - ${widthText}) / 2), ${paddingText})`
}

export function generateCSSMaxWidthCode(input: PlatformOutputInput) {
  const widthText = input.maxWidthVariable
    ? `var(--${input.maxWidthVariable}, ${input.defaultMaxWidth})`
    : `${input.defaultMaxWidth}`

  const paddingText = input.paddingVariable
    ? `(var(--${input.paddingVariable}, ${input.defaultPadding}) * 2)`
    : `(${input.defaultPadding} * 2)`

  return `min(${widthText}, calc(100% - ${paddingText}))`
}

export function generateTailwindCssPaddingCode(input: PlatformOutputInput) {
  return `px-[${generateCSSPaddingCode(input).replaceAll(' ', '')}]`
}

export function generateTailwindCssMaxWidthCode(input: PlatformOutputInput) {
  return `max-w-[${generateCSSMaxWidthCode(input).replaceAll(' ', '')}]`
}
