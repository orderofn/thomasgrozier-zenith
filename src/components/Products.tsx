import { ArrowRight, Download } from "lucide-react";
import bkWatermainImage from "@/assets/products/bk-watermain.jpg";
import bkStandardImage from "@/assets/products/bk-standard-watermain.jpg";
import standardLubeImage from "@/assets/products/standard-lube.jpg";
import graphitePowderImage from "@/assets/products/graphite-powder-new.jpg";
import cubPuffersImage from "@/assets/products/cub-puffers-new.jpg";
import ovenChainImage from "@/assets/industries/oven-chain.jpg";
import wrasLogo from "@/assets/products/wras-logo.jpg";
import watermarkLogo from "@/assets/products/watermark-logo.jpg";

const Products = () => {
  const products = [
    {
      title: "BK Watermain Bactericidal Lubricant",
      description: "WaterMark AS/NZS 4020 approved lubricant for pipes supplying potable water.",
      image: bkWatermainImage,
      features: ["WaterMark AS/NZS 4020 Approved", "Potable Water Safe", "Bactericidal Formula"],
      datasheet: "/datasheets/BK_LUBRICANT_DATA_SHEET.pdf",
      logos: [watermarkLogo],
    },
    {
      title: "BK Standard Watermain Lubricant",
      description: "WaterMark AS/NZS 4020 and WRAS BS6920 approved bactericidal pipe jointing lubricant for pipes supplying potable water. Also used in Fire supply industries and Tunnel Boring Machines (TBM).",
      image: bkStandardImage,
      features: ["WaterMark AS/NZS 4020 Approved", "WRAS BS6920 Approved", "Fire Supply & TBM Applications"],
      datasheet: "/datasheets/BK_STAND_LUBE_DATA_SHEET.pdf",
      logos: [watermarkLogo, wrasLogo],
    },
    {
      title: "Standard Pipe Jointing Lubricant",
      description: "High-quality rubber ring pipe jointing lubricant designed for sewer pipes and non-potable water applications.",
      image: standardLubeImage,
      features: ["Sewer Pipes", "Rubber Ring Compatible", "Industrial Grade"],
      datasheet: "/datasheets/STANDARD_LUBE_DATA_SHEET.pdf",
      logos: [],
    },
    {
      title: "Graphite Products",
      description: "Our Graphite is a high purity natural crystalline graphite. Typical uses: Lubricants, Packings, Brake Linings, Conductive coatings, Batteries, Seed lubricant.",
      image: graphitePowderImage,
      features: ["High Purity", "Natural Crystalline", "Multi-Purpose"],
      datasheet: null,
      helperText: "Please see individual products in the Data Sheets section to view and download their respective data sheets.",
      logos: [],
    },
    {
      title: "Cub Puffers",
      description: "Dixon Microfyne Graphite lubricants for locks, hinges, bearings, fishing gear, mowers and more. The atom bomb of lubricants! Keeps auto locks and outdoor hinges from freezing.",
      image: cubPuffersImage,
      features: ["Auto Locks", "Anti-Freeze", "Easy Spray"],
      datasheet: "/datasheets/CUB_PUFFERS_DATA_SHEET.pdf",
      logos: [],
    },
    {
      title: "Oven Chain Lubricant",
      description: "High-performance chain lubricant for bakery and food processing equipment operating at elevated temperatures.",
      image: ovenChainImage,
      features: ["Food Safe", "High Temperature", "Chain Protection"],
      datasheet: null,
      helperText: "Please see individual products in the Data Sheets section to view and download their respective data sheets.",
      logos: [],
    },
  ];

  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized lubricant solutions for diverse industrial applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="glass-card-hover rounded-2xl overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                {product.logos && product.logos.length > 0 && (
                  <div className="absolute top-3 right-3 flex gap-2">
                    {product.logos.map((logo, logoIndex) => (
                      <img
                        key={logoIndex}
                        src={logo}
                        alt="Certification logo"
                        className="h-12 w-auto rounded bg-white/90 p-1"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 gradient-text">{product.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {product.datasheet ? (
                  <a 
                    href={product.datasheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary font-semibold group-hover:space-x-3 transition-all"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Data Sheet</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : product.helperText ? (
                  <p className="text-sm text-muted-foreground italic">{product.helperText}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;