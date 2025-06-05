'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaRocket, FaUsers, FaBriefcase, FaPhone, FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-card/95 shadow-lg backdrop-blur-xl border-b border-border/20' : 'py-3 sm:py-4 bg-card/90 backdrop-blur-xl'}`;

  const logoSrc = theme === 'dark' ? '/logo-dark.svg' : '/logo.svg';

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center min-h-[60px] sm:min-h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 relative z-10">
          <div className="flex items-center justify-center">
            <Image 
              src={logoSrc} 
              alt="AE Software Logo" 
              width={140} 
              height={36} 
              className="w-auto h-8 sm:h-9 md:h-10 transition-all duration-300 hover:scale-105" 
              priority 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 relative z-10">
          <Link href="/#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Hizmetler
          </Link>
          <Link href="/#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Hakkımızda
          </Link>
          <Link href="/#portfolio" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Referanslar
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            İletişim
          </Link>
          <ThemeToggle />
          <Button asChild className="rounded-full">
            <Link href="/#contact">
              Teklif Al
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-3 lg:hidden relative z-10">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden relative group hover:bg-primary/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="relative w-5 h-5">
                  <span 
                    className={`absolute top-1 left-0 w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  />
                  <span 
                    className={`absolute top-2.5 left-0 w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span 
                    className={`absolute top-4 left-0 w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  />
                </div>
                <span className="sr-only">Menüyü aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[280px] sm:w-[320px] border-l border-border/50 backdrop-blur-xl bg-background/95 p-0"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-center py-6 border-b border-border/20">
                  <div className="flex items-center justify-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg px-4 py-2">
                    <Image 
                      src={logoSrc} 
                      alt="AE Software Logo" 
                      width={130} 
                      height={34} 
                      className="w-auto h-8 transition-all duration-300" 
                    />
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-1 py-4 flex-1 px-4">
                  {[
                     { href: '/#services', label: 'Hizmetler', icon: FaRocket },
                     { href: '/#about', label: 'Hakkımızda', icon: FaUsers },
                     { href: '/#portfolio', label: 'Referanslar', icon: FaBriefcase },
                     { href: '/#contact', label: 'İletişim', icon: FaPhone }
                   ].map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 transform hover:translate-x-1 animate-in slide-in-from-right-5`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <item.icon className="text-lg group-hover:scale-110 transition-transform duration-300 text-primary" />
                      <span className="group-hover:font-semibold transition-all duration-300">
                        {item.label}
                      </span>
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button */}
                <div className="pt-4 border-t border-border/20 px-4 pb-4">
                  <Button 
                    asChild 
                    className="w-full rounded-xl h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/#contact" className="flex items-center justify-center gap-2">
                       <FaStar className="text-yellow-400" />
                       Teklif Al
                       <FaStar className="text-yellow-400" />
                     </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;