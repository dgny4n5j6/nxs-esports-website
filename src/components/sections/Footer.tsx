import Link from "next/link";
import { communityLinks } from "@/lib/nxs-data";
import { BrandMark } from "@/components/ui/BrandMark";
import { CommunityButtons } from "@/components/ui/CommunityButtons";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 py-12">
      <div className="site-shell">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <Link href="#home" className="inline-flex max-w-full items-center gap-3" aria-label="GS Esports home">
              <BrandMark size="footer" />
              <span className="min-w-0">
                <span className="block truncate text-sm font-black uppercase tracking-[0.34em] text-white">GS ESPORTS</span>
                <span className="block -mt-1 text-xs font-bold uppercase tracking-[0.3em] text-purple">Free Fire Tournament Arena</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/56">
              A premium mobile esports experience for Free Fire tournaments,
              rewards, secure wallet flows, and competitive communities.
            </p>
            <CommunityButtons className="mt-6" />
          </div>

          <div className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan">Official Community</p>
            <div className="mt-4 grid gap-3">
              {communityLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-white/78 transition-colors hover:border-cyan/40 hover:text-cyan"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/privacy" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-cyan/40 hover:text-cyan">
                Privacy Policy
              </Link>
              <Link href="/terms" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-purple/40 hover:text-purple">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center">
          <p>© 2026 GS ESPORTS. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            {communityLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open GS Esports ${link.label}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-cyan/40 hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
