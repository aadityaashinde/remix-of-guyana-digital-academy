import { GraduationCap, Users, BookOpen, Trophy, Calendar, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import WaveDecoration from "@/components/WaveDecoration";

const stats = [
  { value: "200+", label: "Students", icon: Users },
  { value: "15+", label: "Teachers", icon: GraduationCap },
  { value: "6+", label: "Years", icon: Calendar },
  { value: "8", label: "Classes", icon: BookOpen },
  { value: "10+", label: "Activities", icon: Trophy },
];

const ParallaxCTA = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative gradient-navy">
      <WaveDecoration position="top" flip />
      <WaveDecoration position="bottom" />

      <div ref={ref} className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-16 transition-all duration-700 [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-primary-foreground/[0.08] backdrop-blur-md border border-primary-foreground/[0.12] rounded-2xl p-4 sm:p-6 text-center hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-secondary-foreground" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary-foreground mb-1">{stat.value}</p>
              <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4 leading-[1.15]">
            Give Your Child the{" "}
            <span className="text-gradient-gold">Best Start</span>{" "}
            in Life
          </h2>
          <p className="text-primary-foreground/70 text-base lg:text-lg max-w-2xl mb-10 leading-relaxed">
            Admissions are open for the upcoming academic session. Join the Kingsbridge Academy family today and give your child the gift of quality education, strong values, and a bright future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="gradient-gold text-secondary-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-all inline-flex items-center gap-2 justify-center shadow-lg shadow-secondary/20 hover:shadow-secondary/30 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4" />
              Enquire Now
            </a>
            <a
              href="#admissions"
              onClick={(e) => handleClick(e, "#admissions")}
              className="bg-primary-foreground/[0.08] backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-primary-foreground/[0.15] hover:border-primary-foreground/40 transition-all inline-flex items-center gap-2 justify-center"
            >
              <GraduationCap className="w-4 h-4" />
              Visit Our School
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxCTA;
