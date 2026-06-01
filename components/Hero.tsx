import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — replace with an <Image> tag when client provides photo */}
      <div className="absolute inset-0 bg-[#C4A07A]">
        <div className="absolute inset-0 flex items-end justify-start p-8 pointer-events-none">
          <span className="text-white/20 text-[10px] tracking-widest uppercase">
            Hauptfoto Platzhalter — Bitte Foto einsetzen
          </span>
        </div>
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2410]/50 via-[#3D2410]/30 to-[#3D2410]/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto pt-24">
        <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-8 animate-fade-in">
          Premium Reformer Pilates · Bruckmühl
        </p>

        <h1 className="font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-8 animate-fade-up">
          Forme deinen Körper.
          <br />
          <em className="not-italic text-accent">Stärke</em> deine Aura.
        </h1>

        <p className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Individuelles Reformer Pilates für mehr Kraft, Beweglichkeit und inneres Gleichgewicht — nachhaltig und tiefgreifend.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/buchen"
            className="bg-accent text-white px-9 py-4 rounded-full text-sm tracking-wide hover:bg-accent-dark transition-colors duration-300"
          >
            Jetzt buchen
          </Link>
          <Link
            href="/leistungen"
            className="border border-white/35 text-white px-9 py-4 rounded-full text-sm tracking-wide hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Leistungen entdecken
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40">
        <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
