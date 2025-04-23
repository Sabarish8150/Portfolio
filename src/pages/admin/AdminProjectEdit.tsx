import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { usePortfolioData, Project } from '../../context/DataContext';
import { ArrowLeft, Save } from 'lucide-react';
import AdminHeader from '../../components/admin/AdminHeader';
import Input from '../../components/common/Input';
import TextArea from '../../components/common/TextArea';
import ArrayInput from '../../components/common/ArrayInput';
import Button from '../../components/common/Button';

const AdminProjectEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, updateProject } = usePortfolioData();
  
  const [formData, setFormData] = useState<Project>({
    id: '',
    title: '',
    type: '',
    description: '',
    technologies: [],
    featuredPoints: [],
    image: '',
    link: '',
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    if (id) {
      const project = data.projects.find((p) => p.id === id);
      if (project) {
        setFormData(project);
      } else {
        // Project not found, redirect to admin page
        navigate('/admin#projects');
      }
    }
  }, [id, data.projects, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleArrayChange = (field: 'technologies' | 'featuredPoints', values: string[]) => {
    setFormData({
      ...formData,
      [field]: values
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate some processing time
    setTimeout(() => {
      try {
        updateProject(formData);
        setSaveStatus('success');
        
        // Redirect after successful save
        setTimeout(() => {
          navigate('/admin#projects');
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
            <Link to="/admin#projects" className="mr-4 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Edit Project
            </h1>
          </div>
          
          {saveStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md">
              Project updated successfully! Redirecting...
            </div>
          )}
          
          {saveStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-md">
              An error occurred while updating the project.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input 
                label="Project Title"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              
              <Input 
                label="Project Type"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="e.g., Full Stack, Machine Learning, Web Development"
                required
              />
            </div>
            
            <TextArea 
              label="Description"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mb-4"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input 
                label="Image URL (optional)"
                id="image"
                name="image"
                value={formData.image || ''}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
              
              <Input 
                label="Project Link (optional)"
                id="link"
                name="link"
                value={formData.link || ''}
                onChange={handleChange}
                placeholder="https://yourproject.com"
              />
            </div>
            
            <ArrayInput 
              label="Technologies"
              id="technologies"
              values={formData.technologies}
              onChange={(values) => handleArrayChange('technologies', values)}
              placeholder="Add a technology"
              required
              className="mb-4"
            />
            
            <ArrayInput 
              label="Featured Points"
              id="featuredPoints"
              values={formData.featuredPoints}
              onChange={(values) => handleArrayChange('featuredPoints', values)}
              placeholder="Add a key achievement or feature"
              required
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

export default AdminProjectEdit;