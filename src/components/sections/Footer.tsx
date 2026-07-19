import Link from "next/link";
import { communityLinks } from "@/lib/gs-data";
import { BrandMark } from "@/components/ui/BrandMark";
import { CommunityButtons } from "@/components/ui/CommunityButtons";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/8 py-12">
      <div className="site-shell">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="#home" className="inline-flex max-w-full items-center gap-3" aria-label="GS Esports home">
              <BrandMark size="footer" />
              <span className="min-w-0">
                <span className="block truncate text-sm font-black uppercase tracking-[0.34em] text-white">GS ESPORTS</span>
                <span className="block -mt-1 text-xs font-bold uppercase tracking-[0.3em] text-blue">Free Fire Tournament App</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
              The official app for Free Fire tournaments, live rooms, and competitive esports.
            </p>
            <CommunityButtons className="mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-[2rem] p-6"
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-blue">Support</p>
            <div className="mt-4 grid gap-3">
              {communityLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-white/72 transition-all duration-300 hover:border-blue/35 hover:text-blue hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
                  <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">&#8599;</span>
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/privacy" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/68 transition-all duration-300 hover:border-blue/35 hover:text-blue hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/68 transition-all duration-300 hover:border-blue/35 hover:text-blue hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]">
                Terms
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col justify-between gap-5 border-t border-white/8 pt-6 text-sm text-white/42 sm:flex-row sm:items-center"
        >
          <p>&copy; 2026 GS Esports. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            {communityLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open GS Esports ${link.label}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/68 transition-all duration-300 hover:border-blue/35 hover:text-blue hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
