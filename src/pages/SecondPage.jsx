/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MediumCard from "../assets/Cards/MediumCard";
import "../index.css";

const SecondPage = () => {
  return (
    <div className="main-body w-full h-screen flex flex-row bg-black">
      <div className="containerL min-w-1/2 flex flex-col items-start justify-evenly pl-5 ">
        <div className=" w-full h-fit ">
          <div className="flex flex-col gap-2.5 text-2xl font-bold text-white bg-">
            <h1>Every</h1>
            <h1>Second</h1>
            <h1>Earned.</h1>
          </div>
        </div>
        <div className=" w-full h-fit text-[1.5rem] text-white bg-blue-700">
          <div>
            <p>
              <span
                className="font-bold text-white"
                style={{ fontFamily: "Roze" }}
              >
                VALOREN
              </span>{" "}
              isn’t built on decades.
            </p>
            <p>
              {" "}
              It’s built on discipline. Precision. And relentless ambition.
            </p>
          </div>
        </div>
      </div>
      <div className="containerR  min-w-1/2 flex flex-col items-start justify-evenly pr-5 pt-10">
        <div className=" w-full h-[180px] bg-purple-400"> </div>
      </div>
    </div>
  );
};

export default SecondPage;
