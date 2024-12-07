import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Ícones de redes sociais

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        {/* Links e Informações */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Seção de Links */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#A200FF]">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#A200FF]">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#A200FF]">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A200FF]">Contact</a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="flex justify-center gap-6">
            <a href="https://twitter.com" className="text-white hover:text-[#A200FF] transition">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://github.com" className="text-white hover:text-[#A200FF] transition">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-[#A200FF] transition">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-[#A200FF] transition">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="h-[2px] bg-text2 mx-auto mt-16 w-4/4 mb-3"></div>

        {/* Direitos Autorais */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Maria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
