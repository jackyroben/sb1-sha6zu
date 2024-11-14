import React from 'react';
import { useTranslation } from 'react-i18next';
import { TemplateSwitcher } from '../Editor/TemplateSwitcher';
import { PDFDownloadButton } from '../Preview/PDFDownloadButton';
import { SectionReorder } from '../Editor/SectionReorder';
import { Step } from '../../types/steps';

interface SidebarProps {
  steps: Step[];
  currentStep: number;
  showPreview: boolean;
  onStepChange: (index: number) => void;
  onPreviewToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  steps,
  currentStep,
  showPreview,
  onStepChange,
  onPreviewToggle,
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-56 bg-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="p-3">
            <h1 className="text-lg font-semibold text-gray-900">{t('cvBuilder')}</h1>
          </div>
          <nav className="px-2 space-y-1">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => onStepChange(index)}
                  className={`group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentStep === index
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon 
                    className={`mr-3 h-5 w-5 ${
                      currentStep === index
                        ? 'text-blue-500'
                        : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {step.title}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="p-3 space-y-2 border-t">
          <SectionReorder />
          <TemplateSwitcher />
          <PDFDownloadButton />
          <button
            onClick={onPreviewToggle}
            className="w-full px-3 py-2 text-sm font-medium rounded-md transition-colors border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {showPreview ? t('hidePreview') : t('showPreview')}
          </button>
        </div>
      </div>
    </div>
  );
};