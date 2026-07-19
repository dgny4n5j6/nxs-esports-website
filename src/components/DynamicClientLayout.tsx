"use client";

import dynamic from "next/dynamic";

const ClientLayout = dynamic(() => import("@/components/ClientLayout").then(mod => mod.ClientLayout), { ssr: false });

export function DynamicClientLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
