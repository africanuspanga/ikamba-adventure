import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Ikamba Adventure Terms of Service — the terms and conditions governing use of our website and booking of our safari and travel services.",
};

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "#fdf8f3" }} className="min-h-screen">
      {/* Header */}
      <div style={{ backgroundColor: "#553332" }} className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-white/50 text-sm font-heading mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Terms of Service</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-white">Terms of Service</h1>
          <p className="text-white/60 font-sans mt-3 text-sm">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 space-y-10 font-sans text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">1. Acceptance of Terms</h2>
            <p>By accessing our website at ikambaadventure.co.tz or by booking any service through Ikamba Adventure, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">2. Services</h2>
            <p>Ikamba Adventure provides tour and travel services in Tanzania, including but not limited to wildlife safaris, Mount Kilimanjaro climbs, cultural tours, car rental, and airport transfers. All services are subject to availability and the terms outlined herein.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">3. Booking & Payment</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>A booking is confirmed upon receipt of a signed booking form and the required deposit (typically 30% of the total tour cost).</li>
              <li>The balance is due no later than 30 days before the tour departure date.</li>
              <li>For bookings made within 30 days of departure, full payment is required at the time of booking.</li>
              <li>We accept payment via bank transfer, M-Pesa, Airtel Money, Tigo Pesa, Visa, Mastercard, PayPal, Pesapal, and UnionPay.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">4. Cancellation Policy</h2>
            <p className="mb-3">Cancellations must be notified in writing to <a href="mailto:info@ikambaadventure.co.tz" style={{ color: "#ff8201" }}>info@ikambaadventure.co.tz</a>. The following cancellation fees apply:</p>
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#fdf8f3" }}>
                    <th className="text-left px-5 py-3 font-heading font-bold text-gray-700">Notice Period</th>
                    <th className="text-left px-5 py-3 font-heading font-bold text-gray-700">Cancellation Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["More than 60 days", "Deposit only (non-refundable)"],
                    ["30–60 days", "50% of total tour cost"],
                    ["15–29 days", "75% of total tour cost"],
                    ["Less than 15 days", "100% of total tour cost"],
                  ].map(([period, fee]) => (
                    <tr key={period}>
                      <td className="px-5 py-3 text-gray-600">{period}</td>
                      <td className="px-5 py-3 text-gray-600">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-500 text-xs">Note: Deposits are non-refundable in all cases. We strongly recommend purchasing comprehensive travel insurance.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">5. Changes to Bookings</h2>
            <p>Requests to change tour dates, itinerary, or number of participants must be made in writing as early as possible. Changes are subject to availability and may incur additional costs. Ikamba Adventure reserves the right to modify itineraries due to weather, safety concerns, park regulations, or circumstances beyond our control.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">6. Inclusions & Exclusions</h2>
            <p className="mb-3">Each package clearly states what is included and excluded. Unless otherwise specified, the following are <strong className="text-gray-900">not included</strong> in any package:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 ml-2">
              <li>International and domestic airfare</li>
              <li>Tanzania visa fees</li>
              <li>Travel and health insurance</li>
              <li>Personal expenses, tips, and gratuities</li>
              <li>Alcoholic and non-alcoholic beverages (unless stated)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">7. Travel Insurance</h2>
            <p>Ikamba Adventure strongly recommends that all clients purchase comprehensive travel insurance before departure, covering trip cancellation, medical emergencies, evacuation, and personal liability. This is particularly important for Kilimanjaro climbers.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">8. Health & Fitness</h2>
            <p>Clients are responsible for ensuring they are in good health and physically fit for their chosen activity. Ikamba Adventure reserves the right to refuse participation to any client deemed unfit or whose health poses a risk to themselves or the group. For Kilimanjaro climbs, clients must disclose any pre-existing medical conditions at the time of booking.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">9. Limitation of Liability</h2>
            <p>Ikamba Adventure acts as an agent for accommodation providers, transport companies, and park authorities. While we take every care in selecting our service partners, we cannot be held liable for injury, loss, damage, delay, or inconvenience caused by circumstances beyond our reasonable control, including but not limited to acts of God, war, strikes, government restrictions, or wildlife encounters.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">10. Governing Law</h2>
            <p>These Terms of Service are governed by the laws of the United Republic of Tanzania. Any disputes arising from these terms or from services provided by Ikamba Adventure shall be subject to the exclusive jurisdiction of the courts of Tanzania.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-4">11. Contact</h2>
            <p className="mb-3">For any questions regarding these terms, please contact us:</p>
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
