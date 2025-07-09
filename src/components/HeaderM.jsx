import React from 'react';
import { NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import VdCam from '../assets/vd/cambodiaF1.mp4';
import { IoMdMenu } from "react-icons/io";


// Items for ស្នាដៃ
const items = [
  {
    key: 'project-1',
    label: (
      <NavLink to="/software">
        <span className="font-[Noto_Sans_Khmer] text-[16px] pr-7 text-blue-500">
          វិស្វកម្មកម្មវិធី
        </span>
      </NavLink>
    ),
  },
  {
    key: 'project-2',
    label: (
      <NavLink to="/morefile">
        <span className="font-[Noto_Sans_Khmer] text-[16px] pr-7 text-blue-500">
          ឯកសារ
        </span>
      </NavLink>
    ),
  },
];

// Items for បណ្ណាល័យ
const libraryItems = [
  {
    key: 'library-1',
    label: (
      <NavLink to="/photos">
        <span className="font-[Noto_Sans_Khmer] text-[16px] pr-7 text-blue-500">
          រូបភាព
        </span>
      </NavLink>
    ),
  },
  {
    key: 'library-2',
    label: (
      <NavLink to="/videos">
        <span className="font-[Noto_Sans_Khmer] text-[16px] pr-7 text-blue-500">
          វិដេអូ
        </span>
      </NavLink>
    ),
  },
];

// Dropdown menus
const menu = <Menu items={items} />;
const libraryMenu = <Menu items={libraryItems} />;

function Header() {
  return (
    <div className="">
      <video src={VdCam} autoPlay loop muted className="fixed mt-[-6rem]" />
    <div className="container mx-auto ">
      {/* Background Video */}

      <nav className="fixed top-0 left-0  w-full text-white font-medium justify-between items-center py-4 flex">
       <div className='text-bold text-3xl text-center float-end p-4 hover:text-red-300'><IoMdMenu /></div>

      </nav>

      {/* Padding below header */}
      <div className="mt-24">
        {/* Your main content here */}
      </div>
      </div>
    </div>
  );
}

export default Header;
