import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type CursorType = "default" | "play" | "expand" | "drag" | "link" | "scroll";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLSpanElement>(null);

  const cursorStyles: Record<
    CursorType,
    {
      size: number;
      color: string;
      text?: string;
      scale?: number;
    }
  > = {
    default: { size: 12, color: "#EC4899" },
    play: { size: 80, color: "#EC4899", text: "PLAY", scale: 1.2 },
    expand: { size: 80, color: "#8B5CF6", text: "EXPAND", scale: 1.3 },
    drag: { size: 80, color: "#10B981", text: "DRAG", scale: 1.1 },
    link: { size: 60, color: "#3B82F6", text: "LINK", scale: 1.1 },
    scroll: { size: 80, color: "#10B981", text: "DRAG", scale: 1.1 },
  };

  useEffect(() => {
    const cursor = cursorRef.current;
    const inner = cursorInnerRef.current;
    const text = cursorTextRef.current;

    if (!cursor || !inner || !text) return;

    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(inner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    gsap.set([cursor, inner], {
      xPercent: -50,
      yPercent: -50,
    });

    window.addEventListener("mousemove", moveCursor);

    const hoverables = document.querySelectorAll("[data-cursor-type]");

    hoverables.forEach((el) => {
      const type = el.getAttribute("data-cursor-type") as CursorType;

      el.addEventListener("mouseenter", () => handleHover(type));
      el.addEventListener("mouseleave", () => handleHover("default"));
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "";
    };
  }, []);

  const handleHover = (type: CursorType) => {
    const cursor = cursorRef.current;
    const inner = cursorInnerRef.current;
    const text = cursorTextRef.current;

    if (!cursor || !inner || !text) return;

    const style = cursorStyles[type];

    gsap.to(cursor, {
      width: style.size,
      height: style.size,
      backgroundColor: style.color,
      scale: style.scale || 1,
      duration: 0.3,
      ease: "back.out(2)",
    });

    gsap.to(inner, {
      width: style.size - 10,
      height: style.size - 10,
      duration: 0.2,
    });

    if (style.text) {
      text.textContent = style.text;
      gsap.to(text, { opacity: 1, duration: 0.2 });
    } else {
      gsap.to(text, { opacity: 0, duration: 0.2 });
    }
  };

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-pink-500 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <span
          ref={cursorTextRef}
          className="text-white text-xs font-bold opacity-0 uppercase"
        ></span>
      </div>

      <div
        ref={cursorInnerRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-white mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      ></div>
    </>
  );
}
