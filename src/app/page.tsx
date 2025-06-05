'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dinamik olarak bileşenleri yükle
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const Stats = dynamic(() => import('@/components/Stats'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

// Yükleme göstergesi
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Sayfa geçiş animasyonu için varyantlar
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

export default function Home() {
  return (
    <main className="min-h-screen theme-transition">
      <Navbar />
      
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Services />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Stats />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          id="portfolio"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Portfolio />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </main>
  );
}
