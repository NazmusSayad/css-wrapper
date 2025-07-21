import { useLayoutEffect, useRef, useState } from 'react'

export function PlaygroundPreview({ maxWidth, padding }: { maxWidth: string; padding: string }) {
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    function resizeCallback() {
      setContainerWidth(container!.clientWidth)
    }

    const observer = new window.ResizeObserver(resizeCallback)
    observer.observe(container)
    resizeCallback()

    return () => {
      observer.disconnect()
    }
  }, [])

  return <div ref={containerRef}>{containerWidth}</div>
}
