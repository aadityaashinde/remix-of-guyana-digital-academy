import { useState } from "react";
import { BookOpen, Search, FlaskConical, Briefcase, Palette, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gradeData } from "@/lib/subjectData";

const categories = [
  { label: "All", value: "All", icon: BookOpen },
  { label: "Science", value: "Science", icon: FlaskConical },
  { label: "Business", value: "Business", icon: Briefcase },
  { label: "Arts", value: "Arts", icon: Palette },
];

const CurriculumSection = () => {
  const [activeGrade, setActiveGrade] = useState("Grade 10");
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const subjects = gradeData[activeGrade];
  const filtered = subjects.filter((s) => {
    const matchCategory = activeCategory === "All" || s.category === activeCategory;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const gradeNumber = activeGrade === "Grade 10" ? "10" : "11";

  return (
    <section id="curriculum" className="py-24 lg:py-32 bg-background relative overflow-hidden section-glow">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/[0.04] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/[0.04] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Curriculum
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground">
            Grade-Wise Subjects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Our curriculum is aligned with CXC standards, offering a comprehensive range of subjects to prepare students for CSEC examinations.
          </p>
        </div>

        {/* Grade tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {Object.keys(gradeData).map((grade) => (
            <button
              key={grade}
              onClick={() => { setActiveGrade(grade); setActiveCategory("All"); setSearch(""); }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all text-sm ${
                activeGrade === grade
                  ? "gradient-navy text-primary-foreground modern-shadow scale-105"
                  : "glass-card text-muted-foreground hover:scale-[1.02]"
              }`}
            >
              {grade}
            </button>
          ))}
        </div>

        {/* Search + filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search subjects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary/30 transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    activeCategory === cat.value
                      ? "gradient-gold text-secondary-foreground scale-105 shadow-md"
                      : "glass-card text-muted-foreground hover:scale-[1.02]"
                  }`}
                >
                  <cat.icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Subjects grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {filtered.map((subject, i) => (
            <a
              key={subject.name}
              href={`/course/${gradeNumber}/${subject.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group cursor-pointer rounded-2xl overflow-hidden glass-card hover:modern-shadow-lg hover:-translate-y-1.5 transition-all duration-500 no-underline ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Image area */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className={`absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm ${
                  subject.category === "Science" ? "bg-accent/80 text-accent-foreground" :
                  subject.category === "Business" ? "bg-secondary/80 text-secondary-foreground" :
                  "bg-destructive/80 text-destructive-foreground"
                }`}>
                  {subject.category}
                </span>
              </div>

              {/* Content area */}
              <div className="p-4">
                <h4 className="text-sm font-semibold text-card-foreground mb-1.5 group-hover:text-secondary transition-colors leading-snug">
                  {subject.name}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                  {subject.description}
                </p>
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-[10px] font-semibold text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-md">
                    {activeGrade}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border/30">
                  <span className="text-secondary text-xs font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View Details
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <BookOpen className="w-3 h-3 text-secondary" />
                  </div>
                </div>
              </div>
            </a>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No subjects found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
