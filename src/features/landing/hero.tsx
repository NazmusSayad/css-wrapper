import { Button } from '@/components/ui/button'
import { Wrapper } from '@/layouts/wrapper'

export function Hero() {
  return (
    <section className="from-primary/5 via-background to-accent/5 relative overflow-hidden bg-gradient-to-br py-24 sm:py-32">
      <div className="bg-grid-pattern absolute inset-0 opacity-[0.02]" />
      <Wrapper>
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-secondary/50 text-secondary-foreground mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
            <span className="relative flex size-2">
              <span className="bg-success absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-success relative inline-flex size-2 rounded-full" />
            </span>
            Stop fighting with CSS math. Start building layouts that work.
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

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-primary/10 flex size-12 items-center justify-center rounded-lg">
                <svg
                  className="text-primary size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-foreground font-semibold">Precise Content Widths</h3>
              <p className="text-muted-foreground text-center text-sm">
                Get exactly what you specify
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="bg-chart-2/10 flex size-12 items-center justify-center rounded-lg">
                <svg
                  className="text-chart-2 size-6"
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
              </div>
              <h3 className="text-foreground font-semibold">Responsive by Default</h3>
              <p className="text-muted-foreground text-center text-sm">Works on all screen sizes</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="bg-chart-4/10 flex size-12 items-center justify-center rounded-lg">
                <svg
                  className="text-chart-4 size-6"
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
              </div>
              <h3 className="text-foreground font-semibold">Zero Math Required</h3>
              <p className="text-muted-foreground text-center text-sm">
                No more manual calculations
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
