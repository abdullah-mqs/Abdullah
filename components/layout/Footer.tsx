"use client";

import { FiGithub, FiMail } from "react-icons/fi";
import { personalInfo } from "@/lib/data";
import Logo from "../ui/Logo";

export default function Footer() {
  const year = "2026";

  return (
    <footer className="border-t border-border bg-background px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <span className="text-sm text-secondary">
            © <span suppressHydrationWarning>{year}</span> {personalInfo.name}.
            All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all"
            aria-label="Email"
          >
            <FiMail size={16} />
          </a>
          <a
            href="https://github.com/abdullah-mqs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
