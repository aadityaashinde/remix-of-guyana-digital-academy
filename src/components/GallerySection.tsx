import { ImageIcon, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryItems = [
  { label: "School Building", color: "bg-primary/10" },
  { label: "Classroom", color: "bg-secondary/10" },
  { label: "Assembly", color: "bg-accent/10" },
  { label: "Sports Day", color: "bg-primary/10" },
  { label: "Annual Function", color: "bg-secondary/10" },
  { label: "Science Lab", color: "bg-accent/10" },
  { label: "Library", color: "bg-primary/10" },
  { label: "Computer Room", color: "bg-secondary/10" },
];

const GallerySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background relative overflow-hidden section-glow">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/[0.04] rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Gallery
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground">
            Campus Gallery
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
            A glimpse into life at Kingsbridge Academy
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`group glass-card rounded-2xl overflow-hidden hover:modern-shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`aspect-[4/3] ${item.color} flex items-center justify-center`}>
                <ImageIcon className="w-10 h-10 text-muted-foreground/30" />
              </div>
              <div className="p-3 text-center">
                <p className="text-sm font-medium text-card-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">More photos coming soon!</p>
      </div>
    </section>
  );
};

export default GallerySection;
