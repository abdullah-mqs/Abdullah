"use client";

import { useState, useEffect } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { navLinks, personalInfo } from "@/lib/data";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy for active link
  useEffect(() => {
    const sections: Element[] = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "bg-background/85 border-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-background/60 border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 transition-transform hover:scale-105"
            aria-label="Home"
          >
            <Logo size={36} />
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-secondary hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-px bg-accent rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-background bg-accent rounded-full px-5 py-2 hover:bg-accent-hover transition-all hover:scale-105 shadow-[0_0_0_0_var(--color-accent-glow)] hover:shadow-[0_0_25px_var(--color-accent-glow)]"
          >
            Get in Touch <FiArrowUpRight />
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-1 transition-transform active:scale-90"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <FiMenu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile Side Drawer */}
      <aside
        className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[80vw] bg-surface border-l border-border flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <Logo size={32} />
          <button
            onClick={() => setOpen(false)}
            className="text-foreground p-1 transition-transform active:scale-90"
            aria-label="Close menu"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-3 text-sm rounded-md transition-colors ${
                    isActive
                      ? "text-accent bg-background"
                      : "text-secondary hover:text-foreground hover:bg-background"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Drawer CTA */}
        <div className="px-4 pb-6">
          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-1.5 w-full px-5 py-3 text-sm font-medium text-background bg-accent rounded-full hover:bg-accent-hover transition-colors"
          >
            Book A Call <FiArrowUpRight />
          </a>
        </div>
      </aside>
    </>
  );
}
