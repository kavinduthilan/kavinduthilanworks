import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/", isRoute: true },
    { label: "Career", href: "#career" },
    { label: "Skills", href: "#skills" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" },
  ];

  const linkClass =
    "text-[18px] font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-75 transition-opacity";

  return (
    <div className="w-full h-14">
      {/* Desktop Nav */}
      <ul className="fixed hidden md:flex list-none cursor-pointer items-center z-50">
        {navLinks.map(({ label, to, href }) => (
          <li key={label} className="pl-[50px]">
            {to ? (
              <Link to={to} className={linkClass}>
                {label}
              </Link>
            ) : (
              <a href={href} className={linkClass}>
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="fixed top-3 right-4 md:hidden z-50 flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul
          className="fixed top-14 left-0 w-full md:hidden list-none z-40 flex flex-col items-center gap-6 py-8 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {navLinks.map(({ label, to, href }) => (
            <li key={label}>
              {to ? (
                <Link to={to} className={linkClass}>
                  {label}
                </Link>
              ) : (
                <a href={href} className={linkClass}>
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
