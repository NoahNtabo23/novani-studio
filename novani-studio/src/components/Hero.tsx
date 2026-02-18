import heroImage from "@/assets/hero-kitchen.jpg";

interface HeroProps {
  onExploreClick: () => void;
}

const Hero = ({ onExploreClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury Kitchen Interior by NOVANI Studio"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* VERY LIGHT overlay just for readability */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-24 pb-32 md:pt-32 md:pb-40 max-w-5xl mx-auto">

        {/* Headline */}
        <h1
          className="font-serif text-white leading-[1.08] tracking-[0.04em] mb-10"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
          }}
        >
          Elevated Living. Refined<br />
          Interiors.
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/85 text-base md:text-lg tracking-wide mb-14"
        >
          NOVANI Studio — Luxury Kitchen & Interior Design in Nairobi.
        </p>

        {/* CTA Button */}
        <button
          onClick={onExploreClick}
          className="
            px-12 py-5
            text-sm md:text-base
            font-semibold
            tracking-widest
            rounded-md
            transition-all duration-500
            hover:-translate-y-1 hover:shadow-xl
            active:scale-[0.97]
          "
          style={{
            backgroundColor: "hsl(var(--gold))",
            color: "hsl(var(--charcoal))",
          }}
        >
          Explore Our Work
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
