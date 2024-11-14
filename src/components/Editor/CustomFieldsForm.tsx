import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCVStore } from '../../store/cvStore';
import { FormField } from './FormField';
import { TagIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export const CustomFieldsForm: React.FC = () => {
  const { t } = useTranslation();
  const { customFields, addCustomField, removeCustomField, updateCustomField } = useCVStore((state) => ({
    customFields: state.data.customFields,
    addCustomField: state.addCustomField,
    removeCustomField: state.removeCustomField,
    updateCustomField: state.updateCustomField,
  }));

  const handleAddField = () => {
    addCustomField({ label: '', value: '' });
  };

  return (
    <div className="space-y-8 pb-24 md:pb-0">
      {customFields.map((field) => (
        <div key={field.id} className="space-y-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 gap-6">
            <FormField
              label="Field Label"
              value={field.label}
              onChange={(value) => updateCustomField(field.id, { label: value })}
              placeholder="Enter field name"
              icon={TagIcon}
              hint="Name of your custom field"
            />

            <FormField
              label="Field Value"
              value={field.value}
              onChange={(value) => updateCustomField(field.id, { value: value })}
              placeholder="Enter field value"
              icon={DocumentTextIcon}
              hint="Content of your custom field"
            />
          </div>

          <button
            onClick={() => removeCustomField(field.id)}
            className="w-full px-4 py-3 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors text-base font-medium"
          >
            REMOVE FIELD
          </button>
        </div>
      ))}

      <div className="fixed bottom-20 inset-x-0 p-4 bg-white border-t border-gray-200 md:relative md:bottom-0 md:inset-x-0 md:p-0 md:bg-transparent md:border-0">
        <button
          onClick={handleAddField}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base font-medium shadow-lg md:shadow-none"
        >
          ADD CUSTOM FIELD
        </button>
      </div>
    </div>
  );
};