import React from "react";
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
  );
}

export default Contact;
