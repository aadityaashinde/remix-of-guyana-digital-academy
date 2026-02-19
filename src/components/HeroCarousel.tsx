import { useState, useEffect } from "react";
import { GraduationCap, Shield, Users, Heart, BookOpen, Trophy, Palette, Star, Phone, ArrowRight } from "lucide-react";

const slides = [
  {
    badge: "Since 2019",
    heading: (
      <>
        Where Every Child's{" "}
        <span className="text-gradient-gold">Potential</span>{" "}
        Becomes Reality
      </>
    ),
    description:
      "Kingsbridge Academy provides a nurturing and stimulating learning environment for children from Classes 1 to 8, nestled in the heart of Pirpainti, Bhagalpur.",
    pills: [
      { icon: BookOpen, label: "Holistic Education" },
      { icon: Shield, label: "Safe Campus" },
      { icon: Users, label: "Experienced Faculty" },
    ],
    cta1: { label: "Enquire Now", href: "#contact", icon: Phone },
    cta2: { label: "Explore Academics", href: "#academics", icon: BookOpen },
  },
  {
    badge: "Holistic Development",
    heading: (
      <>
        Beyond Textbooks — Shaping{" "}
        <span className="text-gradient-gold">Future Leaders</span>
      </>
    ),
    description:
      "From academics to sports, arts to values — we focus on all-round development that prepares students for life, not just exams.",
    pills: [
      { icon: Trophy, label: "Sports & Games" },
      { icon: Palette, label: "Arts & Creativity" },
      { icon: Heart, label: "Value Education" },
    ],
    cta1: { label: "View Our Programs", href: "#academics", icon: BookOpen },
    cta2: { label: "Meet Our Faculty", href: "#faculty", icon: Users },
  },
  {
    badge: "Community & Values",
    heading: (
      <>
        A School That Feels Like{" "}
        <span className="text-gradient-gold">Family</span>
      </>
    ),
    description:
      "With dedicated teachers, involved parents, and a close-knit community — your child gets the personal attention they deserve.",
    pills: [
      { icon: Users, label: "Parent-Teacher Connect" },
      { icon: GraduationCap, label: "Small Class Sizes" },
      { icon: Star, label: "Individual Attention" },
    ],
    cta1: { label: "Admissions Open", href: "#admissions", icon: GraduationCap },
    cta2: { label: "Contact Us", href: "#contact", icon: Phone },
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[100svh]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ${
              current === i ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,58%,22%)] via-[hsl(215,58%,30%)] to-[hsl(22,80%,40%)]" />
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-end md:items-center min-h-[100svh]">
              <div className="max-w-3xl text-left pb-20 pt-8 md:py-24">
                <span className="inline-flex items-center gap-2 bg-secondary/15 text-secondary text-xs font-bold px-5 py-2 rounded-full mb-5 md:mb-8 uppercase tracking-wider border border-secondary/20 backdrop-blur-sm">
                  <Star className="w-3.5 h-3.5" />
                  {slide.badge}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground mb-3 sm:mb-6 leading-[1.15]">
                  {slide.heading}
                </h1>
                <p className="text-primary-foreground/65 text-sm sm:text-base lg:text-lg mb-4 sm:mb-8 max-w-2xl leading-relaxed">
                  {slide.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-start gap-2 sm:gap-3 mb-6 sm:mb-10">
                  {slide.pills.map((pill) => (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary-foreground/[0.08] backdrop-blur-sm border border-primary-foreground/[0.12] text-primary-foreground/80 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                    >
                      <pill.icon className="w-4 h-4 text-secondary" />
                      {pill.label}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 justify-start">
                  <a
                    href={slide.cta1.href}
                    onClick={(e) => handleClick(e, slide.cta1.href)}
                    className="gradient-gold text-secondary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm hover:opacity-90 transition-all inline-flex items-center gap-2 justify-center shadow-lg shadow-secondary/20 hover:shadow-secondary/30 hover:scale-[1.02]"
                  >
                    <slide.cta1.icon className="w-4 h-4" />
                    {slide.cta1.label}
                  </a>
                  <a
                    href={slide.cta2.href}
                    onClick={(e) => handleClick(e, slide.cta2.href)}
                    className="bg-primary-foreground/[0.08] backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm hover:bg-primary-foreground/[0.15] hover:border-primary-foreground/40 transition-all inline-flex items-center gap-2 justify-center"
                  >
                    <slide.cta2.icon className="w-4 h-4" />
                    {slide.cta2.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? "bg-secondary w-8" : "bg-primary-foreground/30 w-2 hover:bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
