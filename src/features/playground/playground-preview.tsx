import { AnimatedNumber } from '@/components/animate-number'
import { Slider } from '@/components/ui/slider'
import { useLayoutEffect, useRef, useState } from 'react'
export function PlaygroundPreview({ maxWidth, padding }: { maxWidth: string; padding: string }) {
  const [wrapperViewport, setWrapperViewport] = useState(1600)
  const [containerWidth, setContainerWidth] = useState(0)

  const [maxWidthWrapperWidth, setMaxWidthWrapperWidth] = useState(0)
  const [paddingWrapperWidth, setPaddingWrapperWidth] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const maxWidthWrapperContentRef = useRef<HTMLDivElement>(null)
  const paddingWrapperContentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const container = containerRef.current!
    const maxWidthWrapperContent = maxWidthWrapperContentRef.current!
    const paddingWrapperContent = paddingWrapperContentRef.current!

    if (!container) return

    function resizeCallback() {
      const containerRect = container.getBoundingClientRect()
      setContainerWidth(containerRect.width)

      const computedWidth = getComputedStyle(maxWidthWrapperContent).width
      setMaxWidthWrapperWidth(parseFloat(computedWidth))

      const computedPaddingWidth = getComputedStyle(paddingWrapperContent).width
      setPaddingWrapperWidth(parseFloat(computedPaddingWidth))
    }

    const observer = new window.ResizeObserver(resizeCallback)
    observer.observe(container)
    observer.observe(maxWidthWrapperContent)
    observer.observe(paddingWrapperContent)
    resizeCallback()

    return () => {
      observer.disconnect()
    }
  }, [containerRef, maxWidthWrapperContentRef])

  const rawScale = containerWidth / wrapperViewport
  const maxWidthWrapperPadding = (wrapperViewport - maxWidthWrapperWidth) / 2
  const paddingWrapperPadding = (wrapperViewport - maxWidthWrapperWidth) / 2

  return (
    <div ref={containerRef} className="relative isolate h-full min-h-48">
      <div className="absolute inset-0 flex size-full flex-col gap-2">
        <div>Preview</div>

        <div className="flex h-full flex-col gap-2 overflow-hidden">
          <div
            className="bg-secondary h-full origin-left"
            style={{ width: `${wrapperViewport}px`, transform: `scaleX(${rawScale})` }}
          >
            <div
              ref={maxWidthWrapperContentRef}
              className="bg-primary mx-auto h-full"
              style={{ maxWidth: `min(${maxWidth}, (100% - (${padding} * 2)))` }}
            />
          </div>

          <NumbersView
            padding={Math.max(0, maxWidthWrapperPadding)}
            contentWidth={Math.max(0, maxWidthWrapperWidth)}
          />
        </div>

        <div className="flex h-full flex-col gap-2 overflow-hidden">
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
              <div ref={paddingWrapperContentRef} className="bg-primary h-full w-full" />
            </div>
          </div>

          <NumbersView
            padding={Math.max(0, paddingWrapperPadding)}
            contentWidth={Math.max(0, paddingWrapperWidth)}
          />
        </div>

        <div className="pt-2">
          <Slider
            min={100}
            max={3000}
            showValues
            value={[wrapperViewport]}
            onValueChange={([value]) => setWrapperViewport(value)}
          />
        </div>
      </div>
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
