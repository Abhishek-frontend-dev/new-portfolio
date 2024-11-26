import React, { useState } from 'react';
import Navbar from './componets/Navbar';  // Updated import path
import './index.css';
import Hero from './componets/Hero';
import AboutMe from './componets/AboutMe';
import Skilles from './componets/Skilles';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import Footer from './componets/Footer';



function App(){
   const [isDarkmode, setIsDarkmode] = useState(false);

   const toggleTheme = () =>{

    setIsDarkmode(!isDarkmode);
    document.documentElement.classList.toggle('dark', !isDarkmode);
   };

   return(

    <div className={isDarkmode ? 'dark' : ''}>
      <Navbar toggleTheme={toggleTheme}/>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
<Hero/>
<AboutMe/>
<Skilles/>
<Projects/>
<Contact/>
<Footer/>
      </div> 
    </div>
  );
}

export default App;