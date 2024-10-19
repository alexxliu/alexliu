import React from 'react';
import Dinosaur from '../images/dinosaurPaint.png'
import Arrow from '../images/arrowDown.png'

const About = () => {
  return (
      <div id="about" className="flex flex-col sm:flex-row items-center items-center justify-center min-w-global min-h-screen sm:space-x-16">
        <div className="flex flex-col sm:border-none border-b-4 border-gray-800 p-3">
          <img
            src={Dinosaur}
            alt="Your Name"
            className="w-48 h-48 sm:w-80 sm:h-80 rounded-full outline outline-cyan-500 mb-4 shadow-lg"
          />
          <h1 className="flex justify-center text-6xl font-bold test-gray-800">
            alex liu
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:w-2/5 w-3/5 p-4">
          <h1 className="text-4xl font-bold text-cyan-500 sm:pb-4">about me</h1>
          <div className="text-lg text-gray-700 sm:text-left text-center">
            <p>
                i'm currently a junior in computer science at purdue university, and an incoming software engineering intern at _____.
            </p>
            <br/>
            <p>
                i also like cooking, eating desserts, anime/manga, music, video games, digital art, and traveling.
            </p>
            <br/>
            <p>
                if you have any common interests or just wanna chat, please <a href="#contact" className="text-cyan-500">reach out</a>!
            </p>
          </div>
        </div>
      </div>
      // {/* <a href="#experience">
      //   <img
      //     src={Arrow}
      //     className="w-36 h-36 absolute bottom-8 fill-cyan-500 hover hover:scale-125"
      //   />
      // </a> */}
  );
};

export default About;
