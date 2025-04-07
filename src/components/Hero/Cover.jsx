import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgc from "/Hero/bg.png";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function PortalScroll() {
  const text = "Bridging Technology, Empowering Brands";

  const wrapperRef = useRef();
  const headingRef = useRef();
  const tvRef = useRef();
  const innerWorldRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tvEl = tvRef.current;

      // Dynamically calculate scale & position
      const rect = tvEl.getBoundingClientRect();
      const scaleX = window.innerWidth / rect.width;
      const scaleY = window.innerHeight / rect.height;
      const scale = Math.max(scaleX, scaleY); // Use whichever fills the screen more

      const x = window.innerWidth / 2 - (rect.left + rect.width / 2);
      const y = window.innerHeight / 2 - (rect.top + rect.height / 2);

      const zoomTL = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
        },
      });

      zoomTL
        .to(
          headingRef.current,
          {
            opacity: 0,
            y: -100,
            duration: 1,
            ease: "power2.out",
          },
          0
        )
        .to(
          tvEl,
          {
            scale: scale,
            x: x,
            y: y,
            ease: "power2.inOut",
            duration: 1,
          },
          0
        );

      ScrollTrigger.create({
        trigger: innerWorldRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#1a1f3b]">
      <img src={bgc} alt="" className="absolute z-1 w-[100vw] h-[250vh]" />
      {/* Phase 1: Initial View */}
      <section
        ref={wrapperRef}
        className="h-screen z-2 text-white flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-16 relative bg-gradient-to-tl overflow-hidden"
      >
        {/* Heading Left */}
        <div ref={headingRef} className=" w-[40vw]">
          <motion.h1
            className="text-[6vh] leading-tight font-[Poppins] font-extralight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* First line */}
            <div className="block">
              {"Bridging Technology,".split("").map((char, index) =>
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
                    className="inline-block bg-gradient-to-r from-[#C1F0A2] to-[#E2F9EF] text-transparent bg-clip-text"
                  >
                    {char}
                  </motion.span>
                )
              )}
            </div>

            {/* Second line */}
            <div className="block">
              {"Empowering Brands".split("").map((char, index) =>
                char === " " ? (
                  <span key={index + 100}>&nbsp;</span>
                ) : (
                  <motion.span
                    key={index + 100}
                    initial={{ opacity: 0, rotateY: 100 }}
                    animate={{
                      opacity: 1,
                      rotateY: 0,
                      transition: { delay: (index + 18) * 0.02, duration: 2 },
                    }}
                    className="inline-block bg-gradient-to-r from-[#C1F0A2] to-[#E2F9EF] text-transparent bg-clip-text"
                  >
                    {char}
                  </motion.span>
                )
              )}
            </div>
          </motion.h1>

          {/* Paragraph with line break every 10 words */}
          <motion.div
            className="text-[1.5vh]"
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
                className="leading-7 mt-6 font-[poppins] font-extralight text-[#FFFFFF]"
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
                blends advanced technology with world-class R&D to deliver
                seamless, turnkey solutions designed to elevate lifestyle and
                transform everyday living, globally.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* TV Right */}
        <div
          ref={tvRef}
          className="w-[40vw] h-[50vh]  aspect-video overflow-hidden shadow-2xl relative"
        >
          <video
            src="./Hero/HeroVid.webm"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
