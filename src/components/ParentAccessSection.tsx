import { Users, Eye, Bell, LogIn, ShieldCheck, BarChart3, Sparkles, UserCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import WaveDecoration from "@/components/WaveDecoration";

const features = [
  {
    icon: UserCheck,
    title: "Auto Account Creation",
    description: "When a student submits their application with primary contact details, a parent/guardian account is automatically created. Login credentials are sent via email.",
  },
  {
    icon: Users,
    title: "Multi-Student Dashboard",
    description: "If multiple students list the same primary contact person, all students are linked to one parent account for a unified overview.",
  },
  {
    icon: BarChart3,
    title: "Track Student Progress",
    description: "View grades, assignment submissions, course completion status, and overall academic performance for each enrolled student.",
  },
  {
    icon: Bell,
    title: "Notifications & Alerts",
    description: "Receive real-time notifications about student activities, upcoming deadlines, grades, and important school announcements.",
  },
  {
    icon: LogIn,
    title: "Login as Student",
    description: "Parents can switch to their student's view to check subject progress, upcoming classes, and learning materials directly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description: "Each parent account is securely linked only to their designated students, ensuring privacy and data protection at all levels.",
  },
];

const ParentAccessSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="parent-access" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-navy" />
      <WaveDecoration position="top" flip />
      <WaveDecoration position="bottom" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "30px 30px" }} />
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/[0.08] rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/[0.06] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Parent Portal
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-primary-foreground mb-4">
            Parent & Guardian{" "}
            <span className="text-gradient-gold">Access</span>
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Stay connected with your child's education. Monitor progress, receive notifications, and access the LMS — all from your own dedicated parent account.
          </p>
        </div>

        {/* How it Works Mini-Flow */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="glass-card-dark rounded-2xl p-6 md:p-8 bg-primary-foreground/[0.06] backdrop-blur-md border border-primary-foreground/[0.1]">
            <h3 className="font-display font-bold text-primary-foreground text-lg mb-6 text-center">How It Works</h3>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
              {[
                { step: "1", text: "Student fills application with parent details" },
                { step: "2", text: "Parent account auto-created & credentials emailed" },
                { step: "3", text: "Parent logs in to track all linked students" },
              ].map((item, i) => (
                <div key={i} className="flex-1 flex items-center gap-3 sm:flex-col sm:text-center">
                  <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-secondary-foreground font-bold text-sm shrink-0 shadow-lg shadow-secondary/20">
                    {item.step}
                  </div>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">{item.text}</p>
                  {i < 2 && (
                    <div className="hidden sm:block w-8 h-[2px] bg-secondary/30 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
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
