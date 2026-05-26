import type { Metadata } from "next"
import { ShieldCheck, Mail, Lock, Eye } from "lucide-react"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Shreem Exports Private Limited.",
}

const lastUpdated = "May 26, 2026"

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBreadcrumb />
      <div className="min-h-screen bg-white pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border border-[#6e0b14]/10 bg-gradient-to-b from-[#fffaf3] to-white p-6 shadow-sm md:p-10">
            <div className="mb-8 text-center md:mb-10">
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#6e0b14]/10 text-[#6e0b14]">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold text-[#6e0b14] md:text-5xl">Privacy Policy</h1>
              <div className="mx-auto mt-5 h-1 w-20 bg-[#c5a059]" />
              <p className="mt-4 text-sm text-slate-500">Last updated: {lastUpdated}</p>
            </div>

            <div className="space-y-7 text-slate-700">
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">1. Introduction</h2>
                <p>
                  Shreem Exports Private Limited ("Shreem Exports", "we", "our", "us") respects your privacy and is
                  committed to protecting your personal information. This Privacy Policy explains how we collect, use,
                  disclose, and protect information when you visit our website or contact us through our forms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="flex items-center gap-2 text-2xl font-semibold text-[#6e0b14]">
                  <Eye className="h-5 w-5 text-[#c5a059]" />
                  2. Information We Collect
                </h2>
                <p>We may collect the following information:</p>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Contact details such as name, email address, phone number, and company name.</li>
                  <li>Business inquiry details such as product category, quantity, destination country, and notes.</li>
                  <li>Technical data such as browser type, device information, and basic usage analytics.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">3. How We Use Your Information</h2>
                <p>We use collected information to:</p>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Respond to your inquiries and provide quotations.</li>
                  <li>Process and manage business communication related to exports and services.</li>
                  <li>Improve website performance, content relevance, and user experience.</li>
                  <li>Comply with legal, regulatory, and operational requirements.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="flex items-center gap-2 text-2xl font-semibold text-[#6e0b14]">
                  <Lock className="h-5 w-5 text-[#c5a059]" />
                  4. Data Sharing and Security
                </h2>
                <p>
                  We do not sell your personal information. We may share information only with trusted service providers
                  and partners who help us operate our business, and only to the extent necessary.
                </p>
                <p>
                  We implement reasonable technical and organizational safeguards to protect your data. However, no
                  method of internet transmission is fully secure, and absolute security cannot be guaranteed.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">5. Data Retention</h2>
                <p>
                  We retain information only as long as needed for inquiry handling, business records, legal compliance,
                  and legitimate operational purposes.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">6. Your Rights</h2>
                <p>
                  Depending on applicable law, you may request access, correction, or deletion of your personal data, or
                  object to certain processing. To make a request, contact us using the details below.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">7. Third-Party Services</h2>
                <p>
                  Our website may include links or integrations provided by third parties. We are not responsible for the
                  privacy practices of third-party websites or services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#6e0b14]">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Updated versions will be posted on this page with
                  a revised "Last updated" date.
                </p>
              </section>

              <section className="rounded-2xl border border-[#c5a059]/20 bg-[#fff8ec] p-5">
                <h2 className="mb-2 flex items-center gap-2 text-2xl font-semibold text-[#6e0b14]">
                  <Mail className="h-5 w-5 text-[#c5a059]" />
                  9. Contact Us
                </h2>
                <p>
                  For privacy-related questions, please contact us at:
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
