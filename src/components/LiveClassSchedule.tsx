import { useState } from "react";
import { Calendar, Clock, Video, Filter, Sparkles, ArrowRight } from "lucide-react";
import WaveDecoration from "@/components/WaveDecoration";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import parallaxBg from "@/assets/parallax-live-classes.jpg";

export const scheduleData = [
  { grade: "Grade 10", subject: "Mathematics", topic: "Algebraic Expressions", date: "Mon, Feb 17", time: "9:00 AM – 10:00 AM", teacher: "Mr. R. Singh", live: true },
  { grade: "Grade 10", subject: "English Language", topic: "Comprehension Strategies", date: "Tue, Feb 18", time: "10:30 AM – 11:30 AM", teacher: "Ms. A. Williams", live: false },
  { grade: "Grade 11", subject: "Biology", topic: "Cell Division & Mitosis", date: "Mon, Feb 17", time: "1:00 PM – 2:00 PM", teacher: "Dr. S. Persaud", live: true },
  { grade: "Grade 11", subject: "Chemistry", topic: "Atomic Structure", date: "Tue, Feb 18", time: "9:00 AM – 10:00 AM", teacher: "Mr. K. Ramphal", live: false },
  { grade: "Grade 10", subject: "Information Technology", topic: "Spreadsheet Functions", date: "Wed, Feb 19", time: "2:30 PM – 3:30 PM", teacher: "Ms. D. Thomas", live: false },
  { grade: "Grade 11", subject: "Physics", topic: "Newton's Laws of Motion", date: "Mon, Feb 17", time: "11:00 AM – 12:00 PM", teacher: "Mr. J. Bacchus", live: true },
  { grade: "Grade 10", subject: "Social Studies", topic: "Caribbean Governance", date: "Thu, Feb 20", time: "9:00 AM – 10:00 AM", teacher: "Mr. T. Adams", live: false },
  { grade: "Grade 11", subject: "Economics", topic: "Supply and Demand", date: "Fri, Feb 21", time: "10:00 AM – 11:00 AM", teacher: "Ms. P. Narine", live: false },
  { grade: "Grade 10", subject: "Spanish", topic: "Conversational Practice", date: "Mon, Feb 24", time: "9:00 AM – 10:00 AM", teacher: "Ms. L. Gonzalez", live: false },
  { grade: "Grade 11", subject: "Accounts", topic: "Financial Statements", date: "Tue, Feb 25", time: "10:00 AM – 11:00 AM", teacher: "Mr. H. Ramkissoon", live: false },
  { grade: "Grade 10", subject: "Geography", topic: "Map Reading Skills", date: "Wed, Feb 26", time: "1:00 PM – 2:00 PM", teacher: "Ms. R. Baksh", live: false },
  { grade: "Grade 11", subject: "History", topic: "The Haitian Revolution", date: "Thu, Feb 27", time: "9:00 AM – 10:00 AM", teacher: "Mr. D. Clarke", live: false },
  { grade: "Grade 10", subject: "Mathematics", topic: "Geometry & Proofs", date: "Fri, Feb 28", time: "10:30 AM – 11:30 AM", teacher: "Mr. R. Singh", live: false },
  { grade: "Grade 11", subject: "Biology", topic: "Genetics & Heredity", date: "Mon, Mar 3", time: "1:00 PM – 2:00 PM", teacher: "Dr. S. Persaud", live: false },
  { grade: "Grade 10", subject: "English Language", topic: "Essay Writing", date: "Tue, Mar 4", time: "10:30 AM – 11:30 AM", teacher: "Ms. A. Williams", live: false },
  { grade: "Grade 11", subject: "Physics", topic: "Energy & Work", date: "Wed, Mar 5", time: "11:00 AM – 12:00 PM", teacher: "Mr. J. Bacchus", live: false },
];

interface LiveClassScheduleProps {
  limitDays?: number;
  showViewAll?: boolean;
  showFilters?: boolean;
}

const LiveClassSchedule = ({ limitDays = 14, showViewAll = true, showFilters = true }: LiveClassScheduleProps) => {
  const [gradeFilter, setGradeFilter] = useState("All");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation({ threshold: 0.05 });

  const grades = ["All", ...Array.from(new Set(scheduleData.map((s) => s.grade)))];
  const subjects = ["All", ...Array.from(new Set(scheduleData.map((s) => s.subject)))];

  // Filter by date range (next N days) when limitDays is set
  const dataToShow = limitDays < 365 ? scheduleData.slice(0, 8) : scheduleData;

  const filtered = dataToShow.filter((item) => {
    return (gradeFilter === "All" || item.grade === gradeFilter) && (subjectFilter === "All" || item.subject === subjectFilter);
  });

  return (
    <section
      id="schedule"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url(${parallaxBg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/92 to-primary/96" />
      <WaveDecoration position="top" flip />
      <WaveDecoration position="bottom" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-secondary/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/15 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Live Classes
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-primary-foreground">
            Live Class Schedule
          </h2>
          <p className="text-primary-foreground/50 mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            Join interactive live sessions with expert teachers. Filter by grade or subject to find your classes.
          </p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 max-w-xl mx-auto">
            <div className="flex items-center gap-2 flex-1">
              <Filter className="w-4 h-4 text-secondary shrink-0" />
              <select
                value={gradeFilter}
                onChange={(e) => setGradeFilter(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 appearance-none backdrop-blur-sm"
              >
                {grades.map((g) => <option key={g} value={g} className="text-foreground bg-card">{g === "All" ? "All Grades" : g}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 appearance-none backdrop-blur-sm"
              >
                {subjects.map((s) => <option key={s} value={s} className="text-foreground bg-card">{s === "All" ? "All Subjects" : s}</option>)}
              </select>
            </div>
          </div>
        )}

        {/* Schedule Cards */}
        <div
          ref={tableRef}
          className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 ${
            tableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {filtered.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden bg-primary-foreground/[0.06] backdrop-blur-xl border-2 border-primary-foreground/25 hover:border-secondary/50 hover:bg-primary-foreground/[0.08] transition-all duration-500 ${
                tableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex">
                <div className="w-24 sm:w-32 shrink-0 flex flex-col items-center justify-center bg-primary-foreground/[0.05] border-r border-primary-foreground/[0.08] px-2 sm:px-3 py-3 sm:py-4 text-center gap-1">
                  <Calendar className="w-4 h-4 text-secondary mb-1" />
                  <span className="text-primary-foreground text-xs sm:text-sm font-semibold leading-tight">{item.date}</span>
                  <span className="text-primary-foreground/50 text-[10px] sm:text-xs leading-tight">{item.time}</span>
                  {item.live && (
                    <span className="mt-2 flex items-center gap-1 text-accent text-[10px] font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Live
                    </span>
                  )}
                </div>
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-primary-foreground font-semibold text-[15px] leading-snug mb-1">{item.topic}</h3>
                    <p className="text-primary-foreground/50 text-sm">{item.subject} · {item.grade}</p>
                  </div>
                  <div className="mt-3">
                    {item.live ? (
                      <button className="inline-flex items-center gap-1.5 gradient-accent text-accent-foreground font-semibold px-4 py-2 rounded-xl text-xs hover:opacity-90 hover:scale-105 transition-all">
                        <Video className="w-3.5 h-3.5" />
                        Join Live
                      </button>
                    ) : (
                      <span className="text-primary-foreground/30 text-xs font-medium px-4 py-2 rounded-xl border border-primary-foreground/[0.08] inline-block">
                        Upcoming
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 gradient-accent text-accent-foreground font-semibold px-8 py-3.5 rounded-2xl text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View All Schedule
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default LiveClassSchedule;
