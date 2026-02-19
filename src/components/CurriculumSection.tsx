import { useState } from "react";
import { BookOpen, Sparkles, Calculator, Globe, Palette, Monitor, Dumbbell, PenTool, Languages, FlaskConical, BookText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const primarySubjects = [
  { name: "Hindi", icon: Languages, desc: "Reading, writing, and comprehension in Hindi" },
  { name: "English", icon: BookText, desc: "Basic English literacy and communication skills" },
  { name: "Mathematics", icon: Calculator, desc: "Number concepts, arithmetic, and basic geometry" },
  { name: "Environmental Studies (EVS)", icon: Globe, desc: "Understanding nature, society, and surroundings" },
  { name: "General Knowledge", icon: BookOpen, desc: "Current affairs, awareness, and logical thinking" },
  { name: "Drawing", icon: PenTool, desc: "Creative expression through art and sketching" },
  { name: "Moral Science", icon: BookText, desc: "Values, ethics, and character education" },
  { name: "Computer Basics", icon: Monitor, desc: "Introduction to computers (Class 3 onwards)" },
];

const upperPrimarySubjects = [
  { name: "Hindi", icon: Languages, desc: "Advanced Hindi grammar, literature, and composition" },
  { name: "English", icon: BookText, desc: "Grammar, comprehension, and essay writing" },
  { name: "Mathematics", icon: Calculator, desc: "Algebra, geometry, and advanced arithmetic" },
  { name: "Science", icon: FlaskConical, desc: "Physics, chemistry, and biology fundamentals" },
  { name: "Social Science", icon: Globe, desc: "History, geography, and civics" },
  { name: "Sanskrit", icon: Languages, desc: "Introduction to Sanskrit language and literature" },
  { name: "Computer Science", icon: Monitor, desc: "Digital literacy and basic programming concepts" },
  { name: "Physical Education", icon: Dumbbell, desc: "Sports, fitness, and health education" },
  { name: "Art & Craft", icon: Palette, desc: "Visual arts, craft work, and creative projects" },
];

const CurriculumSection = () => {
  const [activeTab, setActiveTab] = useState<"primary" | "upper">("primary");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const subjects = activeTab === "primary" ? primarySubjects : upperPrimarySubjects;

  return (
    <section id="academics" className="py-24 lg:py-32 bg-background relative overflow-hidden section-glow">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/[0.04] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/[0.04] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Academics
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground">
            Our Curriculum
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Our curriculum follows the Bihar State Education Board guidelines, ensuring a comprehensive and well-rounded education for every student.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("primary")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all text-sm ${
              activeTab === "primary"
                ? "gradient-navy text-primary-foreground modern-shadow scale-105"
                : "glass-card text-muted-foreground hover:scale-[1.02]"
            }`}
          >
            Primary (Classes 1–5)
          </button>
          <button
            onClick={() => setActiveTab("upper")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all text-sm ${
              activeTab === "upper"
                ? "gradient-navy text-primary-foreground modern-shadow scale-105"
                : "glass-card text-muted-foreground hover:scale-[1.02]"
            }`}
          >
            Upper Primary (Classes 6–8)
          </button>
        </div>

        {/* Subjects grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {subjects.map((subject, i) => (
            <div
              key={`${activeTab}-${subject.name}`}
              className={`group glass-card rounded-2xl p-5 hover:modern-shadow-lg hover:-translate-y-1.5 transition-all duration-500 ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-navy flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <subject.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="text-sm font-semibold text-card-foreground mb-1.5 group-hover:text-secondary transition-colors leading-snug">
                {subject.name}
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {subject.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
