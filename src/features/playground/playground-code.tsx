import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'
import { useMemo, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { findLanguage } from './helpers/find-language'
import { platforms } from './languages'
import { Platform, type PlatformOutput } from './types'

const platformWithId = platforms.map((p) => ({ ...p, id: crypto.randomUUID() }))

export function PlaygroundCode({ ...platformOutputProps }: PlatformOutputProps) {
  const [mode, setMode] = useState<'padding' | 'max-width'>('padding')
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>(platformWithId[0].id)

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
          <Select value={selectedPlatformId} onValueChange={setSelectedPlatformId}>
            <SelectTrigger className="!h-11">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>

            <SelectContent>
              {platformWithId.map(({ id, name }) => (
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
        platform={platformWithId.find(({ id }) => id === selectedPlatformId) ?? platformWithId[0]}
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
  const [copiedFile, setCopiedFile] = useState<string | null>(null)

  const output = useMemo(() => {
    return mode === 'padding'
      ? platform.paddingWrapper(padding, maxWidth)
      : platform.maxWidthWrapper(padding, maxWidth)
  }, [mode, platform, padding, maxWidth])

  const handleCopy = async (code: string, file: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedFile(file)
      setTimeout(() => setCopiedFile(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="space-y-4">
      {output.map(({ file, code }) => (
        <div key={file} className="bg-card overflow-hidden rounded-md border">
          <div className="bg-muted/30 flex items-center justify-between border-b px-4 py-1">
            <div className="text-muted-foreground text-sm font-medium">{file}</div>
            <button
              onClick={() => handleCopy(code, file)}
              disabled={copiedFile === file}
              className={cn(
                'text-muted-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                copiedFile === file ? 'text-success' : 'hover:bg-muted hover:text-foreground'
              )}
            >
              {copiedFile === file ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
          </div>

          <div className="*:!text-[1rem] *:!leading-[1.6]">
            <SyntaxHighlighter
              wrapLines
              wrapLongLines
              showLineNumbers
              style={atomOneDark}
              language={findLanguage(file)}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </div>
  )
}
