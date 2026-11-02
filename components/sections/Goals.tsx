"use client";

import { motion } from "framer-motion";
import { goals, goalsVision } from "@/lib/data";

export default function Goals() {
  return (
    <section
      id="goals"
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
            06 — Goals
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            Where I&apos;m Headed
          </h2>
          <p className="text-base text-secondary max-w-2xl leading-relaxed">
            {goalsVision}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {goals.map((goal, i) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all"
              >
                {/* Phase badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-muted uppercase">
                    {goal.phase}
                  </span>
                </div>

                <p className="text-xs text-muted tracking-wide mb-2">
                  {goal.period}
                </p>
                <h3 className="text-lg font-medium text-foreground mb-4 leading-snug">
                  {goal.title}
                </h3>

                <ul className="space-y-2.5">
                  {goal.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-secondary leading-relaxed flex gap-2.5"
                    >
                      <span className="text-accent mt-1.5 shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
