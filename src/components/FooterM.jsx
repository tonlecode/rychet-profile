import React from "react";
import {
  FaFacebook,
  FaTelegram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";

function FooterM() {
  return (
    <div className="bg-[#2740a5] text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
        
        {/* Address Section */}
        <div className="md:w-1/3">
          <h4 className="text-lg mb-2 font-semibold">អាសយដ្ឋាន</h4>
          <p>វត្តមហាមន្រ្តី, រាជធានីភ្នំពេញ, ព្រះរាជាណាចក្រកម្ពុជា</p>
        </div>

        {/* Contact Section */}
        <div className="md:w-1/3">
          <h4 className="text-lg mb-2 font-semibold">ទំនាក់ទំនង</h4>
          <p>ទូរស័ព្ទ: <span className="font-sans">+855 71 46 49 644</span></p>
          <p className="font-sans">Email: chetryinnocent@gmail.com</p>
        </div>

        {/* Social Media Links */}
        <div className="md:w-1/3">
          <h4 className="text-lg mb-2 font-semibold">តាមដានយើងនៅ</h4>
          <div className="flex flex-wrap justify-start md:justify-center gap-4">
            <a href="https://www.facebook.com/share/1C35mqjCLm/?mibextid=wwXIfr" className="text-white text-2xl hover:text-red-300">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com/in/rychet" className="text-white text-2xl hover:text-red-300">
              <FaLinkedin />
            </a>
            <a href="https://t.me/tknocounter" className="text-white text-2xl hover:text-red-300">
              <FaTelegram />
            </a>
            <a href="https://www.youtube.com/@tonlecode" className="text-white text-2xl hover:text-red-300">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@rychet1" className="text-white text-2xl hover:text-red-300">
              <FaTiktok />
            </a>
            <a href="https://github.com/tonlecode" className="text-white text-2xl hover:text-red-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* Copyright */}
      <p className="text-center text-sm md:text-base">
        រក្សា​រ​សិទ្ធ​គ្រប់យ៉ាង © 2025 <span className="ml-2">រី​ ចិត្ត</span>
      </p>
    </div>
  );
}

export default FooterM;
