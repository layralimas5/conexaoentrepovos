import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Silhouette } from '@/components/ui/Silhouette'
import { founder } from '@/content/site'

export function Founder() {
  return (
    <Section id="fundadora" labelledBy="fundadora-title" className="bg-white">
      <Silhouette name="sertanejo" tone="terra" className="right-6 bottom-8 w-40 opacity-0 sm:right-12 sm:w-56 sm:opacity-15" />
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <figure className="relative">
            <div className="relative isolate flex aspect-[5/4] w-full items-end overflow-hidden rounded-[var(--radius-card)] bg-ink p-5 sm:aspect-[4/3] sm:p-6 lg:aspect-[960/1067]">
              <img
                src={founder.photo}
                alt={founder.photoAlt}
                width={960}
                height={1067}
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_58%] lg:object-top"
              />
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-t from-night/90 via-night/25 to-transparent"
                aria-hidden="true"
              />
              <figcaption>
                <p className="font-display text-xs font-semibold tracking-[0.26em] text-paper/80 uppercase">
                  {founder.role}
                </p>
                <p className="mt-1.5 font-display text-xl font-light tracking-tight text-paper sm:mt-2 sm:text-3xl">
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
            <blockquote className="mt-6 border-l-2 border-terra-700 pl-4 sm:mt-8 sm:pl-5">
              <p className="font-display text-lg leading-snug font-light tracking-tight text-night text-balance sm:text-2xl">
                “{founder.calling}”
              </p>
            </blockquote>
          </Reveal>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft text-pretty sm:mt-8 sm:space-y-5 sm:text-lg">
            {founder.bio.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.08 * (index + 1)}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8">
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
