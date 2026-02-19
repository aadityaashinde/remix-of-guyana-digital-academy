import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Video, Filter, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { scheduleData } from "@/components/LiveClassSchedule";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const Schedule = () => {
  const [gradeFilter, setGradeFilter] = useState("All");

  useEffect(() => {
    document.title = "Live Class Schedule | Guyana Digital School";
    window.scrollTo(0, 0);
  }, []);
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [dateFrom, setDateFrom] = useState<Date | undefined>();
  const [dateTo, setDateTo] = useState<Date | undefined>();

  const grades = ["All", ...Array.from(new Set(scheduleData.map((s) => s.grade)))];
  const subjects = ["All", ...Array.from(new Set(scheduleData.map((s) => s.subject)))];

  const filtered = scheduleData.filter((item) => {
    if (gradeFilter !== "All" && item.grade !== gradeFilter) return false;
    if (subjectFilter !== "All" && item.subject !== subjectFilter) return false;
    return true;
  });

  const clearFilters = () => {
    setGradeFilter("All");
    setSubjectFilter("All");
    setDateFrom(undefined);
    setDateTo(undefined);
  };

  const hasActiveFilters = gradeFilter !== "All" || subjectFilter !== "All" || dateFrom || dateTo;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-16 lg:py-24 gradient-navy relative overflow-hidden min-h-[80vh]">
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-secondary/[0.04] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* Header */}
            <div className="mb-10">
              <Link
                to="/#schedule"
                className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-secondary text-sm mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <div className="inline-flex items-center gap-2 bg-secondary/15 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-4 sm:mb-6 uppercase tracking-wider sm:ml-4">
                <Sparkles className="w-3.5 h-3.5" />
                All Classes
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-primary-foreground">
                Full Class Schedule
              </h1>
              <p className="text-primary-foreground/50 mt-3 max-w-2xl leading-relaxed text-[15px]">
                Browse all live and upcoming classes. Use the filters below to find what you're looking for.
              </p>
            </div>

            {/* Filters */}
            <div className="rounded-2xl bg-primary-foreground/[0.06] backdrop-blur-xl border border-primary-foreground/15 p-5 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground text-sm font-semibold">Filters</span>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="ml-auto text-xs text-secondary hover:text-secondary/80 transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Grade */}
                <div>
                  <label className="text-primary-foreground/40 text-xs font-medium mb-1.5 block">Grade</label>
                  <select
                    value={gradeFilter}
                    onChange={(e) => setGradeFilter(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 appearance-none"
                  >
                    {grades.map((g) => (
                      <option key={g} value={g} className="text-foreground bg-card">
                        {g === "All" ? "All Grades" : g}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-primary-foreground/40 text-xs font-medium mb-1.5 block">Subject</label>
                  <select
                    value={subjectFilter}
                    onChange={(e) => setSubjectFilter(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 appearance-none"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s} className="text-foreground bg-card">
                        {s === "All" ? "All Subjects" : s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date From */}
                <div>
                  <label className="text-primary-foreground/40 text-xs font-medium mb-1.5 block">From Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal rounded-xl bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
                          !dateFrom && "text-primary-foreground/40"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-secondary" />
                        {dateFrom ? format(dateFrom, "PPP") : "Start date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-border z-50" align="start">
                      <Calendar
                        mode="single"
                        selected={dateFrom}
                        onSelect={setDateFrom}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Date To */}
                <div>
                  <label className="text-primary-foreground/40 text-xs font-medium mb-1.5 block">To Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal rounded-xl bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
                          !dateTo && "text-primary-foreground/40"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-secondary" />
                        {dateTo ? format(dateTo, "PPP") : "End date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-border z-50" align="start">
                      <Calendar
                        mode="single"
                        selected={dateTo}
                        onSelect={setDateTo}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-primary-foreground/40 text-sm">
                Showing <span className="text-primary-foreground font-semibold">{filtered.length}</span> classes
              </p>
            </div>

            {/* Table */}
            <div className="rounded-2xl overflow-hidden border-2 border-primary-foreground/20 backdrop-blur-xl">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-10 gap-4 px-6 py-3.5 bg-primary-foreground/[0.08] border-b border-primary-foreground/10 text-primary-foreground/50 text-xs font-semibold uppercase tracking-wider">
                <div className="col-span-1">Status</div>
                <div className="col-span-2">Date & Time</div>
                <div className="col-span-3">Topic</div>
                <div className="col-span-2">Subject</div>
                <div className="col-span-1">Grade</div>
                <div className="col-span-1">Action</div>
              </div>

              {/* Table Rows */}
              {filtered.map((item, i) => (
                <div
                  key={i}
                  className={`border-b border-primary-foreground/[0.08] hover:bg-primary-foreground/[0.06] transition-colors ${
                    i === filtered.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  {/* Desktop row */}
                  <div className="hidden md:grid grid-cols-10 gap-4 px-6 py-4">
                    <div className="col-span-1 flex items-center">
                      {item.live ? (
                        <span className="flex items-center gap-1.5 text-accent text-[11px] font-bold uppercase tracking-wider">
                          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                          Live
                        </span>
                      ) : (
                        <span className="text-primary-foreground/30 text-[11px] font-medium uppercase tracking-wider">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <div className="col-span-2 flex flex-col justify-center">
                      <span className="text-primary-foreground text-sm font-semibold">{item.date}</span>
                      <span className="text-primary-foreground/40 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                    </div>
                    <div className="col-span-3 flex items-center">
                      <span className="text-primary-foreground text-sm font-medium">{item.topic}</span>
                    </div>
                    <div className="col-span-2 flex items-center">
                      <span className="text-primary-foreground/60 text-sm">{item.subject}</span>
                    </div>
                    <div className="col-span-1 flex items-center">
                      <span className="text-xs font-semibold text-secondary bg-secondary/15 px-2.5 py-1 rounded-full">
                        {item.grade.replace("Grade ", "G")}
                      </span>
                    </div>
                    <div className="col-span-1 flex items-center">
                      {item.live ? (
                        <button className="inline-flex items-center gap-1 gradient-accent text-accent-foreground font-semibold px-3 py-1.5 rounded-lg text-xs hover:opacity-90 transition-all">
                          <Video className="w-3 h-3" />
                          Join
                        </button>
                      ) : (
                        <span className="text-primary-foreground/20 text-xs">—</span>
                      )}
                    </div>
                  </div>

                  {/* Mobile card */}
                  <div className="md:hidden px-4 py-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-primary-foreground text-sm font-semibold">{item.topic}</span>
                      {item.live ? (
                        <span className="flex items-center gap-1 text-accent text-[10px] font-bold uppercase">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                          Live
                        </span>
                      ) : (
                        <span className="text-primary-foreground/30 text-[10px] font-medium uppercase">Upcoming</span>
                      )}
                    </div>
                    <p className="text-primary-foreground/50 text-xs">{item.subject}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-primary-foreground/40 text-xs">
                        <span>{item.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold text-secondary bg-secondary/15 px-2 py-0.5 rounded-full">
                          {item.grade.replace("Grade ", "G")}
                        </span>
                        {item.live && (
                          <button className="inline-flex items-center gap-1 gradient-accent text-accent-foreground font-semibold px-2.5 py-1 rounded-lg text-[10px]">
                            <Video className="w-3 h-3" />
                            Join
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="px-6 py-16 text-center text-primary-foreground/30 text-sm">
                  No classes match your filters. Try adjusting your selection.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
