import React from 'react';
import Dinosaur from '../images/dinosaurPaint.png'

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen space-x-16">
      <img
        src={Dinosaur}
        alt="Your Name"
        className="w-80 h-80 rounded-full mb-4 shadow-lg"
      />
      <div id="about" className="flex flex-col items-center justify-center w-2/5 p-4 bg-white">
        <h1 className="text-3xl font-bold text-gray-800">about me</h1>
        <br/>
        <div className="mt-2 text-lg text-gray-600 text-left">
          <p>
              i'm currently a junior in computer science at purdue university, and an incoming software engineering intern at _____.
          </p>
          <br/>
          <p>
              i also like cooking, eating desserts, anime/manga, music, video games, digital art, and traveling.
          </p>
          <br/>
          <p>
              if you have any common interests or just wanna chat, please <a href="#contact" className="text-blue-500">reach out</a>!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
