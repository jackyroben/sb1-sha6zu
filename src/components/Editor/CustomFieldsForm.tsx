import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCVStore } from '../../store/cvStore';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

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
    <div className="space-y-4">
      {customFields.map((field) => (
        <div key={field.id} className="flex items-center gap-4">
          <input
            type="text"
            value={field.label}
            onChange={(e) => updateCustomField(field.id, { label: e.target.value })}
            placeholder={t('fieldLabel')}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <input
            type="text"
            value={field.value}
            onChange={(e) => updateCustomField(field.id, { value: e.target.value })}
            placeholder={t('fieldValue')}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <button
            onClick={() => removeCustomField(field.id)}
            className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      ))}

      <button
        onClick={handleAddField}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        <PlusIcon className="h-5 w-5" />
        {t('addCustomField')}
      </button>
    </div>
  );
};