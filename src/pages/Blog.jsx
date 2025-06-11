import React from "react";
import edu from "../assets/edu.mp4";
import wat from "../assets/wat.mp4";

function Blog() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Blog
        </h2>

        {/* Grid Layout for Blog Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Blog Card 1 */}
          <div className="border border-orange-500 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-1 tracking-wide">
                EduJourney
              </h3>
              <p className="text-sm text-gray-400 mb-3 italic">
                2024 till present
              </p>
              <p className="text-gray-300 leading-relaxed">
                Created to facilitate learning, especially for children.
                Empowering education through engaging and accessible content.
              </p>
              <div className="mt-5 rounded-lg overflow-hidden">
                <video
                  controls
                  autoPlay
                  muted
                  className="w-full h-[300px] object-contain bg-black"
                  src={edu}
                />
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="border border-orange-500 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-1 tracking-wide">
                EduJourney
              </h3>
              <p className="text-sm text-gray-400 mb-3 italic">
                2024 till present
              </p>
              <p className="text-gray-300 leading-relaxed">
               I created this management system to simplify the management of money and members.
              </p>
              <div className="mt-5 rounded-lg overflow-hidden">
		 
                <video
                  controls
                  autoPlay
                  muted
                  className="w-full h-[300px] object-contain bg-black"
                  src={wat}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
