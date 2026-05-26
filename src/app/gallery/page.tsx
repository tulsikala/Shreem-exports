import Image from "next/image"
import { Camera } from "lucide-react"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

const galleryImages = [
  { src: "/products/Turmeric_for_export_requirements_202605251852.jpeg", alt: "Turmeric for Export" },
  { src: "/products/premium-pomegranates.jpeg", alt: "Premium Pomegranates" },
  { src: "/products/green-cardamom.jpeg", alt: "Green Cardamom" },
  { src: "/products/premium-cashew-nuts-w180.jpeg", alt: "Premium Cashew Nuts" },
  { src: "/products/Rice_for_global_markets_202605251847.jpeg", alt: "Export Rice" },
  { src: "/products/Maize_for_food_processing_202605251848.jpeg", alt: "Maize (Corn)" },
  { src: "/products/Sorghum_grain_for_export_202605251855.jpeg", alt: "Sorghum Grain" },
  { src: "/products/Red_Chilli_dried_for_color_202605251843.jpeg", alt: "Red Chilli" },
  { src: "/products/Spice_Powder_Shreem_exports_202605251842.jpeg", alt: "Spice Powder" },
  { src: "/products/Cotton_Yarn_Shreem_Exports_202605251850.jpeg", alt: "Cotton Yarn" },
  { src: "/products/Pile_of_raw_cotton_202605251838.jpeg", alt: "Raw Cotton" },
  { src: "/products/packaging-products.jpeg", alt: "Packaging Products" },
  { src: "/products/Engineering_&_Machinary_Goods_202605261139.jpeg", alt: "Engineering Goods" },
  { src: "/products/Brown_granite_surface_texture_202605251821.jpeg", alt: "Brown Granite" },
  { src: "/products/Honey_export_quality_assurance_202605261111.jpeg", alt: "Honey Export" },
  { src: "/products/Tea_and_coffee_products_202605261125.jpeg", alt: "Tea and Coffee" },
  { src: "/products/textiles-fabrics.webp", alt: "Textiles & Fabrics" },
  { src: "/products/handicrafts-artisan-goods.webp", alt: "Handicraft Artisan Goods" },
]

export default function GalleryPage() {
  return (
    <>
      <PageBreadcrumb />
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8ef_0,_#ffffff_38%,_#fffaf4_100%)] pb-20">
        <div className="container mx-auto px-4">
          {/* Page header */}
          <div className="mb-14 pt-8 text-center md:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6e0b14]/10 mb-6 shadow-sm">
              <Camera className="h-8 w-8 text-[#6e0b14]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6e0b14]">Gallery</h1>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A curated visual journey through our key products, quality, and export capabilities.
            </p>
          </div>

          {/* Balanced responsive grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-[#6e0b14]/8 bg-white shadow-[0_10px_28px_rgba(83,20,20,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(83,20,20,0.14)]"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0508]/85 via-[#2a0508]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-5">
                  <p className="text-sm font-semibold text-white">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
