import { useTranslation } from 'react-i18next';
import { PersonalInfoForm } from './components/Editor/PersonalInfoForm';
import { ExperienceForm } from './components/Editor/ExperienceForm';
import { EducationForm } from './components/Editor/EducationForm';
import { SkillsForm } from './components/Editor/SkillsForm';
import { CustomFieldsForm } from './components/Editor/CustomFieldsForm';
import { CVPreview } from './components/Preview/CVPreview';
import { MobileNavigation } from './components/Navigation/MobileNavigation';
import { useCVStore } from './store/cvStore';
import { Sidebar } from './components/Layout/Sidebar';
import { MainContent } from './components/Layout/MainContent';
import { SectionTitle } from './components/Layout/SectionTitle';
import { CollapsibleSection } from './components/Layout/CollapsibleSection';
import { 
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

function App() {
  const { t } = useTranslation();
  const { 
    currentStep: currentStepIndex, 
    showPreview, 
    setCurrentStep, 
    setShowPreview,
    data
  } = useCVStore();

  const getSectionSummary = (sectionId: string) => {
    if (!data) return '';

    switch (sectionId) {
      case 'personalInfo':
        if (!data.personalInfo?.firstName && !data.personalInfo?.lastName) return t('noPersonalInfo');
        return `${data.personalInfo?.firstName || ''} ${data.personalInfo?.lastName || ''}${data.personalInfo?.title ? ` • ${data.personalInfo.title}` : ''}`;
      case 'workExperience':
        if (!data.workExperience?.length) return t('noExperience');
        return data.workExperience.map(exp => exp.company).join(' • ');
      case 'education':
        if (!data.education?.length) return t('noEducation');
        return data.education.map(edu => edu.institution).join(' • ');
      case 'skills':
        if (!data.skills?.length) return t('noSkills');
        return data.skills.map(skill => skill.name).join(' • ');
      case 'customFields':
        if (!data.customFields?.length) return t('noCustomFields');
        return data.customFields.map(field => field.label).join(' • ');
      default:
        return '';
    }
  };

  const sections = [
    {
      id: 'personalInfo',
      title: t('personalInfo'),
      icon: UserIcon,
      component: PersonalInfoForm,
      itemCount: 0,
      summary: getSectionSummary('personalInfo')
    },
    {
      id: 'workExperience',
      title: t('experience'),
      icon: BriefcaseIcon,
      component: ExperienceForm,
      itemCount: data?.workExperience?.length || 0,
      summary: getSectionSummary('workExperience')
    },
    {
      id: 'education',
      title: t('education'),
      icon: AcademicCapIcon,
      component: EducationForm,
      itemCount: data?.education?.length || 0,
      summary: getSectionSummary('education')
    },
    {
      id: 'skills',
      title: t('skills'),
      icon: WrenchScrewdriverIcon,
      component: SkillsForm,
      itemCount: data?.skills?.length || 0,
      summary: getSectionSummary('skills')
    },
    {
      id: 'customFields',
      title: t('customFields'),
      icon: PlusIcon,
      component: CustomFieldsForm,
      itemCount: data?.customFields?.length || 0,
      summary: getSectionSummary('customFields')
    }
  ];

  const CurrentStepComponent = sections[currentStepIndex].component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Layout */}
      <div className="hidden md:flex min-h-screen">
        <Sidebar
          steps={sections}
          currentStep={currentStepIndex}
          showPreview={showPreview}
          onStepChange={setCurrentStep}
          onPreviewToggle={() => setShowPreview(!showPreview)}
        />

        {/* Main Content */}
        <div className="flex-1 max-w-[1200px]">
          <div className="h-full mx-auto px-4">
            <MainContent showPreview={showPreview}>
              <div className="max-w-2xl mx-auto">
                <SectionTitle 
                  title={sections[currentStepIndex].title} 
                  icon={sections[currentStepIndex].icon}
                />
                <CurrentStepComponent />
              </div>
            </MainContent>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen pb-20">
        <div className="px-4 py-2 bg-gray-50">
          <div className="space-y-3">
            <CollapsibleSection 
              key={sections[currentStepIndex].id}
              title={sections[currentStepIndex].title} 
              icon={sections[currentStepIndex].icon}
              itemCount={sections[currentStepIndex].itemCount}
              summary={sections[currentStepIndex].summary}
            >
              <CurrentStepComponent />
            </CollapsibleSection>
          </div>
        </div>

        {showPreview && (
          <div className="mt-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <CVPreview />
          </div>
        )}
        <MobileNavigation 
          sections={sections}
          currentStep={currentStepIndex}
          onStepChange={setCurrentStep}
        />
      </div>
    </div>
  );
}

export default App;