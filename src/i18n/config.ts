import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      cvBuilder: 'CV BUILDER',
      personalInfo: 'PERSONAL INFORMATION',
      experience: 'EXPERIENCE',
      education: 'EDUCATION',
      skills: 'SKILLS',
      languages: 'LANGUAGES',
      projects: 'PROJECTS',
      customFields: 'CUSTOM FIELDS',
      showPreview: 'SHOW PREVIEW',
      hidePreview: 'HIDE PREVIEW',
      chooseTemplate: 'CHOOSE TEMPLATE',
      arrangeSections: 'ARRANGE SECTIONS',
      close: 'CLOSE',
      modern: 'MODERN',
      classic: 'CLASSIC',
      minimal: 'MINIMAL',
      professional: 'PROFESSIONAL',
      creative: 'CREATIVE',
      executive: 'EXECUTIVE',
      compact: 'COMPACT',
      bold: 'BOLD',
      save: 'SAVE',
      saveAndContinue: 'SAVE & CONTINUE',
      basicInformation: 'BASIC INFORMATION',
      contactInformation: 'CONTACT INFORMATION',
      photo: 'PHOTO',
      addPhoto: 'ADD PHOTO',
      tapToChange: 'TAP TO CHANGE PHOTO',
      dragOrTap: 'DRAG AND DROP OR TAP TO SELECT',
      firstName: 'FIRST NAME',
      lastName: 'LAST NAME',
      title: 'TITLE',
      email: 'EMAIL',
      phone: 'PHONE',
      location: 'LOCATION',
      summary: 'SUMMARY',
      enterFirstName: 'Enter your first name',
      enterLastName: 'Enter your last name',
      enterTitle: 'Enter your professional title',
      enterEmail: 'Enter your email address',
      enterPhone: 'Enter your phone number',
      enterLocation: 'Enter your location',
      enterSummary: 'Write a brief professional summary',
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