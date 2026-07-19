export type NavItem = {
  label: string;
  href: string;
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

export type DownloadInfo = {
  label: string;
  value: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type CommunityPlatform = "discord" | "whatsapp";

export type CommunityLink = {
  label: string;
  href: string;
  platform: CommunityPlatform;
};
