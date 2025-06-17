import "./styles/global.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RafayelSection } from "./section2";
import CustomCursor from "../app/ui/cursor";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rafayelRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const notText1 = useRef<HTMLHeadingElement | null>(null);
  const notText2 = useRef<HTMLHeadingElement | null>(null);
  const promoText = useRef<HTMLHeadingElement | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef1 = useRef<HTMLVideoElement | null>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      promoText.current,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

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
      videoRef2.current,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: videoRef2.current?.parentElement?.parentElement,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      notText1.current,
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

    gsap.fromTo(
      notText2.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "power4.out",
        delay: 1,
        scrollTrigger: {
          trigger: sectionRef3.current,
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
    <div className="bg-black antialiased">
      <CustomCursor />
      <button
        ref={buttonRef}
        onClick={openOverlay}
        className="fixed top-6 right-6 z-50 px-6 py-2 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition-all"
      >
        it&apos;s a home
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
      <div
        data-cursor-type="drag"
        ref={sectionRef}
        className="relative w-full h-screen bg-black overflow-hidden"
      >
        <div className="relative w-full h-full">
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
              <audio ref={audioRef} src="/assets/ethereal.mp4" loop />
            </div>
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
        data-cursor-type="drag"
        className="w-full relative antialiased overflow-x-hidden"
      >
        <section ref={sectionRef1}>
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
              <Image
                src="/assets/fitaa.png"
                width={50}
                height={50}
                alt="Fundo"
              />
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
              <Image
                src="/assets/fitaa.png"
                width={50}
                height={50}
                alt="Fundo"
              />
            </div>
          </div>

          <div className="relative">
            <div className="max-w-[500px] w-full absolute bottom-0 left-[-20%] right-0 top-[-40%] h-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>
        </section>
        <section
          ref={sectionRef2}
          className="w-full relative antialiased overflow-x-hidden"
        >
          <div className="relative flex flex-row-reverse items-center min-h-screen">
            <div className="pl-8 pr-16 z-10">
              <h1
                ref={notText1}
                className="text-[9vw] leading-none tracking-tight font-bold"
              >
                Not <br /> Interested.
              </h1>
            </div>

            <div className="w-[51.7%] h-full absolute left-0 top-0 ">
              <div className="relative w-full h-full">
                <video
                  ref={videoRef1}
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

        <RafayelSection textRef={textRef} videoRef2={videoRef2} />

        <section
          data-cursor-type="drag"
          ref={sectionRef3}
          className="w-full relative py-5 antialiased overflow-x-hidden"
        >
          <div className="relative flex flex-row-reverse items-center min-h-screen">
            <div className="pl-8 pr-16 z-10">
              <h1
                ref={notText2}
                className="text-[9vw] leading-none tracking-tight font-bold"
              >
                He&apos;s a<br />{" "}
                <span className="text-pink-600/80 italic block">Talker</span>
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
                  <source src="/assets/rafff.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HeroSection;
