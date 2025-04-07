import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

const OurOfferings = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="h-screen relative w-full overflow-y-scroll snap-y snap-mandatory"
      >
        {/* Page 1 */}
        <div className="w-full h-screen flex items-center justify-center snap-start relative overflow-hidden">
          <Page1 />
        </div>

        {/* Page 2 */}
        <div className="w-full h-screen flex items-center justify-center snap-start relative overflow-hidden">
          <Page2 />
        </div>

        {/* Page 3 */}
        <div className="w-full h-screen flex items-center justify-center snap-start relative overflow-hidden">
          <Page3 />
        </div>
      </div>

      {/* Page 4 - Placed at the highest level with higher z-index */}
      <Page4 />
    </div>
  );
};

export default OurOfferings;
