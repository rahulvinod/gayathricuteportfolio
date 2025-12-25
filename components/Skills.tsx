import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Toolbox" subtitle="My Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:border-primary/20 transition-colors"
          >
            {/* Background decoration */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <h3 className="text-xl font-heading font-bold text-heading mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-secondary rounded-full"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100 hover:bg-white hover:shadow-md hover:text-primary hover:border-primary/20 transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;