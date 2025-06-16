import React from "react";
import "./styles/global.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <body className="bg-zinc-800 font-montreal antialiased">
      <svg className="pointer-events-none fixed inset-0 h-full w-full opacity-[.15]">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
      <div className="relative w-full h-screen bg-black overflow-hidden">
        <div className="relative w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/hips.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-10 right-10 w-[30%] max-w-[400px]">
            <div className="relative group">
              <div className="border-4 border-black rounded-lg p-2 backdrop-blur-sm">
                <Image
                  src="/assets/enf.png"
                  width={500}
                  height={300}
                  alt="Overlay"
                  className="w-full h-auto object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-pink-600/80 rounded-full p-3">play</div>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-10 text-white">
          <h2 className="text-4xl font-bold mb-2">+ + + DROMOTION VIDEO</h2>
          <p className="text-xl opacity-80">Video enumered edit</p>
          <button className="mt-4 px-6 py-2 bg-pink-600 rounded-full hover:bg-pink-700 transition">
            Download Now
          </button>
        </div>
      </div>

      <section className="w-full relative antialiased overflow-x-hidden">
        <div className="relative">
          <h1 className="text-[15vw] leading-none tracking-tight font-bold relative z-10 my-11">
            CLOUD STRIFE<span className="align-super text-[6vw]">©</span>
          </h1>
          <Image
            src={"/assets/fitaa.png"}
            width={100}
            height={100}
            className="block lg:hidden mx-auto "
            alt="fita"
          ></Image>
          <p className="block lg:hidden text-center text-sm mb-16 text-gray-500">
            Este aviso aparece só no celular e tablet.
          </p>
          <div className="flex justify-end">
            <h1 className="text-[15vw] leading-none tracking-tight font-bold relative z-10 my-11">
              RAFAYEL<span className="align-super text-[6vw]">©</span>
            </h1>
          </div>

          <div className="hidden sm:flex absolute top-0 right-0 w-[30%] h-full items-center lg:mr-16">
            <Image src="/assets/fitaa.png" width={50} height={50} alt="Fundo" />
            <div className="relative w-full aspect-video ">
              <video
                className="rounded-lg shadow-2xl object-cover w-full h-full"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/assets/hips.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 border-2 border-white/20 rounded-lg pointer-events-none" />
            </div>
            <Image src="/assets/fitaa.png" width={50} height={50} alt="Fundo" />
          </div>
        </div>

        <div className="relative">
          <div className="max-w-[500px] w-full absolute bottom-0 left-[-20%] right-0 top-[-40%] h-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
        <section className="w-full relative bg-accent-200 font-montreal antialiased overflow-x-hidden">
          <div className="relative flex flex-row-reverse items-center min-h-screen">
            <div className="pl-8 pr-16 z-10">
              <h1 className="text-[9vw] leading-none tracking-tight font-bold">
                Not <br /> Interested.
              </h1>
            </div>

            <div className="w-[51.7%] h-full absolute left-0 top-0 ">
              <div className="relative w-full h-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-r-lg shadow-2xl"
                >
                  <source src="/assets/hips.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
        <div className="container md:w-full md:max-w-none md:px-0 mt-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">
            <div className="lg:w-[45%] flex flex-col justify-between">
              <div>
                <h1 className="text-text1 text-4xl sm:text-5xl font-regular mb-6 leading-tight">
                  Por que desenvolver um site se ele é chato?{" "}
                  <span className="text-[#000] font-bold italic block">
                    cansei. chato.
                  </span>
                </h1>
                <p className="text-lg text-text2 mb-8">Não tem texto aqui.</p>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex justify-center md:justify-start gap-6"></div>

                <div>
                  <button className="..."></button>
                  <div className="mt-4">
                    <a href="#" className="text-sm hover:underline">
                      Couture
                    </a>
                    <a href="#" className="text-sm hover:underline">
                      Couture
                    </a>
                    <a href="#" className="text-sm hover:underline">
                      Couture
                    </a>
                    <a href="#" className="text-sm hover:underline">
                      Couture
                    </a>
                    <a href="#" className="text-sm hover:underline">
                      Couture
                    </a>
                    <a href="#" className="text-sm hover:underline">
                      Couture
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative aspect-video md:aspect-auto md:h-full lg:w-[55%] h-[400px] lg:h-auto">
              <video
                src="/assets/raf.mp4"
                className="w-full h-full object-cover opacity-50 border border-white/20 rounded-lg"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          <p className="text-center text-sm my-11 text-gray-500">
            Are you afraid?? <br />
            &apos;Tis a home coming.
          </p>
        </div>
      </section>
    </body>
  );
};

export default HeroSection;
