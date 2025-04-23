import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Moon, Sun } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import Button from '../common/Button';

const AdminHeader: React.FC = () => {
  const { logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <header className="bg-white dark:bg-dark-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/admin" className="text-xl font-bold text-primary-600 dark:text-primary-400">
          Admin Dashboard
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            View Portfolio
          </Link>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            icon={<LogOut size={16} />}
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;