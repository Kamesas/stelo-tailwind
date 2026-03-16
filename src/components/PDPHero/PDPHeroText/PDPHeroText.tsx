import React, { FC } from "react";

type tPDPHeroTextProps = {
  title: string;
  text: string;
  text2: string;
  className?: string;
};

export const PDPHeroText: FC<tPDPHeroTextProps> = ({
  title,
  text,
  text2,
  className,
}) => {
  return (
    <div className={`PDPHeroText ${className}`}>
      <h1 className="mb-2 type-h3 text-inherit transition-[color] duration-500">
        {title}
      </h1>
      <p className="type-body-1 mb-4 text-inherit">{text}</p>
      <div className="flex items-center">
        <span className="text-tomato mr-3 inline-flex items-center justify-center text-inherit">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="w-[20] h-[20]"
          >
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M5 8l2 2 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="type-body-2 text-inherit">{text2}</span>
      </div>
    </div>
  );
};
