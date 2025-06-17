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
    <section
      data-cursor-type="drag"
      className="relative py-28 flex flex-col md:flex-row min-h-screen"
    >
      <div className="relative flex flex-row-reverse items-center min-h-screen">
        <div className="pl-8 pr-16 z-10 max-w-2xl">
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
        </div>
      </div>

      <div className="w-full md:w-1/2 h-screen">
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

      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <p className="text-sm text-gray-500">
          Are you afraid?? <br />
          &apos;Tis a home coming.
        </p>
      </div>
    </section>
  );
};
