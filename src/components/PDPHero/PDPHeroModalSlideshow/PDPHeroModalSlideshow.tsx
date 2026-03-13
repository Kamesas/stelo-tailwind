import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Slide, SLIDES } from "../mockData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./PDPHeroModalSlideshow.module.css";

export type tPDPHeroModalSlideshowProps = {
  activeSlide: number;
  slides: Array<Slide>;
};

export const PDPHeroModalSlideshow: FC<tPDPHeroModalSlideshowProps> = ({
  slides,
  activeSlide,
}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // TODO finish styling
    <div className="h-100vh w-full fixed l-[0] t-[0]">
      <div className={`w-full h-full mx-auto ${styles.mobileSwapSlider}`}>
        <Slider {...settings}>
          {SLIDES.map(({ src, id, alt }) => (
            <div key={id} className="h-full mx-2 outline-none aspect-[5/7] ">
              <Image
                src={src}
                alt={alt}
                fill
                className={`${styles.mobileSliderImage} rounded-lg object-cover`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-8 flex gap-2 pointer-events-auto">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => sliderRef.current?.slickGoTo(i)}
            className={`
                        relative h-11 w-11 overflow-hidden rounded-[4px] border-2 transition-all
                        ${activeSlide === i ? "border-red-600" : "border-transparent"}
                      `}
          >
            <Image
              src={slide.src}
              width={44}
              height={44}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
