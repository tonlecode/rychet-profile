import React from 'react';
import Header from '../components/Header';

function WatTD() {
  return (
    <div className="">
      <Header />

      <div className="flex items-center justify-center px-4 py-20">
        <div className=" p-8 md:p-12 rounded-2xl border-2 border-blue-500 max-w-xl w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500  font-sans">
            Data Unavailable
          </h2>
          <p className="text-lg text-blue-500 mb-4  font-sans">
            I cannot display your data at this time. Please wait until I am finished editing or hiding the data.
          </p>
          <p className="text-md text-gray-400 italic  font-sans">
            Please excuse me, <span className="text-green-400 font-medium">Ry Chet</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WatTD;
