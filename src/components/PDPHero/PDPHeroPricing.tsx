import React, { FC, useState } from "react";
import { PRICING } from "@/components/PDPHero/mockData";

type tPDPHeroPricingProps = {
  onSelectCallback: (id: number) => void;
  className?: string;
};

export const PDPHeroPricing: FC<tPDPHeroPricingProps> = ({
  onSelectCallback,
  className,
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
    <div className={`flex flex-col w-[325px] gap-4 ${className}`}>
      {PRICING.map((item) => {
        const isSelected = item.id === selectedProduct;
        return (
          <button
            key={item.id}
            onClick={() => selectProduct(item.id)}
            className={`
              block w-full p-4 rounded-xl text-left transition-all border-2
              ${
                isSelected
                  ? "border-[#F0B377] bg-[#F0B377]/20"
                  : "border-transparent bg-[#EBE6E0]"
              }
              text-black
            `}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs uppercase tracking-wide">
                {item.label}
              </span>
              {item.badge && (
                <span className="bg-[#F0B377] px-[6px] py-[3px] rounded-sm text-[10px] font-bold">
                  {item.badge}
                </span>
              )}
            </div>

            <div className="flex justify-between items-end">
              <span className="text-lg font-medium">{item.product}</span>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold">{item.price}</span>
                {item.originalPrice && (
                  <span className="text-xs line-through text-[#291928]">
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
                    <li key={j} className="text-sm list-none">
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
