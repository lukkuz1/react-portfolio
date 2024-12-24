// src/components/Skills.js
import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js'];

const Skills = () => {
  return (
    <section className="bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-lg font-medium bg-white p-4 rounded-lg shadow-md"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
