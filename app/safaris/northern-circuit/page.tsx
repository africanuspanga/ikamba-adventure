import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Moon,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { northernCircuitPackages } from "@/lib/northern-circuit";

export const metadata: Metadata = {
  title: "Northern Circuit Safari | Serengeti, Ngorongoro & More",
  description:
    "Discover Tanzania's Northern Circuit — Serengeti, Ngorongoro Crater, Tarangire, Lake Manyara, and Arusha National Park. Book guided safari packages with Ikamba Adventure.",
  keywords: ["northern circuit safari", "Serengeti safari", "Ngorongoro Crater tour", "Tarangire safari", "Lake Manyara"],
  openGraph: {
    title: "Northern Circuit Safari | Ikamba Adventure",
    description:
      "Tanzania's Northern Circuit: Serengeti wildebeest migration, Ngorongoro Crater lions, Tarangire elephants. Expert-guided safari packages.",
    images: [{ url: "/serengeti.jpg", width: 1200, height: 630, alt: "Serengeti Northern Circuit safari" }],
  },
  alternates: { canonical: "https://ikambaadventure.com/safaris/northern-circuit" },
};
import type { SafariPackage } from "@/lib/northern-circuit";

const parkImages: Record<string, string> = {
  "nc-2d-manyara-ngorongoro": "/manyara.jpg",
  "nc-3d-tarangire-manyara-ngorongoro": "/tarangire.jpg",
  "nc-4d-manyara-serengeti-ngorongoro": "/serengeti.jpg",
  "nc-5d-tarangire-serengeti-ngorongoro": "/packages images/serengeti-1.jpg",
  "nc-8d-manyara-serengeti-ngorongoro": "/ngorongoro.jpg",
  "nc-10d-best-of-northern": "/packages images/tarangire-1.jpg",
};

export default function NorthernCircuitPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/serengeti.jpg"
          alt="Serengeti National Park"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/75" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p
            className="text-sm font-bold uppercase tracking-widest font-heading mb-4"
            style={{ color: "#ff8201" }}
          >
            Safari Circuit
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl text-shadow-lg mb-5">
            Northern Circuit
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            Tanzania&apos;s most iconic safari route — the Serengeti, Ngorongoro Crater, Tarangire &amp; Lake Manyara.
          </p>
        </div>
      </section>

      {/* ─── PARKS ROW ─── */}
      <section style={{ backgroundColor: "#553332" }} className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-white text-center">
            {[
              { name: "Serengeti", image: "/serengeti.jpg", fact: "Great Migration" },
              { name: "Ngorongoro", image: "/ngorongoro.jpg", fact: "Big 5 Crater" },
              { name: "Tarangire", image: "/tarangire.jpg", fact: "Giant Baobabs" },
              { name: "Lake Manyara", image: "/manyara.jpg", fact: "Flamingos" },
            ].map((park) => (
              <div key={park.name} className="flex flex-col items-center gap-2">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-400">
                  <Image
                    src={park.image}
                    alt={park.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <div className="font-heading font-bold text-sm">{park.name}</div>
                  <div className="text-white/60 text-xs font-sans">{park.fact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-bold uppercase tracking-widest font-heading mb-4"
            style={{ color: "#ff8201" }}
          >
            About the Circuit
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-6">
            Tanzania&apos;s Premier Wildlife Destination
          </h2>
          <p className="text-gray-600 leading-relaxed font-sans text-base">
            The Northern Circuit is Tanzania&apos;s most popular safari route, offering incredible
            wildlife viewing and iconic landscapes. Witness the Great Migration across the Serengeti,
            explore the world-famous Ngorongoro Crater — home to approximately 30,000 animals
            including the Big 5 — encounter elephant super-herds in Tarangire, and watch flamingos
            at Lake Manyara&apos;s alkaline soda lake. A year-round destination for unforgettable game drives.
          </p>
        </div>
      </section>

      {/* ─── PACKAGES GRID ─── */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-bold uppercase tracking-widest font-heading mb-3"
              style={{ color: "#ff8201" }}
            >
              Our Packages
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900">
              Choose Your Northern Safari
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {northernCircuitPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                image={parkImages[pkg.id] ?? pkg.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="py-12" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              "/packages images/manyara-1.jpg",
              "/packages images/serengeti-2.jpg",
              "/packages images/tarangire-2.jpg",
              "/packages images/ngorongoro.jpg",
              "/packages images/manyara-baboons.jpg",
              "/packages images/manyara-lion.jpg",
              "/packages images/tarangire-1.jpg",
              "/packages images/serengeti-1.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={src}
                  alt="Northern Circuit wildlife"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16" style={{ backgroundColor: "#553332" }}>
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <h2 className="font-heading font-black text-3xl sm:text-4xl mb-4">
            Ready to Safari the North?
          </h2>
          <p className="text-white/70 font-sans mb-8">
            Contact us for custom packages, group pricing, or to tailor any itinerary to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full text-white font-bold text-sm font-heading transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl shadow-lg"
              style={{ backgroundColor: "#ff8201" }}
            >
              Get a Custom Quote
            </Link>
            <a
              href="https://wa.me/255694690780"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-white font-bold text-sm font-heading transition-all duration-200 hover:-translate-y-0.5 border-2 flex items-center justify-center gap-2"
              style={{ borderColor: "rgba(255,255,255,0.4)" }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

interface PackageCardProps {
  pkg: SafariPackage;
  image: string;
}

function PackageCard({ pkg, image }: PackageCardProps) {
  const waMessage = encodeURIComponent(
    `Hi! I'm interested in the "${pkg.title}" (${pkg.subtitle}) Northern Circuit safari. Please share details and pricing.`
  );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {pkg.badge && (
          <span
            className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full font-heading"
            style={{ backgroundColor: "#ff8201" }}
          >
            {pkg.badge}
          </span>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-heading flex items-center gap-1">
            <Calendar size={10} />
            {pkg.days} Days
          </span>
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-heading flex items-center gap-1">
            <Moon size={10} />
            {pkg.nights} Nights
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-bold uppercase tracking-widest font-heading mb-1" style={{ color: "#ff8201" }}>
          {pkg.subtitle}
        </p>
        <h3 className="font-heading font-bold text-gray-900 text-base mb-3 leading-snug">
          {pkg.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.parks.map((park) => (
            <span
              key={park}
              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-sans"
              style={{ backgroundColor: "rgba(85,51,50,0.08)", color: "#553332" }}
            >
              <MapPin size={9} />
              {park}
            </span>
          ))}
        </div>

        <ul className="space-y-1.5 mb-5 flex-1">
          {pkg.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-gray-500 font-sans">
              <span
                className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                style={{ backgroundColor: "#ff8201" }}
              />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex gap-2 pt-3 border-t border-gray-100">
          <Link
            href={`/safaris/northern-circuit/${pkg.id}`}
            className="flex-1 py-2.5 rounded-xl text-sm font-bold font-heading transition-all duration-200 hover:shadow-md text-white flex items-center justify-center gap-1"
            style={{ backgroundColor: "#ff8201" }}
          >
            View Details
            <ChevronRight size={14} />
          </Link>
          <a
            href={`https://wa.me/255694690780?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 rounded-xl text-sm font-bold font-heading transition-all duration-200 hover:shadow-md text-white flex items-center justify-center"
            style={{ backgroundColor: "#25D366" }}
            aria-label="Inquire on WhatsApp"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
