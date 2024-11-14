import React from 'react';
import { CVData } from '../../../types/cv';

interface TemplateProps {
  data: CVData;
}

export const CreativeTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, workExperience, education, skills, languages, projects } = data;

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="px-8 py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto flex items-center gap-8">
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          )}
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <p className="text-xl text-purple-100 mb-4">{personalInfo.title}</p>
            <div className="flex flex-wrap gap-4 text-sm text-purple-100">
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12">
        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {workExperience.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              Work Experience
            </h2>
            <div className="space-y-8">
              {workExperience.map((exp) => (
                <div key={exp.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                    <span className="text-purple-500">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-purple-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                    <span className="text-purple-500">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="text-purple-600 font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-12">
          {/* Skills */}
          {skills.length > 0 && (
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-purple-600 mb-6">
                Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-purple-500">{skill.level}/5</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
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
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-purple-600 mb-6">
                Languages
              </h2>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.id} className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{lang.name}</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.name}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-purple-500 text-sm hover:text-purple-700"
                      >
                        View Project ↗
                      </a>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
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