import React from 'react';

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-gray-800 text-white text-center py-4">
      <p className="text-sm">
        Copyright &copy; {new Date().getFullYear()} Alex Liu. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
