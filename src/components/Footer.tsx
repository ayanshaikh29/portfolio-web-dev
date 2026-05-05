import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <footer className="relative bg-[#020204] pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Huge Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <h2 className="text-[12rem] md:text-[20rem] font-display font-bold leading-none whitespace-nowrap">
          AYAN SHAIKH
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <button 
          onClick={scrollToTop}
          className="w-16 h-16 glass rounded-full flex items-center justify-center hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 mb-12 shadow-lg group"
        >
          <ArrowUp size={24} className="text-white group-hover:text-primary transition-colors" />
        </button>

        <div className="flex gap-6 mb-12">
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full text-sm font-medium text-white/50 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            Developed by <span className="text-white">Ayan Shaikh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
