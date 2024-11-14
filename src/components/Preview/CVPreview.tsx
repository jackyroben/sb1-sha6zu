import React from 'react';
import { useCVStore } from '../../store/cvStore';
import { ModernTemplate } from './templates/ModernTemplate';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { ProfessionalTemplate } from './templates/ProfessionalTemplate';
import { CreativeTemplate } from './templates/CreativeTemplate';
import { ExecutiveTemplate } from './templates/ExecutiveTemplate';
import { CompactTemplate } from './templates/CompactTemplate';
import { BoldTemplate } from './templates/BoldTemplate';

const templates = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  minimal: MinimalTemplate,
  professional: ProfessionalTemplate,
  creative: CreativeTemplate,
  executive: ExecutiveTemplate,
  compact: CompactTemplate,
  bold: BoldTemplate,
};

export const CVPreview: React.FC = () => {
  const { data, selectedTemplate } = useCVStore();
  const Template = templates[selectedTemplate as keyof typeof templates];

  // Sort sections according to the order in data.sectionOrder
  const sortedData = {
    ...data,
    sections: data.sectionOrder.map(sectionId => ({
      id: sectionId,
      content: data[sectionId as keyof typeof data]
    }))
  };

  return (
    <div className="h-full overflow-auto bg-white shadow-lg">
      <Template data={sortedData} />
    </div>
  );
};