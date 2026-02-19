import { useState } from "react";
import { Target, Lightbulb, GraduationCap, Sparkles, Monitor, ChevronRight, Play, CheckCircle2, ArrowRight, MonitorPlay, Cpu, BookOpen, UserCheck, FlaskConical, ClipboardCheck, Layers, Video, Wifi, Brain, Pencil, Globe, Headphones, Code, Atom } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import gdsLogo from "@/assets/logo-compact.png";

const pillars = [
  {
    icon: Target,
    title: "Expanding Access",
    desc: "Reaching students in remote and underserved communities with quality digital education — from Georgetown to the hinterlands.",
    gradient: "gradient-navy",
    stats: "10 Regions",
  },
  {
    icon: Lightbulb,
    title: "Improving Outcomes",
    desc: "Personalized AI-powered learning paths and expert instruction designed to raise academic achievement at every level.",
    gradient: "gradient-gold",
    stats: "95% Pass Rate",
  },
  {
    icon: GraduationCap,
    title: "Future-Ready Skills",
    desc: "Cultivating critical thinking, digital literacy, and the qualities of the Ideal Caribbean Person for tomorrow's world.",
    gradient: "gradient-accent",
    stats: "30+ Subjects",
  },
  {
    icon: Monitor,
    title: "Technology First",
    desc: "Leveraging cutting-edge platforms, interactive simulations, and real-time collaboration tools to transform how students learn.",
    gradient: "gradient-red",
    stats: "AI-Powered",
  },
];

const highlights = [
  "CXC-aligned curriculum for Grades 10 & 11",
  "Live interactive classes with expert teachers",
  "AI-powered tutoring and personalized learning",
  "Accessible from any device, anywhere in Guyana",
  "Free registration for all secondary students",
];

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: highlightsRef, isVisible: highlightsVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative section-glow overflow-hidden">
      {/* Left side decorative pattern - dots grid fading to center */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--secondary)) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        maskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 80%)',
        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 80%)',
      }} />

      {/* Right side decorative pattern - diagonal lines fading to center */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 14px,
          hsl(var(--accent)) 14px,
          hsl(var(--accent)) 15px
        )`,
        maskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 40%, transparent 75%)',
        WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 40%, transparent 75%)',
      }} />

      {/* Top edge - subtle gold wave */}
      <div className="absolute top-0 left-0 w-full h-[300px] opacity-[0.025] pointer-events-none" style={{
        background: `radial-gradient(ellipse 80% 60% at 20% 0%, hsl(var(--secondary)), transparent), radial-gradient(ellipse 60% 50% at 80% 0%, hsl(var(--accent)), transparent)`,
      }} />

      {/* Bottom edge - subtle navy gradient from sides */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] opacity-[0.02] pointer-events-none" style={{
        background: `radial-gradient(ellipse 50% 80% at 0% 100%, hsl(var(--primary)), transparent), radial-gradient(ellipse 50% 80% at 100% 100%, hsl(var(--brand-green)), transparent)`,
      }} />

      {/* Decorative orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/[0.02] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: Text */}
          <div
            ref={sectionRef}
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground leading-[1.15] mb-6">
              What is Guyana{" "}
              <span className="text-gradient-gold">Digital School?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
              The Guyana Digital School is a fully digital learning platform designed to expand access to quality education for students across Guyana. Aligned with CXC standards, it provides a comprehensive, flexible, and engaging learning experience powered by modern technology and expert educators.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px] mb-8">
              Envisioned by His Excellency Dr. Mohamed Irfaan Ali, this initiative bridges classrooms nationwide — ensuring every student, whether in Georgetown or deep in the hinterlands, has access to world-class resources, AI-powered tutoring, and a connected learning community.
            </p>
            <a
              href="#approach"
              className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all group"
            >
              Learn how it works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Learning ecosystem graphic */}
          <div
            className={`hidden md:block relative transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full aspect-[4/5] max-w-[500px] ml-auto">
              {/* Background flow curves */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 500 625" fill="none">
                <path d="M250 80 Q380 150 350 312 Q320 475 250 545" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeDasharray="6 4" />
                <path d="M250 80 Q120 150 150 312 Q180 475 250 545" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeDasharray="6 4" />
                <circle cx="250" cy="312" r="180" stroke="hsl(var(--secondary))" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.5" />
                <circle cx="250" cy="312" r="120" stroke="hsl(var(--accent))" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.4" />
              </svg>

              {/* Connecting lines from center to nodes */}
              <svg className="absolute inset-0 w-full h-full z-[1]" viewBox="0 0 500 625" fill="none">
                <line x1="250" y1="290" x2="390" y2="110" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="4 3" opacity="0.2" />
                <line x1="230" y1="300" x2="70" y2="220" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4 3" opacity="0.2" />
                <line x1="270" y1="340" x2="400" y2="450" stroke="hsl(var(--destructive))" strokeWidth="1" strokeDasharray="4 3" opacity="0.2" />
                <line x1="230" y1="340" x2="80" y2="440" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 3" opacity="0.2" />
                <line x1="240" y1="270" x2="120" y2="90" stroke="hsl(var(--brand-green))" strokeWidth="1" strokeDasharray="4 3" opacity="0.2" />
                <line x1="280" y1="310" x2="430" y2="280" stroke="hsl(var(--brand-gold))" strokeWidth="1" strokeDasharray="4 3" opacity="0.2" />
                <line x1="250" y1="360" x2="250" y2="540" stroke="hsl(var(--brand-red))" strokeWidth="1" strokeDasharray="4 3" opacity="0.2" />
              </svg>

              {/* Virtual Lab - Top left */}
              <div className="absolute top-4 left-6 w-[110px] h-[110px] rounded-full backdrop-blur-md border border-brand-green/25 bg-brand-green/[0.08] animate-[float_7.5s_ease-in-out_infinite_0.3s] flex flex-col items-center justify-center gap-1.5 z-[2]">
                <div className="w-9 h-9 rounded-full bg-brand-green/15 border border-brand-green/25 flex items-center justify-center">
                  <FlaskConical className="w-[18px] h-[18px] text-brand-green" />
                </div>
                <p className="text-foreground font-semibold text-[10px] text-center leading-tight">Virtual<br/>Lab</p>
              </div>

              {/* Digital Learning - Top right */}
              <div className="absolute top-8 right-4 w-[120px] h-[120px] rounded-full backdrop-blur-md border border-accent/20 bg-accent/[0.08] animate-[float_7s_ease-in-out_infinite] flex flex-col items-center justify-center gap-1.5 z-[2]">
                <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center">
                  <MonitorPlay className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground font-semibold text-[10px] text-center leading-tight">Digital<br/>Learning</p>
              </div>

              {/* AI Powered - Left middle */}
              <div className="absolute top-[30%] -left-2 w-[115px] h-[115px] rounded-full backdrop-blur-md border border-secondary/25 bg-secondary/[0.08] animate-[float_6s_ease-in-out_infinite_0.8s] flex flex-col items-center justify-center gap-1.5 z-[2]">
                <div className="w-9 h-9 rounded-full bg-secondary/15 border border-secondary/25 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-foreground font-semibold text-[10px] text-center leading-tight">AI-Powered<br/>Learning</p>
              </div>

              {/* Self Assessments - Right middle */}
              <div className="absolute top-[38%] right-0 w-[110px] h-[110px] rounded-full backdrop-blur-md border border-brand-gold/20 bg-brand-gold/[0.08] animate-[float_6.5s_ease-in-out_infinite_1.8s] flex flex-col items-center justify-center gap-1.5 z-[2]">
                <div className="w-9 h-9 rounded-full bg-brand-gold/15 border border-brand-gold/20 flex items-center justify-center">
                  <ClipboardCheck className="w-[18px] h-[18px] text-brand-gold" />
                </div>
                <p className="text-foreground font-semibold text-[10px] text-center leading-tight">Self<br/>Assessments</p>
              </div>

              {/* Live Classes - Bottom right */}
              <div className="absolute bottom-[18%] right-6 w-[108px] h-[108px] rounded-full backdrop-blur-md border border-destructive/20 bg-destructive/[0.06] animate-[float_8s_ease-in-out_infinite_1.5s] flex flex-col items-center justify-center gap-1.5 z-[2]">
                <div className="w-9 h-9 rounded-full bg-destructive/12 border border-destructive/20 flex items-center justify-center">
                  <Play className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-foreground font-semibold text-[10px] text-center leading-tight">Live<br/>Classes</p>
              </div>

              {/* Self-Paced Learning - Bottom left */}
              <div className="absolute bottom-[20%] left-4 w-[105px] h-[105px] rounded-full backdrop-blur-md border border-primary/15 bg-primary/[0.06] animate-[float_6.5s_ease-in-out_infinite_2.2s] flex flex-col items-center justify-center gap-1.5 z-[2]">
                <div className="w-8 h-8 rounded-full bg-primary/12 border border-primary/15 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-[10px] text-center leading-tight">Self-Paced<br/>Learning</p>
              </div>

              {/* Interactive Content - Bottom center */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[115px] h-[115px] rounded-full backdrop-blur-md border border-brand-red/20 bg-brand-red/[0.07] animate-[float_7s_ease-in-out_infinite_2.8s] flex flex-col items-center justify-center gap-1.5 z-[2]">
                <div className="w-9 h-9 rounded-full bg-brand-red/12 border border-brand-red/20 flex items-center justify-center">
                  <Layers className="w-[18px] h-[18px] text-brand-red" />
                </div>
                <p className="text-foreground font-semibold text-[10px] text-center leading-tight">Interactive<br/>Content</p>
              </div>

              {/* Floating education-themed icons */}
              <div className="absolute top-[18%] right-[38%] w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center animate-[float_5s_ease-in-out_infinite_0.5s] z-[1] backdrop-blur-sm">
                <Video className="w-3.5 h-3.5 text-secondary" />
              </div>
              <div className="absolute top-[12%] left-[38%] w-7 h-7 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center animate-[float_6s_ease-in-out_infinite_1.2s] z-[1] backdrop-blur-sm">
                <Wifi className="w-3 h-3 text-brand-red" />
              </div>
              <div className="absolute top-[48%] left-[22%] w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center animate-[float_4.5s_ease-in-out_infinite_0.8s] z-[1] backdrop-blur-sm rotate-12">
                <Brain className="w-3.5 h-3.5 text-accent" />
              </div>
              <div className="absolute bottom-[30%] right-[25%] w-7 h-7 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center animate-[float_5.5s_ease-in-out_infinite_2s] z-[1] backdrop-blur-sm">
                <Pencil className="w-3 h-3 text-brand-green" />
              </div>
              <div className="absolute top-[60%] right-[42%] w-6 h-6 rounded-md bg-brand-gold/12 border border-brand-gold/20 flex items-center justify-center animate-[float_7s_ease-in-out_infinite_1.5s] z-[1] backdrop-blur-sm -rotate-6">
                <Globe className="w-3 h-3 text-brand-gold" />
              </div>
              <div className="absolute bottom-[38%] left-[35%] w-7 h-7 rounded-lg bg-destructive/8 border border-destructive/15 flex items-center justify-center animate-[float_4s_ease-in-out_infinite_2.5s] z-[1] backdrop-blur-sm rotate-6">
                <Headphones className="w-3 h-3 text-destructive" />
              </div>
              <div className="absolute top-[28%] right-[22%] w-6 h-6 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center animate-[float_6.5s_ease-in-out_infinite_3s] z-[1] backdrop-blur-sm">
                <Code className="w-3 h-3 text-primary" />
              </div>
              <div className="absolute bottom-[12%] left-[28%] w-7 h-7 rounded-md bg-secondary/8 border border-secondary/15 flex items-center justify-center animate-[float_5s_ease-in-out_infinite_0.3s] z-[1] backdrop-blur-sm -rotate-12">
                <Atom className="w-3 h-3 text-secondary" />
              </div>

              {/* Tiny floating accent dots */}
              <div className="absolute top-[22%] right-[32%] w-2 h-2 rounded-full bg-secondary/25 animate-[float_4s_ease-in-out_infinite_1s] z-[1]" />
              <div className="absolute top-[55%] left-[28%] w-2.5 h-2.5 rounded-full bg-accent/20 animate-[float_5s_ease-in-out_infinite_0.5s] z-[1]" />
              <div className="absolute bottom-[35%] right-[30%] w-2 h-2 rounded-full bg-brand-gold/25 animate-[float_4.5s_ease-in-out_infinite_2s] z-[1]" />
              <div className="absolute top-[42%] right-[18%] w-1.5 h-1.5 rounded-full bg-brand-red/30 animate-[float_3.5s_ease-in-out_infinite_1.8s] z-[1]" />
              <div className="absolute bottom-[25%] left-[18%] w-2 h-2 rounded-full bg-brand-green/20 animate-[float_4.2s_ease-in-out_infinite_2.8s] z-[1]" />

              {/* Ripple waves from center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full border-2 border-brand-green/30 animate-[ripple-wave_4s_ease-out_infinite] z-[2] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full border-2 border-secondary/25 animate-[ripple-wave_4s_ease-out_infinite_1s] z-[2] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full border-2 border-brand-red/20 animate-[ripple-wave_4s_ease-out_infinite_2s] z-[2] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full border-2 border-accent/20 animate-[ripple-wave_4s_ease-out_infinite_3s] z-[2] pointer-events-none" />

              {/* Center hub with GDS logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full backdrop-blur-lg border-2 border-secondary/25 bg-card/70 shadow-2xl flex flex-col items-center justify-center z-[3]">
                <img src={gdsLogo} alt="Guyana Digital School" className="w-20 h-20 object-contain" />
                <div className="mt-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-secondary/15 via-accent/10 to-secondary/15 border border-secondary/20">
                  <p className="text-[6.5px] font-semibold tracking-wide text-center leading-tight bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent italic">Empower Your Mind<br/>Learn Without Limits</p>
                </div>
              </div>

              {/* Orbiting rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-dashed border-secondary/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-dashed border-accent/8 animate-[spin_25s_linear_infinite_reverse]" />
            </div>
          </div>
        </div>

        {/* Interactive Pillars - Tab style */}
        <div
          ref={pillarsRef}
          className={`mb-20 transition-all duration-700 ${
            pillarsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Tab buttons */}
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

          {/* Active pillar content */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div
              key={activePillar}
              className="glass-card rounded-2xl p-8 lg:p-10 animate-fade-in"
            >
              <div className={`w-14 h-14 rounded-2xl ${pillars[activePillar].gradient} flex items-center justify-center mb-6 shadow-lg`}>
                {(() => {
                  const Icon = pillars[activePillar].icon;
                  return <Icon className="w-7 h-7 text-primary-foreground" />;
                })()}
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                {pillars[activePillar].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {pillars[activePillar].desc}
              </p>
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-bold px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                {pillars[activePillar].stats}
              </div>
            </div>

            {/* Mini cards grid */}
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
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all ${
                      activePillar === i ? "bg-primary-foreground/20" : item.gradient
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${activePillar === i ? "text-primary-foreground" : "text-primary-foreground"}`} />
                  </div>
                  <h4 className={`font-semibold text-sm mb-1 ${activePillar === i ? "text-primary-foreground" : "text-foreground"}`}>
                    {item.title}
                  </h4>
                  <p className={`text-xs ${activePillar === i ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {item.stats}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Quote + Highlights */}
        <div
          ref={highlightsRef}
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start transition-all duration-700 ${
            highlightsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Quote */}
          <div className="glass-card rounded-2xl p-8 lg:p-10 border-l-4 border-secondary relative overflow-hidden group hover:modern-shadow-lg transition-all duration-500">
            <div className="absolute -top-4 -left-4 text-secondary/10 text-[120px] font-display leading-none select-none group-hover:text-secondary/15 transition-colors">"</div>
            <p className="text-foreground font-display text-lg lg:text-xl italic leading-relaxed relative z-10 mb-5">
              Guyana Digital School — where education meets innovation for a brighter tomorrow. Our promise is that no child will be left behind.
            </p>
            <p className="text-muted-foreground text-sm font-semibold mb-6">
              — Guyana Digital School Mission
            </p>
            <div className="h-px bg-border mb-6" />
            <h4 className="font-display font-bold text-foreground mb-3 text-lg">Our Vision</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To create a world where geography is no barrier to quality education. By 2030, every secondary student in Guyana will have access to personalized, AI-enhanced learning that prepares them for success in the Caribbean and beyond.
            </p>
          </div>

          {/* Highlights checklist */}
          <div>
            <h3 className="font-display font-bold text-foreground text-xl mb-6">
              What Makes Us <span className="text-gradient-gold">Different</span>
            </h3>
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 glass-card rounded-xl p-4 hover:modern-shadow hover:-translate-y-0.5 transition-all duration-400 ${
                    highlightsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
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

        {/* Centered CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 gradient-gold text-secondary-foreground font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-all shadow-lg shadow-secondary/20 hover:scale-[1.02]"
          >
            <Play className="w-4 h-4" />
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
