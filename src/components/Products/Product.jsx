import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import box from "/About/box.svg";
import products from "../Products/productData.js";
import Explore from "./Explore.jsx";

function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(products[0].images[0]);
  const [activeImage, setActiveImage] = useState(products[0].images[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [direction, setDirection] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7, once: true });

  useEffect(() => {
    setMainImage(products[currentIndex].images[0]);
    setActiveImage(products[currentIndex].images[0]);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHover = (newImage) => {
    setTimeout(() => {
      setMainImage(newImage);
      setActiveImage(newImage);
    }, 150); // Smooth transition delay
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const mobileVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
    }),
    transition: {
      duration: 0.5,
    },
  };

  const desktopVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
    }),
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  };

  return (
    <div className="bg-white mt-10 ml-8 font-[SF Pro Display]">
      <header className="flex justify-center items-center text-5xl ">
        <h1 className="font-[SF Pro Display] font-[275] uppercase tracking-wider">
          OUR PRODUCTS
        </h1>
      </header>

      <main className="mx-auto  px-4 md:px-8 py-3 relative">
        {/* Navigation Buttons */}
        {isMobile ? (
          // Mobile Layout
          <>
            <div className="absolute flex gap-4 transform -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full shadow-md hover:bg-gray-300 transition"
              >
                <FaChevronLeft size={10} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full shadow-md hover:bg-gray-300 transition"
              >
                <FaChevronRight size={10} />
              </button>
            </div>

            <motion.div
              key={currentIndex}
              custom={direction}
              variants={mobileVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition="transition"
              className="flex flex-col items-center text-center"
            >
              <motion.img
                key={mainImage}
                src={mainImage}
                alt="product"
                className="max-h-[200px] rounded-md mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <div className="flex flex-row gap-4 mt-4">
                {products[currentIndex].images.map((image) => (
                  <motion.div
                    key={image}
                    className={`relative w-16 h-16 rounded-md overflow-hidden cursor-pointer flex items-center justify-center ${
                      activeImage === image ? "border border-[#E6AF2E]" : ""
                    }`}
                    onMouseEnter={() => handleHover(image)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={image}
                      alt="product"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>

              <h2 className="text-2xl mt-10 font-[SF Pro Display] font-[300] text-[#173669] mb-4">
                {products[currentIndex].name}
              </h2>
              <p className="text-[#525B68] text-base font-[SF Pro Display] font-[300] leading-6 mb-6">
                {products[currentIndex].description}
              </p>
              <button className="flex relative font-[SF Pro Display] mt-4 items-center text-sm cursor-pointer">
                <img src={box} alt="" className="absolute" />
                <span className="ml-8 mr-8 text-[#525B68]">Explore us</span>
              </button>
            </motion.div>
          </>
        ) : (
          // Desktop Layout
          <>
            <div className="grid grid-cols-2 -mt-20 justify-center items-center">
              <motion.div
                ref={ref}
                key={currentIndex}
                custom={direction}
                variants={desktopVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                exit="exit"
                className="relative   flex justify-center"
              >
                <motion.img
                  key={mainImage}
                  src={mainImage}
                  alt="product"
                  className="max-h-[80vh] max-w-[80vw] "
                  initial={{ opacity: 0,x:-10 }}
                  animate={{ opacity: 1,x:0}}
                  exit={{ opacity: 0}}
                  transition={{
                    type: "tween",
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  layout
                />
                <div className="flex flex-row gap-4 bottom-0 items-center absolute">
                  {products[currentIndex].images.map((image) => {
                    const isActive = activeImage === image;

                    return (
                      <motion.div
                        key={image}
                        className={`relative w-20 h-20 overflow-hidden cursor-pointer flex items-center justify-center duration-300 ${
                          isActive
                            ? "border-b-2 border-[#E6AF2E]"
                            : "hover:border-b-2 hover:border-[#E6AF2E]"
                        }`}
                        onClick={() => handleHover(image)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <motion.img
                          src={image}
                          alt="product"
                          className="absolute inset-0 w-full h-full object-contain"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Product Details */}
              <div className=" relative">
                <motion.div
                  className=" w-[20vw] h-[30vh] "
                  key={`details-${currentIndex}`}
                  variants={{
                    initial: (direction) => ({
                      x: direction > 0 ? 100 : -100,
                      opacity: 0,
                    }),
                    animate: { x: 0, opacity: 1 },

                    exit: (direction) => ({
                      x: direction < 0 ? 100 : -100,
                      opacity: 0,
                    }),
                  }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={direction}
                  transition={{
                    type: "spring",
                    damping: 10,
                    duration: 0.6,
                    stiffness: 50,
                  }}
                >
                  <h2 className="text-3xl font-[SF Pro Display] font-[300] text-[#173669] mb-4">
                    {products[currentIndex].name}
                  </h2>
                  <p className="text-[#525B68] text-base font-[SF Pro Display] font-[300] leading-6 mb-6">
                    {products[currentIndex].description
                      .split(" ")
                      .map((word, index) =>
                        (index + 1) % 10 === 0 ? (
                          <React.Fragment key={index}>
                            {word}
                            <br />
                          </React.Fragment>
                        ) : (
                          word + " "
                        )
                      )}
                  </p>

                  <Explore
                    strokeColor="#4E9E52"
                    circleColor="#4E9E52"
                    textColor="#525B68"
                    text="Explore us"
                  />
                </motion.div>

                {/* Navigation Buttons - Static (Outside the animated div) */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={handlePrev}
                    className="p-3 cursor-pointer rounded-full shadow-md hover:bg-gray-300 transition"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 cursor-pointer rounded-full shadow-md hover:bg-gray-300 transition"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </div>

                {/* Horizontal List of Products */}
                <div className="mt-10 ml-2  overflow-x-auto">
                  <h1 className=" font-[SF Pro Display] ml-4 font-medium">Choose your product</h1>
                  <ul className="flex gap-4 whitespace-nowrap">
                    {products.map((product, index) => (
                      <li
                        key={product.name}
                        className={`cursor-pointer px-4 py-2 rounded-md text-sm ${
                          index === currentIndex
                            ? " text-white font-medium"
                            : "text-[#173669] hover:bg-gray-100"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-20 h-full object-cover"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Product;
