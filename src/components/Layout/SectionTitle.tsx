import React from 'react';
import { ComponentType } from 'react';

interface SectionTitleProps {
  title: string;
  icon?: ComponentType<{ className?: string }>;
  className?: string;
  isMobile?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  icon: Icon,
  className = '',
  isMobile = false
}) => {
  return (
    <div className={`flex items-center ${isMobile ? 'justify-center' : 'justify-start'} mb-6 ${className}`}>
      {Icon && (
        <Icon className={`h-6 w-6 ${isMobile ? 'mr-2 text-indigo-600' : 'mr-3 text-gray-900'}`} />
      )}
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    </div>
  );
};