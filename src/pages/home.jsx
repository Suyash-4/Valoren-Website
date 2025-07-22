import { React, useEffect, useRef } from "react";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // ✅ Reduce speed to 0.5x
    }
  }, []);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <video
          ref={videoRef}
          src="public/Videos/Valoren_intro_final.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100vw",
            height: "100vh",
            background: "rgba(200,200,200,0.3)",
            pointerEvents: "none",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          padding: "20px",
          color: "white",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "3rem",
        }}
      >
        <h1>Built with Discipline.</h1>
        <p>
          <i>Worn with purpose.</i>
        </p>
      </div>
    </div>
  );
};

export default Home;
