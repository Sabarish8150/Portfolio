import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../context/DataContext';

const SkillsSection: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Extract unique categories
  const categories = ['all', ...new Set(skills.map(skill => skill.category))];
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  // Get level color and width
  const getLevelStyle = (level: string) => {
    const levelMap: { [key: string]: { color: string; width: string } } = {
      'Beginner': { color: 'bg-gray-300 dark:bg-dark-500', width: 'w-1/5' },
      'Novice': { color: 'bg-blue-300 dark:bg-blue-800', width: 'w-2/5' },
      'Intermediate': { color: 'bg-primary-500 dark:bg-primary-600', width: 'w-3/5' },
      'Advanced': { color: 'bg-green-500 dark:bg-green-600', width: 'w-4/5' },
      'Expert': { color: 'bg-accent-500 dark:bg-accent-600', width: 'w-full' }
    };
    
    return levelMap[level] || { color: 'bg-gray-300', width: 'w-1/5' };
  };
  
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white dark:bg-primary-700'
                    : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-dark-700 p-4 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
                </div>
                
                <div className="h-2 bg-gray-200 dark:bg-dark-500 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: getLevelStyle(skill.level).width }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full rounded-full ${getLevelStyle(skill.level).color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;