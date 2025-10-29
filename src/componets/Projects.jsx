import React from 'react';
import ProjectCard from './ProjectCard';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGitAlt, FaJsfiddle } from 'react-icons/fa'; // Example icons for languages/tools
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

const ProjectSection = () => {
  const projects = [
    {
      title: 'Product Filter App Js',
      description: 'This Product Filter App includes features like filtering products by maximum and minimum price, available categories, and a clear filters option to reset selectionsI used the forEach method to handle these filters dynamically and update the product display based on user input. Building this app helped me better understand JavaScript array methods, DOM manipulation, and creating interactive features. It was a practical project that enhanced my ability to implement real-world functionality in web applications.',
      videoSrc: 'media/product-filter-appin-js.mp4',
      thumbnail: 'media/product-filter-appin-js.png',
      technologies: [<FaJsSquare className='text-yellow-400'/>, <FaCss3Alt  className='text-blue-400'/>, <FaHtml5  className='text-orange-500'/>],
    },
    {
      title: 'Product Filter App React',
      description: 'This Product Filter App was an exciting project where I implemented dynamic filtering features using React The app allows users to sort and filter productsbased on various criteria, providing a seamless and interactive experience. Working on this project helped me better understand state management with the useState hook and how to handle user inputs effectively. It also strengthened my skills in creating reusable components and managing props for dynamic functionality. This project gave me valuable insights into building feature-rich, user-friendly React applications.',
      videoSrc: 'media/product-filter-appin-react.mp4',
      thumbnail: 'media/product-filter-appin-react.jpg',
      technologies: [<FaReact className='text-blue-600' />, <FaCss3Alt  className='text-blue-400'/>, <FaHtml5  className='text-orange-500'/>],
    },

    {
      title: 'Moddesk ',
      description: 'This Product Filter App was an exciting project where I implemented dynamic filtering features using React The app allows users to sort and filter productsbased on various criteria, providing a seamless and interactive experience. Working on this project helped me better understand state management with the useState hook and how to handle user inputs effectively. It also strengthened my skills in creating reusable components and managing props for dynamic functionality. This project gave me valuable insights into building feature-rich, user-friendly React applications.',
      videoSrc: 'media/Moddesk Website Ui.png - Moddesk - Visual Studio Code 2025-10-27 16-03-50 (online-video-cutter.com) (1) (2) (online-video-cutter.com).mp4',
      thumbnail: 'media/Moddesk.jpg',
       technologies: [<FaJsSquare className='text-yellow-400'/>, <FaCss3Alt  className='text-blue-400'/>, <FaHtml5  className='text-orange-500'/>],
    },

       {
      title: 'Task Tracker in js', 
      description: 'Just shared my Task Tracker project — built with jQuery, TailwindCSS, and plain HTML. This is a desktop-only app for now. I built it to practice my jQuery skills and understand how the DOM really works — without depending on frameworks. Why jQuery? A lot of people say jQuery is old now, but I feel it’s still useful. Many websites and projects still use it, and it teaches you how to think in terms of the DOM and events. This project was a way for me to learn and prove to myself that I can build a fully working app just with the basics and jQuery. Features: Add, edit, delete tasks Mark tasks as working or completed Add comments to tasks and toggle them Live status counts: total, pending, completed Shows the date & time when a task was created',
      videoSrc: 'media/task tracker - Made with Clipchamp.mp4',
      thumbnail: 'media/todo-manager.jpg',
      technologies: [<FaJsSquare className='text-yellow-400'/>, <FaCss3Alt  className='text-blue-400'/>, <FaHtml5  className='text-orange-500'/>],
    },

      {
      title: 'To-Dolist in React js',
      description: 'This To-Do List App includes a unique "Important Tasks" feature that lets users prioritize certain tasks. First, tasks are added to the standard to-do list and from there, they can be moved to the "Important Tasks" list for easy organization. Working on this project was my first experience with state management in React, where I learned how crucial the useState hook is for managing interactive data. This project opened my eyes to how powerful state management can be and gave me the confidence to create complex features in React.',
      videoSrc: 'media/to-do-listapp-react.mp4',
      thumbnail: 'media/to-do-listapp-react.jpg',
       technologies: [<FaReact className='text-blue-600' />, <FaCss3Alt  className='text-blue-400'/>, <FaHtml5  className='text-orange-500'/>],
    },

      {
      title: 'Quiz App In React js',
      description: 'This Quiz App, built in React, includes a scoring system that tracks correct answers and a "Play Again" button for multiple attempts As users select answers their score updates based on correctness, providing a dynamic and interactive experience. Developing this app gave me a strong boost in confidence, helping me gauge my progress in React and better understand my skills with handling state and component interactions. This project has been a great stepping stone in my React journey, reinforcing my knowledge of hooks and overall React functionality.',
      videoSrc: 'media/quiz-app-react.mp4',
      thumbnail: 'media/quiz-app-react.jpg',
       technologies: [<FaReact className='text-blue-600' />, <FaCss3Alt  className='text-blue-400'/>, <FaHtml5  className='text-orange-500'/>],
    },

      {
      title: 'CRM Dashboard UI Project',
      description: 'This CRM Dashboard UI Project — built entirely with HTML, Tailwind CSS, and Vanilla JavaScript, without any frameworks.The idea came after learning array methods in JavaScript. I wanted a real-world project to challenge myself — something beyond a todo app. What this dashboard does: Add, edit, delete employee cards Toggle user active/inactive status Live search by name, email, or designation Filter by age and designation Live stats panel (total, active, average users) Dark mode toggle All data saved using LocalStorage Tech used: HTML, Tailwind CSS, Vanilla JavaScript',
      videoSrc: 'media/Dashboard-linkedinvd - Made with Clipchamp (1).mp4',
      thumbnail: 'media/CRM.jpg',
       technologies: [<FaJsSquare className='text-yellow-400' />, <FaCss3Alt className='text-blue-400' />, <FaHtml5  className='text-orange-500'/>],
    },

      {
      title: 'Organic Store Bootsrap',
      description: 'This Organic Vegetable Store project was my introduction to Bootstrap, where I learned how to build responsive and visually appealing layouts efficiently The website showcases a clean, professional design, perfect for an organic theme. Through this project, I gained the confidence to create various components like navigation bars, grids, and cards using Bootstrap’s powerful framework. This experience solidified my ability to build fully responsive and modern websites, and I can confidently say I’m prepared to create any design using Bootstrap.',
      videoSrc: 'media/bootsrap-organic.mp4',
      thumbnail: 'media/bootsrap-organic.jpg',
        technologies: [<FaBootstrap  className='text-blue-500'/>, <FaHtml5  className='text-orange-500'/>],
    },
    
     {
      title: 'Portfolio In Bootsrap',
      description: 'This Portfolio project allowed me to explore and utilize a wide range of Bootstrap components including sliders, navigation and cards, . I also incorporated animation effects to make the design more engaging and interactive. This project helped me deepen my understanding of Bootstrap’s features and how to combine them creatively to build a polished, professional-looking website. Overall, it was a great learning experience that improved my design and development skills while showcasing my ability to create visually appealing and functional web layouts.',
      videoSrc: 'media/portfolio.mp4',
      thumbnail: 'media/portfolio.jpg',
        technologies: [<FaBootstrap  className='text-blue-500'/>, <FaHtml5  className='text-orange-500'/>],
    },
    // Add more projects here...
  ];

  return (
    <section id='projects' className="project-section py-16 bg-gray-900 p-4 dark:bg-gradient-to-r dark:from-indigo-1000 dark:via-purple-900 dark:to-pink-800 dark:text-white text-gray-700 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-200">
      <h2 className="text-3xl font-semibold text-white text-center mb-8">My Projects</h2>
      <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 cursor-pointer " data-aos="fade-up-right" data-aos-duration="2000"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            videoSrc={project.videoSrc}
            thumbnail={project.thumbnail}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
