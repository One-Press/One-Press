import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  // WhatsApp API requires digits only (no '+' or spaces)
  const whatsappUrl = "https://wa.me/17086306059"; 

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-white-800 text-sm font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
      
      {/* Icon */}
      <FaWhatsapp size={32} />
      
      {/* Optional: Subtle Ping Animation to catch eye */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping"></span>
    </a>
  );
}