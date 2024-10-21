import React from 'react';
import linkedinIcon from '../images/linkedin.png'
import githubIcon from '../images/github.png'
import resumeIcon from '../images/resume.png'
import resumePDF from '../items/alexliu.pdf'
import Dinosaur from '../images/dinosaur.png'

const Navbar = () => {
  return (
    <nav className="bg-cyan-500 bg-opacity-50 p-0 fixed w-full min-w-global top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 text-gray-800 text-2xl font-bold">
            {/* <span>
              <a 
                    href="#about"  
                    rel="noopener noreferrer"
                    className="flex hover:text-white transition duration-300"
                  >
                      alex liu
              </a>
            </span> */}
          <a
                    href="#about"
                  >
            <img
              src={Dinosaur}
              alt="dino"
              className="w-16 h-16 ml-4 hover:scale-125 transform:scale-125 transition duration-300"
            />
          </a>
        </div>
        <ul className="flex sm:space-x-4 space-x-2 sm:text-base text-sm text-white mr-4">
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
