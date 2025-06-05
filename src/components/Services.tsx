'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Web Geliştirme',
    description: 'Modern ve responsive web uygulamaları geliştiriyoruz.',
    icon: '🌐',
    features: ['React/Next.js', 'Node.js', 'TypeScript', 'Responsive Tasarım']
  },
  {
    id: 2,
    title: 'Mobil Uygulama',
    description: 'iOS ve Android için native ve cross-platform uygulamalar.',
    icon: '📱',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'UI/UX Tasarım']
  },
  {
    id: 3,
    title: 'Backend Geliştirme',
    description: 'Güvenli ve ölçeklenebilir backend sistemleri.',
    icon: '⚙️',
    features: ['API Geliştirme', 'Veritabanı Tasarımı', 'Cloud Entegrasyonu', 'Güvenlik']
  },
  {
    id: 4,
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı deneyimini ön planda tutan tasarımlar.',
    icon: '🎨',
    features: ['Figma/Adobe XD', 'Prototyping', 'User Research', 'Brand Identity']
  },
  {
    id: 5,
    title: 'E-Ticaret',
    description: 'Kapsamlı e-ticaret çözümleri ve entegrasyonları.',
    icon: '🛒',
    features: ['Online Mağaza', 'Ödeme Sistemleri', 'Stok Yönetimi', 'Analytics']
  },
  {
    id: 6,
    title: 'Danışmanlık',
    description: 'Teknoloji stratejisi ve dijital dönüşüm danışmanlığı.',
    icon: '💡',
    features: ['Teknoloji Stratejisi', 'Dijital Dönüşüm', 'Proje Yönetimi', 'Eğitim']
  }
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-foreground/5">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Teknolojinin gücünü kullanarak işletmenizi dijital dünyada öne çıkarıyoruz
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div 
                className="h-full p-6 rounded-2xl glass-effect border border-foreground/10 hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ 
                    scale: hoveredCard === service.id ? 1.2 : 1,
                    rotate: hoveredCard === service.id ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-secondary mb-4">
                  {service.description}
                </p>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredCard === service.id ? 1 : 0,
                    height: hoveredCard === service.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center text-sm text-primary"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ 
                        x: hoveredCard === service.id ? 0 : -10,
                        opacity: hoveredCard === service.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.button 
                  className="mt-4 text-primary font-medium hover:text-primary-dark transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Detaylar →
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tüm Hizmetleri Görüntüle
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;