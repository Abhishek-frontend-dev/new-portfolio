import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();


const AboutMe = () => {
  return (
   <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div
          className="grid md:grid-cols-2 gap-8 items-center"
          data-aos="fade-up"
          data-aos-duration="1000" // AOS library for animations
        >
          {/* Profile Picture */}
          <div className="flex justify-center">
            <img
              src="src/assets/profile.jpg"
              alt="Your Name"
              className="rounded-full w-64 h-64 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* About Me Content */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hi, I’m <span className="text-indigo-500 font-bold">Abhishek Kumar</span>, a
              passionate front-end developer. I specialize in creating interactive
              and visually stunning web experiences.
            </p>
           
            </div>
          </div>
        </div>
    </section>
  );
};

export default AboutMe;
