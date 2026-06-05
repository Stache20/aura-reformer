import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Erfahre mehr über Aura Reformer — unsere Geschichte, unsere Werte und das Team hinter dem Studio.',
}

const values = [
  {
    title: 'Individualität',
    description:
      'Jeder Körper ist einzigartig. Deshalb passen wir jede Session vollständig an deine persönlichen Bedürfnisse, Ziele und dein Fitnesslevel an — ohne Kompromisse.',
  },
  {
    title: 'Qualität',
    description:
      'Wir arbeiten mit professionellen Balanced Body Reformern und halten uns kontinuierlich auf dem neuesten Stand der Pilates-Methodik. Qualität ist kein Luxus, sondern unser Standard.',
  },
  {
    title: 'Gemeinschaft',
    description:
      'Bei Aura Reformer entsteht mehr als Training. Wir schaffen einen Raum, in dem sich jede Person willkommen, gesehen und motiviert fühlt — von Beginn an.',
  },
]

const team = [
  {
    name: 'Daniela Stahuber',
    role: 'Inhaberin & Head Instructor',
    photo: '/images/DanielaPhoto.jpeg',
    bio: 'Bewegung und Sport sind seit vielen Jahren meine Leidenschaft. Seit meiner Ausbildung zur diplomierten Gymnastiklehrerin 1999 in Zürich begleite ich Menschen mit viel Freude auf ihrem Weg zu mehr Gesundheit, Kraft und Wohlbefinden. Mit dem AURA Reformer Studio in Heufeldmühle erfülle ich mir einen Herzenswunsch: einen Ort für modernes, persönliches Training und Bewegung mit Wohlfühlatmosphäre. Ich freue mich darauf, dich willkommen zu heißen.',
  },
  {
    name: 'Petra Schrafstetter',
    role: 'Pilates Instructor',
    photo: '/images/PetraPhoto.jpeg',
    bio: 'Sport begleitet mich seit meiner Kindheit und ist ein wichtiger Bestandteil meines Lebens. Erst nach der Geburt meines Sohnes entdeckte ich Pilates für mich – als ideale Kombination aus Kräftigung, Dehnung und bewusster Entspannung. Die positiven Erfahrungen motivierten mich dazu, selbst die Ausbildung zu beginnen und mein Wissen weiterzugeben.\n\nIch bin zertifizierte DOSB Übungsleiterin C im Bereich Fitness und Gesundheit sowie DOSB Übungsleiterin B für Haltungs- und Bewegungssysteme. Zusätzlich habe ich eine Pilates-Ausbildung und bilde mich hier regelmäßig fort.\n\nIch freue mich darauf, dir durch Bewegung mehr Kraft, Balance und Beweglichkeit zu vermitteln.',
  },
]

export default function UeberUns() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Gegründet aus Leidenschaft für Bewegung."
        subtitle="Lern das Team kennen, das hinter Aura Reformer steht — und erfahre, warum wir tun, was wir tun."
      />

      {/* ── Story ───────────────────────────────────── */}
      <section className="section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/images/BeidePhoto.jpeg"
                  alt="Daniela und Petra – Aura Reformer Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-5">Unsere Geschichte</p>
              <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-tight mb-6">
                Ein Studio, das aus einem Traum entstand.
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Aura Reformer wurde mit einer klaren Vision gegründet: einen Ort zu schaffen, an dem Menschen nicht einfach trainieren — sondern sich wirklich transformieren. Ein Ort, der Ruhe und Intensität, Eleganz und Stärke in sich vereint.
                </p>
                <p>
                  Was als persönliche Leidenschaft begann, ist heute ein professionelles Pilates-Studio im Herzen von Bruckmühl. Wir verbinden die bewährte Methodik des Reformer Pilates mit einem modernen, individuellen Betreuungsansatz.
                </p>
                <p>
                  Unser Name ist Programm: Aura steht für die Energie und Ausstrahlung, die jeder Mensch in sich trägt — und die durch bewusstes Training zum Strahlen gebracht werden kann.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────── */}
      <section className="section-py bg-surface">
        <div className="container-wide">
          <AnimateOnScroll className="mb-14">
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-4">Was uns ausmacht</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight">
              Unsere Werte
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 80}>
                <div className="bg-bg rounded-2xl border border-border p-8 h-full">
                  <div className="w-10 h-px bg-accent mb-6" />
                  <h3 className="font-display font-medium text-2xl text-ink mb-4">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-wide">
          <AnimateOnScroll className="mb-14">
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-4">Unser Team</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-tight">
              Die Menschen hinter Aura
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 100}>
                <div className="flex flex-col gap-5">
                  <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                    <Image
                      src={member.photo}
                      alt={`${member.name} – ${member.role}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <p className="text-accent text-[10px] tracking-[0.2em] uppercase mb-1">{member.role}</p>
                    <h3 className="font-display font-medium text-2xl text-ink mb-3">{member.name}</h3>
                    <div className="space-y-3">
                    {member.bio.split('\n\n').map((para, j) => (
                      <p key={j} className="text-muted text-sm leading-relaxed">{para}</p>
                    ))}
                  </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="section-py bg-ink text-white">
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <h2 className="font-display font-light text-4xl lg:text-5xl leading-tight mb-6">
              Lern uns persönlich kennen.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md mx-auto mb-10">
              Buch deinen Probetermin und erlebe Aura Reformer zum ersten Mal — unverbindlich und entspannt.
            </p>
            <a
              href="https://meinfitomat.club/studio/Zml0dHk6MTMwMzAzNDA0MA%3D%3D/appointments"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent text-white px-10 py-4 rounded-full text-sm tracking-wide hover:bg-accent-dark transition-colors duration-300"
            >
              Probetermin buchen
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
