export type PlatformOutput = {
  file: string
  code: string
}

export class Platform {
  public id = crypto.randomUUID()
  constructor(
    public name: string,
    public generatePaddingWrapper: (maxWidth: string, padding: string) => PlatformOutput[],
    public generateMaxWidthWrapper: (maxWidth: string, padding: string) => PlatformOutput[]
  ) {}
}
