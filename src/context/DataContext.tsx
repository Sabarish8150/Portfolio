import React, { createContext, useContext, useState, useEffect } from 'react';

// Types for portfolio data
export type Education = {
  id: string;
  institution: string;
  degree: string;
  date: string;
  description?: string;
  gpa?: string;
};

export type Skill = {
  id: string;
  category: string;
  name: string;
  level: 'Beginner' | 'Novice' | 'Intermediate' | 'Advanced' | 'Expert';
};

export type Project = {
  id: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  featuredPoints: string[];
  image?: string;
  link?: string;
};

export type Experience = {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  responsibilities?: string[];
};

export type Link = {
  id: string;
  name: string;
  url: string;
  icon?: string;
};

export type PersonalInfo = {
  name: string;
  title: string;
  email: string;
  phone: string;
  about: string;
};

export type PortfolioData = {
  personalInfo: PersonalInfo;
  education: Education[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  links: Link[];
};

type DataContextType = {
  data: PortfolioData;
  updatePersonalInfo: (info: PersonalInfo) => void;
  addEducation: (education: Omit<Education, 'id'>) => void;
  updateEducation: (education: Education) => void;
  deleteEducation: (id: string) => void;
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateSkill: (skill: Skill) => void;
  deleteSkill: (id: string) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  addExperience: (experience: Omit<Experience, 'id'>) => void;
  updateExperience: (experience: Experience) => void;
  deleteExperience: (id: string) => void;
  addLink: (link: Omit<Link, 'id'>) => void;
  updateLink: (link: Link) => void;
  deleteLink: (id: string) => void;
};

// Default data based on the provided resume
const defaultData: PortfolioData = {
  personalInfo: {
    name: 'Sabarish K S',
    title: 'Software Developer',
    email: 'sabarish.ad22@bitsathy.ac.in',
    phone: '+91 6374052177',
    about: 'AI and Data Science student specializing in automation and full-stack development, focused on creating efficient solutions for complex problems.'
  },
  education: [
    {
      id: '1',
      institution: 'BANNARI AMMAN INSTITUTE OF TECHNOLOGY',
      degree: 'B.Tech in AI and Data Science',
      date: 'Grad. May 2026',
      gpa: 'CCPA: 8.2'
    },
    {
      id: '2',
      institution: 'SSVM',
      degree: 'PCM with Computer Science',
      date: 'May 2022',
      gpa: '86%'
    }
  ],
  skills: [
    { id: '1', category: 'Languages', name: 'Python', level: 'Intermediate' },
    { id: '2', category: 'Languages', name: 'Java', level: 'Novice' },
    { id: '3', category: 'Languages', name: 'C', level: 'Novice' },
    { id: '4', category: 'Languages', name: 'PHP', level: 'Novice' },
    { id: '5', category: 'Languages', name: 'SQL', level: 'Novice' },
    { id: '6', category: 'Languages', name: 'HTML5', level: 'Intermediate' },
    { id: '7', category: 'Languages', name: 'CSS3', level: 'Intermediate' },
    { id: '8', category: 'Tools', name: 'PostgreSQL', level: 'Novice' },
    { id: '9', category: 'Tools', name: 'Figma', level: 'Novice' },
    { id: '10', category: 'Tools', name: 'Github', level: 'Intermediate' },
    { id: '11', category: 'Tools', name: 'VS Code', level: 'Intermediate' },
    { id: '12', category: 'Framework', name: 'Django', level: 'Intermediate' },
    { id: '13', category: 'Framework', name: 'Flask', level: 'Novice' },
    { id: '14', category: 'Framework', name: 'Tensorflow', level: 'Novice' },
    { id: '15', category: 'Framework', name: 'Streamlit', level: 'Novice' },
    { id: '16', category: 'Technologies', name: 'Full Stack Development', level: 'Intermediate' },
    { id: '17', category: 'Technologies', name: 'Web Development', level: 'Intermediate' },
    { id: '18', category: 'Technologies', name: 'Database Management', level: 'Novice' },
    { id: '19', category: 'Others', name: 'Problem Solving', level: 'Intermediate' },
    { id: '20', category: 'Others', name: 'Leadership', level: 'Intermediate' },
    { id: '21', category: 'Others', name: 'Time Management', level: 'Intermediate' },
    { id: '22', category: 'Others', name: 'Team Work', level: 'Intermediate' }
  ],
  projects: [
    {
      id: '1',
      title: 'Events Management System',
      type: 'Full Stack',
      description: 'A comprehensive event management system with user and admin interfaces.',
      technologies: ['Django', 'PostgreSQL', 'HTML', 'CSS', 'JS'],
      featuredPoints: [
        'Developed dynamic back-end functionality to streamline event management and user interaction, handling up to 20 events per month.',
        'Created an intuitive interface for effortless event management and collaboration, benefiting over 8000 students and administrators.'
      ]
    },
    {
      id: '2',
      title: 'House Rent Prediction',
      type: 'Machine Learning',
      description: 'ML model to predict house rent prices with high accuracy.',
      technologies: ['Flask', 'Python', 'LSTM', 'Keras', 'HTML', 'CSS', 'JS'],
      featuredPoints: [
        'Built and trained an LSTM (Long Short-Term Memory) model using Keras to predict house rent prices, achieving an accuracy of 95%.',
        'Designed a user-friendly UI Interface to predict rent based on user inputs, enhancing user interaction efficiency by 60%'
      ]
    },
    {
      id: '3',
      title: 'Grade Calculation System',
      type: 'Computer Vision, AI',
      description: 'Automated grade calculation system for Jewelry Industries.',
      technologies: ['Python', 'Rhino 8'],
      featuredPoints: [
        'Developed a grade calculation system for Jewelry Industries, utilizing product images to automate grading, improving efficiency by 70%.',
        'A script that automates grade calculation by taking input scores and assigning grades based on predefined thresholds, optimizing efficiency within the Rhino 8 environment.'
      ]
    },
    {
      id: '4',
      title: 'Event Website for Symposium',
      type: 'Web Development',
      description: 'Websites for technical events with registration functionality.',
      technologies: ['Python', 'Google Sheets', 'HTML', 'CSS'],
      featuredPoints: [
        'Developed and deployed websites for 2 technical events, enhancing event registrations and user experience.',
        'Designed and optimized responsive UI/UX, ensuring a seamless experience across devices.'
      ]
    }
  ],
  experience: [
    {
      id: '1',
      title: 'President',
      organization: 'IAENG',
      date: '2023 - Present',
      description: 'Led a National Symposium and Conference, managing planning and coordination.'
    },
    {
      id: '2',
      title: 'Vice President',
      organization: 'MSP-CLUB',
      date: '2023 - Present',
      description: 'Successfully organized multiple events, demonstrating leadership and event management skills.'
    },
    {
      id: '3',
      title: 'Instrumentalist',
      organization: 'MUSIC-CLUB',
      date: '2022 - Present',
      description: 'Member of the Music Club as an instrumentalist (Drummer).'
    },
    {
      id: '4',
      title: 'Participant',
      organization: 'PEC HACKS',
      date: 'FEB 2024',
      description: 'Transform data analysis with voice and text inputs, creating interactive visualizations for smarter decisions.'
    }
  ],
  links: [
    { id: '1', name: 'Github', url: 'https://github.com/Sabarish' },
    { id: '2', name: 'LinkedIn', url: 'https://linkedin.com/in/Sabarish-k-s' },
    { id: '3', name: 'Leetcode', url: 'https://leetcode.com/sabarishsubramanian' },
    { id: '4', name: 'Admin', url: '/admin' },
  ]
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    const savedData = localStorage.getItem('portfolioData');
    return savedData ? JSON.parse(savedData) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
  }, [data]);

  // Generate a simple unique ID
  const generateId = () => Math.random().toString(36).substr(2, 9);

  // Helper functions for CRUD operations
  const updatePersonalInfo = (info: PersonalInfo) => {
    setData(prev => ({ ...prev, personalInfo: info }));
  };

  const addEducation = (education: Omit<Education, 'id'>) => {
    const newEducation = { ...education, id: generateId() };
    setData(prev => ({ ...prev, education: [...prev.education, newEducation] }));
  };

  const updateEducation = (education: Education) => {
    setData(prev => ({
      ...prev,
      education: prev.education.map(item => item.id === education.id ? education : item)
    }));
  };

  const deleteEducation = (id: string) => {
    setData(prev => ({
      ...prev,
      education: prev.education.filter(item => item.id !== id)
    }));
  };

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    const newSkill = { ...skill, id: generateId() };
    setData(prev => ({ ...prev, skills: [...prev.skills, newSkill] }));
  };

  const updateSkill = (skill: Skill) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.map(item => item.id === skill.id ? skill : item)
    }));
  };

  const deleteSkill = (id: string) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(item => item.id !== id)
    }));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = { ...project, id: generateId() };
    setData(prev => ({ ...prev, projects: [...prev.projects, newProject] }));
  };

  const updateProject = (project: Project) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(item => item.id === project.id ? project : item)
    }));
  };

  const deleteProject = (id: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(item => item.id !== id)
    }));
  };

  const addExperience = (experience: Omit<Experience, 'id'>) => {
    const newExperience = { ...experience, id: generateId() };
    setData(prev => ({ ...prev, experience: [...prev.experience, newExperience] }));
  };

  const updateExperience = (experience: Experience) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.map(item => item.id === experience.id ? experience : item)
    }));
  };

  const deleteExperience = (id: string) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.filter(item => item.id !== id)
    }));
  };

  const addLink = (link: Omit<Link, 'id'>) => {
    const newLink = { ...link, id: generateId() };
    setData(prev => ({ ...prev, links: [...prev.links, newLink] }));
  };

  const updateLink = (link: Link) => {
    setData(prev => ({
      ...prev,
      links: prev.links.map(item => item.id === link.id ? link : item)
    }));
  };

  const deleteLink = (id: string) => {
    setData(prev => ({
      ...prev,
      links: prev.links.filter(item => item.id !== id)
    }));
  };

  return (
    <DataContext.Provider value={{
      data,
      updatePersonalInfo,
      addEducation,
      updateEducation,
      deleteEducation,
      addSkill,
      updateSkill,
      deleteSkill,
      addProject,
      updateProject,
      deleteProject,
      addExperience,
      updateExperience,
      deleteExperience,
      addLink,
      updateLink,
      deleteLink
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const usePortfolioData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('usePortfolioData must be used within a DataProvider');
  }
  return context;
};