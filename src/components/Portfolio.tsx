'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// StarRating bileşeni
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  
  const projects = [
    {
      id: 1,
      title: 'DevOps Uzmanı',
      client: 'esthomy',
      description: 'esthomy bünyesinde DevOps Uzmanı olarak, altyapımızı yönetmek ve optimize etmekten sorumluyum. PostgreSQL, Amazon Web Services (AWS), Google Cloud Platform (GCP), Docker, Sanal Makineler (VM), Git, Ubuntu ve sanallaştırma gibi çeşitli teknolojiler ve araçlar konusunda uzmanım. Sistem performansını artırmak, dağıtım süreçlerini kolaylaştırmak ve sağlam sunucu ortamlarını sürdürmek için çalışıyorum. Amacım, projelerimizde verimliliği ve yeniliği artırmak için becerilerimi kullanmaktır.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      tags: ['DevOps', 'AWS', 'GCP', 'Docker']
    },
    {
      id: 2,
      title: 'BT Personeli',
      client: 'İstanbul Şişli Meslek Yüksekokulu',
      description: 'İstanbul Şişli Meslek Yüksekokulu&apos;nda BT Personeli stajyerliği sırasında, BT operasyonları ve desteğinin çeşitli yönlerinde uygulamalı deneyim kazandım. Ağ hizmetleri, bilgisayar ağları, veri ağları ve ağ altyapısı ile çalışma görevim vardı. Ayrıca ağ desteği sağladım ve bilgisayar donanımı, BT operasyonları ve teknoloji hizmetleri üzerinde çalıştım. Bu deneyim, Şişli, İstanbul&apos;da yerinde çalışırken BT sistemlerini yönetme ve sorun giderme konusunda güçlü bir temel geliştirmemi sağladı.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      tags: ['BT Desteği', 'Ağ Yönetimi', 'Donanım']
    },
    {
      id: 3,
      title: 'Webmaster - DMR',
      client: 'DMR Karbon Güçlendirme',
      description: 'DMR Karbon Güçlendirme için webmaster olarak, web sitesi yönetimi, içerik güncellemeleri ve e-posta sunucusu yapılandırması gibi görevleri yerine getirdim. Arka uç web geliştirmesi ve SEO optimizasyonu konularında da çalıştım. Bu pozisyonda uzaktan çalışarak şirketin dijital varlığını güçlendirdim.',
      image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      tags: ['Web Yönetimi', 'SEO', 'E-posta Sunucusu']
    },
    {
      id: 4,
      title: 'Webmaster - FNC',
      client: 'FNC Yapı ve Cephe Sistemleri',
      description: 'FNC Yapı ve Cephe Sistemleri için webmaster olarak, web sitesi içeriği oluşturma, güncelleme ve e-posta sunucusu yönetimi konularında çalıştım. Şirketin çevrimiçi görünürlüğünü artırmak için web yazarlığı ve dijital pazarlama stratejileri geliştirdim. Bu görevde uzaktan çalıştım.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      tags: ['Web Yazarlığı', 'Dijital Pazarlama', 'E-posta Sunucusu']
    },
    {
      id: 5,
      title: 'Webmaster - Duyar',
      client: 'Duyar Hukuk ve Danışmanlık',
      description: 'Duyar Hukuk ve Danışmanlık için webmaster olarak, web sitesi bakımı, içerik yönetimi ve teknik destek sağladım. Hukuk firmasının çevrimiçi platformlarının sorunsuz çalışmasını sağlamak için çeşitli web teknolojileri kullandım. Bu pozisyonda uzaktan çalıştım.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      tags: ['Web Bakımı', 'İçerik Yönetimi', 'Teknik Destek']
    },
    {
      id: 6,
      title: 'İstanbool Today Haber Sitesi',
      client: 'İstanbool Today',
      description: 'İstanbul odaklı güncel haberler, etkinlikler ve şehir rehberi sunan dinamik bir haber portalı. Kullanıcı dostu arayüzü ve hızlı güncellenen içeriği ile öne çıkıyor.',
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      tags: ['Haber Sitesi', 'Web Geliştirme', 'İçerik Yönetimi']
    },
    {
      id: 7,
      title: 'GAP Haberi Haber Sitesi',
      client: 'GAP Haberi',
      description: 'Güneydoğu Anadolu Projesi (GAP) bölgesine odaklanan, kalkınma, tarım, enerji ve sosyal projeler hakkında güncel bilgiler sunan özel bir haber platformu.',
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      tags: ['Haber Sitesi', 'Bölgesel Haber', 'Web Geliştirme']
    }
  ];
  
  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      position: 'CEO, TechCorp',
      content: 'AE Software ile çalışmak harika bir deneyimdi. Projemizi zamanında ve beklentilerimizi aşarak teslim ettiler.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 5
    },
    {
      name: 'Elif Kaya',
      position: 'CTO, StartupX',
      content: 'Teknik uzmanlıkları ve profesyonel yaklaşımları sayesinde dijital dönüşümümüzü başarıyla gerçekleştirdik.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 5
    },
    {
      name: 'Mehmet Demir',
      position: 'Proje Yöneticisi, BigCorp',
      content: 'Müşteri odaklı yaklaşımları ve kaliteli çözümleri ile işimizi bir üst seviyeye taşıdılar.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4
    },
    {
      name: 'Zeynep Özkan',
      position: 'Pazarlama Müdürü, RetailPlus',
      content: 'E-ticaret platformumuz sayesinde satışlarımız %200 arttı. Kesinlikle tavsiye ederim.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 5
    }
  ];
  
  const clients = [
    {
      name: 'TechCorp',
      logo: 'https://via.placeholder.com/150x60/4F46E5/FFFFFF?text=TechCorp'
    },
    {
      name: 'StartupX',
      logo: 'https://via.placeholder.com/150x60/059669/FFFFFF?text=StartupX'
    },
    {
      name: 'BigCorp',
      logo: 'https://via.placeholder.com/150x60/DC2626/FFFFFF?text=BigCorp'
    },
    {
      name: 'RetailPlus',
      logo: 'https://via.placeholder.com/150x60/7C3AED/FFFFFF?text=RetailPlus'
    },
    {
      name: 'FinanceHub',
      logo: 'https://via.placeholder.com/150x60/EA580C/FFFFFF?text=FinanceHub'
    },
    {
      name: 'HealthTech',
      logo: 'https://via.placeholder.com/150x60/0891B2/FFFFFF?text=HealthTech'
    },
    {
      name: 'EduSoft',
      logo: 'https://via.placeholder.com/150x60/BE185D/FFFFFF?text=EduSoft'
    },
    {
      name: 'GreenEnergy',
      logo: 'https://via.placeholder.com/150x60/16A34A/FFFFFF?text=GreenEnergy'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 z-0" />
      
      <motion.div 
        className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Referanslar
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Başarıyla tamamladığımız projeler ve mutlu müşterilerimiz
          </p>
        </motion.div>
        
        {/* Tab Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="projects">Projeler</TabsTrigger>
            <TabsTrigger value="testimonials">Müşteri Yorumları</TabsTrigger>
            <TabsTrigger value="clients">Müşteriler</TabsTrigger>
          </TabsList>
        
          <TabsContent value="projects">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        fill
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        Müşteri: {project.client}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        
          <TabsContent value="testimonials">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">{testimonial.name}</CardTitle>
                            <CardDescription>{testimonial.position}</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <StarRating rating={testimonial.rating} />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        
          <TabsContent value="clients">
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {clients.map((client, index) => (
                <motion.div 
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="flex items-center justify-center p-6 h-24 hover:shadow-lg transition-all duration-300">
                    <Image 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-w-full max-h-16 object-contain"
                      width={150}
                      height={60}
                    />
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;