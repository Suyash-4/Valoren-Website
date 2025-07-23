import { React } from "react";
import { useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-5 p-5 w-full flex justify-center items-center py-4 z-50">
        <div></div>
        <div className="flex items-center justify-between gap-15 px-6 py-5 bg-[rgba(36,34,32,0.04)] backdrop-blur-[15.2px] border border-transparent rounded-2xl shadow-lg max-w-[1100px] w-full">
          {/* Brand Name */}
          <div className="flex items-center select-none">
            <img
              src="public/LionLogoGold.png"
              alt="Leo"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <p className="ml-3  text-white font-light text-lg sm:text-2xl md:text-[1.85rem] pointer-events-none select-none">
              VALORÉN
            </p>
          </div>
          {/* Hamburger Icon */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#e9d2b2] mb-1 transition-all ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#e9d2b2] mb-1 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#e9d2b2] transition-all ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
          {/* Navigation Links */}
          <ul
            className={`flex-col sm:flex-row flex list-none text-[#e9d2b2] gap-7 m-0 p-2 absolute sm:static top-[90px] left-0 w-full sm:w-auto bg-[rgba(36,34,32,0.39)] sm:bg-transparent rounded-2xl sm:rounded-none shadow-lg sm:shadow-none transition-all duration-300 z-40 ${
              menuOpen ? "flex" : "hidden"
            } sm:flex`}
          >
            <li>
              <a
                href="#services"
                className=" no-underline font-extralight text-[#e9d2b2] text-base sm:text-sm md:text-base lg:text-lg"
                onClick={() => setMenuOpen(false)}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="font-extralight no-underline text-[#e9d2b2] text-base sm:text-sm md:text-base lg:text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Our Heritage
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="font-extralight no-underline text-[#e9d2b2] text-base sm:text-sm md:text-base lg:text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            {/* CTA Button (mobile) */}
            <li className="block sm:hidden mt-2">
              <button className="w-full px-4 py-2 bg-[#e9d2b2] text-black rounded text-base sm:text-sm md:text-base lg:text-lg">
                LET'S TALK
              </button>
            </li>
          </ul>
          {/* CTA Button (desktop) */}
          <button className="hidden sm:block px-4 py-2 bg-[#e9d2b2] text-black rounded text-base sm:text-sm md:text-base lg:text-lg">
            LET'S TALK
          </button>
        </div>
        <div className="cart text-[#e9d2b2] text-2xl absolute right-23 top-11 sm:top-35 sm:right-18 xl:right-10 xl:top-13">
          <a href="#cart">
            <PiShoppingCartSimple />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
