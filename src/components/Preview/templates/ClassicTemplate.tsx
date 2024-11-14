import React from 'react';
import { CVData } from '../../../types/cv';

interface TemplateProps {
  data: CVData;
}

export const ClassicTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, workExperience, education, skills, languages, projects } = data;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <header className="text-center mb-8 border-b pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-xl text-gray-600 mb-2">{personalInfo.title}</p>
        <div className="text-gray-600">
          <p>{personalInfo.email} • {personalInfo.phone}</p>
          <p>{personalInfo.location}</p>
        </div>
        {personalInfo.summary && (
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">{personalInfo.summary}</p>
        )}
      </header>

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {workExperience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <span className="text-gray-500">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-gray-600">{exp.company}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className="text-gray-500">{edu.startDate} - {edu.endDate}</span>
                </div>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b">Skills</h2>
            <ul className="list-disc list-inside">
              {skills.map((skill) => (
                <li key={skill.id}>
                  {skill.name} - {skill.level}/5
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b">Languages</h2>
            <ul className="list-disc list-inside">
              {languages.map((lang) => (
                <li key={lang.id}>
                  {lang.name} - {lang.level}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <h3 className="text-xl font-semibold">
                  {project.name}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-600 text-sm"
                    >
                      Link ↗
                    </a>
                  )}
                </h3>
                <p className="mt-1">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 rounded text-sm"
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