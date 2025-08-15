import { Slider } from '@/components/ui/slider'
import { useLayoutEffect, useRef, useState } from 'react'

export function PlaygroundPreview({ maxWidth, padding }: { maxWidth: string; padding: string }) {
  const [wrapperViewport, setWrapperViewport] = useState(1600)
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const container = containerRef.current!
    const content = contentRef.current!

    if (!container) return

    function resizeCallback() {
      const containerRect = container.getBoundingClientRect()
      setContainerWidth(containerRect.width)

      const computedWidth = getComputedStyle(content).width
      setContentWidth(parseFloat(computedWidth))
    }

    const observer = new window.ResizeObserver(resizeCallback)
    observer.observe(container)
    observer.observe(content)
    resizeCallback()

    return () => {
      observer.disconnect()
    }
  }, [containerRef, contentRef])

  const rawScale = containerWidth / wrapperViewport
  const contentPadding = (wrapperViewport - contentWidth) / 2

  return (
    <div ref={containerRef} className="relative isolate h-full min-h-48">
      <div className="absolute inset-0 flex size-full flex-col gap-2">
        <div>Preview</div>

        <div className="relative h-full w-full max-w-full overflow-hidden">
          <div
            className="bg-secondary h-full origin-left"
            style={{
              width: `${wrapperViewport}px`,
              transform: `scaleX(${rawScale})`,
            }}
          >
            <div
              ref={contentRef}
              className="bg-primary mx-auto h-full"
              style={{ maxWidth: `min(${maxWidth}, (100% - (${padding} * 2)))` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 text-sm">
          <span>{+contentPadding.toFixed(1)}</span>
          <span>{+contentWidth.toFixed(1)}</span>
          <span>{+contentPadding.toFixed(1)}</span>
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
