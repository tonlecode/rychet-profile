import React from "react";
import HeaderM from "../../components/HeaderM";
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
    <div className="min-h-screen  text-white">
      <HeaderM />

      <section className="pt-[6rem] pb-16 px-4 bg-white  font-sans mt-[-20rem]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-500 mb-10">
            Contact Me
          </h2>

          <div className="bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5 border-b border-blue-500 pb-2">
                Contact Information
              </h3>

              <div className="space-y-5 text-base sm:text-lg">
                <a
                  href="tel:+855714649644"
                  className="flex items-center gap-3 hover:text-red-300 transition"
                >
                  <FaPhone className="text-blue-500" />
                  +855 71 46 49 644
                </a>
                <a
                  href="mailto:chetryinnocent@gmail.com"
                  className="flex items-center gap-3 hover:text-red-300 transition"
                >
                  <FaEnvelope className="text-blue-500" />
                  chetryinnocent@gmail.com
                </a>
                <a
                  href="https://github.com/tonlecode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-red-300 transition"
                >
                  <FaGithub className="text-blue-500" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/rychet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-red-300 transition"
                >
                  <FaLinkedin className="text-blue-500" />
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/share/1C35mqjCLm/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-red-300 transition"
                >
                  <FaFacebookSquare className="text-blue-500" />
                  Facebook
                </a>
                <a
                  href="https://t.me/rychet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-red-300 transition"
                >
                  <div className="flex items-center gap-3">
                    <FaTelegram className="text-blue-500" />
                    Telegram
                  </div>
                  <span className="text-green-400 text-sm flex items-center gap-1 animate-pulse">
                    <FaCircle className="text-xs" />
                    recommended
                  </span>
                </a>
              </div>
            </div>

            {/* Message Info */}
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-base sm:text-lg text-gray-300 mb-4">
                Whether you want to collaborate, hire me, or just say hello, I'm only a click away.
              </p>
              <p className="text-sm italic text-gray-400">
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
