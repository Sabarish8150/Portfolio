import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { usePortfolioData, Skill } from '../../context/DataContext';
import { ArrowLeft, Save } from 'lucide-react';
import AdminHeader from '../../components/admin/AdminHeader';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import Button from '../../components/common/Button';

const AdminSkillsEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, updateSkill } = usePortfolioData();
  
  const [formData, setFormData] = useState<Skill>({
    id: '',
    category: '',
    name: '',
    level: 'Beginner',
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    if (id) {
      const skill = data.skills.find((s) => s.id === id);
      if (skill) {
        setFormData(skill);
      } else {
        // Skill not found, redirect to admin page
        navigate('/admin#skills');
      }
    }
  }, [id, data.skills, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        updateSkill(formData);
        setSaveStatus('success');
        
        // Redirect after successful save
        setTimeout(() => {
          navigate('/admin#skills');
        }, 1500);
      } catch (error) {
        setSaveStatus('error');
        setIsSaving(false);
      }
    }, 500);
  };
  
  // Extract unique categories from existing skills for the dropdown
  const categories = Array.from(new Set(data.skills.map(skill => skill.category)));
  const categoryOptions = categories.map(category => ({ value: category, label: category }));
  
  // Skill levels
  const levelOptions = [
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Novice', label: 'Novice' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' },
    { value: 'Expert', label: 'Expert' },
  ];
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-900">
      <AdminHeader />
      
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-6">
            <Link to="/admin#skills" className="mr-4 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Edit Skill
            </h1>
          </div>
          
          {saveStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md">
              Skill updated successfully! Redirecting...
            </div>
          )}
          
          {saveStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-md">
              An error occurred while updating the skill.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <Input 
              label="Skill Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mb-4"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category <span className="text-accent-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-colors
                      focus:ring-primary-300 focus:border-primary-500 dark:border-dark-500 dark:bg-dark-700 dark:focus:ring-primary-700 dark:focus:border-primary-600"
                  >
                    <option value="">Select a category</option>
                    {categoryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {formData.category === "custom" && (
                    <input
                      type="text"
                      name="customCategory"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="Enter custom category"
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 transition-colors
                        focus:ring-primary-300 focus:border-primary-500 dark:border-dark-500 dark:bg-dark-700 dark:focus:ring-primary-700 dark:focus:border-primary-600"
                    />
                  )}
                </div>
              </div>
              
              <Select 
                label="Skill Level"
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                options={levelOptions}
                required
              />
            </div>
            
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

export default AdminSkillsEdit;