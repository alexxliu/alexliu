import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <img
        src="/path/to/your/photo.jpg" // Replace with your photo's path
        alt="Your Name"
        className="w-32 h-32 rounded-full mb-4 shadow-lg"
      />
      <h1 className="text-3xl font-bold text-gray-800">Your Name</h1>
      <p className="mt-2 text-lg text-gray-600 text-center">
        Welcome to my personal website! I'm a passionate [Your Profession/Interest]
        with a love for [Your Interests or Skills]. This is where I share my projects,
        thoughts, and experiences. Feel free to explore!
      </p>
    </div>
  );
};

export default Home;
