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
      { opacity: 0, y: "-50%" }, //from
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5} //To
    );
  });

  return (
    <div>
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/Videos/Valoren_intro_final.mp4" // ✅ make sure path is correct
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />{" "}
        {/* dark overlay */}
      </div>

      {/* Foreground Content */}
      <div  className="relative z-20 flex flex-col items-center justify-end bottom-20 h-screen text-white px-6 text-center">
        <h1 ref={gsapRef} className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
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
