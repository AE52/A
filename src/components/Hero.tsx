'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 z-0" />
      
      {/* Animated circles */}
      <motion.div 
        className="absolute top-10 sm:top-20 right-4 sm:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 rounded-full bg-accent/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text content */}
          <motion.div 
            className="flex-1 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-2xl font-bold text-primary">
                AE Software
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Modern Yazılım Çözümleri
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              İşletmenizi bir sonraki seviyeye taşıyacak yenilikçi ve özelleştirilmiş yazılım çözümleri sunuyoruz.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start w-full sm:w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="rounded-full w-full sm:w-auto">
                  <Link href="/#services">
                    Hizmetlerimiz
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                  <Link href="/#contact">
                    İletişime Geçin
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Hero image/illustration */}
          <motion.div 
            className="flex-1 relative mt-8 sm:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] glass-effect rounded-2xl p-4 mx-auto max-w-[500px] lg:max-w-none">
              <motion.div 
                className="absolute top-4 left-4 w-12 h-12"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Image src="/globe.svg" alt="Globe" width={48} height={48} />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/4 right-[20%] sm:right-1/4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/window.svg" alt="Window" width={48} height={48} className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[64px] md:h-[64px]" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/3 sm:bottom-1/4 left-[20%] sm:left-1/3"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Image src="/file.svg" alt="File" width={48} height={48} className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[56px] md:h-[56px]" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-lg sm:text-xl font-mono text-primary"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                &lt;/&gt;
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;