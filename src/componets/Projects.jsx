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
      description: 'This Egg Restaurant project was a valuable learning experience where I applied and strengthened my front-end development skills.By creating this website I learned key concepts like building a responsive layout, adding form validation for easy table booking, and creating an image slider to make the site more engaging. Integrating Google Maps to show the restaurant’s location also helped me understand working with APIs. This project allowed me to blend design with interactive features, boosting my skills in HTML, CSS, and JavaScript while building a user-friendly, attractive restaurant site.',
      videoSrc: 'media/product-filter-appin-react.mp4',
      thumbnail: 'media/product-filter-appin-react.jpg',
      technologies: [<FaReact className='text-blue-600' />, <FaCss3Alt  className='text-blue-400'/>, <FaHtml5  className='text-orange-500'/>],
    },

    {
      title: 'Restorent Home Page',
      description: 'This Product Filter App was an exciting project where I implemented dynamic filtering features using React The app allows users to sort and filter productsbased on various criteria, providing a seamless and interactive experience. Working on this project helped me better understand state management with the useState hook and how to handle user inputs effectively. It also strengthened my skills in creating reusable components and managing props for dynamic functionality. This project gave me valuable insights into building feature-rich, user-friendly React applications.',
      videoSrc: 'media/htmlcssjs-restorent-site.mp4',
      thumbnail: 'media/htmlcssjs-restorent-site.jpg',
       technologies: [<FaJsSquare className='text-yellow-400'/>, <FaCss3Alt  className='text-blue-400'/>, <FaHtml5  className='text-orange-500'/>],
    },

       {
      title: 'Marks Calculator in js',
      description: 'The Marks Calculator project is a tool that calculates a students total marks, percentage, and grade based on their scores.I developed this project using JavaScript to handle conditional logic allowing the calculator to display the grade directly in an input field—a feature that earned me recognition from my teacher. While others faced challenges implementing this, I quickly solved it, strengthening my understanding of JavaScript comparison and conditional flows. This project was an excellent opportunity to practice logic building and improve my skills in creating interactive and functional web tools.',
      videoSrc: 'media/marks-calculator-js.mp4',
      thumbnail: 'media/marks-calculator-js.jpg',
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
      title: 'Quiz App In js',
      description: 'This Quiz App, created with JavaScript, was a great learning experience for building interactive features The app includes hover effects that highlight answers with a background color. When a correct answer is clicked, it turns green, while incorrect answers turn red. Once an answer is selected, further clicks are disabled to maintain accuracy. At the end, users see their score along with a "Play Again" button to restart the quiz. This project was a valuable practice for me to understand event handling, conditional logic, and creating user-friendly functionality in JavaScript',
      videoSrc: 'media/quiz-app-js.mp4',
      thumbnail: 'media/quiz-app-js.jpg',
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
      <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 cursor-pointer ">
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
