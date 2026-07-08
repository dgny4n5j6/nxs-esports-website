import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/sections";
import { StickyDownload } from "@/components/ui/StickyDownload";

export const metadata: Metadata = {
  title: "Privacy Policy | GS Esports",
  description: "Privacy Policy for GS Esports Free Fire tournaments, APK downloads, accounts, and tournament participation.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <Navbar />
      <article className="site-shell mx-auto max-w-4xl px-4 py-32">
        <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan">Privacy Policy</p>
        <h1 className="mt-5 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl">
          GS Esports Privacy Policy
        </h1>
        <p className="mt-6 text-base leading-8 text-white/62">
          This privacy policy explains how GS Esports handles information connected to APK downloads, Free Fire tournament participation, support requests, and website analytics.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-white/62">
          <section>
            <h2 className="text-xl font-black uppercase tracking-[-0.03em] text-white">Information collected</h2>
            <p className="mt-3">
              We may collect information you provide through contact forms, tournament support messages, device/app installation events, analytics, and account-related actions inside the GS Esports ecosystem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase tracking-[-0.03em] text-white">How information is used</h2>
            <p className="mt-3">
              Information is used to operate tournaments, improve app performance, prevent fraud, respond to support requests, verify eligibility, and communicate important tournament or account updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase tracking-[-0.03em] text-white">Data protection</h2>
            <p className="mt-3">
              GS Esports uses reasonable technical and organizational safeguards to protect personal information. No internet service is completely secure, so users should protect their device and account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase tracking-[-0.03em] text-white">Third-party services</h2>
            <p className="mt-3">
              The website and app may interact with hosting, analytics, payment, communication, or tournament infrastructure providers. Third-party services are governed by their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase tracking-[-0.03em] text-white">Contact</h2>
            <p className="mt-3">
              For privacy questions, contact <a href="mailto:contact@gs-esports.com" className="text-cyan underline underline-offset-4">contact@gs-esports.com</a>.
            </p>
          </section>
        </div>
      </article>
      <Footer />
      <StickyDownload />
    </main>
  );
}
