'use client'

export const dynamic = 'force-static'

import { WrapperPlayground } from '@/features/playground'
import { Wrapper } from '@/layouts/wrapper'

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <WrapperPlayground />
      </Wrapper>
    </>
  )
}
