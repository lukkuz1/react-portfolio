// src/components/Projects.js
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description of project one.',
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description of project two.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-5 border rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
