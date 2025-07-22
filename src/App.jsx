import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
const App = () => {
  const ref1 = useRef();
  useGSAP(() => {
    gsap.to(ref1.current, {
      rotation: 360,
      duration: 2,
    });
  });
  return (
    <>
      <Navbar />
    
    </>
  );
};

export default App;
