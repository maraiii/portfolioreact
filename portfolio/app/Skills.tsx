import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="relative w-full h-auto py-12 bg-slate-950">
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-40%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/background.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-100"
          />
        </div>

        {/* Texto-Título My Skills */}
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-Inter font-regular text-primary mb-16">
            Maria’s <span className="text-text1">Skills</span> and{" "}
            <span className="text-text1">Achievements</span>
          </h1>
        </div>

        {/* IMAGENS DAS HABILIDADES */}
        <div className="flex items-center justify-center gap-8 flex-col lg:flex-row lg:gap-8">
          {/* Imagem 1 */}
          <div className="flex-shrink-0 w-48 h-48 sm:w-36 sm:h-36 relative">
            <Image
              src="/assets/skill1.png" // Substitua pelo caminho correto da imagem
              alt="Skill 1"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          {/* Imagem 2 */}
          <div className="flex-shrink-0 w-48 h-48 sm:w-36 sm:h-36 relative">
            <Image
              src="/assets/skill2.png" // Substitua pelo caminho correto da imagem
              alt="Skill 2"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          {/* Imagem 3 */}
          <div className="flex-shrink-0 w-48 h-48 sm:w-36 sm:h-36 relative">
            <Image
              src="/assets/skill3.png" // Substitua pelo caminho correto da imagem
              alt="Skill 3"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Texto abaixo das imagens */}
        <p className="text-lg text-center text-text2 max-w-2xl mx-auto mt-9">
          Lorem ipsum dolor sit amet consectetur. Lectus massa sodales at sit aliquet velit ipsum. Elementum turpis enim consequat pharetra iaculis. Enim odio id tellus fames neque. Commodo ac imperdiet a bibendum nulla viverra. Id amet id dui et euismod volutpat in tristique.
        </p>

        {/* Luz do background */}
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
    </section>
  );
};

export default Skills;
