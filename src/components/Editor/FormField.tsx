import React from 'react';
import { ComponentType } from 'react';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  hint?: string;
  icon?: ComponentType<{ className?: string }>;
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  hint,
  icon: Icon,
  multiline = false,
  rows = 4,
  disabled = false,
}) => {
  const inputClasses = "mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base";
  const iconClasses = "h-5 w-5 text-gray-400";

  return (
    <div className="space-y-2">
      <label className="block text-base font-medium text-gray-800">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className={iconClasses} />
          </div>
        )}
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={rows}
            placeholder={placeholder}
            disabled={disabled}
            className={`${inputClasses} ${Icon ? 'pl-10' : ''}`}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className={`${inputClasses} ${Icon ? 'pl-10' : ''}`}
          />
        )}
      </div>
      {hint && (
        <p className="mt-1 text-sm text-gray-500">{hint}</p>
      )}
    </div>
  );
};