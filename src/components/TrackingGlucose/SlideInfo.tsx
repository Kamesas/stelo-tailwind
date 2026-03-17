import { tSlideMetric } from "./slides";

type SlideInfoProps = {
  metric: tSlideMetric;
};

export const SlideInfo = ({ metric }: SlideInfoProps) => {
  return (
    <div className="flex items-center justify-between gap-[52px]">
      <div className="flex items-start gap-1.5">
        <span className="font-pastiche text-[51px] leading-none text-white-200">
          {metric.value}
        </span>
        <span className="font-pastiche text-[12px] text-white-200">
          {metric.unit}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-pastiche text-s-18 whitespace-pre-line text-white-200">
          {metric.label}
        </span>

        <svg
          width="17"
          height="16"
          viewBox="0 0 19 18"
          fill="none"
          className="text-white-200"
          aria-hidden="true"
        >
          <path
            d="M9.12291 0.878464L17.2392 8.9948L9.1229 17.1111"
            stroke="currentColor"
            strokeWidth="2.458"
          />
          <path
            d="M17.2382 9.08933L0 9.08933"
            stroke="currentColor"
            strokeWidth="2.458"
          />
        </svg>
      </div>
    </div>
  );
};
