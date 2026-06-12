import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StructuredData } from "@/components/sections/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "NXS Esports";
const title = "NXS Esports | Ultimate Free Fire Tournaments";
const description =
  "NXS Esports is the ultimate destination for Free Fire tournaments, daily mobile esports rooms, verified APK downloads, instant results, WhatsApp and Telegram community access, secure wallet flows, and fast reward withdrawals.";
const keywords = [
  "NXS Esports",
  "Free Fire Tournaments",
  "Free Fire tournament",
  "Free Fire tournament APK",
  "mobile esports tournaments",
  "esports APK download",
  "daily Free Fire rooms",
  "Free Fire rewards",
  "NXS ESPORTS APK",
  "NXS Esports WhatsApp",
  "NXS Esports Telegram",
];
const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nxs-esports.vercel.app");
const imageUrl = `${metadataBase.href.replace(/\/$/, "")}/og-card.svg`;

const metadata: Metadata = {
  metadataBase,
  applicationName: siteName,
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/brand.png",
    shortcut: "/brand.png",
  },
  alternates: {
    canonical: metadataBase.href,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: metadataBase.href,
    siteName,
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "NXS Esports Free Fire Tournaments preview card",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};

const viewport: Viewport = {
  themeColor: "#030712",
  colorScheme: "dark",
};

export { metadata, viewport };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-ink text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan focus:px-4 focus:py-3 focus:text-xs focus:font-black focus:uppercase focus:tracking-[0.2em] focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
