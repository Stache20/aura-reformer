'use client'

import { useEffect, useRef, ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimateOnScroll({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('aos-animate')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={clsx('aos-init', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
