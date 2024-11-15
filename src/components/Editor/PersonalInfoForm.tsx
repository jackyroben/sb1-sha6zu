import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { useCVStore } from '../../store/cvStore';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserCircleIcon,
  BriefcaseIcon,
  DocumentTextIcon
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

  const InputWithIcon = ({ 
    icon: Icon, 
    label, 
    value, 
    onChange, 
    type = 'text',
    placeholder 
  }: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
  }) => (
    <div className="space-y-2">
      <label className="block text-base font-semibold text-gray-900 uppercase tracking-wide text-sm">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base"
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Photo Upload */}
      <div className="space-y-2">
        <label className="block text-base font-semibold text-gray-900 uppercase tracking-wide text-sm">
          {t('photo')}
        </label>
        <div
          {...getRootProps()}
          className="relative mt-2 flex flex-col justify-center items-center rounded-lg border-2 border-dashed border-gray-300 p-6 hover:border-indigo-500 transition-colors cursor-pointer"
        >
          <input {...getInputProps()} />
          {personalInfo.photo ? (
            <div className="text-center">
              <img
                src={personalInfo.photo}
                alt="Profile"
                className="mx-auto h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <p className="mt-4 text-sm text-gray-500">{t('tapToChange')}</p>
            </div>
          ) : (
            <div className="text-center">
              <UserCircleIcon className="mx-auto h-16 w-16 text-gray-400" />
              <p className="mt-4 text-base font-medium text-gray-900">{t('addPhoto')}</p>
              <p className="mt-2 text-sm text-gray-500">{t('dragOrTap')}</p>
            </div>
          )}
        </div>
      </div>

      {/* Basic Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
          {t('basicInformation')}
        </h3>
        <div className="grid grid-cols-1 gap-6">
          <InputWithIcon
            icon={UserCircleIcon}
            label={t('firstName')}
            value={personalInfo.firstName}
            onChange={(e) => updatePersonalInfo({ firstName: e.target.value })}
            placeholder={t('enterFirstName')}
          />
          <InputWithIcon
            icon={UserCircleIcon}
            label={t('lastName')}
            value={personalInfo.lastName}
            onChange={(e) => updatePersonalInfo({ lastName: e.target.value })}
            placeholder={t('enterLastName')}
          />
          <InputWithIcon
            icon={BriefcaseIcon}
            label={t('title')}
            value={personalInfo.title}
            onChange={(e) => updatePersonalInfo({ title: e.target.value })}
            placeholder={t('enterTitle')}
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
          {t('contactInformation')}
        </h3>
        <div className="grid grid-cols-1 gap-6">
          <InputWithIcon
            icon={EnvelopeIcon}
            label={t('email')}
            value={personalInfo.email}
            onChange={(e) => updatePersonalInfo({ email: e.target.value })}
            type="email"
            placeholder={t('enterEmail')}
          />
          <InputWithIcon
            icon={PhoneIcon}
            label={t('phone')}
            value={personalInfo.phone}
            onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
            type="tel"
            placeholder={t('enterPhone')}
          />
          <InputWithIcon
            icon={MapPinIcon}
            label={t('location')}
            value={personalInfo.location}
            onChange={(e) => updatePersonalInfo({ location: e.target.value })}
            placeholder={t('enterLocation')}
          />
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-2">
        <label className="block text-base font-semibold text-gray-900 uppercase tracking-wide text-sm">
          {t('summary')}
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <DocumentTextIcon className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            value={personalInfo.summary}
            onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
            rows={4}
            className="block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base"
            placeholder={t('enterSummary')}
          />
        </div>
      </div>
    </div>
  );
};