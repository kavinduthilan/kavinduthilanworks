import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-14">
      <ul className="fixed list-none cursor-pointer">
        <li className="inline pl-[50px] text-[18px]  text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text ">
          <Link to="/">Home</Link>
        </li>
        <li className="inline pl-[50px] text-[18px]  text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
          <a href="#career" className="cursor-pointer">
            Career
          </a>
        </li>
        <li className="inline pl-[50px] text-[18px]  text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
        </li>
        <li className="inline pl-[50px] text-[18px]  text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
          <a href="#works" className="cursor-pointer">
            Works
          </a>
        </li>
        <li className="inline pl-[50px] text-[18px]  text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
