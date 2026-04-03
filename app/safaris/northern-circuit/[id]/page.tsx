import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Moon,
  Check,
  XCircle,
  Hotel,
  Utensils,
  MessageCircle,
  Star,
  ChevronRight,
} from "lucide-react";
import { northernCircuitPackages } from "@/lib/northern-circuit";

const parkImages: Record<string, string> = {
  "nc-2d-manyara-ngorongoro": "/manyara.jpg",
  "nc-3d-tarangire-manyara-ngorongoro": "/tarangire.jpg",
  "nc-4d-manyara-serengeti-ngorongoro": "/serengeti.jpg",
  "nc-5d-tarangire-serengeti-ngorongoro": "/packages images/serengeti-1.jpg",
  "nc-8d-manyara-serengeti-ngorongoro": "/ngorongoro.jpg",
  "nc-10d-best-of-northern": "/packages images/tarangire-1.jpg",
};

export async function generateStaticParams() {
  return northernCircuitPackages.map((pkg) => ({ id: pkg.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const pkg = northernCircuitPackages.find((p) => p.id === id);
  if (!pkg) return {};
  return {
    title: `${pkg.title} — ${pkg.subtitle}`,
    description: `Explore the ${pkg.title} safari package (${pkg.subtitle}). ${pkg.days} days visiting ${pkg.parks.join(", ")} in Tanzania's Northern Circuit.`,
  };
}

export default async function NorthernPackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pkg = northernCircuitPackages.find((p) => p.id === id);
  if (!pkg) notFound();

  const heroImage = parkImages[pkg.id] ?? pkg.image;
  const waMessage = encodeURIComponent(
    `Hi Ikamba Adventure! I'm interested in the "${pkg.title}" (${pkg.subtitle}) Northern Circuit safari. Please share details and pricing.`
  );

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[65vh] min-h-[440px] flex items-end overflow-hidden">
        <Image
          src={heroImage}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm font-heading mb-5">
            <Link href="/safaris" className="hover:text-white transition-colors">Safaris</Link>
            <ChevronRight size={14} />
            <Link href="/safaris/northern-circuit" className="hover:text-white transition-colors">Northern Circuit</Link>
            <ChevronRight size={14} />
            <span className="text-white/90">{pkg.title}</span>
          </div>

          {pkg.badge && (
            <span
              className="inline-block text-white text-xs font-bold px-3 py-1.5 rounded-full font-heading mb-4"
              style={{ backgroundColor: "#ff8201" }}
            >
              {pkg.badge}
            </span>
          )}
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white text-shadow-lg mb-4 leading-tight">
            {pkg.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full font-heading">
              <Calendar size={13} /> {pkg.days} Days
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full font-heading">
              <Moon size={13} /> {pkg.nights} Nights
            </span>
            {pkg.parks.map((park) => (
              <span key={park} className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full font-heading">
                <MapPin size={13} /> {park}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BACK LINK ─── */}
      <div style={{ backgroundColor: "#fdf8f3" }} className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/safaris/northern-circuit"
            className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-gray-600 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Northern Circuit
          </Link>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <section style={{ backgroundColor: "#fdf8f3" }} className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">

          {/* Left — Itinerary */}
          <div className="lg:col-span-2 space-y-10">
            {/* Highlights */}
            <div>
              <h2 className="font-heading font-black text-2xl text-gray-900 mb-5 flex items-center gap-3">
                <span className="w-1 h-7 rounded-full inline-block" style={{ backgroundColor: "#ff8201" }} />
                Package Highlights
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                    <Star size={15} fill="#ff8201" color="#ff8201" className="mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-sans">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="font-heading font-black text-2xl text-gray-900 mb-7 flex items-center gap-3">
                <span className="w-1 h-7 rounded-full inline-block" style={{ backgroundColor: "#ff8201" }} />
                Day-by-Day Itinerary
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200" />

                <div className="space-y-0">
                  {pkg.itinerary.map((day, i) => (
                    <div key={day.day} className="relative flex gap-6 pb-8">
                      {/* Circle */}
                      <div
                        className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-black font-heading flex-shrink-0 shadow-md"
                        style={{ backgroundColor: "#ff8201" }}
                      >
                        {i + 1}
                      </div>

                      {/* Content */}
                      <div className="bg-white rounded-2xl p-5 shadow-sm flex-1 border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="font-heading font-bold text-gray-900 text-base mb-2">{day.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed font-sans mb-4">{day.description}</p>

                        {(day.accommodation || day.meals) && (
                          <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-100">
                            {day.accommodation && (
                              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-sans">
                                <Hotel size={13} style={{ color: "#ff8201" }} />
                                <span><strong className="text-gray-700">Stay:</strong> {day.accommodation}</span>
                              </div>
                            )}
                            {day.meals && (
                              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-sans">
                                <Utensils size={13} style={{ color: "#ff8201" }} />
                                <span><strong className="text-gray-700">Meals:</strong> {day.meals}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Sticky info */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 sticky top-24">
              <h3 className="font-heading font-black text-gray-900 text-lg mb-5">Quick Info</h3>
              <div className="space-y-3 mb-6">
                {[
                  { label: "Duration", value: `${pkg.days} Days / ${pkg.nights} Nights` },
                  { label: "Parks", value: pkg.parks.join(", ") },
                  { label: "Transport", value: "4WD Pop-up Land Cruiser" },
                  { label: "Guide", value: "English-speaking driver guide" },
                  { label: "Meals", value: "Full board" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span className="text-xs font-bold font-heading uppercase tracking-wide text-gray-400 w-20 flex-shrink-0 mt-0.5">{item.label}</span>
                    <span className="text-sm text-gray-700 font-sans">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/255694690780?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm font-heading transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={16} />
                  Inquire on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm font-heading transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: "#ff8201" }}
                >
                  Get a Quote
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Inclusions */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-heading font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full inline-block bg-green-500" />
                Included
              </h3>
              <ul className="space-y-2">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-heading font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full inline-block bg-red-400" />
                Not Included
              </h3>
              <ul className="space-y-2">
                {pkg.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <XCircle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MORE PACKAGES ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-2xl text-gray-900 mb-8">More Northern Circuit Packages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {northernCircuitPackages
              .filter((p) => p.id !== pkg.id)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/safaris/northern-circuit/${related.id}`}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] block shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={parkImages[related.id] ?? related.image}
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white/60 text-xs font-heading mb-1">{related.subtitle}</p>
                    <h3 className="font-heading font-bold text-white text-sm leading-snug">{related.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ─── STICKY BOTTOM BAR (mobile) ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 p-4 flex gap-3">
        <a
          href={`https://wa.me/255694690780?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm font-heading"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle size={15} />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm font-heading"
          style={{ backgroundColor: "#ff8201" }}
        >
          Get a Quote
        </Link>
      </div>
      <div className="h-20 lg:hidden" />
    </>
  );
}
