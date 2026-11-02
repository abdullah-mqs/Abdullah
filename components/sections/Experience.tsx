"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
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
            03 — Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8 border-l border-border"
            >
              {/* Dot */}
              <div className="absolute -left-1.75 top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-sm text-accent mt-1">{job.company}</p>
                </div>
                <span className="text-xs text-muted tracking-wide">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-2">
                {job.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-secondary leading-relaxed flex gap-3"
                  >
                    <span className="text-accent mt-1.5">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
