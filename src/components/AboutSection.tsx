import { useState } from "react";
import { Target, Heart, Trophy, Shield, Sparkles, CheckCircle2, ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "A well-structured curriculum following state guidelines, with emphasis on conceptual learning and regular assessments.",
    gradient: "gradient-navy",
    stats: "Classes 1–8",
  },
  {
    icon: Heart,
    title: "Character Building",
    desc: "Morning assemblies, value education classes, and discipline-oriented culture shape responsible citizens.",
    gradient: "gradient-gold",
    stats: "Core Values",
  },
  {
    icon: Trophy,
    title: "Co-curricular Activities",
    desc: "Sports, drawing, dance, music, and annual cultural events ensure holistic development beyond academics.",
    gradient: "gradient-accent",
    stats: "10+ Activities",
  },
  {
    icon: Shield,
    title: "Safe & Caring Environment",
    desc: "A secure, clean campus with CCTV monitoring, safe drinking water, and a supportive atmosphere.",
    gradient: "gradient-red",
    stats: "Safe Campus",
  },
];

const highlights = [
  "Recognized private school (UDISE: 10222601908)",
  "Experienced and dedicated teaching staff",
  "Small class sizes for personalized attention",
  "Regular parent-teacher meetings",
  "Annual sports day, cultural programs & celebrations",
];

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: highlightsRef, isVisible: highlightsVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative section-glow overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--secondary)) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        maskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 80%)',
        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 80%)',
      }} />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div
            ref={sectionRef}
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground leading-[1.15] mb-6">
              Welcome to{" "}
              <span className="text-gradient-gold">Kingsbridge Academy</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
              Kingsbridge Academy was founded in April 2019 with a vision to provide quality, affordable education to the children of Pirpainti and surrounding areas in Bhagalpur district. As a recognized private school offering Classes 1 through 8, we are committed to creating a strong academic foundation while nurturing the character and creativity of every student.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px] mb-8">
              Our school blends modern teaching methodologies with traditional Indian values. We believe that every child is unique and deserves an environment where they can explore, learn, and grow at their own pace — supported by passionate teachers and an engaged school community.
            </p>
            <a
              href="#academics"
              className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all group"
            >
              Explore our academics
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: School campus placeholder */}
          <div className={`hidden md:block relative transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative w-full aspect-[4/3] max-w-[500px] ml-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-border/50 flex flex-col items-center justify-center">
              <GraduationCap className="w-20 h-20 text-primary/20 mb-4" />
              <p className="text-muted-foreground text-sm font-medium">School Campus</p>
              <p className="text-muted-foreground/60 text-xs mt-1">Photo coming soon</p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div
          ref={pillarsRef}
          className={`mb-20 transition-all duration-700 ${pillarsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-wrap gap-2 mb-8">
            {pillars.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setActivePillar(i)}
                className={`inline-flex items-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activePillar === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                    : "glass-card text-muted-foreground hover:text-foreground hover:modern-shadow"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.title}</span>
                <span className="sm:hidden">{item.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div key={activePillar} className="glass-card rounded-2xl p-8 lg:p-10 animate-fade-in">
              <div className={`w-14 h-14 rounded-2xl ${pillars[activePillar].gradient} flex items-center justify-center mb-6 shadow-lg`}>
                {(() => { const Icon = pillars[activePillar].icon; return <Icon className="w-7 h-7 text-primary-foreground" />; })()}
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">{pillars[activePillar].title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{pillars[activePillar].desc}</p>
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-bold px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                {pillars[activePillar].stats}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {pillars.map((item, i) => (
                <div
                  key={item.title}
                  onClick={() => setActivePillar(i)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 group ${
                    activePillar === i
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "glass-card hover:modern-shadow hover:-translate-y-0.5"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all ${activePillar === i ? "bg-primary-foreground/20" : item.gradient}`}>
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h4 className={`font-semibold text-sm mb-1 ${activePillar === i ? "text-primary-foreground" : "text-foreground"}`}>{item.title}</h4>
                  <p className={`text-xs ${activePillar === i ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{item.stats}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote + Highlights */}
        <div
          ref={highlightsRef}
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start transition-all duration-700 ${highlightsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="glass-card rounded-2xl p-8 lg:p-10 border-l-4 border-secondary relative overflow-hidden group hover:modern-shadow-lg transition-all duration-500">
            <div className="absolute -top-4 -left-4 text-secondary/10 text-[120px] font-display leading-none select-none group-hover:text-secondary/15 transition-colors">"</div>
            <p className="text-foreground font-display text-lg lg:text-xl italic leading-relaxed relative z-10 mb-5">
              At Kingsbridge Academy, we don't just teach — we inspire. Every child who walks through our doors leaves with confidence, knowledge, and strong values.
            </p>
            <p className="text-muted-foreground text-sm font-semibold mb-6">— Kingsbridge Academy Vision</p>
            <div className="h-px bg-border mb-6" />
            <h4 className="font-display font-bold text-foreground mb-3 text-lg">Our Vision</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To be the most trusted and nurturing educational institution in the Pirpainti region, empowering children with knowledge, character, and the skills to become responsible citizens of tomorrow.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground text-xl mb-6">
              What Makes Us <span className="text-gradient-gold">Different</span>
            </h3>
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 glass-card rounded-xl p-4 hover:modern-shadow hover:-translate-y-0.5 transition-all duration-400 ${highlightsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full gradient-accent flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-foreground" />
                  </div>
                  <p className="text-foreground text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 gradient-gold text-secondary-foreground font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-all shadow-lg shadow-secondary/20 hover:scale-[1.02]"
          >
            <GraduationCap className="w-4 h-4" />
            Enquire About Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
