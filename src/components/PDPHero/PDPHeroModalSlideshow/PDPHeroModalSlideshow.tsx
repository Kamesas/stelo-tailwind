import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Slide, SLIDES } from "../mockData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./PDPHeroModalSlideshow.module.css";

export type tPDPHeroModalSlideshowProps = {
  activeSlide: number;
  slides: Array<Slide>;
  onClose: () => void;
};

export const PDPHeroModalSlideshow: FC<tPDPHeroModalSlideshowProps> = ({
  slides,
  activeSlide,
  onClose,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: false,
    // arrows: true,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_current: number, next: number) => setSlideIndex(next),
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    adaptiveHeight: false,
  };

  useEffect(() => {
    setSlideIndex(activeSlide);
    sliderRef.current?.slickGoTo(activeSlide);
  }, [activeSlide]);

  return (
    <div
      className={`${styles.PDPHeroModalSlideshow} h-[100vh] w-full fixed left-[0] top-[0] z-10 bg-white-200`}
    >
      <button
        className="rounded-full w-[48] h-[48] bg-plum-100 absolute top-12 right-12 z-10 cursor-pointer text-white-100"
        onClick={onClose}
      >
        X
      </button>
      <Slider
        {...settings}
        className="mx-12 py-12"
        ref={(slider) => {
          sliderRef.current = slider;
        }}
      >
        {slides.map(({ src, id, alt }) => (
          <div key={id} className="h-full outline-none">
            <Image
              src={src}
              alt={alt}
              height={800}
              width={1440}
              className="h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      <div className="flex gap-2 pointer-events-auto ml-12 mb-12 items-center">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => sliderRef.current?.slickGoTo(i)}
            className={`
                relative h-11 w-11 rounded-[4px] border-2 transition-all
                ${activeSlide === i ? "border-orange-100" : "border-transparent"}
              `}
          >
            <Image
              src={slide.src}
              width={44}
              height={44}
              alt={slide.alt}
              className="h-full w-full object-cover rounded-[4px]"
            />
          </button>
        ))}
        <span className="type-meta-footer ">
          {slideIndex + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
};

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} p-2! w-auto! h-auto! bg-red! before:content-[""]! type-body-2! text-white-100! `}
      onClick={onClick}
    >
      Next arrow
    </button>
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} p-2! w-auto! h-auto! bg-pine! before:content-[""]! type-body-2! text-white-100! z-10`}
      onClick={onClick}
    >
      Prev Error
    </button>
  );
}
