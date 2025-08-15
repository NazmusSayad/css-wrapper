import { SyntaxHighlightedCode } from '@/components/syntax-highlighted-code'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Platform, platforms } from './languages'

export function PlaygroundCode({ ...platformOutputProps }: PlatformOutputProps) {
  const [mode, setMode] = useState<'padding' | 'max-width'>('padding')

  const [platform, setPlatform] = useState<string>(platforms[0].id)
  const selectedPlatform = platforms.find(({ id }) => id === platform)

  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <div className="flex">
          <button
            onClick={() => setMode('padding')}
            className={cn(
              'border-input flex items-center justify-between gap-2 rounded-l-md border bg-transparent px-3 py-2 text-sm transition-[color,box-shadow] outline-none',
              mode === 'padding'
                ? 'bg-primary/10 text-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-input/50'
            )}
          >
            Padding Wrapper
          </button>
          <button
            onClick={() => setMode('max-width')}
            className={cn(
              'border-input flex items-center justify-between gap-2 rounded-r-md border-t border-r border-b bg-transparent px-3 py-2 text-sm transition-[color,box-shadow] outline-none',
              mode === 'max-width'
                ? 'bg-primary/10 text-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-input/50'
            )}
          >
            Max Width Wrapper
          </button>
        </div>

        <div>
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger className="!h-11">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>

            <SelectContent>
              {platforms.map(({ id, name }) => (
                <SelectItem key={id} value={id}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      <PlatformOutput
        mode={mode}
        platform={selectedPlatform ?? platforms[0]}
        {...platformOutputProps}
      />
    </>
  )
}

export type PlatformOutputProps = {
  padding: string
  maxWidth: string
}

function PlatformOutput({
  padding,
  maxWidth,
  platform,
  mode,
}: PlatformOutputProps & {
  platform: Platform
  mode: 'padding' | 'max-width'
}) {
  const output =
    mode === 'padding'
      ? platform.generatePaddingWrapper(padding, maxWidth)
      : platform.generateMaxWidthWrapper(padding, maxWidth)

  return (
    <div className="space-y-4">
      {output.map(({ file, code }) => (
        <div key={file} className="bg-card rounded-lg border">
          <div className="bg-muted/30 flex items-center justify-between border-b px-4 py-2">
            <div className="text-muted-foreground text-sm font-medium">{file}</div>
            <button className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors">
              Copy
            </button>
          </div>

          <SyntaxHighlightedCode className="block py-2 font-mono text-[0.9375rem] leading-[2]">
            {code}
          </SyntaxHighlightedCode>
        </div>
      ))}
    </div>
  )
}
