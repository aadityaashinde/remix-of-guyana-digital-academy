import { Monitor, BookOpen, Lightbulb, Globe, ArrowDown, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const quadrants = [
  {
    icon: Monitor,
    title: "Interactive E-Learning",
    description: "Live virtual classrooms with real-time teacher engagement, collaborative discussions, and structured lesson delivery.",
    gradient: "gradient-navy",
    num: "01",
  },
  {
    icon: BookOpen,
    title: "Engaging E-Content",
    description: "On-demand digital resources including video lessons, animations, quizzes, and reading materials.",
    gradient: "gradient-gold",
    num: "02",
  },
  {
    icon: Lightbulb,
    title: "Innovative Enhancements",
    description: "14 unique enrichment activities that go beyond the core curriculum — developing critical thinking and creativity.",
    gradient: "gradient-accent",
    num: "03",
  },
  {
    icon: Globe,
    title: "Activity-Based Learning",
    description: "Hands-on projects, real-world case studies, and practical assessments connecting theory with applications.",
    gradient: "gradient-navy",
    num: "04",
  },
];

const ApproachSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="approach" className="py-24 lg:py-32 bg-muted/50 relative section-glow">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground">
            The Four Quadrant Approach
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            A holistic educational model integrating technology, content, engagement, and hands-on experience.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {quadrants.map((q, i) => (
            <div
              key={q.title}
              className={`glass-card rounded-2xl p-8 hover:modern-shadow-lg hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer ${
                cardsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${q.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <q.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/10 font-sans">{q.num}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-card-foreground mb-3 group-hover:text-secondary transition-colors">{q.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{q.description}</p>
              <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-secondary to-accent mt-5 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#curriculum"
            className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all group"
          >
            Explore Our Curriculum
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
