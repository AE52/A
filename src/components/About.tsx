'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  const teamMembers = [
    {
      name: 'Asım Eren Özdemir',
      position: 'Kurucu & CEO',
      bio: 'Yazılım geliştirme ve teknoloji alanında 10+ yıl deneyime sahip. Modern web teknolojileri konusunda uzman.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHpLoobCwN8bQ/profile-displayphoto-shrink_200_200/B4DZXYTkluHsAY-/0/1743090765066?e=1754524800&v=beta&t=geO1OCrd2v4YRRb4rJT6fh-0T8NP403i_Ry-6eL1Gg4'
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
                AESoftware, 2015 yılında Ali Eren Özdemir tarafından kuruldu. Başlangıçta küçük bir ekiple yola çıkan şirketimiz, zamanla büyüyerek Türkiye&apos;nin önde gelen yazılım şirketlerinden biri haline geldi.
              </p>
              <p>
                Misyonumuz, işletmelerin dijital dönüşümünü en verimli şekilde gerçekleştirmelerine yardımcı olmak ve kullanıcı dostu, yenilikçi çözümler sunmaktır. Vizyonumuz ise global pazarda tanınan ve tercih edilen bir teknoloji şirketi olmaktır.
              </p>
              <p>
                Bugüne kadar 200&apos;den fazla başarılı projeye imza attık ve 50&apos;den fazla kurumsal müşteriye hizmet verdik. Ekibimiz, alanında uzman 20 profesyonelden oluşmaktadır.
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center border-foreground/10 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
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