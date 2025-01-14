"use client";

import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-black text-white py-4">
      <div className=" mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">LOGO</div>

        {/* LINKS DE NAVEGAÇÃO */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-[#B026FF] hover:text-text1 font-Inter font-bold"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-[#B026FF] hover:text-text1 font-Inter font-bold"
          >
            Skills
          </a>

          {/* Dropdown for Projects */}
          <div className="relative z-40">
            <button
              onClick={toggleDropdown}
              className="text-[#B026FF] hover:text-text1 font-Inter font-bold"
            >
              Projects
            </button>

            {/* Exibição condicional do dropdown */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-gray-800 text-white shadow-lg rounded-lg">
                <a
                  href="#project1"
                  className="block px-4 py-2 hover:bg-purple-500"
                >
                  Project 1
                </a>
                <a
                  href="#project2"
                  className="block px-4 py-2 hover:bg-purple-500"
                >
                  Project 2
                </a>
                <a
                  href="#project3"
                  className="block px-4 py-2 hover:bg-purple-500"
                >
                  Project 3
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Call-to-Action Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-purple-600 hover:bg-[#A200FF] text-white px-6 py-2 rounded-lg font-medium"
        >
          Work with Maria
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Icon for Menu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
