"use client";

import { motion } from "framer-motion";
import { aboutText } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 lg:px-10 bg-background border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-muted uppercase mb-4">
            01 — About
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-8">
            About Me
          </h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed max-w-3xl">
            {aboutText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
