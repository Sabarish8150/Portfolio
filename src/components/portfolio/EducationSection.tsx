import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Education } from '../../context/DataContext';

const EducationSection: React.FC<{ education: Education[] }> = ({ education }) => {
  // Sort education by date (assuming most recent first)
  const sortedEducation = [...education].sort((a, b) => {
    // Extract year from date string (assuming format includes a year)
    const yearA = a.date.match(/\d{4}/)?.[0] || '';
    const yearB = b.date.match(/\d{4}/)?.[0] || '';
    return parseInt(yearB) - parseInt(yearA); // Descending order
  });

  return (
    <section id="education" className="py-16 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Education</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sortedEducation.map((item, index) => (
              <EducationCard key={item.id} education={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const EducationCard: React.FC<{ education: Education; index: number }> = ({ education, index }) => {
  const { institution, degree, date, description, gpa } = education;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-50 dark:bg-dark-700 rounded-lg p-6 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-primary-100 dark:bg-primary-900 p-3 text-primary-600 dark:text-primary-400">
          <GraduationCap size={24} />
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{institution}</h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{degree}</p>
          
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-sm text-gray-600 dark:text-gray-400">
            <span>{date}</span>
            {gpa && <span>{gpa}</span>}
          </div>
          
          {description && (
            <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationSection;