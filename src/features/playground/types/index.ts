export type PlatformOutput = {
  file: string
  code: string
}

export type Platform = {
  name: string
  paddingWrapper(maxWidth: string, padding: string): PlatformOutput[]
  maxWidthWrapper(maxWidth: string, padding: string): PlatformOutput[]
}
