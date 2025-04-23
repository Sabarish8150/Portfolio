import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { PersonalInfo } from '../../context/DataContext';

const AboutSection: React.FC<{ personalInfo: PersonalInfo }> = ({ personalInfo }) => {
  const { email, phone, about } = personalInfo;
  
  return (
    <section id="about" className="py-16 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          
          <div className="bg-gray-50 dark:bg-dark-700 p-6 rounded-lg shadow-sm mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {about}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail size={18} />
                <span>{email}</span>
              </a>
              
              <a 
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors sm:ml-auto"
              >
                <Phone size={18} />
                <span>{phone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;