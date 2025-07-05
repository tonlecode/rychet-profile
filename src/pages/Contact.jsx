import React from "react";
import Header from "../components/Header";
import { FaCircle } from "react-icons/fa";

import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaTelegram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <div className=" min-h-screen text-white ">
      <Header />

      <section className="py-20 px-4 font-sans">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-12">
            Contact Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10 bg-gray-800 border-2 border-blue-500 p-8 rounded-2xl shadow-lg">
            {/* Contact Info Box */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 border-b pb-2 border-blue-500">
                Contact Information
              </h3>
              <div className="space-y-5 text-lg">
                <a
                  href="tel:+855714649644"
                  className="flex items-center gap-4 hover:text-red-300 transition"
                >
                  <FaPhone className="text-xl text-blue-500" />
                  <span>+855 71 46 49 644</span>
                </a>
                <a
                  href="mailto:chetryinnocent@gmail.com"
                  className="flex items-center gap-4 hover:text-red-300 transition"
                >
                  <FaEnvelope className="text-xl text-blue-500" />
                  <span>chetryinnocent@gmail.com</span>
                </a>
                <a
                  href="https://github.com/tonlecode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-red-300 transition"
                >
                  <FaGithub className="text-xl text-blue-500" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/rychet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-red-300 transition"
                >
                  <FaLinkedin className="text-xl text-blue-500" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://facebook.com/rychetinnocent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-red-300 transition"
                >
                  <FaFacebookSquare className="text-xl text-blue-500" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://t.me/rychet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-red-300 transition"
                >
                  <FaTelegram className="text-xl text-blue-500" />
                  <span className="flex items-center">
                    Telegram
                    <p className="text-green-300 flex items-center ml-20">
                      <FaCircle className="text-xs mr-1 animate-pulse" />
                      recommended
                    </p>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Side Info */}
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-lg text-gray-300 mb-4">
                Whether you want to collaborate, hire me, or just say hello, I'm
                only a click away.
              </p>
              <p className="italic text-sm text-gray-400">
                Available for freelance & full-time roles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
