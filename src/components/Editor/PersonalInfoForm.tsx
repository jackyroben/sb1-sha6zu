import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { useCVStore } from '../../store/cvStore';
import { FormField } from './FormField';
import { CollapsibleSection } from '../Layout/CollapsibleSection';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  PhotoIcon,
  IdentificationIcon,
  ChatBubbleBottomCenterTextIcon,
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
    <div className="space-y-6 pb-24 md:pb-0">
      {/* Photo Upload */}
      <div
        {...getRootProps()}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center cursor-pointer hover:border-blue-500 transition-colors"
      >
        <input {...getInputProps()} />
        {personalInfo.photo ? (
          <div className="space-y-4">
            <div className="relative inline-block">
              <img
                src={personalInfo.photo}
                alt="Profile"
                className="h-32 w-32 rounded-full object-cover ring-4 ring-white shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                <PhotoIcon className="h-8 w-8 text-white opacity-0 hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <p className="text-sm text-gray-500">Click to Change Photo</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="h-32 w-32 mx-auto rounded-full bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center">
              <PhotoIcon className="h-12 w-12 text-gray-400" />
            </div>
            <div>
              <p className="text-base text-gray-600">Add a Profile Photo</p>
              <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB</p>
            </div>
          </div>
        )}
      </div>

      {/* Basic Information */}
      <CollapsibleSection title="Basic Information" icon={IdentificationIcon}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            label="First Name"
            value={personalInfo.firstName}
            onChange={(value) => updatePersonalInfo({ firstName: value })}
            placeholder="John"
            icon={UserIcon}
          />

          <FormField
            label="Last Name"
            value={personalInfo.lastName}
            onChange={(value) => updatePersonalInfo({ lastName: value })}
            placeholder="Doe"
            icon={UserIcon}
          />

          <FormField
            label="Professional Title"
            value={personalInfo.title}
            onChange={(value) => updatePersonalInfo({ title: value })}
            placeholder="Software Engineer"
            icon={BriefcaseIcon}
            hint="Your current job title or professional role"
          />
        </div>
      </CollapsibleSection>

      {/* Contact Information */}
      <CollapsibleSection title="Contact Information" icon={PhoneIcon}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            label="Email Address"
            value={personalInfo.email}
            onChange={(value) => updatePersonalInfo({ email: value })}
            type="email"
            placeholder="john.doe@example.com"
            icon={EnvelopeIcon}
          />

          <FormField
            label="Phone Number"
            value={personalInfo.phone}
            onChange={(value) => updatePersonalInfo({ phone: value })}
            type="tel"
            placeholder="+1 (555) 123-4567"
            icon={PhoneIcon}
            hint="Include country code for international format"
          />

          <FormField
            label="Location"
            value={personalInfo.location}
            onChange={(value) => updatePersonalInfo({ location: value })}
            placeholder="City, Country"
            icon={MapPinIcon}
            hint="City and country where you're based"
          />
        </div>
      </CollapsibleSection>

      {/* Professional Summary */}
      <CollapsibleSection title="Professional Summary" icon={ChatBubbleBottomCenterTextIcon}>
        <FormField
          label="Summary"
          value={personalInfo.summary}
          onChange={(value) => updatePersonalInfo({ summary: value })}
          multiline
          rows={4}
          placeholder="Brief professional summary highlighting your key strengths and experience"
          icon={DocumentTextIcon}
          hint="Write a compelling summary of your professional background (recommended: 2-4 sentences)"
        />
      </CollapsibleSection>

      {/* Save Button */}
      <div className="fixed bottom-20 inset-x-0 p-4 bg-white border-t border-gray-200 md:hidden">
        <button
          type="button"
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base font-medium shadow-lg"
        >
          SAVE & CONTINUE
        </button>
      </div>
    </div>
  );
};