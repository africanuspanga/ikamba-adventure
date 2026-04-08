"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Safaris",
    href: "/safaris",
    children: [
      { label: "Northern Circuit", href: "/safaris/northern-circuit" },
      { label: "Southern Circuit", href: "/safaris/southern-circuit" },
    ],
  },
  { label: "Kilimanjaro", href: "/kilimanjaro" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [safariOpen, setSafariOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSafariOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
        style={{ paddingTop: "14px", paddingBottom: "14px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo — bigger */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/Ikamba Adventure logo.png"
              alt="Ikamba Adventure"
              width={180}
              height={64}
              className="w-auto object-contain"
              style={{ height: "56px" }}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setSafariOpen(!safariOpen)}
                    className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 font-heading text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${safariOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {safariOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setSafariOpen(false)}
                          className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150 font-heading"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 font-heading text-gray-800 hover:text-orange-600 hover:bg-orange-50"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 font-heading"
              style={{ backgroundColor: "#ff8201" }}
            >
              Book a Safari
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <Image
              src="/Ikamba Adventure logo.png"
              alt="Ikamba Adventure"
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <button onClick={() => setMobileOpen(false)} className="p-1 text-gray-600">
              <X size={22} />
            </button>
          </div>
          <nav className="p-5 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 font-heading mt-3">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-semibold text-sm transition-colors duration-150 font-heading ml-2"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-semibold text-sm transition-colors duration-150 font-heading"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full py-3.5 rounded-full text-white font-bold text-sm font-heading"
                style={{ backgroundColor: "#ff8201" }}
              >
                Book a Safari
              </Link>
            </div>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100">
            <p className="text-xs text-gray-400 font-heading">
              📞 +255 694 690 780
            </p>
            <p className="text-xs text-gray-400 font-heading mt-1">
              ✉ info@ikambaadventure.co.tz
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
