import React, { useEffect, useRef, useState } from "react";
import HeaderM from "../../components/HeaderM";
import FooterM from "../../components/FooterM";

import photo1 from "../../assets/myphoto/p1.jpg";
import photo2 from "../../assets/myphoto/p2.jpg";
import photo4 from "../../assets/myphoto/p4.jpg";
import photo6 from "../../assets/myphoto/p6.jpg";
import photo8 from "../../assets/myphoto/p8.jpg";
import photo9 from "../../assets/myphoto/p9.jpg";
import photo10 from "../../assets/myphoto/p10.jpg";

const images = [photo1, photo2, photo4, photo6, photo8, photo9, photo10];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.clientWidth * currentImageIndex,
        behavior: "smooth",
      });
    }
  }, [currentImageIndex]);

  return (
    <div className=" min-h-screen">
      <HeaderM />

      <div className="flex flex-col items-center mt-[-35rem] justify-center px-4 space-y-4">
        {/* Title */}
        <h1 className="text-3xl font-sans sm:text-4xl md:text-5xl font-extrabold text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 font-[Noto_Sans_Khmer]">
          Ch<span className="text-pink-600">e</span>t R
          <span className="text-yellow-500">y</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-center text-blue-500 font-medium">
          Innovating for a better life in Cambodia 🇰🇭
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-blue-500 max-w-lg text-center">
          I believe that technology, design, and creativity are powerful tools
          to solve real-world problems. My mission is to create solutions that
          improve quality of life, save time, and make digital experiences more
          meaningful.
        </p>

        {/* Responsive Image Carousel */}
        <div className="w-full overflow-hidden">
          <div
            className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
            ref={scrollRef}
          >
            {images.map((image, idx) => (
              <div key={idx} className="flex-shrink-0 w-full snap-start">
                <img
                  src={image}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterM />
    </div>
  );
}

export default Home;
