"use client";

import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu mobile


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna a visibilidade do menu mobile
  };

  return (
    <header className="container bg-slate-950 text-white py-7">
      <div className=" mx-auto flex justify-around items-center">
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
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu} // Ativa/Desativa o menu móvel
          >
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

      {/* Menu Mobile */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-slate-950`}>
        <nav className="flex flex-col space-y-4 px-4 py-2">
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

          {/* Dropdown for Projects in Mobile */}
          <div className="relative z-40">
            <button
              onClick={toggleDropdown}
              className="text-[#B026FF] hover:text-text1 font-Inter font-bold"
            >
              Projects
            </button>

            {/* Exibição condicional do dropdown */}
            {isDropdownOpen && (
              <div className="mt-2 bg-gray-800 text-white shadow-lg rounded-lg">
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
      </div>
    </header>
  );
};

export default Header;
