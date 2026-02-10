import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-studio.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: "hsl(var(--warm-white))" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className={isVisible ? "fade-in-up" : "opacity-0"}>
          <img
            src={aboutImage}
            alt="NOVANI Studio Workspace"
            className="w-full h-[500px] object-cover rounded-sm shadow-lg"
          />
        </div>

        {/* Text */}
        <div className={isVisible ? "fade-in-up delay-200" : "opacity-0"}>
          <h2
            className="font-serif text-4xl md:text-6xl mb-6"
            style={{ color: "hsl(var(--charcoal))" }}
          >
            About NOVANI Studio
          </h2>

          <div
            className="space-y-4 font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "hsla(var(--foreground), 0.8)" }}
          >
            <p>
              NOVANI Studio is a luxury-focused interior design studio based in
              Nairobi, specializing in creating refined, elevated spaces that
              blend sophistication with functionality.
            </p>

            <p>
              Our expertise lies in high-end residential interiors, with a
              particular focus on premium kitchen design, custom wardrobes, and
              complete home transformations.
            </p>

            <p>
              With meticulous attention to detail and a commitment to
              excellence, we craft interiors that reflect the unique
              personalities and lifestyles of our discerning clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
