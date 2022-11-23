import React, { useState } from "react";
import cx from "clsx";

import Radio from "../Radio/Radio";

import { DefaultProps } from "../../../helpers/utils";

interface RadioGroupProps extends DefaultProps {
  label?: string;
  options: string[];
}

const RadioGroup = ({
  label,
  className,
  options,
  ...others
}: RadioGroupProps) => {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <div
      {...others}
      className={cx(
        "transition-all duration-100 focus:transition-none flex flex-col w-full",
        className
      )}
    >
      {label && (
        <label className="block mb-1 text-sm font-medium transition-all duration-100 text-primary_white-700 dark:text-primary_dark-700">
          {label}
        </label>
      )}
      <div className="flex gap-6 items-center h-full">
        {options.map((option, index) => {
          return (
            <Radio
              onClick={() => {
                setSelectedId(index);
              }}
              checked={selectedId === index}
              key={index}
              label={option}
              color={selectedId === index ? "text-secondary" : ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
