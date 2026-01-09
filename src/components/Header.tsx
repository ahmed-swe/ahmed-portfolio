import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'proof', label: 'Case Studies' },
    { id: 'process', label: 'Process' },
    { id: 'tech', label: 'Tech Stack' },
    { id: 'about', label: 'About' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F172A]/95 backdrop-blur-lg border-b border-gray-800/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-16 flex items-center">
                {/* Logo Image */}
                <a href="#home" className="flex items-center">
                  <img 
                    src="https://raw.githubusercontent.com/ahmed-swe/portfolio-assets/main/amshid-new.png"
                    alt="Logo"
                    className="object-contain"
                    style={{
                      height: '92px',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </a>

              </div>
              
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-gray-300 hover:text-cyan-400 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-lime-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-lg text-gray-900 hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
              >
                Let's Talk
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-[73px] right-0 bottom-0 w-full md:hidden bg-[#0F172A]/98 backdrop-blur-lg border-l border-gray-800 z-40"
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className="text-left px-4 py-3 text-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all border border-transparent hover:border-cyan-500/30"
            >
              {item.label}
            </motion.button>
          ))}

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              x: isMobileMenuOpen ? 0 : 20,
            }}
            transition={{ delay: navItems.length * 0.1 }}
            onClick={() => scrollToSection('contact')}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-lg text-gray-900 text-center hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
          >
            Let's Talk
          </motion.button>
        </nav>
      </motion.div>
    </>
  );
}
