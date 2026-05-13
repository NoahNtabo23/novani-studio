import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Music2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const navigationLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/novanistudio_",
      label: "Instagram",
    },
    {
      icon: Music2,
      href: "https://tiktok.com/@novanistudio_ke",
      label: "TikTok",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className={`relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background:
          "linear-gradient(to bottom, hsl(var(--charcoal)), black)",
        color: "hsl(var(--warm-white))",
      }}
    >
      {/* ============================================ */}
      {/* GOLD U-SHAPE - Vertical lines from top to bottom border */}
      {/* ============================================ */}
      
      {/* Main content wrapper with bottom border */}
      <div 
        className="relative mx-auto"
        style={{
          borderBottom: "2px solid rgba(212, 175, 55, 0.6)",
          width: "84%",
        }}
      >
        {/* Left vertical gold line - from top of footer to the bottom border */}
        <div 
          className="absolute top-0 w-px bg-[hsl(var(--gold))]/50 pointer-events-none z-0"
          style={{
            left: "-1px",
            bottom: "-2px",
          }}
        />
        
        {/* Right vertical gold line - from top of footer to the bottom border */}
        <div 
          className="absolute top-0 w-px bg-[hsl(var(--gold))]/50 pointer-events-none z-0"
          style={{
            right: "-1px",
            bottom: "-2px",
          }}
        />

        {/* Content inside the U-shape */}
        <div className="px-6 md:px-10 lg:px-14 py-10 md:py-12 lg:py-14">

          {/* Gold Accent Line */}
          <div className="h-px w-16 bg-[hsl(var(--gold))] opacity-60 mb-12" />

          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-12">

            {/* Brand */}
            <div className="space-y-5">
              <h3 
                className="text-2xl tracking-wide"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                NOVANI Studio
              </h3>
              <p className="text-sm leading-relaxed text-[hsl(var(--warm-white))/70] max-w-xs"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.03em",
                }}
              >
                Luxury interior design studio specializing in premium kitchens,
                wardrobes, and refined residential interiors in Nairobi.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-5">
              <h4 
                className="text-base tracking-wide"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-2">
                {navigationLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-left text-[hsl(var(--warm-white))/60] transition-all duration-500 hover:text-[hsl(var(--gold))]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <h4 
                className="text-base tracking-wide"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Contact
              </h4>
              <div className="space-y-3 text-sm text-[hsl(var(--warm-white))/70]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(var(--gold))]" />
                  <span 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.03em",
                    }}
                  >
                    Nairobi, Kenya
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(var(--gold))]" />
                  <a 
                    href="tel:+254742981681"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.03em",
                    }}
                    className="hover:text-[hsl(var(--gold))] transition-colors duration-300"
                  >
                    +254 742 981 681
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(var(--gold))]" />
                  <a 
                    href="mailto:novanistudio.ke@gmail.com"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.03em",
                    }}
                    className="hover:text-[hsl(var(--gold))] transition-colors duration-300"
                  >
                    novanistudio.ke@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-5">
              <h4 
                className="text-base tracking-wide"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Business Hours
              </h4>

              <div className="space-y-3 text-sm text-[hsl(var(--warm-white))/70]">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(var(--gold))]" />
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: "0.03em" }}>
                      Monday – Friday
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: "0.03em" }}>
                      9:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(var(--gold))]" />
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: "0.03em" }}>
                      Saturday
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: "0.03em" }}>
                      10:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>

                <p 
                  className="ml-7"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    letterSpacing: "0.03em",
                  }}
                >
                  Sunday – Closed
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[hsl(var(--gold))/20] my-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <p 
              className="text-xs text-[hsl(var(--warm-white))/50] tracking-wide"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.06em",
              }}
            >
              © {currentYear} NOVANI Studio. All rights reserved.
            </p>

            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group text-[hsl(var(--warm-white))/50] transition-all duration-500 hover:text-[hsl(var(--gold))]"
                >
                  <social.icon className="w-4 h-4 transform transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;