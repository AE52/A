'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

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

interface TeamDetailProps {
  member: TeamMember;
  onBack: () => void;
}

const TeamDetail = ({ member, onBack }: TeamDetailProps) => {
  return (
    <section className="pt-8 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
        {/* Back Button */}
        <div className="sticky top-4 z-20 mb-8">
          <motion.button
            onClick={onBack}
            className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-lg px-4 py-2 flex items-center gap-2 text-primary hover:text-primary/80 hover:bg-background/90 transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Geri Dön
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-foreground/10 sticky top-8">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-6">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium text-lg">
                  {member.position}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaTwitter className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaEnvelope className="w-6 h-6" />
                    </a>
                  )}
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold mb-3">Yetenekler</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Details */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Bio */}
            <Card className="border-foreground/10">
              <CardHeader>
                <CardTitle>Hakkında</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="border-foreground/10">
              <CardHeader>
                <CardTitle>Deneyim</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{member.experience}</p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border-foreground/10">
              <CardHeader>
                <CardTitle>Eğitim</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{member.education}</p>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="border-foreground/10">
              <CardHeader>
                <CardTitle>Öne Çıkan Projeler</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {member.projects.map((project, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{project}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetail;