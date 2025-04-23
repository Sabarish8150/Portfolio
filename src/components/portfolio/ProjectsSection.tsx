import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../context/DataContext';

const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { title, type, description, technologies, featuredPoints, link } = project;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-50 dark:bg-dark-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
          <span className="text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 py-1 px-2 rounded">
            {type}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {featuredPoints.map((point, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-gray-400 pl-4 relative">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span 
              key={i}
              className="text-xs bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 gap-1 transition-colors"
          >
            <span>View Project</span>
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;