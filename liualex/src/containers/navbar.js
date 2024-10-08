import { NavLink } from 'react-router-dom';
import React from 'react';

const NavLinks = () => {
  return (
    <>
      <NavLink to="/home">Home</NavLink>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          alex liu
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="#home" className="hover:text-gray-300">home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">about</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-300">experience</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300">projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;