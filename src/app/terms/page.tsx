import type { Metadata } from "next"
import { FileText, Mail, Scale, AlertTriangle } from "lucide-react"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for using Shreem Exports website and services.",
}

const lastUpdated = "May 26, 2026"

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageBreadcrumb />
      <div className="min-h-screen bg-white pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border border-[#6e0b14]/10 bg-gradient-to-b from-[#fffaf3] to-white p-6 shadow-sm md:p-10">
            <div className="mb-8 text-center md:mb-10">
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#6e0b14]/10 text-[#6e0b14]">
                <FileText className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold text-[#6e0b14] md:text-5xl">Terms and Conditions</h1>
              <div className="mx-auto mt-5 h-1 w-24 bg-[#c5a059]" />
              <p className="mt-4 text-sm text-slate-500">Last updated: {lastUpdated}</p>
            </div>

            <div className="space-y-7 text-slate-700">
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not
                  agree, please do not use this website.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">2. About Our Services</h2>
                <p>
                  Shreem Exports Private Limited provides information about products and export services. Content on this
                  website is for general business information and inquiry purposes only.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">3. Quotations, Orders, and Availability</h2>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>All quotations are subject to product availability and confirmation.</li>
                  <li>Prices, lead times, and specifications may vary based on market and logistics conditions.</li>
                  <li>Final commercial terms are governed by separate written agreements or purchase contracts.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">4. User Responsibilities</h2>
                <p>You agree not to misuse this website, including attempts to:</p>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Interfere with site operations, security, or availability.</li>
                  <li>Submit false, misleading, or unlawful inquiries.</li>
                  <li>Use content in violation of applicable laws.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="flex items-center gap-2 text-2xl font-semibold text-[#6e0b14]">
                  <Scale className="h-5 w-5 text-[#c5a059]" />
                  5. Intellectual Property
                </h2>
                <p>
                  All website content, including logos, text, visuals, and design elements, is owned by or licensed to
                  Shreem Exports unless otherwise stated. Unauthorized copying, distribution, or commercial use is not
                  permitted.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="flex items-center gap-2 text-2xl font-semibold text-[#6e0b14]">
                  <AlertTriangle className="h-5 w-5 text-[#c5a059]" />
                  6. Disclaimer and Limitation of Liability
                </h2>
                <p>
                  Website information is provided "as is" without warranties of any kind. To the maximum extent allowed
                  by law, Shreem Exports is not liable for indirect, incidental, or consequential damages resulting from
                  use of this website.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">7. Third-Party Links</h2>
                <p>
                  This website may include links to third-party websites. We are not responsible for third-party content,
                  policies, or practices.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">8. Governing Law</h2>
                <p>
                  These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the
                  jurisdiction of courts in Hyderabad, Telangana.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">9. Updates to Terms</h2>
                <p>
                  We may revise these Terms and Conditions at any time. Continued use of the website after updates means
                  you accept the revised terms.
                </p>
              </section>

              <section className="rounded-2xl border border-[#c5a059]/20 bg-[#fff8ec] p-5">
                <h2 className="mb-2 flex items-center gap-2 text-2xl font-semibold text-[#6e0b14]">
                  <Mail className="h-5 w-5 text-[#c5a059]" />
                  10. Contact Us
                </h2>
                <p>
                  For questions regarding these Terms and Conditions, please contact us at:
                </p>
                <p className="mt-2 font-medium text-[#6e0b14]">business@shreemexports.online</p>
                <p className="text-slate-600">Shreem Exports Private Limited, Hyderabad, Telangana, India</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
