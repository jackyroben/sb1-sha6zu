import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCVStore } from '../../store/cvStore';

interface TemplateSwitcherProps {
  onClose?: () => void;
}

export const TemplateSwitcher: React.FC<TemplateSwitcherProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const { selectedTemplate, setTemplate } = useCVStore();

  const templates = [
    { id: 'modern', name: t('modern') },
    { id: 'classic', name: t('classic') },
    { id: 'minimal', name: t('minimal') },
    { id: 'professional', name: t('professional') },
    { id: 'creative', name: t('creative') },
    { id: 'executive', name: t('executive') },
    { id: 'compact', name: t('compact') },
    { id: 'bold', name: t('bold') },
  ];

  const handleTemplateSelect = (templateId: string) => {
    setTemplate(templateId);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => handleTemplateSelect(template.id)}
          className={`p-3 text-center rounded-lg border transition-colors ${
            selectedTemplate === template.id
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          {template.name}
        </button>
      ))}
    </div>
  );
};