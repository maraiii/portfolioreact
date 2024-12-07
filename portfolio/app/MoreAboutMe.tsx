import React from "react";

const MoreAboutMe = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">
          More About Me
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Descrição */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Who am I?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Hello! I&apos;m Maria, a passionate software developer with a
              strong background in creating innovative solutions that solve
              real-world problems. I have experience working with various
              technologies including JavaScript, React, Node.js, and more. My
              goal is to continue growing as a developer while contributing
              to projects that make a positive impact on the world.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              My Journey
            </h3>
            <p className="text-lg text-gray-600">
              I started my journey as a self-taught developer, experimenting
              with various programming languages and frameworks. Over time, I
              transitioned into professional development and have had the
              opportunity to work on exciting projects across multiple
              industries. Whether it&apos;s coding, problem-solving, or learning
              new technologies, I&apos;m always eager to expand my skills.
            </p>
          </div>

          {/* Foto ou Imagem */}
          <div className="md:w-1/2">
            <img
              src="/assets/maria.jpg" // Caminho da imagem
              alt="Maria"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
            />
          </div>
        </div>

        {/* <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-semibold text-lg text-gray-800">JavaScript</p>
              <p className="text-gray-600">Intermediate</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-gray-800">React</p>
              <p className="text-gray-600">Advanced</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-gray-800">Node.js</p>
              <p className="text-gray-600">Intermediate</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-gray-800">HTML & CSS</p>
              <p className="text-gray-600">Advanced</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-gray-800">Git & GitHub</p>
              <p className="text-gray-600">Advanced</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MoreAboutMe;
