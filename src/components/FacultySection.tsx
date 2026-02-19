import { useCallback, useEffect, useState } from "react";
import { Sparkles, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import WaveDecoration from "@/components/WaveDecoration";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const facultyData = [
  { name: "Mrs. Sunita Kumari", subject: "Hindi & EVS", initials: "SK", color: "bg-[hsl(22,80%,53%)]" },
  { name: "Mr. Rajesh Prasad", subject: "Mathematics", initials: "RP", color: "bg-[hsl(215,58%,26%)]" },
  { name: "Mrs. Anita Devi", subject: "English", initials: "AD", color: "bg-[hsl(146,55%,36%)]" },
  { name: "Mr. Vikash Kumar", subject: "Science", initials: "VK", color: "bg-[hsl(22,80%,53%)]" },
  { name: "Mrs. Priya Singh", subject: "Social Science", initials: "PS", color: "bg-[hsl(215,58%,26%)]" },
  { name: "Mr. Amit Ranjan", subject: "Physical Education & Sports", initials: "AR", color: "bg-[hsl(146,55%,36%)]" },
  { name: "Mrs. Kavita Sharma", subject: "Art & Craft", initials: "KS", color: "bg-[hsl(22,80%,53%)]" },
  { name: "Mr. Deepak Verma", subject: "Computer Science", initials: "DV", color: "bg-[hsl(215,58%,26%)]" },
];

const FacultySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: sliderRef, isVisible: sliderVisible } = useScrollAnimation({ threshold: 0.05 });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); emblaApi.off("reInit", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="faculty" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-navy" />
      <WaveDecoration position="top" flip />
      <WaveDecoration position="bottom" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--secondary)) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/[0.07] rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-secondary/20">
            <Sparkles className="w-3.5 h-3.5" />
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-primary-foreground">
            Meet Our <span className="text-gradient-gold">Faculty</span>
          </h2>
          <p className="text-primary-foreground/60 mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Our dedicated team of experienced educators is committed to bringing out the best in every student through innovative teaching and personal mentorship.
          </p>
        </div>

        <div ref={sliderRef} className={`relative max-w-6xl mx-auto transition-all duration-700 ${sliderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex justify-end gap-2 mb-8">
            <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/70 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/70 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-hidden py-3" ref={emblaRef}>
            <div className="flex -ml-5">
              {facultyData.map((member, i) => (
                <div key={member.name} className="min-w-0 shrink-0 grow-0 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-5">
                  <div className={`group relative transition-all duration-500 ${sliderVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`} style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="relative rounded-2xl overflow-hidden bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-sm hover:border-secondary/40 hover:-translate-y-2 transition-all duration-500">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative pt-8 flex justify-center">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-secondary/50 to-accent/50 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                          <div className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full ${member.color} flex items-center justify-center border-[3px] border-primary-foreground/15 group-hover:border-secondary/60 shadow-xl transition-all duration-500`}>
                            <span className="text-2xl md:text-3xl font-bold text-white">{member.initials}</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full gradient-gold flex items-center justify-center shadow-lg border-2 border-primary">
                            <GraduationCap className="w-4 h-4 text-secondary-foreground" />
                          </div>
                        </div>
                      </div>
                      <div className="pt-5 pb-6 px-4 text-center">
                        <h3 className="font-semibold text-primary-foreground text-base group-hover:text-secondary transition-colors duration-300">{member.name}</h3>
                        <div className="mt-2 inline-flex items-center gap-1.5 bg-secondary/10 text-secondary text-xs font-medium px-3 py-1 rounded-full border border-secondary/15">
                          {member.subject}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-1.5 mt-8">
            {facultyData.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-secondary" : "w-1.5 bg-primary-foreground/20 hover:bg-primary-foreground/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
