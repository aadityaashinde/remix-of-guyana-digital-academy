import { useState, useEffect } from "react";
import { PlayCircle, UserPlus, BookOpen, GraduationCap, ClipboardList, MonitorPlay, Calendar, Cpu } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide1.jpg";
import heroSlide1Tablet from "@/assets/hero-slide1-tablet.jpg";
import heroSlide1Mobile from "@/assets/hero-slide1-mobile.jpg";
import heroSlide3 from "@/assets/hero-slide3.jpg";
import heroSlide3Tablet from "@/assets/hero-slide3-tablet.jpg";
import heroSlide3Mobile from "@/assets/hero-slide3-mobile.jpg";
import heroSlide2Students from "@/assets/hero-slide2-students.jpg";
import heroSlide2Tablet from "@/assets/hero-slide2-tablet.jpg";
import heroSlide2Mobile from "@/assets/hero-slide2-mobile.jpg";

const slides = [
  {
    image: heroSlide1,
    tabletImage: heroSlide1Tablet,
    mobileImage: heroSlide1Mobile,
    badge: "A Presidential Vision",
    heading: (
      <>
        Transforming Guyana's{" "}
        <span className="text-gradient-gold">Education Landscape</span>
      </>
    ),
    description:
      "An ambitious initiative by His Excellency Dr. Mohamed Irfaan Ali to build a comprehensive digital education ecosystem for every student in Guyana.",
    pills: [
      { icon: MonitorPlay, label: "Interactive Live Sessions" },
      { icon: Calendar, label: "Flexible Scheduling" },
      { icon: Cpu, label: "AI-Powered Learning" },
    ],
    cta1: { label: "Register Now", href: "https://learn.digitalschool.moe.edu.gy/login/signup.php", external: true, icon: GraduationCap },
    cta2: { label: "How to Apply", href: "#admissions", icon: ClipboardList },
  },
  {
    image: heroSlide2Students,
    tabletImage: heroSlide2Tablet,
    mobileImage: heroSlide2Mobile,
    badge: "AI-Powered Learning",
    heading: (
      <>
        Learn Smarter with{" "}
        <span className="text-gradient-gold">Digital Innovation</span>
      </>
    ),
    description:
      "Interactive virtual classrooms, AI-assisted tutoring, and personalized learning paths — designed to help you master every CSEC subject from anywhere.",
    pills: [
      { icon: MonitorPlay, label: "Virtual Classrooms" },
      { icon: Cpu, label: "AI Tutoring" },
      { icon: BookOpen, label: "CSEC Aligned" },
    ],
    cta1: { label: "Explore Courses", href: "#curriculum", icon: BookOpen },
    cta2: { label: "View Schedule", href: "#schedule", icon: PlayCircle },
  },
  {
    image: heroSlide3,
    tabletImage: heroSlide3Tablet,
    mobileImage: heroSlide3Mobile,
    badge: "Built for Tomorrow",
    heading: (
      <>
        A Connected Nation Through{" "}
        <span className="text-gradient-gold">Digital Education</span>
      </>
    ),
    description:
      "From Georgetown to the hinterlands — bridging every classroom with world-class resources, AI tutors, and a national learning network.",
    pills: [
      { icon: MonitorPlay, label: "Nationwide Access" },
      { icon: Calendar, label: "Self-Paced Learning" },
      { icon: Cpu, label: "Future-Ready Skills" },
    ],
    cta1: { label: "How to Register", href: "#admissions", icon: UserPlus },
    cta2: { label: "Our Approach", href: "#approach", icon: BookOpen },
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
            {/* Background image */}
            <div className="absolute inset-0">
              <picture>
                <source media="(min-width: 1024px)" srcSet={slide.image} />
                <source media="(min-width: 768px)" srcSet={slide.tabletImage} />
                <img
                  src={slide.mobileImage}
                  alt=""
                  className="w-full h-full object-cover object-center md:object-[center_30%]"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </picture>
              {/* Mobile/tablet: gradient from bottom so image is visible at top */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/20 md:hidden" />
              {/* Desktop: gradient from left */}
              <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            {/* Content — top-aligned on mobile so image shows at top, centered on desktop */}
              <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-end md:items-center min-h-[100svh]">
                <div className="max-w-3xl text-left pb-20 pt-8 md:py-24">
                <span className="inline-flex items-center gap-2 bg-secondary/15 text-secondary text-xs font-bold px-5 py-2 rounded-full mb-5 md:mb-8 uppercase tracking-wider border border-secondary/20 backdrop-blur-sm">
                  <Cpu className="w-3.5 h-3.5" />
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
                    {...(slide.cta1.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="gradient-gold text-secondary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm hover:opacity-90 transition-all inline-flex items-center gap-2 justify-center shadow-lg shadow-secondary/20 hover:shadow-secondary/30 hover:scale-[1.02]"
                  >
                    <slide.cta1.icon className="w-4 h-4" />
                    {slide.cta1.label}
                  </a>
                  <a
                    href={slide.cta2.href}
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
