import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGitAlt, FaLinkedin } from 'react-icons/fa'; // Example icons for languages/tools
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiTailwindcss, SiJquery, SiMailgun } from 'react-icons/si';
import { VscMail, VscMailRead, VscVscode } from 'react-icons/vsc';

const Footer = () => {
  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-6 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center lg:flex-row justify-between px-6">
        {/* Left Side: Copyright */}
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="text-lg font-semibold">
            &copy; {new Date().getFullYear()} Abhishek. All Rights Reserved.
          </p>
        </div>

        {/* Center: Social Media Links */}
        <div className="flex space-x-6 mb-4 lg:mb-0">
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-93a3a8288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"// Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-all duration-300"
          >
            <FaLinkedin  className="w-5 h-5"/>
          </a>
          <a
            href="https://github.com/Abhishek-frontend-dev" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-600 transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" /> 
          </a>
          <a
            href="mailto:abhishekarya2968@gmail.com" // Replace with your email
            className="text-gray-400 hover:text-blue-500 transition-all duration-300"
          >
          <IoIosMail className="w-5 h-5"/>
          </a>
        </div>

        {/* Right Side: Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
