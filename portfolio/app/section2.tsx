import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface RafayelSectionProps {
  textRef: React.RefObject<HTMLParagraphElement | null>;
  videoRef2: React.RefObject<HTMLVideoElement | null>;
}

export const RafayelSection = ({ textRef, videoRef2 }: RafayelSectionProps) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    if (textRef.current) {
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      );
    }
  }, [textRef]);

  return (
    <section className="relative py-28 flex flex-col md:flex-row min-h-screen">
      <div className="relative flex flex-row-reverse place-items-baseline min-h-screen lg:hidden">
        <div className="p-8  z-10 w-full md:w-1/2">
          <h1
            ref={titleRef}
            className="text-[9vw] leading-none tracking-tight font-bold text-white"
          >
            How short is a fish&apos;s memory?
            <span className="text-pink-600/80 italic block">
              cansei. chato.
            </span>
          </h1>

          <p
            ref={textRef}
            className="font-mono text-lg text-gray-300 mt-6 max-w-xl"
          >
            {`"It was before you met me. This is a story you've forgotten."`}
          </p>

          <p
            ref={textRef}
            className="font-mono text-lg text-gray-300 mt-6 max-w-xl"
          >
            {`Between code and cadence, I give shape to silence and bring feeling to the frame. Each interface I build, each phrase I design, is crafted to echo softly — but last deeply.

`}
          </p>
          <p
            ref={textRef}
            className="font-mono text-lg text-gray-300 mt-6 max-w-xl"
          >
            {`From the architecture of emotion to the elegance of interaction,
I blend language and logic to create experiences that are quiet, intentional, and unforgettable.

I craft digital spaces that don’t scream for attention — they pull you in, slowly, deliberately.
A word. A pause. A flicker of motion.
Until the moment lingers.

`}
          </p>
        </div>
      </div>

      {/* texto para pc */}
      <section className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen p-8">
          <div className="flex flex-col justify-start ml-10">
            <p className="font-mono text-lg text-gray-300 max-w-2xl mt-5">
              {`From the architecture of emotion to the elegance of interaction, I
              blend language and logic to create experiences that are quiet,
              intentional, and unforgettable.`}
              <br />
              <br />
              {`I craft digital spaces that don’t scream for attention —
              they pull you in, slowly, deliberately. A word. A pause. A flicker
              of motion. Until the moment lingers.`}
            </p>
            <p className="font-mono text-lg text-gray-300 max-w-2xl mt-3">
              {`From the architecture of emotion to the elegance of interaction, I
              blend language and logic to create experiences that are quiet,
              intentional, and unforgettable.`}
              <br />
              <br />
              {`I craft digital spaces that don’t scream for attention —
              they pull you in, slowly, deliberately. A word. A pause. A flicker
              of motion. Until the moment lingers.`}
            </p>
            <h1
              ref={titleRef}
              className="text-[9vw] leading-none tracking-tight font-bold text-white"
            >
              How short is a fish&apos;s memory?
              <span className="text-pink-600/80 italic block">
                cansei. chato.
              </span>
            </h1>
          </div>

          {/* lado direito */}
          <div className="flex flex-col justify-start ml-24">
            <h1
              ref={titleRef}
              className="text-[9vw] leading-none tracking-tight font-bold text-white"
            >
              {`'Tis not worship I desire.`}
              <span className="text-pink-600/80 italic block">
                cansei. chato.
              </span>
            </h1>

            <p
              ref={textRef}
              className="font-mono text-lg text-gray-300 mt-6 max-w-xl"
            >
              {`"It was before you met me. This is a story you've forgotten."`}
            </p>

            <p
              ref={textRef}
              className="font-mono text-lg text-gray-300 mt-6 max-w-xl"
            >
              {`Between code and cadence, I give shape to silence and bring
              feeling to the frame. Each interface I build, each phrase I
              design, is crafted to echo softly — but last deeply.`}
            </p>
          </div>
        </div>
      </section>

      <div className="w-full md:w-1/2 h-screen hidden md:block">
        <video
          ref={videoRef2}
          src="/assets/raff.mp4"
          className="rounded-lg shadow-2xl object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};
