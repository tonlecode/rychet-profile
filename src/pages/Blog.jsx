import React from "react";
import edu from "../assets/posterEdu.png";
import wat from "../assets/posterWat.png";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-5 text-center">
          <span className="text-blue-500 px-2">My</span>
          <span className="text-red-500">B</span>
          <span className="text-cyan-500">l</span>
          <span className="text-orange-500">o</span>
          <span className="text-green-500">g</span>
        </h2>
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          This is the ability I created.
        </h2>

        {/* Grid Layout for Blog Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Blog Card 1 */}
          <Link to="/eduDT">
            <div className="group border border-orange-500 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-1 tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                  EduJourney
                </h3>
                <p className="text-sm text-gray-400 mb-3 italic">
                  2024 till present
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Created to facilitate learning, especially for children.
                  Empowering education through engaging and accessible content.
                </p>

                <div className="mt-5 rounded-lg overflow-hidden border border-transparent group-hover:border-blue-500 transition-all duration-300">
                  <img
                    src={edu}
                    alt="posterEdu"
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Blog Card 2 */}
          <Link to="/watDT">
            <div className="group border border-orange-500 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-1 tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                  Wat Management
                </h3>
                <p className="text-sm text-gray-400 mb-3 italic">
                  2024 till present
                </p>

                <p className="text-gray-300 leading-relaxed">
                  I created this management system to simplify the management of
                  money and members.
                </p>

                <div className="mt-5 rounded-lg overflow-hidden border border-transparent group-hover:border-blue-500 transition-all duration-300">
                  <img
                    src={wat}
                    alt="posterWat"
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blog;
