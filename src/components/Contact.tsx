'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simüle edilmiş form gönderimi
    try {
      // Gerçek bir API çağrısı burada yapılabilir
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      formRef.current?.reset();
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // 5 saniye sonra başarı mesajını kaldır
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Form gönderimi başarısız:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Bizimle İletişime Geçin
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Projeleriniz veya sorularınız için bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* İletişim Bilgileri */}
          <motion.div 
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-xl p-6 shadow-lg h-full">
              <h3 className="text-xl font-semibold mb-6 text-foreground">İletişim Bilgileri</h3>
              
              <motion.div variants={itemVariants} className="flex items-start mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Adres</h4>
                  <p className="text-foreground/70 mt-1">İstanbul, Türkiye</p>
                </div>
              </motion.div>
              
             
              
              <motion.div variants={itemVariants} className="flex items-start mb-8">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">E-posta</h4>
                  <p className="text-foreground/70 mt-1">asimerenozdemir@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h4 className="font-medium text-foreground mb-4">Bizi Takip Edin</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/aerenozdemir/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a 
                    href="https://github.com/AE52" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* İletişim Formu */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Mesaj Gönderin</h3>
              
              {submitSuccess ? (
                <div className="bg-success/20 text-success p-4 rounded-lg mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</span>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">İsim</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-posta</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Konu</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground appearance-none"
                    >
                      <option value="" disabled className="text-foreground">Konu Seçiniz</option>
                      <option value="genel" className="text-foreground">Genel Bilgi</option>
                      <option value="destek" className="text-foreground">Teknik Destek</option>
                      <option value="teklif" className="text-foreground">Fiyat Teklifi</option>
                      <option value="isbirligi" className="text-foreground">İş Birliği</option>
                      <option value="diger" className="text-foreground">Diğer</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Mesaj</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Gönderiliyor...
                        </>
                      ) : 'Gönder'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;