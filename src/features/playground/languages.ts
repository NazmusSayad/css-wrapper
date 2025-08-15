type Output = {
  file: string
  code: string
}

export class Platform {
  public id = crypto.randomUUID()
  constructor(
    public name: string,
    public generatePaddingWrapper: (maxWidth: string, padding: string) => Output[],
    public generateMaxWidthWrapper: (maxWidth: string, padding: string) => Output[]
  ) {}
}

export const platforms: Platform[] = [
  new Platform(
    'JavaScript',
    () => [
      {
        file: 'layout.tsx',
        code: 'import { MaxWidthWrapper } from "@/components/max-width-wrapper"',
      },
    ],
    () => [
      {
        file: 'layout.tsx',
        code: 'import { MaxWidthWrapper } from "@/components/max-width-wrapper"',
      },
    ]
  ),

  new Platform(
    'TypeScript',
    () => [
      {
        file: 'layout.tsx',
        code: 'import { PaddingWrapper } from "@/components/padding-wrapper"',
      },
    ],
    () => [
      {
        file: 'layout.tsx',
        code: 'import { PaddingWrapper } from "@/components/padding-wrapper"',
      },
    ]
  ),
]
