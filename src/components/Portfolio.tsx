'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectDetail from './ProjectDetail';

interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  duration: string;
  teamSize: string;
  completedDate: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects = [
    {
      id: 1,
      title: 'DevOps Uzmanı',
      client: 'esthomy',
      description: 'esthomy bünyesinde DevOps Uzmanı olarak, altyapımızı yönetmek ve optimize etmekten sorumluyum.',
      fullDescription: 'esthomy bünyesinde DevOps Uzmanı olarak, altyapımızı yönetmek ve optimize etmekten sorumluyum. PostgreSQL, Amazon Web Services (AWS), Google Cloud Platform (GCP), Docker, Sanal Makineler (VM), Git, Ubuntu ve sanallaştırma gibi çeşitli teknolojiler ve araçlar konusunda uzmanım. Sistem performansını artırmak, dağıtım süreçlerini kolaylaştırmak ve sağlam sunucu ortamlarını sürdürmek için çalışıyorum. Amacım, projelerimizde verimliliği ve yeniliği artırmak için becerilerimi kullanmaktır.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      ],
      tags: ['DevOps', 'AWS', 'GCP', 'Docker'],
      duration: '12 ay',
      teamSize: '5 kişi',
      completedDate: '2024',
      technologies: ['AWS', 'GCP', 'Docker', 'PostgreSQL', 'Ubuntu', 'Git'],
      challenges: [
        'Mevcut altyapının modernizasyonu',
        'Yüksek trafikli sistemlerin yönetimi',
        'Güvenlik standartlarının uygulanması'
      ],
      solutions: [
        'Mikroservis mimarisine geçiş',
        'Otomatik ölçeklendirme sistemleri',
        'CI/CD pipeline kurulumu'
      ],
      results: [
        '%40 performans artışı',
        '%60 dağıtım süresi azalması',
        '99.9% uptime başarısı'
      ]
    },
    {
      id: 2,
      title: 'BT Personeli',
      client: 'İstanbul Şişli Meslek Yüksekokulu',
      description: 'İstanbul Şişli Meslek Yüksekokulu&apos;nda BT Personeli stajyerliği sırasında, BT operasyonları ve desteğinin çeşitli yönlerinde uygulamalı deneyim kazandım. Ağ hizmetleri, bilgisayar ağları, veri ağları ve ağ altyapısı ile çalışma görevim vardı. Ayrıca ağ desteği sağladım ve bilgisayar donanımı, BT operasyonları ve teknoloji hizmetleri üzerinde çalıştım. Bu deneyim, Şişli, İstanbul&apos;da yerinde çalışırken BT sistemlerini yönetme ve sorun giderme konusunda güçlü bir temel geliştirmemi sağladı.',
      fullDescription: 'İstanbul Şişli Meslek Yüksekokulu&apos;nda BT Personeli stajyerliği sırasında, BT operasyonları ve desteğinin çeşitli yönlerinde uygulamalı deneyim kazandım. Ağ hizmetleri, bilgisayar ağları, veri ağları ve ağ altyapısı ile çalışma görevim vardı. Ayrıca ağ desteği sağladım ve bilgisayar donanımı, BT operasyonları ve teknoloji hizmetleri üzerinde çalıştım. Bu deneyim, Şişli, İstanbul&apos;da yerinde çalışırken BT sistemlerini yönetme ve sorun giderme konusunda güçlü bir temel geliştirmemi sağladı.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      ],
      tags: ['BT Desteği', 'Ağ Yönetimi', 'Donanım'],
      duration: '6 ay',
      teamSize: '3 kişi',
      completedDate: '2023',
      technologies: ['Windows Server', 'Ağ Yönetimi', 'Donanım Desteği'],
      challenges: [
        'Ağ altyapısının yönetimi',
        'Donanım sorunlarının çözümü',
        'Kullanıcı desteği sağlama'
      ],
      solutions: [
        'Sistematik sorun giderme yaklaşımı',
        'Preventif bakım programları',
        'Kullanıcı eğitim programları'
      ],
      results: [
        'Ağ kesintilerinde %50 azalma',
        'Kullanıcı memnuniyetinde artış',
        'Sistem verimliliğinde iyileşme'
      ]
    },
    {
      id: 3,
      title: 'Webmaster - DMR',
      client: 'DMR Karbon Güçlendirme',
      description: 'DMR Karbon Güçlendirme için webmaster olarak, web sitesi yönetimi, içerik güncellemeleri ve e-posta sunucusu yapılandırması gibi görevleri yerine getirdim. Arka uç web geliştirmesi ve SEO optimizasyonu konularında da çalıştım. Bu pozisyonda uzaktan çalışarak şirketin dijital varlığını güçlendirdim.',
      fullDescription: 'DMR Karbon Güçlendirme için webmaster olarak, web sitesi yönetimi, içerik güncellemeleri ve e-posta sunucusu yapılandırması gibi görevleri yerine getirdim. Arka uç web geliştirmesi ve SEO optimizasyonu konularında da çalıştım. Bu pozisyonda uzaktan çalışarak şirketin dijital varlığını güçlendirdim.',
      image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      ],
      tags: ['Web Yönetimi', 'SEO', 'E-posta Sunucusu'],
      duration: '8 ay',
      teamSize: '2 kişi',
      completedDate: '2022',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      challenges: [
        'Web sitesi performansının artırılması',
        'SEO optimizasyonu',
        'E-posta sunucusu güvenliği'
      ],
      solutions: [
        'Kod optimizasyonu',
        'İçerik stratejisi geliştirme',
        'Güvenlik protokollerinin uygulanması'
      ],
      results: [
        'Site hızında %30 artış',
        'Organik trafikte %25 artış',
        'E-posta güvenliğinde iyileşme'
      ]
    },
    {
      id: 4,
      title: 'Webmaster - FNC',
      client: 'FNC Yapı ve Cephe Sistemleri',
      description: 'FNC Yapı ve Cephe Sistemleri için webmaster olarak, web sitesi içeriği oluşturma, güncelleme ve e-posta sunucusu yönetimi konularında çalıştım. Şirketin çevrimiçi görünürlüğünü artırmak için web yazarlığı ve dijital pazarlama stratejileri geliştirdim. Bu görevde uzaktan çalıştım.',
      fullDescription: 'FNC Yapı ve Cephe Sistemleri için webmaster olarak, web sitesi içeriği oluşturma, güncelleme ve e-posta sunucusu yönetimi konularında çalıştım. Şirketin çevrimiçi görünürlüğünü artırmak için web yazarlığı ve dijital pazarlama stratejileri geliştirdim. Bu görevde uzaktan çalıştım.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      ],
      tags: ['Web Yazarlığı', 'Dijital Pazarlama', 'E-posta Sunucusu'],
      duration: '10 ay',
      teamSize: '1 kişi',
      completedDate: '2021',
      technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
      challenges: [
        'İçerik stratejisi geliştirme',
        'SEO optimizasyonu',
        'Dijital pazarlama kampanyaları'
      ],
      solutions: [
        'Hedef kitle analizi',
        'İçerik takvimi oluşturma',
        'Sosyal medya entegrasyonu'
      ],
      results: [
        'Web trafiğinde %40 artış',
        'Müşteri etkileşiminde artış',
        'Marka bilinirliğinde iyileşme'
      ]
    },
    {
      id: 5,
      title: 'Webmaster - Duyar',
      client: 'Duyar Hukuk ve Danışmanlık',
      description: 'Duyar Hukuk ve Danışmanlık için webmaster olarak, web sitesi bakımı, içerik yönetimi ve teknik destek sağladım. Hukuk firmasının çevrimiçi platformlarının sorunsuz çalışmasını sağlamak için çeşitli web teknolojileri kullandım. Bu pozisyonda uzaktan çalıştım.',
      fullDescription: 'Duyar Hukuk ve Danışmanlık için webmaster olarak, web sitesi bakımı, içerik yönetimi ve teknik destek sağladım. Hukuk firmasının çevrimiçi platformlarının sorunsuz çalışmasını sağlamak için çeşitli web teknolojileri kullandım. Bu pozisyonda uzaktan çalıştım.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      ],
      tags: ['Web Bakımı', 'İçerik Yönetimi', 'Teknik Destek'],
      duration: '12 ay',
      teamSize: '1 kişi',
      completedDate: '2020',
      technologies: ['WordPress', 'PHP', 'MySQL', 'HTML', 'CSS'],
      challenges: [
        'Hukuki içeriklerin doğru sunumu',
        'Site güvenliğinin sağlanması',
        'Kullanıcı deneyiminin iyileştirilmesi'
      ],
      solutions: [
        'Hukuki terminoloji araştırması',
        'SSL sertifikası ve güvenlik önlemleri',
        'Responsive tasarım uygulaması'
      ],
      results: [
        'Site güvenliğinde %100 iyileşme',
        'Kullanıcı deneyiminde artış',
        'Müşteri memnuniyetinde iyileşme'
      ]
    },
    {
      id: 6,
      title: 'İstanbool Today Haber Sitesi',
      client: 'İstanbool Today',
      description: 'İstanbul odaklı güncel haberler, etkinlikler ve şehir rehberi sunan dinamik bir haber portalı. Kullanıcı dostu arayüzü ve hızlı güncellenen içeriği ile öne çıkıyor.',
      fullDescription: 'İstanbul odaklı güncel haberler, etkinlikler ve şehir rehberi sunan dinamik bir haber portalı. Kullanıcı dostu arayüzü ve hızlı güncellenen içeriği ile öne çıkıyor.',
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      ],
      tags: ['Haber Sitesi', 'Web Geliştirme', 'İçerik Yönetimi'],
      duration: '6 ay',
      teamSize: '3 kişi',
      completedDate: '2023',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      challenges: [
        'Gerçek zamanlı haber güncellemeleri',
        'Yüksek trafik yönetimi',
        'SEO optimizasyonu'
      ],
      solutions: [
        'WebSocket entegrasyonu',
        'CDN kullanımı',
        'Yapılandırılmış veri işaretlemesi'
      ],
      results: [
        'Günlük 50K+ ziyaretçi',
        'Sayfa yükleme hızında %60 iyileşme',
        'Arama motorlarında üst sıralarda yer alma'
      ]
    },
    {
      id: 7,
      title: 'GAP Haberi Haber Sitesi',
      client: 'GAP Haberi',
      description: 'Güneydoğu Anadolu Projesi (GAP) bölgesine odaklanan, kalkınma, tarım, enerji ve sosyal projeler hakkında güncel bilgiler sunan özel bir haber platformu.',
      fullDescription: 'Güneydoğu Anadolu Projesi (GAP) bölgesine odaklanan, kalkınma, tarım, enerji ve sosyal projeler hakkında güncel bilgiler sunan özel bir haber platformu.',
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      ],
      tags: ['Haber Sitesi', 'Bölgesel Haber', 'Web Geliştirme'],
      duration: '8 ay',
      teamSize: '2 kişi',
      completedDate: '2022',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
      challenges: [
        'Bölgesel içerik stratejisi',
        'Çok dilli destek',
        'Mobil optimizasyon'
      ],
      solutions: [
        'Yerel kaynaklarla işbirliği',
        'Çeviri yönetim sistemi',
        'Progressive Web App geliştirme'
      ],
      results: [
        'Bölgesel okuyucu kitlesinde %80 artış',
        'Mobil kullanımda %70 iyileşme',
        'Sosyal medya etkileşiminde artış'
      ]
    }
  ];

  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

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
        
        {/* Projects Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
                  <Card 
                    className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        fill
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        Müşteri: {project.client}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-primary font-medium">Detayları görüntülemek için tıklayın</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;