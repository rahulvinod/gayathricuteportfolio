import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-text selection:bg-primary/30 selection:text-heading overflow-x-hidden">
      <Header />
      <main className="flex flex-col gap-16 md:gap-24 pb-20">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;