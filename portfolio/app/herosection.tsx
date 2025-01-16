import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full relative bg-slate-950 ">
      <div className="relative">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-40%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* TEXTO MAIN */}
      <div className="container mx-auto p-8 sm:px-16 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-text1 text-5xl font-regular mb-4">
            Software for faster solutions and{" "}
            <span className="text-primary font-bold italic">growth.</span>
          </h1>
          <p className="text-lg text-text2 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            auctor lorem eu dui volutpat, a scelerisque orci tempor.
          </p>

          {/* REDES SOCIAIS */}
          <div className="flex justify-center md:justify-start gap-6 mb-6">
            <a
              href="https://twitter.com"
              className="text-white hover:text-secondary transform duration-300 hover:scale-110 transition"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="https://github.com"
              className="text-white hover:text-secondary transform duration-300 hover:scale-110 transition"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white  hover:text-secondary transform duration-300 hover:scale-110 transition"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>

          {/* CONNECT & DOWNLOAD CV */}
          <div className="flex flex-col gap-4 mt-14 sm:flex-row sm:justify-start sm:items-start sm:gap-8 sm:w-auto items-center justify-center">
            <button className="bg-primary text-white py-2 px-6 w-32 rounded-lg hover:bg-secondary transform transition">
              Connect
            </button>
            <button className="bg-transparent border-2 border-white text-white py-2 px-6 w-32 lg:w-40 rounded-lg hover:bg-white hover:text-black transform transition">
              Download CV
            </button>
          </div>
        </div>

        {/* Imagem da estrela à direita */}
        <div className="relative mt-6 md:mt-0 md:ml-16 flex justify-center md:justify-end w-full">
          <Image
            src="/assets/star.png"
            alt="Star Image"
            className="w-64 md:w-96"
            width={900}
            height={900}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
