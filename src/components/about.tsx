import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";

const highlights = [
  { label: "Education", value: "RPI — Computer Science, Economics" },
  { label: "Stack", value: "Next.js, TypeScript, React Native, Supabase, AWS" },
  { label: "Current", value: "TenantLink — mobile app & web architecture" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-16 sm:mb-20">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground mb-4">
              About
            </p>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Portrait */}
          <ScrollReveal className="shrink-0">
            <div className="w-[220px] sm:w-[260px] lg:w-[280px]">
              <div className="relative aspect-[1/1] rounded-2xl overflow-hidden border border-border bg-card">
                <Image
                  src="/isaac-foster.png"
                  alt="Isaac Foster — Founder of Foster Digital Solutions"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 260px, 280px"
                  priority
                />
              </div>
              <p className="mt-4 font-heading text-lg italic text-primary">
                Isaac Foster
              </p>
              <p className="text-[13px] text-muted-foreground mb-3">
                Founder & Engineer
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ifoster01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/isaac-foster-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <div className="flex-1 max-w-[560px]">
            <ScrollReveal delay={0.08}>
              <p className="text-[1.1rem] sm:text-[1.15rem] leading-[1.75] text-foreground/85 mb-6">
                I&apos;m Isaac — a software engineer and the person behind
                Foster Digital Solutions. I studied Computer Science and
                Economics at Rensselaer Polytechnic Institute, and I&apos;ve
                been building production software across the full stack ever
                since.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <p className="text-[1.05rem] leading-[1.75] text-muted-foreground mb-6">
                My work spans Next.js web applications, React Native mobile
                apps, cloud infrastructure on AWS, and AI-augmented development
                workflows. I&apos;ve shipped products used by thousands of
                users, built predictive analytics platforms, and helped
                companies modernize legacy systems into clean, scalable
                architectures.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[1.05rem] leading-[1.75] text-muted-foreground mb-10">
                Right now I&apos;m contracting with{" "}
                <a
                  href="https://usetenancy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-3"
                >
                  TenantLink
                </a>
                , a property tech company, where I lead mobile app development
                and web architecture as they scale. Alongside that, I take on
                select freelance engagements through FDS.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.26}>
              <div className="space-y-4 pt-2 border-t border-border">
                {highlights.map((item) => (
                  <div key={item.label} className="flex gap-4 pt-4">
                    <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary/50 w-[80px] shrink-0 pt-0.5">
                      {item.label}
                    </span>
                    <span className="text-[0.935rem] text-foreground/80">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
