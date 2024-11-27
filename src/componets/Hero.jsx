import React from 'react';
import './Custom.css';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id='hero' className="relative dark:bg-gradient-to-tr dark:from-indigo-900 dark:via-purple-900 dark:to-amber-800 text-white py-20 min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-600 via-indigo-800">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)] opacity-10"></div>

      <div className="relative container mx-auto px-6 text-center z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Hi, I'm{' '}
          <span className="text-yellow-300 relative">
           Abhishek
            <span className="blinking-cursor">|</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mb-8 font-light">
          Crafting stunning websites with passion and precision.
        </p>

        {/* Call-to-Action Button */}
        <div className='flex flex-col sm:flex-row justify-center '>
          <Link
            to="projects"
            className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-300 ease-in-out m-3"
          >
            View My Work
          </Link>

          <a
           href="media/Abhishek Kumar CV.pdf"
           download="Abhishek_cv.pdf"
            className="px-8 py-4 bg-blue-700 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:scale-105 transition-all duration-300 ease-in-out m-3"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
