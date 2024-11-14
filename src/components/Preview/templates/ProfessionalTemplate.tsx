import React from 'react';
import { CVData } from '../../../types/cv';

interface TemplateProps {
  data: CVData;
}

export const ProfessionalTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, workExperience, education, skills, languages, projects } = data;

  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="bg-gray-800 text-white px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <p className="text-xl text-gray-300 mb-4">{personalInfo.title}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span>{personalInfo.email}</span>
            <span>•</span>
            <span>{personalInfo.phone}</span>
            <span>•</span>
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12">
        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {workExperience.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-800">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {workExperience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                    <span className="text-gray-600">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-800">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                    <span className="text-gray-600">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-12">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-800">
                Skills
              </h2>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center gap-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
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
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-800">
                Languages
              </h2>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.id} className="flex justify-between">
                    <span className="font-medium text-gray-700">{lang.name}</span>
                    <span className="text-gray-600">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-800">
              Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.name}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-600 text-sm hover:text-blue-800"
                      >
                        View Project ↗
                      </a>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
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
  );
};