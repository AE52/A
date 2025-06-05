'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-card shadow-md' : 'py-4 bg-card backdrop-blur-lg'}`;

  const logoSrc = theme === 'dark' ? '/logo-dark.svg' : '/logo.svg';

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logoSrc} alt="AE Software Logo" width={150} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#services" className="text-foreground/80 hover:text-primary transition-colors">
            Hizmetler
          </Link>
          <Link href="/#about" className="text-foreground/80 hover:text-primary transition-colors">
            Hakkımızda
          </Link>
          <Link href="/#portfolio" className="text-foreground/80 hover:text-primary transition-colors">
            Referanslar
          </Link>
          <Link href="/#contact" className="text-foreground/80 hover:text-primary transition-colors">
            İletişim
          </Link>
          <ThemeToggle />
          <motion.a
            href="/#contact"
            className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Teklif Al
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-foreground focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-card backdrop-blur-lg absolute top-full left-0 right-0 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                href="/#services" 
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Hizmetler
              </Link>
              <Link 
                href="/#about" 
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link 
                href="/#portfolio" 
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Referanslar
              </Link>
              <Link 
                href="/#contact" 
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                İletişim
              </Link>
              <motion.a
                href="/#contact"
                className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors inline-block text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                Teklif Al
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;