import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';
import Section from './Section';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="My Journey" subtitle="Work Experience">
      <div className="max-w-4xl mx-auto space-y-8">
        {EXPERIENCE.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all"
          >
            {/* Cute connector line if needed, but keeping it clean for now */}
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-heading font-bold text-heading group-hover:text-primary transition-colors">
                  {job.role}
                </h3>
                <div className="flex items-center gap-2 text-secondary font-bold mt-1">
                   <Building2 size={16} />
                   <span>{job.company}</span>
                </div>
              </div>
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-2xl font-bold text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {job.period}
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {job.description.map((desc, i) => (
                <li key={i} className="flex items-start text-text leading-relaxed">
                  <span className="text-2xl mr-3 leading-none text-secondary">❀</span>
                  <span className="mt-1">{desc}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-1.5 text-sm font-bold rounded-full bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-secondary/10 group-hover:text-secondary group-hover:border-secondary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;