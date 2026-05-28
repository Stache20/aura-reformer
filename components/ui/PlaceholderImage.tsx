interface Props {
  aspectRatio?: string
  label?: string
  className?: string
}

export default function PlaceholderImage({
  aspectRatio = '4/3',
  label = 'Foto Platzhalter',
  className = '',
}: Props) {
  return (
    <div
      className={`bg-[#E5E4DF] flex flex-col items-center justify-center gap-2 overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <svg
        className="w-8 h-8 text-[#B0AFA8]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-[#B0AFA8] text-xs tracking-wider uppercase">{label}</span>
    </div>
  )
}
