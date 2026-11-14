import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { SKILLS, type SkillRow } from "@/content/skills";

export function SkillsSection({ rows = SKILLS }: { rows?: SkillRow[] }) {
  return (
    <div className="flex flex-col divide-y divide-line border-y border-line">
      {rows.map((row) => (
        <Reveal key={row.id}>
          <article className="group relative grid grid-cols-1 gap-5 px-4 py-7 transition-colors duration-200 hover:bg-paper-sunken focus-within:bg-paper-sunken sm:px-6 lg:grid-cols-12 lg:gap-8 lg:py-9">
            {/* hover / focus accent bar */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 top-0 w-[3px] origin-top scale-y-0 bg-secondary transition-transform duration-200 group-hover:scale-y-100 group-focus-within:scale-y-100 motion-reduce:transition-none"
            />

            {/* icon */}
            <div className="lg:col-span-1">
              <span
                aria-hidden="true"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper-raised text-primary"
              >
                <span className="material-symbols-outlined text-[26px]">
                  {row.icon}
                </span>
              </span>
            </div>

            {/* plain-English text, tools last */}
            <div className="flex flex-col gap-2 lg:col-span-7">
              <p className="font-label-timecode text-[13px] uppercase tracking-wider text-ink-muted">
                {row.category}
              </p>
              <h3 className="font-headline-lg text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">
                {row.headline}
              </h3>
              <p className="max-w-2xl font-body-md text-base leading-relaxed text-ink-muted sm:text-lg">
                {row.sentence}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                <span className="font-semibold text-primary">Tools: </span>
                {row.tools.join(" · ")}
              </p>
            </div>

            {/* proof + where it was used */}
            <div className="flex flex-col gap-4 lg:col-span-4 lg:border-l lg:border-line lg:pl-6">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {row.proof.map((p) => (
                  <div key={p.label} className="flex flex-col">
                    <span className="font-metric-numeral text-3xl font-bold leading-none text-primary sm:text-4xl">
                      {p.count === false ? (
                        p.value
                      ) : (
                        <CountUp value={p.value} />
                      )}
                    </span>
                    <span className="mt-1.5 text-sm text-ink-muted">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-ink-muted">
                <span className="font-semibold text-primary">Used in: </span>
                {row.usedIn.map((l, i) => (
                  <span key={l.href}>
                    {i > 0 && <span aria-hidden="true">, </span>}
                    <Link
                      href={l.href}
                      className="rounded-sm font-medium text-primary underline decoration-line underline-offset-4 hover:text-secondary hover:decoration-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                    >
                      {l.label}
                    </Link>
                  </span>
                ))}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
