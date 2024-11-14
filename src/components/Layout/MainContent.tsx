import React from 'react';
import { CVPreview } from '../Preview/CVPreview';

interface MainContentProps {
  showPreview: boolean;
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ showPreview, children }) => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-6 py-6">
      {/* Form */}
      <div className={`flex-1 ${showPreview ? 'md:w-1/2' : 'w-full'}`}>
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>

      {/* Preview */}
      {showPreview && (
        <div className={`flex-1 md:w-1/2`}>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <CVPreview />
          </div>
        </div>
      )}
    </div>
  );
};