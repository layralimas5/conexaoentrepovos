import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { founder } from '@/content/site'

export function Founder() {
  return (
    <Section id="fundadora" labelledBy="fundadora-title" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <figure className="relative">
            {/* PENDENTE: trocar pela foto da Kamilly (retrato vertical, 4:5). */}
            <div className="brand-gradient flex aspect-[4/5] w-full items-end overflow-hidden rounded-[var(--radius-card)] p-6">
              <img
                src="/img/indigena-arco-branco.png"
                alt=""
                width={222}
                height={222}
                loading="lazy"
                className="pointer-events-none absolute top-8 right-8 w-24 opacity-30"
              />
              <figcaption className="relative">
                <p className="font-display text-xs font-semibold tracking-[0.26em] text-paper/80 uppercase">
                  {founder.role}
                </p>
                <p className="mt-2 font-display text-2xl font-light tracking-tight text-paper sm:text-3xl">
                  {founder.name}
                </p>
              </figcaption>
            </div>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              id="fundadora-title"
              eyebrow="Quem está à frente"
              title="Vocacionada para treinar, plantar e transformar"
              tone="light"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <blockquote className="mt-8 border-l-2 border-terra-700 pl-5">
              <p className="font-display text-xl leading-snug font-light tracking-tight text-night text-balance sm:text-2xl">
                “{founder.calling}”
              </p>
            </blockquote>
          </Reveal>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
            {founder.bio.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.08 * (index + 1)}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {founder.credentials.map((credential) => (
                <li
                  key={credential}
                  className="rounded-full border border-night/15 px-4 py-1.5 font-display text-xs font-medium tracking-wide text-ink-soft"
                >
                  {credential}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
