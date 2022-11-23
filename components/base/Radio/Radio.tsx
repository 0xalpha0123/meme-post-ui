import React from "react";
import cx from "clsx";

import { DefaultProps, useId } from "../../../helpers/utils";

interface RadioProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  id?: string;
  color?: string;
  label?: React.ReactNode;
  checked?: boolean;
}

function Radio({ id, color, label, checked = false, ...others }: RadioProps) {
  const uuid = useId(id);

  return (
    <div
      {...others}
      className="group inline-flex items-center space-x-1.5 cursor-pointer"
    >
      <span
        className={cx(
          "w-3 h-3 inline-block mr-1 border border-grey transition-all duration-200 group-hover:scale-110",
          checked ? "bg-secondary shadow-checkbox" : ""
        )}
      ></span>
      {label && (
        <label
          htmlFor={uuid}
          className={cx(
            "text-sm cursor-pointer transition-all duration-200",
            color ? color : "text-primary_white-600 dark:text-primary_dark-600"
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default Radio;
