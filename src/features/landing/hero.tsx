import { Button } from '@/components/ui/button'
import { Wrapper } from '@/layouts/wrapper'

export function Hero() {
  return (
    <section className="from-primary/5 via-background to-accent/5 relative overflow-hidden bg-gradient-to-br py-20 sm:py-28">
      <div className="h-20" />

      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-[0.02]" />

      <Wrapper className="text-center [--max-width:60rem]">
        <div className="bg-secondary/50 text-secondary-foreground mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <span className="relative flex size-2">
            <span className="bg-success absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-success relative inline-flex size-2 rounded-full" />
          </span>
          Stop fighting with CSS math.
        </div>

        <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          The best{' '}
          <span className="relative">
            <span className="from-primary via-chart-1 to-chart-2 bg-gradient-to-r bg-clip-text text-transparent">
              CSS Wrapper
            </span>
            <svg
              className="text-primary/20 absolute -bottom-2 left-0 h-3 w-full"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C20 2 40 2 60 6C80 10 100 10 120 6C140 2 160 2 180 6C185 7 190 8 195 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="text-muted-foreground mb-10 text-xl sm:text-2xl">
          Generate responsive CSS wrappers that give you{' '}
          <strong className="text-foreground">exactly</strong> the content width you want. No more
          math, no more surprises.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="text-base" asChild>
            <a href="#playground">Try it now</a>
          </Button>
          <Button variant="outline" size="lg" className="text-base" asChild>
            <a href="#problems">Learn why</a>
          </Button>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-6">
          <div className="from-primary/10 flex items-center gap-2 rounded-full bg-gradient-to-r to-transparent px-4 py-2">
            <svg className="text-primary size-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-foreground font-medium">Precise Widths</span>
          </div>

          <div className="from-chart-2/10 flex items-center gap-2 rounded-full bg-gradient-to-r to-transparent px-4 py-2">
            <svg
              className="text-chart-2 size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="text-foreground font-medium">Responsive</span>
          </div>

          <div className="from-chart-4/10 flex items-center gap-2 rounded-full bg-gradient-to-r to-transparent px-4 py-2">
            <svg
              className="text-chart-4 size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-foreground font-medium">Zero Math</span>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
