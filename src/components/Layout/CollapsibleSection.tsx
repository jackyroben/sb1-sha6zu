import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

interface CollapsibleSectionProps {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  itemCount?: number;
  summary?: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  icon: Icon,
  children,
  defaultOpen = true,
  className = '',
  itemCount = 0,
  summary,
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50"
      >
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="h-5 w-5 text-gray-500" />}
          <div>
            <h3 className="text-base font-medium text-gray-900">{title}</h3>
            {!isOpen && summary && (
              <p className="text-sm text-gray-500 mt-1">{summary}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {itemCount > 0 && (
            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          )}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};