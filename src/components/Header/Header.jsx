import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-14">
      <ul className="fixed list-none cursor-pointer">
        <li className="inline pl-[50px] text-[18px]  text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ">
          <Link to="/">Home</Link>
        </li>
        <li className="inline pl-[50px] text-[18px]  text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          <Link to="/about">About</Link>
        </li>
        <li className="inline pl-[50px] text-[18px]  text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          <Link to="/career">Career</Link>
        </li>
        <li className="inline pl-[50px] text-[18px]  text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="inline pl-[50px] text-[18px]  text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          <Link to="/work">Works</Link>
        </li>
        <li className="inline pl-[50px] text-[18px]  text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
