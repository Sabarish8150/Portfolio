import React, { useState } from 'react';
import { usePortfolioData, PersonalInfo } from '../../../context/DataContext';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import Button from '../../common/Button';
import { Save } from 'lucide-react';

const PersonalInfoForm: React.FC = () => {
  const { data, updatePersonalInfo } = usePortfolioData();
  const [formData, setFormData] = useState<PersonalInfo>(data.personalInfo);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
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
        updatePersonalInfo(formData);
        setSaveStatus('success');
      } catch (error) {
        setSaveStatus('error');
      } finally {
        setIsSaving(false);
        
        // Reset status after a few seconds
        setTimeout(() => {
          setSaveStatus('idle');
        }, 3000);
      }
    }, 500);
  };
  
  return (
    <div id="personal" className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-6">Personal Information</h2>
      
      {saveStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md">
          Personal information updated successfully!
        </div>
      )}
      
      {saveStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-md">
          An error occurred while updating personal information.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            label="Full Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <Input 
            label="Professional Title"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          
          <Input 
            label="Email"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <Input 
            label="Phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <TextArea 
          label="About Me"
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
          required
          rows={5}
          className="mt-4"
        />
        
        <div className="mt-6 flex justify-end">
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
  );
};

export default PersonalInfoForm;