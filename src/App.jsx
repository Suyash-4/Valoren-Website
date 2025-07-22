/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import { ReactLenis, useLenis } from "lenis/react";
const App = () => {
  // Initialize Lenis for smooth scrolling
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });
  // Use GSAP for animations
  const ref1 = useRef();
  useGSAP(() => {
    gsap.to(ref1.current, {
      rotation: 360,
      duration: 2,
    });
  });
  return (
    <>
      <ReactLenis root />
      <Navbar />
      <Home />

    </>
  );
};

export default App;
