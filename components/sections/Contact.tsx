"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { contactInfo, personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
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
            07 — Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-base text-secondary max-w-2xl">
            Feel free to reach out for opportunities, collaborations, or just a
            quick hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {contactInfo.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-background transition-all">
                  <Icon size={18} />
                </div>
                <p className="text-xs text-muted uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-foreground font-medium break-all">
                  {item.value}
                </p>
              </motion.div>
            );

            return item.href ? (
              <a key={item.label} href={item.href}>
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        {/* Big CTA */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href={`mailto:${personalInfo.email}`}
          className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-light text-foreground hover:text-accent transition-colors"
        >
          {personalInfo.email}
          <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}
