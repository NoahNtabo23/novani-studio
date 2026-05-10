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

  // Scroll fade-in animation
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
      className={`relative py-28 px-6 overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background:
          "linear-gradient(to bottom, hsl(var(--charcoal)), black)",
        color: "hsl(var(--warm-white))",
      }}
    >
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size:20px_20px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Gold Accent Line */}
        <div className="h-px w-24 bg-[hsl(var(--gold))] opacity-70 mb-16" />

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <h3 
              className="text-3xl tracking-wide"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              NOVANI Studio
            </h3>
            <p className="text-sm leading-relaxed text-[hsl(var(--warm-white))/80] max-w-sm"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.03em",
              }}
            >
              Luxury interior design studio specializing in premium kitchens,
              wardrobes, and refined residential interiors in Nairobi and its
              environs.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 
              className="text-lg tracking-wide"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-sm text-left text-[hsl(var(--warm-white))/70] transition-all duration-500 hover:text-[hsl(var(--gold))]"
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
          <div className="space-y-6">
            <h4 
              className="text-lg tracking-wide"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h4>
            <div className="space-y-4 text-sm text-[hsl(var(--warm-white))/80]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-[hsl(var(--gold))]" />
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
                <Phone className="w-4 h-4 mt-1 shrink-0 text-[hsl(var(--gold))]" />
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
                <Mail className="w-4 h-4 mt-1 shrink-0 text-[hsl(var(--gold))]" />
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
          <div className="space-y-6">
            <h4 
              className="text-lg tracking-wide"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Business Hours
            </h4>

            <div className="space-y-4 text-sm text-[hsl(var(--warm-white))/80]">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 shrink-0 text-[hsl(var(--gold))]" />
                <div>
                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.03em",
                    }}
                  >
                    Monday – Friday
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.03em",
                    }}
                  >
                    9:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 shrink-0 text-[hsl(var(--gold))]" />
                <div>
                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.03em",
                    }}
                  >
                    Saturday
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.03em",
                    }}
                  >
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
        <div className="border-t border-[hsl(var(--gold))/20] mb-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p 
            className="text-sm text-[hsl(var(--warm-white))/60] tracking-wide"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.06em",
            }}
          >
            © {currentYear} NOVANI Studio. All rights reserved.
          </p>

          <div className="flex space-x-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group text-[hsl(var(--warm-white))/60] transition-all duration-500 hover:text-[hsl(var(--gold))]"
              >
                <social.icon className="w-5 h-5 transform transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;