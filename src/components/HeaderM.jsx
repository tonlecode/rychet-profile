import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import VdCam3 from "../assets/vd/cambodiaF3.mp4";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative h-screen shadow-4xl overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-10 flex justify-between items-center px-4 py-3 text-white bg-black/50">
        {/* Background Video */}
        <video
          src={VdCam3}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <h1 className=""></h1>
        <button
          onClick={toggleMenu}
          className="text-3xl p-2 focus:outline-none hover:text-red-300"
        >
          <IoMdMenu />
        </button>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white text-black transform transition-transform duration-300 z-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">ម៉ឺនុយ</h2>
          <button onClick={toggleMenu} className="text-xl">
            <AiOutlineClose />
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4 font-[Noto_Sans_Khmer] text-[16px]">
          <NavLink to="/" onClick={toggleMenu} className="hover:text-blue-500">
            ទំព័រដើម
          </NavLink>
          <NavLink
            to="/software"
            onClick={toggleMenu}
            className="hover:text-blue-500"
          >
            វិស្វកម្មកម្មវិធី
          </NavLink>
          <NavLink
            to="/morefile"
            onClick={toggleMenu}
            className="hover:text-blue-500"
          >
            ឯកសារ
          </NavLink>
          <NavLink
            to="/photos"
            onClick={toggleMenu}
            className="hover:text-blue-500"
          >
            រូបភាព
          </NavLink>
          <NavLink
            to="/videos"
            onClick={toggleMenu}
            className="hover:text-blue-500"
          >
            វិដេអូ
          </NavLink>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-24 px-4 text-white">
        <h2 className="text-2xl font-semibold">ស្វាគមន៍</h2>
        <p>នេះជាគេហទំព័រសម្រាប់បង្ហាញស្នាដៃ និងបណ្ណាល័យ</p>
      </div>
    </div>
  );
}

export default Header;
