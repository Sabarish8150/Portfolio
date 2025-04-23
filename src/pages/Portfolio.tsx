import React from 'react';
import { usePortfolioData } from '../context/DataContext';
import Header from '../components/layout/Header';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import EducationSection from '../components/portfolio/EducationSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

const Portfolio: React.FC = () => {
  const { data } = usePortfolioData();
  const { personalInfo, skills, projects, experience, education, links } = data;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          name={personalInfo.name} 
          title={personalInfo.title} 
          about={personalInfo.about}
          links={links}
        />
        
        <AboutSection personalInfo={personalInfo} />
        
        <SkillsSection skills={skills} />
        
        <ProjectsSection projects={projects} />
        
        <ExperienceSection experiences={experience} />
        
        <EducationSection education={education} />
        
        <ContactSection personalInfo={personalInfo} />
      </main>
      
      <Footer links={links} name={personalInfo.name} />
    </div>
  );
};

export default Portfolio;