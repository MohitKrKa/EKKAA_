import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutimg from "/About/About.png";
import aboutbg from "/About/Aboutbg.png";
import box from "/About/box.svg";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [exploreClicked, setExploreClicked] = useState(false);

  const overlayControls = useAnimation();
  const imageControls = useAnimation();
  const textControls = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.4 });
  const { ref: svgRef, inView: svgInView } = useInView({ threshold: 0.5 });
  const { ref: circlesRef, inView: circlesInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (inView && !exploreClicked) {
      overlayControls.start({
        width: "34%",
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      imageControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      textControls.start("visible");
    } else if (!inView && !exploreClicked) {
      overlayControls.start({
        width: "100%",
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      imageControls.start({
        x: 100,
        opacity: 0,
      });

      textControls.start("hidden");
    } else if (exploreClicked) {
      overlayControls.start({
        width: "100%",
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    }
  }, [inView, exploreClicked]);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const handleExploreClick = () => {
    setExploreClicked(true);
    // You might want to add navigation logic here or other actions
  };

  const renderDesktopView = () => (
    <div
      className="relative flex  items-center w-full h-screen overflow-hidden"
      ref={ref}
    >
      {/* Slide-in Image */}
      <motion.img
        src={aboutimg}
        alt="About"
        className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
        initial={{ x: 100, opacity: 0 }}
        animate={imageControls}
      />

      {/* Overlay that shrinks */}
      <motion.div
        initial={{ width: "100%" }}
        animate={overlayControls}
        className="absolute inset-0 bg-[#12182c] z-10"
      />

      {/* Text Content */}
      <motion.div
        initial="hidden"
        animate={textControls}
        variants={fadeInLeft}
        className="absolute left-[5vw] top-1/2 -translate-y-1/2 max-w-[28vw] text-white text-start z-20 flex flex-col justify-center"
      >
        <h1 className="font-[SF Pro Display] font-[200]  text-6xl leading-[1.2]">
          ABOUT EKKAA
        </h1>
        <br />
        <p className="font-[SF Pro Display] font-[100] items-start justify-self-start  leading-7 text-[1.3rem]">
          Ekkaa Electronics powers
          <br /> experiences that shape everyday
          <br /> life. Our innovations are behind
          <br /> some of the most trusted consumer
          <br /> electronics and appliances that
          <br /> make life simpler, smarter and
          <br /> more enjoyable.
        </p>

        {/* Button + SVG Line Animation */}
        <div
          className="flex relative mt-6 items-center py-2.5 text-base cursor-pointer"
          onClick={handleExploreClick}
        >
          <svg
            ref={svgRef}
            width="140"
            height="48"
            viewBox="0 0 140 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Line Animation */}
            <motion.path
              d="M99.9857 3.85132H1V46.8513H139V3.8513H116.217"
              stroke="#E6AF2E"
              strokeWidth="2"
              fill="none"
              initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
              animate={{
                strokeDasharray: 1000,
                strokeDashoffset: svgInView ? 0 : 1000,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Circles */}
            <motion.circle
              ref={circlesRef}
              cx="99.5262"
              cy="4.0936"
              r="3.21567"
              fill={circlesInView ? "#E6AF2E" : "transparent"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: circlesInView ? 1 : 0,
                scale: circlesInView ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.circle
              cx="115.758"
              cy="4.0936"
              r="3.21567"
              fill={circlesInView ? "#E6AF2E" : "transparent"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: circlesInView ? 1 : 0,
                scale: circlesInView ? 1 : 0,
              }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
            />
          </svg>
          <span className="ml-8 absolute text-white">Explore us</span>
        </div>
      </motion.div>
    </div>
  );

  const renderMobileView = () => (
    <div className="relative flex" ref={ref}>
      <img
        src={aboutimg}
        alt="About"
        className="w-full absolute top-0 left-0 z-[-1]"
      />
      <img src={aboutbg} alt="About Background" className="w-full relative" />

      <motion.div
        initial="hidden"
        animate={textControls}
        variants={fadeInLeft}
        className="absolute inset-0 bg-gradient-to-r from-[#2C381C] to-[#E6AF2E00] opacity-70 hover:opacity-90 transition-opacity"
      />

      <motion.div
        initial="hidden"
        animate={textControls}
        variants={fadeInLeft}
        className="absolute top-[10%] left-5 right-5 text-white text-start"
      >
        <h1 className="font-[SF Pro Display] font-[275] text-3xl leading-[1]">
          ABOUT EKKAA
        </h1>
        <br />
        <p className="font-[SF Pro Display] font-[200] leading-[1.1] text-base">
          Ekkaa Electronics powers experiences that shape everyday life. Our
          innovations are behind some of the most trusted consumer electronics.
        </p>
        <button
          className="flex relative mt-4 items-center text-sm cursor-pointer"
          onClick={handleExploreClick}
        >
          <img src={box} alt="" className="absolute w-22 h-auto" />
          <span className="pl-2 pr-2 text-white">Explore us</span>
        </button>
      </motion.div>
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default About;
