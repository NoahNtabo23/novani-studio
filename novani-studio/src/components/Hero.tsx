import heroImage from "@/assets/hero-kitchen.jpg";

interface HeroProps {
  onExploreClick: () => void;
}

const Hero = ({ onExploreClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Kitchen Interior by NOVANI Studio"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "hsla(var(--charcoal), 0.5)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 fade-in-up"
          style={{ color: "hsl(var(--warm-white))" }}
        >
          Elevated Living. Refined Interiors.
        </h1>

        <p
          className="font-sans text-lg md:text-xl mb-12 max-w-2xl fade-in-up delay-200"
          style={{ color: "hsla(var(--warm-white), 0.9)" }}
        >
          NOVANI Studio — Luxury Kitchen & Interior Design in Nairobi.
        </p>

        {/* CTA Button (replaces shadcn Button) */}
        <button
          onClick={onExploreClick}
          className="px-8 py-6 text-base font-medium transition-luxury fade-in-up delay-400"
          style={{
            backgroundColor: "hsl(var(--gold))",
            color: "hsl(var(--charcoal))",
          }}
        >
          Explore Our Work
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in delay-800">
        <div
          className="w-[1px] h-16 animate-pulse"
          style={{ backgroundColor: "hsla(var(--warm-white), 0.3)" }}
        />
      </div>
    </section>
  );
};

export default Hero;
