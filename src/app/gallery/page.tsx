import Image from "next/image"
import { Camera } from "lucide-react"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

const galleryImages = [
  { src: "/products/Turmeric_for_export_requirements_202605251852.jpeg", alt: "Turmeric for Export" },
  { src: "/products/premium-pomegranates.jpeg", alt: "Premium Pomegranates" },
  { src: "/products/green-cardamom.jpeg", alt: "Green Cardamom" },
  { src: "/products/turmeric-powder-high-curcumin.jpeg", alt: "High Curcumin Turmeric Powder" },
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
      <div className="pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Page header */}
          <div className="text-center mb-16 pt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6e0b14]/10 mb-6">
              <Camera className="h-8 w-8 text-[#6e0b14]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6e0b14]">Gallery</h1>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A visual journey through our products, processes, and partnerships.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 stagger-children">
            {galleryImages.map((img, i) => (
              <div key={i} className="mb-6 break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg card-lift">
                <div className="relative aspect-[4/3]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0508]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-semibold text-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
