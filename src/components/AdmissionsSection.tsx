import { UserPlus, Mail, FileCheck, GraduationCap, LogIn, ClipboardList, Play, Sparkles, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import YouTubeLazy from "@/components/YouTubeLazy";
import thumbSignup from "@/assets/thumbnails/new-user-signup.jpg";
import thumbAppForm from "@/assets/thumbnails/application-form.jpg";

const newUserSteps = [
  {
    icon: UserPlus,
    title: "Click \"Register Now\"",
    description: "Visit the LMS portal and click the Register Now or Apply Now button to begin your signup process.",
    accent: "from-secondary to-secondary/70",
  },
  {
    icon: ClipboardList,
    title: "Fill the Registration Form",
    description: "Complete the signup form with your personal details — name, email, and create a secure password.",
    accent: "from-accent to-accent/70",
  },
  {
    icon: Mail,
    title: "Verify Your Email",
    description: "Check your registered email for a confirmation message. Click the verification link or \"Confirm My Account\" button to activate.",
    accent: "from-secondary to-accent",
  },
  {
    icon: FileCheck,
    title: "Complete Application Form",
    description: "After verification, you'll be redirected to the LMS to fill a mandatory application form — choose your Grade, Subjects, and provide Primary Contact Person details.",
    accent: "from-accent to-secondary",
  },
  {
    icon: GraduationCap,
    title: "Enrollment Complete!",
    description: "Once submitted, you're enrolled in all selected subjects. Your parent/guardian also receives an account with login credentials via email.",
    accent: "from-secondary to-secondary/70",
  },
];

const existingUserSteps = [
  {
    icon: LogIn,
    title: "Log In to LMS",
    description: "Use your existing credentials to log in to the Learning Management System.",
    accent: "from-secondary to-secondary/70",
  },
  {
    icon: ClipboardList,
    title: "Fill Mandatory Application Form",
    description: "If you haven't logged in for a while, you'll be prompted to complete the updated application form with your current Grade and Subject preferences.",
    accent: "from-accent to-accent/70",
  },
  {
    icon: FileCheck,
    title: "Choose Grade & Subjects",
    description: "Select your grade and subjects for the new term. Previously chosen subjects remain unaffected — your history is preserved.",
    accent: "from-secondary to-accent",
  },
  {
    icon: GraduationCap,
    title: "Access the LMS",
    description: "Once the application form is submitted, you'll have full access to your courses, schedules, and learning materials.",
    accent: "from-accent to-secondary",
  },
];

const AdmissionsSection = () => {
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<"new" | "existing">("new");

  const activeSteps = activeTab === "new" ? newUserSteps : existingUserSteps;

  return (
    <section id="admissions" className="py-24 lg:py-32 bg-background relative overflow-hidden section-glow">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/[0.04] rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground">
            How to Apply
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Whether you're a new student or returning after a break, follow these simple steps to start your digital learning journey.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-muted/50 rounded-2xl p-1 sm:p-1.5 backdrop-blur-sm border border-border/30">
            <button
              onClick={() => setActiveTab("new")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "new"
                  ? "gradient-navy text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span className="hidden sm:inline">New Registration</span>
              <span className="sm:hidden">New</span>
            </button>
            <button
              onClick={() => setActiveTab("existing")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "existing"
                  ? "gradient-navy text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Existing Users</span>
              <span className="sm:hidden">Existing</span>
            </button>
          </div>
        </div>

        {/* Steps — Alternating Cards Layout */}
        <div ref={stepsRef} className="max-w-5xl mx-auto mb-20">
          <div className="relative">
            {/* Center vertical connector (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/30 via-accent/20 to-transparent -translate-x-1/2" />

            <div className="space-y-8 md:space-y-0">
              {activeSteps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={`${activeTab}-${i}`}
                    className={`relative md:flex items-center transition-all duration-700 ${
                      stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    {/* Left side */}
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
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full gradient-navy items-center justify-center text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20 z-10 border-4 border-background">
                      {i + 1}
                    </div>

                    {/* Mobile step number */}
                    <div className="md:hidden absolute left-0 top-5 w-7 h-7 rounded-full gradient-navy flex items-center justify-center text-[10px] font-bold text-primary-foreground shadow-md z-10">
                      {i + 1}
                    </div>

                    {/* Right side spacer */}
                    <div className={`hidden md:block md:w-1/2 ${isEven ? "md:order-2" : ""}`} />

                    {/* Arrow connector between steps */}
                    {i < activeSteps.length - 1 && (
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-4 z-10">
                        <ArrowRight className="w-4 h-4 text-secondary/40 rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Video Guide — Tab-Aware */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="glass-card rounded-2xl overflow-hidden hover:modern-shadow-lg transition-all duration-300">
            <div className="relative aspect-video bg-muted/30">
              <YouTubeLazy
                key={activeTab}
                url={activeTab === "new" ? "https://www.youtube.com/embed/bP8xPtOqiYw" : "https://www.youtube.com/embed/RZzxt1Jh3yk"}
                title={activeTab === "new" ? "How to Apply — New Registration Guide" : "Mandatory Application Form for Existing Users"}
                thumbnail={activeTab === "new" ? thumbSignup : thumbAppForm}
              />
            </div>
            <div className="p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl gradient-gold flex items-center justify-center shrink-0 shadow-md">
                <Play className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">Video Walkthrough</span>
                <h4 className="font-semibold text-card-foreground text-base mt-1">
                  {activeTab === "new" ? "New Registration — Step by Step" : "Existing Users — Application Form"}
                </h4>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  {activeTab === "new"
                    ? "Complete walkthrough for first-time students registering on the LMS."
                    : "Guide for returning students to complete the mandatory application form."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="text-center">
          <a
            href="https://learn.digitalschool.moe.edu.gy/login/signup.php"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-secondary-foreground font-semibold px-8 py-3.5 rounded-xl text-sm hover:opacity-90 hover:scale-[1.02] transition-all shadow-md inline-flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
