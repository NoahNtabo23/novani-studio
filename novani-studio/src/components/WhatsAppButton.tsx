import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "254742981681"; // replace with real number
  const message =
    "Hello NOVANI Studio, I'm interested in your interior design services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-3 py-3 rounded-full transition-all duration-500 hover:scale-105 active:scale-95 group shadow-md"
      style={{
        backgroundColor: "hsl(var(--warm-white))",
        border: `1px solid hsl(var(--charcoal))`,
        color: "hsl(var(--charcoal))",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <MessageCircle size={20} strokeWidth={1.5} />

      <span
        className={`
          text-[11px] font-light tracking-wide uppercase
          whitespace-nowrap overflow-hidden transition-all duration-500
          ${isHovered ? "max-w-[120px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"}
        `}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          letterSpacing: "0.15em",
        }}
      >
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;