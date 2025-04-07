import React from "react";
import talktoExpert from "/Header/talktoExpert.svg";
import { motion } from "framer-motion";
import bgVideo from "/Hero/HeroVid.webm";
import ove from "/Hero/over.png";

const Hero = () => {
  const text = "Bridging Technology, Empowering Brands";

  return (
    <div className="relative flex flex-col justify-center items-center px-6 md:px-20 py-0 h-screen text-center text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <img src={ove} alt="" className="absolute opacity-80 w-full h-full" />

      <div className="relative ">
        {/* H1 Animation (Responsive) */}
        <motion.h1
          className="mb-8 text-3xl sm:text-4xl md:text-5xl text-[#E6AF2E] font-[SF Pro Display] font-[275]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {text.split("").map((char, index) =>
            char === " " ? (
              <span key={index}>&nbsp;</span>
            ) : (
              <motion.span
                key={index}
                initial={{ opacity: 0, rotateY: 100 }}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  transition: { delay: index * 0.02, duration: 2 },
                }}
                className="inline-block font-semibold"
              >
                {char}
              </motion.span>
            )
          )}
        </motion.h1>

        {/* Staggered Paragraph Animation (Responsive) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <motion.p
            className="text-base sm:text-base md:text-base leading-6 sm:leading-7 md:leading-8 font-[SF Pro Display] font-[400] text-[#FFFFFF]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 1.4 },
              },
            }}
          >
            EKKAA's innovative range of consumer electronics and appliances
            blends advanced technology with world-class R&D <br />
            to deliver seamless, turnkey solutions designed to elevate lifestyle
            and transform everyday living, globally.
          </motion.p>
        </motion.div>
      </div>

      {/* Button: Only shows on mobile */}
      <button className="relative mt-10 md:hidden z-2 pr-12 flex items-center px-5 py-2.5 text-sm sm:text-base cursor-pointer">
        <img src={talktoExpert} alt="" className="absolute" />
        <span className="ml-5 text-white">Talk to expert</span>
      </button>
    </div>
  );
};

export default Hero;
