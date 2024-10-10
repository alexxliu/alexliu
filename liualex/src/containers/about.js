import React from 'react';

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">about section</h1>
      <div className="mt-2 text-lg text-gray-600 text-center">
        <p>
            i'm currently a junior in computer science at purdue university, and an incoming software engineering intern at _____.
        </p>
        <p>
            i also like cooking, eating desserts, anime/manga, music, video games, digital art, and traveling.
        </p>
        <p>
            if you have any common interests or just wanna chat, please <a href="#contact" className="text-blue-500">reach out</a>!
        </p>
      </div>
    </div>
  );
};

export default About;
