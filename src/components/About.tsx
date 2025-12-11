import { Award, Globe, Users } from "lucide-react";
import manufacturingImage from "@/assets/industries/di-pipes.jpg";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Fourth Generation Family Business",
      description: "Over 80 years of expertise and dedication",
    },
    {
      icon: Award,
      title: "ISO Certified Quality",
      description: "Meeting international standards",
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Serving communities worldwide",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Now on LEFT */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={manufacturingImage}
                alt="Manufacturing process"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
          </div>

          {/* Content Side - Now on RIGHT */}
          <div className="animate-fade-in order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Welcome to <span className="gradient-text">Thomas Grozier & Son</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our aim is to supply quality product on time, every time, to ensure complete customer satisfaction.
            </p>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We have grown from a National Supplier of quality lubricants to one that supplies product around the world. This has been achieved through consultation with customers, suppliers, staff and accreditation organizations that all have an ongoing commitment to quality.
            </p>

            <div className="grid gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#about" className="btn-outline inline-flex items-center justify-center px-8 py-3">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
