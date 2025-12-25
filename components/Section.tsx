import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          {subtitle && (
             <span className="block text-primary font-bold tracking-wider uppercase text-sm mb-2">{subtitle}</span>
          )}
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-heading relative inline-block">
            {title}
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-secondary/30 -z-10 rounded-full transform -rotate-1"></div>
          </h2>
        </motion.div>
      )}
      {children}
    </section>
  );
};

export default Section;