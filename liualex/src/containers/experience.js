import React from 'react';
import Roblox from '../images/robloxPaint.png'
import Train from '../images/trainPaint.png'
import Nationwide from '../images/nationwidePaint.png'

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col items-center justify-center min-w-global min-h-screen">
      <h1 className="text-4xl font-bold text-cyan-500">experience</h1>
      <div className="w-3/5 p-4">
        {/* <div className="flex mt-2 items-center justify-evenly">
          <div className="flex-col">
            <p className="font-bold text-2xl text-gray-700 text-left">
              roblox
            </p>
            <p className="italic text-lg test-gray-500 text-left">
              swe intern
            </p>
            <ul class="list-disc">
              <li className="text-lg ml-4 text-gray-700 text-left">
                i work here next summa
              </li>
            </ul>
          </div> 
          <img 
            src={Roblox}
            alt="roblox"
            className="w-40 h-40"
          />
        </div> */}

        <div className="flex mt-2 items-center justify-evenly">
          <img 
            src={Train}
            alt="wabtec"
            className="w-40 h-40"
          />
          <div className="flex-col">
            <p className="font-bold text-2xl text-gray-700 text-left">
              wabtec
            </p>
            <p className="italic text-lg test-gray-500 text-left">
              swe intern
            </p>
            <ul class="list-disc">
              <li className="text-lg ml-4 text-gray-700 text-left">
                train go choo choo
              </li>
            </ul>
          </div> 
        </div>

        <div className="flex mt-2 items-center justify-evenly">
          <div className="flex-col">
            <p className="font-bold text-2xl text-gray-700 text-left">
              nationwide
            </p>
            <p className="italic text-lg test-gray-500 text-left">
              data science intern
            </p>
            <ul class="list-disc">
              <li className="text-lg ml-4 text-gray-700 text-left">
                cars and monie numbers
              </li>
            </ul>
          </div> 
          <img 
            src={Nationwide}
            alt="nationwide"
            className="w-40 h-40"
          />
        </div>

      </div>

    </div>
  );
};

export default Experience;
