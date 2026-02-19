import { Users, Shield, Heart, Wallet, BookOpen, MessageSquare, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import WaveDecoration from "@/components/WaveDecoration";

const features = [
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Our teachers are qualified, experienced, and passionate about bringing out the best in every student.",
  },
  {
    icon: Shield,
    title: "Safe & Secure Campus",
    description: "CCTV monitored premises, secure entry/exit, and a clean hygienic environment for your child.",
  },
  {
    icon: Heart,
    title: "Individual Attention",
    description: "With small class sizes, every student receives the focused guidance they need to thrive.",
  },
  {
    icon: Wallet,
    title: "Affordable Fees",
    description: "Quality education shouldn't be a luxury. Our fee structure is designed to be accessible for families across the community.",
  },
  {
    icon: BookOpen,
    title: "Strong Values System",
    description: "We emphasize respect, honesty, and responsibility alongside academic learning.",
  },
  {
    icon: MessageSquare,
    title: "Active Parent Engagement",
    description: "Regular PTMs, open-door policy, and transparent communication keep parents involved in their child's journey.",
  },
];

const ParentAccessSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="why-choose" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-navy" />
      <WaveDecoration position="top" flip />
      <WaveDecoration position="bottom" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "30px 30px" }} />
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/[0.08] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-primary-foreground mb-4">
            Why Choose{" "}
            <span className="text-gradient-gold">Kingsbridge Academy?</span>
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Parents choose us because we provide a safe, nurturing, and academically rigorous environment that brings out the best in every child.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group bg-primary-foreground/[0.06] backdrop-blur-md border border-primary-foreground/[0.1] rounded-2xl p-6 hover:-translate-y-1 hover:border-secondary/30 transition-all duration-500 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-secondary/15">
                <feature.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground text-[15px] mb-2 group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentAccessSection;
