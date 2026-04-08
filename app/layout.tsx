import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ikambaadventure.com"),
  title: {
    default: "Ikamba Adventure — Tanzania Safaris & Kilimanjaro Climbing",
    template: "%s | Ikamba Adventure",
  },
  description:
    "Experience unforgettable Tanzania safaris, Kilimanjaro climbing, and authentic cultural adventures with Ikamba Adventure — your trusted local tour operator based in Tanzania.",
  keywords: [
    "Tanzania safari",
    "Kilimanjaro climbing",
    "Serengeti tours",
    "Ngorongoro Crater safari",
    "Tanzania tour operator",
    "Ikamba Adventure",
    "African safari",
    "wildlife safari Tanzania",
    "Dar es Salaam tours",
    "Arusha tours",
    "southern circuit safari",
    "northern circuit safari",
    "Tanzania travel",
    "Mount Kilimanjaro",
  ],
  authors: [{ name: "Ikamba Adventure" }],
  creator: "Ikamba Adventure",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ikambaadventure.com",
    siteName: "Ikamba Adventure",
    title: "Ikamba Adventure — Tanzania Safaris & Kilimanjaro Climbing",
    description:
      "Experience unforgettable Tanzania safaris, Kilimanjaro climbing, and authentic cultural adventures with Ikamba Adventure.",
    images: [
      {
        url: "/Big-Five-safaris-Tanzania.webp",
        width: 1200,
        height: 630,
        alt: "Ikamba Adventure — Tanzania Safaris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikamba Adventure — Tanzania Safaris & Kilimanjaro Climbing",
    description:
      "Experience unforgettable Tanzania safaris, Kilimanjaro climbing, and authentic cultural adventures.",
    images: ["/Big-Five-safaris-Tanzania.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/Ikamba favicon.jpg.jpeg",
    shortcut: "/Ikamba favicon.jpg.jpeg",
    apple: "/Ikamba favicon.jpg.jpeg",
  },
  alternates: {
    canonical: "https://ikambaadventure.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
