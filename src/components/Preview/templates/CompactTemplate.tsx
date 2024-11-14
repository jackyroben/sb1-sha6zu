import React from 'react';
import { CVData } from '../../../types/cv';

interface TemplateProps {
  data: CVData;
}

export const CompactTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, workExperience, education, skills, languages, projects } = data;

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 text-sm">
      {/* Header */}
      <header className="border-b-2 border-gray-900 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-gray-600">{personalInfo.title}</p>
        <div className="mt-2 text-gray-600 text-xs flex flex-wrap gap-3">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-2">
          {/* Summary */}
          {personalInfo.summary && (
            <section className="mb-6">
              <p className="text-gray-700">{personalInfo.summary}</p>
            </section>
          )}

          {/* Experience */}
          {workExperience.length > 0 && (
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Experience
              </h2>
              <div className="space-y-4">
                {workExperience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-gray-800">{exp.position}</h3>
                      <span className="text-gray-500 text-xs">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <p className="text-gray-600 italic">{exp.company}</p>
                    <p className="mt-1 text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                      <span className="text-gray-500 text-xs">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <p className="text-gray-600 italic">{edu.institution}</p>
                    <p className="mt-1 text-gray-700">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div>
          {/* Skills */}
          {skills.length > 0 && (
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Skills
              </h2>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-800">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}/5</span>
                    </div>
                    <div className="h-1 bg-gray-200 rounded-full mt-1">
                      <div
                        className="h-full bg-gray-800 rounded-full"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <section className="mb-6">
              <h2 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Languages
              </h2>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <div key={lang.id} className="flex justify-between text-xs">
                    <span className="text-gray-800">{lang.name}</span>
                    <span className="text-gray-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Projects
              </h2>
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.id}>
                    <h3 className="font-bold text-gray-800">
                      {project.name}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          ↗
                        </a>
                      )}
                    </h3>
                    <p className="text-gray-700 text-xs">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};