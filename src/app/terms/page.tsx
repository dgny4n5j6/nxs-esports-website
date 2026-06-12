import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/sections";
import { StickyDownload } from "@/components/ui/StickyDownload";

export const metadata: Metadata = {
  title: "Terms of Use | NXS Esports",
  description: "Terms of Use for NXS Esports Free Fire tournaments, APK downloads, rewards, and competitive play.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <Navbar />
      <article className="site-shell mx-auto max-w-4xl px-4 py-32">
        <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan">Terms of Use</p>
        <h1 className="mt-5 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl">
          NXS Esports Terms of Use
        </h1>
        <p className="mt-6 text-base leading-8 text-white/62">
          By using the NXS Esports website, APK, or tournament services, you agree to these terms and to participate in Free Fire tournaments fairly and responsibly.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-white/62">
          <section>
            <h2 className="text-xl font-black uppercase tracking-[-0.03em] text-white">Eligibility</h2>
            <p className="mt-3">
              Users must meet all applicable age, device, account, and local legal requirements before downloading the APK, joining tournaments, or claiming rewards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase tracking-[-0.03em] text-white">Fair play</h2>
            <p className="mt-3">
              Cheating, scripting, account sharing, collusion, fake proof, chargebacks, or any activity that undermines tournament integrity may result in disqualification or account restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase tracking-[-0.03em] text-white">Tournament rules</h2>
            <p className="mt-3">
              Entry fees, prize pools, match times, room IDs, result validation, and reward processing are controlled by the applicable tournament rules shown before participation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase tracking-[-0.03em] text-white">Service availability</h2>
            <p className="mt-3">
              NXS Esports may update, pause, or discontinue tournaments, app features, or website sections without prior notice when required for security, compliance, or operational reasons.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase tracking-[-0.03em] text-white">Contact</h2>
            <p className="mt-3">
              For terms questions, contact <a href="mailto:contact@nxs-esports.com" className="text-cyan underline underline-offset-4">contact@nxs-esports.com</a>.
            </p>
          </section>
        </div>
      </article>
      <Footer />
      <StickyDownload />
    </main>
  );
}
