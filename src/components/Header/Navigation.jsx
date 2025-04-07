// Navigation.js
import React, { useState, useRef, useEffect } from "react";
import searchIcon from "/Header/searchIcon.png";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "/Header/logo.svg";
import talktoExpert from "/Header/talk.png";

const Navigation = ({ isScrolled }) => {
  const navItems = [
    "About Ekkaa",
    "Our Offerings",
    "Products",
    "Services",
    "Why Choose Us?",
    "Contact Us",
  ];

  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setSearchVisible(false);
  };

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setSearchVisible(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "12em",
      height: "1.5rem",
      opacity: 1,
      right: 0,
    },
  };

  const mobileNavVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { type: "spring", stiffness: 50 },
      pointerEvents: "none",
    },
  };

  return (
    <div className="rounded-2xl text-black text-sm">
      {/* Desktop Navigation */}
      <motion.div
        className={`
          ${
            isScrolled
              ? "w-full flex justify-center fixed top-0 bg-white items-center pt-2 h-18 gap-6 pb-4 font-[SF Pro Display] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.3rem] left-0"
              : "flex items-center gap-6 md:gap-8 lg:gap-10 pb-2 bg-white w-full md:w-[60rem] pl-6 md:pl-10 pt-2 text-black h-12 font-[SF Pro Display] font-[400] max-md:hidden"
          }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        layout
      >
        {isScrolled && (
          <img
            src={logo}
            alt="Logo"
            className="h-18 w-auto cursor-pointer pt-3 ml-4 sm:ml-8"
          />
        )}

        <nav
          className={`flex flex-wrap gap-4 sm:gap-6 md:gap-8 font-[SF Pro Display] font-[400] ${
            isScrolled ? "text-black mt-2 w-full justify-center" : ""
          }`}
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer text-sm sm:text-base md:text-lg"
            >
              {item}
            </div>
          ))}
        </nav>

        <motion.div
          className={`flex gap-4 sm:gap-6 md:gap-8 font-[SF Pro Display] font-[400] ${
            isScrolled
              ? "relative cursor-pointer mr-4 md:mr-8 h-6 w-6"
              : "relative cursor-pointer ml-4 md:ml-8 h-6 w-6"
          }`}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={searchIcon}
            alt="Search"
            className="h-full w-full object-contain"
            onClick={toggleSearch}
          />
          <AnimatePresence>
            {isSearchVisible && (
              <motion.div ref={searchContainerRef}>
                <motion.input
                  key="search-input"
                  type="text"
                  placeholder="Search..."
                  className={`bg-gray-300 rounded-md focus:outline-none absolute top-0 ${
                    isScrolled ? "right-0 h-14 w-14" : "left-0 h-12"
                  }`}
                  variants={searchVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  ref={searchInputRef}
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {isScrolled && (
          <button className="mr-4 md:mr-10 cursor-pointer">
            <img src={talktoExpert} alt="Talk to Expert" className="h-12 w-40 sm:w-44" />
          </button>
        )}
      </motion.div>

      {/* Mobile Navigation */}
      <div className="max-md:flex items-center justify-end p-4 hidden fixed top-0 right-0 rounded-4xl shadow-md z-50 bg-white">
        <div className="flex items-center gap-4">
          <motion.div
            onClick={toggleSearch}
            className="cursor-pointer h-5 w-5 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            ref={searchContainerRef}
          >
            <img
              src={searchIcon}
              alt="Search"
              className="h-full w-full object-contain"
            />
            <AnimatePresence>
              {isSearchVisible && (
                <motion.input
                  key="search-input"
                  type="text"
                  placeholder="Search..."
                  className="bg-white rounded-md focus:outline-none absolute top-0 right-0 h-full w-24"
                  variants={searchVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  ref={searchInputRef}
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </AnimatePresence>
          </motion.div>
          <button onClick={toggleMobileMenu} className="text-xl text-black">
            {isMobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        <motion.div
          ref={mobileMenuRef}
          className="absolute top-12 right-4 w-48 bg-white rounded-2xl shadow-md overflow-hidden z-40"
          variants={mobileNavVariants}
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
        >
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer py-2 text-sm sm:text-base"
              >
                {item}
              </div>
            ))}
          </nav>
        </motion.div>
      </div>
    </div>
  );
};

export default Navigation;
