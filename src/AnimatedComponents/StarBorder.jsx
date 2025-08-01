/* eslint-disable no-unused-vars */
const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "#E9D2B2", // Gold tone
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_0_2px_#E9D2B2] ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      {/* Animated Star Border on Hover */}
      <div
        className="absolute w-[300%] h-[50%] opacity-60 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 12%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-60 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 12%)`,
          animationDuration: speed,
        }}
      ></div>

      {/* Main Button Content */}
      <div className="relative z-10 bg-gradient-to-b from-[#1f1d1b] to-[#2f2e2d] border border-[#3e3d3c] text-[#e9d2b2] font-light text-center text-[15px] py-[12px] px-[24px] rounded-xl hover:text-white transition-all duration-300">
        {children || "LET'S TALK"}
      </div>
    </Component>
  );
};

export default StarBorder;
