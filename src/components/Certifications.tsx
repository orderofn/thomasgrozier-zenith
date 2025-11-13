import { Award, CheckCircle, Shield, FileCheck } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001 Certified",
      description: "Quality Management Systems certification ensuring consistent quality in all processes.",
    },
    {
      icon: Shield,
      title: "WRAS Approved",
      description: "Water Regulations Advisory Scheme approval for products used in potable water systems.",
    },
    {
      icon: FileCheck,
      title: "AS 2536 Compliant",
      description: "Meeting Australian Standards for industrial lubricants and quality assurance.",
    },
    {
      icon: CheckCircle,
      title: "Environmental Standards",
      description: "Committed to sustainable practices and environmental responsibility.",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-primary font-semibold">Certified Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Quality Assurance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognized standards and certifications that guarantee our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 animate-glow">
                <cert.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Ongoing Commitment to Quality</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our certifications reflect our dedication to maintaining the highest standards in manufacturing, 
            safety, and environmental responsibility. We continuously invest in quality assurance to exceed 
            industry expectations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 rounded-lg bg-primary/10 border border-primary/30">
              <span className="text-primary font-semibold">Regular Audits</span>
            </div>
            <div className="px-6 py-3 rounded-lg bg-primary/10 border border-primary/30">
              <span className="text-primary font-semibold">Staff Training</span>
            </div>
            <div className="px-6 py-3 rounded-lg bg-primary/10 border border-primary/30">
              <span className="text-primary font-semibold">Continuous Improvement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
