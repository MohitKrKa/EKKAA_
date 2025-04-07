"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";
import ChildComponent from "./Child.text";

const ParentTestComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -100% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (!isInView) {
      controls.start({ y: "-100%", transition: { duration: 0.5 } });
    } else {
      controls.start({ y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
    //   ref={ref}
    //   animate={controls}
      className=" h-[100vh]  sticky top-0 w-full bg-red-200 overflow-hidden"
    >
      <h1>Parent</h1>
      <p>Image will come here</p>
      <div className="relative h-full overflow-y-auto">
        <ChildComponent/>
      </div>
    </motion.div>
  );
};

export default ParentTestComponent;
