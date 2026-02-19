import { useState } from "react";
import { ChevronDown, Sparkles, BookOpen, GraduationCap, HelpCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  { id: "general", label: "General", icon: HelpCircle },
  { id: "admissions", label: "Admissions", icon: GraduationCap },
  { id: "academics", label: "Academics", icon: BookOpen },
];

const faqsByCategory: Record<string, { q: string; a: string }[]> = {
  general: [
    { q: "What classes does Kingsbridge Academy offer?", a: "We offer Classes 1 through 8 (Primary and Upper Primary)." },
    { q: "What is the medium of instruction?", a: "The medium of instruction is English with Hindi as a subject. We follow a bilingual approach to ensure students are comfortable in both languages." },
    { q: "Is the school recognized?", a: "Yes, Kingsbridge Academy is a recognized private unaided school under the Government of Bihar (UDISE: 10222601908)." },
    { q: "What are the school timings?", a: "School operates Monday to Saturday, 8:00 AM to 2:00 PM." },
  ],
  admissions: [
    { q: "What is the admission process?", a: "Visit the school, collect the application form, submit with required documents, and receive confirmation. Admissions are open throughout the year subject to seat availability." },
    { q: "What documents are required?", a: "Birth certificate, Aadhaar card (student & parent), transfer certificate from previous school (if applicable), and 2 passport-size photographs." },
    { q: "What is the fee structure?", a: "Our fees are designed to be affordable. Please contact the school office at +91 9931344055 for the current fee details." },
  ],
  academics: [
    { q: "What curriculum does the school follow?", a: "We follow the curriculum prescribed by the Bihar State Education Board, supplemented with co-curricular activities for holistic development." },
    { q: "Are there any extracurricular activities?", a: "Yes! We offer sports, drawing, music, dance, annual cultural programs, and celebrations of national festivals." },
    { q: "How do you track student progress?", a: "Through regular class tests, periodic assessments, term examinations, and parent-teacher meetings." },
  ],
};

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation({ threshold: 0.05 });

  const activeFaqs = faqsByCategory[activeCategory] || [];

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(0);
  };

  return (
    <section id="faqs" className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden section-glow">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/[0.04] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-14 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Got questions? We've got answers. Browse by category below.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 px-0">
          <div className="inline-flex flex-wrap justify-center gap-1.5 sm:gap-2 bg-muted/50 rounded-2xl p-1 sm:p-1.5 backdrop-blur-sm border border-border/30">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id ? "gradient-navy text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <cat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div ref={listRef} className="max-w-3xl mx-auto space-y-3">
          {activeFaqs.map((faq, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${openIndex === i ? "modern-shadow border-secondary/20" : "hover:modern-shadow"} ${listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className={`font-semibold text-sm pr-4 font-sans transition-colors ${openIndex === i ? "text-secondary" : "text-card-foreground group-hover:text-secondary"}`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-all duration-300 ${openIndex === i ? "rotate-180 text-secondary" : "text-muted-foreground"}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
