import React from 'react';
import AdminHeader from '../components/admin/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';
import PersonalInfoForm from '../components/admin/dashboard/PersonalInfoForm';
import ProjectsList from '../components/admin/dashboard/ProjectsList';
import EducationList from '../components/admin/dashboard/EducationList';
import SkillsList from '../components/admin/dashboard/SkillsList';
import ExperienceList from '../components/admin/dashboard/ExperienceList';

const Admin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-900">
      <AdminHeader />
      
      <div className="flex">
        <AdminSidebar />
        
        <main className="flex-grow p-6">
          <div className="space-y-6">
            <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Admin Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Welcome to your portfolio admin dashboard. Here you can manage all aspects of your portfolio content.
              </p>
            </div>
            
            <PersonalInfoForm />
            
            <ProjectsList />
            
            <ExperienceList />
            
            <EducationList />
            
            <SkillsList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;