"use client"

import Link from "next/link"
import { CheckCircle2, ArrowRight, Home, Mail, Package } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const source = searchParams.get("source")

  const title = source === "quote" ? "Quote Request Received" : "Message Received"
  const description =
    source === "quote"
      ? "Thanks for requesting a quote. Our team will review your requirements and get back to you shortly."
      : "Thanks for reaching out. We’ve received your message and will respond as soon as possible."

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a0508] via-[#4a1018] to-black text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute -top-32 -left-56 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#c5a059] via-[#6e0b14] to-transparent opacity-40 animate-blob" />
        <div className="pointer-events-none absolute -bottom-40 -right-52 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#c5a059] via-[#6e0b14] to-transparent opacity-30 animate-blob animation-delay-2000" />

        <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-16">
          <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#6e0b14]/20 text-[#c5a059] shadow-lg">
              <CheckCircle2 className="h-11 w-11" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-slate-200/80">Shreem Exports</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-5 text-base leading-relaxed text-slate-200/90 md:text-lg">{description}</p>

            <div className="mt-8 grid items-stretch gap-4 text-left sm:grid-cols-2">
              <div className="h-full rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6e0b14]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-200/70">Response time</p>
                    <p className="font-semibold text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="h-full rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c5a059] text-[#2a0508]">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-200/70">Next step</p>
                    <p className="font-semibold text-white">Reviewing your details</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6e0b14] px-6 py-3 font-semibold text-white transition hover:bg-[#7f0d1b]"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -10px) scale(1.08); }
          66% { transform: translate(-10px, 15px) scale(0.98); }
        }

        .animate-blob {
          animation: blob 12s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}