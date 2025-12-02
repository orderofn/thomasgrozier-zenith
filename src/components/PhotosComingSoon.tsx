import { ImageIcon } from "lucide-react";

const PhotosComingSoon = () => {
  return (
    <section id="photos" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6 animate-fade-in">
            <ImageIcon className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Photos Coming Soon</span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            We're currently updating our photo gallery with new images showcasing our products and facilities. Check back soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotosComingSoon;
