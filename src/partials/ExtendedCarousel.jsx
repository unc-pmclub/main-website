// From: https://react-slick.neostack.com/

// TODO:
//  - Change implementation to extended version of Carousel

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";

function ExtendedCarousel({ images, imagesVisible = 4 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);

  const handleAnimation = (isAnimating) => {
    setAnimating(isAnimating);
  };

  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
    exitLeft: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    exitRight: {
      x: "-30%",
      opacity: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    handleAnimation(true);
    const timer = setTimeout(() => handleAnimation(false), 800);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (animating) return;
    setDirection("right");
    if (currentIndex + 1 < Math.ceil(images.length / imagesVisible)) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevious = () => {
    if (animating) return;
    setDirection("left");
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(Math.ceil(images.length / imagesVisible) - 1);
    }
  };

  const handleDotClick = (index) => {
    if (animating) return;
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const displayImages = (startIndex) => {
    const endIndex = startIndex + imagesVisible;
    return images
      .slice(startIndex, endIndex)
      .map((imgSrc, index) => (
        <motion.img
          key={index}
          src={imgSrc}
          className="mx-2.5 max-h-50 max-w-[180px]"
        />
      ));
  };

  const totalDots = Math.ceil(images.length / imagesVisible);

  return (
    <div className="relative max-w-sm md:max-w-4xl mx-auto flex flex-col items-center gap-4">
      <div className="relative w-full flex items-center justify-center p-2">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit={direction === "right" ? "exitRight" : "exitLeft"}
            variants={slideVariants}
            className="flex justify-center items-center min-h-[90px]"
          >
            {displayImages(currentIndex * imagesVisible)}
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent z-10 pointer-events-none" />
        <div className="flex justify-between align-middle">
          {/* Left Navigation Button (Previous) */}
          <motion.div
            whileHover={{ scale: 1.2, backgroundColor: "#ff00008e" }}
            className="z-20 bg-red-500 opacity-60 text-white absolute h-6 w-6 ml-[-8.75] rounded-full left-0 top-1/2 origin-center flex items-center justify-center cursor-pointer"
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
          {/* Right Navigation Button (Next) */}
          <motion.div
            whileHover={{ scale: 1.2, backgroundColor: "#ff00008e" }}
            className="z-20 bg-red-500 opacity-60 text-white absolute h-6 w-6 mr-[-8.75] rounded-full right-0 top-1/2 origin-center flex items-center justify-center cursor-pointer"
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
      </div>
      <div className="flex items-center gap-3 mt-4">
        {Array(totalDots)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className={`h-2 w-2 bg-gray-300 cursor-pointer rounded-full ${
                currentIndex === index ? "bg-red-500" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></motion.div>
          ))}
      </div>
    </div>
  );
}

export default ExtendedCarousel;
