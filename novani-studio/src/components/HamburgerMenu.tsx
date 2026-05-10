import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Custom minimal hamburger icon - three lines (architectural, clean)
const MinimalHamburgerIcon = () => (
  <svg 
    width="28" 
    height="22" 
    viewBox="0 0 28 22" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    aria-hidden="true"
  >
    <line 
      x1="2" 
      y1="4" 
      x2="26" 
      y2="4" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round"
    />
    <line 
      x1="2" 
      y1="11" 
      x2="26" 
      y2="11" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round"
    />
    <line 
      x1="2" 
      y1="18" 
      x2="26" 
      y2="18" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round"
    />
  </svg>
);

interface HamburgerMenuProps {
  onNavigate: (section: string) => void;
}

const HamburgerMenu = ({ onNavigate }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);

  // Detect when we've scrolled past the hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100; // 100px offset for comfort
        setIsHero(scrollPosition < heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button - Adaptive color based on scroll position */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        className={`
          fixed top-6 right-6 z-50 
          p-2
          transition-all duration-500
          hover:scale-105
          active:scale-95
          focus:outline-none focus:ring-1 focus:ring-[hsl(var(--gold))]/50
          rounded-full
        `}
        style={{
          backgroundColor: "transparent",
          color: isHero ? "white" : "hsl(var(--charcoal))",
        }}
      >
        {isOpen ? (
          <X size={24} strokeWidth={1.5} />
        ) : (
          <MinimalHamburgerIcon />
        )}
      </button>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-40
          bg-[hsl(var(--charcoal))]/95 backdrop-blur-md
          transition-all duration-700
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
      >
        <nav
          className="flex flex-col items-center justify-center h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {menuItems.map((item, index) => (
            <button
              key={item.section}
              onClick={() => handleNavigate(item.section)}
              className={`
                relative
                text-5xl md:text-6xl lg:text-7xl
                mb-10 md:mb-12
                text-[hsl(var(--warm-white))]
                hover:text-[hsl(var(--gold))]
                transition-all duration-500
                active:scale-95
                group
                ${isOpen ? "fade-in-up" : ""}
              `}
              style={{
                animationDelay: `${index * 100}ms`,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {item.label}

              {/* Subtle underline on hover */}
              <span
                className="
                  absolute
                  left-1/2 
                  -bottom-3
                  h-px
                  w-0
                  bg-[hsl(var(--gold))]
                  transition-all duration-500
                  group-hover:w-12 group-hover:-translate-x-1/2
                "
              />
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;