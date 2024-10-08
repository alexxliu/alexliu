import React from 'react';
import linkedinIcon from '../images/linkedin.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-50 p-4 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 text-white text-2xl font-bold">
          <span>
            <a 
                  href="#home"  
                  rel="noopener noreferrer"
                >
                    alex liu
            </a>
          </span>
          <a 
            href="https://www.linkedin.com/in/alexxliu/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>
        <ul className="flex space-x-4 text-white">
          <li><a href="#about" className="hover:text-gray-300">about</a></li>
          <li><a href="#experience" className="hover:text-gray-300">experience</a></li>
          <li><a href="#projects" className="hover:text-gray-300">projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
