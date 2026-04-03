"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const travelInterests = [
  "Northern Circuit Safari",
  "Southern Circuit Safari",
  "Kilimanjaro Climbing",
  "Zanzibar Holiday",
  "Cultural Tour",
  "Car Rental / Transfer",
  "Custom / Combination",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `Hi Ikamba Adventure!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nTravel Interest: ${form.interest}\n\nMessage:\n${form.message}`
    );
    setSubmitted(true);
    window.open(`https://wa.me/255694690780?text=${waText}`, "_blank");
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <Image
          src="/colorful-balloons-soar-tranquil-african-landscape-generated-by-ai.jpg"
          alt="Tanzania landscape"
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
            Get in Touch
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-shadow-lg">
            Contact Us
          </h1>
          <p className="mt-4 text-white/80 text-lg font-sans">
            We&apos;re here to help you plan the perfect Tanzania adventure.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "#fdf8f3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p
                className="text-sm font-bold uppercase tracking-widest font-heading mb-3"
                style={{ color: "#ff8201" }}
              >
                Our Offices
              </p>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-gray-900 mb-5">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-gray-500 font-sans text-sm leading-relaxed">
                Whether you have questions about our packages, want to book a
                safari, or need a fully custom itinerary — our team is ready to
                help. Reach out anytime.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <a
                href="tel:+255694690780"
                className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,130,1,0.1)" }}
                >
                  <Phone size={20} style={{ color: "#ff8201" }} />
                </div>
                <div>
                  <div className="font-heading font-bold text-gray-900 text-sm group-hover:text-orange-500 transition-colors">
                    Call Us
                  </div>
                  <div className="text-gray-500 text-sm font-sans">+255 694 690 780</div>
                  <div className="text-gray-500 text-sm font-sans">+255 620 564 044</div>
                </div>
              </a>

              <a
                href="mailto:info@ikambaadventure.co.tz"
                className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,130,1,0.1)" }}
                >
                  <Mail size={20} style={{ color: "#ff8201" }} />
                </div>
                <div>
                  <div className="font-heading font-bold text-gray-900 text-sm group-hover:text-orange-500 transition-colors">
                    Email Us
                  </div>
                  <div className="text-gray-500 text-sm font-sans">info@ikambaadventure.co.tz</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,130,1,0.1)" }}
                >
                  <MapPin size={20} style={{ color: "#ff8201" }} />
                </div>
                <div>
                  <div className="font-heading font-bold text-gray-900 text-sm">Office 1 — Dar es Salaam</div>
                  <div className="text-gray-500 text-sm font-sans mt-0.5">Kinyerezi, Dar es Salaam, Tanzania</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,130,1,0.1)" }}
                >
                  <MapPin size={20} style={{ color: "#ff8201" }} />
                </div>
                <div>
                  <div className="font-heading font-bold text-gray-900 text-sm">Office 2 — Arusha</div>
                  <div className="text-gray-500 text-sm font-sans mt-0.5">Makao Mapya, Arusha, Tanzania</div>
                </div>
              </div>

              <a
                href="https://wa.me/255694690780"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg shadow-md"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle size={22} />
                <div>
                  <div className="font-heading font-bold text-sm">Chat on WhatsApp</div>
                  <div className="text-white/80 text-xs font-sans">Usually replies within 1 hour</div>
                </div>
              </a>
            </div>

            {/* Recommended logos */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest font-heading text-gray-400 mb-4">
                Trusted By Travelers From
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                {[
                  "/recommeded by section logos copy/TripAdvisor_Logo.svg.png",
                  "/recommeded by section logos copy/google-reviews-logo.png",
                  "/recommeded by section logos copy/Safari-Booking-Logo.png",
                ].map((src, i) => (
                  <div key={i} className="relative h-7 w-24 opacity-80 hover:opacity-100 transition-opacity">
                    <Image src={src} alt="Review platform" fill className="object-contain" sizes="96px" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <CheckCircle size={56} style={{ color: "#25D366" }} />
                  <h3 className="font-heading font-black text-2xl text-gray-900">
                    Redirecting to WhatsApp!
                  </h3>
                  <p className="text-gray-500 font-sans max-w-sm">
                    Your message has been prepared. Complete it in WhatsApp to reach our team directly. We typically respond within the hour.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-heading font-bold underline"
                    style={{ color: "#ff8201" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-heading font-black text-2xl text-gray-900 mb-2">
                    Plan Your Adventure
                  </h3>
                  <p className="text-gray-500 text-sm font-sans mb-7">
                    Fill in your details and we&apos;ll get back to you within 24 hours with a tailored proposal.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold font-heading text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-sm font-sans text-gray-800 placeholder-gray-400 bg-gray-50"
                          style={{ "--tw-ring-color": "#ff8201" } as React.CSSProperties}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold font-heading text-gray-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-sm font-sans text-gray-800 placeholder-gray-400 bg-gray-50"
                          style={{ "--tw-ring-color": "#ff8201" } as React.CSSProperties}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold font-heading text-gray-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+255 ..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-sm font-sans text-gray-800 placeholder-gray-400 bg-gray-50"
                          style={{ "--tw-ring-color": "#ff8201" } as React.CSSProperties}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold font-heading text-gray-700 mb-1.5">
                          Travel Interest *
                        </label>
                        <select
                          name="interest"
                          required
                          value={form.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-sm font-sans text-gray-800 bg-gray-50 appearance-none"
                          style={{ "--tw-ring-color": "#ff8201" } as React.CSSProperties}
                        >
                          <option value="">Select an interest...</option>
                          {travelInterests.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold font-heading text-gray-700 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your dream trip — preferred dates, group size, budget, any special requests..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-sm font-sans text-gray-800 placeholder-gray-400 bg-gray-50 resize-none"
                        style={{ "--tw-ring-color": "#ff8201" } as React.CSSProperties}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold text-base font-heading transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl shadow-lg"
                      style={{ backgroundColor: "#ff8201" }}
                    >
                      <Send size={18} />
                      Send Message via WhatsApp
                    </button>

                    <p className="text-center text-gray-400 text-xs font-sans">
                      Your message will open in WhatsApp for instant delivery. 🔒 100% private.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAYMENT METHODS ─── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest font-heading text-gray-400 mb-7">
            We Accept All Major Payment Methods
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              { src: "/payment logos copy/visa-logo.png", alt: "Visa" },
              { src: "/payment logos copy/Mastercard-logo.svg", alt: "Mastercard" },
              { src: "/payment logos copy/PayPal.webp", alt: "PayPal" },
              { src: "/payment logos copy/M-pesa-logo-removebg-preview copy.png", alt: "M-Pesa" },
              { src: "/payment logos copy/airtel-money-logo copy.png", alt: "Airtel Money" },
              { src: "/payment logos copy/mixx-by-yass-tigo-pesa-400x300 copy.png", alt: "Tigo Pesa" },
              { src: "/payment logos copy/pesapal-logo.png", alt: "Pesapal" },
              { src: "/payment logos copy/unionpay-logo.png", alt: "UnionPay" },
            ].map((logo) => (
              <div key={logo.alt} className="bg-gray-50 rounded-xl px-4 py-3 h-12 w-24 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={72}
                  height={28}
                  className="h-6 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
