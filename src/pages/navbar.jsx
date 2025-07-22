import { React } from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-10 p-5 w-full flex justify-center items-center py-4 z-50">
        <div className="flex items-center justify-between gap-6 px-6 py-4 bg-[rgba(36,34,32,0.36)] backdrop-blur-[15.2px] border border-transparent rounded-2xl shadow-lg max-w-[1100px] w-full">
          {/* Brand Name */}
          <div className="flex items-center">
            <img
              src="public/Valoren_Lion-removebg-preview.png"
              alt="Leo"
              className="w-12 h-12"
            />
            <p className="text-[1.85rem] font-light text-white ml-3">VALORÉN</p>
          </div>
          {/* Navigation Links */}
          <ul className="flex list-none text-[#e9d2b2] gap-8 m-0 p-2">
            <li>
              <a
                href="#services"
                className="text-[0.85rem] font-medium no-underline text-[#e9d2b2]"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="text-[0.85rem] font-medium no-underline text-[#e9d2b2]"
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[0.85rem] font-medium no-underline text-[#e9d2b2]"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-[0.85rem] font-medium no-underline text-[#e9d2b2]"
              >
                BLOG
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="px-4 py-2 bg-[#e9d2b2] text-black rounded">
            LET'S TALK
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
