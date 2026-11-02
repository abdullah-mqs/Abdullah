import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden">
      {/* Accent glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Big 404 */}
        <h1 className="text-[8rem] md:text-[12rem] font-light text-foreground tracking-tighter leading-none">
          4<span className="text-accent">0</span>4
        </h1>

        {/* Message */}
        <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4 mt-6">
          Page Not Found
        </p>
        <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-tight mb-4">
          Oops! This page doesn&apos;t exist.
        </h2>
        <p className="text-base text-secondary max-w-md mx-auto mb-10">
          The page you&apos;re looking for might have been moved, or it never
          existed. Let&apos;s get you back on track.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent text-background text-sm px-6 py-3 rounded-full hover:bg-accent-hover transition-colors font-medium"
          >
            <FiHome size={16} /> Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm text-foreground border border-border px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            <FiArrowLeft size={16} /> Contact Me
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-xs text-muted mt-16 tracking-wide">
          Error 404 — Abdullah Riaz Portfolio
        </p>
      </div>
    </main>
  );
}
