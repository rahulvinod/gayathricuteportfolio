import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 px-4 pt-4 flex justify-center pointer-events-none">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`w-full max-w-5xl rounded-full transition-all duration-300 pointer-events-auto ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-primary/10 py-3 px-6' 
            : 'bg-transparent py-4 px-4'
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-tr from-primary to-secondary text-white p-2 rounded-full shadow-md group-hover:scale-110 transition-transform">
                <Heart size={18} fill="currentColor" />
            </div>
            <span className="font-heading font-bold text-xl text-heading tracking-tight">
              G.IG
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-bold text-text hover:text-primary rounded-full hover:bg-primary/5 transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-heading hover:text-primary p-2 bg-white rounded-full shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 mx-4 bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden pointer-events-auto"
          >
            <nav className="flex flex-col p-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 text-heading font-bold hover:bg-primary/10 hover:text-primary rounded-xl text-center transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </motion.header>
    </div>
  );
};

export default Header;