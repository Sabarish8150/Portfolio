import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioData, Project } from '../../../context/DataContext';
import { PlusCircle, Edit, Trash2, AlertCircle } from 'lucide-react';
import Button from '../../common/Button';

const ProjectsList: React.FC = () => {
  const { data, deleteProject, addProject } = usePortfolioData();
  const [isAdding, setIsAdding] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  
  const handleAddNew = () => {
    const newProject: Omit<Project, 'id'> = {
      title: 'New Project',
      type: 'Other',
      description: 'Project description',
      technologies: ['Technology 1'],
      featuredPoints: ['Key feature or achievement'],
    };
    
    addProject(newProject);
  };
  
  const handleDelete = (id: string) => {
    deleteProject(id);
    setShowDeleteConfirm(null);
  };
  
  return (
    <div id="projects" className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium text-gray-900 dark:text-white">Projects</h2>
        
        <Button 
          onClick={handleAddNew}
          variant="primary"
          size="sm"
          icon={<PlusCircle size={16} />}
        >
          Add Project
        </Button>
      </div>
      
      {data.projects.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-dark-700 rounded-lg">
          <AlertCircle size={32} className="mx-auto mb-2" />
          <p>No projects yet. Click "Add Project" to create your first project.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-600">
            <thead className="bg-gray-50 dark:bg-dark-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Technologies</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-dark-600">
              {data.projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{project.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600 dark:text-gray-400">{project.type}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-dark-600 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-dark-600 rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {showDeleteConfirm === project.id ? (
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-gray-600 dark:text-gray-400">Confirm?</span>
                        <Button 
                          variant="danger" 
                          size="sm"
                          onClick={() => handleDelete(project.id)}
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
                        <Link to={`/admin/projects/${project.id}`}>
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
                          onClick={() => setShowDeleteConfirm(project.id)}
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

export default ProjectsList;