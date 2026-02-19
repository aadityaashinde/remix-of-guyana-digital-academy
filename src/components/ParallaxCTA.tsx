import { GraduationCap, ClipboardList, Users, BookOpen, Globe, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import WaveDecoration from "@/components/WaveDecoration";
import parallaxBg from "@/assets/parallax-cta-caribbean.jpg";

const stats = [
  { value: "10,000+", label: "Students Enrolled", icon: Users },
  { value: "50+", label: "Expert Teachers", icon: GraduationCap },
  { value: "30+", label: "CSEC Subjects", icon: BookOpen },
  { value: "10", label: "Regions Covered", icon: Globe },
  { value: "26+", label: "Caribbean Nations", icon: MapPin },
];

const ParallaxCTA = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      className="relative"
      style={{
        backgroundImage: `url(${parallaxBg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/80 to-primary/90" />
      <WaveDecoration position="top" flip />
      <WaveDecoration position="bottom" />

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        {/* Stats cards */}
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
              <div className="w-10 h-10 rounded-xl gradient-navy flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary-foreground mb-1">{stat.value}</p>
              <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4 leading-[1.15]">
            Start Your{" "}
            <span className="text-gradient-gold">Digital Learning</span>{" "}
            Journey Today
          </h2>
          <p className="text-primary-foreground/70 text-base lg:text-lg max-w-2xl mb-10 leading-relaxed">
            Join thousands of students across Guyana accessing world-class education from anywhere. Registration is free and open to all secondary school students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://learn.digitalschool.moe.edu.gy/login/signup.php"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-gold text-secondary-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:opacity-90 transition-all inline-flex items-center gap-2 justify-center shadow-lg shadow-secondary/20 hover:shadow-secondary/30 hover:scale-[1.02]"
            >
              <GraduationCap className="w-4 h-4" />
              Register Now — It's Free
            </a>
            <a
              href="#admissions"
              className="bg-primary-foreground/[0.08] backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-primary-foreground/[0.15] hover:border-primary-foreground/40 transition-all inline-flex items-center gap-2 justify-center"
            >
              <ClipboardList className="w-4 h-4" />
              How to Apply
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxCTA;
