import { Metadata } from "next";
import { FAQ, Download, Features, Footer, Hero, HowItWorks, Navbar, Screenshots, Tournaments, Trust } from "@/components/sections";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { StickyDownload } from "@/components/ui/StickyDownload";

export const metadata: Metadata = {
  title: "NXS ESPORTS | Premium Esports APK Download",
  description: "Download the NXS ESPORTS APK for daily mobile tournaments, instant results, secure wallet flows, and fast withdrawals.",
  keywords: ["NXS ESPORTS", "esports APK", "mobile tournaments", "gaming rewards", "APK download"],
  openGraph: {
    title: "NXS ESPORTS | Premium Esports APK Download",
    description: "Join next-gen mobile esports tournaments with instant results and secure rewards.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <LoadingScreen />
      <MouseGlow />
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Tournaments />
      <Download />
      <FAQ />
      <Footer />
      <StickyDownload />
    </main>
  );
}
