import { CheckCircle2, Award, Globe, Users } from "lucide-react";
import manufacturingImage from "@/assets/manufacturing.jpg";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={manufacturingImage}
                alt="Manufacturing process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-8 max-w-xs">
              <div className="text-5xl font-bold gradient-text mb-2">80+</div>
              <div className="text-sm text-muted-foreground">Years of Industry Leadership</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-primary font-semibold">Quality & Excellence</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Welcome to <span className="gradient-text">Thomas Grozier & Son</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our aim is to supply quality product on time, every time, to ensure complete customer satisfaction.
            </p>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We have grown from a National Supplier of quality lubricants to one that supplies product around the world. This has been achieved through consultation with customers, suppliers, staff and accreditation organizations that all have an ongoing commitment to quality.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 glass-card p-4 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
