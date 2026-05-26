import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroBackground from "@/components/home/HeroBackground"
import GlobalReachMap from "@/components/home/GlobalReachMap"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { categories } from "@/data/products"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <HeroBackground />

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="animate-reveal-up text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white">
            Premium Indian Exports,{" "}
            <br className="hidden sm:block" />
            <span className="text-[#c5a059] italic">Delivered Worldwide</span>
          </h1>
          <p className="animate-reveal-up text-base sm:text-lg md:text-xl mb-10 text-slate-200 max-w-2xl mx-auto font-light" style={{ animationDelay: "0.15s" }}>
            Connecting global markets with the finest quality Indian products.
            From fresh produce to premium garments, we bridge the gap with excellence.
          </p>
          <div className="animate-reveal-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-[#6e0b14] hover:bg-[#8a1019] text-white min-w-[200px] py-7 text-lg border border-[#c5a059]/30">
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/5 backdrop-blur-md border-[#c5a059]/40 hover:bg-[#c5a059]/20 text-white min-w-[200px] py-7 text-lg">
              <Link href="/request-quote">Request Quote</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-0.5 h-14 rounded-full bg-gradient-to-b from-[#c5a059] to-transparent animate-bounce" />
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16 bg-gradient-to-b from-[#0c050a] to-[#1a0a0d] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#c5a059] text-sm font-semibold uppercase tracking-widest mb-2">Trusted &amp; Verified</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Certifications &amp; Affiliations</h2>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0c050a] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1a0a0d] to-transparent pointer-events-none z-10" />

          <div className="cert-track flex w-max gap-8 py-4">
            {[...Array(2)].map((_, setIdx) =>
              [
                { name: "DGFT", src: "/certifications/DGFT.png" },
                { name: "APEDA", src: "/certifications/APEDA.png" },
                { name: "MSME", src: "/certifications/MSME.png" },
                { name: "FIEO", src: "/certifications/FIEO.png" },
                { name: "FICCI", src: "/certifications/FICCI.png" },
                { name: "GCCI", src: "/certifications/GCCI.png" },
                { name: "UDYOG AADHAR", src: "/certifications/UDYOG AADHAR.png" },
                { name: "GST", src: "/certifications/GST.png" },
                { name: "FDA", src: "/certifications/FDA.png" },
                { name: "SPICE BOARD", src: "/certifications/SPICE BOARD.png" },
                { name: "HALAL", src: "/certifications/HALAL.png" },
                { name: "GMP", src: "/certifications/GMP.png" },
              ].map((cert, i) => (
                <div
                  key={`${setIdx}-${i}`}
                  className="group flex-shrink-0 w-48 flex items-center justify-center p-6"
                >
                  <div className="relative h-24 w-40 transition-transform duration-300 group-hover:scale-110">
                    <Image 
                      src={cert.src} 
                      alt={cert.name} 
                      fill 
                      className="object-contain" 
                      sizes="160px" 
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes cert-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .cert-track {
          animation: cert-scroll 30s linear infinite;
        }
        .cert-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-[#6e0b14]/10 text-[#6e0b14] text-sm font-semibold rounded-full">
                ESTABLISHED EXPORTERS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6e0b14] leading-tight">
                Quality &amp; Integrity in Every Shipment
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Shreem Exports Private Limited, based in Hyderabad, is a premier export-import company dedicated to delivering high-quality Indian goods to international markets. We specialize in sourcing the finest products directly from growers and manufacturers.
              </p>

              <div className="grid grid-cols-2 gap-8 py-4">
                <div className="space-y-1 border-l-4 border-[#c5a059] pl-4">
                  <div className="text-3xl font-bold text-[#6e0b14]">7+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Product Categories</div>
                </div>
                <div className="space-y-1 border-l-4 border-[#c5a059] pl-4">
                  <div className="text-3xl font-bold text-[#6e0b14]">Global</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Reach &amp; Network</div>
                </div>
              </div>

              <Button asChild variant="link" className="p-0 text-[#6e0b14] group h-auto">
                <Link href="/about" className="flex items-center text-lg font-bold">
                  Learn more about our journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero/make_it_something_asthtic_way_202605261733.jpeg"
                alt="Our Products"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-2 border-[#c5a059]/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#6e0b14]">Global Reach</h2>
          <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            See how our network spans continents — customize routes, track shipments, and visualize partner hubs.
          </p>
        </div>

        <div className="container mx-auto px-4">
          <GlobalReachMap />
        </div>
      </section>

      {/* Product Categories (Our Core Expertise) */}
      <section className="py-28 bg-[#fdfaf2] relative overflow-hidden">
        {/* Subtle Luxury Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#c5a059]/5 blur-3xl" />
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#6e0b14]/5 blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#c5a059]/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center mb-16 relative z-10">
          <p className="text-[#c5a059] text-xs font-bold uppercase tracking-[0.35em] mb-3">EXQUISITE PORTFOLIO</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#6e0b14]">
            Our Core Expertise
          </h2>
          <div className="flex justify-center items-center gap-3 mt-4 mb-6">
            <div className="w-10 h-[2px] bg-[#6e0b14]/20" />
            <div className="w-12 h-1 bg-[#c5a059] rounded-full" />
            <div className="w-10 h-[2px] bg-[#6e0b14]/20" />
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            We curate and export a distinguished range of premium products sourced directly from Bharat&apos;s finest reserves, conforming strictly to premium global standards.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {categories.map((cat, i) => {
              // Map index to bento columns
              const cardSizes = [
                "md:col-span-7 lg:col-span-8", // 1st major card: Agricultural Products
                "md:col-span-5 lg:col-span-4", // 2nd card: Minerals
                "md:col-span-4",              // 3rd card: Engineering
                "md:col-span-4",              // 4th card: Other items
                "md:col-span-4",              // 5th card: Pharma (Coming soon)
              ]
              const gridClass = cardSizes[i % cardSizes.length]

              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className={`${gridClass} col-span-12 group relative min-h-[340px] rounded-3xl overflow-hidden shadow-xl border border-white/40 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(110,11,20,0.12)]`}
                >
                  {/* Category Image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  
                  {/* Luxury Rich Gradients overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a0508]/100 via-[#2a0508]/40 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />
                  <div className="absolute inset-0 bg-[#6e0b14]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Corner Accent Gold Lines */}
                  <div className="absolute top-6 left-6 right-6 bottom-6 border border-[#c5a059]/20 rounded-2xl pointer-events-none transition-all duration-500 group-hover:border-[#c5a059]/40" />

                  {/* Badges */}
                  <div className="absolute top-8 left-8 z-20 flex gap-2">
                    {"comingSoon" in cat && cat.comingSoon ? (
                      <span className="rounded-full bg-gradient-to-r from-[#c5a059] to-[#ebd69b] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#2a0508] shadow-md border border-white/20">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="rounded-full bg-black/40 backdrop-blur-md px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-white shadow-md border border-white/10 group-hover:border-[#c5a059]/40 transition-colors">
                        Premium Quality
                      </span>
                    )}
                  </div>
                  
                  {/* Category Icon */}
                  <div className="absolute top-8 right-8 h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-[#c5a059] group-hover:border-[#c5a059] group-hover:scale-110 shadow-lg">
                    <cat.icon className="h-5 w-5 text-white transition-colors duration-300" />
                  </div>

                  {/* Content Glass-Card Box */}
                  <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-500 group-hover:border-[#c5a059]/30 group-hover:bg-[#2a0508]/60">
                    <div className="flex items-center gap-3">
                      <cat.icon className="h-6 w-6 text-[#c5a059] transition-transform duration-500 group-hover:rotate-12" />
                      <span className="text-[10px] font-semibold text-[#c5a059] uppercase tracking-[0.2em]">Ready For Export</span>
                    </div>
                    {/* Fix name display for agricultural taxonomy cleanly */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-2 group-hover:text-[#c5a059] transition-colors duration-300">
                      {cat.slug === "agricultural-products-exported" ? "Agricultural Products" : cat.name}
                    </h3>
                    <p className="text-sm text-slate-300/95 font-light mt-2 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden leading-relaxed">
                      {cat.description || "Discover premium-grade items hand-sourced to your exact packaging and shipment requirements."}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-white/50 group-hover:text-[#c5a059] transition-colors duration-300">
                      <span>Explore Collection</span>
                      <ArrowRight className="h-3 w-3 translate-x-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 text-center relative z-10">
          <Button asChild size="lg" className="bg-[#6e0b14] hover:bg-[#850d17] text-white px-8 py-6 rounded-xl border border-[#c5a059]/30 shadow-lg group hover:scale-[1.02] transition-transform">
            <Link href="/products" className="flex items-center gap-2 font-bold tracking-wide">
              View All Product Offerings
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#6e0b14]">Why Global Buyers Trust Us</h2>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-6" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#6e0b14] via-transparent to-[#6e0b14]" />
            <div className="relative">
              <FeaturesSectionWithHoverEffects />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#6e0b14] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/shreem-logo.png"
            alt=""
            width={400}
            height={400}
            className="absolute right-[-100px] top-1/2 -translate-y-1/2 h-96 w-96 object-contain opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic text-white">Ready to Source from Bharat?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Connect with us today for a custom quote or to discuss your specific bulk sourcing requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-[#c5a059] text-white hover:bg-[#b59049] min-w-[200px] font-bold border-none">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059]/10 min-w-[200px]">
              <Link href="/request-quote">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
