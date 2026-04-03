import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Tanzania Safaris",
  description:
    "Explore Tanzania's incredible national parks on a Northern or Southern Circuit safari. Choose from 20+ curated packages with Ikamba Adventure.",
};

const circuits = [
  {
    title: "Northern Circuit",
    href: "/safaris/northern-circuit",
    image: "/serengeti.jpg",
    parks: ["Serengeti", "Ngorongoro Crater", "Tarangire", "Lake Manyara"],
    packages: "6 Packages · 2–10 Days",
    description:
      "Tanzania's most iconic safari route. Witness the Great Migration, descend into the Ngorongoro Crater, and track the Big 5 across the Serengeti's endless plains.",
    highlights: [
      "Great Migration — July to October",
      "Big 5 guaranteed in Ngorongoro",
      "Giant baobabs in Tarangire",
      "Flamingos at Lake Manyara",
    ],
    badge: "Most Popular",
    badgeColor: "#ff8201",
  },
  {
    title: "Southern Circuit",
    href: "/safaris/southern-circuit",
    image: "/selous.jpg",
    parks: ["Nyerere (Selous)", "Ruaha", "Mikumi", "Udzungwa Mountains"],
    packages: "14 Packages · 2–14 Days",
    description:
      "Remote, wild, and untamed. The Southern Circuit offers boat safaris, walking safaris, and pristine wilderness with fewer crowds and more authentic encounters.",
    highlights: [
      "Boat safari on Rufiji River",
      "Africa's largest national park",
      "Walking safaris in Nyerere",
      "Sanje Waterfalls hike",
    ],
    badge: "Fewer Crowds",
    badgeColor: "#553332",
  },
];

const safariHighlights = [
  {
    image: "/packages images/manyara-lion.jpg",
    caption: "Tree-climbing lions, Lake Manyara",
  },
  {
    image: "/packages images/serengeti-2.jpg",
    caption: "The Great Migration, Serengeti",
  },
  {
    image: "/packages images/ruaha.jpg",
    caption: "Elephant herds, Ruaha",
  },
  {
    image: "/packages images/nyerere-elephants.jpg",
    caption: "Elephants at Nyerere",
  },
  {
    image: "/packages images/tarangire-2.jpg",
    caption: "Giraffe at sunset, Tarangire",
  },
  {
    image: "/packages images/ngorongoro.jpg",
    caption: "Ngorongoro Crater sunrise",
  },
];

export default function SafarisPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/Big-Five-safaris-Tanzania.webp"
          alt="Tanzania safari"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p
            className="text-sm font-bold uppercase tracking-widest font-heading mb-4"
            style={{ color: "#ff8201" }}
          >
            Wildlife Safaris
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-shadow-lg mb-4">
            Explore Tanzania Safaris
          </h1>
          <p className="text-white/80 text-lg font-sans">
            20 curated packages across two spectacular circuits — pick your adventure.
          </p>
        </div>
      </section>

      {/* ─── CIRCUIT CARDS ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {circuits.map((circuit) => (
              <div
                key={circuit.title}
                className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={circuit.image}
                    alt={circuit.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span
                    className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-full font-heading"
                    style={{ backgroundColor: circuit.badgeColor }}
                  >
                    {circuit.badge}
                  </span>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white/70 text-xs font-sans">{circuit.packages}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h2 className="font-heading font-black text-2xl text-gray-900 mb-3">
                    {circuit.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans mb-5">
                    {circuit.description}
                  </p>

                  {/* Parks */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {circuit.parks.map((park) => (
                      <span
                        key={park}
                        className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full font-heading font-medium"
                        style={{
                          backgroundColor: "rgba(255,130,1,0.08)",
                          color: "#ff8201",
                        }}
                      >
                        <MapPin size={10} />
                        {park}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-7">
                    {circuit.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-gray-600 font-sans"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#ff8201" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={circuit.href}
                    className="inline-flex items-center gap-2 w-full justify-center py-3.5 rounded-xl text-white font-bold text-sm font-heading transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: "#ff8201" }}
                  >
                    View All Packages
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY GRID ─── */}
      <section className="py-16" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-sm font-bold uppercase tracking-widest font-heading mb-3"
              style={{ color: "#ff8201" }}
            >
              Tanzania Wildlife
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900">
              Moments That Take Your Breath Away
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {safariHighlights.map((item, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden group ${
                  i === 0 ? "row-span-2" : ""
                }`}
                style={{ aspectRatio: i === 0 ? "1/2" : "4/3" }}
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-heading font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "#553332" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-4">
            Can&apos;t find the right package?
          </h2>
          <p className="text-white/70 font-sans mb-8">
            We tailor-make safaris to your exact preferences, budget, and travel dates. Contact us for a custom itinerary.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base font-heading transition-all duration-200 hover:-translate-y-1 hover:shadow-xl shadow-lg"
            style={{ backgroundColor: "#ff8201" }}
          >
            Request a Custom Safari
          </Link>
        </div>
      </section>
    </>
  );
}
