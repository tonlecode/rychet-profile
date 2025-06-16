import React from 'react';
import types from '../assets/edu/types.png';

function EduDT() {
  return (
    <div className="py-16 px-6 md:px-20 bg-[#121517] min-h-screen">
      <h1 className="text-white text-4xl font-bold text-center mb-12">
        Welcome to <span className="text-orange-500">EduJourney</span>
      </h1>

      {/* Section Container */}
      <div className="bg-[#1E2327] max-w-6xl mx-auto rounded-xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center shadow-lg">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-md flex justify-center">
          <img
            src={types}
            alt="EduJourney Poster"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-4xl text-center font-bold text-blue-500 mb-6">
  Type Of Content
</h2>

          <p className="text-white mb-6 text-lg leading-relaxed">
            Type Of Content When you enter this app, you are first imported to the page Types that we saw above, there are posters that we pasted about events in Cambodia and various national holidays.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-white text-base">
            <li><strong className="text-orange-500">Buddhism:</strong> When you click on this button, it will only take you to the content you want.</li>
            <li><strong className="text-orange-500">Knowledge:</strong> When you click on this button, it will only take you to the content you want.</li>
            <li><strong className="text-orange-500">English:</strong> When you click on this button, it will only take you to the content you want.</li>
            <li><strong className="text-orange-500">Podcasts:</strong> When you click on this button, it will only take you to the content you want.</li>
            <li><strong className="text-orange-500">Technology:</strong> When you click on this button, it will only take you to the content you want.</li>
            <li><strong className="text-orange-500">Cartoons:</strong> When you click on this button, it will only take you to the content you want.</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-orange-500 text-2xl mt-12">------------------</p>
    </div>
  );
}

export default EduDT;
