import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import prodFac from "/Services/prodFac.svg";
import oem from "/Services/oem.svg";
import technical from "/Services/technical.svg";
import warehouse from "/Services/warehouse.svg";
import rd from "/Services/rd.svg";
import line from "/Services/Line.svg";

const Services = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  const renderDesktop = () => (
    <div className="flex items-center  relative text-[#173669] font-[SF Pro Display]] my-20">
        <div className="flex items-center justify-center mx-auto">
      <h2 className="text-5xl font-[300]">Our Services</h2>
      <motion.div
        className="flex  items-center ml-10 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* <img src={line} alt="" className="ml-8" /> */}

        <motion.div variants={itemVariants} className=" flex items-center flex-col shadow-lg h-[180px] w-[200px] p-6">
          <img src={prodFac} alt="" className="h-14 cursor-pointer" />
          <p className="mt-4  text-[1rem] font-[400]">
            Production  Facility
          </p>
        </motion.div>
        {/* <img src={line} alt="" className="ml-8" /> */}
        <motion.div variants={itemVariants} className=" flex items-center flex-col shadow-lg h-[180px] w-[200px] p-6">
          <img src={warehouse} alt="" className="h-14 cursor-pointer" />
          <p className="mt-4 text-[1rem] font-[400]">
            Warehousing <br /> Facility
          </p>
        </motion.div>
        {/* <img src={line} alt="" className="ml-8" /> */}
        <motion.div variants={itemVariants} className=" flex items-center flex-col shadow-lg h-[180px] w-[200px] p-6">
          <img src={rd} alt="" className="h-14 cursor-pointer" />
          <p className="mt-4 text-[1rem] font-[400]">
            R&D and  Testing<br /> Facility
          </p>
        </motion.div>
        {/* <img src={line} alt="" className="ml-8" /> */}
        <motion.div variants={itemVariants} className=" flex items-center flex-col shadow-lg h-[180px] w-[200px] p-6">
          <img src={technical} alt="" className="h-14 cursor-pointer" />
          <p className="mt-4 text-[1rem] font-[400]">
            24x7 Technical <br /> Support
          </p>
        </motion.div>
        {/* <img src={line} alt="" className="ml-8" /> */}
        <motion.div variants={itemVariants} className=" flex items-center flex-col shadow-lg h-[180px] w-[200px] p-6">
          <img src={oem} alt="" className="h-14 mt-4 cursor-pointer" />
          <p className="mt-4 text-[1rem] font-[400]">OEM/ODM</p>
        </motion.div>
      </motion.div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="bg-[#F6F6FB] py-8 px-4 text-[#173669] font-[SF Pro Display]]">
      <h2 className="text-3xl font-[300] mb-6 text-center">Our Services</h2>
      <motion.div
        className="flex flex-col items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {[prodFac, warehouse, rd, technical, oem].map((img, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <img src={img} alt="" className="h-12" />
            <p className="mt-2 text-sm font-[400] text-center">
              {
                [
                  "Production Facility",
                  "Warehousing Facility",
                  "R&D and Testing Facility",
                  "24x7 Technical Support",
                  "OEM/ODM",
                ][index]
              }
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return <>{isMobile ? renderMobile() : renderDesktop()}</>;
};

export default Services;
