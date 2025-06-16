import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full bg-[#1f1f1f] text-white py-8 overflow-x-hidden overflow-y-hidden">
      <div className="mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#444444]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#444444]">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#444444]">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#444444]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://twitter.com"
              className="text-white hover:text-[#444444] transition"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://github.com"
              className="text-white hover:text-[#444444] transition"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white hover:text-[#444444] transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-[#444444] transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="h-[2px] bg-text2 mx-auto mt-16 w-4/4 mb-3"></div>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            ©{new Date().getFullYear()} Maria. All rights reserved.
          </p>
          <p>☻@maria.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
