import { Bot, ShoppingCart, type LucideIcon } from "lucide-react";

export type WorkStatus = "live" | "beta" | "coming-soon";

export type WorkApp = {
  slug: string;
  /** Matches `Service.id` in `lib/services.ts` — groups demos under Our Work accordions. */
  serviceId: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  status: WorkStatus;
  icon: LucideIcon;
  highlights: string[];
  /** Stable public demo used in production. */
  demoUrlProduction: string;
  /**
   * Optional NEXT_PUBLIC_* env override for local testing
   * (e.g. http://localhost:3001/chat/sunset-salon).
   */
  demoUrlEnv: string;
};

export const workApps: WorkApp[] = [
  {
    slug: "ai-agent-services",
    serviceId: "ai-agents",
    title: "AI Agent Services",
    summary: "Multi-tenant AI receptionist for local businesses — chat, booking, and owner tools.",
    description:
      "A live product we built and run: AI chat for clients, appointment booking, SMS/email touchpoints, and a business dashboard. Try the public demo anytime. Real customer access is provisioned by STF after you request the product.",
    tags: ["AI", "SaaS", "Next.js", "Multi-tenant"],
    status: "live",
    icon: Bot,
    highlights: [
      "Public demo with sample salon data",
      "Chat + booking flow clients can try",
      "Real tenants created only after you buy",
      "Runs as its own app and deploy",
    ],
    demoUrlProduction: "https://stf-ai-agent-services.vercel.app/chat/sunset-salon",
    demoUrlEnv: "NEXT_PUBLIC_WORK_DEMO_AI_AGENT_URL",
  },
  {
    slug: "pos-system",
    serviceId: "business-operations",
    title: "STF POS System",
    summary: "Point-of-sale for retail and local businesses — sales, inventory, customers, and reports.",
    description:
      "A full POS product we built as a Next.js modular monolith: checkout, inventory, purchase orders, customers, dashboards, and multi-language support. Responsive for web and mobile browsers. Try the live app anytime. Real customer onboarding and production access are provisioned by STF after you request the product.",
    tags: ["POS", "Retail", "Next.js", "Prisma"],
    status: "live",
    icon: ShoppingCart,
    highlights: [
      "Live POS UI you can open (desktop + mobile layout)",
      "Sales, inventory, and purchase order flows",
      "Customer and reporting tools included",
      "Same-stack as other STF apps: Next.js + API routes",
    ],
    demoUrlProduction: "https://stf-pos-system.onrender.com",
    demoUrlEnv: "NEXT_PUBLIC_WORK_DEMO_POS_URL",
  },
];

export function getWorkApp(slug: string): WorkApp | undefined {
  return workApps.find((app) => app.slug === slug);
}

export function getWorkAppsForService(serviceId: string): WorkApp[] {
  return workApps.filter((app) => app.serviceId === serviceId);
}

/**
 * Resolves local override first, then production demo URL.
 * NEXT_PUBLIC_* keys must be read with static property access so the
 * client bundle inlines the same values as the server (avoids hydration mismatch).
 */
export function getDemoUrl(app: WorkApp): string {
  const fromEnv = readDemoUrlEnv(app.demoUrlEnv);
  return fromEnv || app.demoUrlProduction;
}

function readDemoUrlEnv(key: string): string | undefined {
  switch (key) {
    case "NEXT_PUBLIC_WORK_DEMO_AI_AGENT_URL":
      return process.env.NEXT_PUBLIC_WORK_DEMO_AI_AGENT_URL?.trim() || undefined;
    case "NEXT_PUBLIC_WORK_DEMO_POS_URL":
      return process.env.NEXT_PUBLIC_WORK_DEMO_POS_URL?.trim() || undefined;
    default:
      return undefined;
  }
}

export function statusLabel(status: WorkStatus): string {
  switch (status) {
    case "live":
      return "Live demo";
    case "beta":
      return "Beta";
    case "coming-soon":
      return "Coming soon";
  }
}
