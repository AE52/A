'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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
      description: 'İstanbul Şişli Meslek Yüksekokulu\'nda BT Personeli stajyerliği sırasında, BT operasyonları ve desteğinin çeşitli yönlerinde uygulamalı deneyim kazandım. Ağ hizmetleri, bilgisayar ağları, veri ağları ve ağ altyapısı ile çalışma görevim vardı. Ayrıca ağ desteği sağladım ve bilgisayar donanımı, BT operasyonları ve teknoloji hizmetleri üzerinde çalıştım. Bu deneyim, Şişli, İstanbul\'da yerinde çalışırken BT sistemlerini yönetme ve sorun giderme konusunda güçlü bir temel geliştirmemi sağladı.',
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
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg glass-effect p-1">
            <motion.button
              className={`px-6 py-2 rounded-md ${activeTab === 'projects' ? 'bg-primary text-white' : 'text-foreground hover:bg-foreground/5'}`}
              onClick={() => setActiveTab('projects')}
              whileHover={{ scale: activeTab !== 'projects' ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              Projeler
            </motion.button>

          </div>
        </div>
        
        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="card overflow-hidden theme-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-primary text-sm mb-3">Müşteri: {project.client}</p>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-3 py-1 rounded-full bg-foreground/5 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                className="card theme-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-secondary">{testimonial.position}</p>
                  </div>
                  <div className="ml-auto">
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
                <p className="text-secondary italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {clients.map((client, index) => (
              <motion.div 
                key={client.name}
                className="card flex items-center justify-center p-6 theme-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-16"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;