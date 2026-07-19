"use client";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
