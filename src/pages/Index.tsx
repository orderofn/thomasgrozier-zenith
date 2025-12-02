import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Certifications from "@/components/Certifications";
import PhotosComingSoon from "@/components/PhotosComingSoon";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Certifications />
      <PhotosComingSoon />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
