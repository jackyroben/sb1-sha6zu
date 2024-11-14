import React, { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useCVStore } from '../../store/cvStore';
import { useTranslation } from 'react-i18next';
import {
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

const SNAP_POINTS = [0, -300, -500]; // Closed, Peek, Full

export const MobileBottomSheet: React.FC = () => {
  const { t } = useTranslation();
  const { activeSection, setActiveSection } = useCVStore();
  const [sheetPosition, setSheetPosition] = useState<number>(0);

  const navigationItems = [
    { id: 'personalInfo', icon: UserIcon, label: t('personalInfo') },
    { id: 'workExperience', icon: BriefcaseIcon, label: t('experience') },
    { id: 'education', icon: AcademicCapIcon, label: t('education') },
    { id: 'skills', icon: WrenchScrewdriverIcon, label: t('skills') },
    { id: 'customFields', icon: PlusIcon, label: t('customFields') },
  ];

  const handleDragEnd = (_: any, info: PanInfo) => {
    const { velocity, offset } = info;
    const currentPosition = sheetPosition + offset.y;

    // Fast swipe
    if (Math.abs(velocity.y) > 500) {
      if (velocity.y > 0) {
        // Swipe down
        setSheetPosition(SNAP_POINTS[0]);
      } else {
        // Swipe up
        setSheetPosition(SNAP_POINTS[2]);
      }
      return;
    }

    // Find nearest snap point
    const nearestPoint = SNAP_POINTS.reduce((prev, curr) => {
      return Math.abs(currentPosition - curr) < Math.abs(currentPosition - prev)
        ? curr
        : prev;
    });

    setSheetPosition(nearestPoint);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pointer-events-none">
      <AnimatePresence>
        {sheetPosition !== 0 && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black pointer-events-auto"
            onClick={() => setSheetPosition(0)}
          />
        )}
      </AnimatePresence>

      <motion.div
        key="bottomSheet"
        initial={{ y: "100%" }}
        animate={{ y: sheetPosition }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 500 }}
        drag="y"
        dragConstraints={{ top: SNAP_POINTS[2], bottom: SNAP_POINTS[0] }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-lg pointer-events-auto"
        style={{ maxHeight: '80vh' }}
      >
        {/* Handle */}
        <div className="flex justify-center p-2">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        {/* Navigation Items */}
        <div className="p-4 space-y-2 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 60px)' }}>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSheetPosition(0);
                }}
                className={`w-full flex items-center gap-3 p-4 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};