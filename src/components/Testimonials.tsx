import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useCallback } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Owner, Velour Roast Cafe',
    text: 'Ayan completely transformed our digital presence. The new website is not only beautiful but incredibly fast. We saw a 40% increase in online inquiries in the first month!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'David Chen',
    role: 'Founder, Noir Stich',
    text: 'Working with Ayan was a game-changer for our e-commerce store. His attention to detail and modern design aesthetic gave us exactly the premium look we wanted.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director, Aura Estates',
    text: 'The real estate platform Ayan built is stunning. The 3D interactions and smooth scrolling make exploring properties a joy. Highly recommend his services!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Michael Torres',
    role: 'Manager, Iron Peak Gym',
    text: 'Fast delivery and flawless execution. Ayan captured the energy of our gym perfectly. The site is mobile-responsive and looks great on every device.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-32 relative overflow-hidden bg-surface border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-primary"></div>
            <span className="uppercase tracking-[0.2em] text-sm text-primary">Testimonials</span>
            <div className="w-12 h-[1px] bg-primary"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Client Feedback
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div className="flex-[0_0_100%] min-w-0 pl-4 md:pl-8 pr-4" key={i}>
                  <div className="glass-card p-8 md:p-12 rounded-[2rem] relative">
                    <Quote className="absolute top-8 right-8 text-white/5" size={80} />
                    
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80 mb-8 relative z-10">
                      "{t.text}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                      <div>
                        <h5 className="font-display font-semibold text-lg">{t.name}</h5>
                        <p className="text-sm text-white/40">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={scrollPrev} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <span className="sr-only">Previous</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={scrollNext} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <span className="sr-only">Next</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
