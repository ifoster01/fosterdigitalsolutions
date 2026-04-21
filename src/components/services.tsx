import { ScrollReveal } from "./scroll-reveal";

const services = [
  {
    number: "01",
    title: "Next.js & TypeScript Development",
    description:
      "Production web applications built on the modern stack. Server components, edge functions, type-safe APIs — fast, accessible products that actually scale.",
  },
  {
    number: "02",
    title: "AI-Augmented Engineering",
    description:
      "We operate at the frontier of AI-assisted development. Agentic coding workflows, intelligent automation, and the latest tooling — shipping higher quality code at a pace traditional teams can't match.",
  },
  {
    number: "03",
    title: "Architecture & Technical Strategy",
    description:
      "Scalable frontend architecture, component systems, and performance optimization. The kind of foundation that lets your product grow without rewrites.",
  },
  {
    number: "04",
    title: "Technical Consulting",
    description:
      "Code audits, stack migrations, and hands-on guidance for teams adopting modern web stacks and AI workflows. Senior-level thinking, applied directly.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-16 sm:mb-20">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground mb-4">
              Services
            </p>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
        </ScrollReveal>

        <div className="divide-y divide-border border-t border-border">
          {services.map((service, i) => (
            <ScrollReveal key={service.number} delay={0.06 * i}>
              <div className="group flex flex-col lg:flex-row lg:items-start gap-3 lg:gap-16 py-10 sm:py-12">
                <div className="flex items-baseline gap-5 lg:min-w-[380px] shrink-0">
                  <span className="font-mono text-[13px] text-primary/40 group-hover:text-primary transition-colors duration-300">
                    {service.number}
                  </span>
                  <h3 className="font-heading text-[1.4rem] sm:text-[1.6rem] lg:text-[1.75rem] leading-tight group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[0.935rem] max-w-md lg:pt-1.5 pl-9 lg:pl-0">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
