import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaTelegram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import your local images
import photo1 from '../assets/myphoto/p1.jpg';
import photo2 from '../assets/myphoto/p2.jpg';
import photo4 from '../assets/myphoto/p4.jpg';
import photo6 from '../assets/myphoto/p6.jpg';
import photo8 from '../assets/myphoto/p8.jpg';
import photo9 from '../assets/myphoto/p9.jpg';
import photo10 from '../assets/myphoto/p10.jpg';
import photo11 from '../assets/myphoto/p11.jpg';
import photo12 from '../assets/myphoto/p12.jpg';

// All imported images in an array
const images = [
  photo1, photo2,  photo4, photo6,
  photo8, photo9, photo10, photo11, photo12,
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentImageIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      {/* Hero Section: Enhanced with dynamic background and refined content */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-white py-16 px-4"
        style={{
          // Dynamic background based on current image for a richer feel
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Makes the background fixed while scrolling
          transition: 'background-image 1s ease-in-out', // Smooth transition for background change
        }}
      >
        {/* Main Content Area */}
        <div className="max-w-5xl w-full mx-auto text-center z-10 px-4 md:px-0">
          {/* Main Title and Description */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-orange-500 mb-4 animate-fade-in-up drop-shadow-xl">
            Chet Ry
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 animate-fade-in-up delay-200 opacity-90">
            Innovating and creating for a better life in Cambodia 🇰🇭
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-80 animate-fade-in-up delay-400">
            As a creator and innovator, my career is driven by the goal of
            making people's lives easier and improving their overall quality of
            life. I believe that technology, design, and creative thinking are
            key pathways to driving positive change in society. I am often
            passionate about researching the everyday problems people face and
            developing practical solutions that save time, reduce energy
            consumption, and create seamless user experiences.
          </p>

         

          {/* Carousel for Album Photos - Now a visual element within the section */}
          {images.length > 0 && (
            <div className="relative w-full max-w-4xl mx-auto h-[350px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl border-2 border-orange-600 group">
              <img
                src={images[currentImageIndex]}
                alt={`Chet Ry's album photo ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                style={{ opacity: 1 }} // Always visible, transition handles change
                key={currentImageIndex} // Key prop to force re-render and animation on image change
              />

              {/* Left & Right Navigation Buttons (hidden by default, visible on hover) */}
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous image"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Next image"
              >
                <FaChevronRight size={24} />
              </button>

              {/* Thumbnail Navigation Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 bg-black/40 rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full border border-white transition-colors duration-300 ${
                      idx === currentImageIndex ? 'bg-orange-500 scale-125' : 'bg-gray-400/50 hover:bg-gray-200'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Experiences Section: Refined layout with distinct cards and icons */}
          {/* Experiences Section */}

      <section className="bg-gray-900 py-12 px-4">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-white mb-12">Experiences</h2>

          <div className="border-l-2 border-gray-600 pl-6 space-y-8">

            {/* Experience Item */}



            {/* Founder - EduJourney */}

            <div>

              <h3 className="text-xl font-bold text-white">

                Founder - EduJourney

              </h3>

              <p className="text-orange-500 font-semibold mb-2">

                2024 till present

              </p>

              <p className="text-gray-300">

                I have created a project called EduJourney. EduJourney is an

                intelligent application designed to facilitate learning and

                research. It addresses many challenges that students and

                learners have faced in the past. With EduJourney, you can: Learn

                a variety of lessons here Conduct research with AI here Connect

                with friends here Read book content here Stay updated with

                national and international news here

              </p>

            </div>





          {/*  Wat Management */}

            <div>

              <h3 className="text-xl font-bold text-white">

                Monk Management System

              </h3>

              <p className="text-orange-500 font-semibold mb-2">

                2023 till present

              </p>

              <p className="text-gray-300">

                I created a management system for monks in the monastery that

                allows for money management, number of monks, and easy data

                transmission to the leadership.

              </p>

            </div>

   



          {/* Designer */}

            <div>

              <h3 className="text-xl font-bold text-white">Designer </h3>

              <p className="text-orange-500 font-semibold mb-2">

                2023 till present

              </p>

              <p className="text-gray-300">I worked as a designer and photographer in the temple.</p>

            </div>





            {/* Teaching */}

            <div>

              <h3 className="text-xl font-bold text-white">Teaching</h3>

              <p className="text-orange-500 font-semibold mb-2">2022-2023</p>

              <p className="text-gray-300">

                I am a teacher to monks and children without taking any money.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Section: Clean and inviting with hover effects */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="px-4 max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-white animate-fade-in drop-shadow-lg">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Information Card */}
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-orange-glow-md">
              <h3 className="text-3xl font-semibold mb-8 text-orange-400 border-b-2 border-orange-500 pb-3">
                Connect with Me
              </h3>
              <div className="space-y-6 text-xl">
                <a
                  href="tel:+855714649644"
                  className="flex items-center space-x-4 hover:text-orange-500 transition-colors duration-300 transform hover:translate-x-2"
                >
                  <FaPhone className="text-2xl text-orange-500" />
                  <span>+855 714649644</span>
                </a>
                <a
                  href="mailto:chetryinnocent@gmail.com"
                  className="flex items-center space-x-4 hover:text-orange-500 transition-colors duration-300 transform hover:translate-x-2"
                >
                  <FaEnvelope className="text-2xl text-orange-500" />
                  <span>chetryinnocent@gmail.com</span>
                </a>
                <a
                  href="https://github.com/tonlecode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:text-orange-500 transition-colors duration-300 transform hover:translate-x-2"
                >
                  <FaGithub className="text-2xl text-orange-500" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/rychet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:text-orange-500 transition-colors duration-300 transform hover:translate-x-2"
                >
                  <FaLinkedin className="text-2xl text-orange-500" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://facebook.com/rychetinnocent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:text-orange-500 transition-colors duration-300 transform hover:translate-x-2"
                >
                  <FaFacebookSquare className="text-2xl text-orange-500" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://t.me/rychet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:text-orange-500 transition-colors duration-300 transform hover:translate-x-2"
                >
                  <FaTelegram className="text-2xl text-orange-500" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
            {/* Call to action or illustration */}
            <div className="hidden md:block text-center p-8">
                <p className="text-white text-3xl font-light leading-relaxed italic animate-fade-in-up delay-200">
                    "Innovation is seeing what everybody has seen and thinking what nobody has thought."
                </p>
                <p className="text-orange-500 text-2xl mt-4 font-semibold">-Mr. Ry Chet</p>
                <img src={images[0]} alt="Hero illustration" className="w-48 h-48 rounded-full mx-auto mt-10 object-cover shadow-2xl border-4 border-orange-500 animate-pulse-slow" />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Home;