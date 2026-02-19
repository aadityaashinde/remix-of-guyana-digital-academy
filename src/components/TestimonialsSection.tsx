import { useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote, Star, ChevronLeft, ChevronRight, Play, Video } from "lucide-react";
import WaveDecoration from "./WaveDecoration";

import anisaImg from "@/assets/students/anisa-ramjattan.jpg";
import marcusImg from "@/assets/students/marcus-williams.jpg";
import priyaImg from "@/assets/students/priya-doodnauth.jpg";
import devendraImg from "@/assets/students/devendra-singh.jpg";
import keishaImg from "@/assets/students/keisha-thomas.jpg";
import rohanImg from "@/assets/students/rohan-persaud.jpg";

const testimonials = [
  {
    name: "Anisa Ramjattan",
    grade: "Grade 11",
    subject: "Sciences & Mathematics",
    quote:
      "GDS gave me the flexibility to study at my own pace while still having live classes with amazing teachers. My grades improved dramatically, and I feel more confident than ever about my CSEC exams!",
    rating: 5,
    image: anisaImg,
  },
  {
    name: "Marcus Williams",
    grade: "Grade 10",
    subject: "Business & Accounts",
    quote:
      "The virtual classroom experience is incredible. I can rewatch lessons anytime I need to review a concept. The teachers are patient and always available to help. Best decision my parents ever made!",
    rating: 5,
    image: marcusImg,
  },
  {
    name: "Priya Doodnauth",
    grade: "Grade 11",
    subject: "English & Social Studies",
    quote:
      "Living in a remote area, I never thought I'd have access to quality education. GDS changed everything for me. The interactive lessons and supportive community make learning enjoyable every single day.",
    rating: 5,
    image: priyaImg,
  },
  {
    name: "Devendra Singh",
    grade: "Grade 9",
    subject: "IT & Mathematics",
    quote:
      "I love how technology-driven the classes are. The digital tools and resources available to us are world-class. GDS doesn't just teach subjects—it teaches us how to learn and think critically.",
    rating: 5,
    image: devendraImg,
  },
  {
    name: "Keisha Thomas",
    grade: "Grade 10",
    subject: "Sciences & Agriculture",
    quote:
      "The teachers at GDS truly care about each student. Even though it's online, I feel more connected to my classmates and teachers than I ever did in a traditional school. The community here is special.",
    rating: 5,
    image: keishaImg,
  },
  {
    name: "Rohan Persaud",
    grade: "Grade 11",
    subject: "Economics & History",
    quote:
      "GDS prepared me not just for exams, but for life. The critical thinking skills and discipline I've developed through online learning have made me a better student and a more independent person.",
    rating: 5,
    image: rohanImg,
  },
];

const videoTestimonials = [
  {
    name: "Anisa Ramjattan",
    grade: "Grade 11",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: anisaImg,
    title: "How GDS Transformed My Learning Journey",
  },
  {
    name: "Marcus Williams",
    grade: "Grade 10",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: marcusImg,
    title: "Why I Chose Digital Learning",
  },
  {
    name: "Priya Doodnauth",
    grade: "Grade 11",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: priyaImg,
    title: "From Remote Village to Top Student",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };
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
      setActiveIndex((prev) =>
        dir === "prev" ? (prev <= 0 ? maxIndex : prev - 1) : prev >= maxIndex ? 0 : prev + 1
      );
    },
    [maxIndex]
  );

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-primary/[0.03] via-background to-background"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <Quote className="absolute top-16 right-[15%] w-20 h-20 text-secondary/10 rotate-12" />
        <Quote className="absolute bottom-24 left-[10%] w-16 h-16 text-primary/10 -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-sm font-semibold text-secondary">Student Voices</span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Stories That <span className="text-gradient-gold">Inspire</span> Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the students whose lives have been transformed through digital learning at Guyana Digital School.
          </p>
        </div>

        {/* Written Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <button
            onClick={() => goTo("prev")}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => goTo("next")}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden mx-6 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="shrink-0 px-3" style={{ width: `${100 / visibleCount}%` }}>
                  <div
                    className={`group relative h-full rounded-2xl bg-card border border-border/60 p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-secondary/30 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${(i % visibleCount) * 150}ms` }}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                  >
                    {/* Corner quote */}
                    <div className="absolute top-4 right-4">
                      <Quote className="w-8 h-8 text-secondary/20 group-hover:text-secondary/40 transition-colors duration-300" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 text-secondary fill-secondary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 line-clamp-5">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-5" />

                    {/* Student info with photo */}
                    <div className="flex items-center gap-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary/30 shadow-md"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{t.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {t.grade} · {t.subject}
                        </p>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-secondary/0 via-secondary/60 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setIsAutoPlaying(false);
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 h-2.5 bg-secondary"
                    : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-border" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Video className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Video Stories</span>
            </div>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videoTestimonials.map((v, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/60 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Video area */}
                <div className="relative aspect-video overflow-hidden">
                  {activeVideo === i ? (
                    <iframe
                      className="w-full h-full"
                      src={`${v.embedUrl}?autoplay=1`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveVideo(i)}
                      className="relative w-full h-full cursor-pointer"
                      aria-label={`Play ${v.title}`}
                    >
                      <img
                        src={v.thumbnail}
                        alt={v.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 group-hover:from-black/60 transition-colors" />
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-secondary/90 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl backdrop-blur-sm">
                          <Play className="w-6 h-6 text-secondary-foreground ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h4 className="font-semibold text-foreground text-sm mb-1 line-clamp-1">{v.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {v.name} · {v.grade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaveDecoration position="bottom" />
    </section>
  );
};

export default TestimonialsSection;
