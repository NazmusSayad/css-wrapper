import { Button } from '@/components/ui/button'
import { Wrapper } from '@/layouts/wrapper'
import { cn } from '@/lib/utils'
import { HeroCodeAnimations } from './hero-code-animations'
import styles from './styles.module.scss'

export function Hero() {
  return (
    <section className="relative -mb-8 overflow-hidden py-28 sm:-mb-12 sm:py-36">
      <div className="from-primary/5 via-background to-accent/5 absolute inset-0 -z-10 bg-gradient-to-br [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
        <div
          className={cn(
            styles.bgGridPattern,
            'pointer-events-none absolute inset-0 opacity-50 blur-[1px]'
          )}
        />
      </div>

      <HeroCodeAnimations />

      <Wrapper className="text-center [--max-width:60rem] sm:pb-12">
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
          <Button variant="outline" size="lg" className="text-base backdrop-blur-2xl" asChild>
            <a href="#why">Learn why</a>
          </Button>
        </div>
      </Wrapper>
    </section>
  )
}
