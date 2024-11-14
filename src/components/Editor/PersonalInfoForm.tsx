import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { useCVStore } from '../../store/cvStore';
import { FormField } from './FormField';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';

export const PersonalInfoForm: React.FC = () => {
  const { t } = useTranslation();
  const { personalInfo, updatePersonalInfo } = useCVStore((state) => ({
    personalInfo: state.data.personalInfo,
    updatePersonalInfo: state.updatePersonalInfo,
  }));

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          updatePersonalInfo({ photo: reader.result as string });
        };
        reader.readAsDataURL(file);
      }
    },
    [updatePersonalInfo]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
  });

  return (
    <div className="space-y-8">
      {/* Basic Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            label={t('firstName')}
            value={personalInfo.firstName}
            onChange={(value) => updatePersonalInfo({ firstName: value })}
            placeholder="John"
            icon={UserIcon}
          />

          <FormField
            label={t('lastName')}
            value={personalInfo.lastName}
            onChange={(value) => updatePersonalInfo({ lastName: value })}
            placeholder="Doe"
            icon={UserIcon}
          />

          <FormField
            label={t('title')}
            value={personalInfo.title}
            onChange={(value) => updatePersonalInfo({ title: value })}
            placeholder="Software Engineer"
            icon={BriefcaseIcon}
            hint="Your current job title or professional role"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            label={t('email')}
            value={personalInfo.email}
            onChange={(value) => updatePersonalInfo({ email: value })}
            type="email"
            placeholder="john.doe@example.com"
            icon={EnvelopeIcon}
          />

          <FormField
            label={t('phone')}
            value={personalInfo.phone}
            onChange={(value) => updatePersonalInfo({ phone: value })}
            type="tel"
            placeholder="+1 (555) 123-4567"
            icon={PhoneIcon}
            hint="Include country code for international format"
          />

          <FormField
            label={t('location')}
            value={personalInfo.location}
            onChange={(value) => updatePersonalInfo({ location: value })}
            placeholder="City, Country"
            icon={MapPinIcon}
            hint="City and country where you're based"
          />
        </div>
      </div>

      {/* Summary */}
      <FormField
        label={t('summary')}
        value={personalInfo.summary}
        onChange={(value) => updatePersonalInfo({ summary: value })}
        multiline
        rows={4}
        placeholder="Brief professional summary highlighting your key strengths and experience"
        icon={DocumentTextIcon}
        hint="Write a compelling summary of your professional background (recommended: 2-4 sentences)"
      />

      {/* Photo Upload */}
      <div className="space-y-2">
        <label className="block text-base font-medium text-gray-800">
          {t('photo')}
        </label>
        <div
          {...getRootProps()}
          className="mt-2 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 py-8 cursor-pointer hover:border-blue-500 transition-colors"
        >
          <input {...getInputProps()} />
          {personalInfo.photo ? (
            <div className="space-y-4 text-center">
              <img
                src={personalInfo.photo}
                alt="Profile"
                className="mx-auto h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <p className="text-sm text-gray-500">Tap to change photo</p>
            </div>
          ) : (
            <div className="space-y-4 text-center">
              <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
              <div>
                <p className="text-base text-gray-600">Tap to upload profile photo</p>
                <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-20 inset-x-0 p-4 bg-white border-t border-gray-200 md:hidden">
        <button
          type="button"
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-base font-medium shadow-lg"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};