import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HamburgerMenuProps {
  onNavigate: (section: string) => void;
}

const HamburgerMenu = ({ onNavigate }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        className="fixed top-6 right-6 z-50 p-3 rounded-sm transition-luxury"
        style={{
          backgroundColor: "hsl(var(--gold))",
          color: "hsl(var(--charcoal))",
        }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-700 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "hsla(var(--charcoal), 0.95)" }}
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
              className={`font-serif text-5xl md:text-7xl mb-8 transition-luxury ${
                isOpen ? "fade-in-up" : ""
              }`}
              style={{
                color: "hsl(var(--warm-white))",
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "hsl(var(--gold))")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "hsl(var(--warm-white))")
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
