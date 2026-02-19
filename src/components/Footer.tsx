import { Mail, Phone, MapPin, Facebook, Instagram, GraduationCap } from "lucide-react";
import WaveDecoration from "@/components/WaveDecoration";

const Footer = () => {
  return (
    <footer className="gradient-navy text-primary-foreground relative overflow-hidden">
      <WaveDecoration position="top" flip />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/[0.03] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-bold text-sm text-primary-foreground">Kingsbridge Academy</p>
                <p className="text-[9px] uppercase tracking-wider text-primary-foreground/50">Pirpainti, Bhagalpur</p>
              </div>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Nurturing Young Minds, Building Bright Futures. Quality education for Classes 1–8.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-[#1877F2]/20 flex items-center justify-center transition-colors group">
                <Facebook className="w-4 h-4 text-[#1877F2] group-hover:text-[#1877F2] transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-[#E4405F]/20 flex items-center justify-center transition-colors group">
                <Instagram className="w-4 h-4 text-[#E4405F] group-hover:text-[#E4405F] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/50">
              {[
                { label: "Home", href: "#" },
                { label: "About Us", href: "#about" },
                { label: "Academics", href: "#academics" },
                { label: "Admissions", href: "#admissions" },
                { label: "Faculty", href: "#faculty" },
                { label: "Gallery", href: "#gallery" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-secondary mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/50">
              {[
                { label: "FAQs", href: "#faqs" },
                { label: "Contact Us", href: "#contact" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-secondary mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                Pirpainti, Bhagalpur, Bihar 813209, India
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href="tel:+919931344055" className="hover:text-secondary transition-colors">+91 9931344055</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a href="mailto:kingsbridgeacademy.2019@gmail.com" className="hover:text-secondary transition-colors text-xs sm:text-sm break-all">kingsbridgeacademy.2019@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/[0.08] mt-12 pt-8 text-center text-sm text-primary-foreground/30">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent mx-auto mb-4 rounded-full" />
          © {new Date().getFullYear()} Kingsbridge Academy, Pirpainti. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
