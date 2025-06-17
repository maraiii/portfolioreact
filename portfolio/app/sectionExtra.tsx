import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface RafayelSectionProps {
  textRef: React.RefObject<HTMLParagraphElement | null>;
  videoRef2: React.RefObject<HTMLVideoElement | null>;
}

export const RafayelSection = ({ textRef, videoRef2 }: RafayelSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fixedSideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scrollContent = containerRef.current.querySelector(".scroll-content");
    const fixedSide = fixedSideRef.current;

    if (!scrollContent || !fixedSide) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    const scrollDistance = scrollContent.scrollHeight - window.innerHeight;

    tl.to(fixedSide, {
      y: -scrollDistance,
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col md:flex-row min-h-screen bg-black overflow-hidden"
    >
      <div
        ref={fixedSideRef}
        className="fixed-side w-full md:w-1/2 h-screen flex items-center justify-center p-8 md:p-16 sticky top-0"
      >
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl sm:text-5xl font-regular mb-6 leading-tight">
            Por que desenvolver um site se ele é chato?{" "}
            <span className="text-pink-400 font-bold italic block">
              cansei. chato.
            </span>
          </h1>

          <p ref={textRef} className="font-mono text-lg text-gray-300 mb-8">
            {`"Às vezes, me pego olhando para o vazio do espaço, aquele mar
            escuro e infinito, onde as estrelas brilham como pequenos
            fragmentos de esperança..."`}
          </p>

          <div className="flex flex-wrap gap-4">
            {["Couture", "Design", "Arte", "Digital"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm hover:underline text-pink-400"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-content w-full md:w-1/2">
        <div className="h-screen w-full flex items-center justify-center bg-gray-900">
          <video
            ref={videoRef2}
            src="/assets/raf.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="h-screen w-full bg-purple-900 flex items-center justify-center">
          <h2 className="text-4xl text-white">Seção 2</h2>
        </div>
        <div className="h-screen w-full bg-blue-900 flex items-center justify-center">
          <h2 className="text-4xl text-white">Seção 3</h2>
        </div>
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
