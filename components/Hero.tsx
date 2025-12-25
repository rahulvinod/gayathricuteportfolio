import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Cute Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left z-10"
        >
          <div className="inline-block px-4 py-2 mb-4 bg-white/60 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm">
            <span className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase">
              <Sparkles size={14} /> 
              Frontend Engineer
            </span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-heading mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{PERSONAL_INFO.name}</span>! <span className="inline-block animate-bounce">👋</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
             I craft beautiful, accessible, and high-performance web experiences with code & love.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              See my work <ArrowDown size={18} />
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-4 bg-white text-heading border-2 border-primary/20 rounded-full font-bold hover:border-primary hover:text-primary transition-all flex items-center gap-2"
            >
              Contact Me <Mail size={18} />
            </a>
          </div>
          
          {/* Social Pills */}
          <div className="mt-8 flex gap-3 justify-center md:justify-start">
             <a href="#" className="p-3 bg-white rounded-full shadow-sm text-text hover:text-primary hover:scale-110 transition-all">
                <Linkedin size={20} />
             </a>
             <a href="#" className="p-3 bg-white rounded-full shadow-sm text-text hover:text-primary hover:scale-110 transition-all">
                <Github size={20} />
             </a>
          </div>
        </motion.div>

        {/* Visual/Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full max-w-md"
        >
          <div className="relative aspect-square">
             {/* Decorative circles */}
             <div className="absolute inset-0 border-4 border-dashed border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-8 border-white">
                {/* Avatar Placeholder: Replace src with actual image if available, or use this cute default */}
                <img 
                  src="https://api.dicebear.com/9.x/micah/svg?seed=Gayathri&backgroundColor=ffdfbf" 
                  alt="Gayathri Avatar" 
                  className="w-full h-full object-cover"
                />
             </div>
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-secondary/10"
             >
                <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <code className="text-xs font-bold">&lt;/&gt;</code>
                   </div>
                   <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Experience</p>
                      <p className="text-heading font-heading font-bold">4+ Years</p>
                   </div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;