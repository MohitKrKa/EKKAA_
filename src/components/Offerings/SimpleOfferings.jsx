import React, { useRef } from "react";
import tvbg from "/Offerings/tvbg.png";

const SimpleOfferings = () => {
  const scrollRef = useRef(null);

  return (
    <div className=" ">
      <div ref={scrollRef} className="h-screen relative w-full overflow-y-scroll"> {/* Removed snap-y */}
        <img
          src={tvbg}
          alt=""
          className="fi z-10 top-[19vh] left-[20vw] w-[60vw]"
        />
        <div className="h-screen bg-red-200 flex items-center justify-center">Content 1</div>
        <div className="h-screen bg-blue-200 flex items-center justify-center">Content 2</div>
      </div>
    </div>
  );
};

export default SimpleOfferings;