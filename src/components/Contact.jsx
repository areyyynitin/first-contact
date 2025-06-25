import React from 'react';
import png from '../assets/image.jpg';

const Contact = () => {
  return (
    <div className="bg-[#f5f3ff] min-h-screen w-full px-6 sm:px-20 py-10 flex flex-col md:flex-row items-center justify-between">

      {/* Text section */}
      <div className="w-full md:w-1/2 md:pl-10">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-[#5e5199]">Contact Us</h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          We’ve gathered answers to the most common questions we receive (FAQ) —
          you might just find what you’re looking for here! If not, no worries!
          We’ll be happy to help. Just drop us a message using the form below.
        </p>
      </div>

       {/* Image section - on top in mobile view */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          className="w-[80%] max-w-md rounded-lg shadow-md transition-all duration-300"
          src={png}
          alt="contact"
        />
      </div>
    </div>
  );
};

export default Contact;
