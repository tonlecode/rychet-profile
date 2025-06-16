import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaTelegram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-white py-32 text-center">
        <div className="max-w-4xl px-6 z-10">
          <h1 className="text-5xl text-orange-500 mb-6 drop-shadow-lg font-medium">
            Chet .Ry{" "}
            <span className="text-white text-4xl">living in Cambodia</span>
          </h1>
          <p className="text-xl mb-10 opacity-90">
            As a creator and innovator, my career is driven by the goal of
            making people's lives easier and improving their overall quality of
            life. I believe that technology, design, and creative thinking are
            key pathways to driving positive change in society. I am often
            passionate about researching the everyday problems people face and
            developing practical solutions that save time, reduce energy
            consumption, and create seamless user experiences.
          </p>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Experiences</h2>
          <div className="border-l-2 border-gray-600 pl-6 space-y-8">
            {/* Experience Item */}
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
            <div>
              <h3 className="text-xl font-bold text-white">
                Back Management System
              </h3>
              <p className="text-orange-500 font-semibold mb-2">
                2023 till present
              </p>
              <p className="text-gray-300">
                I was created to manage people in the bank and manage salaries.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">designer</h3>
              <p className="text-orange-500 font-semibold mb-2">
                2023 till present
              </p>
              <p className="text-gray-300">I worked as a designer and photographer in the temple.</p>
            </div>

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
	 <section className="py-20 bg-black">
		<div className="px-4 max-w-6xl mx-auto justify-content item-center">
		  <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
		  <div className="grid md:grid-cols-2 gap-8">
		    <div className="rounded-lg shadow-lg p-8 transform transition-all duration-300">
			<h3 className="text-2xl font-semibold mb-6 text-orange-500">
			  Contact Information
			</h3>
			<div className="space-y-4 text-lg">
			  <a
			    href="tel:+855714649644"
			    className="flex items-center space-x-3 hover:text-orange-500 transition"
			  >
			    <FaPhone className="text-xl" />
			    <span>+855 714649644</span>
			  </a>
			  <a
			    href="mailto:chetryinnocent@gmail.com"
			    className="flex items-center space-x-3 hover:text-orange-500 transition"
			  >
			    <FaEnvelope className="text-xl" />
			    <span>chetryinnocent@gmail.com</span>
			  </a>
			  <a
			    href="https://github.com/tonlecode"
			    target="_blank"
			    rel="noopener noreferrer"
			    className="flex items-center space-x-3 hover:text-orange-500 transition"
			  >
			    <FaGithub className="text-xl" />
			    <span>GitHub</span>
			  </a>
			  <a
			    href="https://linkedin.com/in/rychet"
			    target="_blank"
			    rel="noopener noreferrer"
			    className="flex items-center space-x-3 hover:text-orange-500 transition"
			  >
			    <FaLinkedin className="text-xl" />
			    <span>LinkedIn</span>
			  </a>
			  <a
			    href="https://facebook.com/rychetinnocent"
			    target="_blank"
			    rel="noopener noreferrer"
			    className="flex items-center space-x-3 hover:text-orange-500 transition"
			  >
			    <FaFacebookSquare className="text-xl" />
			    <span>Facebook</span>
			  </a>
			  <a
			    href="https://t.me/rychet"
			    target="_blank"
			    rel="noopener noreferrer"
			    className="flex items-center space-x-3 hover:text-orange-500 transition"
			  >
			    <FaTelegram className="text-xl" />
			    <span>Telegram</span>
			  </a>
			</div>
		    </div>
		  </div>
		</div>
	    </section>
    </>
  );
}

export default Home;
