import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import logo from "/Header/Logo.png";
import talktoExpert from "/Header/talktoExpert.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollThreshold = 100;
  const mobileBreakpoint = 768;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < mobileBreakpoint;

      if (!isMobile) {
        if (currentScrollY > scrollThreshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(false);
      }

      const progress = Math.min(
        1,
        Math.max(0, currentScrollY / scrollThreshold)
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollThreshold]);

  return (
    <div className="">
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 40 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <motion.div
          style={{
            padding: `1rem ${scrollProgress * 4}rem`,
          }}
          className="flex justify-between items-center w-full"
        >
          {/* LOGO */}
          <motion.div
            style={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col pl-10 cursor-pointer items-center ${
              isScrolled ? "hidden " : "block"
            }`}
          >
            <img src={logo} alt="Ekkaa Logo" className="w-[60px] mt-4" />
          </motion.div>

          {/* NAVIGATION */}
          <Navigation isScrolled={isScrolled} scrollProgress={scrollProgress} />

          {/* TALK TO EXPERT */}
          <motion.div
            style={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.3 }}
            className={`${isScrolled ? "hidden" : "block"}`}
          >
            <button className="hidden sm:flex relative pr-12 items-center px-5 py-2.5 text-base cursor-pointer sm:mr-0 mr-4">
              <img src={talktoExpert} alt="" className="absolute" />
              <span className="ml-5 text-white">Talk to expert</span>
            </button>
          </motion.div>
        </motion.div>
      </motion.header>
    </div>
  );
};

export default Header;
