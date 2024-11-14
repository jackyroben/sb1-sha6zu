import React from 'react';
import { CVData } from '../../../types/cv';

interface TemplateProps {
  data: CVData;
}

export const MinimalTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, workExperience, education, skills, languages, projects } = data;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-light text-gray-900 mb-1">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-xl text-gray-600 mb-4">{personalInfo.title}</p>
        <div className="text-sm text-gray-600 space-x-4">
          <span>{personalInfo.email}</span>
          <span>•</span>
          <span>{personalInfo.phone}</span>
          <span>•</span>
          <span>{personalInfo.location}</span>
        </div>
        {personalInfo.summary && (
          <p className="mt-6 text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        )}
      </header>

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Experience</h2>
          <div className="space-y-8">
            {workExperience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">{exp.position}</h3>
                  <span className="text-sm text-gray-500">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{exp.company}</p>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Education</h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-medium">{edu.degree}</h3>
                  <span className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{edu.institution}</p>
                <p className="text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-12">
        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Skills</h2>
            <div className="space-y-2">
              {skills.map((skill) => (
                <div key={skill.id} className="text-sm">
                  {skill.name}
                  <div className="w-24 h-1 bg-gray-200 rounded-full inline-block ml-2">
                    <div
                      className="h-full bg-gray-600 rounded-full"
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
            <h2 className="text-lg font-medium text-gray-900 mb-4">Languages</h2>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.id} className="text-sm">
                  {lang.name} <span className="text-gray-500">- {lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Projects</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-medium">
                  {project.name}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-gray-500 text-sm hover:text-gray-700"
                    >
                      ↗
                    </a>
                  )}
                </h3>
                <p className="text-sm mt-1">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 rounded"
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
  );
};