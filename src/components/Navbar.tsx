import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'Projects', to: 'projects' },
  { name: 'Services', to: 'services' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="text-2xl font-display font-bold cursor-pointer text-white relative group"
        >
          Ayan
          <span className="text-gradient">.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-primary"
              className="text-sm font-medium tracking-wide uppercase text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/917499827349"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all font-medium text-sm backdrop-blur-sm"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-[72px] bg-bg/95 backdrop-blur-xl border-t border-border flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-medium text-white/80 hover:text-gradient transition-all cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/917499827349"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-bg font-bold mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
