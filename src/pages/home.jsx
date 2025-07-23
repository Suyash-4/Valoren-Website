import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Home = () => {
  const videoRef = useRef(null);
  const gsapRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
    }
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      gsapRef.current,
      { opacity: 0, y: "-50%" },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  });

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Video (absolute, but inside a relative parent) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/Videos/Valoren_intro_final.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-end h-screen text-white px-6 text-center pb-20">
        <h1
          ref={gsapRef}
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Built with Discipline.
        </h1>
        <p className="italic mt-4 text-xl sm:text-2xl md:text-3xl">
          Worn with purpose.
        </p>
      </div>
    </div>
  );
};

export default Home;
