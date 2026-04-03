"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Moon,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { southernCircuitPackages } from "@/lib/southern-circuit";
import type { SafariPackage } from "@/lib/northern-circuit";

export default function SouthernCircuitPage() {
  const [filter, setFilter] = useState<"all" | "short" | "medium" | "long">("all");

  const filtered = southernCircuitPackages.filter((pkg) => {
    if (filter === "short") return pkg.days <= 3;
    if (filter === "medium") return pkg.days >= 4 && pkg.days <= 6;
    if (filter === "long") return pkg.days >= 7;
    return true;
  });

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/selous.jpg"
          alt="Nyerere National Park"
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
            Southern Circuit
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            Untamed wilderness, boat safaris on Rufiji River, and authentic encounters — far from the crowds.
          </p>
        </div>
      </section>

      {/* ─── PARKS ROW ─── */}
      <section style={{ backgroundColor: "#553332" }} className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-white text-center">
            {[
              { name: "Nyerere (Selous)", image: "/selous.jpg", fact: "Boat Safaris" },
              { name: "Ruaha", image: "/ruaha.jpg", fact: "Elephant Herds" },
              { name: "Mikumi", image: "/packages images/mikumi.jpg", fact: "Open Plains" },
              { name: "Udzungwa", image: "/udzungwa-waterfall.jpg", fact: "Waterfalls" },
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
            Remote, Wild &amp; Unforgettable
          </h2>
          <p className="text-gray-600 leading-relaxed font-sans text-base">
            The Southern Circuit offers a more remote and untouched safari experience. Enjoy fewer
            crowds, vast wilderness, and unique activities like boat safaris on the Rufiji River, walking
            safaris through Nyerere National Park, and hiking to spectacular waterfalls in the Udzungwa
            Mountains. Explore Africa&apos;s largest national park, Tanzania&apos;s most remote wild spaces, and
            authentic wildlife encounters that go far beyond the ordinary.
          </p>
        </div>
      </section>

      {/* ─── FILTER + PACKAGES ─── */}
      <section className="pb-20 sm:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {[
              { key: "all", label: "All Packages" },
              { key: "short", label: "2–3 Days" },
              { key: "medium", label: "4–6 Days" },
              { key: "long", label: "7+ Days" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key as typeof filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold font-heading transition-all duration-200 ${
                  filter === f.key
                    ? "text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={filter === f.key ? { backgroundColor: "#ff8201" } : {}}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((pkg) => (
              <SouthernPackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SOUTHERN ─── */}
      <section className="py-16" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                <Image
                  src="/packages images/nyerere-elephants.jpg"
                  alt="Elephants at Nyerere"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                  <Image
                    src="/tour-saadani-giraffes.jpg"
                    alt="Giraffes at Saadani"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                  <Image
                    src="/udzungwa-waterfall.jpg"
                    alt="Udzungwa waterfalls"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
            <div>
              <p
                className="text-sm font-bold uppercase tracking-widest font-heading mb-4"
                style={{ color: "#ff8201" }}
              >
                Why Southern?
              </p>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-6">
                The Road Less Traveled
              </h2>
              {[
                { title: "Fewer Crowds", desc: "Experience Africa's wildlife without the tourist minibuses. The Southern parks feel genuinely wild and unspoiled." },
                { title: "Unique Activities", desc: "Boat safaris on the Rufiji River, walking safaris in wilderness, and forest hikes to spectacular waterfalls." },
                { title: "Incredible Diversity", desc: "From vast floodplains and riverine forests to highland mountains — extraordinary ecosystems in one circuit." },
                { title: "Great Value", desc: "World-class wildlife experiences at competitive prices, with SGR train connections making it highly accessible from Dar es Salaam." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 mb-5">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "#ff8201" }}
                  />
                  <div>
                    <h4 className="font-heading font-bold text-gray-900 text-base">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-sans mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-4 px-7 py-3.5 rounded-full text-white font-bold text-sm font-heading transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: "#553332" }}
              >
                Plan a Southern Safari
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SouthernPackageCard({ pkg }: { pkg: SafariPackage }) {
  const waMessage = encodeURIComponent(
    `Hi! I'm interested in the "${pkg.title}" (${pkg.subtitle}) Southern Circuit safari. Please share details and pricing.`
  );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={pkg.image}
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
            href={`/safaris/southern-circuit/${pkg.id}`}
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
