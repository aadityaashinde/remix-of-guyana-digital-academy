interface ParallaxBannerProps {
  image: string;
  height?: string;
  overlay?: string;
  children?: React.ReactNode;
}

const ParallaxBanner = ({ image, height = "300px", overlay = "from-primary/90 to-primary/70", children }: ParallaxBannerProps) => {
  return (
    <div className="relative overflow-hidden" style={{ height }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${overlay}`} />
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default ParallaxBanner;
