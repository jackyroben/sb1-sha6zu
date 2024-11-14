import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCVStore } from '../../store/cvStore';
import { FormField } from './FormField';
import {
  BuildingOfficeIcon,
  BriefcaseIcon,
  CalendarIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export const ExperienceForm: React.FC = () => {
  const { t } = useTranslation();
  const { workExperience, addWorkExperience, removeWorkExperience, updateWorkExperience } = useCVStore((state) => ({
    workExperience: state.data.workExperience,
    addWorkExperience: state.addWorkExperience,
    removeWorkExperience: state.removeWorkExperience,
    updateWorkExperience: state.updateWorkExperience,
  }));

  const handleAddExperience = () => {
    addWorkExperience({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    });
  };

  return (
    <div className="space-y-8 pb-24 md:pb-0">
      {workExperience.map((exp) => (
        <div key={exp.id} className="space-y-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 gap-6">
            <FormField
              label={t('company')}
              value={exp.company}
              onChange={(value) => updateWorkExperience(exp.id, { company: value })}
              placeholder="Company Name"
              icon={BuildingOfficeIcon}
              hint="Enter the name of the company"
            />

            <FormField
              label={t('position')}
              value={exp.position}
              onChange={(value) => updateWorkExperience(exp.id, { position: value })}
              placeholder="Job Title"
              icon={BriefcaseIcon}
              hint="Your role or position at the company"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                label={t('startDate')}
                value={exp.startDate}
                onChange={(value) => updateWorkExperience(exp.id, { startDate: value })}
                type="month"
                icon={CalendarIcon}
                hint="When did you start?"
              />

              <div className="space-y-2">
                <FormField
                  label={t('endDate')}
                  value={exp.endDate}
                  onChange={(value) => updateWorkExperience(exp.id, { endDate: value })}
                  type="month"
                  icon={CalendarIcon}
                  disabled={exp.current}
                  hint="When did you leave?"
                />
                <label className="flex items-center space-x-2 mt-2">
                  <input
                    type="checkbox"
                    checked={exp.current}
                    onChange={(e) => updateWorkExperience(exp.id, { current: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-5 w-5"
                  />
                  <span className="text-base text-gray-700">{t('current')}</span>
                </label>
              </div>
            </div>

            <FormField
              label={t('description')}
              value={exp.description}
              onChange={(value) => updateWorkExperience(exp.id, { description: value })}
              multiline
              rows={4}
              placeholder="Describe your responsibilities and achievements"
              icon={DocumentTextIcon}
              hint="Use bullet points or paragraphs to highlight key accomplishments"
            />
          </div>

          <button
            onClick={() => removeWorkExperience(exp.id)}
            className="mt-4 px-4 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors text-base flex items-center justify-center w-full"
          >
            {t('remove')}
          </button>
        </div>
      ))}

      <div className="fixed bottom-20 inset-x-0 p-4 bg-white border-t border-gray-200 md:relative md:bottom-0 md:inset-x-0 md:p-0 md:bg-transparent md:border-0">
        <button
          onClick={handleAddExperience}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-base font-medium shadow-lg md:shadow-none"
        >
          {t('addExperience')}
        </button>
      </div>
    </div>
  );
};