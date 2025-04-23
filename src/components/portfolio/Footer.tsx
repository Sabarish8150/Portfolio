import React from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { Link } from '../../context/DataContext';

type FooterProps = {
  links: Link[];
  name: string;
};

const Footer: React.FC<FooterProps> = ({ links, name }) => {
  // Get the appropriate icon for each social link
  const getIcon = (name: string) => {
    const iconProps = { size: 18 };
    name = name.toLowerCase();
    
    if (name.includes('github')) return <Github {...iconProps} />;
    if (name.includes('linkedin')) return <Linkedin {...iconProps} />;
    if (name.includes('leetcode')) return <Code2 {...iconProps} />;
    
    // Default icon
    return <Code2 {...iconProps} />;
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-4 flex items-center gap-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.name}
              >
                {getIcon(link.name)}
              </a>
            ))}
            
          </div>
          
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;