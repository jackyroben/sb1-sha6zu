import React from 'react';
import { CVData } from '../../../types/cv';

interface TemplateProps {
  data: CVData;
}

export const BoldTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, workExperience, education, skills, languages, projects } = data;

  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-8">
            {personalInfo.photo && (
              <img
                src={personalInfo.photo}
                alt="Profile"
                className="w-40 h-40 rounded-full border-4 border-white shadow-xl"
              />
            )}
            <div>
              <h1 className="text-5xl font-extrabold mb-2">
                {personalInfo.firstName}
                <br />
                {personalInfo.lastName}
              </h1>
              <p className="text-2xl text-emerald-100 font-light">{personalInfo.title}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-emerald-100">
            <span>{personalInfo.email}</span>
            <span>{personalInfo.phone}</span>
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12">
        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-12 bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
            <p className="text-lg text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {workExperience.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8 flex items-center">
              <span className="bg-emerald-600 w-8 h-1 mr-4"></span>
              Experience
            </h2>
            <div className="space-y-8">
              {workExperience.map((exp) => (
                <div key={exp.id} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-emerald-200">
                  <div className="absolute left-0 top-0 w-2 h-2 bg-emerald-600 rounded-full -translate-x-[3px]"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                  <p className="text-lg text-emerald-600 mb-2">{exp.company}</p>
                  <p className="text-gray-500 mb-4">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8 flex items-center">
              <span className="bg-emerald-600 w-8 h-1 mr-4"></span>
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-emerald-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                  <p className="text-emerald-600 mb-2">{edu.institution}</p>
                  <p className="text-gray-500 mb-4">{edu.startDate} - {edu.endDate}</p>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-emerald-900 mb-6 flex items-center">
                <span className="bg-emerald-600 w-8 h-1 mr-4"></span>
                Skills
              </h2>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-2">
                        <span className="text-lg font-bold text-gray-900">{skill.name}</span>
                        <span className="text-emerald-600">{skill.level}/5</span>
                      </div>
                      <div className="h-3 bg-emerald-200 rounded-full">
                        <div
                          className="h-full bg-emerald-600 rounded-full"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-emerald-900 mb-6 flex items-center">
                <span className="bg-emerald-600 w-8 h-1 mr-4"></span>
                Languages
              </h2>
              <div className="bg-emerald-50 p-6 rounded-lg">
                {languages.map((lang) => (
                  <div key={lang.id} className="flex justify-between items-center py-3 border-b last:border-0 border-emerald-200">
                    <span className="text-lg font-bold text-gray-900">{lang.name}</span>
                    <span className="px-4 py-1 bg-emerald-600 text-white rounded-full">
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
            <h2 className="text-3xl font-bold text-emerald-900 mb-8 flex items-center">
              <span className="bg-emerald-600 w-8 h-1 mr-4"></span>
              Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.name}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-emerald-600 hover:text-emerald-700 text-lg"
                      >
                        View Project ↗
                      </a>
                    )}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
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