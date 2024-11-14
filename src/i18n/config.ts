import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // General
      cvBuilder: 'CV Builder',
      save: 'SAVE',
      cancel: 'CANCEL',
      remove: 'REMOVE',
      add: 'ADD',
      
      // Personal Info
      personalInfo: 'Personal Information',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      title: 'Professional Title',
      summary: 'Professional Summary',
      
      // Photo Upload
      addProfilePhoto: 'Add Profile Photo',
      clickToChangePhoto: 'Click to Change Photo',
      photoRequirements: 'Upload a professional photo (JPG or PNG, max 10MB)',
      tapToUploadPhoto: 'Tap to Upload Photo',
      
      // Form Sections
      basicInformation: 'Basic Information',
      contactInformation: 'Contact Information',
      professionalSummary: 'Professional Summary',
      
      // Placeholders
      firstNamePlaceholder: 'Enter your first name',
      lastNamePlaceholder: 'Enter your last name',
      titlePlaceholder: 'e.g., Senior Software Engineer',
      emailPlaceholder: 'your.email@example.com',
      phonePlaceholder: '+1 (555) 123-4567',
      locationPlaceholder: 'City, Country',
      summaryPlaceholder: 'Write a brief overview of your professional background...',
      
      // Hints
      titleHint: 'Your current job title or professional role',
      phoneHint: 'Include country code and area code',
      locationHint: 'Your current city and country',
      summaryHint: 'Highlight your key qualifications and career objectives (2-4 sentences)',
      
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
      addSkill: 'ADD SKILL',
      removeSkill: 'REMOVE SKILL',
      
      // Custom Fields
      customFields: 'Custom Fields',
      fieldLabel: 'Field Label',
      fieldValue: 'Field Value',
      enterFieldName: 'Enter field name (e.g., LinkedIn Profile)',
      enterFieldValue: 'Enter the value',
      fieldLabelHint: 'Name of your custom field',
      fieldValueHint: 'Content of your custom field',
      addCustomField: 'ADD CUSTOM FIELD',
      removeField: 'REMOVE FIELD',
      
      // Education
      education: 'Education',
      institution: 'Institution',
      degree: 'Degree',
      field: 'Field of Study',
      startDate: 'Start Date',
      endDate: 'End Date',
      description: 'Description',
      addEducation: 'ADD EDUCATION',
      removeEducation: 'REMOVE EDUCATION',
      
      // Education Placeholders
      institutionPlaceholder: 'Enter school or university name',
      degreePlaceholder: 'e.g., Bachelor of Science',
      fieldPlaceholder: 'e.g., Computer Science',
      educationDescriptionPlaceholder: 'Describe your academic achievements...',
      
      // Education Hints
      institutionHint: 'Name of the school or university',
      degreeHint: 'Type of degree or certification',
      fieldHint: 'Your major or area of study',
      startDateHint: 'When did you start your studies?',
      endDateHint: 'When did you graduate?',
      educationDescriptionHint: 'Include relevant coursework, honors, or activities',
      
      // Experience
      experience: 'Experience',
      company: 'Company',
      position: 'Position',
      current: 'Current Position',
      addExperience: 'ADD EXPERIENCE',
      removeExperience: 'REMOVE EXPERIENCE',
      
      // Experience Placeholders
      companyPlaceholder: 'Enter company name',
      positionPlaceholder: 'Enter your job title',
      experienceDescriptionPlaceholder: 'Describe your responsibilities and achievements...',
      
      // Experience Hints
      companyHint: 'Name of the organization',
      positionHint: 'Your role at the company',
      experienceDescriptionHint: 'Use bullet points to highlight key accomplishments',
      
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
      showPreview: 'SHOW PREVIEW',
      hidePreview: 'HIDE PREVIEW',
      downloadPDF: 'DOWNLOAD PDF',
      
      // Section Management
      arrangeSections: 'Arrange Sections',
      saveAndContinue: 'SAVE & CONTINUE',
      
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