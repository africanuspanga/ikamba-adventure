import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eye, Target, Heart, Award, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ikamba Adventure — a passionate Tanzania-based tour company dedicated to creating exceptional safari, Kilimanjaro, and cultural travel experiences.",
};

const values = [
  {
    icon: Heart,
    title: "Passion for Tanzania",
    description:
      "We are deeply in love with Tanzania's landscapes, wildlife, and culture. That passion shines through in every trip we design.",
  },
  {
    icon: Award,
    title: "Excellence & Quality",
    description:
      "From hand-picked accommodations to expert guides, every element of your journey is chosen for quality and authenticity.",
  },
  {
    icon: Target,
    title: "Client-First Approach",
    description:
      "Your satisfaction is our ultimate goal. We listen, adapt, and go above and beyond to exceed every expectation.",
  },
  {
    icon: Eye,
    title: "Responsible Tourism",
    description:
      "We support local communities, conservation efforts, and sustainable practices that protect Tanzania's natural heritage.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/beautiful-african-elephant.jpg"
          alt="African elephant in Tanzania"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <p
            className="text-sm font-bold uppercase tracking-widest font-heading mb-4"
            style={{ color: "#ff8201" }}
          >
            Our Story
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-shadow-lg">
            About Ikamba Adventure
          </h1>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-widest font-heading mb-4"
              style={{ color: "#ff8201" }}
            >
              Who We Are
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-6 leading-tight">
              Born from a Love of Tanzania&apos;s Wild Spaces
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed font-sans">
              <p>
                Ikamba Adventure is a professional tour company based in
                Tanzania, dedicated to creating exceptional travel experiences
                across the country. We specialize in wildlife safaris, mountain
                climbing, Zanzibar holidays, cultural tours, and travel
                logistics including transfers and car rentals.
              </p>
              <p>
                Founded by passionate Tanzanians with deep roots in the country&apos;s
                tourism industry, we combine insider knowledge with genuine
                hospitality to deliver journeys that go far beyond the ordinary.
                Whether you dream of witnessing the Great Migration in the
                Serengeti, standing on the roof of Africa at Uhuru Peak, or
                exploring the vibrant culture of local communities, we make it
                happen.
              </p>
              <p>
                We operate from offices in Dar es Salaam and Arusha — the twin
                gateways to Tanzania&apos;s greatest adventures — giving us the
                reach and local connections to serve travelers across the country.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full text-white font-bold text-sm font-heading transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: "#ff8201" }}
            >
              Start Planning Your Trip
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                <Image
                  src="/kilimanjaro-porters-sunrise.jpg"
                  alt="Kilimanjaro porters at sunrise"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                <Image
                  src="/packages images/ngorongoro.jpg"
                  alt="Ngorongoro Crater"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                <Image
                  src="/packages images/serengeti-2.jpg"
                  alt="Serengeti plains"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                <Image
                  src="/kilimanjaro-arms-open.jpg"
                  alt="Kilimanjaro summit celebration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─── */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm font-bold uppercase tracking-widest font-heading mb-3"
              style={{ color: "#ff8201" }}
            >
              Our Purpose
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900">
              What Drives Us Every Day
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{ backgroundColor: "#553332" }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-8 translate-x-8"
                style={{ backgroundColor: "#ff8201" }}
              />
              <Eye size={32} className="mb-5" style={{ color: "#ff8201" }} />
              <h3 className="font-heading font-black text-2xl mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed font-sans">
                To become a leading adventure and safari company in Tanzania
                recognized for exceptional experiences that inspire a deep love
                for Africa&apos;s wild places and cultures.
              </p>
            </div>
            <div
              className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{ backgroundColor: "#ff8201" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 -translate-y-8 translate-x-8 bg-white" />
              <Target size={32} className="mb-5 text-white" />
              <h3 className="font-heading font-black text-2xl mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed font-sans">
                To deliver safe, high-quality, and affordable travel services
                while promoting Tanzania&apos;s natural beauty and culture — creating
                memories that last a lifetime for every traveler we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm font-bold uppercase tracking-widest font-heading mb-3"
              style={{ color: "#ff8201" }}
            >
              Our Values
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900">
              The Principles That Guide Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "rgba(255,130,1,0.1)" }}
                >
                  <v.icon size={26} style={{ color: "#ff8201" }} />
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FULL WIDTH IMAGE ─── */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <Image
          src="/Big-Five-safaris-Tanzania.webp"
          alt="Big Five Tanzania safari"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h2 className="font-heading font-black text-3xl sm:text-5xl max-w-xl leading-tight text-shadow">
              Tanzania is waiting for you.
            </h2>
            <Link
              href="/safaris"
              className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 rounded-full text-white font-bold text-sm font-heading transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#ff8201" }}
            >
              Browse Safaris
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
