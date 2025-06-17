import "./styles/global.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rafayelRef = useRef<HTMLHeadingElement>(null);
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const notText = useRef<HTMLHeadingElement | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      rafayelRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "power4.out",
        delay: 1,
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      notText.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "power4.out",
        delay: 1,
        scrollTrigger: {
          trigger: sectionRef2.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.set(buttonRef.current, { opacity: 0, pointerEvents: "none" });

    ScrollTrigger.create({
      trigger: sectionRef1.current,
      start: "top center",
      onEnter: () => {
        gsap.to(buttonRef.current, {
          opacity: 1,
          pointerEvents: "auto",
          y: 0,
          duration: 0.8,
          ease: "power4.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(buttonRef.current, {
          opacity: 0,
          pointerEvents: "none",
          y: -20,
          duration: 0.6,
          ease: "power2.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const openOverlay = () => {
    setMenuOpen(true);
    gsap.fromTo(
      overlayRef.current,
      { y: "-100%" },
      { y: 0, duration: 1, ease: "power4.out" }
    );
  };

  const closeOverlay = () => {
    gsap.to(overlayRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => setMenuOpen(false),
    });
  };
  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="bg-black font-montreal antialiased">
      <button
        ref={buttonRef}
        onClick={openOverlay}
        className="fixed top-6 right-6 z-50 px-6 py-2 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition-all"
      >
        it's a home
      </button>

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

              <button
                onClick={handlePlayMusic}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="bg-pink-600/80 rounded-full p-3">play</div>
              </button>
              <audio ref={audioRef} src="/assets/hips.mp4" loop />
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-10 text-white">
          <h2 className="text-4xl font-bold mb-2">+ + + PROMOTION VIDEO</h2>
          <p className="text-xl opacity-80">Video enumered edit</p>
          <button className="mt-4 px-6 py-2 bg-pink-600 rounded-full hover:bg-pink-700 transition">
            Download Now
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          ref={overlayRef}
          className="fixed top-0 left-0 w-full h-full z-[100] bg-black text-white flex flex-col items-center justify-center space-y-6 text-4xl"
        >
          <button
            onClick={closeOverlay}
            className="absolute top-6 right-6 text-3xl hover:text-pink-400"
          >
            ✕
          </button>
          <a
            href="#home"
            onClick={closeOverlay}
            className="hover:text-pink-400"
          >
            Home
          </a>
          <a
            href="#section1"
            onClick={closeOverlay}
            className="hover:text-pink-400"
          >
            Section 1
          </a>
          <a
            href="#section2"
            onClick={closeOverlay}
            className="hover:text-pink-400"
          >
            Section 2
          </a>
          <a
            href="#footer"
            onClick={closeOverlay}
            className="hover:text-pink-400"
          >
            Footer
          </a>
        </div>
      )}

      <section
        ref={sectionRef1}
        className="w-full relative antialiased overflow-x-hidden"
      >
        <div className="relative">
          <h1
            ref={titleRef}
            className="text-[15vw] leading-none tracking-tight font-bold relative z-10 my-11"
          >
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
            <h1
              ref={rafayelRef}
              className="text-[15vw] leading-none tracking-tight font-bold relative z-10 my-11"
            >
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
        <section
          ref={sectionRef2}
          className="w-full relative bg-accent-200 font-montreal antialiased overflow-x-hidden"
        >
          <div className="relative flex flex-row-reverse items-center min-h-screen">
            <div className="pl-8 pr-16 z-10">
              <h1
                ref={notText}
                className="text-[9vw] leading-none tracking-tight font-bold"
              >
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

                <p
                  ref={textRef}
                  className="animated-text font-mono text-lg text-gray-500"
                >
                  {`“Às vezes, me pego olhando para o vazio do espaço,
                  aquele mar
                  escuro e infinito, onde as estrelas brilham como pequenos
                  fragmentos de esperança. É estranho pensar que, mesmo nesse
                  silêncio absoluto, meu coração ainda busca conexão. Lembro das
                  noites em que tudo parecia perdido, quando a solidão apertava
                  o peito, mas era justamente ali que eu encontrava forças para
                  continuar.
                  Porque, no fundo, o que nos move não é o medo do
                  escuro, mas a coragem de acender nossa própria luz — mesmo que
                  seja pequena e trêmula. O amor, para mim, sempre foi essa nave
                  que atravessa o desconhecido, enfrentando tempestades e
                  galáxias invisíveis, com a promessa de que, no final, a viagem
                  vale cada instante”`}
                </p>
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
    </div>
  );
};

export default HeroSection;
