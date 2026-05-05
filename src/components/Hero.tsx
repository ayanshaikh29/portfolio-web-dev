import { motion } from 'motion/react';
import { Link } from 'react-scroll';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bg opacity-90 z-10" />
        <motion.div
  animate={{
    scale: [1, 1.2, 1],
    rotate: [0, 90, 0],
  }}
  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"
/>
        <motion.div
  animate={{
    scale: [1, 1.5, 1],
    rotate: [0, -90, 0],
  }}
  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
  className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px]"
/>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 z-10 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <Tilt tiltReverse={true} tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} transitionSpeed={1500} className="w-full">
        <div className="container relative z-20 px-6 md:px-12 flex flex-col items-center text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-white/10 shadow-[0_0_20px_rgba(0,242,254,0.1)] transform-gpu"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide uppercase text-white/80">Available for Freelance UI/UX</span>
          </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6 max-w-5xl"
        >
          I Build <span className="text-gradient">High-Converting</span> Websites for Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/60 mb-10 tracking-wide font-light max-w-2xl"
        >
          Modern <span className="text-white/40 mx-2">•</span> Fast <span className="text-white/40 mx-2">•</span> Client-Focused
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
        >
          <Link
            to="projects"
            smooth={true}
            duration={800}
            className="group relative px-8 py-4 bg-white text-bg font-bold rounded-full overflow-hidden w-full sm:w-auto cursor-pointer"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white z-20 translate-y-full group-hover:translate-y-0 duration-300">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <a
            href="https://wa.me/917499827349"
            target="_blank"
            rel="noreferrer"
            className="group px-8 py-4 glass border-white/20 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 font-medium"
          >
            Contact Me <MessageSquare size={18} className="text-[#25D366]" />
          </a>
        </motion.div>
        </div>
      </Tilt>
      
      {/* Scroll indicator overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 w-full h-full bg-gradient-to-b from-transparent via-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
