import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Shield, Scale, AlertTriangle, RefreshCw } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Use of Services",
    content:
      "Kingsbridge Academy provides educational services through our school campus in Pirpainti, Bhagalpur. We reserve the right to modify any aspect of our services at any time. Parents and guardians are responsible for ensuring students adhere to school policies and guidelines.",
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    content:
      "All content provided by Kingsbridge Academy, including but not limited to educational materials, images, and documents, is the property of Kingsbridge Academy. Unauthorized reproduction or distribution is prohibited.",
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content:
      "Kingsbridge Academy is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services beyond the scope of our educational programs.",
  },
  {
    icon: Scale,
    title: "Governing Law",
    content:
      "These terms are governed by the laws of India and the State of Bihar. Any disputes arising from the use of our services shall be resolved in the courts of Bhagalpur, Bihar.",
  },
  {
    icon: RefreshCw,
    title: "Changes to Terms",
    content:
      "We reserve the right to update these terms at any time. Any changes will be effective immediately upon posting on our website or communication to parents.",
  },
];

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Kingsbridge Academy";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="gradient-navy pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--secondary)/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold mb-6 tracking-wide uppercase">
            <FileText className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Terms & Conditions</h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Welcome to Kingsbridge Academy. By accessing our website and using our services, you agree to abide by these terms and conditions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div key={section.title} className="glass-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-secondary/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <section.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">{i + 1}. {section.title}</h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <blockquote className="text-lg md:text-xl font-display italic text-foreground/70 border-l-4 border-secondary pl-6 inline-block text-left">
              "Kingsbridge Academy — Nurturing Young Minds, Building Bright Futures."
            </blockquote>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
