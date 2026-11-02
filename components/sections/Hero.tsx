"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { personalInfo, stats } from "@/lib/data";

export default function Hero() {
  const year = "2026";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-10 pt-28 pb-16 overflow-hidden bg-background"
    >
      {/* Accent glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Vertical tagline */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center z-10">
        <span className="text-[11px] tracking-[0.25em] text-muted uppercase whitespace-nowrap">
          {personalInfo.tagline}
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div className="order-2 lg:order-1">
          {/* Stats */}
          <div className="flex gap-14 mb-14">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              >
                <p className="text-4xl font-light text-foreground tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-muted mt-2 tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Hello */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-light text-foreground tracking-tighter leading-[0.9]"
          >
            {personalInfo.heroGreeting}
            <span className="text-accent">.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-base text-secondary max-w-md"
          >
            {personalInfo.heroSubtext.split("Abdullah").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-foreground font-medium">Abdullah</span>
                </span>
              ) : (
                <span key={i} className="text-accent font-medium">
                  {part}
                </span>
              ),
            )}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-background text-sm px-6 py-3 rounded-full hover:bg-accent-hover transition-all hover:scale-105 font-medium shadow-[0_0_0_0_var(--color-accent-glow)] hover:shadow-[0_0_25px_var(--color-accent-glow)]"
            >
              Get in Touch <FiArrowUpRight />
            </a>
            <a
              href="/resume/Abdullah-Riaz-CV.pdf"
              className="inline-flex items-center gap-2 text-sm text-foreground border border-border px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-105 md:h-105 rounded-full overflow-hidden ring-2 ring-accent/40">
              <Image
                src="/images/abdullah.jpg"
                alt="Portrait of Abdullah Riaz"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 420px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto w-full flex items-end justify-between mt-20 relative z-10">
        <span className="text-xs text-muted tracking-wider">© {year}</span>
        <a
          href="#about"
          className="group flex items-center gap-2 text-xs text-secondary hover:text-accent transition-colors tracking-wide"
        >
          Scroll down{" "}
          <FiArrowDown className="transition-transform group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  );
}
