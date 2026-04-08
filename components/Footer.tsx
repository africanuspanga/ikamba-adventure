import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const paymentLogos = [
  { src: "/payment logos copy/visa-logo.png", alt: "Visa" },
  { src: "/payment logos copy/Mastercard-logo.svg", alt: "Mastercard" },
  { src: "/payment logos copy/PayPal.webp", alt: "PayPal" },
  { src: "/payment logos copy/M-pesa-logo-removebg-preview copy.png", alt: "M-Pesa" },
  { src: "/payment logos copy/airtel-money-logo copy.png", alt: "Airtel Money" },
  { src: "/payment logos copy/pesapal-logo.png", alt: "Pesapal" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0e0604" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/Ikamba Adventure logo.png"
              alt="Ikamba Adventure"
              width={160}
              height={55}
              className="h-12 w-auto object-contain brightness-0 invert mb-5"
            />
            <p className="text-white/70 text-sm leading-relaxed font-sans">
              Tanzania-based tour and travel company specializing in safaris, mountain climbing, and authentic cultural adventures.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/share/1J4hRTF9H6/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-100"
                style={{ backgroundColor: "rgba(255,130,1,0.2)" }}
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/ikamba_adventure?igsh=MXNsMmtsOHdjcXhiZQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-100"
                style={{ backgroundColor: "rgba(255,130,1,0.2)" }}
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-100"
                style={{ backgroundColor: "rgba(255,130,1,0.2)" }}
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Safaris", href: "/safaris" },
                { label: "Kilimanjaro", href: "/kilimanjaro" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-orange-400 text-sm transition-colors duration-150 font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Safari Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Safaris
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Northern Circuit", href: "/safaris/northern-circuit" },
                { label: "Southern Circuit", href: "/safaris/southern-circuit" },
                { label: "Kilimanjaro Climbing", href: "/kilimanjaro" },
                { label: "Book a Safari", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-orange-400 text-sm transition-colors duration-150 font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+255694690780" className="text-white/70 hover:text-white text-sm transition-colors block font-sans">
                    +255 694 690 780
                  </a>
                  <a href="tel:+255620564044" className="text-white/70 hover:text-white text-sm transition-colors block font-sans">
                    +255 620 564 044
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:info@ikambaadventure.co.tz"
                  className="text-white/70 hover:text-white text-sm transition-colors font-sans"
                >
                  info@ikambaadventure.co.tz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-white/70 text-sm font-sans">
                  <p className="font-semibold text-white/90">Office 1 — Dar es Salaam</p>
                  <p>Kinyerezi, Dar es Salaam, Tanzania</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-white/70 text-sm font-sans">
                  <p className="font-semibold text-white/90">Office 2 — Arusha</p>
                  <p>Makao Mapya, Arusha, Tanzania</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="py-8 border-b border-white/10">
          <p className="text-white/40 text-xs font-heading uppercase tracking-widest mb-5">
            Accepted Payments
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            {paymentLogos.map((logo) => (
              <div
                key={logo.alt}
                className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-9"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={60}
                  height={24}
                  className="h-5 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-sans text-center sm:text-left">
            <a
              href="https://www.driftmark.co.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 select-none pointer-events-auto"
              aria-hidden="true"
              tabIndex={-1}
            >
              © 2026 Ikamba Adventure. All rights reserved.
            </a>
            <span aria-hidden="false">© 2026 Ikamba Adventure. All rights reserved.</span>
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors font-sans">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors font-sans">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
