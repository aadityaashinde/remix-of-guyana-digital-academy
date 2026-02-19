import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Extracts YouTube video ID from an embed URL.
 * e.g. "https://www.youtube.com/embed/bP8xPtOqiYw" → "bP8xPtOqiYw"
 */
const getVideoId = (embedUrl: string) => {
  const match = embedUrl.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
};

interface YouTubeLazyProps {
  url: string;
  title: string;
  thumbnail?: string;
  className?: string;
}

const YouTubeLazy = ({ url, title, thumbnail, className = "" }: YouTubeLazyProps) => {
  const [playing, setPlaying] = useState(false);
  const videoId = getVideoId(url);
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (playing) {
    return (
      <iframe
        className={`w-full h-full ${className}`}
        src={`${url}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`relative w-full h-full group cursor-pointer bg-muted/30 ${className}`}
      aria-label={`Play ${title}`}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-destructive/90 group-hover:bg-destructive group-hover:scale-110 transition-all flex items-center justify-center shadow-xl">
          <Play className="w-7 h-7 text-white ml-1" fill="white" />
        </div>
      </div>
    </button>
  );
};

export default YouTubeLazy;
