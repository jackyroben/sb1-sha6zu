import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCVStore } from '../../store/cvStore';

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
    <div className="space-y-8">
      {workExperience.map((exp) => (
        <div key={exp.id} className="space-y-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="block text-base font-medium text-gray-800">
                {t('company')}
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateWorkExperience(exp.id, { company: e.target.value })}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-base font-medium text-gray-800">
                {t('position')}
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateWorkExperience(exp.id, { position: e.target.value })}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-base font-medium text-gray-800">
                  {t('startDate')}
                </label>
                <input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => updateWorkExperience(exp.id, { startDate: e.target.value })}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-base font-medium text-gray-800">
                  {t('endDate')}
                </label>
                <div className="flex flex-col space-y-2">
                  <input
                    type="month"
                    value={exp.endDate}
                    disabled={exp.current}
                    onChange={(e) => updateWorkExperience(exp.id, { endDate: e.target.value })}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base"
                  />
                  <label className="flex items-center space-x-2">
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
            </div>

            <div className="space-y-2">
              <label className="block text-base font-medium text-gray-800">
                {t('description')}
              </label>
              <textarea
                value={exp.description}
                onChange={(e) => updateWorkExperience(exp.id, { description: e.target.value })}
                rows={4}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base"
              />
            </div>
          </div>

          <button
            onClick={() => removeWorkExperience(exp.id)}
            className="mt-4 px-4 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors text-base"
          >
            {t('remove')}
          </button>
        </div>
      ))}

      <button
        onClick={handleAddExperience}
        className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-base font-medium"
      >
        {t('addExperience')}
      </button>
    </div>
  );
};