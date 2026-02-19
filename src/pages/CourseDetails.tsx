import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, GraduationCap, CheckCircle2, ClipboardCheck, Users, Play, ChevronRight, Layers, Target, LayoutList, FileText, Video, MessageSquare, PenTool, Activity } from "lucide-react";
import { getSubject } from "@/lib/subjectData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CourseDetails = () => {
  const { grade, slug } = useParams<{ grade: string; slug: string }>();
  const subject = grade && slug ? getSubject(grade, slug) : undefined;
  const gradeLabel = grade === "10" ? "Grade 10" : "Grade 11";

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = subject
      ? `${subject.name} – ${gradeLabel} | Guyana Digital School`
      : "Course Not Found | Guyana Digital School";
  }, [subject, gradeLabel]);

  if (!subject) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
          <Link to="/#curriculum" className="inline-flex items-center gap-2 gradient-gold text-secondary-foreground font-semibold px-6 py-3 rounded-full text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Curriculum
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const totalActivities = subject.topics.length * 5;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Banner with enhanced gradient overlay */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img src={subject.image} alt={subject.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 opacity-[0.07]" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--secondary)) 1px, transparent 1px), radial-gradient(circle at 80% 20%, hsl(var(--secondary)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px, 40px 40px'
            }} />
            {/* Glow orbs */}
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-secondary/10 blur-[100px]" />
            <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-[80px]" />
          </div>
          <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12 lg:py-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-8">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/#curriculum" className="hover:text-primary-foreground transition-colors">Curriculum</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-primary-foreground">{subject.name}</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="lg:max-w-[55%]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
                  {subject.name}
                </h1>
                <p className="text-primary-foreground/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {subject.description}
                </p>
              </div>
              {/* Course Image Card */}
              <div className="hidden lg:block lg:w-[calc(33.333%-1.25rem)] shrink-0">
                <div className="rounded-2xl overflow-hidden border border-primary-foreground/20 shadow-2xl shadow-black/40">
                  <img src={subject.image} alt={subject.name} className="w-full h-48 object-cover" />
                  <div className="gradient-navy px-4 py-3 flex items-center gap-2">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      subject.category === "Science" ? "bg-accent/20 text-accent border border-accent/30" :
                      subject.category === "Business" ? "bg-secondary/20 text-secondary border border-secondary/30" :
                      "bg-destructive/20 text-destructive-foreground border border-destructive/30"
                    }`}>
                      {subject.category}
                    </span>
                    <span className="text-xs font-semibold text-primary-foreground/70 bg-primary-foreground/10 px-2.5 py-1 rounded-full border border-primary-foreground/10">
                      {gradeLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Info Cards with gradient backgrounds */}
        <section className="container mx-auto px-4 lg:px-8 -mt-8 relative z-20 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: GraduationCap, label: "Grade Level", value: gradeLabel },
              { icon: Activity, label: "Total Activities", value: `${totalActivities}+ Activities` },
              { icon: Users, label: "Mode", value: "Live + Self-Paced" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl p-5 modern-shadow bg-card border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl gradient-navy flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                    <p className="text-sm font-bold text-foreground">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Decorative background for main content */}
        <div className="relative">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-secondary/[0.04] blur-[80px]" />
            <div className="absolute top-96 right-0 w-96 h-96 rounded-full bg-accent/[0.04] blur-[100px]" />
            <div className="absolute bottom-40 left-1/4 w-64 h-64 rounded-full bg-primary/[0.03] blur-[60px]" />
          </div>

          {/* Main Content */}
          <section className="container mx-auto px-4 lg:px-8 pb-24 relative z-10">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-12">

                {/* Course Overview */}
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl gradient-navy flex items-center justify-center shadow-lg shadow-primary/20">
                      <Layers className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-foreground">
                      Course <span className="text-gradient-gold">Overview</span>
                    </h2>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl p-6 modern-shadow bg-gradient-to-br from-card via-card to-secondary/[0.05] border border-border/50">
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-secondary/[0.06] blur-[60px]" />
                    <p className="text-muted-foreground leading-relaxed mb-4 relative">
                      {subject.description} This course is designed for {gradeLabel} students and follows the CSEC curriculum framework, preparing students for national examinations while building practical, real-world skills.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-6 relative">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-secondary/[0.08] to-transparent border border-secondary/10">
                        <GraduationCap className="w-5 h-5 text-secondary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Category</p>
                          <p className="text-sm font-semibold text-foreground">{subject.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-accent/[0.08] to-transparent border border-accent/10">
                        <Activity className="w-5 h-5 text-accent" />
                        <div>
                          <p className="text-xs text-muted-foreground">Total Activities</p>
                          <p className="text-sm font-semibold text-foreground">{totalActivities}+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learning Objectives */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center shadow-lg shadow-secondary/20">
                      <Target className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-foreground">
                      Learning <span className="text-gradient-gold">Objectives</span>
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {subject.learningOutcomes.map((outcome, i) => (
                      <div key={i} className="group flex items-start gap-4 rounded-xl p-4 bg-gradient-to-r from-card to-secondary/[0.03] border border-border/50 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 hover:-translate-y-0.5 transition-all duration-300">
                        <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-secondary/20">
                          <CheckCircle2 className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <div>
                          <p className="text-foreground text-sm font-medium">{outcome}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Modules */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shadow-lg shadow-accent/20">
                      <LayoutList className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-foreground">
                      Course <span className="text-gradient-gold">Modules</span>
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {subject.topics.map((topic, i) => (
                      <div key={i} className="group flex items-start gap-4 rounded-xl p-4 bg-gradient-to-r from-card to-primary/[0.03] border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300">
                        <div className="w-8 h-8 rounded-lg gradient-navy flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
                          <span className="text-primary-foreground text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <div>
                          <p className="text-foreground text-sm font-semibold">{topic}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* CTA Card */}
                <div className="relative overflow-hidden rounded-2xl p-6 gradient-navy text-primary-foreground">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 30% 70%, hsl(var(--secondary)) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }} />
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-secondary/10 blur-[40px]" />
                  <div className="relative">
                    <h3 className="font-display font-bold text-lg mb-3">Ready to Start?</h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
                      Join thousands of students across Guyana. Registration is free and open to all secondary school students.
                    </p>
                    <a
                      href="https://learn.digitalschool.moe.edu.gy/login/signup.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-gold text-secondary-foreground font-semibold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-all inline-flex items-center gap-2 w-full justify-center shadow-lg shadow-secondary/30"
                    >
                      <GraduationCap className="w-4 h-4" />
                      Register Now — It's Free
                    </a>
                  </div>
                </div>

                {/* Course Details Card */}
                <div className="relative overflow-hidden rounded-2xl p-6 modern-shadow bg-gradient-to-b from-card via-card to-secondary/[0.05] border border-border/50">
                  <div className="absolute top-0 left-0 right-0 h-1 gradient-gold" />
                  <h3 className="font-display font-bold text-foreground text-lg mb-5">Course Details</h3>
                  <div className="space-y-4">
                    {[
                      { icon: GraduationCap, title: "Grade Level", value: gradeLabel },
                      { icon: Layers, title: "Category", value: subject.category },
                      { icon: LayoutList, title: "Modules", value: `${subject.topics.length} Modules` },
                      { icon: Activity, title: "Total Activities", value: `${totalActivities}+ Activities` },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-secondary/15 to-secondary/5 flex items-center justify-center shrink-0 group-hover:from-secondary/25 transition-all">
                          <item.icon className="w-4 h-4 text-secondary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-5" />

                  {/* Each Module Includes */}
                  <h3 className="font-display font-bold text-foreground text-lg mb-5">Each Module Includes</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Video, title: "Video Lectures", desc: "Faculty-led recorded lessons", color: "from-primary/15 to-primary/5" },
                      { icon: FileText, title: "Notes & Slides", desc: "Structured reading materials", color: "from-secondary/15 to-secondary/5" },
                      { icon: MessageSquare, title: "Interactive Activities", desc: "Guided practice exercises", color: "from-accent/15 to-accent/5" },
                      { icon: PenTool, title: "Quizzes", desc: "Knowledge assessment tests", color: "from-destructive/15 to-destructive/5" },
                      { icon: Users, title: "Live Sessions", desc: "Real-time classes with teachers", color: "from-primary/15 to-primary/5" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                          <item.icon className="w-4 h-4 text-foreground/70" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Back Link */}
                <Link
                  to="/#curriculum"
                  className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Subjects
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetails;
