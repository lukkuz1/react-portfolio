// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          Hello! I’m a passionate developer with skills in [list your skills]. 
          I love creating interactive and responsive websites.
        </p>
        <img
          src="profile.jpg"
          alt="My Profile"
          className="w-40 h-40 rounded-full mx-auto shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
