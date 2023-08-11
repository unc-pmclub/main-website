// Modified Image Carousel Component
// Link to Article being referenced: https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 1 },
    hiddenLeft: { x: "-100%", opacity: 1 },
    visible: {
      x: "0",
      opacity: 1,
      transition: { duration: 1 },
    },
    exitLeft: { x: "100%", opacity: 0, transition: { duration: 0.8 } },
    exitRight: { x: "-100%", opacity: 0, transition: { duration: 0.8 } },
  };

  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };

  const dotsVariants = {
    initial: { y: 0, scale: 1 },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="relative inline-flex flex-col w-full h-[640px] overflow-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit={direction === "right" ? "exitRight" : "exitLeft"}
            variants={slideVariants}
            className="absolute top-0 left-0 w-full h-full object-cover max-w-[640px] max-h-[640px]"
          />
        </AnimatePresence>
      </div>
      <div className="flex justify-between">
        <motion.div
          // Left Button (Previous)
          variants={slidersVariants}
          whileHover="hover"
          className="z-10 bg-[#fb666675] text-white absolute h-[25px] w-[25px] m-2.5 rounded-[50%] left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center"
          onClick={handlePrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
            className="ml-1.5"
          >
            <path
              d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"
              fill="#fff"
            />
          </svg>
        </motion.div>
        <motion.div
          // Right Button (Next)
          variants={slidersVariants}
          whileHover="hover"
          className="z-10 bg-[#fb666675] text-white absolute h-[25px] w-[25px] m-2.5 rounded-[50%] right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
            className="ml-1.5"
          >
            <path
              d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"
              fill="#fff"
            />
          </svg>
        </motion.div>
      </div>
      <div className="z-10 mt-5 flex justify-center gap-5">
        {images.map((_, index) => (
          <motion.div
            // Indicator dots
            key={index}
            className={`bg-[#fb666675] w-[15px] h-[15px] rounded-[50%] cursor-pointer ${
              currentIndex === index ? "bg-gray-200" : ""
            }`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : "initial"}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
