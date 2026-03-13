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
    <div className={className}>
      <h1 className="text-5xl font-bold mb-2">{title}</h1>
      <p className="mb-4">{text}</p>
      <div className="flex items-center">
        <span className="text-tomato mr-3 inline-flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
        <span className="text-base">{text2}</span>
      </div>
    </div>
  );
};
