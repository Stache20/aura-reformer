import Link from 'next/link'
import clsx from 'clsx'

type Variant = 'primary' | 'outline' | 'ghost' | 'dark'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-dark',
  outline:
    'border border-accent text-accent hover:bg-accent hover:text-white',
  ghost:
    'border border-white/40 text-white hover:border-white hover:bg-white/10',
  dark:
    'bg-ink text-white hover:bg-accent',
}

const sizes = {
  sm: 'px-5 py-2.5 text-xs tracking-widest',
  md: 'px-7 py-3.5 text-sm tracking-wide',
  lg: 'px-9 py-4 text-sm tracking-wide',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
