import { useLayoutEffect, useRef, useState } from 'react'

export function PlaygroundPreview({ maxWidth, padding }: { maxWidth: string; padding: string }) {
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    function resizeCallback() {
      setContainerWidth(parseFloat(getComputedStyle(container!).width))
    }

    const observer = new window.ResizeObserver(resizeCallback)
    observer.observe(container)
    resizeCallback()

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className={'relative isolate h-full'}>
      <div className={'absolute inset-0 size-full overflow-hidden'}>
        <div
          className={'bg-destructive h-full'}
          style={{
            // @ts-expect-error --scale is not a valid CSS variable
            '--scale': `${containerWidth / WRAPPER_CONTAINER_WIDTH}`,
            width: `calc(var(--scale) * ${WRAPPER_CONTAINER_WIDTH}px)`,
          }}
        >
          <div className={'mx-auto'} style={{ maxWidth: `calc(var(--scale) * ${maxWidth})` }}>
            lorem
          </div>
        </div>
      </div>
    </div>
  )
}

const WRAPPER_CONTAINER_WIDTH = 1600
