"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import { SLIDES } from "./mockData";
import { PDPHeroPricing } from "@/components/PDPHero/PDPHeroPricing";
import { PDPHeroText } from "@/components/PDPHero/PDPHeroText/PDPHeroText";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./PDPHero.module.css";
import { PDPHeroModalSlideshow } from "./PDPHeroModalSlideshow/PDPHeroModalSlideshow";

export const PDPHeroDesktop = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [showModalSlider, setShowModalSlider] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const [showSlideshow, setShowSlideshow] = useState(true);

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in",
    beforeChange: (_current: number, next: number) => setSlideIndex(next),
  };

  function openCartModal(id: number) {
    console.log("%c- OPEN CART MODAL -", "color: lime; font-size: 20px;");
  }

  return (
    <>
      <div className="relative h-[800px] w-full p-12 flex items-end justify-center">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <Slider
            {...settings}
            className={`${styles.slider} h-full w-full`}
            ref={(slider) => {
              sliderRef.current = slider;
            }}
          >
            {SLIDES.map((slide) => (
              <div
                key={slide.id}
                className="relative h-[800px] w-full"
                onClick={() => openCartModal(slide.id)}
              >
                <Image
                  src={slide.src}
                  fill
                  className="object-cover"
                  alt={slide.alt || "Product image"}
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="relative z-10 flex h-full w-full items-end justify-between pointer-events-none">
          <div className="max-w-[440px]">
            <PDPHeroText
              className="pointer-events-auto"
              title="Stelo Glucose Biosensor"
              text="Stelo tracks your glucose with a small arm sensor, showing your trends with the app."
              text2="HSA/FSA eligible"
            />

            <div className="mt-8 flex gap-2 pointer-events-auto">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => sliderRef.current?.slickGoTo(i)}
                  className={`
                  relative h-11 w-11 overflow-hidden rounded-[4px] border-2 transition-all
                  ${slideIndex === i ? "border-red-600" : "border-transparent"}
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

          <PDPHeroPricing
            onSelectCallback={setSelectedProduct}
            className="pointer-events-auto"
          />
        </div>
      </div>
      {showSlideshow && (
        <PDPHeroModalSlideshow activeSlide={slideIndex} slides={SLIDES} />
      )}
    </>
  );
};
