import {
  Briefcase,
  Globe,
  LayoutDashboard,
  Megaphone,
  Smartphone,
  Sparkles,
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
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    summary: "Fast, accessible sites and web apps built on modern frameworks.",
    detail: "Marketing sites, SaaS front ends and full-stack web apps, tuned for speed, SEO and conversion.",
    deliverables: ["Marketing websites", "Full-stack web apps", "E-commerce & payments", "Performance & SEO audits"],
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "portals-cms",
    icon: LayoutDashboard,
    title: "Web Portals & CMS",
    summary: "Customer portals and content systems your team can run alone.",
    detail: "Self-serve portals, dashboards and headless CMS setups your team can run without calling a developer.",
    deliverables: ["Customer & partner portals", "Headless CMS setup", "Role-based access", "Admin dashboards"],
    tags: ["Headless CMS", "Auth", "Dashboards"],
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    summary: "Native-feel iOS and Android apps from a single codebase.",
    detail: "Cross-platform apps with native polish: offline support, push notifications and app store launch included.",
    deliverables: ["iOS & Android apps", "Offline-first sync", "Push notifications", "App Store submission"],
    tags: ["iOS", "Android", "React Native"],
  },
  {
    id: "enterprise-software",
    icon: Briefcase,
    title: "Custom Enterprise Software",
    summary: "Internal tools and platforms that fit your workflow exactly.",
    detail: "Internal tools, CRMs and integrations that replace spreadsheets and connect the systems you already use.",
    deliverables: ["Internal tools & CRMs", "API integrations", "Workflow automation", "Legacy modernization"],
    tags: ["APIs", "Integrations", "Automation"],
  },
  {
    id: "ai-solutions",
    icon: Sparkles,
    title: "AI Solutions",
    summary: "Practical AI: assistants, automation and search that save hours.",
    detail: "Assistants, document processing and smart search wired into your real workflows, with a person reviewing the output.",
    deliverables: ["AI assistants & chatbots", "Document processing", "Semantic search (RAG)", "AI workflow agents"],
    tags: ["LLMs", "RAG", "Agents"],
  },
  {
    id: "marketing-pr",
    icon: Megaphone,
    title: "Digital Marketing & PR",
    summary: "Launch campaigns, content and press that get you noticed.",
    detail: "Launch plans, content, short-form video and press outreach that turn a new product into a known one.",
    deliverables: ["SEO & content strategy", "Social & short-form video", "Paid campaigns", "Press outreach"],
    tags: ["SEO", "Content", "Press"],
  },
];
