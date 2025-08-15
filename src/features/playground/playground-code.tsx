import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { Fragment, useMemo, useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { findLanguage, findLanguageIcon } from './helpers/find-language'
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
      <div className="bg-muted/30 flex items-center justify-between border-b pr-1">
        <div className="flex items-center">
          {output.map(({ file }, i, output) => (
            <Fragment key={file}>
              <button
                onClick={() => setSelectedTab(file)}
                className={cn(
                  'flex items-center gap-2 border-b border-transparent px-4 py-2 text-sm font-medium transition-colors',
                  selectedFile.file === file
                    ? 'bg-background text-foreground border-b-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                )}
              >
                {findLanguageIcon(file)}
                {file}
              </button>

              {i < output.length - 1 && <div className="bg-border w-[1px] self-stretch" />}
            </Fragment>
          ))}
        </div>

        {selectedFile && (
          <button
            onClick={() => handleCopy(selectedFile.code, selectedFile.file)}
            disabled={copiedFile === selectedFile.file}
            className={cn(
              'text-muted-foreground mb-[2px] flex h-8 items-center gap-2 rounded-md px-3 text-xs font-medium transition-colors',
              copiedFile === selectedFile.file
                ? 'text-success'
                : 'hover:bg-muted hover:text-foreground'
            )}
          >
            {copiedFile === selectedFile.file ? (
              <>
                <FiCheck className="text-sm" />
                Copied!
              </>
            ) : (
              <>
                <FiCopy className="text-sm" />
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
            customStyle={{ paddingBottom: '1rem' }}
            language={findLanguage(selectedFile.file) || undefined}
          >
            {selectedFile.code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
