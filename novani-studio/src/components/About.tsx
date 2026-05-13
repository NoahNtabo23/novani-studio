import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-studio.webp";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[hsl(var(--warm-white))] py-32 overflow-visible"
    >
      {/* HAIRLINE RULES - Positioned at 8% from edges */}
      <div className="hidden lg:block absolute left-[8%] top-0 w-px bg-black/30 h-full pointer-events-none z-30" />
      <div className="hidden lg:block absolute right-[8%] top-0 w-px bg-black/30 h-full pointer-events-none z-30" />

      {/* Content container - spans exactly between the hairlines */}
      <div 
        className="relative mx-auto"
        style={{
          width: "84%",
          marginLeft: "8%",
          marginRight: "8%",
        }}
      >
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* IMAGE - Full width within container */}
          <div
            className={`
              w-full md:w-1/2
              transition-all duration-1000
              ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-12 -translate-x-6"}
            `}
          >
            <div className="relative w-full overflow-hidden rounded-sm shadow-lg">
              <img
                src={aboutImage}
                alt="NOVANI Studio design workspace showcasing craftsmanship"
                className="w-full h-[480px] md:h-[560px] object-cover"
                style={{
                  display: "block",
                  objectPosition: "center center",
                }}
              />
            </div>
          </div>

          {/* TEXT - Full width within container */}
          <div className="w-full md:w-1/2">
            <h2
              className={`
                mb-8 transition-all duration-1000
                ${isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-10"}
              `}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.15em",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "hsl(var(--charcoal))",
                lineHeight: 1.3,
                textTransform: "uppercase",
              }}
            >
              About NOVANI Studio
            </h2>

            <div
              className="space-y-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                color: "hsla(var(--foreground), 0.85)",
                fontSize: "1rem",
                lineHeight: "1.8",
                letterSpacing: "0.03em",
              }}
            >
              <p
                className={`
                  transition-all duration-1000
                  ${isVisible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8"}
                `}
              >
                NOVANI Studio is a luxury-focused interior design studio based in
                Nairobi, specializing in creating refined, elevated spaces that
                blend sophistication with functionality.
              </p>

              <p
                className={`
                  transition-all duration-1000
                  ${isVisible ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8"}
                `}
              >
                Our expertise lies in high-end residential interiors, with a
                particular focus on premium kitchen design, custom wardrobes, and
                complete home transformations.
              </p>

              <p
                className={`
                  transition-all duration-1000
                  ${isVisible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-8"}
                `}
              >
                With meticulous attention to detail and a commitment to
                excellence, we craft interiors that reflect the unique
                personalities and lifestyles of our discerning clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;