import {
  Footer,
  Hero,
  Navbar,
  Testimonials,
  TheProblems,
  TheSolutions,
  WhyWrapper,
} from '@/features/landing'
import { WrapperPlayground } from '@/features/playground'
import { Wrapper } from '@/layouts/wrapper'

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="playground">
          <Wrapper>
            <WrapperPlayground />
          </Wrapper>
        </section>

        <WhyWrapper />
        <TheProblems />
        <TheSolutions />
        <Testimonials />
      </main>

      <Footer />
    </>
  )
}
