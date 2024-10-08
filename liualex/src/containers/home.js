import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <img
        src="../images/ah.png"
        alt="Your Name"
        className="w-32 h-32 rounded-full mb-4 shadow-lg"
      />
      <h1 className="text-3xl font-bold text-gray-800">alex liu</h1>
      <p className="mt-2 text-lg text-gray-600 text-center">
        hi! i'm a junior studying cs at purdue
      </p>
    </div>
  );
};

export default Home;
