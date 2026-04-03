"use client";

import { useState } from "react";
import Image from "next/image";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/255694690780"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ filter: "drop-shadow(0 4px 16px rgba(37,211,102,0.5))" }}
    >
      {/* Tooltip */}
      <span
        className={`bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg font-heading whitespace-nowrap transition-all duration-300 ${
          hovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        Chat with us
      </span>

      {/* Icon only — no background, just the WhatsApp image with bounce + hover scale */}
      <div
        className={`transition-transform duration-300 ${hovered ? "scale-125" : "scale-100"}`}
        style={{ animation: "wa-float 3s ease-in-out infinite" }}
      >
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={54}
          height={54}
          className="block"
        />
      </div>

      <style>{`
        @keyframes wa-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>
    </a>
  );
}
