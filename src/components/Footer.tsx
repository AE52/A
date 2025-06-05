'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-card text-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Şirket Bilgileri */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold gradient-text">AE</span>
                <span className="ml-1 text-xl font-semibold">SOFTWARE</span>
              </Link>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-foreground/70 mt-4">
              Yazılım çözümleri ile işinizi büyütün. Modern teknolojiler kullanarak web ve mobil uygulamalar geliştiriyoruz.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex space-x-4 mt-6">
              <a 
                href="https://www.linkedin.com/in/aerenozdemir/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://github.com/AE52" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Hizmetler */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-4">
              Hizmetler
            </motion.h3>
            
            <motion.ul variants={containerVariants} className="space-y-2">
              <motion.li variants={itemVariants}>
                <Link href="/#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Web Geliştirme
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Mobil Uygulama
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/#services" className="text-foreground/70 hover:text-primary transition-colors">
                  UI/UX Tasarım
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Yazılım Danışmanlığı
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/#services" className="text-foreground/70 hover:text-primary transition-colors">
                  E-Ticaret Çözümleri
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          {/* Şirket */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-4">
              Şirket
            </motion.h3>
            
            <motion.ul variants={containerVariants} className="space-y-2">
              <motion.li variants={itemVariants}>
                <Link href="/#about" className="text-foreground/70 hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/#portfolio" className="text-foreground/70 hover:text-primary transition-colors">
                  Referanslar
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  İletişim
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/blog" className="text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link href="/kariyer" className="text-foreground/70 hover:text-primary transition-colors">
                  Kariyer
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          {/* İletişim */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-4">
              İletişim
            </motion.h3>
            
            <motion.div variants={itemVariants} className="flex items-start space-x-3">
              <div className="text-primary mt-1">📍</div>
              <p className="text-foreground/70">İstanbul, Türkiye</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start space-x-3">
              <div className="text-primary mt-1">📧</div>
              <p className="text-foreground/70">info@aesoftware.com</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start space-x-3">
              <div className="text-primary mt-1">📱</div>
              <p className="text-foreground/70">+90 (555) 123 45 67</p>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70 text-sm mb-4 md:mb-0">
              © {currentYear} AE Software. Tüm hakları saklıdır.
            </p>
            
            <div className="flex space-x-6">
              <Link href="/gizlilik-politikasi" className="text-foreground/70 hover:text-primary text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-foreground/70 hover:text-primary text-sm transition-colors">
                Kullanım Koşulları
              </Link>
              <Link href="/cerez-politikasi" className="text-foreground/70 hover:text-primary text-sm transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;