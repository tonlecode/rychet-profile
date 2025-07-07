import React from 'react';
import Header from '../components/Header';
import edu from '../assets/posterEdu.png';  // Correct path
import wat from '../assets/posterWat.png';  // Correct path
import { Link } from 'react-router-dom';

function Software() {
  return (
    <div className="">
        <Header />
        
        {/* Heading Section */}
        <div className="ml-30">
          <h1 className="text-4xl font-bold text-blue-600">ស្នាដៃដែលបានបង្កើតកម្មវិធី</h1>
  
        </div>
        
        {/* Grid Layout for Blog Cards */}
        <div className="flex justify-center item-center px-4 mt-[8rem]">
          
          {/* Blog Card 1 */}
          <Link to="/eduDT">
            <div className="group mx-4 bg-white border border-gray-200 rounded-2xl w-[25rem] cursor-pointer hover:border-blue-500 hover:shadow-xl ">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 tracking-wide group-hover:text-blue-500 transition-colors duration-300">
                  EduJourney
                </h3>
                <p className="text-sm text-gray-400 mb-3 italic">
                  2024 till present
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Created to facilitate learning, especially for children. Empowering education through engaging and accessible content.
                </p>

                <div className="mt-5 rounded-lg overflow-hidden border border-transparent group-hover:border-blue-500 transition-all duration-300">
                  <img
                    src={edu}
                    alt="EduJourney Poster"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Card 2 */}
          <Link to="/wat">
            <div className="group mx-4 bg-white border border-gray-200 rounded-2xl w-[25rem] overflow-hidden cursor-pointer hover:border-blue-500 hover:shadow-xl ">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 tracking-wide group-hover:text-blue-500 transition-colors duration-300">
                  Wat Management
                </h3>
                <p className="text-sm text-gray-400 mb-3 italic">
                  2024 till present
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  I created this management system to simplify the management of money and members.
                </p>

                <div className="mt-5 rounded-lg overflow-hidden border border-transparent group-hover:border-blue-500 transition-all duration-300">
                  <img
                    src={wat}
                    alt="Wat Management Poster"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
    </div>
  );
}

export default Software;
