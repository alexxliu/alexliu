import React from 'react';

const Copyright = () => {
  return (
    <div id="copyright" className="flex items-center justify-center min-w-global h-10 bg-white">
      <p className="text-sm text-gray-800">
        Copyright &copy; {new Date().getFullYear()} Alex Liu. All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;
