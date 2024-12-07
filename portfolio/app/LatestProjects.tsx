import React from "react";
import { FaGithub } from "react-icons/fa"; // Ícone do GitHub para os links dos projetos

const LatestProjects = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">
          Explore My Latest Projects
        </h2>

        {/* Cards de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/assets/project1.jpg" // Caminho da imagem do projeto
              alt="Project 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Project Title 1
              </h3>
              <p className="text-gray-600 mb-4">
                A brief description of the project. This is an innovative project that solves a real-world problem with modern technologies.
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

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/assets/project2.jpg" // Caminho da imagem do projeto
              alt="Project 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Project Title 2
              </h3>
              <p className="text-gray-600 mb-4">
                A brief description of the project. This project focuses on providing seamless user experience and performance.
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

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/assets/project3.jpg" // Caminho da imagem do projeto
              alt="Project 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Project Title 3
              </h3>
              <p className="text-gray-600 mb-4">
                A brief description of the project. This project integrates multiple APIs to provide comprehensive data and insights.
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

export default LatestProjects;
