"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Clock,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  Check,
  Tent,
  Building,
} from "lucide-react";
import { kilimanjaroRoutes, commonPackageIncludes } from "@/lib/kilimanjaro";
import type { KiliRoute } from "@/lib/kilimanjaro";

const routeImages: Record<string, string> = {
  machame: "/machame-hut-camps.jpg",
  lemosho: "/lemosho.jpg",
  marangu: "/marangu.jpg",
  "rongai-5day": "/uhuru-peak-rongai.jpg",
  "rongai-67day": "/uhuru-peak-rongai.jpg",
  umbwe: "/umbwe-route.jpg",
};

const zoneColors: Record<string, string> = {
  "Rainforest": "bg-green-100 text-green-700",
  "Alpine Moorland": "bg-teal-100 text-teal-700",
  "High Altitude Desert": "bg-yellow-100 text-yellow-700",
  "Arctic Zone": "bg-blue-100 text-blue-700",
  "Acclimatization": "bg-purple-100 text-purple-700",
  "Descent": "bg-gray-100 text-gray-600",
};

function RouteCard({ route }: { route: KiliRoute }) {
  const [expanded, setExpanded] = useState(false);
  const waMessage = encodeURIComponent(
    `Hi Ikamba Adventure! I'm interested in the Kilimanjaro ${route.name} (${route.duration}). Please share more details and pricing.`
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative h-56 overflow-hidden group">
        <Image
          src={routeImages[route.id] ?? "/kilimanjaro-uhuru-peak.jpg"}
          alt={route.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {route.badge && (
          <span
            className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full font-heading"
            style={{ backgroundColor: "#ff8201" }}
          >
            {route.badge}
          </span>
        )}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-heading flex items-center gap-1">
            <Clock size={10} />
            {route.duration}
          </span>
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-heading flex items-center gap-1">
            {route.type === "Camping" ? <Tent size={10} /> : <Building size={10} />}
            {route.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-heading font-black text-gray-900 text-xl">{route.name}</h3>
          <div className="text-right flex-shrink-0">
            <div className={`text-xs font-bold font-heading ${route.difficultyColor}`}>
              {route.difficulty}
            </div>
            <div className="text-xs text-gray-400 font-sans">{route.successRate} success</div>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed font-sans mb-5">
          {route.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {route.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-gray-600 font-sans">
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                style={{ backgroundColor: "#ff8201" }}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Itinerary Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full py-3 border-y border-gray-100 text-sm font-bold font-heading text-gray-700 hover:text-orange-500 transition-colors duration-150"
        >
          <span>View Day-by-Day Itinerary</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {expanded && (
          <div className="mt-4 space-y-4">
            {route.itinerary.map((day, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold font-heading flex-shrink-0"
                    style={{ backgroundColor: "#ff8201" }}
                  >
                    {i + 1}
                  </div>
                  {i < route.itinerary.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 mt-1" />
                  )}
                </div>
                <div className="pb-4 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-heading font-bold text-gray-900 text-sm">{day.day}: {day.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-sans ${zoneColors[day.zone] ?? "bg-gray-100 text-gray-600"}`}>
                      {day.zone}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-sans flex items-center gap-1">
                      <Clock size={9} />
                      {day.trekTime}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-sans flex items-center gap-1">
                      <Mountain size={9} />
                      {day.altitude}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-5">
          <Link
            href="/contact"
            className="flex-1 py-2.5 rounded-xl text-white text-sm font-bold font-heading transition-all duration-200 hover:shadow-md flex items-center justify-center gap-1"
            style={{ backgroundColor: "#ff8201" }}
          >
            Get a Quote
            <ChevronRight size={14} />
          </Link>
          <a
            href={`https://wa.me/255694690780?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl text-white text-sm font-bold font-heading transition-all duration-200 hover:shadow-md flex items-center gap-2"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function KilimanjaroPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/kilimanjaro-uhuru-peak.jpg"
          alt="Kilimanjaro Uhuru Peak summit"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/75" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 font-heading"
            style={{ backgroundColor: "rgba(255,130,1,0.25)", border: "1px solid rgba(255,130,1,0.5)" }}
          >
            <Mountain size={14} style={{ color: "#ff8201" }} />
            <span>5,895m / 19,341ft — Africa&apos;s Highest Peak</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl text-shadow-lg mb-5">
            Climb Mount<br />Kilimanjaro
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            Challenge yourself with an unforgettable journey to the Roof of Africa — with professional guides every step of the way.
          </p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ backgroundColor: "#ff8201" }} className="py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {[
            { value: "5,895m", label: "Summit Elevation" },
            { value: "6 Routes", label: "Climbing Options" },
            { value: "5–8 Days", label: "Trip Duration" },
            { value: "All Year", label: "Climbing Season" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading font-black text-2xl sm:text-3xl">{stat.value}</div>
              <div className="font-sans text-white/80 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-widest font-heading mb-4"
              style={{ color: "#ff8201" }}
            >
              The Challenge
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-6">
              Stand on the Roof of Africa
            </h2>
            <p className="text-gray-600 leading-relaxed font-sans mb-5">
              Mount Kilimanjaro is the world&apos;s highest free-standing mountain and Africa&apos;s tallest peak at 5,895m. Unlike other high-altitude peaks, Kilimanjaro requires no technical climbing skills — making it accessible to determined hikers of all backgrounds.
            </p>
            <p className="text-gray-600 leading-relaxed font-sans mb-7">
              With Ikamba Adventure, you&apos;ll be guided by our experienced, certified mountain guides who have summited Kilimanjaro hundreds of times. We provide everything you need — from equipment to porters to emergency oxygen — so you can focus entirely on the incredible experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Professional certified guides",
                "Quality equipment included",
                "Emergency oxygen on every climb",
                "Pre-climb gear check",
                "Multiple routes available",
                "All meals included",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700 font-sans">
                  <Check size={16} style={{ color: "#ff8201" }} className="flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "/kilimanjaro-day-hike.jpg",
              "/kilimanjaro-porters-sunrise.jpg",
              "/kilimanjaro-sunset-hiker.jpg",
              "/kilimanjaro-aerial-crater.jpg",
            ].map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                <Image
                  src={src}
                  alt="Kilimanjaro climbing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROUTES ─── */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm font-bold uppercase tracking-widest font-heading mb-3"
              style={{ color: "#ff8201" }}
            >
              Choose Your Route
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              6 Routes to the Summit
            </h2>
            <p className="text-gray-500 font-sans max-w-2xl mx-auto">
              Each route offers a unique experience of the mountain — from the scenic Machame to the remote Lemosho. We&apos;ll help you choose the right one for your fitness level and time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {kilimanjaroRoutes.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-bold uppercase tracking-widest font-heading mb-3"
              style={{ color: "#ff8201" }}
            >
              Package Details
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900">
              What Every Climb Includes
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {commonPackageIncludes.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                <Check size={16} style={{ color: "#ff8201" }} className="mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-sans">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs text-center mt-6 font-sans">
            * Minors 10–15 years, Tanzanian Residents and East African Community Citizens are eligible for reduced park fees. Details on request.
          </p>
        </div>
      </section>

      {/* ─── PHOTO ROW ─── */}
      <section className="py-4 bg-white overflow-hidden">
        <div className="flex gap-3">
          {[
            "/kilimanjaro-uhuru-peak.jpg",
            "/horombo-huts.jpg",
            "/shira-camp.jpg",
            "/shira-1-camp.jpg",
            "/marangu-gate.jpg",
            "/marangu-route-signboard.jpg",
            "/kilimanjaro-uhuru-peak.jpg",
            "/horombo-huts.jpg",
          ].map((src, i) => (
            <div key={i} className="flex-shrink-0 relative w-48 h-32 rounded-xl overflow-hidden">
              <Image
                src={src}
                alt="Kilimanjaro"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#553332" }}>
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <Mountain size={40} className="mx-auto mb-6" style={{ color: "#ff8201" }} />
          <h2 className="font-heading font-black text-3xl sm:text-5xl mb-4">
            Your Summit Awaits
          </h2>
          <p className="text-white/70 text-lg font-sans mb-10">
            Thousands of climbers have stood on Uhuru Peak with Ikamba Adventure. Now it&apos;s your turn — let&apos;s start planning your climb today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full text-white font-bold text-base font-heading transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl shadow-lg"
              style={{ backgroundColor: "#ff8201" }}
            >
              Book My Kilimanjaro Climb
            </Link>
            <a
              href="https://wa.me/255694690780"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-white font-bold text-base font-heading transition-all duration-200 hover:-translate-y-1 border-2 flex items-center justify-center gap-2"
              style={{ borderColor: "rgba(255,255,255,0.4)" }}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
