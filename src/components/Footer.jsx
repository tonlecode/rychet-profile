import React from "react";
import {
  FaFacebook,
  FaTelegram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#2740a5] text-white py-6 mt-10">
      <div className="max-w-6lg container flex mx-auto px-4">
        {/* Address Section */}
        <div className="w-1/3 mb-4">
          <h4 className="text-lg ">អាសយដ្ឋាន</h4>
          <p>វត្តមហាមន្រ្តី, រាជធានីភ្នំពេញ, ព្រះរាជាណាចក្រកម្ពុជា</p>
        </div>

        {/* Contact Section */}
        <div className="w-1/3 mb-4">
          <h4 className=" text-lg">ទំនាក់ទំនង</h4>
          <p className="font-sans">ទូរស័ព្ទ: +855 71 46 49 644</p>
          <p className="font-sans">Email: chetryinnocent@gmail.com</p>
        </div>

        {/* Social Media Links */}
        <div className="w-1/3 mb-4">
          <h4 className=" text-lg">តាមដានយើងនៅ</h4>
          <div className="space-x-6 flex justify-center">
            <a
              href="https://www.facebook.com/share/1C35mqjCLm/?mibextid=wwXIfr"
              className="text-white text-2xl hover:text-red-300 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com/in/rychet"
              className="text-white text-2xl hover:text-red-300 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://t.me/tknocounter"
              className="text-white text-2xl hover:text-red-300 transition"
            >
              <FaTelegram />
            </a>

            <a
              href="https://www.youtube.com/@tonlecode"
              className="text-white text-2xl hover:text-red-300 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@rychet1"
              className="text-white text-2xl hover:text-red-300 transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://github.com/tonlecode"
              className="text-white text-2xl hover:text-red-300 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <hr className="w-full h-[1px] " />

      {/* Copyright Section */}
      <p className="text-lg text-center p-2">
        <span>រក្សា​រ​សិទ្ធ​គ្រប់យ៉ាង © 2025</span>
        <span className="ml-4">រី​ ចិត្ត</span>
      </p>
    </div>
  );
}

export default Footer;
