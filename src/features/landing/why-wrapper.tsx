import { Wrapper } from '@/layouts/wrapper'
import { ProblemSolution1 } from './problem-solution-1'
import { ProblemSolution2 } from './problem-solution-2'
import { ProblemSolution3 } from './problem-solution-3'

export function WhyWrapper() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <Wrapper>
        <div className="text-left">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why CSS Wrapper is a game-changer
          </h2>
          <p className="text-muted-foreground mb-16 text-lg">
            Traditional CSS wrappers create math problems and maintenance headaches. Our solution
            gives you exactly what you want with zero calculations.
          </p>
        </div>

        <div className="space-y-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                Key Benefits
              </div>
              <div className="from-border h-px flex-1 bg-gradient-to-r to-transparent"></div>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <li className="group flex items-center gap-3">
                <div className="bg-primary/10 group-hover:bg-primary/20 flex size-10 items-center justify-center rounded-full transition-colors">
                  <svg className="text-primary size-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Precise Widths</h3>
                  <p className="text-muted-foreground text-sm">Get exactly what you specify</p>
                </div>
              </li>

              <li className="group flex items-center gap-3">
                <div className="bg-chart-2/10 group-hover:bg-chart-2/20 flex size-10 items-center justify-center rounded-full transition-colors">
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
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Responsive</h3>
                  <p className="text-muted-foreground text-sm">Works on every device</p>
                </div>
              </li>

              <li className="group flex items-center gap-3">
                <div className="bg-chart-4/10 group-hover:bg-chart-4/20 flex size-10 items-center justify-center rounded-full transition-colors">
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
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Zero Math</h3>
                  <p className="text-muted-foreground text-sm">No calculations needed</p>
                </div>
              </li>

              <li className="group flex items-center gap-3">
                <div className="bg-success/10 group-hover:bg-success/20 flex size-10 items-center justify-center rounded-full transition-colors">
                  <svg
                    className="text-success size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">Nested Ready</h3>
                  <p className="text-muted-foreground text-sm">Works at any depth</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-20">
            <ProblemSolution1 />
            <ProblemSolution2 />
            <ProblemSolution3 />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
