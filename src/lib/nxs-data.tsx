import type { DownloadInfo, FAQItem, Feature, NavItem, ScreenshotSlide, SocialLink, Stat, Step, Tournament } from "@/types";

export const MEDIA_FIRE_APK_URL = process.env.NEXT_PUBLIC_APK_URL || "#";
export const APK_VERSION = "v4.8.0";
export const APK_SIZE = "42.6 MB";
export const ANDROID_SUPPORT = "Android 8.0+";

export const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Tournaments", href: "#tournaments" },
  { label: "FAQ", href: "#faq" },
];

export const trustStats: Stat[] = [
  { label: "Registered Players", value: 428150, suffix: "+" },
  { label: "Tournaments Hosted", value: 12840, suffix: "+" },
  { label: "Prize Pool Distributed", value: 2400000, suffix: "+", prefix: "$" },
  { label: "Matches Played", value: 986000, suffix: "+" },
];

export const features: Feature[] = [
  {
    title: "Wallet System",
    description: "Track deposits, bonuses, entries, and rewards inside a secure mobile-first wallet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a1.5 1.5 0 0 1 1.5 1.5V18a1.5 1.5 0 0 1-1.5 1.5H6.5A2.5 2.5 0 0 1 4 17V7.5Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 12.5h.01M8 9h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Instant Results",
    description: "Live result syncing keeps brackets, rankings, and rewards accurate the moment a match ends.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12.5 9.2 17 19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 4h16v16H4V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Secure Payments",
    description: "Verified payment flows, transparent transaction history, and controlled wallet actions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3 4.5 6.5V12c0 4.8 3.2 7.8 7.5 9 4.3-1.2 7.5-4.2 7.5-9V6.5L12 3Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m8.5 12 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Tournament Joining",
    description: "Enter rooms in seconds with clear fees, prize pools, slots, and match timing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 21h8M12 17v4M7 4h10l-1 7a4 4 0 0 1-8 0L7 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Live Notifications",
    description: "Push alerts for lobby openings, match reminders, result updates, and reward drops.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 9a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 21h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fast Withdrawals",
    description: "Submit payout requests through a streamlined flow built for speed and confidence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const screenshotSlides: ScreenshotSlide[] = [
  { title: "Home", metric: "Live Rooms", accent: "from-cyan/30 via-purple/20 to-green/20", items: ["Featured Events", "Daily Brackets", "Reward Drops"] },
  { title: "Wallet", metric: "Balance Sync", accent: "from-purple/30 via-cyan/20 to-green/20", items: ["Deposit", "Withdraw", "History"] },
  { title: "Tournament", metric: "S1 Finals", accent: "from-cyan/25 via-purple/35 to-green/20", items: ["Entry Fee", "Prize Pool", "Slots"] },
  { title: "Results", metric: "Realtime", accent: "from-green/25 via-cyan/20 to-purple/30", items: ["Rankings", "Proof", "Rewards"] },
  { title: "Profile", metric: "Ranked Stats", accent: "from-purple/25 via-cyan/30 to-green/20", items: ["Win Rate", "Badges", "History"] },
];

export const steps: Step[] = [
  { number: "01", title: "Download APK", description: "Install the official NXS ESPORTS APK and complete your gamer profile." },
  { number: "02", title: "Join Tournament", description: "Pick a live room, confirm the entry, and queue with your squad." },
  { number: "03", title: "Win Rewards", description: "Play, submit proof, and track withdrawals from the secure wallet." },
];

export const tournaments: Tournament[] = [
  { title: "Neon Royale Cup", mode: "Battle Royale", entryFee: "₹49", prizePool: "₹12,000", slots: "96/100", matchTime: "Today 09:30 PM", status: "Live" },
  { title: "Cyber Squad Clash", mode: "Squad Rush", entryFee: "₹99", prizePool: "₹25,000", slots: "64/80", matchTime: "Tomorrow 08:00 PM", status: "Opening" },
  { title: "Apex Finals Night", mode: "Grand Final", entryFee: "₹199", prizePool: "₹75,000", slots: "12/16", matchTime: "Sat 10:00 PM", status: "Finals" },
];

export const downloadInfo: DownloadInfo[] = [
  { label: "APK Size", value: APK_SIZE },
  { label: "Latest Version", value: APK_VERSION },
  { label: "Android Support", value: ANDROID_SUPPORT },
  { label: "Security", value: "Verified Build" },
];

export const faqs: FAQItem[] = [
  { question: "How do I install the NXS ESPORTS APK?", answer: "Download the APK from the official button, allow installation from your device settings if prompted, open the app, and complete profile verification before joining tournaments." },
  { question: "How do withdrawals work?", answer: "Open Wallet, choose Withdraw, enter the amount and payment details, then submit. Verified accounts receive priority processing." },
  { question: "Is the APK safe to download?", answer: "Use only the official secure download button. The app is built for Android with wallet protections, verified account flows, and transparent tournament rules." },
  { question: "Can I join tournaments for free?", answer: "NXS ESPORTS includes free and paid rooms. Each tournament card shows the entry fee, prize pool, slots, and match time before you join." },
];

export const socialLinks: SocialLink[] = [
  { label: "Discord", href: "https://discord.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "X", href: "https://x.com/" },
];
