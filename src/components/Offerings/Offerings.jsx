import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const videos = [
  "./Offerings/slide1/Screen 01.webm",
  "./Offerings/slide2/Screen 02.webm",
  "./Offerings/slide3/Screen 03.webm",
];

const ell = [
  "./Offerings/slide1/ellipse.png",
  "./Offerings/slide2/ellipse.png",
  "./Offerings/slide3/ellipse.png",
];

const title = [
  "Experience Brilliance in every pixel",
  "Innovating Entertainment One Screen at a time",
  "Immersive Visuals, Unmatched Brilliance",
];

const description = [
  "As a leading OEM, EKKAA offers a wide array of consumer electronics and appliances from high-performance LED TVs and smart displays to a variety of cutting-edge solutions, all designed to deliver superior performance and an enhanced user experience.",
  "As a leading OEM, EKKAA offers a wide array of consumer electronics and appliances, from high-performance LED TVs and smart displays to a variety of cutting-edge solutions, all designed to deliver superior performance and an enhanced user experience.",
  "As a leading OEM, EKKAA offers a wide array of consumer electronics and appliances, from high-performance LED TVs and smart displays to a variety of cutting-edge solutions, all designed to deliver superior performance and an enhanced user experience.",
];

const titleColorStart = ["from-[#C1F0A2]", "from-[#EA4865]", "from-[#4E9E52]"];
const titleColorEnd = ["to-[#E2F9EF]", "to-[#E2F9EF]", "to-[#E2F9EF]"];

export default function Offerings() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const { ref: trigger1Ref, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: trigger2Ref, inView: inView2 } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView2) {
      setCurrentVideo(2);
    } else if (inView1) {
      setCurrentVideo(1);
    } else {
      setCurrentVideo(0);
    }
  }, [inView1, inView2]);

  return (
    <div className="relative w-full h-[400vh] hidden md:block">
      {/* This is the section-scoped sticky video */}
      <div className="sticky top-0 h-screen w-full z-0">
        <video
          src="./Offerings/BG.webm"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foreground content scrolls over it */}
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="sticky top-18 h-[calc(100vh-70px)] flex flex-col justify-between items-center  to-white z-10 text-white text-center px-4 py-6 overflow-hidden">
          <h1 className="relative z-30 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[SF Pro Display] font-[275] text-white mb-4">
            OUR OFFERINGS
          </h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={`desc-${currentVideo}`}
              className="font-[SF Pro Display] font-[500] text-balance px-4 text-[11px] sm:text-sm md:text-base lg:text-lg max-w-[90%] sm:max-w-[80%] md:max-w-[700px] lg:max-w-[850px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {description[currentVideo]}
            </motion.div>
          </AnimatePresence>

          {/* TV Mockup */}
          <div className="relative w-full max-w-[900px] mx-auto aspect-[16/10] mt-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={`ellipse-${currentVideo}`}
                src={ell[currentVideo]}
                alt="Ellipse"
                className="absolute top-1/2 left-1/2 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>

            <img
              src="./Offerings/tvbg.png"
              alt="TV Mockup"
              className="w-full h-full object-contain z-10 relative"
            />

            <div
              className="absolute z-20"
              style={{
                top: "6%",
                left: "5.5%",
                width: "89%",
                height: "81%",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.video
                  key={`video-${currentVideo}`}
                  src={videos[currentVideo]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${currentVideo}`}
              className="w-[4xl] mb-10 font-[SF Pro Display] font-[600] text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className={`mb-4 bg-gradient-to-r ${titleColorStart[currentVideo]} ${titleColorEnd[currentVideo]} bg-clip-text text-transparent`}
              >
                {title[currentVideo]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll triggers */}
        <div className="h-screen" />
        <div className="h-screen" ref={trigger1Ref} />
        <div className="h-screen" ref={trigger2Ref} />
      </div>
    </div>
  );
}
