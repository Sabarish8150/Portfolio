import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code2, Terminal, Database, Cpu, Globe, Brain, Briefcase, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const { theme, toggleTheme } = useTheme();

  const projects = [
    {
      title: "Intern Grading System - Emerald Jewel Industry",
      description: "Currently freelancing on an automated system for evaluating intern performance in jewelry design. Features image processing, automated grading, and comprehensive performance analytics.",
      techStack: ["Python", "OpenCV", "PostgreSQL", "Flask", "React"],
      category: "freelance",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Active Freelance Project"
    },
    {
      title: "Table Data Extraction System",
      description: "Ongoing development of an intelligent pipeline for extracting structured data from jewelry design document images using advanced OCR and image processing techniques.",
      techStack: ["Python", "OpenCV", "Tesseract", "Pandas", "NumPy"],
      category: "ongoing",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "In Development"
    },
    {
      title: "Role-Based Login System",
      description: "Enhanced security system with role-based access control, featuring JWT authentication and modern security practices.",
      techStack: ["React", "Node.js", "JWT", "PostgreSQL"],
      category: "ongoing",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "In Development"
    },
    {
      title: "House Rent Prediction System",
      description: "ML-powered system for predicting rental prices using various factors and market trends. Built with Python, Scikit-learn, and Streamlit.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Streamlit"],
      category: "ml",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "External Events Management System",
      description: "Full-stack web application for managing student participation in technical events with role-based access control.",
      techStack: ["Django", "HTML", "CSS", "JavaScript", "PostgreSQL"],
      category: "web",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-3 rounded-full transition-all ${
          theme === 'dark' 
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
            : 'bg-white text-gray-800 hover:bg-gray-100 shadow-md'
        }`}
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-r from-blue-100/50 to-purple-100/50'} pointer-events-none`} />
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto relative">
            <div className={`absolute -top-20 -left-20 w-64 h-64 ${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-200/40'} rounded-full blur-3xl`} />
            <div className={`absolute -bottom-20 -right-20 w-64 h-64 ${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-200/40'} rounded-full blur-3xl`} />
            <div className="relative">
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${theme === 'dark' ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400' : 'text-gray-900'}`}>
                Sabarish
              </h1>
              <h2 className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6 font-light`}>
                Software Developer | AI & Data Science Enthusiast
              </h2>
              <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                <MapPin size={20} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-8 max-w-2xl`}>
                A passionate software developer with expertise in full-stack development, AI, and data science. 
                Currently freelancing at Emerald Jewel Industry, developing innovative solutions for automation and data processing.
              </p>
              <div className="flex gap-6">
                <a href="#" className={`${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-all transform hover:scale-110`}>
                  <Github size={28} />
                </a>
                <a href="#" className={`${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-all transform hover:scale-110`}>
                  <Linkedin size={28} />
                </a>
                <a href="#" className={`${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-all transform hover:scale-110`}>
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Rest of the sections with theme-aware styling */}
      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              title="Programming Languages" 
              skills={["Python", "C", "Java"]}
              icon={<Code2 size={24} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />}
            />
            <SkillCard 
              title="Data Science & ML" 
              skills={["Pandas", "NumPy", "Matplotlib", "Scikit-learn"]}
              icon={<Brain size={24} className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />}
            />
            <SkillCard 
              title="Web Development" 
              skills={["HTML", "CSS", "JavaScript", "Django", "Streamlit"]}
              icon={<Globe size={24} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />}
            />
            <SkillCard 
              title="Database" 
              skills={["PostgreSQL"]}
              icon={<Database size={24} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />}
            />
            <SkillCard 
              title="Tools & Technologies" 
              skills={["Git", "VS Code", "Jupyter Notebook"]}
              icon={<Terminal size={24} className={theme === 'dark' ? 'text-red-400' : 'text-red-600'} />}
            />
            <SkillCard 
              title="AI & Machine Learning" 
              skills={["TensorFlow", "PyTorch", "OpenCV"]}
              icon={<Cpu size={24} className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'freelance', 'ongoing', 'web', 'ml'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === tab 
                    ? theme === 'dark'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-600 text-white'
                    : theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className={`${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} rounded-xl p-8 backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700/50 hover:border-blue-500/50' : 'border-gray-200 hover:border-blue-400/50'} transition-all shadow-lg`}>
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 ${theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'} rounded-lg flex items-center justify-center`}>
                  <Brain size={32} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">B.Tech – Artificial Intelligence and Data Science</h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Bannari Amman Institute of Technology, Sathyamangalam</p>
                  <p className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mt-2>2022 – Present</p>
                </div>
              </div>
            </div>
            <div className={`${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} rounded-xl p-8 backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700/50 hover:border-purple-500/50' : 'border-gray-200 hover:border-purple-400/50'} transition-all shadow-lg`}>
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 ${theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'} rounded-lg flex items-center justify-center`}>
                  <Code2 size={32} className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Higher Secondary School Certificate</h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>SSVM Karur</p>
                  <p className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} mt-2>Stream: Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} backdrop-blur-sm border-t py-8`}>
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Sabarish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, skills, icon }: { title: string; skills: string[]; icon: React.ReactNode }) {
  const { theme } = useTheme();
  
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-blue-400/50'} rounded-xl p-8 backdrop-blur-sm border transition-all shadow-lg`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className={`${
              theme === 'dark'
                ? 'bg-gray-700/50 hover:bg-blue-500/20'
                : 'bg-gray-100 hover:bg-blue-100'
            } px-4 py-2 rounded-full text-sm transition-all cursor-default`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  status?: string;
}

function ProjectCard({ title, description, techStack, image, status }: ProjectCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`group ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-blue-400/50'} rounded-xl overflow-hidden backdrop-blur-sm border transition-all shadow-lg`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        {status && (
          <div className="absolute top-4 right-4 bg-blue-500/90 px-3 py-1 rounded-full text-sm font-medium text-white">
            {status}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <ExternalLink size={20} className={`${theme === 'dark' ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-500 group-hover:text-blue-600'} cursor-pointer transition-colors`} />
        </div>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4>{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className={`${
                theme === 'dark'
                  ? 'bg-gray-700/50 hover:bg-blue-500/20'
                  : 'bg-gray-100 hover:bg-blue-100'
              } px-3 py-1 rounded-full text-sm transition-all cursor-default`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;