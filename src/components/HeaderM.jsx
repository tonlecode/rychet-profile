import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import VdCam4 from "../assets/vd/cambodiaF4.mp4";
import angkor from "../assets/myphoto/angkor.jpg";
import React, { useState, useRef, useEffect } from "react";

function Header() {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute("webkit-playsinline", "true");
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSnadaiOpen, setIsSnadaiOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSnadaiOpen(false);
    setIsLibraryOpen(false);
  };

  const toggleSnadaiDropdown = (e) => {
    e.preventDefault();
    setIsSnadaiOpen(!isSnadaiOpen);
    setIsLibraryOpen(false); // close other dropdown
  };

  const toggleLibraryDropdown = (e) => {
    e.preventDefault();
    setIsLibraryOpen(!isLibraryOpen);
    setIsSnadaiOpen(false); // close other dropdown
  };

  return (

    <div className="relative h-screen overflow-hidden ">
      {/* Navbar */}
 
     <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-3 bg-black text-white shadow-lg">
        {/* Video Background */}
        <video
          ref={videoRef}
          src={VdCam4}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover z-[-1] pointer-events-none"
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
        className={`fixed top-0 right-0 w-64 h-full bg-[#f7f6f4] text-blue-500 transform transition-transform duration-300 z-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b bg-[#f7f6f4]">
          <h2 className="text-lg font-bold">ម៉ឺនុយ</h2>
          <button onClick={toggleMenu} className="text-xl">
            <AiOutlineClose />
          </button>
        </div>

        <div className="flex ml-5 flex-col space-y-5 p-4 pl-4 font-[Noto_Sans_Khmer] text-[18px] bg-[#f7f6f4]">
          <NavLink to="/" onClick={toggleMenu} className="hover:text-red-300">
            ទំព័រដើម
          </NavLink>

          <NavLink
            to="/about"
            onClick={toggleMenu}
            className="hover:text-red-300"
          >
            ប្រវត្តិរូប
          </NavLink>

          {/* ស្នាដៃ Dropdown */}
          <div>
            <a
              href="#"
              onClick={toggleSnadaiDropdown}
              className="flex items-center hover:text-blue-300"
            >
              ស្នាដៃ
              <IoMdArrowDropdown className="ml-1 text-lg" />
            </a>
            {isSnadaiOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <NavLink
                  to="/software"
                  onClick={toggleMenu}
                  className="text-sm block hover:text-red-300 font-[Noto_Sans_Khmer] text-[17px]"
                >
                  - វិស្វកម្មកម្មវិធី
                </NavLink>
                <NavLink
                  to="/morefile"
                  onClick={toggleMenu}
                  className="text-sm block hover:text-red-300 font-[Noto_Sans_Khmer] text-[17px]"
                >
                  - ឯកសារ
                </NavLink>
              </div>
            )}
          </div>

          {/* បណ្ណាល័យ Dropdown */}
          <div>
            <a
              href="#"
              onClick={toggleLibraryDropdown}
              className="flex items-center hover:text-blue-300"
            >
              បណ្ណាល័យ
              <IoMdArrowDropdown className="ml-1 text-lg" />
            </a>
            {isLibraryOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <NavLink
                  to="/photos"
                  onClick={toggleMenu}
                  className="text-sm block hover:text-red-300 font-[Noto_Sans_Khmer] text-[17px]"
                >
                  - រូបភាព
                </NavLink>
                <NavLink
                  to="/videos"
                  onClick={toggleMenu}
                  className="text-sm block hover:text-red-300 font-[Noto_Sans_Khmer] text-[17px]"
                >
                  - វិដេអូ
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className="hover:text-red-300"
          >
            ទំនាក់ទំនង
          </NavLink>
        </div>

        <img className="mt-[3rem]" src={angkor} alt="bg angkor" />
      </div>
    </div>
  );
}

export default Header;
