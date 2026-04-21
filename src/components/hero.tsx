import { ScrollReveal } from "./scroll-reveal";
import { TypingAnimation } from "./typing-animation";

export function Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col justify-center">
      <div className="max-w-[1100px] mx-auto w-full px-6 lg:px-10 pt-28 pb-16">
        <ScrollReveal>
          <div className="w-10 h-[2px] bg-primary mb-12" />
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h1 className="font-heading text-[2.75rem] sm:text-[3.75rem] lg:text-[4.75rem] font-normal leading-[1.08] tracking-[-0.025em] max-w-[820px] mb-8">
            Independent software engineering for the{" "}
            <em className="not-italic font-heading italic text-primary">
              modern web.
            </em>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <div className="text-[0.95rem] sm:text-base font-mono mb-10 h-7 flex items-center gap-2">
            <span className="text-muted-foreground/50">&gt;</span>
            <TypingAnimation />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[1.05rem] sm:text-[1.1rem] leading-[1.75] text-muted-foreground max-w-[480px] mb-10">
            Foster Digital Solutions is a focused engineering practice built on
            Next.js, TypeScript, and AI-first development. We deliver
            senior-level craft with the velocity of a full team.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.26}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-medium text-[0.95rem] group"
          >
            Get in Touch
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.32}>
          <div className="mt-24 sm:mt-32 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10.5px] font-mono text-muted-foreground/60 tracking-[0.16em] uppercase">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>AI-Augmented</span>
              <span>Full-Stack</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
