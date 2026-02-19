import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const caribbeanCountries = [
  { name: "Guyana", code: "+592", flag: "🇬🇾" },
  { name: "Trinidad & Tobago", code: "+1-868", flag: "🇹🇹" },
  { name: "Jamaica", code: "+1-876", flag: "🇯🇲" },
  { name: "Barbados", code: "+1-246", flag: "🇧🇧" },
  { name: "Bahamas", code: "+1-242", flag: "🇧🇸" },
  { name: "Suriname", code: "+597", flag: "🇸🇷" },
  { name: "Belize", code: "+501", flag: "🇧🇿" },
  { name: "Haiti", code: "+509", flag: "🇭🇹" },
  { name: "Dominican Republic", code: "+1-809", flag: "🇩🇴" },
  { name: "Cuba", code: "+53", flag: "🇨🇺" },
  { name: "St. Lucia", code: "+1-758", flag: "🇱🇨" },
  { name: "Grenada", code: "+1-473", flag: "🇬🇩" },
  { name: "St. Vincent", code: "+1-784", flag: "🇻🇨" },
  { name: "Antigua & Barbuda", code: "+1-268", flag: "🇦🇬" },
  { name: "Dominica", code: "+1-767", flag: "🇩🇲" },
  { name: "St. Kitts & Nevis", code: "+1-869", flag: "🇰🇳" },
  { name: "Cayman Islands", code: "+1-345", flag: "🇰🇾" },
  { name: "Bermuda", code: "+1-441", flag: "🇧🇲" },
  { name: "Turks & Caicos", code: "+1-649", flag: "🇹🇨" },
  { name: "British Virgin Islands", code: "+1-284", flag: "🇻🇬" },
  { name: "U.S. Virgin Islands", code: "+1-340", flag: "🇻🇮" },
  { name: "Aruba", code: "+297", flag: "🇦🇼" },
  { name: "Curaçao", code: "+599", flag: "🇨🇼" },
  { name: "Puerto Rico", code: "+1-787", flag: "🇵🇷" },
  { name: "Montserrat", code: "+1-664", flag: "🇲🇸" },
  { name: "Anguilla", code: "+1-264", flag: "🇦🇮" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [selectedCountry, setSelectedCountry] = useState(caribbeanCountries[0]);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
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
          className={`max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Full Name <span className="text-destructive">*</span></label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email Address <span className="text-destructive">*</span></label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Contact Number <span className="text-muted-foreground text-xs font-normal">(optional)</span></label>
              <div className="flex gap-2">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                    className="flex items-center gap-1.5 px-3 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground text-sm shrink-0 hover:bg-background/80 transition-colors"
                  >
                    <span className="text-base leading-none">{selectedCountry.flag}</span>
                    <span className="text-muted-foreground text-sm">{selectedCountry.code}</span>
                    <ChevronDown className="w-3 h-3 text-muted-foreground" />
                  </button>
                  {countryDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 max-h-48 overflow-y-auto rounded-xl border border-border/50 bg-background shadow-lg z-50">
                      {caribbeanCountries.map((country) => (
                        <button
                          key={country.code + country.name}
                          type="button"
                          onClick={() => { setSelectedCountry(country); setCountryDropdownOpen(false); }}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-muted/50 transition-colors text-left ${selectedCountry.name === country.name ? 'bg-secondary/10 text-secondary' : 'text-foreground'}`}
                        >
                          <span className="text-base leading-none">{country.flag}</span>
                          <span className="truncate">{country.name}</span>
                          <span className="text-muted-foreground ml-auto shrink-0">{country.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Subject <span className="text-destructive">*</span></label>
              <input
                type="text"
                required
                maxLength={200}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all"
                placeholder="What is this about?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message <span className="text-destructive">*</span></label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-gold text-secondary-foreground font-semibold py-3.5 rounded-xl text-sm hover:opacity-90 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          {/* Map + Contact Info */}
          <div className="space-y-5">
            <div className="glass-card rounded-2xl overflow-hidden h-64">
              <iframe
                title="Guyana Digital School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d-58.1553!3d6.8013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s26+Brickdam+Georgetown+Guyana!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display font-bold text-foreground text-lg mb-5">Support Information</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: "26 Brickdam, Georgetown, Guyana" },
                  { icon: Phone, label: "Phone", value: "(592) 223-7900", href: "tel:5922237900" },
                  { icon: Mail, label: "Email", value: "info@guyanadigialschool.com", href: "mailto:info@guyanadigialschool.com" },
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
