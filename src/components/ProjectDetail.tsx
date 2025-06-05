'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa';

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

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  return (
    <section className="pt-8 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

        {/* Hero Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image 
              src={project.image} 
              alt={project.title} 
              className="object-cover"
              fill
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-lg opacity-90">Müşteri: {project.client}</p>
            </div>
          </div>

          {/* Project Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="border-foreground/10">
              <CardContent className="flex items-center gap-3 p-4">
                <FaClock className="text-primary w-5 h-5" />
                <div>
                  <p className="text-sm text-muted-foreground">Süre</p>
                  <p className="font-medium">{project.duration}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-foreground/10">
              <CardContent className="flex items-center gap-3 p-4">
                <FaUser className="text-primary w-5 h-5" />
                <div>
                  <p className="text-sm text-muted-foreground">Ekip Büyüklüğü</p>
                  <p className="font-medium">{project.teamSize}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-foreground/10">
              <CardContent className="flex items-center gap-3 p-4">
                <FaCalendarAlt className="text-primary w-5 h-5" />
                <div>
                  <p className="text-sm text-muted-foreground">Tamamlanma</p>
                  <p className="font-medium">{project.completedDate}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                  Canlı Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Description */}
            <Card className="border-foreground/10">
              <CardHeader>
                <CardTitle>Proje Açıklaması</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="border-foreground/10">
              <CardHeader>
                <CardTitle>Karşılaşılan Zorluklar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card className="border-foreground/10">
              <CardHeader>
                <CardTitle>Çözümler</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="border-foreground/10">
              <CardHeader>
                <CardTitle>Sonuçlar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <Card className="border-foreground/10">
                <CardHeader>
                  <CardTitle>Proje Galerisi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                        <Image 
                          src={image} 
                          alt={`${project.title} - ${index + 1}`} 
                          className="object-cover hover:scale-110 transition-transform duration-300"
                          fill
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Technologies */}
            <Card className="border-foreground/10 sticky top-8">
              <CardHeader>
                <CardTitle>Kullanılan Teknolojiler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="border-foreground/10">
              <CardHeader>
                <CardTitle>Etiketler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;