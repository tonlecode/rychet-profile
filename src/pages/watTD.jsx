import React from 'react';

function WatTD() {
  return (
    <div className="min-h-screen bg-[#121517] flex items-center justify-center px-4">
      <div className="bg-[#1E2327] text-white text-center max-w-xl w-full rounded-xl shadow-lg p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-500">
          Data Unavailable
        </h2>
        <p className="text-lg mb-2">
          I cannot display your data at this time. Please wait until I am finished editing or hiding the data.
        </p>
        <p className="text-md text-gray-300 italic">
          Please excuse me, <span className='text-green-500'>Ry Chet</span>.
        </p>
      </div>
    </div>
  );
}

export default WatTD;
