import React from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useCVStore } from '../../store/cvStore';

interface CollapsibleSectionProps {
  title: string;
  sectionId: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  itemCount?: number;
  isVisible?: boolean;
  summary?: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  sectionId,
  icon: Icon,
  children,
  itemCount = 0,
  isVisible = true,
  summary
}) => {
  const { activeSection, setActiveSection } = useCVStore(state => ({
    activeSection: state.activeSection,
    setActiveSection: state.setActiveSection
  }));

  const isOpen = activeSection === sectionId;
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen && sectionRef.current) {
      const yOffset = -16;
      const element = sectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [isOpen]);

  const handleToggle = () => {
    setActiveSection(isOpen ? null : sectionId);
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className={`bg-white rounded-lg shadow-sm transition-all duration-200 ${
        isOpen ? 'ring-2 ring-indigo-500 ring-opacity-50' : 'hover:bg-gray-50'
      }`}
    >
      <button
        onClick={handleToggle}
        className="w-full px-4 py-3 flex items-center justify-between"
      >
        <div className="flex items-center min-w-0">
          {Icon && (
            <Icon className={`flex-shrink-0 h-5 w-5 mr-3 ${
              isOpen ? 'text-indigo-500' : 'text-gray-400'
            }`} />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center">
              <span className={`font-medium truncate ${
                isOpen ? 'text-indigo-600' : 'text-gray-900'
              }`}>
                {title}
              </span>
              {itemCount > 0 && (
                <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                  {itemCount}
                </span>
              )}
            </div>
            {!isOpen && summary && (
              <p className="mt-1 text-sm text-gray-500 truncate">
                {summary}
              </p>
            )}
          </div>
        </div>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};