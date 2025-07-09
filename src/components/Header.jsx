import React from 'react';
import { NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import VdCam from '../assets/vd/cambodiaF1.mp4';

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

      <nav className="fixed top-0 left-0 shadow-lg w-full text-white font-medium justify-between items-center rounded-b-4xl px-30 py-4 flex">
        <p className="hover:text-red-300 text-lg">
          <NavLink to="/" className=" hover:text-red-300 text-xl">
            
          </NavLink>
        </p>

        <ul className="flex space-x-10 mt-3">
          <li className="text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-red-300' : 'hover:text-red-300'
              }
            >
              ទំព័រដើម
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-red-300' : 'hover:text-red-300'
              }
            >
              ប្រវត្តិរូប
            </NavLink>
          </li>
          <li className="text-lg relative group">
            <Dropdown overlay={menu} trigger={['hover']}>
              <a className="text-lg hover:text-red-300 flex items-center cursor-pointer">
                ស្នាដៃ
                <DownOutlined className="font-bold ml-1 text-sm" />
              </a>
            </Dropdown>
          </li>
          <li className="text-lg relative group">
            <Dropdown overlay={libraryMenu} trigger={['hover']}>
              <a className="text-lg hover:text-red-300 flex items-center cursor-pointer">
                បណ្ណាល័យ
                <DownOutlined className="font-bold ml-1 text-sm" />
              </a>
            </Dropdown>
          </li>
          <li className="text-lg">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-red-300' : 'hover:text-red-300'
              }
            >
              ទំនាក់ទំនង
            </NavLink>
          </li>
        </ul>
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
