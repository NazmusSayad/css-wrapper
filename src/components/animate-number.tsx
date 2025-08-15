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

export function FadedDecimalNumber({
  value,
  formatter,
}: {
  value: number
  formatter?: (value: number) => number
}) {
  const [integer, decimal = '0'] = String(formatter ? formatter(value) : value).split('.')

  return (
    <span>
      <span>{integer}</span>

      {decimal && (
        <span className="text-muted-foreground">
          .<span>{decimal}</span>
        </span>
      )}
    </span>
  )
}
