import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book Your Tanzania Safari",
  description:
    "Get in touch with Ikamba Adventure to plan your Tanzania safari or Kilimanjaro climb. Offices in Dar es Salaam and Arusha. WhatsApp, phone, and email support.",
  keywords: [
    "contact Ikamba Adventure",
    "book Tanzania safari",
    "Tanzania tour operator contact",
    "safari booking",
    "Kilimanjaro booking",
  ],
  openGraph: {
    title: "Contact Us | Ikamba Adventure",
    description:
      "Plan your Tanzania safari or Kilimanjaro climb with Ikamba Adventure. Reach us by WhatsApp, phone, or email — offices in Dar es Salaam and Arusha.",
    images: [{ url: "/colorful-balloons-soar-tranquil-african-landscape-generated-by-ai.jpg", width: 1200, height: 630, alt: "Contact Ikamba Adventure" }],
  },
  alternates: {
    canonical: "https://ikambaadventure.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
