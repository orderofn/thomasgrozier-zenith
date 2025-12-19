import { Award, Shield, Droplets, Download, FileCheck } from "lucide-react";
import wrasLogo from "@/assets/products/wras-logo.jpg";
import watermarkLogo from "@/assets/products/watermark-logo.jpg";
import iso9001Logo from "@/assets/iso-9001-logo.jpg";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001 Certified",
      description: "Quality Management Systems certification ensuring consistent quality in all processes.",
    },
    {
      icon: Shield,
      title: "WRAS BS6920 Approved",
      description: "Water Regulations Advisory Scheme approval for products used in potable water systems.",
    },
    {
      icon: Droplets,
      title: "WaterMark AS/NZS 4020",
      description: "Australian/New Zealand standard approval for products in contact with drinking water.",
    },
  ];

  const certificates = [
    {
      name: "WRAS Approval Letter",
      file: "/certificates/2203503_approval_letterWRAS.pdf",
    },
    {
      name: "SAI Global Certificate (ISO 9001)",
      file: "/certificates/Certificate_of_registration_Sai_Global_1.pdf",
    },
    {
      name: "ACS Certificate",
      file: "/certificates/ACS_THOMAS_GROZIER_24_CLP_LY_036_1.pdf",
    },
    {
      name: "Watermark Certificate of Conformity",
      file: "/certificates/CERTIFICATE_OF_CONFORMITY.pdf",
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

        {/* Certification Logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="glass-card p-6 rounded-xl flex items-center justify-center">
            <img src={watermarkLogo} alt="WaterMark Certification" className="h-20 w-auto" />
          </div>
          <div className="glass-card p-6 rounded-xl flex items-center justify-center">
            <img src={wrasLogo} alt="WRAS Certification" className="h-20 w-auto" />
          </div>
          <div className="glass-card p-6 rounded-xl flex items-center justify-center">
            <img src={iso9001Logo} alt="ISO 9001 Certification" className="h-20 w-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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

        {/* Downloadable Certificates */}
        <div className="mt-16 glass-card p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">
            <span className="gradient-text">Download Our Certificates</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FileCheck className="h-5 w-5" />
                </div>
                <span className="font-medium flex-1">{cert.name}</span>
                <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 rounded-lg bg-primary/10 border border-primary/30">
              <span className="text-primary font-semibold">ABN: 71 087 973 466</span>
            </div>
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