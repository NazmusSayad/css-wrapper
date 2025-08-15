import { describe, expect, it } from 'bun:test'
import type { PlatformOutputInput } from '../types'
import {
  generateCSSMaxWidthCode,
  generateCSSPaddingCode,
  generateTailwindCssMaxWidthCode,
  generateTailwindCssPaddingCode,
} from './generate-code'

describe('generate-code helpers', () => {
  describe('generateCSSPaddingCode', () => {
    it('should generate padding code with default values only', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '',
      }

      const result = generateCSSPaddingCode(input)
      expect(result).toBe('max(calc((100% - 1200px) / 2), 1rem)')
    })

    it('should generate padding code with CSS variables', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '--padding',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '--max-width',
      }

      const result = generateCSSPaddingCode(input)
      expect(result).toBe('max(calc((100% - var(--max-width, 1200px)) / 2), var(--padding, 1rem))')
    })

    it('should handle different units', () => {
      const input: PlatformOutputInput = {
        padding: '2rem',
        defaultPadding: '2rem',
        paddingVariable: '',
        maxWidth: '1440px',
        defaultMaxWidth: '1440px',
        maxWidthVariable: '',
      }

      const result = generateCSSPaddingCode(input)
      expect(result).toBe('max(calc((100% - 1440px) / 2), 2rem)')
    })

    it('should handle percentage values', () => {
      const input: PlatformOutputInput = {
        padding: '4%',
        defaultPadding: '4%',
        paddingVariable: '',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '',
      }

      const result = generateCSSPaddingCode(input)
      expect(result).toBe('max(calc((100% - 1200px) / 2), 4%)')
    })

    it('should handle mixed variable and default combinations', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '--padding',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '',
      }

      const result = generateCSSPaddingCode(input)
      expect(result).toBe('max(calc((100% - 1200px) / 2), var(--padding, 1rem))')
    })

    it('should handle empty strings for variables', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '',
      }

      const result = generateCSSPaddingCode(input)
      expect(result).toBe('max(calc((100% - 1200px) / 2), 1rem)')
    })
  })

  describe('generateCSSMaxWidthCode', () => {
    it('should generate max-width code with default values only', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '',
      }

      const result = generateCSSMaxWidthCode(input)
      expect(result).toBe('min(1200px, calc(100% - (1rem * 2)))')
    })

    it('should generate max-width code with CSS variables', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '--padding',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '--max-width',
      }

      const result = generateCSSMaxWidthCode(input)
      expect(result).toBe('min(var(--max-width, 1200px), calc(100% - (var(--padding, 1rem) * 2)))')
    })

    it('should handle different units', () => {
      const input: PlatformOutputInput = {
        padding: '2rem',
        defaultPadding: '2rem',
        paddingVariable: '',
        maxWidth: '1440px',
        defaultMaxWidth: '1440px',
        maxWidthVariable: '',
      }

      const result = generateCSSMaxWidthCode(input)
      expect(result).toBe('min(1440px, calc(100% - (2rem * 2)))')
    })

    it('should handle percentage values', () => {
      const input: PlatformOutputInput = {
        padding: '4%',
        defaultPadding: '4%',
        paddingVariable: '',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '',
      }

      const result = generateCSSMaxWidthCode(input)
      expect(result).toBe('min(1200px, calc(100% - (4% * 2)))')
    })

    it('should handle mixed variable and default combinations', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '--padding',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '',
      }

      const result = generateCSSMaxWidthCode(input)
      expect(result).toBe('min(1200px, calc(100% - (var(--padding, 1rem) * 2)))')
    })

    it('should handle empty strings for variables', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '',
      }

      const result = generateCSSMaxWidthCode(input)
      expect(result).toBe('min(1200px, calc(100% - (1rem * 2)))')
    })
  })

  describe('generateTailwindCssPaddingCode', () => {
    it('should generate Tailwind padding code with default values', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '',
      }

      const result = generateTailwindCssPaddingCode(input)
      expect(result).toBe('px-[max(calc((100%-1200px)/2),1rem)]')
    })

    it('should generate Tailwind padding code with CSS variables', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '--padding',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '--max-width',
      }

      const result = generateTailwindCssPaddingCode(input)
      expect(result).toBe('px-[max(calc((100%-var(--max-width,1200px))/2),var(--padding,1rem))]')
    })

    it('should remove all spaces from CSS code', () => {
      const input: PlatformOutputInput = {
        padding: '2rem',
        defaultPadding: '2rem',
        paddingVariable: '',
        maxWidth: '1440px',
        defaultMaxWidth: '1440px',
        maxWidthVariable: '',
      }

      const result = generateTailwindCssPaddingCode(input)
      expect(result).not.toContain(' ')
      expect(result).toBe('px-[max(calc((100%-1440px)/2),2rem)]')
    })
  })

  describe('generateTailwindCssMaxWidthCode', () => {
    it('should generate Tailwind max-width code with default values', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '',
      }

      const result = generateTailwindCssMaxWidthCode(input)
      expect(result).toBe('max-w-[min(1200px,calc(100%-(1rem*2)))]')
    })

    it('should generate Tailwind max-width code with CSS variables', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '--padding',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '--max-width',
      }

      const result = generateTailwindCssMaxWidthCode(input)
      expect(result).toBe('max-w-[min(var(--max-width,1200px),calc(100%-(var(--padding,1rem)*2)))]')
    })

    it('should remove all spaces from CSS code', () => {
      const input: PlatformOutputInput = {
        padding: '2rem',
        defaultPadding: '2rem',
        paddingVariable: '',
        maxWidth: '1440px',
        defaultMaxWidth: '1440px',
        maxWidthVariable: '',
      }

      const result = generateTailwindCssMaxWidthCode(input)
      expect(result).not.toContain(' ')
      expect(result).toBe('max-w-[min(1440px,calc(100%-(2rem*2)))]')
    })
  })

  describe('edge cases and error handling', () => {
    it('should handle very large values', () => {
      const input: PlatformOutputInput = {
        padding: '9999px',
        defaultPadding: '9999px',
        paddingVariable: '',
        maxWidth: '999999px',
        defaultMaxWidth: '999999px',
        maxWidthVariable: '',
      }

      const result = generateCSSPaddingCode(input)
      expect(result).toBe('max(calc((100% - 999999px) / 2), 9999px)')
    })

    it('should handle very small values', () => {
      const input: PlatformOutputInput = {
        padding: '0.001rem',
        defaultPadding: '0.001rem',
        paddingVariable: '',
        maxWidth: '1px',
        defaultMaxWidth: '1px',
        maxWidthVariable: '',
      }

      const result = generateCSSMaxWidthCode(input)
      expect(result).toBe('min(1px, calc(100% - (0.001rem * 2)))')
    })

    it('should handle zero values', () => {
      const input: PlatformOutputInput = {
        padding: '0',
        defaultPadding: '0',
        paddingVariable: '',
        maxWidth: '0',
        defaultMaxWidth: '0',
        maxWidthVariable: '',
      }

      const result = generateCSSPaddingCode(input)
      expect(result).toBe('max(calc((100% - 0) / 2), 0)')
    })

    it('should handle complex variable names', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '--very-long-variable-name-with-dashes',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '--another-long-variable-name',
      }

      const result = generateCSSPaddingCode(input)
      expect(result).toBe(
        'max(calc((100% - var(--another-long-variable-name, 1200px)) / 2), var(--very-long-variable-name-with-dashes, 1rem))'
      )
    })
  })

  describe('integration tests', () => {
    it('should generate consistent results across all functions', () => {
      const input: PlatformOutputInput = {
        padding: '1rem',
        defaultPadding: '1rem',
        paddingVariable: '--padding',
        maxWidth: '1200px',
        defaultMaxWidth: '1200px',
        maxWidthVariable: '--max-width',
      }

      const cssPadding = generateCSSPaddingCode(input)
      const cssMaxWidth = generateCSSMaxWidthCode(input)
      const tailwindPadding = generateTailwindCssPaddingCode(input)
      const tailwindMaxWidth = generateTailwindCssMaxWidthCode(input)

      expect(cssPadding).toContain('var(--padding, 1rem)')
      expect(cssPadding).toContain('var(--max-width, 1200px)')
      expect(cssMaxWidth).toContain('var(--padding, 1rem)')
      expect(cssMaxWidth).toContain('var(--max-width, 1200px)')
      expect(tailwindPadding).toContain('px-[')
      expect(tailwindMaxWidth).toContain('max-w-[')
    })

    it('should handle all variable combinations correctly', () => {
      const testCases = [
        { paddingVar: '', maxWidthVar: '' },
        { paddingVar: '--padding', maxWidthVar: '' },
        { paddingVar: '', maxWidthVar: '--max-width' },
        { paddingVar: '--padding', maxWidthVar: '--max-width' },
      ]

      testCases.forEach(({ paddingVar, maxWidthVar }) => {
        const input: PlatformOutputInput = {
          padding: '1rem',
          defaultPadding: '1rem',
          paddingVariable: paddingVar,
          maxWidth: '1200px',
          defaultMaxWidth: '1200px',
          maxWidthVariable: maxWidthVar,
        }

        const paddingResult = generateCSSPaddingCode(input)
        const maxWidthResult = generateCSSMaxWidthCode(input)

        if (paddingVar) {
          expect(paddingResult).toContain(`var(--${paddingVar.replace('--', '')}`)
        } else {
          expect(paddingResult).toContain('1rem')
        }

        if (maxWidthVar) {
          expect(maxWidthResult).toContain(`var(--${maxWidthVar.replace('--', '')}`)
        } else {
          expect(maxWidthResult).toContain('1200px')
        }
      })
    })
  })
})
