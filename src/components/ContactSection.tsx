import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden section-glow">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.04] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground">
            Contact Us
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Have a question or need assistance? Reach out to our team — we're here to help.
          </p>
        </div>

        <div
          ref={sectionRef}
          className={`max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Full Name <span className="text-destructive">*</span></label>
              <input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email Address <span className="text-destructive">*</span></label>
              <input type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Contact Number <span className="text-muted-foreground text-xs font-normal">(optional)</span></label>
              <div className="flex gap-2">
                <span className="flex items-center px-3 py-3 rounded-xl border border-border/50 bg-background/50 text-muted-foreground text-sm shrink-0">🇮🇳 +91</span>
                <input type="tel" maxLength={10} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all" placeholder="Enter your phone number" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Subject <span className="text-destructive">*</span></label>
              <input type="text" required maxLength={200} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all" placeholder="What is this about?" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message <span className="text-destructive">*</span></label>
              <textarea required maxLength={1000} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all resize-none" placeholder="How can we help you?" />
            </div>
            <button type="submit" className="w-full gradient-gold text-secondary-foreground font-semibold py-3.5 rounded-xl text-sm hover:opacity-90 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 shadow-md">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          {/* Map + Contact Info */}
          <div className="space-y-5">
            <div className="glass-card rounded-2xl overflow-hidden h-64">
              <iframe
                title="Kingsbridge Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14426.2!2d87.07!3d25.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f04d67a!2sPirpainti%2C+Bihar!5e0!3m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display font-bold text-foreground text-lg mb-5">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: "Pirpainti, Bhagalpur, Bihar 813209, India" },
                  { icon: Phone, label: "Phone", value: "+91 9931344055", href: "tel:+919931344055" },
                  { icon: Mail, label: "Email", value: "kingsbridgeacademy.2019@gmail.com", href: "mailto:kingsbridgeacademy.2019@gmail.com" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl gradient-navy flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground text-sm hover:text-secondary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Directors</p>
                    <p className="text-muted-foreground text-sm">Binay Sir: <a href="tel:+919192291118" className="hover:text-secondary transition-colors">+91 9192291118</a></p>
                    <p className="text-muted-foreground text-sm">Sudhir Sir: <a href="tel:+917004127841" className="hover:text-secondary transition-colors">+91 7004127841</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
