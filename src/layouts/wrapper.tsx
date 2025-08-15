export function Wrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={`mx-auto w-full max-w-[min(var(--max-width,82.5rem),calc(100%-(var(--padding,4%)*2)))] ${typeof className === 'string' ? className : ''}`}
      {...props}
    />
  )
}
