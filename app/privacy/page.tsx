import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Ikamba Adventure Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }} className="min-h-screen">
      {/* Header */}
      <div style={{ backgroundColor: "#553332" }} className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-white/50 text-sm font-heading mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Privacy Policy</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-white">Privacy Policy</h1>
          <p className="text-white/60 font-sans mt-3 text-sm">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 space-y-10 font-sans text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">1. Introduction</h2>
            <p>Ikamba Adventure (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website at ikambaadventure.co.tz or contact us to book a safari, Kilimanjaro climb, or any other travel service.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">2. Information We Collect</h2>
            <p className="mb-3">We collect information that you voluntarily provide to us when you:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 ml-2">
              <li>Submit an enquiry or booking request via our contact form</li>
              <li>Contact us by email, phone, or WhatsApp</li>
              <li>Request a custom itinerary or quote</li>
            </ul>
            <p className="mt-4">This information may include your name, email address, phone number, travel preferences, travel dates, group size, and any other details you choose to share.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 ml-2">
              <li>Respond to your enquiries and provide requested services</li>
              <li>Prepare custom itineraries and quotes</li>
              <li>Process bookings and arrange travel logistics</li>
              <li>Communicate with you about your trip before, during, and after travel</li>
              <li>Improve our services and website experience</li>
            </ul>
            <p className="mt-4">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required to fulfil your travel booking (e.g., sharing with national parks, accommodation providers, or airlines).</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">4. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to provide the services requested and to comply with our legal obligations. Booking records are typically retained for seven (7) years for accounting and legal purposes.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">5. Cookies</h2>
            <p>Our website does not currently use tracking cookies or analytics cookies. We may use essential cookies to ensure the website functions correctly. No personal data is collected through cookies at this time.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">6. Third-Party Links</h2>
            <p>Our website contains links to third-party websites (such as WhatsApp, TripAdvisor, and booking platforms). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 ml-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent to any processing at any time</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, please contact us at <a href="mailto:info@ikambaadventure.co.tz" className="underline hover:text-orange-500 transition-colors" style={{ color: "#ff8201" }}>info@ikambaadventure.co.tz</a>.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">8. Security</h2>
            <p>We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">10. Contact Us</h2>
            <p className="mb-3">If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
            <div className="bg-gray-50 rounded-xl p-5 space-y-2">
              <p><strong className="text-gray-900">Ikamba Adventure</strong></p>
              <p>Email: <a href="mailto:info@ikambaadventure.co.tz" style={{ color: "#ff8201" }}>info@ikambaadventure.co.tz</a></p>
              <p>Phone: +255 694 690 780</p>
              <p>Office 1: Kinyerezi, Dar es Salaam, Tanzania</p>
              <p>Office 2: Makao Mapya, Arusha, Tanzania</p>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-heading font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#ff8201" }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
