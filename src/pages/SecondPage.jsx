/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MediumCard from "../assets/Cards/MediumCard";


const SecondPage = () => {
  const scrollRef = useRef(null);
//   useGSAP(() => {
//     gsap.fromTo(
//       scrollRef.current,
//       { opacity: 0, y: 50 }, //from
//       { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5 } //To
//     );
//   });
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-black">
      SecondPage
    </div>
  );
};

export default SecondPage;
