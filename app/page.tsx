'use client'

export const dynamic = 'force-static'

import { MaxWidthWrapperPlayground, PaddingWrapperPlayground } from '@/features/playground'

export default function HomePage() {
  return (
    <>
      <PaddingWrapperPlayground />
      <hr />
      <MaxWidthWrapperPlayground />
      <hr />
    </>
  )
}
