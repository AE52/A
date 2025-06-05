'use client';

import { motion } from 'framer-motion';

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
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Hikayemiz</h3>
            <p className="mb-4">
              AESoftware, 2015 yılında Ali Eren Özdemir tarafından kuruldu. Başlangıçta küçük bir ekiple yola çıkan şirketimiz, zamanla büyüyerek Türkiye'nin önde gelen yazılım şirketlerinden biri haline geldi.
            </p>
            <p className="mb-4">
              Misyonumuz, işletmelerin dijital dönüşümünü en verimli şekilde gerçekleştirmelerine yardımcı olmak ve kullanıcı dostu, yenilikçi çözümler sunmaktır. Vizyonumuz ise global pazarda tanınan ve tercih edilen bir teknoloji şirketi olmaktır.
            </p>
            <p>
              Bugüne kadar 200'den fazla başarılı projeye imza attık ve 50'den fazla kurumsal müşteriye hizmet verdik. Ekibimiz, alanında uzman 20 profesyonelden oluşmaktadır.
            </p>
          </div>
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
                className="card theme-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-secondary">{value.description}</p>
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
                className="card theme-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-xl font-bold mb-1 text-center">{member.name}</h4>
                <p className="text-primary text-sm mb-3 text-center">{member.position}</p>
                <p className="text-secondary text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;