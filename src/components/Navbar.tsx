import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <span className="gradient-text">THOMAS GROZIER</span>
              <span className="text-muted-foreground text-sm block">& SON PTY LTD</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+61296209843"
              className="hidden sm:flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+61 2 9620 9843</span>
            </a>
            <a href="#contact" className="btn-primary">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
