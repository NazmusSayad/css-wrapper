import { WrapperPlayground } from '@/features/playground'
import { Wrapper } from '@/layouts/wrapper'

export function Playground({}) {
  return (
    <section id="playground" className="py-20 sm:py-24">
      <Wrapper>
        <WrapperPlayground />
      </Wrapper>
    </section>
  )
}
