import React, { useState } from 'react';
import Button from './Button';
import { Plus, X } from 'lucide-react';

type ArrayInputProps = {
  label: string;
  id: string;
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
};

const ArrayInput: React.FC<ArrayInputProps> = ({
  label,
  id,
  values,
  onChange,
  placeholder = '',
  required = false,
  error,
  className = '',
}) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleAdd = () => {
    if (currentValue.trim()) {
      onChange([...values, currentValue.trim()]);
      setCurrentValue('');
    }
  };

  const handleRemove = (index: number) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    onChange(newValues);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label} {required && <span className="text-accent-500">*</span>}
      </label>
      
      <div className="flex items-center gap-2 mb-2">
        <input
          id={id}
          type="text"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${error 
              ? 'border-accent-500 focus:ring-accent-300 dark:border-accent-500 dark:focus:ring-accent-700'
              : 'border-gray-300 focus:ring-primary-300 focus:border-primary-500 dark:border-dark-500 dark:bg-dark-700 dark:focus:ring-primary-700 dark:focus:border-primary-600'
            }`}
        />
        <Button 
          variant="primary" 
          size="sm" 
          onClick={handleAdd}
          icon={<Plus size={16} />}
        >
          Add
        </Button>
      </div>
      
      {values.length > 0 && (
        <div className="mt-2">
          <ul className="space-y-2">
            {values.map((value, index) => (
              <li key={index} className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-dark-700 rounded">
                <span className="flex-grow">{value}</span>
                <button 
                  onClick={() => handleRemove(index)}
                  className="text-gray-500 hover:text-accent-500 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {error && <p className="mt-1 text-sm text-accent-500">{error}</p>}
    </div>
  );
};

export default ArrayInput;