import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGitAlt } from 'react-icons/fa'; // Example icons for languages/tools
import { SiTailwindcss, SiJquery } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

const SkillsSection = () => {
  return (
    <section className="py-20 min-h-screen dark:bg-gradient-to-r dark:from-indigo-900 dark:via-purple-900 dark:to-pink-600 dark:text-white text-gray-700 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4 xl:w-2/3 shadow-lg p-6 rounded-xl hover:scale-105 transition-all ease-in-out duration-300">
            {/* Grid Layout for Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8" data-aos="fade-up"
          data-aos-duration="2000">
              {/* Skill Card for HTML */}
              <div className="skill-card hover:bg-orange-700 p-4 rounded-lg transition-all ease-in-out">
                <FaHtml5 className="text-5xl text-orange-500 mb-2" />
                <h4 className="text-xl font-medium">HTML</h4>
                <p className="dark:text-gray-300 text-gray-900">I have done '5 projects in this skill</p>
              </div>

              {/* Skill Card for CSS */}
              <div className="skill-card hover:bg-blue-800 p-4 rounded-lg transition-all ease-in-out">
                <FaCss3Alt className="text-5xl text-blue-500 mb-2" />
                <h4 className="text-xl font-medium">CSS</h4>
                <p className="dark:text-gray-300 text-gray-900">I have done '5 projects in this skill</p>
              </div>

              {/* Skill Card for JavaScript */}
              <div className="skill-card hover:bg-yellow-700 p-4 rounded-lg transition-all ease-in-out">
                <FaJsSquare className="text-5xl text-yellow-500 mb-2" />
                <h4 className="text-xl font-medium">JavaScript</h4>
                <p className="dark:text-gray-300 text-gray-900">I have done '5 projects in this skill</p>
              </div>

              {/* Skill Card for React */}
              <div className="skill-card hover:bg-blue-800 p-4 rounded-lg transition-all ease-in-out">
                <FaReact className="text-5xl text-blue-500 mb-2" />
                <h4 className="text-xl font-medium">React</h4>
                <p className="dark:text-gray-300 text-gray-900">I have done '5 projects in this skill</p>
              </div>

              {/* Skill Card for Bootstrap */}
              <div className="skill-card hover:bg-blue-800 p-4 rounded-lg transition-all ease-in-out">
                <FaBootstrap className="text-5xl text-blue-500 mb-2" />
                <h4 className="text-xl font-medium">Bootstrap</h4>
                <p className="dark:text-gray-300 text-gray-900">I have done '5 projects in this skill</p>
              </div>

              {/* Skill Card for Tailwind CSS */}
              <div className="skill-card hover:bg-blue-800 p-4 rounded-lg transition-all ease-in-out">
                <SiTailwindcss className="text-5xl text-blue-500 mb-2" />
                <h4 className="text-xl font-medium">Tailwind CSS</h4>
                <p className="dark:text-gray-300 text-gray-900">I have done '5 projects in this skill</p>
              </div>

              {/* Skill Card for JQuery */}
              <div className="skill-card hover:bg-blue-800 p-4 rounded-lg transition-all ease-in-out">
                <SiJquery className="text-5xl text-blue-500 mb-2" />
                <h4 className="text-xl font-medium">JQuery</h4>
                <p className="dark:text-gray-300 text-gray-900">I have done '5 projects in this skill</p>
              </div>

              {/* Skill Card for Git */}
              <div className="skill-card hover:bg-orange-800 p-4 rounded-lg transition-all ease-in-out">
                <FaGitAlt className="text-5xl text-orange-500 mb-2" />
                <h4 className="text-xl font-medium">Git/GitHub</h4>
                <p className="dark:text-gray-300 text-gray-900">I have done '5 projects in this skill</p>
              </div>

              {/* Skill Card for VSCode */}
              <div className="skill-card hover:bg-blue-800 p-4 rounded-lg transition-all ease-in-out">
                <VscVscode className="text-5xl text-blue-500 mb-2" />
                <h4 className="text-xl font-medium">VsCode</h4>
                <p className="dark:text-gray-300 text-gray-900">I have done '5 projects in this skill</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
