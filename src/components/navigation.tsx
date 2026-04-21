"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
        <a href="#" className="flex items-center gap-4">
          <Logo height={18} className="text-primary" />
          <span className="hidden sm:block text-[10.5px] font-mono text-muted-foreground tracking-[0.14em] uppercase">
            Foster Digital Solutions
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(buttonVariants({ size: "sm" }), "ml-1")}
          >
            Start a Project
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            aria-label="Open menu"
          >
            <span className="w-5 h-px bg-foreground" />
            <span className="w-3.5 h-px bg-foreground" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-background border-border"
            showCloseButton={false}
          >
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex flex-col gap-8 mt-16 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants(), "mt-4 w-full")}
              >
                Start a Project
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
