import heroImage from "@/assets/hero-kitchen.webp";

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

const Hero = ({ onExploreClick, onContactClick }: HeroProps) => {
  return (
    <section id="home" className="relative h-screen w-full overflow-visible">
      {/* Hero Image with subtle dark overlay - slightly darker for better text contrast */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Kitchen Interior by NOVANI Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Wordmark — more visible on desktop */}
      <div className="relative z-10 pt-8 md:pt-10 flex justify-center fade-in">
        <span 
          className="text-white text-[11px] md:text-sm font-light uppercase tracking-[0.3em] drop-shadow-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          NOVANI Studio
        </span>
      </div>

      {/* CTAs — anchored low to let the image breathe */}
      <div className="absolute inset-x-0 bottom-[15%] md:bottom-[19%] z-10 flex flex-col items-center gap-6 px-6">
        
        {/* Primary CTA Button - Gold border + background, white on hover */}
        <button
          onClick={onExploreClick}
          className="
            group relative
            px-10 py-4 md:px-14 md:py-4.5
            text-[11px] md:text-xs
            font-light
            tracking-[0.25em]
            uppercase
            transition-all duration-500
            hover:-translate-y-0.5
            active:translate-y-0
          "
          style={{
            fontFamily: "'Inter', sans-serif",
            backgroundColor: "hsl(var(--gold))",
            color: "hsl(var(--charcoal))",
            border: "1px solid hsl(var(--gold))",
          }}
        >
          <span className="relative z-10">Explore Our Work</span>
          
          {/* White overlay on hover */}
          <span
            className="
              absolute inset-0
              opacity-0
              group-hover:opacity-100
              transition-all duration-500
            "
            style={{
              backgroundColor: "white",
            }}
          />
          
          {/* Text turns charcoal on hover (already charcoal, but maintain) */}
          <span
            className="
              absolute inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
              flex items-center justify-center
            "
            style={{
              color: "hsl(var(--charcoal))",
            }}
          >
            <span className="relative z-10">Explore Our Work</span>
          </span>
        </button>

        {/* Secondary Link - Full white border, gold on hover */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onContactClick();
          }}
          className="
            group/link
            relative
            text-white
            text-[10px] md:text-[11px]
            font-light
            tracking-[0.2em]
            uppercase
            transition-all duration-300
            hover:tracking-[0.25em]
          "
          style={{ 
            fontFamily: "'Inter', sans-serif",
            textDecoration: "none",
            border: "1px solid white",
            padding: "0.75rem 2rem",
            borderRadius: "0",
          }}
        >
          <span className="transition-colors duration-300 group-hover/link:text-[hsl(var(--gold))]">
            Get in Touch
          </span>
          {/* Remove the underline since we have full border now */}
        </a>
      </div>

      {/* Minimal Scroll Indicator - more visible */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in delay-800 z-10">
        <div className="w-px h-16 bg-white/50 animate-pulse" />
      </div>

      {/* Vertical Hairline Rules - More visible on desktop */}
      <div className="hidden lg:block absolute left-[8%] top-0 w-px bg-white/80 h-full pointer-events-none z-20" />
      <div className="hidden lg:block absolute right-[8%] top-0 w-px bg-white/80 h-full pointer-events-none z-20" />
    </section>
  );
};

export default Hero;