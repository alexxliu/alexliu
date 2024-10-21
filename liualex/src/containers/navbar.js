import React from 'react';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png'
import resumeIcon from '../images/resume.png'
import resumePDF from '../items/alexliu.pdf'

const Navbar = () => {
  return (
    <nav className="bg-cyan-500 bg-opacity-50 p-5 fixed w-full min-w-global top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 text-gray-800 text-2xl font-bold">
          <span>
            <a 
                  href="#about"  
                  rel="noopener noreferrer"
                  className="hidden sm:flex hover:text-white transition duration-300"
                >
                    alex liu
            </a>
          </span>
          <span>
            <a 
                  href="#about"  
                  rel="noopener noreferrer"
                  className="flex sm:hidden hover:text-white transition duration-300"
                >
                    al
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
              className="w-6 h-6 hover:invert transition duration-300"
            />
          </a>
          <a 
            href="https://github.com/alexxliu" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-6 h-6 hover:invert transition duration-300"
            />
          </a>
          <a 
            href={resumePDF} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src={resumeIcon}
              alt="Resume"
              className="w-6 h-6 hover:invert transition duration-300"
            />
          </a>
        </div>
        <ul className="flex sm:space-x-4 space-x-2 sm:text-base text-sm text-white">
          <li><a href="#about" className="hover:text-gray-800 transition duration-300">about</a></li>
          <li><a href="#experience" className="hover:text-gray-800 transition duration-300">experience</a></li>
          <li><a href="#projects" className="hover:text-gray-800 transition duration-300">projects</a></li>
          <li><a href="#contact" className="hover:text-gray-800 transition duration-300">contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
