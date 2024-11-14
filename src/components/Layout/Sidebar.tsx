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
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-lg font-semibold text-gray-900">{t('cvBuilder')}</h1>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => onStepChange(index)}
                  className={`group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    currentStep === index
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon 
                    className={`mr-3 h-5 w-5 ${
                      currentStep === index
                        ? 'text-indigo-500'
                        : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {step.title}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="flex-shrink-0 flex flex-col gap-4 p-4 border-t">
          <SectionReorder />
          <TemplateSwitcher />
          <PDFDownloadButton />
          <button
            onClick={onPreviewToggle}
            className={`w-full px-4 py-2 rounded-lg border transition-colors ${
              showPreview
                ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {showPreview ? t('hidePreview') : t('showPreview')}
          </button>
        </div>
      </div>
    </div>
  );
};