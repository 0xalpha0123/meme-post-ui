import React, { useMemo } from "react";

import DisabledItem from "./DisabledItem";
import { Option } from "./type";
import { useSelectContext } from "./SelectProvider";

// import {
//   COLORS,
//   DEFAULT_THEME,
//   THEME_DATA,
// } from "../../../constants/app/select";

interface ItemProps {
  item: Option;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { value, handleValueChange } = useSelectContext();

  const isSelected = useMemo(() => {
    return (
      value !== null && !Array.isArray(value) && value.value === item.value
    );
  }, [item.value, value]);

  // const textHoverColor = useMemo(() => {
  //   // @ts-ignore
  //   return COLORS.includes(primaryColor)
  //     ? THEME_DATA.textHover[primaryColor]
  //     : THEME_DATA.textHover[DEFAULT_THEME];
  // }, [primaryColor]);

  // const bgColor = useMemo(() => {
  //   // @ts-ignore
  //   return COLORS.includes(primaryColor)
  //     ? THEME_DATA.bg[primaryColor]
  //     : THEME_DATA.bg[DEFAULT_THEME];
  // }, [primaryColor]);

  // const bgHoverColor = useMemo(() => {
  //   // @ts-ignore
  //   return COLORS.includes(primaryColor)
  //     ? THEME_DATA.bgHover[primaryColor]
  //     : THEME_DATA.bgHover[DEFAULT_THEME];
  // }, [primaryColor]);

  return (
    <>
      {item.disabled ? (
        <DisabledItem>{item.label}</DisabledItem>
      ) : (
        <li
          aria-selected={isSelected}
          role={"option"}
          onClick={() => handleValueChange(item)}
          className={`block transition duration-100 px-2 py-2 cursor-pointer select-none truncate rounded ${
            isSelected
              ? `text-primary_white-800 dark:text-primary_dark-800 hover:text-primary_white-1000 dark:hover:text-primary_dark-1000 hover:bg-primary_white-200 dark:hover:bg-primary_dark-200`
              : `text-primary_white-500 dark:text-primary_dark-500 hover:text-primary_white-1000 dark:hover:text-primary_dark-1000 hover:bg-primary_white-200 dark:hover:bg-primary_dark-200`
          }`}
        >
          {item.label}
        </li>
      )}
    </>
  );
};

export default Item;
