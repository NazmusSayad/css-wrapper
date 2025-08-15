import { FadedDecimalNumber } from '@/components/animate-number'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { useLayoutEffect, useRef, useState } from 'react'

export function PlaygroundPreview({ maxWidth, padding }: { maxWidth: string; padding: string }) {
  const [wrapperViewport, setWrapperViewport] = useState(1600)
  const [containerWidth, setContainerWidth] = useState(0)

  const [_paddingWrapperWidth, setPaddingWrapperWidth] = useState(0)
  const [_maxWidthWrapperWidth, setMaxWidthWrapperWidth] = useState(0)

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

  return (
    <div ref={containerRef} className="relative isolate h-full">
      <div className="inset-0 flex size-full flex-col gap-2 md:absolute">
        <h3>Preview</h3>

        <MaxWidthWrapper
          padding={padding}
          maxWidth={maxWidth}
          rawScale={containerWidth / wrapperViewport}
          wrapperViewport={wrapperViewport}
          contentWidth={_maxWidthWrapperWidth}
          contentRef={maxWidthWrapperContentRef}
        />

        {/* <PaddingWrapper
          padding={padding}
          maxWidth={maxWidth}
          rawScale={containerWidth / wrapperViewport}
          wrapperViewport={wrapperViewport}
          contentWidth={_paddingWrapperWidth}
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
  wrapperViewport: number

  contentRef: React.RefObject<HTMLDivElement | null>
}

export function MaxWidthWrapper({
  maxWidth,
  padding,
  rawScale,
  contentRef,
  contentWidth,
  wrapperViewport,
}: WrapperViewProps) {
  const contentPadding = (wrapperViewport - contentWidth) / 2

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="h-full overflow-hidden rounded-md">
        <div
          className="bg-secondary h-full min-h-32 origin-left py-4 md:min-h-auto"
          style={{ width: `${wrapperViewport}px`, transform: `scaleX(${rawScale})` }}
        >
          <div
            ref={contentRef}
            className="bg-primary mx-auto h-full"
            style={{ maxWidth: `min(${maxWidth}, (100% - (${padding} * 2)))` }}
          />
        </div>
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
  wrapperViewport,
}: WrapperViewProps) {
  const contentPadding = (wrapperViewport - contentWidth) / 2

  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden">
      <div
        className="bg-secondary h-full min-h-24 origin-left md:min-h-auto"
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
      <FadedDecimalNumber value={padding} formatter={(value) => +value.toFixed(1)} />
      <FadedDecimalNumber value={contentWidth} formatter={(value) => +value.toFixed(1)} />
      <FadedDecimalNumber value={padding} formatter={(value) => +value.toFixed(1)} />
    </div>
  )
}
