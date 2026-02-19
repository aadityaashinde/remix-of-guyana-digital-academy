import { MapPin, FileText, Upload, CheckCircle, Sparkles, Phone, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: MapPin,
    title: "Visit the School",
    description: "Come visit Kingsbridge Academy during school hours (Mon-Sat, 9 AM – 1 PM) to tour our campus and meet the faculty.",
    accent: "from-secondary to-secondary/70",
  },
  {
    icon: FileText,
    title: "Collect Application Form",
    description: "Collect the admission form from the school office or download it from our website. Fill in the student and parent/guardian details.",
    accent: "from-accent to-accent/70",
  },
  {
    icon: Upload,
    title: "Submit Documents",
    description: "Submit the filled form along with required documents: birth certificate, Aadhaar card (student & parent), previous school transfer certificate (if applicable), 2 passport-size photos.",
    accent: "from-secondary to-accent",
  },
  {
    icon: CheckCircle,
    title: "Admission Confirmation",
    description: "After review, the school will confirm admission and share the fee structure. Your child can start attending classes as per the academic calendar.",
    accent: "from-accent to-secondary",
  },
];

const AdmissionsSection = () => {
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="admissions" className="py-24 lg:py-32 bg-background relative overflow-hidden section-glow">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/[0.03] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground">
            How to Apply
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Joining Kingsbridge Academy is simple. Follow these four easy steps to enroll your child.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/30 via-accent/20 to-transparent -translate-x-1/2" />
            <div className="space-y-8 md:space-y-0">
              {steps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`relative md:flex items-center transition-all duration-700 ${stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <div className={`md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}`}>
                      <div className={`glass-card rounded-2xl p-5 sm:p-6 hover:modern-shadow-lg hover:-translate-y-1 transition-all duration-300 group ml-8 md:ml-0`}>
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : ""}`}>
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-md ${isEven ? "md:order-2" : ""}`}>
                            <step.icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <h3 className="font-semibold text-card-foreground text-sm sm:text-base group-hover:text-secondary transition-colors font-sans">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full gradient-navy items-center justify-center text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20 z-10 border-4 border-background">
                      {i + 1}
                    </div>
                    <div className="md:hidden absolute left-0 top-5 w-7 h-7 rounded-full gradient-navy flex items-center justify-center text-[10px] font-bold text-primary-foreground shadow-md z-10">
                      {i + 1}
                    </div>
                    <div className={`hidden md:block md:w-1/2 ${isEven ? "md:order-2" : ""}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enquiry CTA */}
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8 text-center">
          <h3 className="font-display font-bold text-foreground text-lg mb-3">Admission Enquiries</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            For admission enquiries, feel free to reach out to us. We're happy to answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href="tel:+919931344055" className="inline-flex items-center gap-2 gradient-gold text-secondary-foreground font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all shadow-md">
              <Phone className="w-4 h-4" />
              +91 9931344055
            </a>
            <a href="mailto:kingsbridgeacademy.2019@gmail.com" className="inline-flex items-center gap-2 gradient-navy text-primary-foreground font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all shadow-md">
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
