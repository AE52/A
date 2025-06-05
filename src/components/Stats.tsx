'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  {
    id: 1,
    number: 150,
    suffix: '+',
    title: 'Tamamlanan Proje',
    description: 'Başarıyla teslim edilen projeler'
  },
  {
    id: 2,
    number: 50,
    suffix: '+',
    title: 'Mutlu Müşteri',
    description: 'Memnun kalan iş ortaklarımız'
  },
  {
    id: 3,
    number: 5,
    suffix: '+',
    title: 'Yıllık Deneyim',
    description: 'Sektördeki tecrübemiz'
  },
  {
    id: 4,
    number: 24,
    suffix: '/7',
    title: 'Destek Hizmeti',
    description: 'Kesintisiz teknik destek'
  }
];

const AnimatedNumber = ({ number, suffix, inView }: { number: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = number / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [number, inView]);
  
  return (
    <span className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-background to-accent/5">
      <div className="container mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Rakamlarla <span className="gradient-text">AESoftware</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Yılların deneyimi ve müşteri memnuniyeti odaklı yaklaşımımızın sonuçları
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative p-8 rounded-2xl glass-effect border border-foreground/10 hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Background decoration */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-4"
                    animate={{ 
                      scale: isInView ? [1, 1.1, 1] : 1
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.5,
                      repeat: isInView ? 1 : 0
                    }}
                  >
                    <AnimatedNumber 
                      number={stat.number} 
                      suffix={stat.suffix} 
                      inView={isInView}
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {stat.title}
                  </h3>
                  
                  <p className="text-secondary text-sm">
                    {stat.description}
                  </p>
                </div>
                
                {/* Animated border */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-primary/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-accent/10 blur-xl"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  );
};

export default Stats;