import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioData, Experience } from '../../../context/DataContext';
import { PlusCircle, Edit, Trash2, AlertCircle } from 'lucide-react';
import Button from '../../common/Button';

const ExperienceList: React.FC = () => {
  const { data, deleteExperience, addExperience } = usePortfolioData();
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState<string | null>(null);
  
  const handleAddNew = () => {
    const newExperience: Omit<Experience, 'id'> = {
      title: 'New Position',
      organization: 'New Organization',
      date: 'Start Date - Present',
      description: 'Job description',
      responsibilities: ['Responsibility 1'],
    };
    
    addExperience(newExperience);
  };
  
  const handleDelete = (id: string) => {
    deleteExperience(id);
    setShowDeleteConfirm(null);
  };
  
  return (
    <div id="experience" className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium text-gray-900 dark:text-white">Experience</h2>
        
        <Button 
          onClick={handleAddNew}
          variant="primary"
          size="sm"
          icon={<PlusCircle size={16} />}
        >
          Add Experience
        </Button>
      </div>
      
      {data.experience.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-dark-700 rounded-lg">
          <AlertCircle size={32} className="mx-auto mb-2" />
          <p>No experience entries yet. Click "Add Experience" to create your first entry.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-600">
            <thead className="bg-gray-50 dark:bg-dark-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Organization</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-dark-600">
              {data.experience.map((experience) => (
                <tr key={experience.id} className="hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{experience.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600 dark:text-gray-400">{experience.organization}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600 dark:text-gray-400">{experience.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {showDeleteConfirm === experience.id ? (
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-gray-600 dark:text-gray-400">Confirm?</span>
                        <Button 
                          variant="danger" 
                          size="sm"
                          onClick={() => handleDelete(experience.id)}
                        >
                          Yes
                        </Button>
                        <Button 
                          variant="secondary" 
                          size="sm"
                          onClick={() => setShowDeleteConfirm(null)}
                        >
                          No
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-2">
                        <Link to={`/admin/experience/${experience.id}`}>
                          <Button 
                            variant="outline" 
                            size="sm"
                            icon={<Edit size={16} />}
                          >
                            Edit
                          </Button>
                        </Link>
                        <Button 
                          variant="danger" 
                          size="sm"
                          icon={<Trash2 size={16} />}
                          onClick={() => setShowDeleteConfirm(experience.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExperienceList;