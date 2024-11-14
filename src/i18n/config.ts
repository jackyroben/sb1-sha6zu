import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      cvBuilder: 'CV Builder',
      personalInfo: 'Personal Information',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
      projects: 'Projects',
      customFields: 'Custom Fields',
      showPreview: 'Show Preview',
      hidePreview: 'Hide Preview',
      chooseTemplate: 'Choose Template',
      arrangeSections: 'Arrange Sections',
      close: 'Close',
      modern: 'Modern',
      classic: 'Classic',
      minimal: 'Minimal',
      professional: 'Professional',
      creative: 'Creative',
      executive: 'Executive',
      compact: 'Compact',
      bold: 'Bold',
      // Section summary translations
      noPersonalInfo: 'No personal information added',
      noExperience: 'No work experience added',
      noEducation: 'No education added',
      noSkills: 'No skills added',
      noLanguages: 'No languages added',
      noProjects: 'No projects added',
      noCustomFields: 'No custom fields added'
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;