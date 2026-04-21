import { ScrollReveal } from "./scroll-reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="border-t border-border pt-20 sm:pt-28">
          <ScrollReveal>
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground mb-8">
              Contact
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="font-heading text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] font-normal leading-[1.1] tracking-[-0.02em] mb-8">
              Let&apos;s build{" "}
              <em className="not-italic font-heading italic text-primary">
                something.
              </em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="text-muted-foreground text-[1.05rem] leading-relaxed max-w-md mb-10">
              Have a project in mind or want to explore how AI-augmented
              engineering could work for your team? We&apos;d love to hear
              from you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <div className="flex flex-col gap-5">
              <a
                href="mailto:contact@fosterdigitalsolutions.com"
                className={cn(buttonVariants(), "w-fit px-7")}
              >
                Get in Touch
              </a>
              <a
                href="mailto:contact@fosterdigitalsolutions.com"
                className="font-mono text-[13px] text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                contact@fosterdigitalsolutions.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
