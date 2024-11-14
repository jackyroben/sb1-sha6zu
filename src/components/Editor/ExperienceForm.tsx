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
        <div key={exp.id} className="space-y-4 p-4 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('company')}
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateWorkExperience(exp.id, { company: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('position')}
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateWorkExperience(exp.id, { position: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {t('startDate')}
                </label>
                <input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => updateWorkExperience(exp.id, { startDate: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {t('endDate')}
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="month"
                    value={exp.endDate}
                    disabled={exp.current}
                    onChange={(e) => updateWorkExperience(exp.id, { endDate: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <label className="flex items-center space-x-2 mt-1">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => updateWorkExperience(exp.id, { current: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-500">{t('current')}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t('description')}
            </label>
            <textarea
              value={exp.description}
              onChange={(e) => updateWorkExperience(exp.id, { description: e.target.value })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => removeWorkExperience(exp.id)}
            className="text-red-600 hover:text-red-800"
          >
            {t('remove')}
          </button>
        </div>
      ))}

      <button
        onClick={handleAddExperience}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        {t('addExperience')}
      </button>
    </div>
  );
};