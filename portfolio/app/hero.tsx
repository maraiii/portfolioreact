import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";

gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const promoText = useRef<HTMLHeadingElement | null>(null);
  const showRef = useRef<HTMLHeadingElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power1.inOut",
    });
    gsap.to(window, {
      scrollTo: { y: 1100 }, // colocar section2
      delay: 2,
      duration: 1.5,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      showRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 3, ease: "power3.out" }
    );
  }, []);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="bg-black">
        <div className="relative w-fit">
          {/**  <Image
            src="/assets/lily.png"
            alt="Lily flower"
            width={300}
            height={300}
            className="absolute top-10 right-0 mr-32 z-10"
          />  */}
          <h1 ref={titleRef} className="text-[30vw] bg-black relative z-0">
            MARAI
          </h1>
        </div>
      </div>
      <div
        ref={sectionRef}
        className="relative w-full bg-black h-screen overflow-hidden"
      >
        <div className="relative  w-full h-1/2">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            data-cursor-type="play"
          >
            <source src="/assets/lirio.mp4" type="video/mp4" />
          </video>

          <div className="absolute bottom-10 right-10 w-[20%] max-w-[400px]">
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

              <button
                onClick={handlePlayMusic}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="bg-pink-600/80 rounded-full p-3">play</div>
              </button>
              <audio ref={audioRef} src="/assets/line.mp4" loop />
            </div>
          </div>

          <div className="absolute bottom-20 left-10 text-white">
            <h2 ref={promoText} className="text-4xl font-bold mb-2">
              + + + PROMOTION VIDEO
            </h2>
            <p className="text-xl opacity-80">Video enumered edit</p>
            <button className="mt-4 px-6 py-2 bg-pink-600 rounded-full hover:bg-pink-700 transition">
              Download Now
            </button>
          </div>
        </div>
        <p className="align-super lg:hidden linline-block text-[4vw] mt-4">
          ⋆.ೃ࿔*:𓇼⋆.ೃ࿔*:⋆⋆.ೃ࿔*:𓇼⋆.ೃ࿔*:⋆⋆.ೃ࿔*:𓇼⋆.ೃ࿔*:⋆⋆.ೃ࿔*:𓇼⋆.ೃ࿔*:⋆⋆.ೃ࿔*:⋆
        </p>
        <h1
          ref={showRef}
          className="text-[18.2vw] text-[#f9fbfd] lg:hidden leading-none tracking-tight font-bold relative z-10 mb-32 mt-24 ml-6"
        >
          SHOWCASE
        </h1>
      </div>
    </>
  );
};
export default Hero;
