import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/industries/pipe-laying-2.jpg";

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
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Quality Lubricants</span>
            <br />
            <span className="text-foreground">For Industrial Excellence</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Thomas Grozier & Son has been producing premium industrial lubricants for over 80 years. From local supplier to global partner, we deliver quality on time, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="btn-primary inline-flex items-center justify-center group px-8 py-3">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline inline-flex items-center justify-center px-8 py-3">
              Request Quote
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-6xl mx-auto">
          {[
            { number: "80+", label: "Years Experience" },
            { number: "50+", label: "Countries Served" },
            { number: "1000+", label: "Satisfied Clients" },
            { number: "100%", label: "Quality Guaranteed" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center transform hover:scale-105 transition-all duration-300 border border-border/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
