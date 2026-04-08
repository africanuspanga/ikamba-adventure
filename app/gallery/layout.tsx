import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Safari Photos & Kilimanjaro Images",
  description:
    "Browse stunning photos and videos from Tanzania safaris and Kilimanjaro climbs by Ikamba Adventure. Wildlife, landscapes, and real adventures captured on location.",
  keywords: [
    "Tanzania safari photos",
    "Kilimanjaro pictures",
    "Tanzania wildlife photography",
    "Serengeti images",
    "Ngorongoro photos",
    "Ikamba Adventure gallery",
  ],
  openGraph: {
    title: "Gallery | Ikamba Adventure",
    description:
      "Browse photos and videos from Tanzania safaris and Kilimanjaro climbs — wildlife, landscapes, and real moments from Ikamba Adventure.",
    images: [{ url: "/Big-Five-safaris-Tanzania.webp", width: 1200, height: 630, alt: "Tanzania safari gallery" }],
  },
  alternates: {
    canonical: "https://ikambaadventure.com/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
