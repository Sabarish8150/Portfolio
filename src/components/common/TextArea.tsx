import React from 'react';

type TextAreaProps = {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
  rows?: number;
};

const TextArea: React.FC<TextAreaProps> = ({
  label,
  id,
  value,
  onChange,
  placeholder = '',
  required = false,
  error,
  className = '',
  rows = 4,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label} {required && <span className="text-accent-500">*</span>}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
          ${error 
            ? 'border-accent-500 focus:ring-accent-300 dark:border-accent-500 dark:focus:ring-accent-700'
            : 'border-gray-300 focus:ring-primary-300 focus:border-primary-500 dark:border-dark-500 dark:bg-dark-700 dark:focus:ring-primary-700 dark:focus:border-primary-600'
          }`}
      />
      {error && <p className="mt-1 text-sm text-accent-500">{error}</p>}
    </div>
  );
};

export default TextArea;