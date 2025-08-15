export type PlatformOutput = {
  file: string
  code: string
}

export type PlatformOutputInput = {
  padding: string
  defaultPadding: string
  paddingVariable: string

  maxWidth: string
  defaultMaxWidth: string
  maxWidthVariable: string
}

export type Platform = {
  name: string
  paddingWrapper(input: PlatformOutputInput): PlatformOutput[]
  maxWidthWrapper(input: PlatformOutputInput): PlatformOutput[]
}
