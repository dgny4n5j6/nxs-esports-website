import { FAQ, Download, Features, Footer, Hero, HowItWorks, Navbar, Screenshots, Tournaments, Trust } from "@/components/sections";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { StickyDownload } from "@/components/ui/StickyDownload";

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden bg-ink text-white">
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
