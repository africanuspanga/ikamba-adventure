"use client";

import { useEffect } from "react";
import { X, Check, XCircle, MapPin, Clock, Utensils, Hotel } from "lucide-react";
import type { SafariPackage } from "@/lib/northern-circuit";

interface PackageModalProps {
  pkg: SafariPackage | null;
  onClose: () => void;
}

export default function PackageModal({ pkg, onClose }: PackageModalProps) {
  useEffect(() => {
    if (!pkg) return;
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [pkg, onClose]);

  if (!pkg) return null;

  const waMessage = encodeURIComponent(
    `Hi Ikamba Adventure! I'm interested in the "${pkg.title}" (${pkg.subtitle}) safari package. Please send me more details and pricing.`
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-16 sm:pt-8"
      role="dialog"
      aria-modal="true"
      aria-label={pkg.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div
          className="p-6 text-white relative"
          style={{ backgroundColor: "#553332" }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
          <div className="flex items-start gap-3">
            <div>
              <p className="text-white/60 text-xs font-heading uppercase tracking-widest mb-1">
                {pkg.subtitle}
              </p>
              <h2 className="font-heading font-bold text-xl leading-tight">{pkg.title}</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {pkg.parks.map((park) => (
                  <span
                    key={park}
                    className="inline-flex items-center gap-1 text-xs bg-white/20 px-2.5 py-1 rounded-full font-heading"
                  >
                    <MapPin size={10} />
                    {park}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-7">
          {/* Itinerary */}
          <section>
            <h3 className="font-heading font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full inline-block" style={{ backgroundColor: "#ff8201" }} />
              Day-by-Day Itinerary
            </h3>
            <div className="space-y-4">
              {pkg.itinerary.map((day) => (
                <div key={day.day} className="flex gap-4">
                  <div className="flex-shrink-0 pt-0.5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold font-heading"
                      style={{ backgroundColor: "#ff8201" }}
                    >
                      {day.day}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 text-sm">{day.title}</h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{day.description}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {day.accommodation && (
                        <span className="flex items-center gap-1 text-xs text-gray-500 font-sans">
                          <Hotel size={12} className="text-orange-400" />
                          {day.accommodation}
                        </span>
                      )}
                      {day.meals && (
                        <span className="flex items-center gap-1 text-xs text-gray-500 font-sans">
                          <Utensils size={12} className="text-orange-400" />
                          {day.meals}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions / Exclusions */}
          <div className="grid sm:grid-cols-2 gap-5">
            <section>
              <h3 className="font-heading font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full inline-block" style={{ backgroundColor: "#22c55e" }} />
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
            </section>
            <section>
              <h3 className="font-heading font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
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
            </section>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-5 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/255694690780?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm font-heading transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: "#25D366" }}
          >
            <Clock size={15} />
            Inquire on WhatsApp
          </a>
          <a
            href="/contact"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm font-heading transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: "#ff8201" }}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
