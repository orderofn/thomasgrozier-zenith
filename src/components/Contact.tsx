import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+61 02 9620 9843",
      href: "tel:+61296209843",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sales@thomasgrozier.com",
      href: "mailto:sales@thomasgrozier.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "2/8 Prince William Drive, Seven Hills, NSW, 2147, Australia",
      href: "https://maps.google.com/?q=2/8+Prince+William+Drive+Seven+Hills+NSW+2147+Australia",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-primary font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Contact Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your lubrication needs? Reach out to our team of experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
