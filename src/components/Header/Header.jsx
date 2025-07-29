import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-14">
      <ul className="fixed list-none cursor-pointer">
        <li className="inline pl-[50px] text-[#ededed] text-[20px]">
          <Link to="/">Home</Link>
        </li>
        <li className="inline pl-[50px] text-[#ededed] text-[20px]">
          <Link to="/about">About</Link>
        </li>
        <li className="inline pl-[50px] text-[#ededed] text-[20px]">
          <Link to="/career">Career</Link>
        </li>
        <li className="inline pl-[50px] text-[#ededed] text-[20px]">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="inline pl-[50px] text-[#ededed] text-[20px]">
          <Link to="/work">Works</Link>
        </li>
        <li className="inline pl-[50px] text-[#ededed] text-[20px]">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
