import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { Link } from '../../context/DataContext';
import Button from '../common/Button';

type HeroSectionProps = {
  name: string;
  title: string;
  about: string;
  links: Link[];
};

const HeroSection: React.FC<HeroSectionProps> = ({ name, title, about, links }) => {
  // Animation variants for staggered animation
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
        duration: 0.6
      }
    }
  };

  // Get the appropriate icon for each social link
  const getIcon = (name: string) => {
    const iconProps = { size: 20 };
    name = name.toLowerCase();
    
    if (name.includes('github')) return <Github {...iconProps} />;
    if (name.includes('linkedin')) return <Linkedin {...iconProps} />;
    if (name.includes('leetcode')) return <Code2 {...iconProps} />;
    
    // Default icon
    return <Code2 {...iconProps} />;
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-transparent dark:from-dark-800 dark:to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">{name}</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            {about}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            {links.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-700 shadow-sm rounded-md hover:shadow-md transition-all text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {getIcon(link.name)}
                <span>{link.name}</span>
              </a>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              size="lg"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;