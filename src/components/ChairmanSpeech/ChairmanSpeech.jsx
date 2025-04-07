import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";

import image from "/Chairman/chairman.svg";

import line from "/Chairman/Line.svg";

import man from "/Chairman/man.png";

import triangle from "/Chairman/triangle.svg";

const ChairmanSpeech = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.7, once: true });

  return (
    <div ref={ref} className="p-10 max-md:p-6">
      {/* Desktop Version */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex flex-row h-auto justify-center items-center gap-24"
      >
        <div className="max-w-[800px] -ml-12">
          <h2 className="mb-8 text-5xl font-[SF Pro Display] font-[275] text-[#0F2E61]">
            Chairman's Speech
          </h2>

          <p className="font-[SF Pro Display] text-[17px] font-[400] text-[#525B68]">
            Ekkaa is all about reimagining the future of electronics. <br />
            We prioritize innovation and self-reliance while paving the way{" "}
            <br />
            for a smarter and more sustainable future.
          </p>

          <div className="mt-4 flex flex-row items-center gap-2">
            <img src={line} alt="" className="w-auto -mt-7 h-auto" />

            <div>
              <span className="font-[SF Pro Display] font-medium text-[#525B68]">
                Mr. Sagar Gupta
              </span>

              <br />

              <span className="font-[SF Pro Display] font-normal text-[#525B68]">
                Managing Director
              </span>
            </div>
          </div>
        </div>

        {/* Image Stack */}

        {/* <div className="relative w-96  h-[50vh]"> */}

        {/* <img src={triangle} alt="triangle" className="w-2xs mt-40 relative" /> */}

        {/* </div> */}

        <img
          src={image}
          alt="Chairman"
          className=" w-96 h-96 object-contain"
        />
        {/* </div> */}
      </motion.div>

      {/* Mobile Version */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 md:hidden text-center"
      >
        <h2 className="text-4xl font-[SF Pro Display] font-[275] text-[#0F2E61]">
          Chairman's Speech
        </h2>

        <motion.img
          src={image}
          alt="Chairman"
          className="w-full max-w-[300px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <p className="font-[SF Pro Display] text-[16px] font-[400] text-[#525B68]">
          Ekkaa is all about reimagining the future of electronics. We
          prioritize innovation and self-reliance while paving the way for a
          smarter and more sustainable future.
        </p>

        <div className="mt-4 flex flex-row items-center gap-2">
          <img src={line} alt="" className="w-auto -mt-5 h-auto" />

          <div>
            <span className="font-[SF Pro Display] font-medium text-[#525B68]">
              Mr. Sagar Gupta
            </span>

            <br />

            <span className="font-[SF Pro Display] font-normal text-[#525B68]">
              Managing Director
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChairmanSpeech;
