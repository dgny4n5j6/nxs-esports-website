import { communityLinks, socialLinks } from "@/lib/nxs-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nxs-esports.vercel.app";
const cleanBaseUrl = baseUrl.replace(/\/$/, "");
const siteName = "NXS Esports";
const description =
  "NXS Esports hosts Free Fire tournaments, daily mobile esports rooms, verified APK downloads, instant results, WhatsApp and Telegram community access, secure wallet flows, and fast reward withdrawals.";
const sameAs = [...socialLinks.map((link) => link.href), ...communityLinks.map((link) => link.href)];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${cleanBaseUrl}/#organization`,
      name: siteName,
      url: cleanBaseUrl,
      logo: `${cleanBaseUrl}/brand.png`,
      sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${cleanBaseUrl}/#website`,
      url: cleanBaseUrl,
      name: siteName,
      description,
      inLanguage: "en-US",
      publisher: { "@id": `${cleanBaseUrl}/#organization` },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: `${cleanBaseUrl}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": `${cleanBaseUrl}/#app`,
      name: "NXS Esports APK",
      applicationCategory: "GameApplication",
      operatingSystem: "Android",
      description,
      url: cleanBaseUrl,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "Event",
      "@id": `${cleanBaseUrl}/#free-fire-tournaments`,
      name: "NXS Esports Free Fire Tournaments",
      description: "Daily Free Fire tournament rooms with transparent fees, prize pools, slots, and match times.",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      organizer: { "@id": `${cleanBaseUrl}/#organization` },
      url: `${cleanBaseUrl}/#tournaments`,
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
