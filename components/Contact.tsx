import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="text-center pb-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-gradient-to-b from-white to-primary/5 rounded-[3rem] p-12 shadow-xl border border-white"
      >
        <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 block">Ready to Connect?</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-heading mb-6">Let's build something cute together! ✨</h2>
        <p className="text-text text-lg mb-10 max-w-xl mx-auto">
          Whether you have a project in mind, a bug to squash, or just want to chat about React—my inbox is always open.
        </p>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-3 px-10 py-5 bg-heading text-white rounded-full hover:bg-primary hover:scale-105 transition-all font-bold shadow-lg"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>

        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <a href="#" className="p-4 bg-white rounded-full text-slate-400 hover:text-primary hover:shadow-lg transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 bg-white rounded-full text-slate-400 hover:text-primary hover:shadow-lg transition-all">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-400 text-sm font-bold flex items-center gap-2">
            Made with <Heart size={14} className="text-primary fill-primary animate-pulse" /> by {PERSONAL_INFO.name}
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;