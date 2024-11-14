import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useCVStore } from '../../store/cvStore';
import { GripVertical } from '../Icons/GripVertical';

interface SortableItemProps {
  id: string;
  label: string;
}

interface SectionReorderProps {
  onClose?: () => void;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, label }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-2 p-3 bg-white rounded-lg border ${
        isDragging ? 'shadow-lg border-blue-300' : 'border-gray-200'
      }`}
    >
      <button
        {...attributes}
        {...listeners}
        className="touch-none p-1 text-gray-400 hover:text-gray-600"
      >
        <GripVertical className="w-4 h-4" />
      </button>
      <span className="text-gray-700">{label}</span>
    </div>
  );
};

export const SectionReorder: React.FC<SectionReorderProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const { sectionOrder, updateSectionOrder } = useCVStore((state) => ({
    sectionOrder: state.data.sectionOrder,
    updateSectionOrder: state.updateSectionOrder,
  }));

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = sectionOrder.indexOf(active.id as string);
      const newIndex = sectionOrder.indexOf(over.id as string);
      updateSectionOrder(arrayMove(sectionOrder, oldIndex, newIndex));
      if (onClose) {
        onClose();
      }
    }
  };

  const sectionLabels: Record<string, string> = {
    personalInfo: t('personalInfo'),
    workExperience: t('experience'),
    education: t('education'),
    skills: t('skills'),
    languages: t('languages'),
    projects: t('projects'),
    customFields: t('customFields'),
  };

  return (
    <div className="space-y-4">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sectionOrder}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-2">
            {sectionOrder.map((section) => (
              <SortableItem
                key={section}
                id={section}
                label={sectionLabels[section]}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};