import { motion } from 'motion/react';
import { LayoutTemplate, ShoppingCart, Globe, Palette } from 'lucide-react';

const services = [
  {
    title: 'Business Website Development',
    description: 'Custom, high-performing websites tailored to showcase your business and attract clients.',
    icon: Globe,
  },
  {
    title: 'E-commerce Websites',
    description: 'Secure, scalable online stores designed to maximize conversions and sales.',
    icon: ShoppingCart,
  },
  {
    title: 'Landing Pages',
    description: 'High-converting landing pages built for marketing campaigns and lead generation.',
    icon: LayoutTemplate,
  },
  {
    title: 'Website Redesign',
    description: 'Revamping outdated websites into modern, fast, and responsive digital experiences.',
    icon: Palette,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-surface">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-primary"></div>
            <span className="uppercase tracking-[0.2em] text-sm text-primary">Capabilities</span>
            <div className="w-12 h-[1px] bg-primary"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight"
          >
            My Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 md:p-12 glass rounded-[2rem] border-white/5 hover:bg-white/5 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                  <Icon size={120} className="text-primary transform rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Icon size={32} className="text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-semibold mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
