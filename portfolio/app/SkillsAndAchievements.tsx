import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa"; // Ícones de habilidades
import { GiAchievement } from "react-icons/gi"; // Ícone para conquistas
import { FiAward } from "react-icons/fi"; // Ícone de prêmio

const SkillsAndAchievements = () => {
  return (
    <section className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] py-16">
        <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#B026FF] mb-8">
          Maria’s Skills and Achievements
        </h2>

        {/* Habilidades */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-4xl text-orange-500 mb-4" />
            <p className="text-lg text-gray-700">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-4xl text-blue-500 mb-4" />
            <p className="text-lg text-gray-700">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-4xl text-yellow-500 mb-4" />
            <p className="text-lg text-gray-700">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-cyan-500 mb-4" />
            <p className="text-lg text-gray-700">React</p>
          </div>
        </div>

        {/* Conquistas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <GiAchievement className="text-4xl text-[#B026FF] mb-4" />
            <p className="text-lg text-gray-700">Top Developer of the Year</p>
          </div>
          <div className="flex flex-col items-center">
            <FiAward className="text-4xl text-yellow-400 mb-4" />
            <p className="text-lg text-gray-700">Awarded for Best UI Design</p>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-cyan-500 mb-4" />
            <p className="text-lg text-gray-700">React Certified Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndAchievements;
