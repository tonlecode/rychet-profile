import React from 'react';
import HeaderM from '../components/HeaderM';

function PhotosM() {


  return (
  <div>
      <HeaderM />
      <section className="px-6 md:px-16 py-12 mt-[-30rem] flex items-center justify-center">
        <div className="p-8 md:p-12 rounded-2xl max-w-xl w-full text-center shadow-lg bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500 font-sans">
            Data Unavailable
          </h2>
          <p className="text-lg text-blue-500 mb-4 font-sans">
            I cannot display your data at this time. Please wait until I am finished editing or hiding the data.
          </p>
          <p className="text-md text-gray-400 italic font-sans">
            Please excuse me, <span className="text-green-400 font-medium">Ry Chet</span>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PhotosM;
