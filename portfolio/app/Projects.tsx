import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="relative py-12 ">
      {/* Background com gradiente radial */}
      <div className="absolute inset-0 -z-10 bg-black">
        {/* Círculo esquerdo */}
        <div className="absolute bottom-0 left-[-20%] right-0 top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        {/* Círculo esquerdo azul */}
        <div className="absolute bottom-0 left-[-40%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,0,255,.15),rgba(255,255,255,0))]"></div>
        {/* Círculo direito roxo na parte inferior */}
        <div className="absolute bottom-[20%] right-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-16">
        {/* Texto-Título My Latest Projects */}
        <div className="container mx-auto text-center mb-16">
          <h1 className="text-5xl font-Inter font-regular text-primary ">
            Explore my <span className="text-text1">Latest Projects</span>
          </h1>
        </div>
        <button className="w-[144px] h-[40px] p-2 mb-14 bg-white border-2 border-gray-400 text-primary font-semibold hover:bg-gray-100 focus:outline-none transition duration-200">
          View All
        </button>

        {/* Cards de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-transparent hover:bg-white transition duration-200 shadow-lg overflow-hidden border-2 border-text2 hover:scale-105 hover:shadow-xl w-[330px] h-[460px]">
            <Image
              src="/assets/project1.png"
              alt="Project 1"
              className="w-full h-56 object-cover"
              width={500}
              height={280}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Project Title 1
              </h3>
              <p className="text-gray-600 mb-4">
                A brief description of the project. This is an innovative
                project that solves a real-world problem with modern
                technologies.
              </p>
              <a
                href="https://github.com/yourusername/project1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B026FF] hover:text-purple-600 flex items-center gap-2 transition"
              >
                <FaGithub className="text-xl" />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="bg-transparent hover:bg-white transition duration-200 shadow-lg overflow-hidden border-2 border-text2 hover:scale-105 hover:shadow-xl w-[330px] h-[460px]">
            <Image
              src="/assets/project2.png"
              alt="Project 2"
              className="w-full h-56 object-cover"
              width={500}
              height={280}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Project Title 2
              </h3>
              <p className="text-gray-600 mb-4">
                A brief description of the project. This project focuses on
                providing seamless user experience and performance.
              </p>
              <a
                href="https://github.com/yourusername/project2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B026FF] hover:text-purple-600 flex items-center gap-2 transition"
              >
                <FaGithub className="text-xl" />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="bg-transparent hover:bg-white transition duration-200 shadow-lg overflow-hidden border-2 border-text2 hover:scale-105 hover:shadow-xl w-[330px] h-[460px]">
            <Image
              src="/assets/project3.png"
              alt="Project 3"
              className="w-full h-56 object-cover"
              width={500}
              height={280}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Project Title 3
              </h3>
              <p className="text-gray-600 mb-4">
                A brief description of the project. This project integrates
                multiple APIs to provide comprehensive data and insights.
              </p>
              <a
                href="https://github.com/yourusername/project3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B026FF] hover:text-purple-600 flex items-center gap-2 transition"
              >
                <FaGithub className="text-xl" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
