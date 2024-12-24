// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg mb-6">I am a [Your Role, e.g., Web Developer]</p>
      <a
        href="#projects"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
      >
        View My Work
      </a>
    </div>
  );
};

export default Home;
