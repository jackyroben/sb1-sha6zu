import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCVStore } from '../../store/cvStore';

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
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.id} className="flex items-center gap-4">
          <input
            type="text"
            value={skill.name}
            onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
            placeholder={t('skillName')}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <select
            value={skill.level}
            onChange={(e) => updateSkill(skill.id, { level: Number(e.target.value) })}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5].map((level) => (
              <option key={level} value={level}>
                {level}/5
              </option>
            ))}
          </select>
          <button
            onClick={() => removeSkill(skill.id)}
            className="text-red-600 hover:text-red-800"
          >
            {t('remove')}
          </button>
        </div>
      ))}

      <button
        onClick={handleAddSkill}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        {t('addSkill')}
      </button>
    </div>
  );
};