import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full relative bg-slate-950 overflow-x-hidden overflow-y-hidden">
        <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      <div className="relative container my-16">
        {/* Títulos e Decorações */}
        <div className="text-center">
          <h1 className="text-5xl font-Inter font-regular text-primary mb-16">
            More <span className="text-text1">About Me</span>
          </h1>
        </div>

        {/* Card com imagem e conteúdo */}
        <div
          className="relative flex justify-around text-white rounded-lg shadow-lg items-center">
          {/* Conteúdo do Card */}
          <div className="border-2 border-text2 p-12 flex flex-col lg:flex-row gap-8" style={{
            backgroundImage: "url('/assets/m.png')",
            backgroundSize: "50px 50px contain", 
            backgroundPosition: "bottom right", 
            backgroundRepeat: "no-repeat",
          }}
        >
            {/* Imagem de Perfil */}
            <div className="flex-shrink-0 px-6">
              <Image
                src="/assets/perfill.png"
                alt="Profile Picture"
                className="rounded-full w-32 h-32 mb-6"
                width={500}
              height={280}
              />
              <h3 className="text-3xl font-bold mb-2">Web Developer</h3>
              <p className="text-xl font-semibold mb-4">
                Dedicated to Lifelong Learning
              </p>
            </div>

            {/* Texto e Descrição */}
            <div className="">
              <p className="text-lg mb-4 w-[300px]">
                My journey as a passionate web developer is fueled by a
                commitment to lifelong learning. From exploring programming to
                creating digital solutions. Each project is an opportunity to
                innovate, allowing me to transform ideas into memorable online
                experiences while continually expanding my skills and knowledge.
              </p>
              <div className="items-left flex flex-col">
                <p className="text-sm font-Inter font-regular">
                  María E. R. Antunes
                </p>
                <p className="text-sm font-semibold font-Inter">Web Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botão */}
        <div className="items-center flex flex-col mt-6">
          <a
            href="#contact"
            className="bg-pink text-white font-Inter py-2 px-4 rounded-full text-lg hover:bg-secondary transition"
          >
            Work with Maria
          </a>
        </div>

        {/* Linha divisória */}
        <div className="h-[2px] bg-text2 mx-auto mt-16 w-4/5"></div>
      </div>
    </section>
  );
};

export default About;
