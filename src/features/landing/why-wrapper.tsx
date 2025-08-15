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
          <ProblemSolution1 />
          <ProblemSolution2 />
          <ProblemSolution3 />
        </div>
      </Wrapper>
    </section>
  )
}
