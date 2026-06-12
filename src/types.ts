export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type ScreenshotSlide = {
  title: string;
  metric: string;
  accent: string;
  items: string[];
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type Tournament = {
  title: string;
  mode: string;
  entryFee: string;
  prizePool: string;
  slots: string;
  matchTime: string;
  status: "Live" | "Opening" | "Finals";
};

export type DownloadInfo = {
  label: string;
  value: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type CommunityPlatform = "whatsapp" | "telegram" | "instagram";

export type CommunityLink = {
  label: string;
  href: string;
  platform: CommunityPlatform;
};
