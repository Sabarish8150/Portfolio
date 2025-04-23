import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { usePortfolioData, Experience } from '../../context/DataContext';
import { ArrowLeft, Save } from 'lucide-react';
import AdminHeader from '../../components/admin/AdminHeader';
import Input from '../../components/common/Input';
import TextArea from '../../components/common/TextArea';
import ArrayInput from '../../components/common/ArrayInput';
import Button from '../../components/common/Button';

const AdminExperienceEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, updateExperience } = usePortfolioData();
  
  const [formData, setFormData] = useState<Experience>({
    id: '',
    title: '',
    organization: '',
    date: '',
    description: '',
    responsibilities: [],
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    if (id) {
      const experience = data.experience.find((e) => e.id === id);
      if (experience) {
        setFormData(experience);
      } else {
        // Experience not found, redirect to admin page
        navigate('/admin#experience');
      }
    }
  }, [id, data.experience, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleResponsibilitiesChange = (values: string[]) => {
    setFormData({
      ...formData,
      responsibilities: values
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate some processing time
    setTimeout(() => {
      try {
        updateExperience(formData);
        setSaveStatus('success');
        
        // Redirect after successful save
        setTimeout(() => {
          navigate('/admin#experience');
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
            <Link to="/admin#experience" className="mr-4 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Edit Experience
            </h1>
          </div>
          
          {saveStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md">
              Experience updated successfully! Redirecting...
            </div>
          )}
          
          {saveStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-md">
              An error occurred while updating the experience.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input 
                label="Position/Title"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              
              <Input 
                label="Organization/Company"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </div>
            
            <Input 
              label="Date/Period"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="e.g., Jan 2020 - Present"
              required
              className="mb-4"
            />
            
            <TextArea 
              label="Description"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mb-4"
            />
            
            <ArrayInput 
              label="Key Responsibilities (optional)"
              id="responsibilities"
              values={formData.responsibilities || []}
              onChange={handleResponsibilitiesChange}
              placeholder="Add a responsibility"
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

export default AdminExperienceEdit;