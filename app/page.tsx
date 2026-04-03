import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  Shield,
  Users,
  Clock,
  DollarSign,
  ChevronRight,
  Quote,
  Mountain,
  Waves,
  Trees,
  Calendar,
  Moon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tanzania Safaris & Kilimanjaro Climbing — Ikamba Adventure",
  description:
    "Discover Tanzania's wild beauty with Ikamba Adventure. Serengeti safaris, Ngorongoro Crater, Kilimanjaro climbing and authentic cultural experiences tailored just for you.",
};

const whyUs = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep knowledge of Tanzania's parks, culture, and hidden gems built over years of guiding.",
  },
  {
    icon: Users,
    title: "Tailor-Made Experiences",
    description:
      "Every trip is customized to your needs, travel style, and budget — no two journeys are alike.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Professional guides, well-maintained vehicles, and emergency protocols for complete peace of mind.",
  },
  {
    icon: DollarSign,
    title: "Affordable Luxury",
    description:
      "Premium safari experiences at transparent, competitive prices — no hidden fees, ever.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "We're with you from the first enquiry to your safe return home — always just a call away.",
  },
];

const testimonials = [
  {
    name: "Raphael Msuya",
    country: "Tanzania",
    avatar: "/trip advisor reviews copy/avatar-1.jpg",
    rating: 5,
    text: "An unforgettable safari experience. Everything was perfectly organized from start to finish. The guides were incredibly knowledgeable and the camps were beyond expectations.",
  },
  {
    name: "Salma Ahmed",
    country: "Kenya",
    avatar: "/trip advisor reviews copy/avatar-2.jpg",
    rating: 5,
    text: "The Kilimanjaro trip was life-changing. Highly professional guides and amazing support throughout. I never felt unsafe and reaching Uhuru Peak was the greatest moment of my life.",
  },
  {
    name: "John Kimaro",
    country: "United Kingdom",
    avatar: "/trip advisor reviews copy/avatar-3.jpg",
    rating: 5,
    text: "Best travel company in Tanzania. Friendly, reliable, and truly memorable adventures. The Serengeti game drives were incredible — we saw all of the Big 5 on day one!",
  },
  {
    name: "Maria Sanchez",
    country: "Spain",
    avatar: "/trip advisor reviews copy/avatar-4.jpg",
    rating: 5,
    text: "Absolutely outstanding service from booking to the final day. The team handled everything seamlessly and made us feel like VIP guests throughout our entire journey.",
  },
];

const recommendedBy = [
  { src: "/recommeded by section logos copy/TripAdvisor_Logo.svg.png", alt: "TripAdvisor" },
  { src: "/recommeded by section logos copy/Safari-Booking-Logo.png", alt: "SafariBookings" },
  { src: "/recommeded by section logos copy/GetYourGuide_2018.webp", alt: "GetYourGuide" },
  { src: "/recommeded by section logos copy/google-reviews-logo.png", alt: "Google Reviews" },
  { src: "/recommeded by section logos copy/TANAPA.jpg", alt: "TANAPA" },
  { src: "/recommeded by section logos copy/TTB.png", alt: "Tanzania Tourism Board" },
  { src: "/recommeded by section logos copy/trust-pilot-stacked-black.svg", alt: "Trustpilot" },
];

const northernHighlights = [
  {
    id: "nc-5d-tarangire-serengeti-ngorongoro",
    title: "5-Day Tarangire, Serengeti & Ngorongoro",
    subtitle: "5 Days / 4 Nights",
    image: "/packages images/serengeti-1.jpg",
    parks: ["Tarangire", "Serengeti", "Ngorongoro"],
    tag: "Best Seller",
    tagColor: "#ff8201",
    highlights: ["Great Migration game drives", "Ngorongoro Crater full day", "Giant baobab forest"],
  },
  {
    id: "nc-4d-manyara-serengeti-ngorongoro",
    title: "4-Day Manyara, Serengeti & Ngorongoro",
    subtitle: "4 Days / 3 Nights",
    image: "/serengeti.jpg",
    parks: ["Lake Manyara", "Serengeti", "Ngorongoro"],
    tag: "Popular",
    tagColor: "#553332",
    highlights: ["Flamingos at Lake Manyara", "Big 5 in Ngorongoro Crater", "Serengeti sunrise"],
  },
  {
    id: "nc-10d-best-of-northern",
    title: "10-Day Best of Northern Tanzania",
    subtitle: "10 Days / 9 Nights",
    image: "/packages images/tarangire-1.jpg",
    parks: ["Tarangire", "Manyara", "Serengeti", "Ngorongoro"],
    tag: "Ultimate",
    tagColor: "#1a7a4a",
    highlights: ["All 4 northern parks", "Full Great Migration experience", "Walking safaris"],
  },
];

const southernHighlights = [
  {
    id: "sc-4d-nyerere",
    title: "4-Day Nyerere Explorer",
    subtitle: "4 Days / 3 Nights",
    image: "/packages images/nyerere-elephants.jpg",
    parks: ["Nyerere"],
    tag: "Boat Safari",
    tagColor: "#0066aa",
  },
  {
    id: "sc-5d-ruaha",
    title: "5-Day Ruaha Wilderness",
    subtitle: "5 Days / 4 Nights",
    image: "/packages images/ruaha.jpg",
    parks: ["Ruaha"],
    tag: "Fewer Crowds",
    tagColor: "#553332",
  },
  {
    id: "sc-3d-mikumi",
    title: "3-Day Mikumi Safari",
    subtitle: "3 Days / 2 Nights",
    image: "/packages images/mikumi.jpg",
    parks: ["Mikumi"],
    tag: "From Dar",
    tagColor: "#1a7a4a",
  },
  {
    id: "sc-6d-nyerere-ruaha",
    title: "6-Day Nyerere & Ruaha",
    subtitle: "6 Days / 5 Nights",
    image: "/selous.jpg",
    parks: ["Nyerere", "Ruaha"],
    tag: "Twin Park",
    tagColor: "#7a3a00",
  },
  {
    id: "sc-7d-nyerere-ruaha-mikumi",
    title: "7-Day Southern Explorer",
    subtitle: "7 Days / 6 Nights",
    image: "/packages images/nyerere-elephants.jpg",
    parks: ["Nyerere", "Ruaha", "Mikumi"],
    tag: "3 Parks",
    tagColor: "#ff8201",
  },
  {
    id: "sc-14d-southern-explorer",
    title: "14-Day Grand Southern Circuit",
    subtitle: "14 Days / 13 Nights",
    image: "/selous.jpg",
    parks: ["Nyerere", "Ruaha", "Mikumi", "Udzungwa"],
    tag: "Grand Tour",
    tagColor: "#7a0044",
  },
];

const kiliHighlights = [
  {
    id: "machame",
    name: "Machame Route",
    nickname: "Whiskey Route",
    duration: "6–7 Days",
    image: "/machame-hut-camps.jpg",
    difficulty: "Demanding",
    successRate: "85%",
    highlights: ["Most scenic route", "Barranco Wall scramble", "Excellent acclimatization"],
    badge: "Most Popular",
  },
  {
    id: "marangu",
    name: "Marangu Route",
    nickname: "Coca-Cola Route",
    duration: "5–6 Days",
    image: "/marangu-gate.jpg",
    difficulty: "Moderate",
    successRate: "65%",
    highlights: ["Comfortable hut accommodation", "Gentler gradient", "Classic trail"],
    badge: "Beginner Friendly",
  },
  {
    id: "rongai-67day",
    name: "Rongai Route",
    nickname: "Northern Approach",
    duration: "6–7 Days",
    image: "/uhuru-peak-rongai.jpg",
    difficulty: "Moderate",
    successRate: "80%",
    highlights: ["Remote wilderness feel", "Fewer trekkers", "Approach from Kenya side"],
    badge: "Less Crowded",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/Ikamba Hero .mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 font-heading"
            style={{ backgroundColor: "rgba(255,130,1,0.25)", border: "1px solid rgba(255,130,1,0.5)" }}
          >
            <Star size={14} fill="currentColor" style={{ color: "#ff8201" }} />
            <span>Tanzania&apos;s Premier Safari Company</span>
          </div>

          <h1
            className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
            style={{ letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Discover the{" "}
            <span style={{ color: "#ff8201" }}>Wild Beauty</span>
            <br />
            of Tanzania
          </h1>

          <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Experience unforgettable safaris, breathtaking landscapes, and
            authentic cultural adventures tailored just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/safaris"
              className="px-8 py-4 rounded-full text-white font-bold text-base font-heading transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl shadow-lg"
              style={{ backgroundColor: "#ff8201" }}
            >
              Explore Safaris
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full text-white font-bold text-base font-heading transition-all duration-200 hover:-translate-y-1 backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.5)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
          <span className="text-xs font-heading tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section style={{ backgroundColor: "#ff8201" }} className="py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {[
            { value: "500+", label: "Happy Travelers" },
            { value: "10+", label: "Years Experience" },
            { value: "26+", label: "Safari Packages" },
            { value: "100%", label: "Safety Record" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading font-black text-3xl sm:text-4xl">{stat.value}</div>
              <div className="font-sans text-white/80 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/beautiful-african-elephant.jpg"
                alt="African elephant in the wild"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-5 rounded-xl p-4 shadow-xl text-white hidden sm:block"
              style={{ backgroundColor: "#553332" }}
            >
              <div className="font-heading font-black text-3xl">4.9</div>
              <div className="flex gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#ff8201" color="#ff8201" />
                ))}
              </div>
              <div className="font-sans text-xs text-white/70">TripAdvisor Rating</div>
            </div>
            <div
              className="absolute -top-4 -left-4 rounded-xl p-3 shadow-xl text-white hidden sm:flex flex-col items-center"
              style={{ backgroundColor: "#ff8201" }}
            >
              <div className="font-heading font-black text-2xl">10+</div>
              <div className="font-sans text-xs text-white/90">Years</div>
            </div>
          </div>

          <div>
            <p
              className="text-sm font-bold uppercase tracking-widest font-heading mb-3"
              style={{ color: "#ff8201" }}
            >
              About Ikamba Adventure
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Your Gateway to{" "}
              <span style={{ color: "#553332" }}>Tanzania&apos;s</span>{" "}
              Wild Heart
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 font-sans text-base">
              Ikamba Adventure is a Tanzania-based tour and travel company
              specializing in safaris, cultural tours, and adventure experiences
              tailored to every traveler. From the vast plains of Serengeti to
              the peak of Mount Kilimanjaro, we create journeys that combine
              comfort, authenticity, and unforgettable moments.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-sans text-base">
              Driven by passion and local expertise, we are committed to
              delivering safe, high-quality, and affordable travel experiences
              while showcasing the beauty and culture of Tanzania.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-heading font-bold text-sm px-6 py-3 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: "#553332" }}
            >
              Learn More About Us
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── NORTHERN CIRCUIT HIGHLIGHTS ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,130,1,0.12)" }}
                >
                  <Trees size={16} style={{ color: "#ff8201" }} />
                </span>
                <p className="text-sm font-bold uppercase tracking-widest font-heading" style={{ color: "#ff8201" }}>
                  Northern Circuit
                </p>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900">
                Iconic Safaris — Serengeti &amp; Beyond
              </h2>
              <p className="text-gray-500 font-sans mt-3 max-w-xl">
                The Big 5, the Great Migration, Ngorongoro Crater — Tanzania&apos;s most celebrated wildlife corridor awaits.
              </p>
            </div>
            <Link
              href="/safaris/northern-circuit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-200 hover:shadow-md flex-shrink-0 text-white"
              style={{ backgroundColor: "#ff8201" }}
            >
              All 6 Packages
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {northernHighlights.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/safaris/northern-circuit/${pkg.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full font-heading"
                    style={{ backgroundColor: pkg.tagColor }}
                  >
                    {pkg.tag}
                  </span>
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-heading flex items-center gap-1">
                      <Calendar size={10} />
                      {pkg.subtitle}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {pkg.parks.map((park) => (
                      <span
                        key={park}
                        className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-sans"
                        style={{ backgroundColor: "rgba(255,130,1,0.08)", color: "#ff8201" }}
                      >
                        <MapPin size={9} />
                        {park}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-base mb-3 leading-snug flex-1">
                    {pkg.title}
                  </h3>
                  <ul className="space-y-1.5 mb-4">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-500 font-sans">
                        <Star size={10} fill="#ff8201" color="#ff8201" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="flex items-center justify-between pt-3 border-t border-gray-100"
                  >
                    <span className="text-xs font-heading font-semibold text-gray-400">View Full Itinerary</span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1"
                      style={{ backgroundColor: "rgba(255,130,1,0.1)" }}
                    >
                      <ChevronRight size={14} style={{ color: "#ff8201" }} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOUTHERN CIRCUIT HIGHLIGHTS ─── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(85,51,50,0.12)" }}
                >
                  <Waves size={16} style={{ color: "#553332" }} />
                </span>
                <p className="text-sm font-bold uppercase tracking-widest font-heading" style={{ color: "#553332" }}>
                  Southern Circuit
                </p>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900">
                Wild, Remote &amp; Untouched Tanzania
              </h2>
              <p className="text-gray-500 font-sans mt-3 max-w-xl">
                Boat safaris on the Rufiji River, walking safaris, and fewer crowds — Africa at its most authentic.
              </p>
            </div>
            <Link
              href="/safaris/southern-circuit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-200 hover:shadow-md flex-shrink-0 text-white"
              style={{ backgroundColor: "#553332" }}
            >
              All 14 Packages
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* 6 cards — 3 cols */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {southernHighlights.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/safaris/southern-circuit/${pkg.id}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] block shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-108"
                  style={{ transition: "transform 0.6s ease" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span
                  className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full font-heading"
                  style={{ backgroundColor: pkg.tagColor }}
                >
                  {pkg.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {pkg.parks.map((park) => (
                      <span key={park} className="text-white/60 text-xs font-heading">
                        {park}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm leading-snug mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-white/55 text-xs font-sans">{pkg.subtitle}</p>
                  <div
                    className="mt-3 inline-flex items-center gap-1 text-xs font-bold font-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "#ff8201" }}
                  >
                    View Details <ChevronRight size={11} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KILIMANJARO HIGHLIGHTS ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(100,100,120,0.1)" }}
                >
                  <Mountain size={16} className="text-gray-600" />
                </span>
                <p className="text-sm font-bold uppercase tracking-widest font-heading text-gray-500">
                  Kilimanjaro
                </p>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900">
                Climb Africa&apos;s Roof — 5,895 m
              </h2>
              <p className="text-gray-500 font-sans mt-3 max-w-xl">
                Summit Uhuru Peak on three of our most popular routes — from scenic and demanding to beginner-friendly.
              </p>
            </div>
            <Link
              href="/kilimanjaro"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-sm border-2 transition-all duration-200 hover:shadow-md flex-shrink-0"
              style={{ borderColor: "#553332", color: "#553332" }}
            >
              All 6 Routes
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* 3 route cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {kiliHighlights.map((route) => (
              <Link
                key={route.id}
                href="/kilimanjaro"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={route.image}
                    alt={route.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {route.badge && (
                    <span
                      className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full font-heading"
                      style={{ backgroundColor: "#ff8201" }}
                    >
                      {route.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-heading flex items-center gap-1">
                      <Moon size={10} />
                      {route.duration}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-sans text-gray-400">{route.nickname}</p>
                    <span
                      className="text-xs font-bold font-heading px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: route.difficulty === "Moderate"
                          ? "rgba(34,197,94,0.12)"
                          : "rgba(249,115,22,0.12)",
                        color: route.difficulty === "Moderate" ? "#16a34a" : "#ea580c",
                      }}
                    >
                      {route.difficulty}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-base mb-3">
                    {route.name}
                  </h3>
                  <ul className="space-y-1.5 mb-4">
                    {route.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-500 font-sans">
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#ff8201" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs font-sans text-gray-400">
                      Success rate: <strong className="text-gray-700">{route.successRate}</strong>
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1"
                      style={{ backgroundColor: "rgba(255,130,1,0.1)" }}
                    >
                      <ChevronRight size={14} style={{ color: "#ff8201" }} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm font-bold uppercase tracking-widest font-heading mb-3"
              style={{ color: "#ff8201" }}
            >
              Why Choose Us
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900">
              Why Travel With Ikamba?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(255,130,1,0.1)" }}
                >
                  <item.icon size={22} style={{ color: "#ff8201" }} />
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WILDLIFE GALLERY STRIP ─── */}
      <section className="py-6 bg-white overflow-hidden">
        <div className="flex gap-4 w-max animate-[scroll_40s_linear_infinite]">
          {[
            "/african-leopard-sitting-tree-looking-around-jungle.jpg",
            "/beautiful-african-elephant.jpg",
            "/beautiful-shot-huge-rhinoceros-with-blurred-background.jpg",
            "/Big-Five-safaris-Tanzania.webp",
            "/colorful-balloons-soar-tranquil-african-landscape-generated-by-ai.jpg",
            "/packages images/katavi.jpg",
            "/packages images/arusha.jpg",
            "/packages images/mikumi.jpg",
            "/african-leopard-sitting-tree-looking-around-jungle.jpg",
            "/beautiful-african-elephant.jpg",
            "/beautiful-shot-huge-rhinoceros-with-blurred-background.jpg",
            "/Big-Five-safaris-Tanzania.webp",
          ].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 relative w-56 h-36 rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt="Tanzania wildlife"
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#553332" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm font-bold uppercase tracking-widest font-heading mb-3"
              style={{ color: "#ff8201" }}
            >
              Testimonials
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white">
              What Our Travelers Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <Quote size={24} style={{ color: "#ff8201" }} />
                <p className="text-white/80 text-sm leading-relaxed font-sans flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs font-sans">{t.country}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="#ff8201" color="#ff8201" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RECOMMENDED BY ─── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest font-heading text-gray-400 mb-10">
            Trusted &amp; Recommended By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {recommendedBy.map((logo) => (
              <div key={logo.alt} className="relative h-10 w-28 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden"
        style={{ backgroundColor: "#553332" }}
      >
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: "#ff8201" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10"
          style={{ backgroundColor: "#ff8201" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <p
            className="text-sm font-bold uppercase tracking-widest font-heading mb-4"
            style={{ color: "#ff8201" }}
          >
            Start Your Journey
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-5xl leading-tight mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-white/70 text-lg mb-10 font-sans">
            Let us help you plan your dream safari, mountain trek, or cultural
            journey in Tanzania.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full text-white font-bold text-base font-heading transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl shadow-lg"
              style={{ backgroundColor: "#ff8201" }}
            >
              Plan My Trip
            </Link>
            <a
              href="https://wa.me/255694690780"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-white font-bold text-base font-heading transition-all duration-200 hover:-translate-y-1 border-2"
              style={{ borderColor: "rgba(255,255,255,0.4)" }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
