import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          MyWebsite
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="#home" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;