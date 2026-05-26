import { Flame, Wheat, Package, Gem } from "lucide-react"

const DUMMY_IMAGE = "/products/packaging-products.jpeg"

export const categories = [
  {
    name: "Agricultural products exported",
    slug: "agricultural-products-exported",
    description: "Cotton is one of the largest agricultural exports from Telangana.",
    icon: Wheat,
    image: "/products/SHREEM_EXPORTS_agricultural_prod…_202605251857.jpeg",
    heroImage: "/products/SHREEM_EXPORTS_agricultural_prod…_202605251857.jpeg",
    products: [
      {
        name: "Rice",
        description: "Long-grain and premium varieties of export rice, cleaned and sorted for global markets.",
        image: "/products/Rice_for_global_markets_202605251847.jpeg",
        origin: "Punjab and Telangana",
        packaging: "25kg, 50kg bags",
      },
      {
        name: "Maize (Corn)",
        description: "High-quality maize suitable for food processing, feed, and industrial export use.",
        image: "/products/Maize_for_food_processing_202605251848.jpeg",
        origin: "Karnataka and Andhra Pradesh",
        packaging: "25kg, 50kg bags",
      },
      {
        name: "Sorghum",
        description: "Cleaned sorghum grain for food, feed, and specialty grain export requirements.",
        image: "/products/Sorghum_grain_for_export_202605251855.jpeg",
        origin: "Maharashtra and Karnataka",
        packaging: "25kg, 50kg bags",
      },
      {
        name: "Raw Cotton",
        description: "Ginned and graded raw cotton for spinning and textile manufacturing applications.",
        image: "/products/Pile_of_raw_cotton_202605251838.jpeg",
        origin: "Gujarat and Maharashtra",
        packaging: "Bales",
      },
      {
        name: "Cotton Yarn",
        description: "Consistent cotton yarn options for weaving, knitting, and fabric production.",
        image: "/products/Cotton_Yarn_Shreem_Exports_202605251850.jpeg",
        origin: "Tamil Nadu and Gujarat",
        packaging: "Cones and cartons",
      },
      {
        name: "Turmeric",
        description: "Bright, high-curcumin turmeric for culinary and industrial export requirements.",
        image: "/products/Turmeric_for_export_requirements_202605251852.jpeg",
        origin: "Telangana and Andhra Pradesh",
        packaging: "25kg, 50kg bags",
        giTag: "Nizamabad Turmeric",
      },
      {
        name: "Red Chilli",
        description: "Naturally dried red chillies selected for vivid color, heat, and aroma.",
        image: "/products/Red_Chilli_dried_for_color_202605251843.jpeg",
        origin: "Guntur, Andhra Pradesh",
        packaging: "25kg, 50kg bags",
        giTag: "Guntur Sannam Chilli",
      },
      {
        name: "Spice Powder",
        description: "Custom spice powder blends prepared for bulk food-service and retail packaging.",
        image: "/products/Spice_Powder_Shreem_exports_202605251842.jpeg",
        origin: "India",
        packaging: "1kg, 5kg, 25kg packs",
      },
    ],
  },
  {
    name: "Mineral & Natural Resource Exports",
    slug: "minerals",
    description: "Granite from Karimnagar and Khammam districts is exported worldwide.",
    icon: Gem,
    image: "/products/Luxurious_modern_kitchen_island_202605251821.jpeg",
    heroImage: "/products/Luxurious_modern_kitchen_island_202605251821.jpeg",
    products: [
      {
        name: "Tan Brown Granite",
        description: "Premium granite with deep brown tones, suitable for slabs, tiles, and large-scale export orders.",
        image: "/products/Brown_granite_surface_texture_202605251821.jpeg",
        origin: "Karimnagar, Telangana",
        packaging: "Crates, pallets",
      },
      {
        name: "Maple Brown Granite",
        description: "Durable decorative granite known for its warm brown pattern and consistent finish.",
        image: "/products/Maple_Brown_Granite_surface_clos…_202605251829.jpeg",
        origin: "Khammam, Telangana",
        packaging: "Crates, pallets",
      },
    ],
  },
  {
    name: "Engineering & Machinery Goods",
    slug: "engineering-machinary-goods",
    description: "Engineering goods contribute the biggest share of Telangana exports.",
    icon: Package,
    image: "/products/Engineering_&_Machinary_Goods_202605261139.jpeg",
    heroImage: "/products/Engineering_&_Machinary_Goods_202605261139.jpeg",
    products: [
      {
        name: "Electrical Machinery",
        description: "Reliable electrical machinery for industrial and commercial export use.",
        image: "/products/Electrical_Machinery_for_Export_202605251900.jpeg",
        origin: "Telangana",
        packaging: "Crates, pallets",
      },
      {
        name: "Industrial Equipment",
        description: "Heavy-duty industrial equipment built for demanding export markets.",
        image: "/products/Industrial_equipment_for_export_202605251903.jpeg",
        origin: "Telangana",
        packaging: "Crates, pallets",
      },
      {
        name: "Machine Parts",
        description: "Precision-engineered machine parts for manufacturing and maintenance supply chains.",
        image: "/products/Machine_Parts_Shreem_Exports_202605251904.jpeg",
        origin: "Telangana",
        packaging: "Boxes, crates",
      },
      {
        name: "Aerospace Components",
        description: "High-precision aerospace components manufactured to strict export standards.",
        image: "/products/Aerospace_components_manufacture…_202605251905.jpeg",
        origin: "Telangana",
        packaging: "Protective crates",
      },
      {
        name: "Defence Equipment",
        description: "Specialized defence equipment and assemblies for approved export channels.",
        image: "/products/Defence_equipment_for_export_202605251907.jpeg",
        origin: "Telangana",
        packaging: "Secure crates",
      },
    ],
  },
  {
    name: "Other Export items",
    slug: "other-export-items",
    description: "Other export items include plastics articles, paper products, textile materials, honey export, leather products, handcraft & home decor, herbal / ayurvedic products, oil seeds, tea & coffee, and textiles and garments.",
    icon: Package,
    image: "/products/Other_export_items_202605261129.jpeg",
    heroImage: "/products/Other_export_items_202605261129.jpeg",
    products: [
      {
        name: "Plastics Articles",
        description: "Durable plastics articles for general export and manufacturing supply.",
        image: "/products/Plastics_articles_for_export_202605261101.jpeg",
        origin: "India",
        packaging: "Bags, cartons",
      },
      {
        name: "Paper Products",
        description: "Export-ready paper products for packaging and commercial use.",
        image: "/products/Paper_Products_202605261105.jpeg",
        origin: "India",
        packaging: "Cartons, bundles",
      },
      {
        name: "Textile Materials",
        description: "Textile materials sourced for industrial, apparel, and supply-chain buyers.",
        image: "/products/textiles-fabrics.webp",
        origin: "India",
        packaging: "Bales, rolls",
      },
      {
        name: "Honey Export",
        description: "Pure honey products prepared for export markets with quality assurance.",
        image: "/products/Honey_export_quality_assurance_202605261111.jpeg",
        origin: "India",
        packaging: "Jars, drums",
      },
      {
        name: "Leather Products",
        description: "Finished leather goods for fashion, accessories, and industrial applications.",
        image: "/products/Leather_Products_Finished_Goods_202605261113.jpeg",
        origin: "India",
        packaging: "Boxes, cartons",
      },
      {
        name: "Handcraft & Home Decor",
        description: "Handcrafted decor and lifestyle products for global retail buyers.",
        image: "/products/handicrafts-artisan-goods.webp",
        origin: "India",
        packaging: "Protective packaging",
      },
      {
        name: "Herbal / Ayurvedic Products",
        description: "Herbal and ayurvedic products for wellness and natural care markets.",
        image: "/products/Herbal_Ayurvedic_products_wellne…_202605261119.jpeg",
        origin: "India",
        packaging: "Retail packs, cartons",
      },
      {
        name: "Oil Seeds",
        description: "Export-quality oil seeds including sesame and groundnut.",
        image: "/products/Oil_seeds_export_quality_202605261121.jpeg",
        origin: "India",
        packaging: "25kg, 50kg bags",
      },
      {
        name: "Tea & Coffee",
        description: "Selected tea and coffee products for international beverage markets.",
        image: "/products/Tea_and_coffee_products_202605261125.jpeg",
        origin: "India",
        packaging: "Packs, sacks",
      },
    ],
  },
  {
    name: "Pharmaceutical & Medical Products",
    slug: "pharmaceutical-medical-products",
    description: "Coming soon.",
    icon: Package,
    image: "/products/Pharmaceutical_Medical_Products_…_202605261132.jpeg",
    heroImage: "/products/Pharmaceutical_Medical_Products_…_202605261132.jpeg",
    comingSoon: true,
    products: [],
  },
]

export function getCategoryBySlug(slug: string) {
  return categories.find((cat) => cat.slug === slug)
}

export function getAllSlugs() {
  return categories.map((cat) => cat.slug)
}
