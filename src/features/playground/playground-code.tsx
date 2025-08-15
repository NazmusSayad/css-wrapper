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
import { platforms } from './platforms'
import { Platform, PlatformOutputInput, type PlatformOutput } from './types'

export function PlaygroundCode({ ...platformOutputProps }: PlatformOutputInput) {
  const [mode, setMode] = useState<'padding' | 'max-width'>('padding')
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>(platforms[0].id)

  return (
    <>
      <header className="mb-3 grid grid-cols-1 items-center justify-between gap-2 sm:grid-cols-2">
        <div className="grid w-full grid-cols-2 sm:w-[20rem]">
          <button
            onClick={() => setMode('max-width')}
            className={cn(
              'border-input flex h-11 w-full items-center justify-center gap-2 rounded-l-md border bg-transparent px-3 py-2 text-sm transition-[color,box-shadow] outline-none',
              mode === 'max-width'
                ? 'bg-primary/10 text-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-input/50'
            )}
          >
            Max Width Wrapper
          </button>
          <button
            onClick={() => setMode('padding')}
            className={cn(
              'border-input flex h-11 w-full items-center justify-center gap-2 rounded-r-md border border-l-0 bg-transparent px-3 py-2 text-sm transition-[color,box-shadow] outline-none',
              mode === 'padding'
                ? 'bg-primary/10 text-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-input/50'
            )}
          >
            Padding Wrapper
          </button>
        </div>

        <Select value={selectedPlatformId} onValueChange={setSelectedPlatformId}>
          <SelectTrigger className="!h-11 !w-full min-w-[10rem] justify-self-end !px-4 sm:!w-auto">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>

          <SelectContent align="end">
            {platforms.map(({ id, name }) => (
              <SelectItem key={id} value={id}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </header>

      <PlatformOutput
        mode={mode}
        platform={platforms.find(({ id }) => id === selectedPlatformId) || platforms[0]}
        {...platformOutputProps}
      />
    </>
  )
}

function PlatformOutput({
  platform,
  mode,
  padding,
  maxWidth,
  paddingVariable,
  maxWidthVariable,
  defaultPadding,
  defaultMaxWidth,
}: PlatformOutputInput & {
  platform: Platform
  mode: 'padding' | 'max-width'
}) {
  const [copiedFile, setCopiedFile] = useState<string | null>(null)
  const [selectedTab, setSelectedTab] = useState<string | null>(null)

  const output = useMemo(() => {
    return mode === 'padding'
      ? platform.paddingWrapper({
          padding,
          maxWidth,
          paddingVariable,
          maxWidthVariable,
          defaultPadding,
          defaultMaxWidth,
        })
      : platform.maxWidthWrapper({
          padding,
          maxWidth,
          paddingVariable,
          maxWidthVariable,
          defaultPadding,
          defaultMaxWidth,
        })
  }, [
    mode,
    platform,
    padding,
    maxWidth,
    paddingVariable,
    maxWidthVariable,
    defaultPadding,
    defaultMaxWidth,
  ])

  const handleCopy = async (code: string, file: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedFile(file)
      setTimeout(() => setCopiedFile(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const selectedFile = output.find(({ file }) => file === selectedTab) || output[0]

  return (
    <div className="bg-card overflow-hidden rounded-md border">
      <div className="bg-muted/30 flex items-center justify-between border-b">
        <div className="flex items-center">
          {output.map(({ file }) => (
            <button
              key={file}
              onClick={() => setSelectedTab(file)}
              className={cn(
                'border-border flex items-center gap-2 border-r px-4 py-2 text-sm font-medium transition-colors',
                selectedFile.file === file
                  ? 'bg-background text-foreground border-b-primary border-b-2'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
            >
              {file}
            </button>
          ))}
        </div>

        {selectedFile && (
          <button
            onClick={() => handleCopy(selectedFile.code, selectedFile.file)}
            disabled={copiedFile === selectedFile.file}
            className={cn(
              'text-muted-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              copiedFile === selectedFile.file
                ? 'text-success'
                : 'hover:bg-muted hover:text-foreground'
            )}
          >
            {copiedFile === selectedFile.file ? (
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
        )}
      </div>

      {selectedFile && (
        <div className="*:!text-[1rem] *:!leading-[1.6]">
          <SyntaxHighlighter
            showLineNumbers
            style={atomOneDark}
            language={findLanguage(selectedFile.file)}
            customStyle={{ paddingBottom: '1rem' }}
          >
            {selectedFile.code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
