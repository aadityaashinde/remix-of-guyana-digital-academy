import logo from "@/assets/logo-white.png";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
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
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Guyana Digital School" className="h-16 shadow-sm" />
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Empowering Guyana's future through comprehensive digital education aligned with CXC standards.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.facebook.com/share/17pN4KLkDs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-[#1877F2]/20 flex items-center justify-center transition-colors group">
                <Facebook className="w-4 h-4 text-[#1877F2] group-hover:text-[#1877F2] transition-colors" />
              </a>
              <a href="https://www.instagram.com/ministryofeducationgy/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-[#E4405F]/20 flex items-center justify-center transition-colors group">
                <Instagram className="w-4 h-4 text-[#E4405F] group-hover:text-[#E4405F] transition-colors" />
              </a>
              <a href="https://www.youtube.com/user/EducationGuyana" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-[#FF0000]/20 flex items-center justify-center transition-colors group">
                <Youtube className="w-4 h-4 text-[#FF0000] group-hover:text-[#FF0000] transition-colors" />
              </a>
              <a href="https://twitter.com/educationguyana" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors group">
                <svg className="w-4 h-4 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/50">
              {[
                { label: "Home", href: "#" },
                { label: "About", href: "#about" },
                { label: "Our Approach", href: "#approach" },
                { label: "Curriculum", href: "#curriculum" },
                { label: "Live Classes", href: "#schedule" },
                { label: "Faculty", href: "#faculty" },
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
                { label: "Admissions", href: "#admissions" },
                { label: "FAQs", href: "#faqs" },
                { label: "Contact Us", href: "#contact" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
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
                26 Brickdam, Georgetown, Guyana
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href="tel:5922237900" className="hover:text-secondary transition-colors">(592) 223-7900</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a href="mailto:info@guyanadigialschool.com" className="hover:text-secondary transition-colors text-xs sm:text-sm break-all">info@guyanadigialschool.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/[0.08] mt-12 pt-8 text-center text-sm text-primary-foreground/30">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent mx-auto mb-4 rounded-full" />
          © {new Date().getFullYear()} Guyana Digital School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
