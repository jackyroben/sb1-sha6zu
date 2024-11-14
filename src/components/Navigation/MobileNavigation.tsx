import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCVStore } from '../../store/cvStore';
import { motion, AnimatePresence } from 'framer-motion';
import {
  EyeIcon,
  Squares2X2Icon,
  PaintBrushIcon,
  EllipsisHorizontalCircleIcon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';
import { SectionReorder } from '../Editor/SectionReorder';
import { TemplateSwitcher } from '../Editor/TemplateSwitcher';
import { PDFDownloadButton } from '../Preview/PDFDownloadButton';

interface MobileNavigationProps {
  sections: Array<{
    id: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  currentStep: number;
  onStepChange: (index: number) => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  sections,
  currentStep,
  onStepChange,
}) => {
  const { t } = useTranslation();
  const { showPreview, setShowPreview } = useCVStore();
  const [isReorderOpen, setIsReorderOpen] = React.useState(false);
  const [isTemplateOpen, setIsTemplateOpen] = React.useState(false);
  const [isFabMenuOpen, setIsFabMenuOpen] = React.useState(false);

  const fabActions = [
    {
      id: 'preview',
      icon: EyeIcon,
      label: showPreview ? t('hidePreview') : t('showPreview'),
      onClick: () => {
        setShowPreview(!showPreview);
        setIsFabMenuOpen(false);
      },
    },
    {
      id: 'template',
      icon: PaintBrushIcon,
      label: t('chooseTemplate'),
      onClick: () => {
        setIsTemplateOpen(true);
        setIsFabMenuOpen(false);
      },
    },
    {
      id: 'reorder',
      icon: Squares2X2Icon,
      label: t('arrangeSections'),
      onClick: () => {
        setIsReorderOpen(true);
        setIsFabMenuOpen(false);
      },
    },
    {
      id: 'download',
      icon: ArrowDownTrayIcon,
      label: t('downloadPDF'),
      component: PDFDownloadButton,
      onClick: () => {
        setIsFabMenuOpen(false);
      },
    },
  ];

  return (
    <>
      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="grid grid-cols-5 h-20">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = currentStep === index;
            return (
              <button
                key={section.id}
                onClick={() => onStepChange(index)}
                className="flex flex-col items-center justify-center space-y-1 px-1"
              >
                <div
                  className={`p-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-600'
                    }`}
                  />
                </div>
                <span
                  className={`text-xs font-medium truncate ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-600'
                  }`}
                >
                  {section.title}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* FAB and Menu */}
      <div className="fixed right-4 bottom-24 z-50">
        <AnimatePresence>
          {isFabMenuOpen && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-25"
              onClick={() => setIsFabMenuOpen(false)}
            />
          )}

          {isFabMenuOpen && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-xl overflow-hidden min-w-[180px]"
            >
              <div className="py-2">
                {fabActions.map((action) => {
                  const Icon = action.icon;
                  if (action.component) {
                    const Component = action.component;
                    return (
                      <div key={action.id} className="px-4 py-2">
                        <Component />
                      </div>
                    );
                  }
                  return (
                    <button
                      key={action.id}
                      onClick={action.onClick}
                      className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      <span>{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsFabMenuOpen(!isFabMenuOpen)}
          className={`p-4 rounded-full shadow-lg transition-colors ${
            isFabMenuOpen 
              ? 'bg-gray-800 text-white'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isFabMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <EllipsisHorizontalCircleIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Section Reorder Dialog */}
      <AnimatePresence>
        {isReorderOpen && (
          <motion.div
            key="reorder-dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-25 z-50"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">{t('arrangeSections')}</h2>
                <button
                  onClick={() => setIsReorderOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <SectionReorder onClose={() => setIsReorderOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Template Switcher Dialog */}
      <AnimatePresence>
        {isTemplateOpen && (
          <motion.div
            key="template-dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-25 z-50"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">{t('chooseTemplate')}</h2>
                <button
                  onClick={() => setIsTemplateOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <TemplateSwitcher onClose={() => setIsTemplateOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};