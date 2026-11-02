"use client";

import { motion } from "framer-motion";
import { languages } from "@/lib/data";

export default function Languages() {
  return (
    <section
      id="languages"
      className="relative py-24 px-6 lg:px-10 bg-background border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-muted uppercase mb-4">
            05 — Languages
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
            Languages
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-surface border border-border flex items-center justify-between"
            >
              <span className="text-lg text-foreground font-medium">
                {lang.name}
              </span>
              <span className="text-xs text-accent tracking-wide uppercase">
                {lang.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
