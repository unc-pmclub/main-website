// Modified from: https://github.com/leandrowd/react-responsive-carousel

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MultipleCarousel({ images }) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    // autoplay: false,
    // autoplaySpeed: 50,
    // cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 4,
    // pauseOnHover: true,
    // pauseOnDotsHover: true,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const handleImages = (images) => {
    return images.map((image) => (
      <div key={image.name} className="flex justify-center items-center p-2">
        <img
          src={image.path}
          alt={`${image.name} Logo`}
          className="mx-auto max-h-50 max-w-[180px]"
        />
      </div>
    ));
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center p-2">
      <div className="w-full">
        <Slider {...settings}>{handleImages(images)}</Slider>
      </div>
    </div>
  );
}
