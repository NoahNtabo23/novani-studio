import heroImage from "@/assets/hero-kitchen.webp";

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

const Hero = ({ onExploreClick, onContactClick }: HeroProps) => {
  return (
    <section id="home" className="relative h-screen w-full overflow-visible">
      {/* Hero Image with subtle dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Kitchen Interior by NOVANI Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Wordmark — subtle, minimal, top center */}
      <div className="relative z-10 pt-8 md:pt-10 flex justify-center fade-in">
        <span 
          className="text-white/70 text-[11px] md:text-xs font-light uppercase tracking-[0.3em]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          NOVANI Studio
        </span>
      </div>

      {/* CTAs — anchored low to let the image breathe */}
      <div className="absolute inset-x-0 bottom-[15%] md:bottom-[19%] z-10 flex flex-col items-center gap-5 px-6">
        {/* Primary CTA Button - Turns solid white on hover */}
        <button
          onClick={onExploreClick}
          className="
            group relative
            px-10 py-3.5 md:px-12 md:py-4
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
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <span className="relative z-10">Explore Our Work</span>
          
          {/* White background on hover */}
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
          
          {/* Text turns charcoal on hover */}
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

        {/* Secondary Link - Get in Touch with gold underline on hover */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onContactClick();
          }}
          className="
            group/link
            relative
            text-white/60
            text-[10px] md:text-[11px]
            font-light
            tracking-[0.2em]
            uppercase
            transition-all duration-300
            hover:tracking-[0.25em]
          "
          style={{ 
            fontFamily: "'Inter', sans-serif",
            textDecoration: "none" 
          }}
        >
          <span className="transition-colors duration-300 group-hover/link:text-[hsl(var(--gold))]">
            Get in Touch
          </span>
          {/* Underline that appears on hover */}
          <span
            className="
              absolute
              -bottom-1
              left-0
              w-0
              h-px
              transition-all duration-300
              group-hover/link:w-full
            "
            style={{
              backgroundColor: "hsl(var(--gold))",
            }}
          />
        </a>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in delay-800 z-10">
        <div className="w-px h-12 bg-white/30 animate-pulse" />
      </div>

      {/* Vertical Hairline Rules - Solid white lines (fully visible, no fade) */}
      <div className="hidden lg:block absolute left-[8%] top-0 w-px bg-white/60 h-full pointer-events-none z-20" />
      <div className="hidden lg:block absolute right-[8%] top-0 w-px bg-white/60 h-full pointer-events-none z-20" />
    </section>
  );
};

export default Hero;