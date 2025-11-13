import { ArrowRight } from "lucide-react";
import pipeImage from "@/assets/pipe-jointing.jpg";
import highTempImage from "@/assets/high-temp.jpg";
import chainImage from "@/assets/chain-solutions.jpg";

const Products = () => {
  const products = [
    {
      title: "Pipe Jointing Lubricants",
      description: "Bactericidal lubricants for potable water systems, WRAS approved for safe drinking water applications.",
      image: pipeImage,
      features: ["WRAS Approved", "Bactericidal Formula", "Safe for Drinking Water"],
    },
    {
      title: "Graphites & High Temperature",
      description: "Specialized lubricants designed for extreme conditions and high-temperature industrial applications.",
      image: highTempImage,
      features: ["Extreme Temperature", "Long Lasting", "Industrial Grade"],
    },
    {
      title: "Oven Chain Solutions",
      description: "High-performance lubricants for bakery and food processing chain systems operating at elevated temperatures.",
      image: chainImage,
      features: ["Food Safe", "High Temperature", "Chain Protection"],
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
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 gradient-text">{product.title}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center space-x-2 text-primary font-semibold group-hover:space-x-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
