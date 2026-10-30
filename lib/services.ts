import {
  BarChart3,
  Briefcase,
  Globe,
  ShoppingCart,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
  tags: string[];
};

export const services: Service[] = [
  {
    id: "ai-agents",
    icon: Sparkles,
    title: "AI Agents for Business",
    summary: "Smart agents that handle customer chats, bookings, and routine work for your team.",
    detail:
      "We design and deploy AI agents that answer customers, schedule appointments, and automate day-to-day tasks — wired into your real tools, with human oversight where it matters.",
    deliverables: [
      "Customer-facing AI chat agents",
      "Booking & scheduling assistants",
      "Internal workflow agents",
      "Safe rollout with human review",
    ],
    tags: ["AI Agents", "Chat", "Automation"],
  },
  {
    id: "website-online-presence",
    icon: Globe,
    title: "Website & Online Presence",
    summary: "E-commerce stores, online booking, scheduling, and sites that turn visitors into customers.",
    detail:
      "Modern websites and online experiences built for conversion: storefronts, booking and scheduling, landing pages, and content your team can update without calling a developer.",
    deliverables: [
      "Marketing & company websites",
      "E-commerce storefronts",
      "Online booking & scheduling",
      "SEO-ready, mobile-first design",
    ],
    tags: ["Websites", "E-commerce", "Booking"],
  },
  {
    id: "business-operations",
    icon: ShoppingCart,
    title: "Business Operation Systems",
    summary: "Point of sale, inventory, and mobile-ready tools that run your day-to-day operations.",
    detail:
      "Operational software for the counter and the back office — POS, inventory, and related workflows that work on desktop and mobile so your team can sell and stock from anywhere.",
    deliverables: [
      "Point of sale (POS)",
      "Inventory management",
      "Mobile-capable staff workflows",
      "Sales & stock reporting",
    ],
    tags: ["POS", "Inventory", "Mobile"],
  },
  {
    id: "business-automation",
    icon: Workflow,
    title: "Business Automation Setup",
    summary: "Lead capture, CRM sync, invoice processing, billing, and more — without manual busywork.",
    detail:
      "We connect the tools you already use and automate the repetitive steps: capturing leads, syncing CRM, processing invoices, and keeping billing flowing so your team focuses on customers.",
    deliverables: [
      "Lead capture & CRM sync",
      "Invoice processing & billing",
      "Workflow & notification automation",
      "Integrations between your systems",
    ],
    tags: ["CRM", "Billing", "Integrations"],
  },
  {
    id: "reporting-maintenance",
    icon: BarChart3,
    title: "Business Reporting & Maintenance",
    summary: "Clear reporting software plus ongoing care so your systems stay reliable.",
    detail:
      "Dashboards and reports your team can actually use, plus maintenance and monitoring so the software we build keeps performing after launch.",
    deliverables: [
      "Business dashboards & KPIs",
      "Scheduled and on-demand reports",
      "Ongoing maintenance & updates",
      "Health checks and support",
    ],
    tags: ["Reporting", "Dashboards", "Support"],
  },
  {
    id: "custom-enterprise",
    icon: Briefcase,
    title: "Custom Enterprise Applications",
    summary: "Tailored software built around your processes — not the other way around.",
    detail:
      "When off-the-shelf tools fall short, we build custom applications shaped to your workflows, roles, and data — from internal platforms to client-facing systems.",
    deliverables: [
      "Requirements-to-launch delivery",
      "Role-based internal tools",
      "API and system integrations",
      "Secure, scalable architecture",
    ],
    tags: ["Custom Apps", "Enterprise", "Integrations"],
  },
];
