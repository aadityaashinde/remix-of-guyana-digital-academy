import { useState } from "react";
import { ChevronDown, Sparkles, Play, BookOpen, Monitor, GraduationCap, HelpCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import YouTubeLazy from "@/components/YouTubeLazy";
import thumbSignup from "@/assets/thumbnails/new-user-signup.jpg";
import thumbEnroll from "@/assets/thumbnails/enroll-course.jpg";
import thumbAppForm from "@/assets/thumbnails/application-form.jpg";
import thumbPassword from "@/assets/thumbnails/reset-password.jpg";
import thumbContact from "@/assets/thumbnails/contact-support.jpg";

const categories = [
  { id: "about", label: "About GDS", icon: BookOpen },
  { id: "curriculum", label: "Curriculum & Academic", icon: GraduationCap },
  { id: "lms", label: "LMS & Support", icon: Monitor },
];

const faqsByCategory: Record<string, { q: string; a: string }[]> = {
  about: [
    { q: "Who can apply to Guyana Digital School?", a: "GDS is open to students entering Grade 10 (Form 4) and Grade 11 (Form 5). Students from across Guyana and eligible CARICOM countries may apply." },
    { q: "Is Guyana Digital School open to CARICOM students?", a: "Yes! Eligible CARICOM students who meet the entry requirements are welcome to apply and participate in our fully digital learning programme." },
    { q: "Are there any fees?", a: "Guyana Digital School is a government initiative designed to provide free access to quality digital education. Contact our admissions team for the most current information." },
    { q: "How do I apply?", a: "You can apply online through our portal. Gather your required documents (birth certificate, transcripts, ID photo) and complete the application form. You'll receive confirmation once approved." },
  ],
  curriculum: [
    { q: "What subjects are offered?", a: "We offer 19+ CSEC-aligned subjects spanning Mathematics & Science, Business, and Arts & Humanities. See the Curriculum section for the complete list." },
    { q: "How are live classes conducted?", a: "Live classes are delivered via our online learning platform with real-time interaction between teachers and students. Each session follows a structured timetable." },
    { q: "Can I access recorded lessons?", a: "Yes. All live sessions are recorded and available through our e-content library for on-demand review and self-paced learning." },
    { q: "Is there support for students who fall behind?", a: "Absolutely. We provide 100% personalized online support including one-on-one sessions, additional resources, and progress tracking to help every student succeed." },
  ],
  lms: [
    { q: "What technology do I need?", a: "You'll need a device with internet access — a laptop, tablet, or smartphone. Our platform is optimized for all screen sizes and low-bandwidth connections." },
    { q: "How do I reset my password?", a: "Visit the LMS login page and click 'Forgot Password'. Enter your registered email to receive a password reset link. Follow the instructions in the email to set a new password." },
    { q: "How do I contact support?", a: "You can reach us at info@guyanadigialschool.com or call (592) 223-7900. Our team is available during school hours to assist." },
  ],
};

const videoGuides = [
  { title: "New User Signup", url: "https://www.youtube.com/embed/bP8xPtOqiYw", description: "Step-by-step guide to create your account on the GDS portal.", thumbnail: thumbSignup },
  { title: "How to Enroll in a Course", url: "https://www.youtube.com/embed/V4_y9nzhS6Y", description: "Learn how to enroll in courses after completing registration.", thumbnail: thumbEnroll },
  { title: "Mandatory Application Form (Existing Users)", url: "https://www.youtube.com/embed/RZzxt1Jh3yk", description: "Guide for returning students to complete the mandatory application form.", thumbnail: thumbAppForm },
  { title: "How to Reset Your Password", url: "https://www.youtube.com/embed/oxQ_KYdxhjE", description: "Quick guide to reset your password on the GDS portal.", thumbnail: thumbPassword },
  { title: "Contact Us for Help or Support", url: "https://www.youtube.com/embed/lJq_hWo1Rz8", description: "Learn how to reach our support team for assistance.", thumbnail: thumbContact },
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("about");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation({ threshold: 0.1 });

  const activeFaqs = faqsByCategory[activeCategory] || [];

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(0);
  };

  return (
    <section id="faqs" className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden section-glow">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/[0.04] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Got questions? We've got answers. Browse by category or watch our video guides below.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 px-0">
          <div className="inline-flex flex-wrap justify-center gap-1.5 sm:gap-2 bg-muted/50 rounded-2xl p-1 sm:p-1.5 backdrop-blur-sm border border-border/30">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "gradient-navy text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <cat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="sm:hidden">{cat.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div ref={listRef} className="max-w-3xl mx-auto space-y-3 mb-20">
          {activeFaqs.map((faq, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${
                openIndex === i ? "modern-shadow border-secondary/20" : "hover:modern-shadow"
              } ${listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className={`font-semibold text-sm pr-4 font-sans transition-colors ${
                  openIndex === i ? "text-secondary" : "text-card-foreground group-hover:text-secondary"
                }`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                  openIndex === i ? "rotate-180 text-secondary" : "text-muted-foreground"
                }`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Guides Section */}
        <div
          ref={videoRef}
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            videoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              <Play className="w-3.5 h-3.5" />
              Video Guides
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Helpful Video Tutorials
            </h3>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Watch step-by-step walkthroughs to get the most out of Guyana Digital School.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 sm:gap-6">
            {/* Main Video Player */}
            <div className="md:col-span-3">
              <div className="glass-card rounded-2xl overflow-hidden modern-shadow">
                <div className="relative aspect-video bg-muted/30">
                  <YouTubeLazy
                    key={activeVideo}
                    url={videoGuides[activeVideo].url}
                    title={videoGuides[activeVideo].title}
                    thumbnail={videoGuides[activeVideo].thumbnail}
                  />
                </div>
                <div className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shrink-0 shadow-md">
                    <Play className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground text-base">
                      {videoGuides[activeVideo].title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                      {videoGuides[activeVideo].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video List */}
            <div className="md:col-span-2 space-y-2">
              {videoGuides.map((video, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(i)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 group flex items-start gap-3 ${
                    activeVideo === i
                      ? "glass-card modern-shadow border-secondary/20"
                      : "hover:bg-muted/60"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    activeVideo === i
                      ? "gradient-navy text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:text-secondary"
                  }`}>
                    <Play className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className={`font-semibold text-sm transition-colors ${
                      activeVideo === i ? "text-secondary" : "text-card-foreground group-hover:text-secondary"
                    }`}>
                      {video.title}
                    </h5>
                    <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
