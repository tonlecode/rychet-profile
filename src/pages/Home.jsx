import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import images
import photo1 from "../assets/myphoto/p1.jpg";
import photo2 from "../assets/myphoto/p2.jpg";
import photo4 from "../assets/myphoto/p4.jpg";
import photo6 from "../assets/myphoto/p6.jpg";
import photo8 from "../assets/myphoto/p8.jpg";
import photo9 from "../assets/myphoto/p9.jpg";
import photo10 from "../assets/myphoto/p10.jpg";



// All images array
const images = [
  photo1,
  photo2,
  photo4,
  photo6,
  photo8,
  photo9,
  photo10,


];

function Home() {
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef(null);

  // Auto-scroll functionality to scroll images every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change  1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Smooth scroll functionality
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.clientWidth * currentImageIndex,
        behavior: 'smooth',
      });
    }
  }, [currentImageIndex]);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Title and Description */}
      <h1 className="text-5xl text-center mt-[-10px] font-bold font-sans">
  <span className="text-blue-600">C</span>
  <span className="text-red-600">h</span>
  <span className="text-green-600">e</span>
  <span className="text-yellow-600">t</span>
  <span className="text-purple-600"> </span>
  <span className="text-orange-600">R</span>
  <span className="text-pink-600">y</span>
</h1>

      <p className="text-2xl text-center text-blue-500 font-sans mb-3 font-medium">
        Innovating and creating for a better life in Cambodia <span className='text-red-500'>🇰🇭</span>
      </p>
      <p className="text-lg md:text-xl text-blue-500 max-w-3xl mx-auto mb-2 opacity-80 animate-fade-in-up font-sans text-center">
        As a creator and innovator, my career is driven by the goal of
        making people's lives easier and improving their overall quality of
        life. I believe that technology, design, and creative thinking are
        key pathways to driving positive change in society. I am often
        passionate about researching the everyday problems people face and
        developing practical solutions that save time, reduce energy
        consumption, and create seamless user experiences.
      </p>


      {/* Container to center the images */}
      <div className="relative  flex justify-center items-center">
        {/* Image container */}
        <div
          className="flex overflow-hidden w-[58rem] rounded-lg "
          ref={scrollRef}
        >
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`Image ${idx + 1}`}
              className="w-full h-full "
            />
          ))}
        </div>
      </div>
     <div>
      <Footer></Footer>
     </div>
    </div>
  );
}

export default Home;
