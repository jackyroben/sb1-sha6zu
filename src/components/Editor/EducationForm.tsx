import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCVStore } from '../../store/cvStore';
import { FormField } from './FormField';
import {
  AcademicCapIcon,
  BookOpenIcon,
  CalendarIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export const EducationForm: React.FC = () => {
  const { t } = useTranslation();
  const { education, addEducation, removeEducation, updateEducation } = useCVStore((state) => ({
    education: state.data.education,
    addEducation: state.addEducation,
    removeEducation: state.removeEducation,
    updateEducation: state.updateEducation,
  }));

  const handleAddEducation = () => {
    addEducation({
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  return (
    <div className="space-y-8 pb-24 md:pb-0">
      {education.map((edu) => (
        <div key={edu.id} className="space-y-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 gap-6">
            <FormField
              label="Institution"
              value={edu.institution}
              onChange={(value) => updateEducation(edu.id, { institution: value })}
              placeholder="University or School Name"
              icon={AcademicCapIcon}
              hint="Enter the name of your educational institution"
            />

            <FormField
              label="Degree"
              value={edu.degree}
              onChange={(value) => updateEducation(edu.id, { degree: value })}
              placeholder="Bachelor's, Master's, etc."
              icon={BookOpenIcon}
              hint="Type of degree or certification"
            />

            <FormField
              label="Field of Study"
              value={edu.field}
              onChange={(value) => updateEducation(edu.id, { field: value })}
              placeholder="Major or Concentration"
              icon={BookOpenIcon}
              hint="Your area of specialization"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                label="Start Date"
                value={edu.startDate}
                onChange={(value) => updateEducation(edu.id, { startDate: value })}
                type="month"
                icon={CalendarIcon}
                hint="When did you start?"
              />

              <FormField
                label="End Date"
                value={edu.endDate}
                onChange={(value) => updateEducation(edu.id, { endDate: value })}
                type="month"
                icon={CalendarIcon}
                hint="When did you graduate?"
              />
            </div>

            <FormField
              label="Description"
              value={edu.description}
              onChange={(value) => updateEducation(edu.id, { description: value })}
              multiline
              rows={4}
              placeholder="Describe your academic achievements and activities"
              icon={DocumentTextIcon}
              hint="Include relevant coursework, honors, or extracurricular activities"
            />
          </div>

          <button
            onClick={() => removeEducation(edu.id)}
            className="w-full px-4 py-3 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors text-base font-medium"
          >
            REMOVE EDUCATION
          </button>
        </div>
      ))}

      <div className="fixed bottom-20 inset-x-0 p-4 bg-white border-t border-gray-200 md:relative md:bottom-0 md:inset-x-0 md:p-0 md:bg-transparent md:border-0">
        <button
          onClick={handleAddEducation}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base font-medium shadow-lg md:shadow-none"
        >
          ADD EDUCATION
        </button>
      </div>
    </div>
  );
};