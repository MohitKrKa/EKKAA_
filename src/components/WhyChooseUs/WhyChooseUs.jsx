import React from "react";
import { delay, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import check from "/WhyChooseUs/check.svg";
import im from "/WhyChooseUs/image.png";
import im1 from "/WhyChooseUs/image1.png";
import im2 from "/WhyChooseUs/image2.png";
import im3 from "/WhyChooseUs/image3.png";
import im4 from "/WhyChooseUs/image4.png";
import im5 from "/WhyChooseUs/image5.png";
import { useMediaQuery } from "react-responsive";

const imageVariants = {
  left: { x: -100, opacity: 0, transition: {delay:0.6, duration: 0.8 } },
  right: { x: 100, opacity: 0, transition: {delay:0.6, duration: 0.8 } },
  top: { y: -100, opacity: 0, transition: {delay:0.6, duration: 0.8 } },
  bottom: { y: 100, opacity: 0, transition: {delay:0.6, duration: 0.8 } },
  visible: { x: 0, y: 0, opacity: 1, transition: {delay:0.5, duration: 1 } },
};

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Media query hooks
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 1023 });
//   const checkVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: (index) => ({
//       scale: 1,
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: 1.3 + index * 0.2,
//         type: "spring",
//         stiffness: 300,
//         damping: 15,
//         bounce: 0.5,
//       },
//     }),
//   };
  
  


  
//   const checkVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (index) => ({
//       y: 0,
//       opacity: 1,
//       transition: {
//         delay: 1 + index * 0.15,
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     }),
//   };

// const checkVariants = {
//     hidden: { opacity: 0, scale: 1.3, filter: "blur(6px)" },
//     visible: (index) => ({
//       opacity: 1,
//       scale: 1,
//       filter: "blur(0px)",
//       transition: {
//         delay: 1.1 + index * 0.25,
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     }),
//   };


const checkVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1+  index * 0.1,
        type: "spring",
        stiffness: 500,
        damping: 20,
        ease: "easeOut",
      },
    }),
  };




// const checkVariants = {
//     hidden: { opacity: 0, scale: 1.5 },
//     visible: (index) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: 1 + index * 0.1,
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     }),
//   };


// const checkVariants = {
//     hidden: { opacity: 0, rotate: 60, scale: 0.6 },
//     visible: (index) => ({
//       rotate: 0,
//       scale: 1,
//       opacity: 1,
//       transition: {
//         delay: 1.3 + index * 0.2,
//         duration: 0.7,
//         type: "spring",
//         stiffness: 180,
//         damping: 14,
//       },
//     }),
//   };


// const checkVariants = {
//     hidden: { opacity: 0, rotateY: 60 },
//     visible: (index) => ({
//       opacity: 1,
//       rotateY: 0,
//       transition: {
//         delay: 1 + index * 0.2,
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     }),
//   };
  
  
  
  
  
  
  
  

  
  
    // Desktop specific styles and components
  
  const DesktopView = () => (
    <div className="flex p-24 font-[Poppins]">
      <div className="flex flex-col pl-24 justify-center w-1/2">
        <h2 className="uppercase text-[4rem] text-[#0F2E61] font-[275]">
          Why choose us?
        </h2>
        <div className="flex flex-col gap-4 mt-10">
          <ul>
            {[
              "360° Manufacturing and Turnkey Solutions",
              "Expert ODM Manufacturer",
              "Customisable Solutions",
              "Seamless After-sales Support",
              "Uncompromising Quality",
              "Optimised Production and Value",
              "Compliance with Global Standards",
            ].map((text, index) => (
                <motion.li
                key={index}
                className="flex  items-center text-[#525B68] gap-4 mt-5"
              >
                <motion.img src={check} alt="" className="w-9" 
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={checkVariants}
                custom={index}/>
                <span className="font-[Poppins] font-[400] text-xl leading-relaxed">
                  {text}
                </span>
              </motion.li>
              
            ))}
          </ul>
        </div>
      </div>
      {/* Image Grid with Animations */}
      <div className="grid grid-cols-3 gap-2 justify-end items-center">
        <motion.img
          src={im}
          alt=""
          className="mt-12"
          initial="left"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im1}
          alt=""
          className="-mt-36"
          initial="top"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im2}
          alt=""
          className="-ml-7 -mt-16"
          initial="right"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im4}
          alt=""
          className="-mt-18 ml-20"
          initial="left"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im3}
          alt=""
          className="-mt-52"
          initial="bottom"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        {/* */}
        <motion.img
          src={im5}
          alt=""
          className="w-full -ml-6 -mt-52"
          initial="right"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
      </div>
    </div>
  );

  // Mobile specific styles and components
  const MobileView = () => (
    <div className="bg-white flex flex-col p-8 font-[Poppins]">
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="uppercase text-[2.5rem] text-center text-[#0F2E61] font-[275] leading-tight">
          Why choose us?
        </h2>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <ul>
          {[
            "360° Manufacturing and Turnkey Solutions",
            "Expert ODM Manufacturer",
            "Customisable Solutions",
            "Seamless After-sales Support",
            "Uncompromising Quality",
            "Optimised Production and Value",
            "Compliance with Global Standards",
          ].map((text, index) => (
            <li
              key={index}
              className="flex items-center text-[#525B68] gap-2 mt-3"
            >
              <img src={check} alt="" className="w-6" />
              <span className="font-[Poppins] font-[400] text-lg leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Image Layout */}
      <div className="flex flex-wrap justify-center mt-8 gap-2">
        <motion.img
          src={im}
          alt=""
          className="w-1/3"
          initial="left"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im1}
          alt=""
          className="w-1/3"
          initial="top"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im2}
          alt=""
          className="w-1/3"
          initial="right"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im3}
          alt=""
          className="w-1/3"
          initial="bottom"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im4}
          alt=""
          className="w-1/3"
          initial="left"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
        <motion.img
          src={im5}
          alt=""
          className="w-1/3"
          initial="right"
          animate={inView ? "visible" : ""}
          variants={imageVariants}
        />
      </div>
    </div>
  );

  return (
    <div ref={ref}>
      {isDesktop && <DesktopView />}
      {isMobile && <MobileView />}
    </div>
  );
};

export default WhyChooseUs;