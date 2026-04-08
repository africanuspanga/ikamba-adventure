"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

type MediaType = "image" | "video";
type Category = "All" | "Safari" | "Kilimanjaro" | "Wildlife" | "Our Adventures";

interface GalleryItem {
  src: string;
  alt: string;
  type: MediaType;
  category: Category;
}

const galleryItems: GalleryItem[] = [
  // Our Adventures — real photos from Ikamba team
  { src: "/WhatsApp Image 2026-04-07 at 20.23.04.jpeg", alt: "Ikamba Adventure", type: "image", category: "Our Adventures" },
  { src: "/WhatsApp Image 2026-04-07 at 20.23.05.jpeg", alt: "Ikamba Adventure", type: "image", category: "Our Adventures" },
  { src: "/WhatsApp Image 2026-04-07 at 20.23.05 (1).jpeg", alt: "Ikamba Adventure", type: "image", category: "Our Adventures" },
  { src: "/WhatsApp Video 2026-04-07 at 20.23.04.mp4", alt: "Ikamba Adventure video", type: "video", category: "Our Adventures" },
  { src: "/WhatsApp Video 2026-04-07 at 20.23.04 (1).mp4", alt: "Ikamba Adventure video", type: "video", category: "Our Adventures" },
  { src: "/Ikamba Hero .mp4", alt: "Ikamba Adventure hero video", type: "video", category: "Our Adventures" },

  // Wildlife
  { src: "/Big-Five-safaris-Tanzania.webp", alt: "Big Five safaris Tanzania", type: "image", category: "Wildlife" },
  { src: "/beautiful-african-elephant.jpg", alt: "African elephant", type: "image", category: "Wildlife" },
  { src: "/african-leopard-sitting-tree-looking-around-jungle.jpg", alt: "African leopard in tree", type: "image", category: "Wildlife" },
  { src: "/beautiful-shot-huge-rhinoceros-with-blurred-background.jpg", alt: "Rhinoceros", type: "image", category: "Wildlife" },
  { src: "/packages images/manyara-baboons.jpg", alt: "Baboons at Lake Manyara", type: "image", category: "Wildlife" },
  { src: "/packages images/manyara-lion.jpg", alt: "Lion at Lake Manyara", type: "image", category: "Wildlife" },
  { src: "/packages images/nyerere-elephants.jpg", alt: "Elephants at Nyerere", type: "image", category: "Wildlife" },
  { src: "/tour-saadani-giraffes.jpg", alt: "Giraffes at Saadani", type: "image", category: "Wildlife" },

  // Safari
  { src: "/serengeti.jpg", alt: "Serengeti National Park", type: "image", category: "Safari" },
  { src: "/packages images/serengeti-1.jpg", alt: "Serengeti safari", type: "image", category: "Safari" },
  { src: "/packages images/serengeti-2.jpg", alt: "Serengeti migration", type: "image", category: "Safari" },
  { src: "/ngorongoro.jpg", alt: "Ngorongoro Crater", type: "image", category: "Safari" },
  { src: "/packages images/ngorongoro.jpg", alt: "Ngorongoro Crater safari", type: "image", category: "Safari" },
  { src: "/tarangire.jpg", alt: "Tarangire National Park", type: "image", category: "Safari" },
  { src: "/packages images/tarangire-1.jpg", alt: "Tarangire elephants", type: "image", category: "Safari" },
  { src: "/packages images/tarangire-2.jpg", alt: "Tarangire landscape", type: "image", category: "Safari" },
  { src: "/manyara.jpg", alt: "Lake Manyara", type: "image", category: "Safari" },
  { src: "/packages images/manyara-1.jpg", alt: "Lake Manyara National Park", type: "image", category: "Safari" },
  { src: "/packages images/manyara-2.jpg", alt: "Lake Manyara scenery", type: "image", category: "Safari" },
  { src: "/ruaha.jpg", alt: "Ruaha National Park", type: "image", category: "Safari" },
  { src: "/packages images/ruaha.jpg", alt: "Ruaha wildlife", type: "image", category: "Safari" },
  { src: "/selous.jpg", alt: "Selous Game Reserve", type: "image", category: "Safari" },
  { src: "/packages images/selous.jpg", alt: "Selous safari", type: "image", category: "Safari" },
  { src: "/packages images/katavi.jpg", alt: "Katavi National Park", type: "image", category: "Safari" },
  { src: "/packages images/mahale.jpg", alt: "Mahale Mountains", type: "image", category: "Safari" },
  { src: "/packages images/mikumi.jpg", alt: "Mikumi National Park", type: "image", category: "Safari" },
  { src: "/packages images/saadani.jpg", alt: "Saadani National Park", type: "image", category: "Safari" },
  { src: "/safari-3-days.jpg", alt: "3-day Tanzania safari", type: "image", category: "Safari" },
  { src: "/safari-4-days.jpg", alt: "4-day Tanzania safari", type: "image", category: "Safari" },
  { src: "/colorful-balloons-soar-tranquil-african-landscape-generated-by-ai.jpg", alt: "Hot air balloons over Africa", type: "image", category: "Safari" },

  // Kilimanjaro
  { src: "/kilimanjaro-uhuru-peak.jpg", alt: "Uhuru Peak — Kilimanjaro summit", type: "image", category: "Kilimanjaro" },
  { src: "/kilimanjaro-arms-open.jpg", alt: "Summit celebration on Kilimanjaro", type: "image", category: "Kilimanjaro" },
  { src: "/kilimanjaro-sunset-hiker.jpg", alt: "Hiker at Kilimanjaro sunset", type: "image", category: "Kilimanjaro" },
  { src: "/kilimanjaro-porters-sunrise.jpg", alt: "Kilimanjaro porters at sunrise", type: "image", category: "Kilimanjaro" },
  { src: "/kilimanjaro-aerial-crater.jpg", alt: "Aerial view of Kilimanjaro crater", type: "image", category: "Kilimanjaro" },
  { src: "/kilimanjaro-day-hike.jpg", alt: "Day hike on Kilimanjaro", type: "image", category: "Kilimanjaro" },
  { src: "/uhuru-peak.webp", alt: "Uhuru Peak sign", type: "image", category: "Kilimanjaro" },
  { src: "/uhuru-peak-sign.jpg", alt: "Uhuru Peak summit sign", type: "image", category: "Kilimanjaro" },
  { src: "/uhuru-peak-rongai.jpg", alt: "Uhuru Peak via Rongai route", type: "image", category: "Kilimanjaro" },
  { src: "/machame-hut-camps.jpg", alt: "Machame Hut camps", type: "image", category: "Kilimanjaro" },
  { src: "/marangu.jpg", alt: "Marangu route", type: "image", category: "Kilimanjaro" },
  { src: "/marangu-gate.jpg", alt: "Marangu gate", type: "image", category: "Kilimanjaro" },
  { src: "/marangu-route-signboard.jpg", alt: "Marangu route signboard", type: "image", category: "Kilimanjaro" },
  { src: "/lemosho.jpg", alt: "Lemosho route", type: "image", category: "Kilimanjaro" },
  { src: "/horombo-huts.jpg", alt: "Horombo huts", type: "image", category: "Kilimanjaro" },
  { src: "/shira-camp.jpg", alt: "Shira camp", type: "image", category: "Kilimanjaro" },
  { src: "/shira-1-camp.jpg", alt: "Shira 1 camp", type: "image", category: "Kilimanjaro" },
  { src: "/umbwe-route.jpg", alt: "Umbwe route", type: "image", category: "Kilimanjaro" },
  { src: "/udzungwa-waterfall.jpg", alt: "Udzungwa waterfall", type: "image", category: "Kilimanjaro" },
];

const categories: Category[] = ["All", "Our Adventures", "Safari", "Wildlife", "Kilimanjaro"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, prev, next]);

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "84px", minHeight: "280px" }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#0e0604" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/serengeti.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white px-4 py-16">
          <p
            className="text-sm font-bold uppercase tracking-widest font-heading mb-4"
            style={{ color: "#ff8201" }}
          >
            Photo &amp; Video Gallery
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-white">
            Our Tanzania Adventures
          </h1>
          <p className="mt-4 text-white/70 text-lg font-sans max-w-xl mx-auto">
            Browse wildlife, landscapes, and real moments from our safaris and Kilimanjaro expeditions.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[84px] z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold font-heading transition-all duration-200 ${
                  activeCategory === cat
                    ? "text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                style={
                  activeCategory === cat
                    ? { backgroundColor: "#ff8201" }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered.map((item, i) => (
              <button
                key={`${item.src}-${i}`}
                className="break-inside-avoid w-full group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer block"
                onClick={() => openLightbox(i)}
                aria-label={`Open ${item.alt}`}
              >
                {item.type === "video" ? (
                  <div className="relative w-full bg-gray-900" style={{ aspectRatio: "16/9" }}>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-200">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,130,1,0.9)" }}
                      >
                        <Play size={20} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 rounded-xl" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-20 font-sans">No items in this category.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-150"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-150"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Media */}
          <div
            className="relative max-w-5xl w-full mx-16 max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {activeItem.type === "video" ? (
              <video
                src={activeItem.src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
              />
            ) : (
              <div className="relative w-full max-h-[85vh]">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[85vh] w-auto h-auto mx-auto rounded-xl shadow-2xl object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            )}
            <p className="absolute bottom-[-32px] left-0 right-0 text-center text-white/60 text-sm font-sans">
              {activeItem.alt}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-150"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <span className="text-white/50 text-xs font-sans bg-black/30 px-3 py-1 rounded-full">
              {lightboxIndex + 1} / {filtered.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
