import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Southern Circuit Safari | Ruaha, Selous & Remote Parks",
  description:
    "Explore Tanzania's wild Southern Circuit — Ruaha, Nyerere (Selous), Mikumi, Katavi, Mahale, and Saadani. Off-the-beaten-path safaris with Ikamba Adventure.",
  keywords: ["southern circuit safari", "Ruaha safari", "Selous safari", "Nyerere National Park", "Tanzania remote safari"],
  openGraph: {
    title: "Southern Circuit Safari | Ikamba Adventure",
    description:
      "Tanzania's Southern Circuit: Ruaha lions, Selous boat safaris, Mahale chimpanzees. Exclusive, uncrowded national parks.",
    images: [{ url: "/ruaha.jpg", width: 1200, height: 630, alt: "Southern Circuit safari Tanzania" }],
  },
  alternates: { canonical: "https://ikambaadventure.com/safaris/southern-circuit" },
};

export default function SouthernCircuitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
