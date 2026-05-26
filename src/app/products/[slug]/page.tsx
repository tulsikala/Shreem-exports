import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, MapPin, Package, ArrowLeft, Award, Boxes } from "lucide-react"
import { Card } from "@/components/ui/card"
import { categories, getCategoryBySlug, getAllSlugs } from "@/data/products"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: "Not Found" }
  return {
    title: `${category.name} — Shreem Exports`,
    description: category.description,
  }
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  return (
    <>
      <PageBreadcrumb />
      <div className="pb-20 min-h-screen bg-[radial-gradient(circle_at_top,_#fff7ec_0,_#ffffff_45%,_#fff9f4_100%)]">
        {/* Hero banner */}
        <div className="relative h-[340px] md:h-[430px] overflow-hidden">
          <Image
            src={category.heroImage}
            alt={category.name}
            fill
            className="object-cover scale-110 animate-hero-pan"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a0508]/92 via-[#2a0508]/62 to-[#2a0508]/35" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-14 px-4 text-center">
            <span className="mb-3 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90 backdrop-blur-md animate-reveal-up">
              Export Category
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 animate-reveal-up">
              {category.name}
            </h1>
            <p className="text-white/85 max-w-2xl text-base md:text-lg animate-reveal-up" style={{ animationDelay: "0.1s" }}>
              {category.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 animate-reveal-up" style={{ animationDelay: "0.2s" }}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                <Boxes className="h-3.5 w-3.5 text-[#f8d79c]" />
                {category.products.length} Products
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-[#f8d79c]" />
                Sourced Across India
              </span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8 md:mt-10">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-[#6e0b14]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6e0b14] shadow-sm transition-all duration-300 hover:border-[#c5a059] hover:text-[#c5a059]"
              >
                <ArrowLeft className="h-4 w-4" /> All Categories
              </Link>
              <h2 className="text-2xl md:text-3xl font-bold text-[#6e0b14]">Available Products</h2>
              <p className="max-w-xl text-sm md:text-base text-slate-600">
                Premium quality products curated for international trade requirements with reliable export-ready packaging.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-[#c5a059]/25 bg-[#fffdf8] px-5 py-3 text-sm text-[#6e0b14] shadow-sm">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#6e0b14]/10 text-[#6e0b14]">
                <Package className="h-4 w-4" />
              </span>
              <span>
                <strong className="font-semibold">{category.products.length}</strong> products listed
              </span>
            </div>
          </div>

          {/* Products grid */}
          {category.products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 stagger-children">
              {category.products.map((product, i) => {
                const giTag = typeof (product as unknown as Record<string, unknown>).giTag === "string"
                  ? (product as unknown as { giTag: string }).giTag
                  : ""
                const enquiryHref = `/request-quote?category=${encodeURIComponent(category.slug)}&product=${encodeURIComponent(product.name)}`

                return (
                  <Card
                    key={i}
                    className="group overflow-hidden rounded-[24px] border border-[#6e0b14]/10 bg-white shadow-[0_12px_40px_rgba(83,20,20,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(83,20,20,0.13)] !gap-0 !py-0"
                  >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0508]/72 via-[#2a0508]/20 to-transparent opacity-80" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.28),_transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="absolute top-3 right-3 z-10 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-[#6e0b14] backdrop-blur-sm">
                          #{String(i + 1).padStart(2, "0")}
                        </div>
                        {giTag && (
                          <div className="absolute top-3 left-3 z-10">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[#c5a059] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                              <Award className="h-3 w-3" />
                              GI Tagged
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col p-5">
                        <div className="mb-2.5 flex items-start justify-between gap-4">
                          <h3 className="text-lg md:text-[1.3rem] font-bold text-[#6e0b14] leading-tight">{product.name}</h3>
                          {giTag && (
                            <Award className="h-5 w-5 text-[#c5a059] flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                        {(product.origin || product.packaging || giTag) && (
                          <div className="mt-4 flex flex-wrap gap-2.5">
                            {product.origin && (
                              <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-[#fef9f0] px-3 py-1.5 rounded-full border border-[#c5a059]/20">
                                <MapPin className="h-3 w-3 text-[#c5a059]" />
                                {product.origin}
                              </span>
                            )}
                            {giTag && (
                              <span className="inline-flex items-center gap-1 text-xs text-[#6e0b14] bg-[#6e0b14]/5 px-3 py-1.5 rounded-full border border-[#6e0b14]/15 font-medium">
                                <Award className="h-3 w-3 text-[#c5a059]" />
                                {giTag}
                              </span>
                            )}
                            {product.packaging && (
                              <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-[#fef9f0] px-3 py-1.5 rounded-full border border-[#c5a059]/10">
                                <Package className="h-3 w-3 text-[#c5a059]" />
                                {product.packaging}
                              </span>
                            )}
                          </div>
                        )}
                        <div className="mt-5 pt-4 border-t border-[#6e0b14]/10">
                          <Link
                            href={enquiryHref}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6e0b14] transition-colors duration-300 hover:text-[#c5a059]"
                          >
                            Request this product
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#c5a059]/40 bg-[#fef9f0] px-6 py-16 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6e0b14]/10 text-[#6e0b14]">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#6e0b14] mb-3">Coming Soon</h3>
              <p className="text-slate-600 max-w-xl mx-auto">
                This category is currently being prepared. Please check back soon for product updates and export details.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="relative mt-20 overflow-hidden rounded-[28px] border border-[#6e0b14]/10 bg-gradient-to-r from-[#6e0b14] to-[#4a0810] p-8 md:p-12 text-center shadow-[0_20px_50px_rgba(74,8,16,0.22)]">
            <div className="pointer-events-none absolute -left-8 top-0 h-40 w-40 rounded-full bg-[#c5a059]/20 blur-3xl animate-soft-float" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-white/10 blur-3xl animate-soft-float" style={{ animationDelay: "0.4s" }} />

            <h2 className="relative text-3xl font-bold text-white mb-4">
              Interested in {category.name}?
            </h2>
            <p className="relative text-white/80 mb-8 max-w-xl mx-auto">
              Get custom pricing, sample support, and export documentation details tailored to your volume requirements.
            </p>
            <Link
              href="/request-quote"
              className="relative inline-flex items-center gap-2 rounded-xl bg-[#c5a059] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b8934e]"
            >
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
