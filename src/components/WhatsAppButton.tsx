import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      href="https://wa.me/917499827349"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-transform group"
      aria-label="Contact on WhatsApp"
    >
      <MessageSquare size={28} />
      
      {/* Pulse effect rings */}
      <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75 duration-1000"></span>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xl">
        Chat with me
      </span>
    </motion.a>
  );
}
