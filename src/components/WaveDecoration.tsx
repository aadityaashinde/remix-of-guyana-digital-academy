interface WaveDecorationProps {
  position?: "top" | "bottom";
  flip?: boolean;
  className?: string;
}

const WaveDecoration = ({ position = "bottom", flip = false, className = "" }: WaveDecorationProps) => {
  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden pointer-events-none ${
        position === "top" ? "top-0" : "bottom-0"
      } ${flip ? "rotate-180" : ""} ${className}`}
      style={{ lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="w-full h-[80px] sm:h-[120px] lg:h-[160px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Deepest layer */}
        <path
          d="M0,180 L0,100 Q120,60 240,90 T480,70 T720,100 T960,65 T1200,85 T1440,75 L1440,180 Z"
          fill="hsl(var(--primary) / 0.35)"
        />
        {/* Middle layer */}
        <path
          d="M0,180 L0,120 Q160,85 320,110 T640,90 T960,115 T1280,88 T1440,105 L1440,180 Z"
          fill="hsl(var(--primary) / 0.5)"
        />
        {/* Front layer - most visible */}
        <path
          d="M0,180 L0,140 Q200,115 400,135 T800,120 T1200,140 T1440,125 L1440,180 Z"
          fill="hsl(var(--primary) / 0.65)"
        />
      </svg>
    </div>
  );
};

export default WaveDecoration;
