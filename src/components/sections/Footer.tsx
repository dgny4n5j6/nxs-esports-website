import Link from "next/link";
import { socialLinks } from "@/lib/nxs-data";
import { BrandMark } from "@/components/ui/BrandMark";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 py-12">
      <div className="site-shell">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3" aria-label="NXS Esports home">
              <BrandMark size="footer" />
              <span>
                <span className="block text-sm font-black uppercase tracking-[0.34em] text-white">NXS ESPORTS</span>
                <span className="block -mt-1 text-xs font-bold uppercase tracking-[0.3em] text-purple">Next-Gen APK Arena</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/56">
              A premium mobile esports download experience built for tournaments,
              rewards, secure wallet flows, and competitive communities.
            </p>
          </div>

          <div className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan">Contact</p>
            <a href="mailto:contact@nxs-esports.com" className="mt-3 block text-lg font-black text-white transition-colors hover:text-cyan">
              contact@nxs-esports.com
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/privacy" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-cyan/40 hover:text-cyan">Privacy Policy</a>
              <a href="/terms" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-purple/40 hover:text-purple">Terms</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center">
          <p>© 2026 NXS ESPORTS. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
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
