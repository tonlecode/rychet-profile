import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import images
import photo1 from "../assets/myphoto/p1.jpg";
import photo2 from "../assets/myphoto/p2.jpg";
import photo4 from "../assets/myphoto/p4.jpg";
import photo6 from "../assets/myphoto/p6.jpg";
import photo8 from "../assets/myphoto/p8.jpg";
import photo9 from "../assets/myphoto/p9.jpg";
import photo10 from "../assets/myphoto/p10.jpg";

// Import Chart.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const images = [photo1, photo2, photo4, photo6, photo8, photo9, photo10];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval); // Cleanup on unmount
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
    <div className=" h-screen ">
      {/* Header */}
      <Header />

      {/* Main Content with Left Sidebar */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-8 space-y-6">

        {/* Main Content */}
        <div className="flex flex-col items-center w-full  mt-[6rem]  space-y-6">
      <h1 className="text-5xl font-extrabold text-center font-sans leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 font-[Noto_Sans_Khmer]">
  Ch<span className="text-pink-600">e</span>t R<span className="text-yellow-500">y</span>
</h1>


          <p className="text-2xl text-center text-blue-500 font-sans mb-1 mt-[-1rem] font-medium">
            Innovating and creating for a better life in Cambodia{" "}
            <span className="text-red-500">🇰🇭</span>
          </p>

          <p className="text-lg md:text-xl text-blue-500 max-w-3xl mx-auto mb-2  font-sans text-center">
            As a creator and innovator, my career is driven by the goal of making
            people's lives easier and improving their overall quality of life. I
            believe that technology, design, and creative thinking are key pathways
            to driving positive change in society. I am often passionate about
            researching the everyday problems people face and developing practical
            solutions that save time, reduce energy consumption, and create seamless
            user experiences.
          </p>

          {/* Image Container */}
          <div className="flex justify-center items-center w-[71rem] mb-[-2rem] ">
            <div
              className="flex overflow-hidden"
              ref={scrollRef}
            >
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Image ${idx + 1}`}
                  className="w-full h-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div >

      {/* Footer */}
      < Footer />
    </div>
  );
}

export default Home;
