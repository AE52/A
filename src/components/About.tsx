'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import TeamDetail from './TeamDetail';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  skills: string[];
  experience: string;
  education: string;
  projects: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
}

const About = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  const teamMembers = [
    {
      id: 1,
      name: 'Asım Eren Özdemir',
      position: 'Kurucu & CEO',
      bio: 'Yazılım geliştirme ve teknoloji alanında 5+ yıl deneyime sahip. Modern web teknolojileri konusunda uzman.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHpLoobCwN8bQ/profile-displayphoto-shrink_200_200/B4DZXYTkluHsAY-/0/1743090765066?e=1754524800&v=beta&t=geO1OCrd2v4YRRb4rJT6fh-0T8NP403i_Ry-6eL1Gg4',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'DevOps'],
      experience: '5+ yıllık yazılım geliştirme deneyimi. Full-stack geliştirme, sistem mimarisi ve ekip yönetimi konularında uzman.',
      education: 'Bilgisayar Programcılığı, İstanbul Ticaret Üniversitesi. Çeşitli sertifikasyonlar: Google Flutter Developer',
      projects: [
        'E-ticaret platformu geliştirme (100K+ kullanıcı)',
        'Mikroservis mimarisi tasarımı ve implementasyonu',
        'DevOps süreçlerinin otomasyonu',
        'Mobil uygulama backend geliştirme'
      ],
      social: {
        linkedin: 'https://linkedin.com/in/asimereno',
        github: 'https://github.com/asimereno',
        email: 'asim@aesoftware.com'
      }
    }
  ];

  const companyValues = [
    {
      title: 'Yenilikçilik',
      description: 'En son teknolojileri kullanarak müşterilerimize yenilikçi çözümler sunuyoruz.',
      icon: '💡'
    },
    {
      title: 'Kalite',
      description: 'Her projede en yüksek kalite standartlarını uygulayarak mükemmelliği hedefliyoruz.',
      icon: '✨'
    },
    {
      title: 'Müşteri Odaklılık',
      description: 'Müşterilerimizin ihtiyaçlarını anlamak ve aşmak için çalışıyoruz.',
      icon: '🤝'
    },
    {
      title: 'Sürdürülebilirlik',
      description: 'Uzun vadeli başarı için sürdürülebilir ve bakımı kolay çözümler geliştiriyoruz.',
      icon: '🌱'
    }
  ];

  if (selectedMember) {
    return (
      <TeamDetail 
        member={selectedMember} 
        onBack={() => setSelectedMember(null)} 
      />
    );
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0" />
      
      <motion.div 
        className="absolute top-40 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
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
            Hakkımızda
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Modern yazılım çözümleri ile işletmenizi dijital dünyada öne çıkarıyoruz
          </p>
        </motion.div>
        
        {/* Company Story */}
        <motion.div 
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="border-foreground/10">
            <CardHeader>
              <CardTitle className="text-2xl">Hikayemiz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                AESoftware, 2020 yılında Asım Eren Özdemir tarafından kuruldu. 
              </p>
              <p>
                Misyonumuz, işletmelerin dijital dönüşümünü en verimli şekilde gerçekleştirmelerine yardımcı olmak ve kullanıcı dostu, yenilikçi çözümler sunmaktır. Vizyonumuz ise global pazarda tanınan ve tercih edilen bir teknoloji şirketi olmaktır.
              </p>
              <p>
                Bugüne kadar 10&apos;den fazla başarılı projeye imza attık ve 5&apos;den fazla kurumsal müşteriye hizmet verdik. 
              </p>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Company Values */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-bold mb-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Değerlerimiz
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center border-foreground/10 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-2">{value.icon}</div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Team */}
        <div>
          <motion.h3 
            className="text-2xl font-bold mb-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ekibimiz
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card 
                    className="h-full text-center border-foreground/10 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedMember(member)}
                  >
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <Avatar className="w-24 h-24 group-hover:scale-110 transition-transform duration-300">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">{member.position}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                      <p className="text-xs text-primary font-medium">Detayları görüntülemek için tıklayın</p>
                    </CardContent>
                  </Card>
                </motion.div>
               ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;