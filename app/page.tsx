import {
  Footer,
  Hero,
  Navbar,
  Playground,
  Testimonials,
  TheProblems,
  TheSolutions,
  WhyWrapper,
} from '@/features/landing'

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Playground />
        <WhyWrapper />
        <TheProblems />
        <TheSolutions />
        <Testimonials />
      </main>

      <Footer />
    </>
  )
}
