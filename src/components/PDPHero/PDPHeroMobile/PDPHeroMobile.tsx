"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import { SLIDES } from "../mockData";
import { PDPHeroText } from "@/components/PDPHero/PDPHeroText/PDPHeroText";
import { PDPHeroPricing } from "@/components/PDPHero/PDPHeroPricing";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./PDPHeroMobile.module.css";

export const PDPHeroMobile = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  function selectProduct(id: number) {
    console.log("%c - ITEM ID -", "color: lime; font-size: 20px;", id);
    setSelectedProduct(id);
  }

  return (
    <>
      <div className={`w-full max-w-[480] mx-auto ${styles.mobileSwapSlider}`}>
        <Slider {...settings}>
          {SLIDES.map(({ src, id, alt }) => (
            <div key={id} className="h-[490px] mx-2 outline-none aspect-[5/7] ">
              <Image
                src={src}
                alt={alt}
                width={350}
                height={490}
                className={`${styles.mobileSliderImage} rounded-lg object-cover`}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-6 px-4">
        <PDPHeroText
          title="Stelo Glucose Biosensor"
          text="Stelo tracks your glucose with a small arm sensor, showing your trends with the app."
          text2="HSA/FSA eligible"
        />
        <PDPHeroPricing
          onSelectCallback={setSelectedProduct}
          className="mx-auto mt-6"
        />
      </div>
    </>
  );
};
