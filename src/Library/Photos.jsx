import React from 'react';
import Header from '../components/Header';

function Photos() {
  const photoList = [
    { id: 1, url: 'https://i.imgur.com/deVMHZL.jpeg', title: 'Photo 1' },
    { id: 2, url: 'https://i.imgur.com/ce2Hehn.jpeg', title: 'Photo 2' },
    { id: 3, url: 'https://i.imgur.com/6xWRn75.jpeg', title: 'Photo 3' },
    { id: 4, url: 'https://i.imgur.com/6XzVZAu.jpeg', title: 'Photo 4' },
    { id: 5, url: 'https://i.imgur.com/GAaKrPm.jpeg', title: 'Photo 5' },
    { id: 6, url: 'https://i.imgur.com/G9ZUeqx.jpeg', title: 'Photo 6' },
    { id: 7, url: 'https://i.imgur.com/CGzghty.jpeg', title: 'Photo 7' },
    { id: 8, url: 'https://i.imgur.com/1mgpNZL.jpeg', title: 'Photo 8' },
    { id: 9, url: 'https://i.imgur.com/Bihzk0h.jpeg', title: 'Photo 9' },
    { id: 10, url: 'https://i.imgur.com/XPGCuf3.jpeg', title: 'Photo 10' },
    { id: 11, url: 'https://i.imgur.com/Csjo55Q.jpeg', title: 'Photo 11' },
    { id: 12, url: 'https://i.imgur.com/Hg1Oy42.jpeg', title: 'Photo 12' },
    { id: 13, url: 'https://i.imgur.com/JURf7p7.jpeg', title: 'Photo 13' },
    { id: 14, url: 'https://i.imgur.com/onR2cgv.jpeg', title: 'Photo 14' },
    { id: 15, url: 'https://i.imgur.com/CF4BXRv.jpeg', title: 'Photo 15' },
    { id: 16, url: 'https://i.imgur.com/PnpbSIM.jpeg', title: 'Photo 16' },
    { id: 17, url: 'https://i.imgur.com/nayX7WO.jpeg', title: 'Photo 17' },
    { id: 18, url: 'https://i.imgur.com/Q0Q1RB9.jpeg', title: 'Photo 18' },
    { id: 19, url: 'https://i.imgur.com/VuGo7th.jpeg', title: 'Photo 19' },
    { id: 20, url: 'https://i.imgur.com/CFrnAYx.jpeg', title: 'Photo 20' },
    { id: 21, url: 'https://i.imgur.com/TfFNloC.jpeg', title: 'Photo 21' },
    { id: 22, url: 'https://i.imgur.com/7ylHU7D.jpeg', title: 'Photo 22' },
    { id: 23, url: 'https://i.imgur.com/oDLstHR.jpeg', title: 'Photo 23' },
    { id: 24, url: 'https://i.imgur.com/0TniC7g.jpeg', title: 'Photo 24' },
    { id: 25, url: 'https://i.imgur.com/0pAyZEz.jpeg', title: 'Photo 25' },
    { id: 26, url: 'https://i.imgur.com/bCeILt2.jpeg', title: 'Photo 26' },
    { id: 27, url: 'https://i.imgur.com/LxJSMne.jpeg', title: 'Photo 27' },
    { id: 28, url: 'https://i.imgur.com/Y5KVJJC.jpeg', title: 'Photo 28' },
    { id: 29, url: 'https://i.imgur.com/U73xaLB.jpeg', title: 'Photo 29' },
    { id: 30, url: 'https://i.imgur.com/3usmaS5.jpeg', title: 'Photo 30' },
    { id: 31, url: 'https://i.imgur.com/TRc6g0B.jpeg', title: 'Photo 31' },
    { id: 32, url: 'https://i.imgur.com/qp0niEu.jpeg', title: 'Photo 32' },
  ];

  return (
    <div>
      <Header />
      <section className="px-6 md:px-16 py-12">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-18 text-center"></h1>
        <h1 className='text-4xl font-extrabold text-blue-600 mb-12 '>រូបភាពអនុស្សាវរីយ៍</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 font-sans">
          {photoList.map((photo) => (
            <a
              key={photo.id}
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 "
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-64 object-cover transition duration-800 transform hover:scale-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder.png';
                }}
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{photo.title}</h3>
                <p className="text-sm text-blue-500">Click to view</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Photos;
