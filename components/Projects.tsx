import React from 'react';
import { motion } from 'framer-motion';
import { FolderHeart, Star } from 'lucide-react';
import Section from './Section';
import { FEATURED_PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Work" subtitle="What I've Built">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col h-full bg-white rounded-[2rem] p-6 shadow-lg shadow-gray-100 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="mb-6 flex items-start justify-between">
               <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-2xl text-white shadow-md transform rotate-3">
                 <FolderHeart size={24} />
               </div>
               {/* Decorative dots */}
               <div className="flex gap-1">
                 <div className="w-2 h-2 rounded-full bg-rose-200"></div>
                 <div className="w-2 h-2 rounded-full bg-indigo-200"></div>
                 <div className="w-2 h-2 rounded-full bg-teal-200"></div>
               </div>
            </div>

            <h3 className="text-xl font-heading font-bold text-heading mb-2">
              {project.title}
            </h3>
            
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-4 bg-primary/5 inline-block px-2 py-1 rounded-lg w-fit">
              {project.role}
            </p>
            
            <p className="text-text mb-6 text-sm leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100/50">
              <ul className="space-y-2">
                {project.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start text-xs text-slate-500 font-medium">
                    <Star size={12} className="text-yellow-400 mr-2 mt-0.5 flex-shrink-0 fill-yellow-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs font-bold text-secondary bg-secondary/5 px-2 py-1 rounded-md">
                  #{tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;