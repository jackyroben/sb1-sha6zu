import React from 'react';
import { CVData } from '../../../types/cv';

interface TemplateProps {
  data: CVData;
}

export const ExecutiveTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, workExperience, education, skills, languages, projects } = data;

  return (
    <div className="max-w-4xl mx-auto bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <p className="text-2xl text-slate-300 mb-6">{personalInfo.title}</p>
          <div className="flex justify-center flex-wrap gap-6 text-slate-300">
            <span>{personalInfo.email}</span>
            <span>{personalInfo.phone}</span>
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12">
        {/* Summary */}
        {personalInfo.summary && (
          <section className="mb-12 text-center">
            <p className="text-lg text-slate-700 leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {workExperience.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Professional Experience
            </h2>
            <div className="space-y-10">
              {workExperience.map((exp) => (
                <div key={exp.id} className="border-l-4 border-slate-900 pl-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.position}</h3>
                  <p className="text-xl text-slate-600 mb-2">{exp.company}</p>
                  <p className="text-slate-500 mb-4">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </p>
                  <p className="text-slate-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                  <p className="text-xl text-slate-600 mb-2">{edu.institution}</p>
                  <p className="text-slate-500 mb-4">{edu.startDate} - {edu.endDate}</p>
                  <p className="text-slate-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Expertise
              </h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-slate-900">{skill.name}</span>
                      <span className="text-slate-600">{skill.level}/5</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full">
                      <div
                        className="h-full bg-slate-900 rounded-full"
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Languages
              </h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                {languages.map((lang) => (
                  <div key={lang.id} className="flex justify-between items-center py-3 border-b last:border-0">
                    <span className="text-lg font-medium text-slate-900">{lang.name}</span>
                    <span className="text-slate-600">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Notable Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {project.name}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-slate-500 hover:text-slate-700"
                      >
                        ↗
                      </a>
                    )}
                  </h3>
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
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