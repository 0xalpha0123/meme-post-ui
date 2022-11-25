import React, { ReactNode } from "react";
import cx from "clsx";

const getClass = (position: string) => {
  if (position === "top") return " bottom-full left-1/2 mb-3 -translate-x-1/2";
  else if (position === "right")
    return "left-full top-1/2 ml-3 -translate-y-1/2";
  else if (position === "left")
    return "right-full top-1/2 mr-3 -translate-y-1/2";
  else return "top-full left-1/2 mt-3 -translate-x-1/2";
};

const getArrowClass = (position: string) => {
  if (position === "top") return "bottom-[-3px] left-1/2 -translate-x-1/2";
  else if (position === "right") return "left-[-3px] top-1/2 -translate-y-1/2";
  else if (position === "left") return "right-[-3px] top-1/2 -translate-y-1/2";
  else return "top-[-3px] left-1/2 -translate-x-1/2";
};

const Tooltip = ({
  children,
  tooltipText,
  position = "top",
}: {
  children: ReactNode;
  tooltipText: ReactNode;
  position?: string;
}) => {
  return (
    <div className="group relative inline-block">
      {children}
      <div
        className={cx(
          "absolute whitespace-nowrap rounded bg-black dark:bg-white py-[6px] px-4 text-sm font-semibold text-white dark:text-black opacity-0 hidden group-hover:block group-hover:opacity-100 z-20",
          getClass(position)
        )}
      >
        <span
          className={cx(
            "absolute rotate-45 rounded-sm bg-black dark:bg-white -z-10 h-2 w-2",
            getArrowClass(position)
          )}
        ></span>
        {tooltipText}
      </div>
    </div>
  );
};

export default Tooltip;
