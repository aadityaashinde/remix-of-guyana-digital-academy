import logoDark from "@/assets/logo-transparent.png";
import logoWhite from "@/assets/logo-white.png";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogIn, GraduationCap } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Admission", href: "#admissions" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Live Classes", href: "#schedule" },
  { label: "Faculty", href: "#faculty" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // After navigating to home with a hash, scroll to the target section
  useEffect(() => {
    if (isHomePage && location.hash) {
      // Small delay to let the page render
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location, isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isHomePage) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? "bg-card/90 backdrop-blur-xl shadow-[0_1px_20px_-6px_hsl(var(--foreground)/0.08)] border-b border-border/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 md:h-[68px]">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="flex items-center gap-3 shrink-0 group">
          <img src={(scrolled || !isHomePage) ? logoDark : logoWhite} alt="Guyana Digital School" className="h-10 md:h-11 group-hover:scale-105 transition-transform" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-3.5 py-2 text-[13px] font-medium transition-colors rounded-lg ${
                scrolled || !isHomePage
                  ? "text-foreground/70 hover:text-foreground hover:bg-muted/60"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href="https://learn.digitalschool.moe.edu.gy/login/signup.php"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-secondary-foreground font-semibold px-5 py-2 rounded-lg text-[13px] hover:opacity-90 transition-opacity shadow-sm inline-flex items-center gap-2"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Apply Now
          </a>
          <a
            href="https://learn.digitalschool.moe.edu.gy/"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-navy text-primary-foreground font-semibold px-5 py-2 rounded-lg text-[13px] hover:opacity-90 transition-opacity shadow-sm inline-flex items-center gap-2"
          >
            <LogIn className="w-3.5 h-3.5" />
            Login
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg transition-colors ${
          (scrolled || !isHomePage) ? "text-foreground hover:bg-muted/60" : "text-primary-foreground hover:bg-primary-foreground/10"
        }`}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden glass-card border-t border-border/30 px-4 py-4 space-y-1 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { handleNavClick(e, link.href); setOpen(false); }}
              className="block text-sm font-medium text-foreground/80 hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-border/30 mt-2">
            <a
              href="https://learn.digitalschool.moe.edu.gy/login/signup.php"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="gradient-gold text-secondary-foreground font-semibold px-5 py-2.5 rounded-lg text-sm text-center shadow-sm inline-flex items-center gap-2 justify-center"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Apply Now
            </a>
            <a
              href="https://learn.digitalschool.moe.edu.gy/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-navy text-primary-foreground font-semibold px-5 py-2.5 rounded-lg text-sm text-center shadow-sm inline-flex items-center gap-2 justify-center"
            >
              <LogIn className="w-3.5 h-3.5" />
              Login
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
