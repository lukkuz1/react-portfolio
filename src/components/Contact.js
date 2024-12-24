// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
