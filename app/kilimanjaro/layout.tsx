import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kilimanjaro Climbing | Routes, Cost & Packages",
  description:
    "Climb Mount Kilimanjaro with expert guides from Ikamba Adventure. Choose from Machame, Marangu, Lemosho, Rongai, and Umbwe routes. All-inclusive packages from Arusha, Tanzania.",
  keywords: [
    "Kilimanjaro climbing",
    "Mount Kilimanjaro",
    "Kilimanjaro routes",
    "Machame route",
    "Marangu route",
    "Lemosho route",
    "Rongai route",
    "Kilimanjaro packages",
    "Tanzania mountain climbing",
  ],
  openGraph: {
    title: "Kilimanjaro Climbing | Ikamba Adventure",
    description:
      "Climb Mount Kilimanjaro with expert guides. Choose from 6 routes — Machame, Marangu, Lemosho, Rongai, Umbwe & Shira. All-inclusive packages.",
    images: [{ url: "/kilimanjaro-uhuru-peak.jpg", width: 1200, height: 630, alt: "Kilimanjaro summit" }],
  },
  alternates: {
    canonical: "https://ikambaadventure.com/kilimanjaro",
  },
};

export default function KilimanjaroLayout({ children }: { children: React.ReactNode }) {
  return children;
}
