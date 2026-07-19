import type { CommunityLink, DownloadInfo, FAQItem, Feature, NavItem, ScreenshotSlide } from "@/types";

export const MEDIA_FIRE_APK_URL = process.env.NEXT_PUBLIC_APK_URL || "#";
export const APK_VERSION = "V2";
export const APK_SIZE = "Under 70 MB";
export const ANDROID_SUPPORT = "Android 8.0+";
export const RELEASE_DATE = "July 2026";

export const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "FAQ", href: "#faq" },
];

export const communityLinks: CommunityLink[] = [
  {
    label: "Discord",
    href: "https://discord.gg/WMnN4HvQWN",
    platform: "discord",
  },
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/KRNjOO7iWHhJCrtw2O48Df",
    platform: "whatsapp",
  },
];

export const features: Feature[] = [
  {
    title: "Live Tournaments",
    description: "Join Free Fire tournament rooms instantly. View live brackets, match timings, and real-time results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 21h8M12 17v4M7 4h10l-1 7a4 4 0 0 1-8 0L7 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Instant Results",
    description: "Get live match results, rankings, and reward distributions the moment a match ends.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12.5 9.2 17 19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 4h16v16H4V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Secure Wallet",
    description: "Manage deposits, entries, and withdrawals with bank-grade security and instant processing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a1.5 1.5 0 0 1 1.5 1.5V18a1.5 1.5 0 0 1-1.5 1.5H6.5A2.5 2.5 0 0 1 4 17V7.5Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 12.5h.01M8 9h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Custom Rooms",
    description: "Create and manage custom Free Fire rooms with full control over settings, rules, and participants.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3 4.5 6.5V12c0 4.8 3.2 7.8 7.5 9 4.3-1.2 7.5-4.2 7.5-9V6.5L12 3Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m8.5 12 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Push Alerts",
    description: "Never miss a tournament. Get notified about room openings, match starts, and result updates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 9a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 21h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Rank Push",
    description: "Track your Free Fire rank progression, view stats, and compete in rank-based tournaments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const screenshotSlides: ScreenshotSlide[] = [
  { title: "Dashboard", metric: "Live Rooms", accent: "from-blue/30 via-royal/20 to-ice/20", items: ["Featured Events", "Daily Brackets", "Reward Drops"] },
  { title: "Tournaments", metric: "S1 Finals", accent: "from-blue/25 via-royal/35 to-ice/20", items: ["Entry Fee", "Prize Pool", "Slots"] },
  { title: "Wallet", metric: "Balance Sync", accent: "from-royal/30 via-blue/20 to-ice/20", items: ["Deposit", "Withdraw", "History"] },
  { title: "Results", metric: "Realtime", accent: "from-ice/25 via-blue/20 to-royal/30", items: ["Rankings", "Proof", "Rewards"] },
  { title: "Profile", metric: "Ranked Stats", accent: "from-royal/25 via-blue/30 to-ice/20", items: ["Win Rate", "Badges", "History"] },
];

export const downloadInfo: DownloadInfo[] = [
  { label: "APK Size", value: APK_SIZE },
  { label: "Latest Version", value: APK_VERSION },
  { label: "Release Date", value: RELEASE_DATE },
  { label: "Android Support", value: ANDROID_SUPPORT },
  { label: "Security", value: "Verified Build" },
];

export const faqs: FAQItem[] = [
  { question: "How do I install the GS Esports APK?", answer: "Download the APK from the official secure button, allow installation from your device settings if prompted, open the app, and complete profile verification before joining tournaments." },
  { question: "Is the APK safe to download?", answer: "Yes. The GS Esports APK is a verified build with secure wallet protections, encrypted transactions, and transparent tournament rules." },
  { question: "What Free Fire features are included?", answer: "The app includes live tournament rooms, custom rooms, instant results, wallet management, rank tracking, and push notifications for match updates." },
  { question: "How do I join a tournament?", answer: "Open the app, browse live rooms, select your tournament, confirm entry, and queue with your squad. Results sync automatically." },
  { question: "How do withdrawals work?", answer: "Open Wallet, choose Withdraw, enter the amount and payment details, then submit. Verified accounts receive priority processing." },
];
