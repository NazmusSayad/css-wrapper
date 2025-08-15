'use client'

export const dynamic = 'force-static'

import { MaxWidthWrapperPlayground } from '@/features/playground'
import { Wrapper } from '@/layouts/wrapper'

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <MaxWidthWrapperPlayground />
      </Wrapper>
    </>
  )
}
