import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioData, Skill } from '../../../context/DataContext';
import { PlusCircle, Edit, Trash2, AlertCircle } from 'lucide-react';
import Button from '../../common/Button';

const SkillsList: React.FC = () => {
  const { data, deleteSkill, addSkill } = usePortfolioData();
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState<string | null>(null);
  
  const handleAddNew = () => {
    const newSkill: Omit<Skill, 'id'> = {
      category: 'Languages',
      name: 'New Skill',
      level: 'Beginner',
    };
    
    addSkill(newSkill);
  };
  
  const handleDelete = (id: string) => {
    deleteSkill(id);
    setShowDeleteConfirm(null);
  };

  // Group skills by category
  const groupedSkills: Record<string, Skill[]> = data.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
  
  return (
    <div id="skills" className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium text-gray-900 dark:text-white">Skills</h2>
        
        <Button 
          onClick={handleAddNew}
          variant="primary"
          size="sm"
          icon={<PlusCircle size={16} />}
        >
          Add Skill
        </Button>
      </div>
      
      {data.skills.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-dark-700 rounded-lg">
          <AlertCircle size={32} className="mx-auto mb-2" />
          <p>No skills added yet. Click "Add Skill" to create your first skill entry.</p>
        </div>
      ) : (
        <div>
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category} className="mb-6 last:mb-0">
              <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                {category}
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-600">
                  <thead className="bg-gray-50 dark:bg-dark-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Skill</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Level</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-dark-600">
                    {skills.map((skill) => (
                      <tr key={skill.id} className="hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {showDeleteConfirm === skill.id ? (
                            <div className="flex items-center justify-end gap-2">
                              <span className="text-gray-600 dark:text-gray-400">Confirm?</span>
                              <Button 
                                variant="danger" 
                                size="sm"
                                onClick={() => handleDelete(skill.id)}
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
                              <Link to={`/admin/skills/${skill.id}`}>
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
                                onClick={() => setShowDeleteConfirm(skill.id)}
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsList;