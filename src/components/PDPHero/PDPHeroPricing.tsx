import React, { FC, useState } from "react";
import { PRICING } from "@/components/PDPHero/mockData";
import styles from "./PDPHero.module.css";

type tPDPHeroPricingProps = {
  onSelectCallback: (id: number) => void;
  className?: string;
  glassDesign?: boolean;
};

export const PDPHeroPricing: FC<tPDPHeroPricingProps> = ({
  onSelectCallback,
  className,
  glassDesign,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(0);

  function selectProduct(id: number) {
    setSelectedProduct(id);
    onSelectCallback(id);
  }

  function openCartAlert() {
    console.log("%c- CART MODAL OPENS -", "color: lime; font-size: 20px;");
  }

  return (
    <div
      className={`PDPHeroPricing flex flex-col w-[325px] gap-4 ${className}`}
    >
      {PRICING.map((item) => {
        const isSelected = item.id === selectedProduct;
        return (
          <button
            key={item.id}
            onClick={() => selectProduct(item.id)}
            className={`
              ${glassDesign ? styles.glass : ""}
              block w-full p-4 rounded-xl text-left text-black transition-colors duration-500 ease-in-out
              ${
                isSelected && !glassDesign
                  ? "border-2 border-orange-100 bg-orange-100-33"
                  : "bg-white-300   border-2 border-transparent"
              }
              ${
                isSelected && glassDesign
                  ? "bg-white-200! text-shadow-plum-100 text-plum-100"
                  : "text-white-200"
              }
            `}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="type-meta-data font-medium uppercase tracking-wide">
                {item.label}
              </span>
              {item.badge && (
                <span className="bg-orange-100 text-plum-100 px-[6px] py-[3px] rounded-[3px] type-meta-data font-[600] font-bold">
                  {item.badge}
                </span>
              )}
            </div>

            <div className="flex justify-between items-end">
              <span className="type-body-1-md font-[400]">{item.product}</span>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold">{item.price}</span>
                {item.originalPrice && (
                  <span className="text-s-14 line-through text-[rgb(174,172,168)]">
                    {item.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {item.bullets && (
              <>
                <hr className="border-[#000] my-2 opacity-20" />
                <ul className="space-y-1">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="text-s-14 list-none">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </button>
        );
      })}

      <button
        onClick={openCartAlert}
        className="w-full p-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
      >
        Add to cart
      </button>
    </div>
  );
};
