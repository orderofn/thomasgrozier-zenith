import logoBanner from "@/assets/logo-banner-blue.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <img src={logoBanner} alt="Thomas Grozier & Son" className="h-16 w-auto mx-auto mb-8" />
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <p className="text-muted-foreground mb-4 max-w-md">
              A fourth generation family business supplying quality industrial lubricants worldwide since 1940.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>+61 2 9620 9843</li>
              <li>info@thomasgrozier.com.au</li>
              <li>Sydney, Australia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Thomas Grozier & Son Pty Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
