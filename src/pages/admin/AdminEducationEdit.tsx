import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { usePortfolioData, Education } from '../../context/DataContext';
import { ArrowLeft, Save } from 'lucide-react';
import AdminHeader from '../../components/admin/AdminHeader';
import Input from '../../components/common/Input';
import TextArea from '../../components/common/TextArea';
import Button from '../../components/common/Button';

const AdminEducationEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, updateEducation } = usePortfolioData();
  
  const [formData, setFormData] = useState<Education>({
    id: '',
    institution: '',
    degree: '',
    date: '',
    description: '',
    gpa: '',
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    if (id) {
      const education = data.education.find((e) => e.id === id);
      if (education) {
        setFormData(education);
      } else {
        // Education not found, redirect to admin page
        navigate('/admin#education');
      }
    }
  }, [id, data.education, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate some processing time
    setTimeout(() => {
      try {
        updateEducation(formData);
        setSaveStatus('success');
        
        // Redirect after successful save
        setTimeout(() => {
          navigate('/admin#education');
        }, 1500);
      } catch (error) {
        setSaveStatus('error');
        setIsSaving(false);
      }
    }, 500);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-900">
      <AdminHeader />
      
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-6">
            <Link to="/admin#education" className="mr-4 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Edit Education
            </h1>
          </div>
          
          {saveStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md">
              Education updated successfully! Redirecting...
            </div>
          )}
          
          {saveStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-md">
              An error occurred while updating the education.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input 
                label="Institution"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                required
              />
              
              <Input 
                label="Degree/Certificate"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input 
                label="Date/Period"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="e.g., May 2020 - May 2024"
                required
              />
              
              <Input 
                label="GPA/Grade (optional)"
                id="gpa"
                name="gpa"
                value={formData.gpa || ''}
                onChange={handleChange}
                placeholder="e.g., 3.8/4.0, 85%, etc."
              />
            </div>
            
            <TextArea 
              label="Description (optional)"
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              placeholder="Add details about your education"
              className="mb-6"
            />
            
            <div className="flex justify-end">
              <Button 
                type="submit"
                disabled={isSaving}
                icon={<Save size={16} />}
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminEducationEdit;