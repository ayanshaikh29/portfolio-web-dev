import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Spice Garden Restaurant',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    link: 'https://spice-garden-restraurant.netlify.app/'
  },
  {
    title: 'Velour Roast Cafe',
    category: 'Cafe',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200',
    link: 'https://velour-roast.netlify.app/'
  },
  {
    title: 'Iron Peak Gym',
    category: 'Gym',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    link: 'https://iron-peak.netlify.app/'
  },
  {
    title: 'Noir Stich E-commerce',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200',
    link: 'https://noir-stich.netlify.app/'
  },
  {
    title: 'Medivance Hospital',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200',
    link: 'https://medivance-hospital-web.netlify.app/'
  },
  {
    title: 'Aura Estates',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    link: 'https://aura-estates-web.netlify.app/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-primary"></div>
            <span className="uppercase tracking-[0.2em] text-sm text-primary">Selected Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight"
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <div className="glass-card rounded-[2rem] overflow-hidden group h-full flex flex-col cursor-pointer border-white/5 hover:border-white/20 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-bg/40 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="glass px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md bg-black/40 border-white/10 text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-white/5 to-transparent">
                    <h3 className="text-2xl font-display font-semibold mb-6 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all duration-300"
                        onClick={(e) => e.stopPropagation()} // in case the whole card becomes clickable
                      >
                        Visit Site <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
