import React from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  required?: boolean;
  error?: string;
  className?: string;
};

const Select: React.FC<SelectProps> = ({
  label,
  id,
  value,
  onChange,
  options,
  required = false,
  error,
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label} {required && <span className="text-accent-500">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
          ${error 
            ? 'border-accent-500 focus:ring-accent-300 dark:border-accent-500 dark:focus:ring-accent-700'
            : 'border-gray-300 focus:ring-primary-300 focus:border-primary-500 dark:border-dark-500 dark:bg-dark-700 dark:focus:ring-primary-700 dark:focus:border-primary-600'
          }`}
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-accent-500">{error}</p>}
    </div>
  );
};

export default Select;