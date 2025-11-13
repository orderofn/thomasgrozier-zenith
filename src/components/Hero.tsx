import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-primary font-semibold">Industrial Lubricant Excellence Since 1940</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Quality Lubricants</span>
            <br />
            <span className="text-foreground">For Industrial Excellence</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            A fourth generation family business supplying quality lubricants worldwide. Our commitment: delivering excellence on time, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="btn-primary inline-flex items-center justify-center group">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline inline-flex items-center justify-center">
              Request Quote
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-5xl mx-auto">
          {[
            { number: "80+", label: "Years Experience" },
            { number: "50+", label: "Countries Served" },
            { number: "1000+", label: "Satisfied Clients" },
            { number: "100%", label: "Quality Guaranteed" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
