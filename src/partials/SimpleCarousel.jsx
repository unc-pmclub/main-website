// Modified from: https://github.com/leandrowd/react-responsive-carousel

// TODO:
// - Horizontally center carousel in container

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleCarousel({ images }) {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImages = (images) => {
    return images.map((image, index) => (
      <div key={index} className="relative max-h-[480px] max-w-[480px]">
        <img
          src={image}
          alt={`image-${index}`}
          className="object-cover w-full h-full rounded"
        />
      </div>
    ));
  };

  return (
    <div className="relative flex flex-col max-w-480px] h-[550px] overflow-hidden content-center justify-center">
      <Slider {...settings}>{handleImages(images)}</Slider>
      {/* <div className="text-gray-500 justify-center inline-flex mt-6">
        (Swipe Left or Right!)
      </div> */}
    </div>
  );
}
