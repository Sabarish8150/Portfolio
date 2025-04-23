import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Code
} from 'lucide-react';

type SidebarLink = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  
  const links: SidebarLink[] = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Personal Info', path: '/admin#personal', icon: <User size={20} /> },
    { name: 'Projects', path: '/admin#projects', icon: <Code size={20} /> },
    { name: 'Experience', path: '/admin#experience', icon: <Briefcase size={20} /> },
    { name: 'Education', path: '/admin#education', icon: <GraduationCap size={20} /> },
    { name: 'Skills', path: '/admin#skills', icon: <BookOpen size={20} /> },
  ];
  
  return (
    <aside className="bg-white dark:bg-dark-800 h-full shadow-sm w-64 hidden md:block">
      <div className="p-4">
        <nav>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                    (location.pathname === link.path || location.hash === link.path.substring(link.path.indexOf('#'))) 
                      ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;