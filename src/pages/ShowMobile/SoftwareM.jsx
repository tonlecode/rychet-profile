import React from 'react';
import Header from '../../components/HeaderM';
import edu from '../../assets/posterEdu.png';  
import wat from '../../assets/posterWat.png';  
import { Link } from 'react-router-dom';

function SoftwareM() {
  return (
    <div className=" min-h-screen">
      <Header />

      {/* Heading Section */}
      <div className=" px-4 mt-[-20rem] text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">
          ស្នាដៃដែលបានបង្កើតកម្មវិធី
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col items-center gap-8 px-4 mt-10 mb-10">
        {/* Card 1: EduJourney */}
        <Link to="/eduDT" className="w-full max-w-md">
          <div className="group bg-white border border-gray-200 rounded-2xl cursor-pointer hover:border-blue-500 hover:shadow-xl transition duration-300">
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition-colors duration-300">
                EduJourney
              </h3>
              <p className="text-sm text-gray-400 mb-2 italic">
                2024 till present
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Created to facilitate learning, especially for children. Empowering education through engaging and accessible content.
              </p>
              <div className="rounded-lg overflow-hidden border border-transparent group-hover:border-blue-500 transition-all duration-300">
                <img
                  src={edu}
                  alt="EduJourney Poster"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* Card 2: Wat Management */}
        <Link to="/wat" className="w-full max-w-md">
          <div className="group bg-white border border-gray-200 rounded-2xl cursor-pointer hover:border-blue-500 hover:shadow-xl transition duration-300">
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition-colors duration-300">
                Wat Management
              </h3>
              <p className="text-sm text-gray-400 mb-2 italic">
                2024 till present
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                I created this management system to simplify the management of money and members.
              </p>
              <div className="rounded-lg overflow-hidden border border-transparent group-hover:border-blue-500 transition-all duration-300">
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

export default SoftwareM;
