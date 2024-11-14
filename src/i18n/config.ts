import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // General
      cvBuilder: 'CV Builder',
      save: 'Save',
      cancel: 'Cancel',
      remove: 'Remove',
      add: 'Add',
      
      // Personal Info
      personalInfo: 'Personal Information',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      title: 'Professional Title',
      summary: 'Professional Summary',
      
      // Skills
      skills: 'Skills',
      skillName: 'Skill Name',
      enterSkill: 'Enter a skill',
      skillHint: 'Programming language, tool, or soft skill',
      proficiencyLevel: 'Proficiency Level',
      skillLevel1: 'Beginner',
      skillLevel2: 'Elementary',
      skillLevel3: 'Intermediate',
      skillLevel4: 'Advanced',
      skillLevel5: 'Expert',
      addSkill: 'Add Skill',
      removeSkill: 'Remove Skill',
      
      // Custom Fields
      customFields: 'Custom Fields',
      fieldLabel: 'Field Label',
      fieldValue: 'Field Value',
      enterFieldName: 'Enter field name',
      enterFieldValue: 'Enter field value',
      fieldLabelHint: 'Name of your custom field',
      fieldValueHint: 'Content of your custom field',
      addCustomField: 'Add Custom Field',
      removeField: 'Remove Field',
      
      // Education
      education: 'Education',
      institution: 'Institution',
      degree: 'Degree',
      field: 'Field of Study',
      startDate: 'Start Date',
      endDate: 'End Date',
      description: 'Description',
      addEducation: 'Add Education',
      removeEducation: 'Remove Education',
      
      // Experience
      experience: 'Experience',
      company: 'Company',
      position: 'Position',
      current: 'Current Position',
      addExperience: 'Add Experience',
      removeExperience: 'Remove Experience',
      
      // Templates
      chooseTemplate: 'Choose Template',
      modern: 'Modern',
      classic: 'Classic',
      minimal: 'Minimal',
      professional: 'Professional',
      creative: 'Creative',
      executive: 'Executive',
      compact: 'Compact',
      bold: 'Bold',
      
      // Preview
      showPreview: 'Show Preview',
      hidePreview: 'Hide Preview',
      downloadPDF: 'Download PDF',
      
      // Section Management
      arrangeSections: 'Arrange Sections',
      
      // Section summaries
      noPersonalInfo: 'No personal information added',
      noExperience: 'No work experience added',
      noEducation: 'No education added',
      noSkills: 'No skills added',
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