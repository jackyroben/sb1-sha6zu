import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCVStore } from '../../store/cvStore';
import { FormField } from './FormField';
import { WrenchScrewdriverIcon, StarIcon } from '@heroicons/react/24/outline';

export const SkillsForm: React.FC = () => {
  const { t } = useTranslation();
  const { skills, addSkill, removeSkill, updateSkill } = useCVStore((state) => ({
    skills: state.data.skills,
    addSkill: state.addSkill,
    removeSkill: state.removeSkill,
    updateSkill: state.updateSkill,
  }));

  const handleAddSkill = () => {
    addSkill({ name: '', level: 3 });
  };

  return (
    <div className="space-y-8 pb-24 md:pb-0">
      {skills.map((skill) => (
        <div key={skill.id} className="space-y-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 gap-6">
            <FormField
              label="Skill Name"
              value={skill.name}
              onChange={(value) => updateSkill(skill.id, { name: value })}
              placeholder="Enter a skill"
              icon={WrenchScrewdriverIcon}
              hint="Programming language, tool, or soft skill"
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Proficiency Level
              </label>
              <select
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, { level: Number(e.target.value) })}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {[1, 2, 3, 4, 5].map((level) => (
                  <option key={level} value={level}>
                    {level} - {level === 1 ? 'Beginner' : level === 2 ? 'Elementary' : level === 3 ? 'Intermediate' : level === 4 ? 'Advanced' : 'Expert'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={() => removeSkill(skill.id)}
            className="w-full px-4 py-3 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors text-base font-medium"
          >
            REMOVE SKILL
          </button>
        </div>
      ))}

      <div className="fixed bottom-20 inset-x-0 p-4 bg-white border-t border-gray-200 md:relative md:bottom-0 md:inset-x-0 md:p-0 md:bg-transparent md:border-0">
        <button
          onClick={handleAddSkill}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base font-medium shadow-lg md:shadow-none"
        >
          ADD SKILL
        </button>
      </div>
    </div>
  );
};