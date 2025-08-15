import { AnimatedNumber } from '@/components/animate-number'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { useLayoutEffect, useRef, useState } from 'react'

export function PlaygroundPreview({ maxWidth, padding }: { maxWidth: string; padding: string }) {
  const [wrapperViewport, setWrapperViewport] = useState(1600)
  const [containerWidth, setContainerWidth] = useState(0)

  const [paddingWrapperWidth, setPaddingWrapperWidth] = useState(0)
  const [maxWidthWrapperWidth, setMaxWidthWrapperWidth] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const paddingWrapperContentRef = useRef<HTMLDivElement>(null)
  const maxWidthWrapperContentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    const paddingWrapperContent = paddingWrapperContentRef.current
    const maxWidthWrapperContent = maxWidthWrapperContentRef.current

    function resizeCallback() {
      if (container) {
        const containerRect = container.getBoundingClientRect()
        setContainerWidth(containerRect.width)
      }

      if (maxWidthWrapperContent) {
        const computedWidth = getComputedStyle(maxWidthWrapperContent).width
        setMaxWidthWrapperWidth(parseFloat(computedWidth))
      }

      if (paddingWrapperContent) {
        const computedPaddingWidth = getComputedStyle(paddingWrapperContent).width
        setPaddingWrapperWidth(parseFloat(computedPaddingWidth))
      }
    }

    resizeCallback()
    const observer = new window.ResizeObserver(resizeCallback)
    if (container) observer.observe(container)
    if (maxWidthWrapperContent) observer.observe(maxWidthWrapperContent)
    if (paddingWrapperContent) observer.observe(paddingWrapperContent)

    return () => observer.disconnect()
  }, [containerRef, maxWidthWrapperContentRef, paddingWrapperContentRef])

  const rawScale = containerWidth / wrapperViewport
  const maxWidthWrapperPadding = (wrapperViewport - maxWidthWrapperWidth) / 2
  const paddingWrapperPadding = (wrapperViewport - maxWidthWrapperWidth) / 2

  return (
    <div ref={containerRef} className="relative isolate h-full min-h-72">
      <div className="absolute inset-0 flex size-full flex-col gap-2">
        <MaxWidthWrapper
          padding={padding}
          maxWidth={maxWidth}
          rawScale={rawScale}
          wrapperViewport={wrapperViewport}
          contentWidth={maxWidthWrapperWidth}
          contentPadding={maxWidthWrapperPadding}
          contentRef={maxWidthWrapperContentRef}
        />

        {/* <PaddingWrapper
          padding={padding}
          maxWidth={maxWidth}
          rawScale={rawScale}
          wrapperViewport={wrapperViewport}
          contentWidth={paddingWrapperWidth}
          contentPadding={paddingWrapperPadding}
          contentRef={paddingWrapperContentRef}
        /> */}

        <div className="flex flex-col gap-3">
          <Label className="text-muted-foreground text-xs">Browser Width</Label>

          <Slider
            min={100}
            max={3000}
            showValues
            value={[wrapperViewport]}
            onValueChange={([value]) => setWrapperViewport(value)}
          />

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[2560, 1920, 1440, 1366, 1280, 1024, 768, 480, 320].map((width) => (
              <button
                key={width}
                className="border-border hover:bg-muted flex items-center justify-center rounded-md border px-2 py-1 text-xs transition-all"
                onClick={() => setWrapperViewport(width)}
              >
                {width}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

type WrapperViewProps = {
  maxWidth: string
  padding: string

  rawScale: number
  contentWidth: number
  contentPadding: number
  wrapperViewport: number

  contentRef: React.RefObject<HTMLDivElement | null>
}

export function MaxWidthWrapper({
  maxWidth,
  padding,
  rawScale,
  contentRef,
  contentWidth,
  contentPadding,
  wrapperViewport,
}: WrapperViewProps) {
  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden">
      <div>Max Width Wrapper</div>

      <div
        className="bg-secondary h-full origin-left"
        style={{ width: `${wrapperViewport}px`, transform: `scaleX(${rawScale})` }}
      >
        <div
          ref={contentRef}
          className="bg-primary mx-auto h-full"
          style={{ maxWidth: `min(${maxWidth}, (100% - (${padding} * 2)))` }}
        />
      </div>

      <NumbersView padding={Math.max(0, contentPadding)} contentWidth={Math.max(0, contentWidth)} />
    </div>
  )
}

export function PaddingWrapper({
  padding,
  maxWidth,
  rawScale,
  contentRef,
  contentWidth,
  contentPadding,
  wrapperViewport,
}: WrapperViewProps) {
  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden">
      <div>Padding Wrapper</div>

      <div
        className="bg-secondary h-full origin-left"
        style={{
          width: `${wrapperViewport}px`,
          transform: `scaleX(${rawScale})`,
        }}
      >
        <div
          className="h-full"
          style={{ paddingInline: `max(calc((100% - ${maxWidth}) / 2), ${padding})` }}
        >
          <div ref={contentRef} className="bg-primary h-full w-full" />
        </div>
      </div>

      <NumbersView padding={Math.max(0, contentPadding)} contentWidth={Math.max(0, contentWidth)} />
    </div>
  )
}

function NumbersView({ padding, contentWidth }: { padding: number; contentWidth: number }) {
  return (
    <div className="flex items-center justify-between font-mono text-sm">
      <AnimatedNumber value={padding} formatter={(value) => +value.toFixed(1)} />
      <AnimatedNumber value={contentWidth} formatter={(value) => +value.toFixed(1)} />
      <AnimatedNumber value={padding} formatter={(value) => +value.toFixed(1)} />
    </div>
  )
}
