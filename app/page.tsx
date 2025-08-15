import { Footer, Hero, Navbar, Playground, Testimonials, WhyWrapper } from '@/features/landing'

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Playground />
        <WhyWrapper />
        <Testimonials />
      </main>

      <Footer />
    </>
  )
}
