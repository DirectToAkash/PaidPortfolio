import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const phoneNumber = "1234567890"; // TODO: Replace with actual number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-black/80 text-white px-6 py-3 rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all cursor-pointer group hover:bg-black hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5,
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse opacity-50" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative z-10"
        >
          <FaWhatsapp className="w-6 h-6" />
        </motion.div>
      </div>
      <span className="font-medium tracking-wide text-sm hidden sm:inline-block">
        Connect on WhatsApp
      </span>
    </motion.a>
  );
}
