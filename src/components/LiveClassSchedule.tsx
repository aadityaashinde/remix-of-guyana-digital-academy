import { Clock, Calendar, BookOpen, Sparkles } from "lucide-react";
import WaveDecoration from "@/components/WaveDecoration";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timings = [
  { label: "Assembly", time: "8:00 AM – 8:20 AM", icon: BookOpen },
  { label: "Classes", time: "8:20 AM – 1:30 PM", icon: Calendar },
  { label: "Short Recess", time: "10:30 AM – 10:45 AM", icon: Clock },
  { label: "Dispersal", time: "2:00 PM", icon: Clock },
];

const LiveClassSchedule = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="schedule"
      className="py-24 lg:py-32 relative overflow-hidden gradient-navy"
    >
      <WaveDecoration position="top" flip />
      <WaveDecoration position="bottom" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-secondary/[0.04] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/15 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            School Timings
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-primary-foreground">
            School Timings & Calendar
          </h2>
          <p className="text-primary-foreground/50 mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Monday to Saturday — A structured school day designed for maximum learning and well-being.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`max-w-3xl mx-auto transition-all duration-700 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {timings.map((item, i) => (
              <div
                key={item.label}
                className="rounded-2xl bg-primary-foreground/[0.06] backdrop-blur-xl border border-primary-foreground/15 p-6 text-center hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-primary-foreground font-semibold text-base mb-1">{item.label}</h3>
                <p className="text-primary-foreground/60 text-sm">{item.time}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-primary-foreground/[0.06] backdrop-blur-xl border border-primary-foreground/15 p-6 text-center">
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              <strong className="text-primary-foreground">School Days:</strong> Monday to Saturday, 8:00 AM – 2:00 PM
            </p>
            <p className="text-primary-foreground/50 text-xs mt-3">
              The school follows the academic calendar prescribed by the Bihar State Education Board.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveClassSchedule;
