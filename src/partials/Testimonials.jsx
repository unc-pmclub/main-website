import React from "react";

import TestimonialImage from "../images/testimonial.jpg";
import Seventeen89 from "../images/1789_logo.png";
import UncCS from "../images/unc_cs.jpg";
import Sp0t from "../images/sp01.png";
import ExstoBio from "../images/exstobio.png";
import GameFlo from "../images/gameflo-logo.png";
import ReflektMe from "../images/ReflektMe_logo.png";
import CulTRUE from "../images/CulTRUE_logo.png";
import Protopia from "../images/protopia_logo.png";
import Liine from "../images/liine_logo.png";
import Subbed from "../images/subbed-logo.png";
import MultipleCarousel from "./MultipleCarousel";

function Testimonials() {
  const images = [
    {name: 'sp0t', path: Sp0t},
    {name: 'ExstoBio', path: ExstoBio},
    {name: 'UNC CS', path: UncCS},
    {name: '1789', path: Seventeen89},
    {name: 'GameFlo', path: GameFlo},
    {name: 'ReflektMe', path: ReflektMe},
    {name: 'CulTRUE', path: CulTRUE},
    {name: 'Protopia', path: Protopia},
    {name: 'Liine', path: Liine},
    {name: 'Subbed', path: Subbed}
  ];

  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EE4446" offset="77.402%" />
              <stop stopColor="#FFC9C9" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2">Special thanks to our partners!</h2>
          </div>

          {/* Items */}
          <MultipleCarousel images={images} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
