import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export function Wrapper({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-[max(calc((100%-var(--max-width,82.5rem))/2),var(--padding,4%))]',
        className
      )}
      {...props}
    />
  )
}
