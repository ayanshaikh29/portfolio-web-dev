import { motion } from 'motion/react';
import { Zap, MonitorSmartphone, Search, MessageCircle } from 'lucide-react';

const limits = [
  {
    title: 'Fast Delivery',
    desc: 'Quick turnaround without compromising on code quality or design.',
    icon: Zap,
  },
  {
    title: 'Mobile Responsive',
    desc: 'Flawless experiences across all devices and screen sizes.',
    icon: MonitorSmartphone,
  },
  {
    title: 'SEO Friendly',
    desc: 'Optimized structure to rank higher on search engines.',
    icon: Search,
  },
  {
    title: 'WhatsApp Integration',
    desc: 'Direct communication channels built right into your site.',
    icon: MessageCircle,
  }
];

export default function About() {
  return (
    <section className="py-32 relative">
      {/* Decorative gradient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="uppercase tracking-[0.2em] text-sm text-primary">Why Choose Me</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8"
            >
              Building digital experiences that <span className="text-gradient">stand out.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60 mb-8 font-light leading-relaxed"
            >
              With a deep understanding of modern web technologies and design aesthetics, I create high-end portfolios, corporate websites, and eCommerce platforms that don't just look good, but drive real business results.
            </motion.p>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {limits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="glass-card p-8 rounded-[2rem]"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                  <item.icon size={20} className="text-white pt-0.5" />
                </div>
                <h4 className="text-xl font-display font-semibold mb-3">{item.title}</h4>
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
