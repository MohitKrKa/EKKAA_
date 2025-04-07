import React from 'react'
import offeringsData from "./offeringsData";
import tvbg from "/Offerings/tvbg.png";

const Page2 = () => {
  const data = offeringsData[1];

  return (
    <div className="relative flex justify-center bg-black">
      <img src={data.img1} alt="" className="h-auto w-screen object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/88 via-black/70 to-black opacity-70"></div>

      {/* Heading */}
      <h2 className="text-[4rem] z-2 absolute top-[20vh] left-1/2 transform -translate-x-1/2 text-white uppercase font-[Poppins] font-light">
        Our Offerings
      </h2>

      {/* Description */}
      <p className="font-Poppins z-2 absolute top-[30vh] left-1/2 transform -translate-x-1/2 text-white text-[1rem] font-[SF Pro Display]leading-6 font-semibold text-center max-w-[50vw] break-words">
        {data.description}
      </p>

      <img
        src={data.ell}
        alt=""
        className="absolute top-[24vh] left-1/2 transform -translate-x-1/2 h-[90vh] w-[80vw] max-w-[1000px]"
      />
      <img
        src={tvbg}
        alt=""
        className="absolute  top-[70vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[1139px]"
      />
      <img
        src={data.img2}
        alt=""
        className="absolute z-2 top-[70vh] -mt-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[55vh] w-[56vw] max-w-[1065px]"
      />
      <img
        src={data.g}
        alt=""
        className="absolute z-2 top-[80vh] left-[50vw] transform -translate-x-1/2 -translate-y-1/2 h-[5vh] w-[60vw] max-w-[860px]"
      />

      {/* Title */}
      <h2
        className="text-[2rem] z-2 max-w-[40vw] mt-[10vh] absolute top-[90vh] left-1/2 transform -translate-x-1/2 uppercase font-[Poppins] font-semibold bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, ${data.titleColorStart}, ${data.titleColorEnd})`,
        }}
      >
        {data.title}
      </h2>
    </div>
  );
};

export default Page2;
