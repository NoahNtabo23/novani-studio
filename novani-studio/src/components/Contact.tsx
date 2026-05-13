import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const faqs = [
    {
      question: "How do I begin a project with NOVANI Studio?",
      answer:
        "Your journey begins with a consultation. Simply complete the contact form or reach out directly, and our team will schedule a conversation to understand your space and vision.",
    },
    {
      question: "What types of projects does NOVANI Studio specialize in?",
      answer:
        "We specialize in refined residential interiors including bespoke kitchens, wardrobes, living spaces, and full-home transformations.",
    },
    {
      question: "Do you offer design consultations?",
      answer:
        "Yes. Our consultations allow us to understand your space, lifestyle, and aesthetic preferences before developing a tailored design proposal.",
    },
    {
      question: "How long does an interior design project typically take?",
      answer:
        "Project timelines vary depending on scope and customization. After the consultation we provide a detailed project schedule.",
    },
    {
      question: "Can you work with my existing furniture or layout?",
      answer:
        "Absolutely. We often integrate existing elements into a refined design concept that enhances your space.",
    },
    {
      question: "Do you manage the full project execution?",
      answer:
        "Yes. Our studio oversees design, coordination, and installation to ensure the highest level of craftsmanship.",
    },
  ];
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      contactSchema.parse(formData);

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC
      );

      toast.success("Thank you. Our studio will be in touch shortly.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0].message);
      } else {
        console.error(error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-visible"
      style={{ backgroundColor: "hsl(var(--warm-white))" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading - Updated to Inter Light */}
        <h2
          className={`text-5xl md:text-6xl mb-6 ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.15em",
            color: "hsl(var(--charcoal))",
            textTransform: "uppercase",
          }}
        >
          Get In Touch
        </h2>

        {/* Subheading - Light, refined */}
        <p
          className={`text-xl md:text-2xl mb-16 font-light tracking-wide ${
            isVisible ? "fade-in-up delay-200" : "opacity-0"
          }`}
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            color: "hsla(var(--charcoal), 0.8)",
          }}
        >
          Your journey to an elevated, bespoke interior starts here.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-8 ${
            isVisible ? "fade-in-up delay-400" : "opacity-0"
          }`}
        >
          {/* Name, Email, Phone - Black border-bottom */}
          {["name", "email", "phone"].map((field, index) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              placeholder={
                field === "name"
                  ? "Full Name"
                  : field === "email"
                  ? "Email Address"
                  : "Phone Number (Optional)"
              }
              value={(formData as any)[field]}
              onChange={(e) =>
                setFormData({ ...formData, [field]: e.target.value })
              }
              className="w-full px-0 py-4 border-b bg-transparent text-[hsl(var(--charcoal))] text-sm transition-all duration-500 focus:outline-none focus:border-[hsl(var(--gold))] placeholder:text-[hsla(var(--foreground),0.4)]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                borderBottomColor: "#000000",
                borderBottomWidth: "1px",
              }}
            />
          ))}

          {/* Message - Full black borders (all sides) */}
          <div>
            <textarea
              rows={5}
              placeholder="Tell us about your space and design goals..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-5 py-4 bg-transparent text-[hsl(var(--charcoal))] text-sm resize-none transition-all duration-500 focus:outline-none focus:border-[hsl(var(--gold))] placeholder:text-[hsla(var(--foreground),0.4)] rounded-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                border: "1px solid #000000",
              }}
            />
          </div>

          {/* Button - Same style as Hero section (Gold background, white on hover) */}
          <button
            type="submit"
            className="
              group relative
              w-full
              px-12 py-4
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
              fontWeight: 300,
              backgroundColor: "hsl(var(--gold))",
              color: "hsl(var(--charcoal))",
              border: "1px solid hsl(var(--gold))",
            }}
          >
            <span className="relative z-10">Request a Consultation</span>
            
            {/* White overlay on hover (matches Hero button) */}
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
            
            {/* Text stays charcoal on hover */}
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
              <span className="relative z-10">Request a Consultation</span>
            </span>
          </button>
        </form>

        {/* FAQ Section */}
        <div className="mt-28 max-w-4xl mx-auto">
          {/* FAQ Title - Updated to Inter Light */}
          <h3
            className="text-4xl text-center mb-12"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.15em",
              color: "hsl(var(--charcoal))",
              textTransform: "uppercase",
            }}
          >
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;

              return (
                <div
                  key={index}
                  className="border-b border-[hsla(var(--foreground),0.1)] pb-6 group"
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left transition-all duration-300"
                    style={{
                      color: isOpen ? "hsl(var(--gold))" : "hsl(var(--charcoal))",
                    }}
                  >
                    {/* FAQ Question - Updated to Inter Light */}
                    <span
                      className="text-base md:text-lg tracking-wide transition-colors duration-300 group-hover:text-[hsl(var(--gold))]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 300,
                        letterSpacing: "0.1em",
                        color: isOpen ? "hsl(var(--gold))" : "hsl(var(--charcoal))",
                      }}
                    >
                      {faq.question}
                    </span>

                    {/* Plus → X with smooth rotation */}
                    <div className="relative flex items-center justify-center w-6 h-6">
                      <span
                        className={`absolute transition-all duration-300 ease-out ${
                          isOpen
                            ? "opacity-0 rotate-90 scale-75"
                            : "opacity-100 rotate-0 scale-100"
                        }`}
                        style={{ fontSize: "1.5rem", lineHeight: 1, fontWeight: 300 }}
                      >
                        +
                      </span>
                      <span
                        className={`absolute transition-all duration-300 ease-out ${
                          isOpen
                            ? "opacity-100 rotate-0 scale-100"
                            : "opacity-0 -rotate-90 scale-75"
                        }`}
                        style={{ fontSize: "1rem", lineHeight: 1, fontWeight: 300 }}
                      >
                        ✕
                      </span>
                    </div>
                  </button>

                  {/* Accordion answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className="mt-4 text-base leading-relaxed pb-2"
                      style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 300,
                        color: "hsla(var(--foreground),0.7)",
                        lineHeight: 1.7,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Discretion note */}
        
        
      </div>

      {/* HAIRLINE RULES - Solid black lines matching About section */}
      <div className="hidden lg:block absolute left-[8%] top-0 w-px bg-black/30 h-full pointer-events-none z-0" />
      <div className="hidden lg:block absolute right-[8%] top-0 w-px bg-black/30 h-full pointer-events-none z-0" />
    </section>
  );
};

export default Contact;