import { ScrollReveal } from "./scroll-reveal";

export function Approach() {
  return (
    <section id="approach" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-16 sm:mb-20">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground mb-4">
              Approach
            </p>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
        </ScrollReveal>

        <div className="max-w-[640px] space-y-10 sm:space-y-12">
          <ScrollReveal delay={0.06}>
            <div className="flex gap-5">
              <div className="w-[3px] rounded-full bg-primary/20 shrink-0 mt-1.5" />
              <p className="text-[1.1rem] sm:text-[1.2rem] leading-[1.75] text-foreground/85">
                Every engagement starts with understanding — your business, your
                constraints, and what success actually looks like. We don&apos;t
                prescribe solutions before we understand the problem.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="flex gap-5">
              <div className="w-[3px] rounded-full bg-primary/35 shrink-0 mt-1.5" />
              <p className="text-[1.1rem] sm:text-[1.2rem] leading-[1.75] text-foreground/85">
                We architect before we build. Type-safe foundations, modern
                patterns, and infrastructure designed to last — not code that
                needs rewriting in a year.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <div className="flex gap-5">
              <div className="w-[3px] rounded-full bg-primary/50 shrink-0 mt-1.5" />
              <p className="text-[1.1rem] sm:text-[1.2rem] leading-[1.75] text-foreground/85">
                AI amplifies our craft. We use the most advanced development
                workflows available — not as a gimmick, but as a genuine
                multiplier for quality and velocity.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
