import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../context/DataContext';

const ExperienceSection: React.FC<{ experiences: Experience[] }> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-primary-500 dark:border-primary-400 ml-3 pl-8 space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceItem 
                  key={experience.id} 
                  experience={experience} 
                  index={index} 
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceItem: React.FC<{ 
  experience: Experience; 
  index: number;
  isLast: boolean;
}> = ({ experience, index, isLast }) => {
  const { title, organization, date, description, responsibilities } = experience;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-11 top-1 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 border-4 border-white dark:border-dark-900" />
      
      <div className={`bg-white dark:bg-dark-700 p-5 rounded-lg shadow-sm ${!isLast ? 'mb-4' : ''}`}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
        </div>
        
        <h4 className="text-primary-600 dark:text-primary-400 font-medium mb-3">{organization}</h4>
        
        <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
        
        {responsibilities && responsibilities.length > 0 && (
          <div>
            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Responsibilities:</h5>
            <ul className="list-disc list-inside space-y-1">
              {responsibilities.map((responsibility, i) => (
                <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceSection;