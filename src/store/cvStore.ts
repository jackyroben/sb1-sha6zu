import { create } from 'zustand';
import { CVData } from '../types/cv';

interface CVStore {
  data: CVData;
  selectedTemplate: string;
  showPreview: boolean;
  currentStep: number;
  activeSection: string | null;
  updatePersonalInfo: (info: Partial<CVData['personalInfo']>) => void;
  addWorkExperience: (experience: Omit<CVData['workExperience'][0], 'id'>) => void;
  updateWorkExperience: (id: string, experience: Partial<CVData['workExperience'][0]>) => void;
  removeWorkExperience: (id: string) => void;
  addEducation: (education: Omit<CVData['education'][0], 'id'>) => void;
  updateEducation: (id: string, education: Partial<CVData['education'][0]>) => void;
  removeEducation: (id: string) => void;
  addSkill: (skill: Omit<CVData['skills'][0], 'id'>) => void;
  updateSkill: (id: string, skill: Partial<CVData['skills'][0]>) => void;
  removeSkill: (id: string) => void;
  addCustomField: (field: Omit<CVData['customFields'][0], 'id'>) => void;
  updateCustomField: (id: string, field: Partial<CVData['customFields'][0]>) => void;
  removeCustomField: (id: string) => void;
  updateSectionOrder: (order: string[]) => void;
  setTemplate: (template: string) => void;
  setShowPreview: (show: boolean) => void;
  setCurrentStep: (step: number) => void;
  setActiveSection: (section: string | null) => void;
}

const initialState: CVData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  workExperience: [],
  education: [],
  skills: [],
  languages: [],
  projects: [],
  customFields: [],
  sectionOrder: ['personalInfo', 'workExperience', 'education', 'skills', 'languages', 'projects', 'customFields'],
};

export const useCVStore = create<CVStore>((set) => ({
  data: initialState,
  selectedTemplate: 'modern',
  showPreview: false,
  currentStep: 0,
  activeSection: null,
  
  updatePersonalInfo: (info) =>
    set((state) => ({
      data: {
        ...state.data,
        personalInfo: { ...state.data.personalInfo, ...info },
      },
    })),

  addWorkExperience: (experience) =>
    set((state) => ({
      data: {
        ...state.data,
        workExperience: [
          ...state.data.workExperience,
          { ...experience, id: crypto.randomUUID() },
        ],
      },
    })),

  updateWorkExperience: (id, experience) =>
    set((state) => ({
      data: {
        ...state.data,
        workExperience: state.data.workExperience.map((exp) =>
          exp.id === id ? { ...exp, ...experience } : exp
        ),
      },
    })),

  removeWorkExperience: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        workExperience: state.data.workExperience.filter((exp) => exp.id !== id),
      },
    })),

  addEducation: (education) =>
    set((state) => ({
      data: {
        ...state.data,
        education: [
          ...state.data.education,
          { ...education, id: crypto.randomUUID() },
        ],
      },
    })),

  updateEducation: (id, education) =>
    set((state) => ({
      data: {
        ...state.data,
        education: state.data.education.map((edu) =>
          edu.id === id ? { ...edu, ...education } : edu
        ),
      },
    })),

  removeEducation: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        education: state.data.education.filter((edu) => edu.id !== id),
      },
    })),

  addSkill: (skill) =>
    set((state) => ({
      data: {
        ...state.data,
        skills: [
          ...state.data.skills,
          { ...skill, id: crypto.randomUUID() },
        ],
      },
    })),

  updateSkill: (id, skill) =>
    set((state) => ({
      data: {
        ...state.data,
        skills: state.data.skills.map((s) =>
          s.id === id ? { ...s, ...skill } : s
        ),
      },
    })),

  removeSkill: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        skills: state.data.skills.filter((s) => s.id !== id),
      },
    })),

  addCustomField: (field) =>
    set((state) => ({
      data: {
        ...state.data,
        customFields: [
          ...state.data.customFields,
          { ...field, id: crypto.randomUUID() },
        ],
      },
    })),

  updateCustomField: (id, field) =>
    set((state) => ({
      data: {
        ...state.data,
        customFields: state.data.customFields.map((f) =>
          f.id === id ? { ...f, ...field } : f
        ),
      },
    })),

  removeCustomField: (id) =>
    set((state) => ({
      data: {
        ...state.data,
        customFields: state.data.customFields.filter((f) => f.id !== id),
      },
    })),

  updateSectionOrder: (order) =>
    set((state) => ({
      data: {
        ...state.data,
        sectionOrder: order,
      },
    })),

  setTemplate: (template) =>
    set(() => ({
      selectedTemplate: template,
    })),

  setShowPreview: (show) =>
    set(() => ({
      showPreview: show,
    })),

  setCurrentStep: (step) =>
    set(() => ({
      currentStep: step,
    })),

  setActiveSection: (section) =>
    set(() => ({
      activeSection: section,
    })),
}));