'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
              <Card className="h-full group-hover:shadow-lg transition-all duration-300 border-foreground/10 hover:border-primary/30">
                <CardHeader>
                  <motion.div 
                    className="text-4xl mb-2"
                    animate={{ 
                      scale: hoveredCard === service.id ? 1.2 : 1,
                      rotate: hoveredCard === service.id ? 10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="space-y-2 mb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredCard === service.id ? 1 : 0,
                      height: hoveredCard === service.id ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ 
                            x: hoveredCard === service.id ? 0 : -10,
                            opacity: hoveredCard === service.id ? 1 : 0
                          }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                  >
                    <Button variant="link" className="p-0 h-auto text-primary font-medium">
                      Detaylar →
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="rounded-full">
              Tüm Hizmetleri Görüntüle
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;