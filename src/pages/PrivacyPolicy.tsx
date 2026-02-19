import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Eye, Settings, Gift, RefreshCw, Mail } from "lucide-react";

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content:
      "We collect information necessary to provide our educational services, including personal details, academic progress, and usage data.",
  },
  {
    icon: Settings,
    title: "How We Use Your Information",
    content:
      "Your information is used to personalize your learning experience, track progress, and improve our services.",
  },
  {
    icon: Gift,
    title: "Free Educational Platform",
    content:
      "Our app does not include any paid digital content or services. It is a completely free educational platform developed for Guyana to provide access to learning resources for K-12 students. All features and content are entirely free for users.",
  },
  {
    icon: RefreshCw,
    title: "Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy to reflect changes in app features, services, or regulatory requirements. Updates will be posted within the app and take immediate effect upon publication.",
  },
  {
    icon: Mail,
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy or your data, please contact us at: info@guyanadigitalschool.com",
  },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Guyana Digital School";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-navy pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--secondary)/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold mb-6 tracking-wide uppercase">
            <Shield className="w-3.5 h-3.5" />
            Your Privacy
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            At Guyana Digital, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div
                key={section.title}
                className="glass-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-secondary/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <section.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                      {i + 1}. {section.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
