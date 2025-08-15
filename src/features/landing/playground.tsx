import { WrapperPlayground } from '@/features/playground'
import { Wrapper } from '@/layouts/wrapper'

export function Playground({}) {
  return (
    <section id="playground" className="py-24 sm:py-32">
      <Wrapper>
        <WrapperPlayground />
      </Wrapper>
    </section>
  )
}
