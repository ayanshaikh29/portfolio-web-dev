import { motion } from 'motion/react';
import { Send, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="uppercase tracking-[0.2em] text-sm text-primary">Get In Touch</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              Let's create something <span className="text-gradient">extraordinary.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60 mb-10 font-light"
            >
              Ready to elevate your online presence? Drop me a message or connect directly via WhatsApp.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <a 
                href="https://wa.me/917499827349" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-6 p-6 glass rounded-2xl border-white/5 hover:border-[#25D366]/30 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">WhatsApp</p>
                  <p className="font-display font-semibold text-xl">+91 7499827349</p>
                </div>
              </a>

              <a 
                href="tel:+917499827349" 
                className="group flex items-center gap-6 p-6 glass rounded-2xl border-white/5 hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Call Now</p>
                  <p className="font-display font-semibold text-xl">+91 7499827349</p>
                </div>
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 rounded-[2rem]"
            >
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-white/60 ml-2 uppercase tracking-wide">Enter Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm text-white/60 ml-2 uppercase tracking-wide">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="+1 234 567 890"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm text-white/60 ml-2 uppercase tracking-wide">Your Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none"
                  ></textarea>
                </div>
                
                <button className="group relative w-full px-8 py-5 bg-white text-bg font-bold rounded-xl overflow-hidden mt-4">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white z-20 translate-y-full group-hover:translate-y-0 duration-300">
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
