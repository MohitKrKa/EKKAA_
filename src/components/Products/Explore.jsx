import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Explore = ({ strokeColor = "#E6AF2E", circleColor = "#E6AF2E", textColor = "black", text = "Explore us" }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const controls = useAnimation();
  const [lineDrawn, setLineDrawn] = useState(false);
  const [circlesVisible, setCirclesVisible] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.4 });
  const { ref: svgRef, inView: svgInView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const { ref: circlesRef, inView: circlesInView } = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    setLineDrawn(svgInView);
  }, [svgInView]);

  useEffect(() => {
    setCirclesVisible(circlesInView);
  }, [circlesInView]);

  return (
    <div className="flex relative mt-6 items-center py-2.5 text-base cursor-pointer">
      <svg
        ref={svgRef}
        width="140"
        height="48"
        viewBox="0 0 140 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M99.9857 3.85132H1V46.8513H139V3.85132H116.217"
          stroke={strokeColor}
          strokeWidth="1.8"
          fill="none"
          initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          animate={{ strokeDasharray: 1000, strokeDashoffset: lineDrawn ? 0 : 1000 }}
          transition={{ delay: 0.5, duration: 2 }}
        />

        <motion.circle
          ref={circlesRef}
          cx="99.5262"
          cy="4.0936"
          r="3.21567"
          fill={circlesVisible ? circleColor : "transparent"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: circlesVisible ? 1 : 0, scale: circlesVisible ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.circle
          cx="115.758"
          cy="4.0936"
          r="3.21567"
          fill={circlesVisible ? circleColor : "transparent"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: circlesVisible ? 1 : 0, scale: circlesVisible ? 1 : 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }}
        />
      </svg>
      <span className="ml-8 absolute" style={{ color: textColor }}>{text}</span>
    </div>
  );
};

export default Explore;