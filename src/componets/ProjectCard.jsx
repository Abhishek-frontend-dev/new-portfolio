import React, { useState, useRef } from 'react';

const ProjectCard = ({ title, description, videoSrc, thumbnail, technologies }) => {
  const [hovered, setHovered] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);  // State for toggling full description
  const [isFullScreen, setIsFullScreen] = useState(false); // State to track full-screen
  const videoRef = useRef(null); // Ref to access the video element

  // Function to handle hover effect for playing video
  const handleHover = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Function to handle video full-screen on click
  const handleFullScreen = () => {
    const videoElement = videoRef.current;

    if (!isFullScreen) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
      }

      // Set the full-screen state
      setIsFullScreen(true);
      videoElement.play(); // Play the video once in full-screen mode
    } else {
      // Exit full-screen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }

      setIsFullScreen(false);
    }
  };

  // Function to toggle description visibility
  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div
      className="project-card relative  rounded-lg overflow-hidden shadow-lg group bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900"
      onMouseEnter={() => {
        setHovered(true);
        handleHover();
      }}
      onMouseLeave={() => {
        setHovered(false);
        handleMouseLeave();
      }}
    >
      {/* Thumbnail or Video */}
      <div className="video-container relative">
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          className={`w-full h-48 object-cover transition-opacity duration-300 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <video
          ref={videoRef} // Add ref to the video element
          src={videoSrc}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          loop
          onClick={handleFullScreen} // Add click event to trigger fullscreen
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold dark:text-white ">{title}</h3>
                   {/* Technology Icons */}
       <div className="flex space-x-2 mt-3">
  {technologies.map((TechIcon, index) => (
    <span key={index} className="text-lg text-gray-300">{TechIcon}</span>
  ))}
</div>

        {/* Conditionally show description */}
        <p className="dark:text-gray-400 mt-2 text-sm">
          {showFullDescription ? description : `${description.substring(0, 100)}...`}
        </p>

        {/* Read More Button */}
        <button
          onClick={toggleDescription}
          className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded shadow hover:scale-105 transition"
        >
          {showFullDescription ? 'Read Less' : 'Read More'}
        </button>

      </div>
    </div>
  );
};

export default ProjectCard;
