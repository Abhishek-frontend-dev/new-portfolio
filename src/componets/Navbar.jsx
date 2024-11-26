import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-800 text-white dark:bg-gray-900 px-4 py-3 flex justify-between items-center fixed w-full z-50">
      {/* Logo */}
      <div className="text-4xl font-bold">
        Abhishek<span className="text-3xl text-yellow-300">.Ak</span>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="dark:bg-gray-600 dark:text-white px-3 py-2 rounded-lg hover:bg-gray-600 hover:text-white hover:dark:bg-gray-500 transition hover:bg-gradient-to-b bg-orange-200 text-slate-950 w-10 h-10 flex justify-center items-center"
        >
          {darkMode ? <MdDarkMode /> : <MdLightMode />}
        </button>

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-8 absolute sm:relative top-16 sm:top-0 left-0 sm:left-auto right-0 sm:right-auto bg-gray-800 sm:bg-transparent w-full sm:w-auto z-40 shadow-lg sm:shadow-none`}
      >
        <a href="#about" className="block sm:inline-block hover:text-rose-300 px-4 py-2 sm:p-0">
          About
        </a>
        <a href="#projects" className="block sm:inline-block hover:text-rose-300 px-4 py-2 sm:p-0">
          Projects
        </a>
        <a href="#contact" className="block sm:inline-block hover:text-rose-300 px-4 py-2 sm:p-0">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
