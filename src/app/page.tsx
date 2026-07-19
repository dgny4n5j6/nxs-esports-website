"use client";

import { LoadingScreen } from "@/components/ui/LoadingScreen";
import Navbar from "@/components/sections/Navbar";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import Hero from "@/components/sections/Hero";
import Download from "@/components/sections/Download";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import { StickyDownload } from "@/components/ui/StickyDownload";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main id="main-content" className="relative min-h-screen overflow-hidden bg-background text-white">
        <AnimatedBackground />
        <MouseGlow />
        <Navbar />
        <Hero />
        <Download />
        <FAQ />
        <Footer />
        <StickyDownload />
      </main>
    </>
  );
}
