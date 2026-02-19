import { useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import WaveDecoration from "./WaveDecoration";

const testimonials = [
  {
    name: "Mrs. Meena Devi",
    role: "Parent of Class 3 student",
    quote: "Kingsbridge Academy has been wonderful for my son. The teachers are caring and my child looks forward to going to school every day.",
    initials: "MD",
    color: "bg-[hsl(22,80%,53%)]",
  },
  {
    name: "Mr. Ravi Shankar",
    role: "Parent of Class 6 student",
    quote: "The personal attention each child receives here is remarkable. My daughter's confidence and academic performance have improved tremendously.",
    initials: "RS",
    color: "bg-[hsl(215,58%,26%)]",
  },
  {
    name: "Mrs. Sarita Singh",
    role: "Parent of Class 1 student",
    quote: "As a parent, I feel safe sending my child here. The campus is clean, secure, and the staff is very welcoming.",
    initials: "SS",
    color: "bg-[hsl(146,55%,36%)]",
  },
  {
    name: "Mr. Ajay Kumar",
    role: "Parent of Class 8 student",
    quote: "The discipline and values taught at Kingsbridge have shaped my son into a responsible young man. Highly recommend this school.",
    initials: "AK",
    color: "bg-[hsl(22,80%,53%)]",
  },
  {
    name: "Mrs. Poonam Gupta",
    role: "Parent of Class 4 student",
    quote: "Affordable fees, quality education, and excellent extracurricular activities — what more could a parent ask for?",
    initials: "PG",
    color: "bg-[hsl(215,58%,26%)]",
  },
  {
    name: "Mr. Sunil Prasad",
    role: "Parent of Class 5 student",
    quote: "The regular PTMs and transparent communication give us confidence that our children are in good hands.",
    initials: "SP",
    color: "bg-[hsl(146,55%,36%)]",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goTo = useCallback(
    (dir: "prev" | "next") => {
      setIsAutoPlaying(false);
      setActiveIndex((prev) => dir === "prev" ? (prev <= 0 ? maxIndex : prev - 1) : prev >= maxIndex ? 0 : prev + 1);
    },
    [maxIndex]
  );

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-primary/[0.03] via-background to-background" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <Quote className="absolute top-16 right-[15%] w-20 h-20 text-secondary/10 rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-semibold text-secondary">Parent Voices</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            What Parents <span className="text-gradient-gold">Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the parents who trust Kingsbridge Academy with their children's education.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button onClick={() => goTo("prev")} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" aria-label="Previous testimonial">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => goTo("next")} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" aria-label="Next testimonial">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden mx-6 md:mx-8">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * (100 / visibleCount)}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="shrink-0 px-3" style={{ width: `${100 / visibleCount}%` }}>
                  <div
                    className={`group relative h-full rounded-2xl bg-card border border-border/60 p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-secondary/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                    style={{ transitionDelay: `${(i % visibleCount) * 150}ms` }}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                  >
                    <div className="absolute top-4 right-4">
                      <Quote className="w-8 h-8 text-secondary/20 group-hover:text-secondary/40 transition-colors duration-300" />
                    </div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 line-clamp-5">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-5" />
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center ring-2 ring-secondary/30 shadow-md`}>
                        <span className="text-white font-bold text-sm">{t.initials}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{t.name}</h4>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-secondary/0 via-secondary/60 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} onClick={() => { setActiveIndex(i); setIsAutoPlaying(false); }} className={`rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 h-2.5 bg-secondary" : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground/40"}`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>

      <WaveDecoration position="bottom" />
    </section>
  );
};

export default TestimonialsSection;
