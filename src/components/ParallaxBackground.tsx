"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollTop / docHeight;

    if (backgroundRef.current) {
      const maxTranslate =
        backgroundRef.current.offsetHeight - window.innerHeight;
      backgroundRef.current.style.transform = `translateY(-${
        scrollProgress * maxTranslate
      }px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="fixed top-0 left-0 w-full h-[300vh] opacity-80 bg-contain bg-center pointer-events-none z-[-1] transition-transform duration-[20ms] ease-linear"
      style={{
        backgroundImage: `url('/background-image.webp')`,
      }}
    />
  );
}
