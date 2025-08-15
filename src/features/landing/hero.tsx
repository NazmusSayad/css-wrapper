import { Button } from '@/components/ui/button'
import { Wrapper } from '@/layouts/wrapper'
import { BsQuestionOctagon } from 'react-icons/bs'
import { LuPlay } from 'react-icons/lu'

export function Hero() {
  return (
    <section className="from-primary/5 via-background to-accent/5 relative overflow-hidden bg-gradient-to-br">
      <div className="h-12 sm:h-20" />

      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-[0.02]" />

      <Wrapper className="py-20 text-center [--max-width:60rem] sm:py-28">
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

        <p className="text-muted-foreground mb-10 text-base sm:text-xl md:text-2xl">
          Generate responsive CSS wrappers that give you{' '}
          <strong className="text-foreground">exactly</strong> the content width you want. No more
          math, no more surprises.
        </p>

        <div className="flex flex-col justify-center gap-4 min-[22.5rem]:flex-row">
          <Button
            size="lg"
            className="!h-11 rounded-[0.8125rem] !px-6 text-base sm:!h-12 sm:!px-7"
            asChild
          >
            <a href="#playground">
              <LuPlay className="text-base" />
              TRY IT NOW
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="!h-11 rounded-[0.8125rem] !px-5 text-base sm:!h-12 sm:!px-6"
            asChild
          >
            <a href="#why">
              <BsQuestionOctagon className="text-base" />
              WHY?
            </a>
          </Button>
        </div>
      </Wrapper>

      <div className="flex items-center justify-center py-16">
        {/* Cool geometric pattern */}
        <div className="relative">
          {/* Main hexagon */}
          <div className="from-primary/20 via-primary/10 border-primary/30 h-32 w-32 rotate-45 rounded-lg border bg-gradient-to-br to-transparent shadow-2xl" />

          {/* Floating elements */}
          <div className="bg-chart-2/40 absolute -top-4 -left-4 h-6 w-6 animate-pulse rounded-full" />
          <div className="bg-chart-4/50 absolute -top-2 -right-2 h-4 w-4 animate-pulse rounded-full delay-300" />
          <div className="bg-primary/30 absolute -bottom-3 left-8 h-5 w-5 animate-pulse rounded-full delay-700" />

          {/* Inner accent */}
          <div className="from-primary/40 absolute inset-4 h-24 w-24 rotate-45 rounded-md bg-gradient-to-br to-transparent" />

          {/* Glow effect */}
          <div className="bg-primary/5 absolute inset-0 h-32 w-32 rotate-45 rounded-lg blur-xl" />
        </div>
      </div>
    </section>
  )
}
