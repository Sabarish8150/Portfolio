import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioData, Education } from '../../../context/DataContext';
import { PlusCircle, Edit, Trash2, AlertCircle } from 'lucide-react';
import Button from '../../common/Button';

const EducationList: React.FC = () => {
  const { data, deleteEducation, addEducation } = usePortfolioData();
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState<string | null>(null);
  
  const handleAddNew = () => {
    const newEducation: Omit<Education, 'id'> = {
      institution: 'New Institution',
      degree: 'New Degree',
      date: 'Current - Future',
      description: '',
    };
    
    addEducation(newEducation);
  };
  
  const handleDelete = (id: string) => {
    deleteEducation(id);
    setShowDeleteConfirm(null);
  };
  
  return (
    <div id="education" className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium text-gray-900 dark:text-white">Education</h2>
        
        <Button 
          onClick={handleAddNew}
          variant="primary"
          size="sm"
          icon={<PlusCircle size={16} />}
        >
          Add Education
        </Button>
      </div>
      
      {data.education.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-dark-700 rounded-lg">
          <AlertCircle size={32} className="mx-auto mb-2" />
          <p>No education entries yet. Click "Add Education" to create your first entry.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-600">
            <thead className="bg-gray-50 dark:bg-dark-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Institution</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Degree</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-dark-600">
              {data.education.map((education) => (
                <tr key={education.id} className="hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{education.institution}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600 dark:text-gray-400">{education.degree}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600 dark:text-gray-400">{education.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {showDeleteConfirm === education.id ? (
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-gray-600 dark:text-gray-400">Confirm?</span>
                        <Button 
                          variant="danger" 
                          size="sm"
                          onClick={() => handleDelete(education.id)}
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
                        <Link to={`/admin/education/${education.id}`}>
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
                          onClick={() => setShowDeleteConfirm(education.id)}
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

export default EducationList;