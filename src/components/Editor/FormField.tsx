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
  const baseClasses = "w-full rounded-md border-gray-300 shadow-sm transition-colors focus:border-blue-500 focus:ring-blue-500 text-base";
  const inputClasses = `${baseClasses} ${Icon ? 'pl-10' : ''}`;
  const iconClasses = "h-5 w-5 text-gray-400";

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700">
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
            className={inputClasses}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className={inputClasses}
          />
        )}
      </div>
      {hint && (
        <p className="text-xs text-gray-500">{hint}</p>
      )}
    </div>
  );
};