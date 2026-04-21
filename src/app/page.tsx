import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Approach } from "@/components/process";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Approach />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
