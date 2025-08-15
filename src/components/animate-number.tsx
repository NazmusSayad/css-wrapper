// animated-number.tsx

'use client'

import { motion, SpringOptions, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export function AnimatedNumber({
  value,
  formatter,
  options,
}: {
  value: number
  options?: SpringOptions
  formatter?: (value: number) => number
}) {
  const spring = useSpring(value, {
    ...options,
    stiffness: 500,
    damping: 500,
    mass: 0.1,
  })

  const display = useTransform(spring, (current) =>
    formatter ? formatter(current) : Math.round(current)
  )

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return <motion.span>{display}</motion.span>
}
