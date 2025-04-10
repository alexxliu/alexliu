import React from 'react';
import Me from '../images/me2.JPG'
import linkedinIcon from '../images/linkedin.png'
import githubIcon from '../images/github.png'
import resumeIcon from '../images/resume.png'
import resumePDF from '../items/alexliu.pdf'

const About = () => {
  return (
      <div id="about" className="flex flex-col sm:flex-row items-center items-center justify-center min-w-global min-h-screen sm:space-x-16">
        <div className="flex flex-col">
          <img
            src={Me}
            alt="Your Name"
            className="w-48 h-48 sm:w-80 sm:h-80 rounded-full mb-4 sm:mt-0 mt-24 shadow-lg"
          />
          <h1 className="flex justify-center text-6xl font-bold test-gray-800 mb-3">
            alex liu
          </h1>
          <div className="">
            <p className="flex justify-center items-center font-bold text-4xl">
              —
              <a 
                href="https://www.linkedin.com/in/alexxliu/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-7 h-7 hover:scale-125 transform:scale-125 transition duration-300"
                />
              </a>
              —
              <a 
                href="https://github.com/alexxliu" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-7 h-7 hover:scale-125 transform:scale-125 transition duration-300"
                />
              </a>
              —
              <a 
                href={resumePDF} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img
                  src={resumeIcon}
                  alt="Resume"
                  className="w-7 h-7 hover:scale-125 transform:scale-125 transition duration-300"
                />
              </a>
              —
            </p>

          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:w-2/5 w-3/4 p-4">
          <h1 className="text-4xl font-bold text-cyan-500 sm:mt-0 mt-8 pb-4">about me</h1>
          <div className="text-lg text-gray-700 sm:text-left text-center">
            <p>
                i'm a junior in computer science at purdue university, interested in cloud computing - specifically distributed systems.
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
